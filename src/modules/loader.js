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
			try {
				const settingData = JSON.parse(data)
				logMsg(0, "Read OK!", curFile)
				readModuleList(settingData)
				
			} catch (error) {
				//eHandler.readLocalFileError(error, 1)
				logMsg(2, "Unable to parse settings file! \n" +  error, curFile)
			}
		}
	
	})
}

function readModuleList(jsonData) {
	const moduleList = []

	for (const moduleName in jsonData.modules) {
		moduleList.push([moduleName, jsonData.modules[moduleName]]);
	}

	console.log(moduleList[1][0])
}

parseSettings()