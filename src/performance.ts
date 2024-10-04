import {chainArrays} from './chain-arrays';

const r = 10_000_000;

const a = Array<number>(r).fill(1);
const b = Array<number>(r).fill(2);
const c = Array<number>(r).fill(3);
const d = Array<number>(r).fill(4);
const e = Array<number>(r).fill(5);

let start = Date.now();

let checkSum = 0;
for (const i of chainArrays(a, b, c, d, e)) {
    checkSum += i;
}

console.log(`Iteration: ${Date.now() - start}ms; check-sum: ${checkSum.toLocaleString()}`); //=> ~100ms

checkSum = 0;
const {at, getLength} = chainArrays(a, b, c, d, e);
const length = getLength();
start = Date.now();

for (let i = 0; i < length; i++) {
    checkSum += at(i)!;
}

console.log(`Using "at": ${Date.now() - start}ms; check-sum: ${checkSum.toLocaleString()}`); //=> ~190ms
