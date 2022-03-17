const Calc = require('./Calc');


const calc = new Calc()

test("add 1+ 2 to be equal 3", () => {
    expect(calc.sum(1,2)).toBe(3);
});

test("sub 3 -  2 to be equal 1", () => {
    expect(calc.sub(3,2)).toBe(1);
});

test("times  3 *  2 to be equal 6", () => {
    expect(calc.times(3,2)).toBe(6);
});

test("div  8 *  2 to be equal 4", () => {
    expect(calc.div(8,2)).toBe(4);
});