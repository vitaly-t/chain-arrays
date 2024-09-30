import {expect} from './';
import {chainArraysReverse} from "../src/chain-arrays";

describe('reverse', () => {
    describe('iterator', () => {
        it('must produce all elements', () => {
            expect([...chainArraysReverse([1, 2], [3, 4], [5, 6])]).to.eql([6, 5, 4, 3, 2, 1]);
        });
    });
});
