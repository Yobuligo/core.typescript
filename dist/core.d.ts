import { ILazy } from "./ILazy";
import { Pair } from "./Pair";
import { Triple } from "./Triple";
/**
 * Checks and returns the provided parameter {@link value} and expects it to be not null and to be not undefined.
 *
 * If the {@link value} is null or undefined an {@link IllegalStateException} is thrown.
 * To provide an alternative text to the exception, parameter {@link message} can be passed in.
 */
export declare const checkNotNull: <T>(value?: T | undefined, message?: string) => T;
/**
 * Throws an error and returns never. With parameter {@link message} a text can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error("Message");
 */
export declare function error(message?: string): never;
/**
 * Throws an error and returns never. With parameter {@link error} an alternative exception type can be passed in.
 *
 * The function is useful to connect throwing an exception with the nullish coalescing operator, as throw new cannot be used with ??.
 *
 * @example
 * const value = getValue() ?? error(new IllegalStateException());
 */
export declare function error(error: Error): never;
/**
 * Provides an instance of type {@link ILazy}, to lazy load a value of type {@link T}, which is useful especially for loading memory and CPU intensive values only on demand.
 *
 * The value is provided via function {@link initializer}.
 */
export declare const lazy: <T>(initializer: () => T) => ILazy<T>;
/**
 * Executes the function {@link block} and returns the measured execution time in millis.
 */
export declare const measureTimeMillis: (block: () => void) => number;
/**
 * Creates a new line at the console.
 */
export declare const newLine: () => void;
/**
 * Prints the given {@link data} at the console.
 */
export declare const println: (...data: any[]) => void;
/**
 * Creates and returns an instance of {@link Pair}, which keeps the two readonly values {@link first} and {@link second}.
 */
export declare const pair: <A, B>(first: A, second: B) => Pair<A, B>;
/**
 * Repeats the execution of function {@link block} for the given number {@link times}.
 * For each call of function {@link block} the current index is passed into.
 */
export declare const repeat: (times: number, block: (index: number) => void) => void;
/**
 * Repeats the execution of function {@link block} from number {@link from} down to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is smaller than {@link to} an {@link IllegalArgumentException} is thrown.
 */
export declare const repeatDownTo: (from: number, to: number, block: (index: number) => void) => void;
/**
 * Repeats the execution of function {@link block} from number {@link from} up to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is greater than {@link to} an {@link IllegalArgumentException} is thrown.
 */
export declare const repeatUpTo: (from: number, to: number, block: (index: number) => void) => void;
/**
 * Throws an {@link NotImplementedException}. With parameter {@link message} a text can be passed in.
 */
export declare const TODO: (message?: string) => never;
/**
 * Creates and returns an instance of {@link Triple}, which keeps the three readonly values {@link first}, {@link second} and {@link third}.
 */
export declare const triple: <A, B, C>(first: A, second: B, third: C) => Triple<A, B, C>;
