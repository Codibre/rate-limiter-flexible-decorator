import { RateLimiterRes } from 'rate-limiter-flexible';
export interface DecorableRateLimiter<Args extends any[]> {
	getKey(...args: Args): string;
	catch?(info: RateLimiterRes): any;
}
