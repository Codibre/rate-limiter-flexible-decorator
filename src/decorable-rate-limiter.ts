import { RateLimiterRes } from 'rate-limiter-flexible';
export interface DecorableRateLimiter<Args extends any[]> {
	consume(key: string | number): Promise<RateLimiterRes>;
	getKey?(...args: Args): string;
	catch?(info: RateLimiterRes): any;
}
