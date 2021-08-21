const sum = require('./sum');

test("add two number", ()=>{
    expect(sum(2,3)).toBe(5);
})