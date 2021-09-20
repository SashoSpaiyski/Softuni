function sameNumbers(number){
    let firstDigit=number%10;
    number= Math.floor(number/=10);
    let digit;
    let sum=firstDigit;
    let isSame=true;
    while(number){
        digit=number%10;
        sum+=digit;
        if(digit!=firstDigit){
            isSame=false;
        }
        number =Math.floor(number/=10);
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);