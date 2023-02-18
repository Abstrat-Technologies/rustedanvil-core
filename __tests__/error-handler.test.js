const errorHandler = require('../src/modules/error-handler')

describe('errorHandler', () => {
	it('should return the correct strings for INFO error level 0', () => {
		const errorLevel = 0
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const errorOutput = errorHandler(errorLevel, errorMsg, errorLocation)

		expect(errorOutput).toMatch(errorMsg)
		expect(errorOutput).toMatch(errorLocation)
		expect(errorOutput).toMatch('INFO')
	})

	it('should return the correct strings for DEBUG error level 1', () => {
		const errorLevel = 1
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const errorOutput = errorHandler(errorLevel, errorMsg, errorLocation)

		expect(errorOutput).toMatch(errorMsg)
		expect(errorOutput).toMatch(errorLocation)
		expect(errorOutput).toMatch('DEBUG')
	})

	it('should return the correct strings for WARNING error level 2', () => {
		const errorLevel = 2
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const errorOutput = errorHandler(errorLevel, errorMsg, errorLocation)

		expect(errorOutput).toMatch(errorMsg)
		expect(errorOutput).toMatch(errorLocation)
		expect(errorOutput).toMatch('WARN')
	})

	it('should return the correct strings for ERROR error level 3', () => {
		const errorLevel = 3
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const errorOutput = errorHandler(errorLevel, errorMsg, errorLocation)

		expect(errorOutput).toMatch(errorMsg)
		expect(errorOutput).toMatch(errorLocation)
		expect(errorOutput).toMatch('ERROR')
	})

	it('should return the correct strings for FATAL error level 4', () => {
		const errorLevel = 4
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const errorOutput = errorHandler(errorLevel, errorMsg, errorLocation)

		expect(errorOutput).toMatch(errorMsg)
		expect(errorOutput).toMatch(errorLocation)
		expect(errorOutput).toMatch('FATAL')
	})
})