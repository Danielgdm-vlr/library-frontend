import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../model/book";

@Injectable()
export class BookService{

    readonly baseURL = "http://localhost:8080/api/v1/book";
    readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private httpClient: HttpClient,) {
    }

    getAll(): Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.baseURL, this.httpOptions);
    }

    post(book: Book): void{
        this.httpClient.post<any>(this.baseURL, book, this.httpOptions).subscribe();
    }

    getByIdAndGenre(id: number, genre: string): Observable<Book>{
        return this.httpClient.get<Book>(this.baseURL + `/id/genre/?id=${id}&genre=${genre}`, this.httpOptions);
    }
}