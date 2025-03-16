function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function checkProbabilityTheory(count) {
    let amount = count;
    let paired = 0;
    for (let i = 0; i < count; i++) {
        let randomNumber = getRandom(100, 1000)
            if (randomNumber % 2 === 0){
                paired++
            }
        }
    
    let unpaired = amount - paired;
    let pairedPercentage = Math.floor(paired / amount * 100);
    let undefinedPercentage = Math.floor(unpaired / amount * 100);
    let pairedToUnpairedPercentage = Math.floor(paired / unpaired * 100);

    console.log(amount)
    console.log('Paired numbers' + paired)
    console.log('Unpaired numbers' + unpaired)
    console.log('Percentage of paired numbers' + pairedPercentage)
    console.log('Percentage of unpaired numbers' + undefinedPercentage)
    console.log('Percentage of paired to unpaired numbers' + pairedToUnpairedPercentage)
}
 checkProbabilityTheory(25)