/*
 *	lang-handler.js
 *
 *  Handles converting temp strings into
 *  language strings
 * 
 * </> with ♥ by Arek "AGDeveloper" Kwapis
 * 
 */

/////////////////////////////
// IMPORTS
/////////////////////////////

const fs = require('fs')
const path = require('path')
const langRaw = require('./lang-handler-prep')
//const langExport = require('./error-handler')

const langExport = "$sample_text_2"

function formatMsg() {
	const langObjRaw = langRaw
	let dataOut

	langObjRaw.langData().then(data => {
		keyLookup()
	});

	return dataOut
}

function keyLookup() {
	let dataObj = formatMsg()
	let strKey = langExport.slice(1)

	console.log(dataObj)
}

keyLookup()