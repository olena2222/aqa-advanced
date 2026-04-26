export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (value === "") {
      this._title = "uknown title";
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (value === "") {
      this._author = "uknown author";
      return;
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value !== "number") {
      this._year = "not a year";
      return;
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `Book description: name - ${this.title}, author - ${this.author} and year - ${this.year}`,
    );
  }

  static returnTheOldestBook(books) {
    let oldestBook = books[0];
    for (const currentBook of books) {
      if (currentBook.year < oldestBook.year) {
        oldestBook = currentBook;
      }
    }
    return oldestBook;
  }
}
