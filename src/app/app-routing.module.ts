import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SalesExpressComponent } from './pages/sales-express/sales-express.component';
import { Food2020Component } from './pages/food2020/food2020.component';
import { G2lComponent } from './pages/g2l/g2l.component';
import { BentogetherComponent } from './pages/bentogether/bentogether.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'sales-express', component: SalesExpressComponent},
      { path: 'food2020', component: Food2020Component},
      { path: 'g2l', component: G2lComponent},
      { path: 'bentogether', component: BentogetherComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
