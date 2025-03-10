let x = 5
let result= x
for (i=1;i<=3;i++){
    result=result*x
    console.log('Result'+ result)
}

function pow(x,y){
    let result = x
    for (i= 1; i <=3; i++)
        result = result*x
    return result
}
console.log(pow(5,3))