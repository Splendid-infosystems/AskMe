import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './Components/Body/all-doctors/all-doctors.component';
const routes: Routes = [
  {
    path:'AllDoctors', component: AllDoctorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
