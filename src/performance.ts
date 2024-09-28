import {chainArrays} from './chain-arrays';

const r = 10_000_000;

const a = Array<number>(r).fill(1);
const b = Array<number>(r).fill(2);
const c = Array<number>(r).fill(3);
const d = Array<number>(r).fill(4);
const e = Array<number>(r).fill(5);

const start = Date.now();

let sum = 0;
for (const i of chainArrays(a, b, c, d, e)) {
    sum += i;
}

console.log(`${Date.now() - start}ms`); //=> ~100ms
