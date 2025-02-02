function promiseChain(chain, defaultValue = null) {
	let output = new Promise((resolve, reject) => {
		resolve(defaultValue);
	});
	for (let i = 0; i < chain.length; i++) {
		let f = chain[i];
		output = output.then(f);
	}
	return output;
}

module.exports = { promiseChain };
