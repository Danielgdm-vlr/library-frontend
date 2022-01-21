import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book-service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  book!: Book;
  id!: number;
  genre!: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { 

      // this.book = this.router.getCurrentNavigation()!.extras.state as Book;
      // if(this.book == null){
      //   this.router.navigate(['page-not-found']);
      // }

      this.route.params.subscribe((params) => {
        this.id = params.id;
        this.genre = params.genre;
      });


      this.bookService.getByIdAndGenre(this.id, this.genre).subscribe(book => {
        this.book = book;
      })
    }

  ngOnInit(): void {
  }
}
