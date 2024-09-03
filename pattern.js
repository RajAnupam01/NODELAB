function printPattern(inputString){
    let output = '';
    for(let i=1; i<=inputString.length; i++){
       output = output + inputString.slice(0,i) + '\n'
    }
    console.log(output);

}
printPattern('Amit')
