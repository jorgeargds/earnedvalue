
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarnedValueComponent }   from './earnedvalue.component';
import { RiskMatrixComponent } from './riskMatrix.component'

const routes: Routes = [
  { path: '', redirectTo: '/earnedvalue', pathMatch: 'full' },
  { path: 'earnedvalue',  component: EarnedValueComponent },
  { path: 'riskMatrix',  component: RiskMatrixComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
