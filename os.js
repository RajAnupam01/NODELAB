const os = require('os')
const computerMemory = os.totalmem();
console.log("Your Computer has memory of:",Math.round(computerMemory/(1024*1024*1024)),'GB')
console.log("Your OS type:",os.type())
console.log("OS version:",os.version());
console.log("OS platform:",os.platform());
console.log("CPUs:",os.cpus().length)
console.log("CPU architecture:",os.machine())