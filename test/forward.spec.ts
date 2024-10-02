import {expect} from './';
import {chainArrays} from '../src/chain-arrays';

describe('forward', () => {
    describe('iterator', () => {
        it('must produce all elements', () => {
            expect([...chainArrays([1, 2], [3, 4], [5, 6])]).to.eql([1, 2, 3, 4, 5, 6]);
        });
        it('must work empty', () => {
            expect([...chainArrays()]).to.eql([]);
        });
        it('must skip empty arrays', () => {
            expect([...chainArrays([], [3, 4], [5, 6])]).to.eql([3, 4, 5, 6]);
            expect([...chainArrays([], [3, 4], [])]).to.eql([3, 4]);
            expect([...chainArrays([1, 2], [], [5, 6])]).to.eql([1, 2, 5, 6]);
            expect([...chainArrays([], [], [])]).to.eql([]);
        });
    });
    describe('at', () => {
        it('must handle all indexes', () => {
            const c = chainArrays([1, 2], [3, 4], [5, 6]);
            expect(c.at(0)).to.eq(1);
            expect(c.at(1)).to.eq(2);
            expect(c.at(2)).to.eq(3);
            expect(c.at(3)).to.eq(4);
            expect(c.at(4)).to.eq(5);
            expect(c.at(5)).to.eq(6);
        });
        it('must handle empty arrays', () => {
            const c = chainArrays([1, 2], [], [5, 6]);
            expect(c.at(2)).to.eq(5);
        });
        it('must handle invalid indexes', () => {
            const c = chainArrays([1, 2]);
            expect(c.at(-1)).to.be.undefined;
            expect(c.at(2)).to.be.undefined;
        });
    });
    describe('length', () => {
        it('must reflect the actual total length', () => {
            const c = chainArrays([1, 2], [3, 4], [5, 6]);
            expect(c.getLength()).to.eq(6);
        });
    });
});
