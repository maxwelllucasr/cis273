
function createSlope(x1,x2,y1,y2){

    if ((x2-x1) == 0)
        return null;
    else
        return ((y2-y1)/(x2-x1));
}

