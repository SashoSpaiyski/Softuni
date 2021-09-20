function gcd(a, b){
    while(b){
        let t=b;
        b=a%b;
        a=t;
    }
    console.log(a);
}

gcd(15, 5);
gcd(2154, 458);