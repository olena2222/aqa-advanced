function rectangleArea1(width, heigth) {
    const area = width * heigth;
    return area;
}
console.log(rectangleArea1(5, 10));

const rectangleArea2 = function (width, heigth) {
    return width * heigth;
}
console.log(rectangleArea2(2, 15));

const rectangleArea3 = (width, heigth) => width * heigth;
console.log(rectangleArea3(6, 12));

