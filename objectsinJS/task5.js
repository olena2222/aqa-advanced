const users = [
  { name: "Anna", email: "anna@gmail.com", age: 25 },
  { name: "Vira", email: "vira@gmail.com", age: 24 },
  { name: "Maria", email: "maria@gmail.com", age: 23 },
];

for (const element of users) {
  console.log(
    `Name is ${element.name}, email is ${element.email} and age is ${element.age}`,
  );
};

for (const { name, email, age } of users) {
  console.log(`Name is ${name}, email is ${email} and age is ${age}`);
};
