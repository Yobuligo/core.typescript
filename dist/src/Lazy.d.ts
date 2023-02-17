import { ILazy } from "./ILazy";
export declare class Lazy<T> implements ILazy<T> {
    private initializer;
    private _isInitialized;
    private _value?;
    constructor(initializer: () => T);
    get value(): T;
    get isInitialized(): boolean;
}
