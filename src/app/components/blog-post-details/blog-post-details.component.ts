import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { BlogpostService } from '../../services/blogposts/blogpost.service';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-blog-post-details',
    templateUrl: './blog-post-details.component.html',
    styleUrls: ['./blog-post-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit {

    constructor(protected route: ActivatedRoute, private blog: BlogpostService) {
    }

    protected slug$: Observable<string>;
    public post: any;

    getSlug() {
        this.slug$ = this.route.paramMap
        .pipe(
            map(params => (params.get('slug')))
        );
    }
    processSlug() {
        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                this.blog.findone(slug)
                .then( (result) => {this.post = result[0]; })
                .catch( (error) => {console.log(error); });
            });
    }
    ngOnInit() {
        this.getSlug();
        this.processSlug();
    }
}
