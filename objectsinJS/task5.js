const users = [
  { name: "Anna", email: "" },
  { lastName: null, city: "Lviv" },
  { street: "Naukova" },
];

for (const element of users) {
  console.log(
    element.name ?? "guest",
    element.email || "guest@gmail.com",
    element.lastName ?? "uknown",
    element.city ?? "Kyiv",
    element.street ?? "Kulparkivska",
  );
}

for (const { name, email, lastName, city, street } of users) {
  console.log(
    `Name is ${name ?? "guest"}, email is ${email || "guest@gmail.com"}, last name is ${lastName ?? "uknown"}, city is ${city ?? "Kyiv"}, and street is ${street ?? "Kulparkivska"}`,
  );
}
