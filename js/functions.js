
/*
*******************************
Food n' Boom'd
Generic Functions JS
Version 1
*******************************
*/

export function createSlope(x1,x2,y1,y2){

    if ((x2-x1) == 0 && (y2-y1) > 0)
        return "-";

    else if ((x2-x1) == 0 && (y2-y1) < 0)
        return "+";
    else{
        let y = y2-y1;
        let x = x2-x1;

        let reduced = reduce(y,x);

        y = reduced[0];
        x = reduced[1];

        return Array(y, x);

    }
}

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }

  export function distance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
   
  }