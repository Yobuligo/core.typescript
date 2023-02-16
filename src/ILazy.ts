export interface ILazy<T> {
  readonly value: T;
  readonly isInitialized: boolean;
}
