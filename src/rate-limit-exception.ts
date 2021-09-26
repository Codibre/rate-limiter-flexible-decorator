import { RateLimiterRes } from 'rate-limiter-flexible';

export class RateLimitException extends Error {
	constructor(public readonly rateLimiterInfo: RateLimiterRes) {
		super('Rate limit reached');
	}
}
