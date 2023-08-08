var customerName = "bob"
const leastFavoriteCustomer = 'john'
var bestCustomer;
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        return customerName = customerName.toUpperCase();
    }
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'emily'
}
