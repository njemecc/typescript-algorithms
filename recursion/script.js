
// fibonnaci

function fib(n) {
    if(n <= 2) {
        return 1
    }else{
        return fib(n - 1) + fib (n - 2)
    }
}


//console.log(fib(2))

//euclid`s allgorithm

const euclid = (x,y) => {

    if(x % y == 0){
        return y
    }

    return euclid(x, x % y)

}

//console.log(euclid(10,6))

