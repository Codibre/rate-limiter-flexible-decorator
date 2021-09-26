[fluent-iterable - v0.0.3](../README.md) / RateLimitException

# Class: RateLimitException

## Hierarchy

- `Error`

  ↳ **`RateLimitException`**

## Table of contents

### Constructors

- [constructor](RateLimitException.md#constructor)

### Properties

- [message](RateLimitException.md#message)
- [name](RateLimitException.md#name)
- [rateLimiterInfo](RateLimitException.md#ratelimiterinfo)
- [stack](RateLimitException.md#stack)
- [stackTraceLimit](RateLimitException.md#stacktracelimit)

### Methods

- [captureStackTrace](RateLimitException.md#capturestacktrace)
- [prepareStackTrace](RateLimitException.md#preparestacktrace)

## Constructors

### constructor

• **new RateLimitException**(`rateLimiterInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rateLimiterInfo` | `RateLimiterRes` |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### rateLimiterInfo

• `Readonly` **rateLimiterInfo**: `RateLimiterRes`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

Error.prepareStackTrace
