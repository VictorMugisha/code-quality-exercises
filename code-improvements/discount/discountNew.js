// Use more descriptive function name
function calculateDiscount(totalAmount) {
    const discount =
        totalAmount > 100 ?
            totalAmount * 0.1 :
            totalAmount * 0.05;
    return discount;
}