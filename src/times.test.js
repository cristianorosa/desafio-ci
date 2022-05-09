const times = require('./times')

test("add 1 * 2 to be equal 2", () => { 
	expect(times(1,2)).toBe(2);
});