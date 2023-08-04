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
const path = require('path');
const curFile = path.basename(__filename);

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
			//process.exit(1)
			break
	}
	return formattedErrorLevel
}

/**
 * Creates a nicley formatted log message ready for console, with date,
 * time, error level, message, and location
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
function consoleOut(errorLevel, errorMsg, errorLocation, outputFunc = outputMsg) {
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

/** 
 * Outputs an error relevant to local read operations from fs.readFile()
 * 
 * @param {string} err the error produced
 * @param {boolean} isCritical was the operation required to proceed
 * 
 * @returns {boolean} is it okay to proceed
 */
function readLocalFileError(err, isCritical) {



	switch (err) {
		// Permission denied
		case 'EACCES':
			consoleOut(4, "Read file error: Permission denied. (RA-1001)", curFile)
			criticalCheck(isCritical)
			break
		// Bad file descriptor
		case 'EBADF':
			consoleOut(4, "Read file error: Bad file descriptor. (RA-1002)", curFile)
			break
		// Too many open files
		case 'EMFILE':
			consoleOut(4, "Read file error: Too many open files. (RA-1003)", curFile)
			break
		// No such file or directory
		case 'ENOENT':
			consoleOut(4, "Read file error: No such file or directory. (RA-1004)", curFile)
			break
		// Not a directory
		case 'ENOTDIR':
			consoleOut(4, "Read file error: Not a directory. (RA-1005)", curFile)
			break
		// File name too long
		case 'ENAMETOOLONG':
			consoleOut(4, "Read file error: File name is too long. (RA-1006)", curFile)
			break
		// Is a directory
		case 'EISDIR':
			consoleOut(4, "Read file error: Expected file, is a directory. (RA-1007)", curFile)
			break
		// Input/output error
		case 'EIO':
			consoleOut(4, "Read file error: I/O error. (RA-1008)", curFile)
			break
		default:
			consoleOut(4, "Read file error: Unknown error. (RA-1010)", curFile)
			break
	}

	function criticalCheck(isCritical) {
		if (isCritical = 1) {
			return false
			// Proceed to exit handler
		} else {
			return true
		}
	}
}

module.exports = {
	consoleOut,
	outputMsg,
	readLocalFileError
}