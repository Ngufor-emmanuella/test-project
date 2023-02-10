import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Books } from '../interface/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private bookService: CartService) {}
  cart: Books[] = [];

  isShowing: boolean = true;

  ngOnInit(): void {
    this.cart = this.bookService.get();
  }


}
