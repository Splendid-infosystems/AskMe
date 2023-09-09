import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './Components/Body/all-doctors/all-doctors.component';
import { BodyParentModuleComponent } from './Components/body/body-parent-module/body-parent-module.component';
import { DoctorDescriptionComponent } from './Components/Body/doctor-description/doctor-description.component';
// const routes: Routes = [
//   {
//     path: 'AllDoctors', component: AllDoctorsComponent, children: [
//       {
//          path: 'AllDoctors/:id', component: DoctorDescriptionComponent 
//       }
//     ]
//   },
//   {
//     path: 'home', component: BodyParentModuleComponent
//   }
// ];

const routes: Routes = [
  // Other routes...
  { path: 'home', component: BodyParentModuleComponent},
  { path: 'AllDoctors', component: AllDoctorsComponent }, // Route to display all doctors.
  { path: 'AllDoctors/:id', component: DoctorDescriptionComponent }, // Route to display a specific doctor by ID.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
