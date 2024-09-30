import {chainArrays, chainArraysReverse} from './chain-arrays';

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const i = chainArrays(a, b, c);
const r = chainArraysReverse(a, b, c);

for (const val of i) {
    console.log(val); //=> 1, 2, 3, 4, 5, 6
}
console.log(`first: ${i.at(0)}, last: ${i.at(i.length - 1)}`); //=> first: 1, last: 6

console.log('Reverse iteration:');

for (const val of r) {
    console.log(val); //=> 6, 5, 4, 3, 2, 1
}
console.log(`first: ${r.at(0)}, last: ${r.at(r.length - 1)}`); //=> first: 6, last: 1
