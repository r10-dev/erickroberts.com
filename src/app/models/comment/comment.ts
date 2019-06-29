import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export class Comment {
    commentid: number;
    shorttext: string;
    body: string;
    userid: number;
    contentid: number;

    constructor(obj: Comment) {
        this.commentid = obj.commentid;
        this.shorttext = obj.shorttext;
        this.body = obj.body;
        this.userid = obj.userid;
        this.contentid = obj.contentid;
    }

}
