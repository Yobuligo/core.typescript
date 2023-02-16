import { ILazy } from "./ILazy";

export class Lazy<T> implements ILazy<T> {
  private _isInitialized: boolean = false;
  private _value?: T = undefined;

  constructor(private initializer: () => T) {}

  public get value(): T {
    if (!this._value) {
      this._value = this.initializer();
      this._isInitialized = true;
    }
    return this._value;
  }

  public get isInitialized(): boolean {
    return this._isInitialized;
  }
}
