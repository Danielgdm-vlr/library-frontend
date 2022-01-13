
export class Book{
    id !: number;
    name !: string;
    genre !: string;
    author !: string;

    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}