function toDo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json(),
  );
}
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json(),
  );
}

const array = Promise.all([toDo(), getUsers()]).then((resolvedArray) => {
  console.log(resolvedArray);
  return resolvedArray;
});
const array2 = Promise.race([toDo(), getUsers()]).then((resolvedArray) => {
  console.log(resolvedArray);
});
