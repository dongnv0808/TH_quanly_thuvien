import { Book } from "./book";

export class BookManager{
    books: Book[] = [];
    constructor(){

    }
    add(book: Book): void {
        this.books.push(book);
    }
    getList(){
        return this.books;
    }
    findBook(ID: string){
        let i = -1;
        this.books.forEach((book, index) => {
            if(book.ID == ID){
                i = index;
            }
        })
        return i;
    }
    delete(ID: string): void{
        let indexBookDelete = this.findBook(ID);
        if(indexBookDelete !== -1){
            this.books.splice(indexBookDelete, 1)
        }else{
            throw new Error("Delete Error");
        }
    }
    update(ID: string, Name: string){
        let indexBookUpdate = this.findBook(ID);
        if(indexBookUpdate !== -1){
            this.books[indexBookUpdate].Name = Name;
        }else{
            throw new Error("Update Erro");
        }
    }
}