import { Injectable } from '@angular/core';
import { Product } from 'src/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product(
       1,
       'The Beatles  - Abbey Road',
       'Abbey Road est le onzième album original publié par les Beatles, paru le 12 septembre 1969 en France, le 26 septembre 1969 au Royaume - Uni, et le 1er octobre aux États - Unis et au Canada.Bien que sa sortie précède celle de Let It Be, paru en mai 1970, il est le dernier album enregistré par les « Fab Four ».Le 20 août 1969, les quatre Beatles sont réunis pour la toute dernière fois en studio et, vers la fin de septembre, au moment où le disque paraît, John Lennon met fin au groupe en lui annonçant son départ définitif.La séparation des Beatles n\'est toutefois officialisée qu\'en avril 1970.',
       'Album',
       34,
       true,
       30),
    new Product
    ( 2,
     '1984',
      '1984 (Nineteen Eighty-Four) est le plus célèbre roman de George Orwell, publié en 1949. Il décrit une Grande-Bretagne trente ans après une guerre nucléaire entre l\'Est et l\'Ouest censée avoir eu lieu dans les années 1950 et où s\'est instauré un régime de type totalitaire fortement inspiré à la fois du stalinisme et de certains éléments du nazisme1,2. La liberté d\'expression n’existe plus. Toutes les pensées sont minutieusement surveillées et d’immenses affiches sont placardées dans les rues, indiquant à tous que « Big Brother vous regarde »',
     'Book',
     24,
     true,
     30,)]

  findAll(): Product[]{
    return this.products;
  }

  add(p: Product): void{
    this.products.push(p);
}
  constructor() { }
}
