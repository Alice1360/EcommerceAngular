import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/model/Product';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product;
  @Output() evenEmit = new EventEmitter();// bien penser à l'import EvenEmitter dans @angular/core

  @HostListener('click') clickElem(): void{
    this.evenEmit.emit(this.product);
  }
  ngOnInit(): void {
  }
}
