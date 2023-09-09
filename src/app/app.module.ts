import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './Components/Header/nav-header/nav-header.component';
import { BodyParentModuleComponent } from './Components/Body/body-parent-module/body-parent-module.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { AdvertisementComponent } from './Components/Body/advertisement/advertisement/advertisement.component';
import { CategoryListComponent } from './Components/Body/Doctors/category/category-list/category-list.component';
import { DoctorDescriptionComponent } from './Components/Body/Doctors/doctor-description/doctor-description.component';
import { AllDoctorsComponent } from './Components/Body/Doctors/all-doctors/all-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    FooterComponent,
    BodyParentModuleComponent,
    AdvertisementComponent,
    CategoryListComponent,
    DoctorDescriptionComponent,
    AllDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
