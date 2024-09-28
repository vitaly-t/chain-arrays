# chain-arrays

Logical concatenation for large arrays, in TypeScript (for copy-n-paste / no library):

 - Chain and process large arrays, without making any copies, for efficient memory use.

Just copy [chain-arrays.ts](./src/chain-arrays.ts) (or [chain-arrays.js](./src/chain-arrays.js)) file into your project, and you're good to go 🚀

Functions `chainArrays` and `chainArraysReverse` there are self-explanatory 😉

To run [./src/test.ts](./src/test.ts), install dependencies via `npm i`, and then do `npm test`.

## Rationale

When dealing with large arrays (10^6 > elements), concatenating them can be very memory-consuming.
This solution joins arrays logically, turning a list of arrays into an iterable, with additional `length` and `at` access.

```ts
import {chainArrays, chainArraysReverse} from './chain-arrays';

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

for (const value of chainArrays(a, b, c)) {
    console.log(value); //=> 1, 2, 3, 4, 5, 6
}

for (const value of chainArraysReverse(a, b, c)) {
    console.log(value); //=> 6, 5, 4, 3, 2, 1
}
```

## Performance

```ts
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
```

Above, we iterate over 5 arrays, with 10 mln elements each, within 100ms.

For comparison, using the spread syntax for the same:

```ts
let sum = 0;
for (const i of [...a, ...b, ...c, ...d, ...e]) {
    sum += i;
}

console.log(`${Date.now() - start}ms`); //=> ~1175ms
```

That took 11.75 times longer, while also consuming tremendously more memory.

The same iteration via index is roughly 2 times slower, as it needs to calculate the source array index every time you use `at` function:

```ts
let sum = 0;
const chain = chainArrays(a, b, c, d, e);
for (let t = 0; t < chain.length; t++) {
    sum += chain.at(t)!;
}

console.log(`${Date.now() - start}ms`); //=> ~213ms
```
