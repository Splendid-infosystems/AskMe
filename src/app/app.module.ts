import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './Components/Header/nav-header/nav-header.component';
import { BodyParentModuleComponent } from './Components/body/body-parent-module/body-parent-module.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { AdvertisementComponent } from './Components/Body/advertisement/advertisement/advertisement.component';
import { CategoryListComponent } from './Components/Body/category/category-list/category-list.component';
import { DoctorDescriptionComponent } from './Components/Body/doctor-description/doctor-description.component';
import { AllDoctorsComponent } from './Components/Body/all-doctors/all-doctors.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
