// Modules - Encapsulated Code (only share minimum)
//COmmonJS, every file is module(by default)

const names = require('./4-First_Module')
const sayHi = require('./5-utils')
const data = require('./6-alternative-module-call')

require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)