import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

products: Product[] = [
  new Product (101, "Addidas Alphaboucnhe")

]


  constructor() { }
}
