/*
 *	error-handler.js
 *
 *  A pretty error formatter for console-based
 *  NodeJS applications
 * 
 *  (c) 2023 Abstrat Technologies Limited
 *  An ABSTRAT GROUP Company
 * 
 * </> with ♥ by Arek "AGDeveloper" Kwapis
 * 
 */

const colours = require('colors')
const date = require('date-and-time')

/**
 * Quickly allows the current date, time and timezone to
 * be accessed for ease-of-use in a logging context
 * 
 * @param none
 * 
 * @returns {string} date, time and timezone as string
 */
function dateOutput() {
	let now = new Date()
	let dateOut = date.format(now, 'YYYY/MM/DD HH:mm:ss [GMT]Z', true)
	return dateOut
}

/**
 * Formats & processes the given error level integer in
 * order for it's string equivalent to be used
 *
 * @param {int} errorLevel the error level integer (0 - 4)
 * 
 * @returns {string} the formatted errorLevel as a string
 */
function errorLevelFormat(errorLevel) {
	let formattedErrorLevel
	 switch(errorLevel) {
		// INFO
		case 0:
			formattedErrorLevel = colours.brightWhite("INFO")
			break
		// DEBUG
		case 1:
			formattedErrorLevel = colours.white("DEBUG")
			break
		// WARNING
		case 2:
			formattedErrorLevel = colours.yellow("WARN")
			break
		// ERROR
		case 3:
			formattedErrorLevel = colours.brightRed("ERROR")
			break
		// FATAL
		case 4:
			formattedErrorLevel = colours.red("FATAL")
			break
		// If this happens, the universe must have exploded
		default:
			console.log(colours.brightRed("FATAL: A fatal error has occured. The application cannot proceed."))
			process.exit(1)
			break
	}
	return formattedErrorLevel
}

/**
 * Creates a nicley formatted log message ready for console, 
 * with date, time, error level, message, and location
 * 
 * 0 = INFO;
 * 1 = DEBUG;
 * 2 = WARN;
 * 3 = ERROR;
 * 4 = FATAL;
 *
 * @param {int} errorLevel the error level integer (0 - 4)
 * @param {string} errorMsg the message to be displayed in console
 * @param {string} errorLocation the file or function calling this log
 * @param {object} [outputFunc = outputMsg] the function it should output to.
 * 
 * @returns {string} the formatted message ready to be printed
 */
function errorHandler(errorLevel, errorMsg, errorLocation, outputFunc = outputMsg) {
	dateOut = dateOutput()
	formattedErrorLevel = errorLevelFormat(errorLevel)
	let errorOut = `${colours.gray(dateOut)} ${formattedErrorLevel}${colours.gray(": ")}${colours.brightBlue(errorMsg)}${colours.gray(" - called by ")}${colours.brightCyan(errorLocation)}`
	outputFunc(errorOut)
}

/**
 * Outputs the message passed to it to the log
 *
 * @param {string} msg the message to be outputted
 * 
 * @returns {none}
 */
function outputMsg(msg) {
	console.log(msg)
}

module.exports = {
	errorHandler,
	outputMsg
}