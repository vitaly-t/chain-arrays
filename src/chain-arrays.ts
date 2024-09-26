export function chainArrays(): Iterable<unknown>;
export function chainArrays<A>(a: ArrayLike<A>): Iterable<A>;
export function chainArrays<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): Iterable<A | B>;
export function chainArrays<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): Iterable<A | B | C>;
export function chainArrays<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): Iterable<A | B | C | D>;
export function chainArrays<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): Iterable<A | B | C | D | E>;
export function chainArrays<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): Iterable<A | B | C | D | E | F>;
export function chainArrays<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): Iterable<A | B | C | D | E | F | G>;
export function chainArrays<A, B, C, D, E, F, G, H>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>): Iterable<A | B | C | D | E | F | G | H>;
export function chainArrays<A, B, C, D, E, F, G, H, I>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>): Iterable<A | B | C | D | E | F | G | H | I>;
export function chainArrays<A, B, C, D, E, F, G, H, I, J>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>, j: ArrayLike<J>): Iterable<A | B | C | D | E | F | G | H | I | J>;

/**
 * Logically concatenates arrays (chains them), into an iterable.
 */
export function chainArrays<T>(...arr: Array<ArrayLike<T>>): Iterable<T> {
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

export function chainArraysReverse(): Iterable<unknown>;
export function chainArraysReverse<A>(a: ArrayLike<A>): Iterable<A>;
export function chainArraysReverse<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): Iterable<A | B>;
export function chainArraysReverse<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): Iterable<A | B | C>;
export function chainArraysReverse<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): Iterable<A | B | C | D>;
export function chainArraysReverse<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): Iterable<A | B | C | D | E>;
export function chainArraysReverse<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): Iterable<A | B | C | D | E | F>;
export function chainArraysReverse<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): Iterable<A | B | C | D | E | F | G>;
export function chainArraysReverse<A, B, C, D, E, F, G, H>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>): Iterable<A | B | C | D | E | F | G | H>;
export function chainArraysReverse<A, B, C, D, E, F, G, H, I>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>): Iterable<A | B | C | D | E | F | G | H | I>;
export function chainArraysReverse<A, B, C, D, E, F, G, H, I, J>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>, j: ArrayLike<J>): Iterable<A | B | C | D | E | F | G | H | I | J>;

/**
 * Logically concatenates arrays (chains them), into a reversed iterable.
 */
export function chainArraysReverse<T>(...arr: Array<ArrayLike<T>>): Iterable<T> {
    return {
        [Symbol.iterator](): Iterator<T> {
            let i = -1, k = arr.length, a: ArrayLike<T>;
            return {
                next(): IteratorResult<T> {
                    while (i < 0) {
                        if (--k < 0) {
                            return {done: true, value: undefined};
                        }
                        a = arr[k];
                        i = a.length - 1;
                    }
                    return {value: a[i--], done: false};
                }
            };
        }
    }
}
