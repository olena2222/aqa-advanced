function handleNum(number, function1, function2) {
    if (number % 2 === 0) {
        return handleEven();
    }
    else return handleOdd();
}
function handleEven(params) {
    return "number is even";
}
function handleOdd(params) {
    return "number is odd";
}
console.log(handleNum(11, handleEven, handleOdd))