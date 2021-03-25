import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  activated = false;

  constructor(private fb: FormBuilder, private http: ProductHttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [, Validators.required],
      description: ['',[ Validators.minLength(10),Validators.required, Validators.maxLength(100)]],
      category: ['', Validators.required],
      price: ['', Validators.required],
      promo: ['',[ Validators.required, Validators.max(50)]],
    })
  }

  submitForm(): void{
    this.submitted = true;
    if (this.myForm.valid){
      const formValues = this.myForm.value;
      this.http.add(formValues).subscribe();
      this.myForm.reset();
    }
  }
  add(): void{
    this.activated = true;
  }
  close(): void{
    this.activated = false;
  }

}
