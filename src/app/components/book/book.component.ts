import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  book!: Book;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.book = this.router.getCurrentNavigation()!.extras.state as Book;
    }

  ngOnInit(): void {
  }
}
