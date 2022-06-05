export class Book{
    _ID: string;
    _Name: string;
    constructor(ID: string, Name: string){
        this._ID = ID;
        this._Name = Name;
    }
    get ID(){
        return this._ID;
    }
    set ID(ID){
        this._ID = ID;
    }
    get Name(){
        return this._Name
    }
    set Name(Name){
        this._Name = Name
    }
}