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

Checks and returns the provided parameter _value_ and expects it to be not null and to be not undefined.

If the _value_ is null or undefined an _IllegalStateException_ is thrown.
To provide an alternative text to the exception, parameter _message_ can be passed in.

```
function checkNotNull<T>(value?: T, message: string = "Parameter 'value' must be not null and not undefined"): T
```

### error

Throws an error and returns never. With parameter _message_ a text can be passed in.

The function is useful to connect throwing an exception with the nullish coalescing operator, as _throw new_ cannot be used with ??.

```
function error(message?: string): never

// example:
const value = getValue() ?? error("Message");
```

Throws an error and returns never. With parameter _error_ an alternative exception type can be passed in.

The function is useful to connect throwing an exception with the nullish coalescing operator, as _throw new_ cannot be used with ??.

```
export function error(error: Error): never;

// example:
const value = getValue() ?? error(new IllegalStateException());
```

### ifNotNull

Calls the function _block_ if the given _value_ is not null and not undefined.

The function _block_ may return a value or undefined.

```
function ifNotNull<T, R>(value: T, block: (value: NonNullable<T>) => R | undefined): R | undefined
```

### ifNull

Calls the function _block_ if the given _value_ is null or undefined.

The function _block_ may return a value or undefined.

```
function ifNull<T, R>(value: T, block: () => R | undefined): R | undefined
```

### lazy

Provides an instance of type _ILazy_, to lazy load a value of type _T_, which is useful especially for loading, memory or CPU intensive values, only on demand.

The value is provided via function _initializer_.

```
function lazy<T>(initializer: () => T): ILazy<T>
```

### measureTimeMillis

Executes the function _block_ and returns the measured execution time in millis.

```
function measureTimeMillis(block: () => void): number
```

### newLine

Creates a new line at the console.

```
function newLine(): void
```

### objectPool

Provides an instance of an object pool _IObjectPool_ for objects of type _T_. It keeps objects which are expensive to create in memory to be reused.  
The parameter _capacity_ defines the maximum number of instances which are created via function _creator_.

```
function objectPool<T extends object>(capacity: number, creator: (index: number) => T): IObjectPool<T>
```

The following example shows how to

1. initialize an object pool for a demo database connection
2. acquire two database connections
3. release the first database connection to be reused

```
class DBConnectionDemo {}

const dbConnectionPool = objectPool<DBConnectionDemo>(3, () => {
  return new DBConnectionDemo();
});

const first = dbConnectionPool.acquire();
const second = dbConnectionPool.acquire();

// ...
dbConnectionPool.release(first);
```

### println

Prints the given _data_ at the console.

```
function println(...data: any[]): void
```

### pair

Creates and returns an instance of _Pair_, which keeps the two readonly values _first_ and _second_.

```
function pair<A, B>(first: A, second: B): Pair<A, B>
```

### repeat

Repeats the execution of function _block_ for the given number _times_. For each call of function _block_ the current index is passed into.

```
function repeat(times: number, block: (index: number) => void): void
```

### repeatDownTo

Repeats the execution of function _block_ from number _from_ down to number _to_.
For each call of function _block_ the current index is passed into.

If _from_ is smaller than _to_ an _IllegalArgumentException_ is thrown.

```
function repeatDownTo(from: number, to: number, block: (index: number) => void): void
```

### repeatUpTo

Repeats the execution of function _block_ from number _from_ up to number _to_.
For each call of function _block_ the current index is passed into.

If _from_ is greater than _to_ an _IllegalArgumentException_ is thrown.

```
function repeatUpTo(from: number, to: number, block: (index: number) => void): void
```

### TODO

Throws an _NotImplementedException_. With parameter _message_ a text can be passed in.

```
function TODO(message: string = "Not implemented exception"): never
```

### triple

Creates and returns an instance of _Triple_, which keeps the three readonly values _first_, _second_ and _third_.

```
function triple<A, B, C>(first: A, second: B, third: C): Triple<A, B, C>
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

### InvalidOperationException

An exception that occurs when a method is invalid for the current object state.

E.g. Fetching an object from an object pool whose capacity is already exhausted.

```
throw new InvalidOperationException();
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
