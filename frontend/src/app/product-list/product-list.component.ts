import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // onInit
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
