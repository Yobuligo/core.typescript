# core.typescript
An API that extends TypeScript by simplified core functions and exceptions.

## Installation
Install the library via:
```
npm install --save @yobuligo/core.typescript
```

## Functions

### checkNotNull
 Checks and returns the provided parameter *value* and expects it to be not null and to be not undefined.
 
 If the *value* is null or undefined an *IllegalStateException* is thrown.
 To provide an alternative text to the exception, parameter *message* can be passed in.
```
function checkNotNull = <T>(value?: T, message: string = "Parameter 'value' must be not null and not undefined"): T
```

## Exceptions
