// Module loader

// Load up the logging utilities
const eHandler = require('./error-handler')
const logMsg = eHandler.consoleOut
const path = require('path');
const curFile = path.basename(__filename);

logMsg(0, "Loading modules...", curFile)

const fs = require('fs')
const settings = './src/conf/settings.json'

logMsg(0, "Reading settings file...", curFile)


function parseSettings() {
	fs.readFile(settings, 'utf8', (err, data) => {
		if (err) {
			eHandler.readLocalFileError(err.code, 1)
			logMsg(2, "Unable to access settings file!", curFile)
		}
		else {
			let settingData = ""

			try {
				settingData = JSON.parse(data)
				logMsg(0, "Read OK!", curFile)
				
			} catch (error) {
				//eHandler.readLocalFileError(error, 1)
				logMsg(2, "Unable to parse settings file! \n" +  error, curFile)
			}

			if (settingData) {
				readModuleList(settingData)
			}

			if (!settingData) {
				logMsg(4, "A fatal error occured", curFile)
			}
		}
	})
}

function readModuleList(jsonData) {
	const moduleList = []

	for (const moduleName in jsonData.modules) {
		moduleList.push([moduleName, jsonData.modules[moduleName]]);
	}

	let formattedString = ""

	for (let i = 0; i < moduleList.length; i++) {
		// Counts the amount of entriesx in the array correctly
		// Now just create a easy-to-import string, ready to use to output a list of modules
		// with all their info so it looks like this:
		// Modules Found: Module1 [1.0.0], Module2 [1.0.0], Module3 [1.0.0]
		let tempStringHold = moduleList[i][0]
		if (formattedString.length == 0) {
			formattedString = tempStringHold
		}
		else {
			formattedString = formattedString + ", " + tempStringHold
		}

	}
	console.log(moduleList)
	logMsg(0, "Modules found: " + formattedString, curFile)
}

parseSettings()