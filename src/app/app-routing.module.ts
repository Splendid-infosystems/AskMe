import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './Components/Body/all-doctors/all-doctors.component';
import { BodyParentModuleComponent } from './Components/body/body-parent-module/body-parent-module.component';
import { DoctorDescriptionComponent } from './Components/Body/doctor-description/doctor-description.component';
const routes: Routes = [
  {
    path:'AllDoctors', component: AllDoctorsComponent, children:[
      {
        path:'doctordescription', component: DoctorDescriptionComponent
      }
    ]
  },
  {
    path:'home', component: BodyParentModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
