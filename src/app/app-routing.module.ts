import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './Components/Body/Doctors/all-doctors/all-doctors.component';
import { BodyParentModuleComponent } from './Components/Body/body-parent-module/body-parent-module.component';
import { DoctorDescriptionComponent } from './Components/Body/Doctors/doctor-description/doctor-description.component';

const routes: Routes = [
  // Other routes...
  { path: 'home', component: BodyParentModuleComponent },
  { path: '', component: BodyParentModuleComponent },
  { path: 'AllDoctors', component: AllDoctorsComponent },
  { path: 'AllDoctors/:id', component: DoctorDescriptionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
