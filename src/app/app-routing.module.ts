import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  { path: 'display-component', component:  DisplayComponentComponent },
  {path:'',component: RegisterComponentComponent},
  { path:'**' ,component:RegisterComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }