import { Routes } from '@angular/router';
import { HomepageComponent } from './Vue/homepage/homepage.component';
import { ClientpageComponent } from './Vue/clientpage/clientpage.component';
import { OrderpageComponent } from './Vue/orderpage/orderpage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'clientpage', component: ClientpageComponent },
  { path: 'orderpage', component: OrderpageComponent },
  { path: 'orderpage/:id', component: OrderpageComponent },
];
