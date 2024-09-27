"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainArrays = chainArrays;
exports.chainArraysReverse = chainArraysReverse;
/**
 * Logically concatenates arrays (chains them), into an iterable,
 * which also has total "length" and from-index "at" accessor.
 */
function chainArrays(...arr) {
    const length = arr.reduce((c, r) => c + r.length, 0);
    return {
        length,
        at(i) {
            if (i < length) {
                let s = 0, k = 0;
                while (s + arr[k].length <= i) {
                    s += arr[k++].length;
                }
                return arr[k][i - s];
            }
        },
        [Symbol.iterator]() {
            let i = 0, k = -1, a = [];
            return {
                next() {
                    while (i === a.length) {
                        if (++k === arr.length) {
                            return { done: true, value: undefined };
                        }
                        a = arr[k];
                        i = 0;
                    }
                    return { value: a[i++], done: false };
                }
            };
        }
    };
}
/**
 * Logically concatenates arrays (chains them), into a reversed iterable,
 * which also has total "length" and from-index "at" accessor.
 */
function chainArraysReverse(...arr) {
    const length = arr.reduce((c, r) => c + r.length, 0);
    return {
        length,
        at(i) {
            // TODO: This must reverse the index logic!
            if (i < length) {
                let s = 0, k = 0;
                while (s + arr[k].length <= i) {
                    s += arr[k++].length;
                }
                return arr[k][i - s];
            }
        },
        [Symbol.iterator]() {
            let i = -1, k = arr.length, a;
            return {
                next() {
                    while (i < 0) {
                        if (--k < 0) {
                            return { done: true, value: undefined };
                        }
                        a = arr[k];
                        i = a.length - 1;
                    }
                    return { value: a[i--], done: false };
                }
            };
        }
    };
}
