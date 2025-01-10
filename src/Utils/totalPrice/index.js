/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {Number} Total Price
 */


export const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
        total += product.price;
    });
    return total;
}