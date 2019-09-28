import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostListingComponent } from './components/blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './components//blog-post-details/blog-post-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { ResumeComponent } from './components/resume/resume.component';

import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PodcastHomeComponent } from './components/podcast-home/podcast-home.component';
import { OptInComponent } from './components/opt-in/opt-in.component';
import {BookingsComponent} from './bookings/bookings.component';
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'portfolio-home', component: PortfolioHomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'blog', component: BlogPostListingComponent},
  {path: 'blog/:slug', component: BlogPostDetailsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'podcast', component: PodcastHomeComponent},
  { path: 'bookings', component: BookingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
