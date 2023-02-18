# core.typescript
An API that extends TypeScript by simplified core functions and exceptions for standardizing.

## Installation
Install the library via:
```
npm install --save @yobuligo/core.typescript
```

## Functions
The library provides the following functions.

### checkNotNull
 Checks and returns the provided parameter *value* and expects it to be not null and to be not undefined.

 If the *value* is null or undefined an *IllegalStateException* is thrown.
 To provide an alternative text to the exception, parameter *message* can be passed in.
```
function checkNotNull<T>(value?: T, message: string = "Parameter 'value' must be not null and not undefined"): T
```

### error
Throws an error and returns never. With parameter *message* a text can be passed in.

The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
```
function error(message?: string): never

// example:
const value = getValue() ?? error("Message");
```

Throws an error and returns never. With parameter {@link error} an alternative exception type can be passed in.

The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
```
export function error(error: Error): never;

// example:
const value = getValue() ?? error(new IllegalStateException());
```

### repeat
Repeats the execution of function *block* for the given number *times*. For each call of function *block* the current index is passed into.
```
function repeat(times: number, block: (index: number) => void): void
```

## Exceptions
The library provides the following exceptions.

### ClassCastException
An exception that occurs in case of an invalid class type cast.
```
throw new ClassCastException();
```

### IllegalArgumentException
An exception that occurs when an argument was provided, which is out of bounce.

E.g. if a value -1 is passed into a function, which only excepts value greater 0.
```
throw new IllegalArgumentException();
```
 
### IllegalStateException
An exception that occurs when a state is or becomes inconsistent.

E.g. if a value must not be undefined but undefined is set as value.
```
throw new IllegalStateException();
```

### NoSuchElementException
An exception that occurs when an expected result is not available.

E.g. if a search for a specific value ends without result.
```
throw new NoSuchElementException();
```

### NotImplementedException
An exception that occurs when the implementation of a routine was not yet completed.
```
throw new NotImplementedException();
```

### NotSupportedException
An exception that occurs when a state is currently not valid.

E.g. if a switch-case statement is called for a value that is currently not handled.
```
throw new NotSupportedException();
```

### NullPointerException
An exception that occurs when a value is null or undefined, which was expected to be not null or undefined.
```
throw new NullPointerException();
```
