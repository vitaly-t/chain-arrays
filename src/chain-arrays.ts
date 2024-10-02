/**
 * Iterable arrays chain, extended for "length" and "at" accessor.
 */
export interface IArraysChain<T> extends RelativeIndexable<T>, Iterable<T> {
    /**
     * Total length of all input arrays combined.
     */
    readonly length: number;

    /**
     * Refreshes "length", in case one of the source arrays changes its length.
     */
    refresh(): void;
}

export function chainArrays(): IArraysChain<unknown>;
export function chainArrays<A>(a: ArrayLike<A>): IArraysChain<A>;
export function chainArrays<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): IArraysChain<A | B>;
export function chainArrays<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): IArraysChain<A | B | C>;
export function chainArrays<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): IArraysChain<A | B | C | D>;
export function chainArrays<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): IArraysChain<A | B | C | D | E>;
export function chainArrays<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): IArraysChain<A | B | C | D | E | F>;
export function chainArrays<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): IArraysChain<A | B | C | D | E | F | G>;
export function chainArrays<A, B, C, D, E, F, G, H>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>): IArraysChain<A | B | C | D | E | F | G | H>;
export function chainArrays<A, B, C, D, E, F, G, H, I>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>): IArraysChain<A | B | C | D | E | F | G | H | I>;
export function chainArrays<A, B, C, D, E, F, G, H, I, J>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>, j: ArrayLike<J>): IArraysChain<A | B | C | D | E | F | G | H | I | J>;

/**
 * Logically concatenates arrays (chains them), into an iterable,
 * extended for the total "length" and "at" accessor from index.
 *
 * NOTE: "length" value is cached, so if a source array changes length,
 * and you're explicitly using "length", then just call "refresh()".
 */
export function chainArrays<T>(...arr: Array<ArrayLike<T>>): IArraysChain<T> {
    let length = 0;
    const refresh = () => {
        length = arr.reduce((a, c) => a + c.length, 0);
    };
    refresh();
    return {
        length,
        refresh,
        at(i: number): T | undefined {
            for (let j = 0; j < arr.length; j++) {
                if (i < arr[j].length) {
                    return arr[j][i];
                }
                i -= arr[j].length;
            }
        },
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
                    return {done: false, value: a[i++]};
                }
            };
        }
    }
}

export function chainArraysReverse(): IArraysChain<unknown>;
export function chainArraysReverse<A>(a: ArrayLike<A>): IArraysChain<A>;
export function chainArraysReverse<A, B>(a: ArrayLike<A>, b: ArrayLike<B>): IArraysChain<A | B>;
export function chainArraysReverse<A, B, C>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>): IArraysChain<A | B | C>;
export function chainArraysReverse<A, B, C, D>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>): IArraysChain<A | B | C | D>;
export function chainArraysReverse<A, B, C, D, E>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>): IArraysChain<A | B | C | D | E>;
export function chainArraysReverse<A, B, C, D, E, F>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>): IArraysChain<A | B | C | D | E | F>;
export function chainArraysReverse<A, B, C, D, E, F, G>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>): IArraysChain<A | B | C | D | E | F | G>;
export function chainArraysReverse<A, B, C, D, E, F, G, H>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>): IArraysChain<A | B | C | D | E | F | G | H>;
export function chainArraysReverse<A, B, C, D, E, F, G, H, I>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>): IArraysChain<A | B | C | D | E | F | G | H | I>;
export function chainArraysReverse<A, B, C, D, E, F, G, H, I, J>(a: ArrayLike<A>, b: ArrayLike<B>, c: ArrayLike<C>, d: ArrayLike<D>, e: ArrayLike<E>, f: ArrayLike<F>, g: ArrayLike<G>, h: ArrayLike<H>, i: ArrayLike<I>, j: ArrayLike<J>): IArraysChain<A | B | C | D | E | F | G | H | I | J>;

/**
 * Logically concatenates arrays (chains them), into a reversed iterable,
 * extended for the total "length" and "at" accessor from reversed index.
 *
 * NOTE: "length" value is cached, so if a source array changes length,
 * and you're explicitly using "length", then just call "refresh()".
 */
export function chainArraysReverse<T>(...arr: Array<ArrayLike<T>>): IArraysChain<T> {
    let length = 0;
    const refresh = () => {
        length = arr.reduce((a, c) => a + c.length, 0);
    };
    refresh();
    return {
        length,
        refresh,
        at(i: number): T | undefined {
            for (let j = arr.length - 1; j >= 0; j--) {
                if (i < arr[j].length) {
                    return arr[j][arr[j].length - (i + 1)];
                }
                i -= arr[j].length;
            }
        },
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
                    return {done: false, value: a[i--]};
                }
            };
        }
    }
}
