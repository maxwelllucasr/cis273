
export function createSlope(x1,x2,y1,y2){

    if ((x2-x1) == 0 && (y2-y1) > 0)
        return "-";

    else if ((x2-x1) == 0 && (y2-y1) < 0)
        return "+";
    else{
        let y = y2-y1;
        let x = x2-x1;


        //Using this (somenumber/10^length-1) to reformat extreme numerators and denomiators to something in the 1-10 range.
        
        // console.log(y.toString().length);

        // let yLeng = Math.pow(10,y.toString().length -1);
        // let xLeng = Math.pow(10,x.toString().length -1);

        // console.log(yLeng);

        // let newX = x/xLeng;
        // let newY = y/yLeng;

        // console.log(decimalSlope);
        let reduced = reduce(y,x);
        // console.log(y, x);

        y = reduced[0];
        x = reduced[1];

        // if (x2 < x1) x = -Math.abs(x);


        // console.log(y, x);

        // if(y <= 0) {
        //     y = y;
        //     x = -Math.abs(x);
        // }

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