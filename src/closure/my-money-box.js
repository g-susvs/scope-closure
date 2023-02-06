// function moneyBox(coins){
//     let savecoins = 0
//     savecoins += coins
//     console.log(savecoins)
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox(owner ,initialcount) {
    if(!owner || typeof owner !== 'string') return console.log('Owner required')
    let savecoins = typeof initialcount === 'number' ? initialcount : 0

    return {
        incrementCount: function (coins){
            savecoins += coins
            console.log(`${owner} has ${savecoins}`)
        },
        decrementCount: function (coins){
            savecoins -= coins
            console.log(`${owner} has ${savecoins}`)
        },
        show: function (){
            console.log(`${owner} has ${savecoins}`)
        }
    }
}

const {
    incrementCount: karenIncrementCount,
    decrementCount: karenDecrementCount,
    show: karenCount
} = moneyBox('Karen')

const {
    incrementCount: danteIncrementCount,
    decrementCount: danteDecrementCount,
    show: danteCount
} = moneyBox('Dante',10)

karenIncrementCount(10)
karenDecrementCount(5)
karenCount()
danteCount()