export class Author {
    id: number;
    authorid: number;
    authorname: string;
    authorimage: string;
    twitter_url: string;
    linkedin_url: string;
    github_url: string;
    phone_number: string;
    author_email: string;
    created_at: Date;
    updated_at: Date;

    constructor(obj: Author) {
        this.authorid = obj.authorid;
        this.authorname = obj.authorname;
        this.authorimage = obj.authorimage;
        this.twitter_url = obj.twitter_url;
        this.linkedin_url = obj.linkedin_url;
        this.github_url = obj.github_url;
        this.phone_number = obj.phone_number;
        this.author_email = obj.author_email;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }
}
