import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BlogPostDetailsComponent} from './blog-post-details/blog-post-details.component';
import {BlogPostListingComponent} from './blog-post-listing/blog-post-listing.component';
import { AppMaterialModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostDetailsComponent,
    BlogPostListingComponent,
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
