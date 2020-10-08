const {randomOption, randomFastTime, randomSlowTime} = require('./RecipeGenerator')

describe('randomOption', () => {
	it('generates a random option from an array', () => {
		const array = ['marinate', 'simmer', 'roast', 'slow-cook', 'prove']
		const expected = randomOption(array)
		expect(array.includes(expected)).toBe(true)
		expect(typeof expected).toBe('string')
	});
});

describe('randomFastTime', () => {
	it('gives a number between 1 and 60', () => {
		expect(randomFastTime()).toBeGreaterThan(0)
		expect(randomFastTime()).toBeLessThan(61)
		expect(randomFastTime() % 1).toBe(0)
	});
});

describe('randomSlowTime', () => {
	it('gives a number between 1 and 24', () => {
		expect(randomSlowTime()).toBeGreaterThan(0)
		expect(randomSlowTime()).toBeLessThan(25)
		expect(randomSlowTime() % 1).toBe(0)
	});
});

