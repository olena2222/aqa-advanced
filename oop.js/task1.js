import { Book } from "./book.js";
import { EBook } from "./eBook.js";

const book1 = new Book("Romancing mister Bridgerton", "Julia Quin", 2002);
book1.printInfo();

const book2 = new Book("Murder on the Orient Express", "Agatha Christie", 1975);
book2.printInfo();

const book3 = new Book("", "Stephen King", 1974);
book3.printInfo();

const eBook1 = new EBook(
  "Miss Marple's Final Cases ",
  "Agatha Christie",
  2016,
  ".pdf",
);
eBook1.printInfo();

const eBbook2 = new EBook(
  "Just Between Ourselves",
  "Alan Ayckbourn",
  2008,
  ".docs",
);
eBbook2.printInfo();

const eBook3 = new EBook("Small Island", "Andrea Levy", 1950, ".txt");
eBook3.printInfo();

console.log(
  Book.returnTheOldestBook([book1, book2, book3, eBook1, eBbook2, eBook3]),
);
console.log(EBook.newMethod(book2, ".txt"));
