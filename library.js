function lib1(){
    console.log("This is library file")
}
function lib2(){
    console.log("This is seconf library file")
}
// global.lib1=lib1 
 module.exports.lib1 = lib1;
 module.exports.lib2 = lib2;