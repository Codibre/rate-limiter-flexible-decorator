import { limiterInstances } from './instances';
import { DecorableRateLimiter } from './decorable-rate-limiter';
import { UseRateLimiter } from './use-rate-limiter';
import { AbstractClass, Args } from 'is-this-a-pigeon';
import { isRateLimiter } from './is-rate-limiter';

export function setupRateLimiter(
	instanceGetter: (
		cls: string | symbol | AbstractClass<Object>,
	) => DecorableRateLimiter<Args> | undefined,
) {
	for (const item of UseRateLimiter) {
		if (!limiterInstances.has(item.args[0]) && !isRateLimiter(item.args[0])) {
			const limiter = instanceGetter(
				item.args[0] as string | symbol | AbstractClass<Object>,
			);
			if (limiter) {
				limiterInstances.set(item.args[0], limiter);
			}
		}
	}
}
