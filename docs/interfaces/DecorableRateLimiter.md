[fluent-iterable - v0.0.3](../README.md) / DecorableRateLimiter

# Interface: DecorableRateLimiter<Args\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends `any`[] |

## Table of contents

### Methods

- [catch](DecorableRateLimiter.md#catch)
- [consume](DecorableRateLimiter.md#consume)
- [getKey](DecorableRateLimiter.md#getkey)

## Methods

### catch

▸ `Optional` **catch**(`info`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `RateLimiterRes` |

#### Returns

`any`

___

### consume

▸ **consume**(`key`): `Promise`<`RateLimiterRes`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`Promise`<`RateLimiterRes`\>

___

### getKey

▸ `Optional` **getKey**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

#### Returns

`string`
