export var calculateTotal = (cart) => {
    var total= 0
    cart.forEach(element => {
        total+=element.cost*element.quantity
    });
    return total
}