import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BlogPostDetailsComponent} from './components/blog-post-details/blog-post-details.component';
import {BlogPostListingComponent} from './components/blog-post-listing/blog-post-listing.component';
import { AppMaterialModule } from './shared/app-material.module';
import { ContentFormComponent } from './components/content-form/content-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PodcastHomeComponent } from './components/podcast-home/podcast-home.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { OptInComponent } from './components/opt-in/opt-in.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostDetailsComponent,
    BlogPostListingComponent,
    UserFormComponent,
    ContentFormComponent,
    UserLoginComponent,
    ResumeComponent,
    HeaderComponent,
    HomePageComponent,
    PortfolioHomeComponent,
    PodcastHomeComponent,
    ContactComponent,
    OptInComponent,
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
