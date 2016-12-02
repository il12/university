//(x,y)=>(y==1)?x:x*p1(x,--y);

function p1(x,y) {
    if(y == 1) {
        return x;
    }else{
        console.log('y=',y,'x=',x);
        return x*p1(x,--y);
    }
}

console.log(p1(2,4));