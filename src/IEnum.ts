import { EnumType } from "./EnumType";
import { NoSuchElementException } from "./Exceptions";

/**
 * An implementation of this interface represents a service for getting meta information from enums.
 */
export interface IEnum {
  /**
   * Returns the first value of the given *{@link enumType}* or throws an *{@link NoSuchElementException}* if the *{@link enumType}* has no entries.
   */
  first<T extends EnumType>(enumType: T): T[keyof T];

  /**
   * Returns the first key of the given *{@link enumType}* or throws an *{@link NoSuchElementException}* if the *{@link enumType}* has no entries.
   */
  firstKey<T extends EnumType>(enumType: T): T[keyof T];

  /**
   * Returns the first key of the given *{@link enumType}* or *undefined* if the *{@link enumType}* has no entries.
   */
  firstKeyOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined;

  /**
   * Returns the first value of the given *{@link enumType}* or *undefined* if the *{@link enumType}* has no entries.
   */
  firstOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined;

  /**
   * Returns the keys of the given *{@link enumType}*.
   */
  keys<T extends EnumType>(enumType: T): T[keyof T][];

  /**
   * Returns the values of the given *{@link enumType}*.
   */
  values<T extends EnumType>(enumType: T): T[keyof T][];
}
