import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Supplier } from 'src/model/Supplier';
import { SupplierHttpService } from '../supplier-http.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(private http: SupplierHttpService) { }

  suppliers: Supplier[];

  getSuppliers() {
    this.http.getSuppliers().subscribe(res => this.suppliers = res);
  }

  ngOnInit(): void {
    this.getSuppliers();
  }
  @ViewChildren(Supplier) child!: QueryList<Supplier>;

  // supplierName = [
  //   new Supplier(1, 'SuperNova', 'FR3193484757', 15000),
  //   new Supplier(2, 'RoarGang', 'FR59567658908', 500000),
  //   new Supplier(3, 'YukiNette', 'FR5984742674', 3500)
  // ];


}

