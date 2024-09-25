export function linkArrays<A>(a: ArrayLike<A>): Iterable<A>;
export function linkArrays<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): Iterable<A | B>;
export function linkArrays<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): Iterable<A | B | C>;
export function linkArrays<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): Iterable<A | B | C | D>;
export function linkArrays<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): Iterable<A | B | C | D | E>;
export function linkArrays<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): Iterable<A | B | C | D | E | F>;
export function linkArrays<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): Iterable<A | B | C | D | E | F | G>;

export function linkArrays<T>(...arr: Array<ArrayLike<T>>): Iterable<T> {
    return {
        [Symbol.iterator](): Iterator<T> {
            let i = 0, k = -1, a: ArrayLike<T> = [];
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

export function linkArraysReverse<A>(a: ArrayLike<A>): Iterable<A>;
export function linkArraysReverse<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): Iterable<A | B>;
export function linkArraysReverse<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): Iterable<A | B | C>;
export function linkArraysReverse<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): Iterable<A | B | C | D>;
export function linkArraysReverse<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): Iterable<A | B | C | D | E>;
export function linkArraysReverse<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): Iterable<A | B | C | D | E | F>;
export function linkArraysReverse<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): Iterable<A | B | C | D | E | F | G>;

export function linkArraysReverse<T>(...arr: Array<ArrayLike<T>>): Iterable<T> {
    return {
        [Symbol.iterator](): Iterator<T> {
            let i = 0, k = -1, a: ArrayLike<T> = [];
            return {
                next(): IteratorResult<T> {
                    // TODO: To be implemented
                    return {done: true, value: undefined};
                }
            };
        }
    }
}
