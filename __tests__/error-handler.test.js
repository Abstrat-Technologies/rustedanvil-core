const errorHandler = require('../src/modules/error-handler');

describe('errorHandler', () => {
	test('returns a string with the correct format for each error level', () => {
		const errorLevels = [0, 1, 2, 3, 4];
		const errorMsg = 'Something went wrong.';
		const errorLocation = 'server.js';
		const expectedOutputs = [
			`INFO: ${errorMsg} - called by ${errorLocation}`,
			`DEBUG: ${errorMsg} - called by ${errorLocation}`,
			`WARN: ${errorMsg} - called by ${errorLocation}`,
			`ERROR: ${errorMsg} - called by ${errorLocation}`,
			`FATAL: ${errorMsg} - called by ${errorLocation}`,
		];

		errorLevels.forEach((errorLevel, index) => {
			const errorOut = errorHandler(errorLevel, errorMsg, errorLocation);
			expect(errorOut).toEqual(expectedOutputs[index]);
		});
	});
});
