import {
  IllegalArgumentException,
  IllegalStateException,
  NotImplementedException,
} from "./Exceptions";
import { ILazy } from "./ILazy";

import { Lazy } from "./Lazy";
import { Pair } from "./Pair";
import { Triple } from "./Triple";

/**
 * Checks and returns the provided parameter {@link value} and expects it to be not null and to be not undefined.
 *
 * If the {@link value} is null or undefined an {@link IllegalStateException} is thrown.
 * To provide an alternative text to the exception, parameter {@link message} can be passed in.
 */
export const checkNotNull = <T>(
  value?: T,
  message: string = "Parameter 'value' must be not null and not undefined"
): T => {
  return value ?? error(new IllegalStateException(message));
};

/**
 * Throws an error and returns never. With parameter {@link message} a text can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error("Message");
 */
export function error(message?: string): never;
/**
 * Throws an error and returns never. With parameter {@link error} an alternative exception type can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error(new IllegalStateException());
 */
export function error(error: Error): never;
export function error(first: unknown | undefined): never {
  if (first === undefined) {
    throw new Error();
  }

  if (typeof first === "string") {
    throw new Error(first);
  }

  throw first;
}

/**
 * Provides an instance of type {@link ILazy}, to lazy load a value of type {@link T}, which is useful especially for loading memory and CPU intensive values only on demand.
 *
 * The value is provided via function {@link initializer}.
 */
export const lazy = <T>(initializer: () => T): ILazy<T> => {
  return new Lazy(initializer);
};

/**
 * Executes the function {@link block} and returns the measured execution time in millis.
 */
export const measureTimeMillis = (block: () => void): number => {
  const startTime = new Date();
  block();
  const endTime = new Date();
  return endTime.getTime() - startTime.getTime();
};

/**
 * Creates a new line at the console.
 */
export const newLine = (): void => {
  println("");
};

/**
 * Prints the given {@link data} at the console.
 */
export const println = (...data: any[]): void => {
  console.log(...data);
};

/**
 * Creates and returns an instance of {@link Pair}, which keeps the two readonly values {@link first} and {@link second}.
 */
export const pair = <A, B>(first: A, second: B): Pair<A, B> => {
  return new Pair(first, second);
};

/**
 * Repeats the execution of function {@link block} for the given number {@link times}.
 * For each call of function {@link block} the current index is passed into.
 */
export const repeat = (times: number, block: (index: number) => void): void => {
  if (times < 0) {
    throw new IllegalArgumentException(
      "Error while calling 'repeat'. Parameter 'times' must be greater or equal '0'."
    );
  }

  for (let index = 0; index < times; index++) {
    block(index + 1);
  }
};

/**
 * Repeats the execution of function {@link block} from number {@link from} down to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is smaller than {@link to} an {@link IllegalArgumentException} is thrown.
 */
export const repeatDownTo = (
  from: number,
  to: number,
  block: (index: number) => void
): void => {
  if (from < to) {
    throw new IllegalArgumentException(
      "Error while calling 'repeatDownTo'. Parameter 'from' must be greater or equal to parameter 'to'."
    );
  }

  let index = from;
  while (index >= to) {
    block(index);
    index--;
  }
};

/**
 * Repeats the execution of function {@link block} from number {@link from} up to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is greater than {@link to} an {@link IllegalArgumentException} is thrown.
 */
export const repeatUpTo = (
  from: number,
  to: number,
  block: (index: number) => void
): void => {
  if (from > to) {
    throw new IllegalArgumentException(
      "Error while calling 'repeatUpTo'. Parameter 'from' must be smaller or equal to parameter 'to'."
    );
  }
  for (let index = from; index < to + 1; index++) {
    block(index);
  }
};

/**
 * Throws an {@link NotImplementedException}. With parameter {@link message} a text can be passed in.
 */
export const TODO = (message: string = "Not implemented exception"): never => {
  throw new NotImplementedException(message);
};

/**
 * Creates and returns an instance of {@link Triple}, which keeps the three readonly values {@link first}, {@link second} and {@link third}.
 */
export const triple = <A, B, C>(
  first: A,
  second: B,
  third: C
): Triple<A, B, C> => {
  return new Triple(first, second, third);
};
