
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent }   from './sales.component';
import { InventoryComponent } from './inventory.component'

const routes: Routes = [
  { path: '', redirectTo: '/earnedvalue', pathMatch: 'full' },
  { path: 'earnedvalue',  component: SalesComponent },
  { path: 'inventory',  component: InventoryComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
