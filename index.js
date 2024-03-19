function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function james() {};
}
function receivesANamedFunction(callback) {
    callback();
}
function returnsAnAnonymousFunction() {
    return function() {};
}
function receivesAnAnonymousFunction(callback) {
    callback();
}