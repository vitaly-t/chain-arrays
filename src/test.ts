import {linkArrays, linkArraysReverse} from './link-arrays';

(function test() {
    const r = linkArraysReverse([1, 2], [3, 4], [5, 6]);

    for (const a of r) {
        console.log(a);
    }
})();
