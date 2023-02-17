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
 * Checks the provided parameter {@link value} and expects it to be not null and to be not undefined.
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
 * Provides an instance of type {@link ILazy}, to lazy load a value, which is useful especially for loading very expensive only on demand.
 *
 * The value is provided via function {@link initializer}.
 */
export const lazy = <T>(initializer: () => T): ILazy<T> => {
  return new Lazy(initializer);
};

export const measureTimeMillis = (block: () => void): number => {
  const startTime = new Date();
  block();
  const endTime = new Date();
  return endTime.getTime() - startTime.getTime();
};

export const newLine = () => {
  println("");
};

export const println = (...data: any[]) => {
  console.log(...data);
};

export function error(message?: string): never;
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

export const pair = <A, B>(first: A, second: B): Pair<A, B> => {
  return new Pair(first, second);
};

export const repeat = (times: number, block: (index: number) => void) => {
  if (times < 0) {
    throw new IllegalArgumentException(
      "Error while calling 'repeat'. Parameter 'times' must be greater or equal '0'."
    );
  }

  for (let index = 0; index < times; index++) {
    block(index + 1);
  }
};

export const repeatDownTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
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

export const repeatUpTo = (
  from: number,
  to: number,
  block: (index: number) => void
) => {
  if (from > to) {
    throw new IllegalArgumentException(
      "Error while calling 'repeatUpTo'. Parameter 'from' must be smaller or equal to parameter 'to'."
    );
  }
  for (let index = from; index < to + 1; index++) {
    block(index);
  }
};

export const TODO = (message: string = "Not implemented exception"): never => {
  return error(new NotImplementedException(message));
};

export const triple = <A, B, C>(
  first: A,
  second: B,
  third: C
): Triple<A, B, C> => {
  return new Triple(first, second, third);
};
