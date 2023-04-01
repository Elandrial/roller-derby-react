import * as common from './common'

describe('Utlitity functions',() => {
    it("difference calculates correctly", ()=>{
        expect(common.difference(-2,0)).toBe(2);
        expect(common.difference(-2,2)).toBe(4);
    });

    it("generate number range", () =>{
        expect([1]).toEqual(common.generateRange(1,1));
        expect([0,1,2,3,4,5].sort()).toEqual(common.generateRange(0,5).sort());
        expect([2,3,4,5,6,7].sort()).toEqual(common.generateRange(2,7).sort());
        expect([-2,-1,0,1,2,3,4,5,6,7].sort()).toEqual(common.generateRange(-2,7).sort());
    });
});