var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    

function price(object) {
    let totalPrice = 0 
let arrayValues = Object.values(object)
for ( let i = 0; i < arrayValues.length; i++){
    let value = arrayValues[i]
    let parsedValue = Number.parseInt(value)
    totalPrice = totalPrice + parsedValue
}
return totalPrice
}

console.log(price(services))

function minPrice(object){
    let arrayValues = Object.values(object)
    let numberArray = []
    
    for ( let i = 0; i < arrayValues.length; i++){
        let value = arrayValues[i]
        numberArray.push(Number.parseInt(value))
    }
    return Math.min(...numberArray)
    }
    console.log(minPrice(services))

    function maxPrice(object){
        let arrayValues = Object.values(object)
        let numberArray =[]
        for ( let i = 0; i < arrayValues.length; i++){
            let value = arrayValues[i]
            numberArray.push(Number.parseInt(value))
        }
        return Math.max(...numberArray)
    }

console.log(maxPrice(services))
