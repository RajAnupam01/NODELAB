let num = 1233455667668888;
let primenum = true;
for(let i =2; i<num; i++){
    if(num%i==0){
        primenum = false;
        break;
    }
}
if(primenum){
    console.log("It is a prime Number")
}
else{
    console.log("It is not a prime number")
}