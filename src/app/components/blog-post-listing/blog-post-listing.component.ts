import {Component, OnInit} from '@angular/core';
import { BlogpostService } from '../../services/blogposts/blogpost.service';


@Component({
    selector: 'app-blog-post-listing',
    templateUrl: './blog-post-listing.component.html',
    styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit {
    public posts: any[];

    constructor(private blog: BlogpostService) {
    }
    thumb_filter = 'media_lib_thumb';
    ngOnInit() {
        this.blog.list()
        .then( (result) => {this.posts = result; })
        .catch( (error) => {console.log(error); });
    }

}
