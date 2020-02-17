

export function fraction(decimal){

    if(!decimal){
        decimal=this;
    }
    let whole = String(decimal).split('.')[0];
    decimal = parseFloat("."+String(decimal).split('.')[1]);
    let num = "1";
    for(let z=0; z<String(decimal).length-2; z++){
        num += "0";
    }
    decimal = decimal*num;
    num = parseInt(num);
    for(let z=2; z<decimal+1; z++){
        if(decimal%z==0 && num%z==0){
            decimal = decimal/z;
            num = num/z;
            z=2;
        }
    }
    //if format of fraction is xx/xxx
    if (decimal.toString().length == 2 && 
            num.toString().length == 3) {
                //reduce by removing trailing 0's
        decimal = Math.round(Math.round(decimal)/10);
        num = Math.round(Math.round(num)/10);
    }
    //if format of fraction is xx/xx
    else if (decimal.toString().length == 2 && 
            num.toString().length == 2) {
        decimal = Math.round(decimal/10);
        num = Math.round(num/10);
    }
    //get highest common factor to simplify
    var t = HCF(decimal, num);

    //return the fraction after simplifying it
    return ((whole==0)?"" : whole+" ")+decimal/t+"/"+num/t;
}

function HCF(u, v) { 
    var U = u, V = v
    while (true) {
        if (!(U%=V)) return V
        if (!(V%=U)) return U 
    } 
}