"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(ID, Name) {
        this._ID = ID;
        this._Name = Name;
    }
    get ID() {
        return this._ID;
    }
    set ID(ID) {
        this._ID = ID;
    }
    get Name() {
        return this._Name;
    }
    set Name(Name) {
        this._Name = Name;
    }
}
exports.Book = Book;
