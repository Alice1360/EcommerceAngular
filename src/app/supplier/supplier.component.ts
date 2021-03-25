import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from 'src/model/Supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() supplier: Supplier;
}
