import { EnumType } from "./EnumType";
import { NoSuchElementException } from "./Exceptions";
import { IEnum } from "./IEnum";
import { error } from "./core";

class EnumDefault implements IEnum {
  firstKey<T extends EnumType>(enumType: T): T[keyof T] {
    return (
      this.firstKeyOrNull(enumType) ??
      error(
        new NoSuchElementException(
          `Error when getting first key from Enum. Enum has no keys. Use function 'firstKeyOrNull' instead.`
        )
      )
    );
  }

  firstKeyOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined {
    return this.keys(enumType)[0] ?? undefined;
  }

  firstValue<T extends EnumType>(enumType: T): T[keyof T] {
    return (
      this.firstValueOrNull(enumType) ??
      error(
        new NoSuchElementException(
          `Error when getting first value from Enum. Enum has no values. Use function 'firstValueOrNull' instead.`
        )
      )
    );
  }

  firstValueOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined {
    return this.values(enumType)[0] ?? undefined;
  }

  keys<T extends EnumType>(enumType: T): T[keyof T][] {
    const keys: T[keyof T][] = [];
    for (const value in enumType) {
      if (!parseInt(value) && value !== "0") {
        keys.push(value as unknown as T[keyof T]);
      }
    }
    return keys;
  }

  values<T extends EnumType>(enumType: T): T[keyof T][] {
    return this.keys(enumType).map((key) => enumType[key]) as T[keyof T][];
  }
}

export const Enum = new EnumDefault();
