const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 32,
};
person.email = "jdoe@gmail.com";
delete person.age;

console.log(person);
