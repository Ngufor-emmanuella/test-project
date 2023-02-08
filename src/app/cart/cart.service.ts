import { Injectable } from '@angular/core';
import { Books } from '../interface/Book'

@Injectable({
  providedIn: 'root',
})

export class CartService {
  cart: Array<Books> = [];

  constructor() {}

  add(book: Books) {

    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Books) {
    this.cart = this.cart.filter((b) => b != book);
  }
  
}
