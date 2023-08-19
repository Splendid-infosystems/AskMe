import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './Components/Header/nav-header/nav-header.component';
import { BodyParentModuleComponent } from './Components/body/body-parent-module/body-parent-module.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    FooterComponent,
    BodyParentModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
