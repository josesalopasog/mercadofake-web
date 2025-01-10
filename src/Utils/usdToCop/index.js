/**
 * This function give a number in COP for prices. 
 * @param {Number} amount The number you want in COP format
 * @param {Boolean} showDecimals True if you want to show decimals 
 * @returns {String} Returns the number in COP format 
 */

export const usdToCop = (amount, showDecimals = false) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: showDecimals ? 2 : 0, // Mostrar o eliminar decimales
        maximumFractionDigits: showDecimals ? 2 : 0, // Control máximo de decimales
    }).format(amount*4300);
}

