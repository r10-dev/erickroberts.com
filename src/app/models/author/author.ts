export class Author {
    authorid: number;
    authorname: string;
    authorimage: string;
    userid: number;
    constructor(obj: Author) {
        this.authorid = obj.authorid;
        this.authorname = obj.authorname;
        this.userid = obj.userid;
        this.authorimage = obj.authorimage;
    }
}
