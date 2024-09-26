"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainArrays = chainArrays;
exports.chainArraysReverse = chainArraysReverse;
/**
 * Logically concatenates arrays (chains them), into an iterable.
 */
function chainArrays(...arr) {
    return {
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
 * Logically concatenates arrays (chains them), into a reversed iterable.
 */
function chainArraysReverse(...arr) {
    return {
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
