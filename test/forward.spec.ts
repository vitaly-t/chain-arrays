import {expect} from './';
import {chainArrays} from "../src/chain-arrays";

describe('forward', () => {
    describe('iterator', () => {
        it('must produce all elements', () => {
            expect([...chainArrays([1, 2], [3, 4], [5, 6])]).to.eql([1, 2, 3, 4, 5, 6]);
        });
    });
});
