import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book-service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  genres: string[] = ['Romantic', 'Realist', 'Fantasy'];
  selectedGenre!: string;
  name!: string;
  author!: string;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBook(): void{

    this.bookService.post(
      this.getValues()
    );
  }

  private getValues(): any{

    this.name = (document.getElementById('name') as HTMLInputElement).value;
    this.author = (document.getElementById('author') as HTMLInputElement).value;

    let book = { 
      name: this.name,
      genre: this.selectedGenre.toUpperCase(),
      author: this.author
    }

    return book;
  }
}
