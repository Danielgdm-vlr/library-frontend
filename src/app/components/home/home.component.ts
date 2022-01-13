import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'genre', 'author'];

  constructor(private bookService: BookService) { 
    this.fetch();
  }

  ngOnInit(): void {
  }

  private fetch(){

    // this.bookService.getAll().subscribe(books => this.books = new MatTableDataSource(books))
  }
}
