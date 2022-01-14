import { Component, Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book-service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  books: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'genre', 'author'];

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { 

    this.fetch();
  }

  ngOnInit(): void {
  }

  private fetch(){

    this.bookService.getAll().subscribe(books => this.books = new MatTableDataSource(books))
  }

  viewBook(book: Book){

    console.log(book);
    this.router.navigateByUrl ('book', { state: book });
    // this.route.data.subscribe((data: any) => {
    //   data.id = book.id;
    //   console.log(data.id);
    // })
  }
}
