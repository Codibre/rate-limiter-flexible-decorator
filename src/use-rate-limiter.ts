import { RateLimitException } from './rate-limit-exception';
import { createMethodDecorator, replaceMethod } from 'decorator-builder';
import { RateLimiterAbstract, RateLimiterRes } from 'rate-limiter-flexible';
import { DecorableRateLimiter } from './decorable-rate-limiter';

async function limitedCall(
	limiter: RateLimiterAbstract & DecorableRateLimiter<any>,
	args: any[],
) {
	try {
		return await limiter.consume(limiter.getKey(...args));
	} catch (err) {
		if (!(err instanceof RateLimiterRes)) {
			throw err;
		}
		if (limiter.catch) {
			return limiter.catch(err);
		} else {
			throw new RateLimitException(err);
		}
	}
}

export const UseRemembered = createMethodDecorator<
	(
		limiter:
			| (RateLimiterAbstract & Partial<DecorableRateLimiter<any>>)
			| string
			| symbol
			| (abstract new () => RateLimiterAbstract &
					Partial<DecorableRateLimiter<any>>),
		getKey: (...args: any[]) => string,
	) => void
>((item) =>
	replaceMethod(
		item,
		(previous) =>
			function (this: any, ...args: any[]) {
				const limiter:
					| (RateLimiterAbstract & DecorableRateLimiter<any>)
					| undefined = (
					item.target[item.name as keyof typeof item.target] as any
				).limiter;
				const call = () => previous.call(this, ...args);
				return limiter ? limitedCall(limiter, args) : call();
			},
	),
);
