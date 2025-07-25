// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07; 
    return valueInDollar; 
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5; // Convert euros to dollars
    return valueInYen; // Return the converted value
    
}
 
const fromYenToPound = function(valueInYen) {
    let valueInDollar = valueInYen / 156.5; // Convert yen to dollars
    let valueInPound = valueInDollar * 0.87; // Convert dollars to pounds
    return valueInPound; // Return the converted value
}
module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };