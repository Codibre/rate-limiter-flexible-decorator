import { DecorableRateLimiter } from './decorable-rate-limiter';

export function isRateLimiter(obj: unknown): obj is DecorableRateLimiter<any> {
	const consume = (obj as any)?.consume;

	return typeof consume === 'function';
}
