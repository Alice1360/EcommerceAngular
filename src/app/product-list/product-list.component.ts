import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { ProductHttpService } from '../product-http.service';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(private http: ProductHttpService) { }//private ps: ProductService, pour le add
  allProducts: Product[];

   getProducts() {
    this.http.getProducts().subscribe(res => this.allProducts = res);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  productSelected!: Product;

  getInfoFromChildren(prod: Product): void{
    console.log(`From Children: ${prod}`);
    this.productSelected = prod;

  }
  close(): void{
    this.productSelected = undefined;
  }
  // add(): void{
  //   this.ps.add(
  //     new Product(43, 'pouetpouet', 'La pire description du paf', 'Book', 45)
  //   )
  // }
}
