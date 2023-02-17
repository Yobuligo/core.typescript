/**
 * An exception that occurs in case of an invalid class type cast.
 */
export class ClassCastException extends Error {}

/**
 * An exception that occurs when an argument, which is out of bounce, was provided.
 *
 * E.g. if a value -1 is passed into a function, which only excepts value greater 0.
 */
export class IllegalArgumentException extends Error {}

/**
 * An exception that occurs when a state is or becomes inconsistent.
 *
 * E.g. if a value must not be undefined but undefined is set as value.
 */
export class IllegalStateException extends Error {}

/**
 * An exception that occurs when an expected result is not available.
 *
 * E.g. if a search for a specific value ends without result.
 */
export class NoSuchElementException extends Error {}

/**
 * An exception that occurs when the implementation of a routine was not yet completed.
 */
export class NotImplementedException extends Error {}

/**
 * An exception that occurs when a state is currently not valid.
 *
 * E.g. if a switch-case statement is called for a value that is currently not handled.
 */
export class NotSupportedException extends Error {}

/**
 * An exception that occurs when a value is null or undefined, which was expected to be not null or undefined.
 */
export class NullPointerException extends Error {}
