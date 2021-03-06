// Type definitions for bson-objectid 1.3.1
// Project: bson-objectid
// Definitions by: Marcel Ernst <https://www.marcel-ernst.de>
import { Buffer } from 'buffer';
export default ObjectID;

declare class ObjectID {
    static createFromTime(time: number): ObjectID;
    static createFromHexString(hexString: string): ObjectID;
    static createFromObject(obj: object): ObjectID;
    static isValid(hexString: string):boolean;
    static isValid(ObjectID: ObjectID):boolean;
    static hasRequiredProps(input: object): boolean;
    static sanitizeObject(input: object): object;
    static generate(): string;
    static generate(time: number): string;
    static toString():string;
    static setMachineID(id: number): void;
    static setMachineID(id: string): void;
    static getMachineID(): number;
    
    constructor();
    constructor(time: number);
    constructor(hexString: string);
    constructor(idString: string);
    constructor(array: number[]);
    constructor(buffer: Buffer);

    readonly id: string;
    readonly str: string;

    toHexString(): string;
    equals(other: ObjectID): boolean;
    getTimestamp(): number;
}
