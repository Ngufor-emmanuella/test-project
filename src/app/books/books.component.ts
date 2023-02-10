import { Component, OnInit } from '@angular/core';
import { Books } from '../interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  book: Books[] = [];


  constructor(private bookService: BooksService) {}

  isShowing: boolean = true;

  ngOnInit(): void {
    this.book = this.bookService.getBooks();
  }

}
