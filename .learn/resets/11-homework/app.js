const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07; // Convert euros to dollars
    return valueInDollar; // Return the converted value
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 1.07; // Convert euros to dollars
    return valueInYen; // Return the converted value
}
module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };