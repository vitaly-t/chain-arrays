/**
 * Logically concatenates arrays (chains them), into an iterable.
 */
function chainArrays(...arr) {
    return {
        getLength() {
            return arr.reduce((a, c) => a + c.length, 0);
        },
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
                    return { done: false, value: a[i++] };
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
        getLength() {
            return arr.reduce((a, c) => a + c.length, 0);
        },
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
                    return { done: false, value: a[i--] };
                }
            };
        }
    };
}
