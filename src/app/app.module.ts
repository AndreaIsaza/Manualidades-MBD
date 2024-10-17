import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { CarouselComponent } from './module/carousel/carousel.component';
import { CategoriesComponent } from './module/categories/categories.component';
import { InformationComponent } from './module/information/information.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CategoriesComponent,
    InformationComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
