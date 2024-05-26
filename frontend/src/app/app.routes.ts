import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

    { path: 'api/products', component: ProductListComponent }
  ];
  
  export default routes;
