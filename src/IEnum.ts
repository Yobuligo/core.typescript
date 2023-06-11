import { EnumType } from "./EnumType";

export interface IEnum {
  firstKey<T extends EnumType>(enumType: T): T[keyof T];
  firstKeyOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined;
  firstValue<T extends EnumType>(enumType: T): T[keyof T];
  firstValueOrNull<T extends EnumType>(enumType: T): T[keyof T] | undefined;
  keys<T extends EnumType>(enumType: T): T[keyof T][];
  values<T extends EnumType>(enumType: T): T[keyof T][];
}
