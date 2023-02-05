import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name: string = 'davilla';
  author: string = 'mac- mac';
  src: string = 'https://www.pinterest.com/pin/96475617005743248/'

  constructor() {}

  ngOnInit(): void {}

}
