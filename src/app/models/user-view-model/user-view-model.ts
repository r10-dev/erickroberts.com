export class UserViewModel {

    username: string;
    isauthor: boolean;
    roleselected: string;
    password: string;
    email: string;

    constructor(obj: UserViewModel) {
        this.username = obj.username;
        this.isauthor = obj.isauthor;
        this.roleselected = obj.roleselected;
        this.password = obj.password;
        this.email = obj.email;
    }


}
