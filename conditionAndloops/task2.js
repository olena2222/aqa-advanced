const avarageGrade = 87;

switch (true) {
    case avarageGrade < 60:
        console.log("Незадовільно");
        break;
    case avarageGrade >= 60 && avarageGrade <= 70:
        console.log("Задовільно");
        break;
    case avarageGrade >= 71 && avarageGrade <= 80:
        console.log("Добре");
        break;
    case avarageGrade >= 81 && avarageGrade <= 90:
        console.log("Дуже добре");
        break;
    default: console.log("Відмінно")
        break;
}