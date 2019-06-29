export class User {
    userid: number;
    username: string;
    constructor(obj: User) {
        this.userid = obj.userid;
        this.username = obj.username;
    }
}
