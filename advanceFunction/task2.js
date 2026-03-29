function myFunction(num) {
    if (num <= 0)
        return;
    console.log(num);
    myFunction(num - 1);
}
myFunction(5);
