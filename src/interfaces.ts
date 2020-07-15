export interface ITerm {
    coefficient: number;
    exponent: number;
}

export interface IHashMap {
    [key: string]: ITerm;
}
// the first is a coefficient num and the second is an exponent num
export type IInputTerm = [number, number];
