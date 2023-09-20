// Module for handling language files

const fs = require('fs')
const path = require('path')
const eHandler = require('./error-handler')
const logMsg = eHandler.consoleOut
const curFile = path.basename(__filename)
const settings = require('../conf/settings.json')

// Read the language file
function checkCurrentLang() {
	const lang = settings.language
	const langFile = './l10n/' + lang + '.json'

	logMsg(0, "Lang file = " + langFile, curFile)

	return langFile
}

// Verify the language file
function parseLangFile() {
	const langFile = checkCurrentLang()

	fs.readFile(langFile, 'utf8', (err, data) => {
		if (err) {
			eHandler.readLocalFileError(err.code, 1)
			logMsg(2, "Unable to access language file!", curFile)
		}
		else {
			let langData = ""

			try {
				langData = JSON.parse(data)
				logMsg(0, "Read OK!", curFile)
				
			} catch (error) {
				logMsg(2, error, curFile)
				logMsg(2, "Unable to parse language file!", curFile)
			}

			if (langData) {
				return langData
			}

			if (!langData) {
				logMsg(4, "A fatal error occured", curFile)
			}
		}
	})
}

// Prepare lang file for use
function prepareLangFile() {
	const langFile = parseLangFile()
	const langData = []

	for (const langName in langFile) {
		langData.push([langName, langFile[langName]]);
	}

	logMsg(0, langData, curFile)
	logMsg(0, langFile, curFile)

	return langData
}

prepareLangFile()