import { Author } from '../author/author';

export class Content {
    id: number;
    contentid: number;
    slug: string;
    authorid: number;
    title: string;
    headerimage: string;
    tabimage: string;
    views: number;
    stars: number;
    body: string;
    published: boolean;
    staged: boolean;
    draft: boolean;
    // tslint:disable-next-line:variable-name
    created_on: Date;
    // tslint:disable-next-line:variable-name
    published_on: Date;
    author: Author;
    created_at: Date;
    updated_at: Date;
    constructor(obj: Content) {
        this.contentid = obj.contentid;
        this.slug = obj.slug;
        this.authorid = obj.authorid;
        this.title = obj.title;
        this.headerimage = obj.headerimage;
        this.tabimage = obj.tabimage;
        this.views = obj.views;
        this.stars = obj.stars;
        this.body = obj.body;
        this.published = obj.published;
        this.staged = obj.staged;
        this.draft = obj.draft;
        this.created_on = obj.created_on;
        this.published_on = obj.published_on;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }
}
