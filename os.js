const os = require('os')
const computerMemory = os.totalmem();
console.log(Math.round(computerMemory/(1024*1024*1024)),'GB')