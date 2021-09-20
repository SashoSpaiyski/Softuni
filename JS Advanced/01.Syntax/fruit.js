function calculateMoney(fruit, weight, pricePerKg) {
    let price = weight/1000 * pricePerKg;
    console.log(`I need $${price.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

calculateMoney('apple', 1563, 2.35);