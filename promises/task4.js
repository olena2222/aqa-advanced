export class apiToDo {
  toDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (response) => response.json(),
    );
  }
}

class apiUsers {
  getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(
      (response) => response.json(),
    );
  }
}
