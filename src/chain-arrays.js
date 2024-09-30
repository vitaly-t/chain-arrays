/**
 * Logically concatenates arrays (chains them), into an iterable,
 * extended for the total "length" and "at" accessor from index.
 */
function chainArrays(...arr) {
    const length = arr.reduce((a, c) => a + c.length, 0);
    return {
        length,
        at(i) {
            for (let j = 0; j < arr.length; j++) {
                if (i < arr[j].length) {
                    return arr[j][i];
                }
                i -= arr[j].length;
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
 * extended for the total "length" and "at" accessor from reversed index.
 */
function chainArraysReverse(...arr) {
    const length = arr.reduce((a, c) => a + c.length, 0);
    return {
        length,
        at(i) {
            for (let j = arr.length - 1; j >= 0; j--) {
                if (i < arr[j].length) {
                    return arr[j][arr[j].length - (i + 1)];
                }
                i -= arr[j].length;
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
