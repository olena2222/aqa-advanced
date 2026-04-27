function toDo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json(),
  );
}

async function getToDo() {
  const data = await toDo();
  console.log(data);
}
getToDo();
