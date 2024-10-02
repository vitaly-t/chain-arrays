import {expect} from './';
import {chainArraysReverse} from '../src/chain-arrays';

describe('reverse', () => {
    describe('iterator', () => {
        it('must produce all elements', () => {
            expect([...chainArraysReverse([1, 2], [3, 4], [5, 6])]).to.eql([6, 5, 4, 3, 2, 1]);
        });
        it('must work empty', () => {
            expect([...chainArraysReverse()]).to.eql([]);
        });
        it('must skip empty arrays', () => {
            expect([...chainArraysReverse([], [3, 4], [5, 6])]).to.eql([6, 5, 4, 3]);
            expect([...chainArraysReverse([], [3, 4], [])]).to.eql([4, 3]);
            expect([...chainArraysReverse([1, 2], [], [5, 6])]).to.eql([6, 5, 2, 1]);
            expect([...chainArraysReverse([], [], [])]).to.eql([]);
        })
    });
    describe('at', () => {
        it('must handle all indexes', () => {
            const c = chainArraysReverse([1, 2], [3, 4], [5, 6]);
            expect(c.at(0)).to.eq(6);
            expect(c.at(1)).to.eq(5);
            expect(c.at(2)).to.eq(4);
            expect(c.at(3)).to.eq(3);
            expect(c.at(4)).to.eq(2);
            expect(c.at(5)).to.eq(1);
        });
        it('must handle empty arrays', () => {
            const c = chainArraysReverse([1, 2], [], [5, 6]);
            expect(c.at(2)).to.eq(2);
        });
        it('must handle invalid indexes', () => {
            const c = chainArraysReverse([1, 2]);
            expect(c.at(-1)).to.be.undefined;
            expect(c.at(2)).to.be.undefined;
        });
    });
    describe('length', () => {
        it('must reflect the actual total length', () => {
            const c = chainArraysReverse([1, 2], [3, 4], [5, 6]);
            expect(c.getLength()).to.eq(6);
        });
    });
});
