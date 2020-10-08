const options = {
	slowMethods: ['marinate', 'simmer', 'roast', 'slow-cook', 'prove'],
	fastMethods: ['Fry', 'Boil', 'Deep-fry', 'Steam', 'Stir-fry'],
	spices: {
		"Asia": ['saffron', 'kaffir lime', 'galangal'],
		"Europe": ['juniper', 'parmesan', 'truffle'],
		"North America": ['salt', 'ketchup', 'BBQ'],
		"South America": ['chocolate', 'chipotle', 'paprika']
	},
	servingMethods: ['on a silver platter', "wearing your mother's finest whalebone corset", 'buried under a yew tree by the light of a cold moon', 'inside the skull of your nemesis', 'on agar jelly in a petri dish', 'dripping through a colander']
}


const randomOption = (array) => {
	const length = array.length;
	const index = Math.floor(Math.random() * length)
	return array[index];	
}

const randomFastTime = () => {
	const time = Math.floor(Math.random() * 60) + 1;
	return time;
}

const randomSlowTime = () => {
	const time = Math.floor(Math.random() * 24) + 1;
	return time;
}

const getRecipe = (ingArray, region) => {
	const [ing1, ing2, ing3] = ingArray
	const slowMethod = randomOption(options.slowMethods);
	const fastMethod = randomOption(options.fastMethods);
	const spice1 = randomOption(options.spices[region]);
	const spice2 = randomOption(options.spices[region]);
	const fastTime = randomFastTime();
	const slowTime = randomSlowTime();
	const servingMethod = randomOption(options.servingMethods);

	const recipeStep1 = `${fastMethod} ${ing1} with ${spice1} for ${fastTime} minutes.`
	const recipeStep2 = `Add ${ing2} and ${slowMethod} with ${spice2} for ${slowTime} hours.`
	const recipeStep3 = `Combine with ${ing3} and serve ${servingMethod}.`
	return [recipeStep1, recipeStep2, recipeStep3]
}


module.exports = {randomOption, randomFastTime, randomSlowTime, getRecipe}