import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: 'shopping/:gType', component: FirstComponent },
  { path: 'shopping', component: FirstComponent },
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
