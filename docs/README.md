fluent-iterable - v0.0.3

# fluent-iterable - v0.0.3

## Table of contents

### Classes

- [RateLimitException](classes/RateLimitException.md)

### Interfaces

- [DecorableRateLimiter](interfaces/DecorableRateLimiter.md)

### Variables

- [UseRateLimiter](README.md#useratelimiter)

### Functions

- [setupRateLimiter](README.md#setupratelimiter)

## Variables

### UseRateLimiter

• **UseRateLimiter**: `IterableMethodDecorator`<[limiter: string \| symbol \| DecorableRateLimiter<any\> \| AbstractClass<DecorableRateLimiter<any\>\>, getKey: Function]\>

## Functions

### setupRateLimiter

▸ **setupRateLimiter**(`instanceGetter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceGetter` | (`cls`: `string` \| `symbol` \| `AbstractClass`<`Object`\>) => `undefined` \| [`DecorableRateLimiter`](interfaces/DecorableRateLimiter.md)<`Args`\> |

#### Returns

`void`
