const sub = require('./sub')

test("add 2 - 1 to be equal 1", () => { 
	expect(sub(2,1)).toBe(1);
});