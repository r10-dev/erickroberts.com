export class ContentTag {

    contenttagid: number;
    url: string;
    contentid: number;
    description: string;
    tags: string;
    constructor(obj: ContentTag) {
        this.contenttagid = obj.contenttagid;
        this.contentid = obj.contentid;
        this.url = obj.url;
        this.description = obj.description;
        this.tags = obj.tags;
    }
}
