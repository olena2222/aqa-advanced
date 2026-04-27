function sayHello(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}
sayHello("hello", 2000);
