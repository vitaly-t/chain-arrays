/**
 * Logically concatenates arrays (chains them), into an iterable,
 * extended for the total "length" and "at" accessor from index.
 *
 * NOTE: "length" value is cached, so if a source array changes length,
 * and you're explicitly using "length", then just call "refresh()".
 */
function chainArrays(...arr) {
    let len = 0;
    const refresh = () => {
        len = arr.reduce((a, c) => a + c.length, 0);
    };
    refresh();
    return {
        get length() {
            return len;
        },
        refresh,
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
 * Logically concatenates arrays (chains them), into a reversed iterable,
 * extended for the total "length" and "at" accessor from reversed index.
 *
 * NOTE: "length" value is cached, so if a source array changes length,
 * and you're explicitly using "length", then just call "refresh()".
 */
function chainArraysReverse(...arr) {
    let len = 0;
    const refresh = () => {
        len = arr.reduce((a, c) => a + c.length, 0);
    };
    refresh();
    return {
        get length() {
            return len;
        },
        refresh,
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
