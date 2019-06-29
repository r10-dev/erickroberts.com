import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
  {path: 'blog', component: BlogPostListingComponent},
  {path: 'blog/:slug', component: BlogPostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
