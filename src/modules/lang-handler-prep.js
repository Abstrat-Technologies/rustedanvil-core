/*
 *	lang-handler-prep.js
 *
 *  Reads, formats and prepares language
 *  files for use
 * 
 * </> with ♥ by Arek "AGDeveloper" Kwapis
 * 
 */

/////////////////////////////
// IMPORTS
/////////////////////////////
const fs = require('fs')
const path = require('path')
const eHandler = require('./error-handler')
const logMsg = eHandler.consoleOut
const curFile = path.basename(__filename)
const settings = require('../conf/settings.json')

/////////////////////////////
// CODE
/////////////////////////////

// Gets the language and prepares a filepath 
function getLangFilePath() {
	const lang = settings.language
	const langFile = path.join(__dirname, '../l10n/', lang + '.json')
	return langFile
}

// Checks if file exists
function verifyLangFile() {
	let path = getLangFilePath()

	try {
		fs.accessSync(path, fs.constants.F_OK)
		return true
	} catch (err) {
		eHandler.readLocalFileError(err.code, curFile, 1)
		return false
	}
}

// Parses the language file to something we can actually work with
async function parseLangFile() {
	let path = getLangFilePath()
	const fileCheckBit = verifyLangFile()

	if (fileCheckBit == 0) {
		logMsg(4, "There was an error processing the language file.", curFile)
		process.exit(1) // REMOVE THIS AND PLACE A CALL TO THE EXIT PROCESS, THIS IS UNGRACEFUL AS ALL FUCK!!!!!
	} else {
		try {
			const data = await fs.promises.readFile(path, 'utf8')
			const langData = JSON.parse(data)
			logMsg(0, "Read OK!", curFile)
			return langData
		} catch (err) {
			eHandler.readLocalFileError(err.code, curFile, 1) // Yes, this is pretty pointless. Too bad!S
			logMsg(4, "Unable to parse language file!", curFile)
			process.exit(1) // REMOVE THIS, IT SHOULD BE HANDELED BY THE CRITICAL BIT FLAG SET EARLIER!!!!!
		}
	}
}

// Prepare lang file for use
async function langData() {
	const data = await parseLangFile()
	const langStrings = []

	for (const langName in data) {
		langStrings.push([langName, data[langName]]);
	}

	logMsg(0, "Language file sucessfully processed", curFile)
	return langStrings // type: object
}

// Dummied for now - there's nothing here to broadcast. Only lang handler should recieve this files out. This file is simply
// to prepare for normal lang handler use. Args can be passed to lang handler.

// Any functions we'd like to broadcast go here
// function broadcastFuncs() {
// 	// TODO
// }

// Export any functions for use elsewhere
module.exports = {
	broadcastFuncs,
	langData
}