import { IObjectPool } from "./IObjectPool";
export declare class ObjectPool<T extends object> implements IObjectPool<T> {
    readonly capacity: number;
    private creator;
    private acquired;
    private released;
    constructor(capacity: number, creator: (index: number) => T);
    acquire(): T;
    acquireOrNull(): T | undefined;
    release(object: T): void;
    private checkout;
    private fetch;
    private findFirst;
    private create;
}
