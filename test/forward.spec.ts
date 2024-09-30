import {expect} from './';
import {chainArrays} from "../src/chain-arrays";

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
        })
    });
});
