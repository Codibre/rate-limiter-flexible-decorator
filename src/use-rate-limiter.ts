import { limiterInstances } from './instances';
import { AbstractClass } from 'is-this-a-pigeon';
import { RateLimitException } from './rate-limit-exception';
import { createMethodDecorator, replaceMethod } from 'decorator-builder';
import { RateLimiterRes } from 'rate-limiter-flexible';
import { DecorableRateLimiter } from './decorable-rate-limiter';
import { Args } from 'is-this-a-pigeon';

async function limitedCall(
	this: any,
	limiter: DecorableRateLimiter<Args>,
	args: any[],
	getKey: (...argsN: Args) => string,
	call: Function,
) {
	try {
		await limiter.consume(getKey ? getKey(...args) : limiter.getKey!(...args));
	} catch (err) {
		if (!(err instanceof RateLimiterRes)) {
			throw err;
		}
		if (!limiter.catch) {
			throw new RateLimitException(err);
		}
		return limiter.catch(err);
	}
	return call();
}

export const UseRateLimiter = createMethodDecorator<
	(
		limiter:
			| DecorableRateLimiter<any>
			| string
			| symbol
			| AbstractClass<DecorableRateLimiter<any>>,
		getKey: (...args: Args) => string,
	) => void
>((item) =>
	replaceMethod(
		item,
		(previous) =>
			function (this: any, ...args: any[]) {
				const limiter = limiterInstances.get(item.args[0]);
				const call = () => previous.call(this, ...args);
				return limiter
					? limitedCall(limiter, args, item.args[1], call)
					: call();
			},
	),
);
