import {chainArrays, chainArraysReverse} from './chain-arrays';

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

for (const val of chainArrays(a, b, c)) {
    console.log(val); //=> 1, 2, 3, 4, 5, 6
}

console.log('Reverse iteration:');

for (const val of chainArraysReverse(a, b, c)) {
    console.log(val); //=> 6, 5, 4, 3, 2, 1
}
