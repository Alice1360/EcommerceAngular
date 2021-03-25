import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierHttpService } from '../supplier-http.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  activated = false;

  constructor(private fb: FormBuilder, private http: SupplierHttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      companyName: ['', Validators.required],
      bankAccountNumber: ['', [Validators.required, Validators.maxLength(14)]],
    })
  }

  submitForm(): void{
     this.submitted = true;
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      this.http.add(formValues).subscribe();
      this.myForm.reset();}
  }

  toggle(): void{
    this.activated = !this.activated;
  }



}
