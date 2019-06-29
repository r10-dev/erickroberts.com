export class UserLogin {
    username: string;
    password: string;

    constructor(obj: UserLogin) {
        this.username = obj.username;
        this.password = obj.password;
    }
}
