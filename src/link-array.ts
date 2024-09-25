export function linkArrays<A>(a: Array<A>): Iterable<A>;
export function linkArrays<A, B>(a: Array<A>, b: Array<B>): Iterable<A | B>;
export function linkArrays<A, B, C>(a: Array<A>, b: Array<B>, c: Array<C>): Iterable<A | B | C>;
export function linkArrays<A, B, C, D>(a: Array<A>, b: Array<B>, c: Array<C>, d: Array<D>): Iterable<A | B | C | D>;
export function linkArrays<A, B, C, D, E>(a: Array<A>, b: Array<B>, c: Array<C>, d: Array<D>, e: Array<E>): Iterable<A | B | C | D | E>;

export function linkArrays<T>(...arr: T[][]): Iterable<T> {
    return {
        [Symbol.iterator](): Iterator<T> {
            let i = 0, k = -1, a: T[] = [];
            return {
                next(): IteratorResult<T> {
                    while (i === a.length) {
                        if (++k === arr.length) {
                            return {done: true, value: undefined};
                        }
                        a = arr[k];
                        i = 0;
                    }
                    return {value: a[i++], done: false};
                }
            };
        }
    }
}

export function linkArraysReverse<A>(a: Array<A>): Iterable<A>;
export function linkArraysReverse<A, B>(a: Array<A>, b: Array<B>): Iterable<A | B>;
export function linkArraysReverse<A, B, C>(a: Array<A>, b: Array<B>, c: Array<C>): Iterable<A | B | C>;
export function linkArraysReverse<A, B, C, D>(a: Array<A>, b: Array<B>, c: Array<C>, d: Array<D>): Iterable<A | B | C | D>;
export function linkArraysReverse<A, B, C, D, E>(a: Array<A>, b: Array<B>, c: Array<C>, d: Array<D>, e: Array<E>): Iterable<A | B | C | D | E>;

export function linkArraysReverse<T>(...arr: T[][]): Iterable<T> {
    return {
        [Symbol.iterator](): Iterator<T> {
            let i = 0, k = -1, a: T[] = [];
            return {
                next(): IteratorResult<T> {
                    // TODO: To be implemented
                    return {done: true, value: undefined};
                }
            };
        }
    }
}
