import { Book } from "./book";
import { BookManager } from "./BookManager";

let book1 = new Book("A1", "HTML & CSS");
let book2 = new Book("A2", "PHP");
let book3 = new Book("A3", "JS");
let book4 = new Book("A4", "TS");

let bookList = new BookManager();

bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
console.log(bookList.getList());

bookList.delete("A1");
console.log(bookList.getList());

bookList.update("A2","Nghiem Van Dong");
console.log(bookList.getList());