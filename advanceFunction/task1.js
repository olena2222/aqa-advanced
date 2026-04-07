function handleNum(number, function1, function2) {
    if (number % 2 === 0) {
        return function1();
    }
    else return function2();
}
function handleEven() {
    return "number is even";
}
function handleOdd() {
    return "number is odd";
}
console.log(handleNum(11, handleEven, handleOdd))