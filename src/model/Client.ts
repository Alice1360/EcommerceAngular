import {Person} from './Person';
import {Product} from './Product';

export class Client extends Person {

  private $products: Product[] = [];

  constructor(firstName: string, lastName: string, active= true, age?: number) {
    super(firstName, lastName, active, age);
  }

  get products(): Product[] {
    return this.$products;
  }

  set products(value: Product[]) {
    this.$products = value;
  }
}

