import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { appRoutingModule } from './app.routing';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './pages/home/features/features.component';
import { PixelPerfectComponent } from './pages/home/pixel-perfect/pixel-perfect.component';
import { EmployeesComponent } from './pages/home/employees/employees.component';
import { FooterComponent } from './pages/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    NavbarComponent,
    FeaturesComponent,
    PixelPerfectComponent,
    EmployeesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
