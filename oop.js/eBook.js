import { Book } from "./book.js";
export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (value === "") {
      this._fileFormat = "uknown format";
      return;
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Book description: name - ${this.title}, author - ${this.author} year - ${this.year} and format - ${this.fileFormat}`,
    );
  }
  static newMethod(books, fileFormat) {
    return new EBook(books.title, books.author, books.year, fileFormat);
  }
}
