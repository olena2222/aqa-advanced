const car1={
    brand:"Toyota",
    model: "Camry",
    year:2020
}
const car2={
    brand:"Nissan",
    model: "Leaf",
    owner:2023
}
const car3={...car1, ...car2}

console.log(car3);