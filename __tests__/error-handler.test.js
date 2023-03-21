const loggingUtils = require('../src/modules/error-handler')
const errorHandler = loggingUtils.errorHandler
const colours = require('colors')
const date = require('date-and-time')
const loggingPath = require('path');
var curFile = loggingPath.basename(__filename);

function dateOutput() {
	let now = new Date()
	let dateOut = date.format(now, 'YYYY/MM/DD HH:mm:ss [GMT]Z', true)
	return dateOut
}

describe('errorHandler', () => {
	it('should call the output function with the correct string for INFO error level 0', () => {
		const errorLevel = 0
		const errorMsg = 'Something went wrong.'
		const errorLocation = curFile

		const outputMock = jest.fn()
		errorHandler(errorLevel, errorMsg, errorLocation, outputMock)

		const expectedOutput = `${colours.gray(dateOutput())} ${colours.brightWhite('INFO')}${colours.gray(': ')}${colours.brightBlue(errorMsg)}${colours.gray(' - called by ')}${colours.brightCyan(errorLocation)}`
		expect(outputMock).toHaveBeenCalledWith(expectedOutput)
	})

	it('should call the output function with the correct string for DEBUG error level 1', () => {
		const errorLevel = 1
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const outputMock = jest.fn()
		errorHandler(errorLevel, errorMsg, errorLocation, outputMock)

		const expectedOutput = `${colours.gray(dateOutput())} ${colours.white('DEBUG')}${colours.gray(': ')}${colours.brightBlue(errorMsg)}${colours.gray(' - called by ')}${colours.brightCyan(errorLocation)}`
		expect(outputMock).toHaveBeenCalledWith(expectedOutput)
	})

	it('should call the output function with the correct string for WARNING error level 2', () => {
		const errorLevel = 2
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const outputMock = jest.fn()
		errorHandler(errorLevel, errorMsg, errorLocation, outputMock)

		const expectedOutput = `${colours.gray(dateOutput())} ${colours.yellow('WARN')}${colours.gray(': ')}${colours.brightBlue(errorMsg)}${colours.gray(' - called by ')}${colours.brightCyan(errorLocation)}`
		expect(outputMock).toHaveBeenCalledWith(expectedOutput)
	})

	it('should call the output function with the correct string for ERROR error level 3', () => {
		const errorLevel = 3
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const outputMock = jest.fn()
		errorHandler(errorLevel, errorMsg, errorLocation, outputMock)

		const expectedOutput = `${colours.gray(dateOutput())} ${colours.brightRed('ERROR')}${colours.gray(': ')}${colours.brightBlue(errorMsg)}${colours.gray(' - called by ')}${colours.brightCyan(errorLocation)}`
		expect(outputMock).toHaveBeenCalledWith(expectedOutput)
	})

	it('should call the output function with the correct string for FATAL error level 4', () => {
		const errorLevel = 4
		const errorMsg = 'Something went wrong.'
		const errorLocation = 'server.js'

		const outputMock = jest.fn()
		errorHandler(errorLevel, errorMsg, errorLocation, outputMock)

		const expectedOutput = `${colours.gray(dateOutput())} ${colours.red('FATAL')}${colours.gray(': ')}${colours.brightBlue(errorMsg)}${colours.gray(' - called by ')}${colours.brightCyan(errorLocation)}`
		expect(outputMock).toHaveBeenCalledWith(expectedOutput)
	})
})