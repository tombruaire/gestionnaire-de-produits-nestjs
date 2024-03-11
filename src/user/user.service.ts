import { Injectable } from "@nestjs/common";
import { User } from "./model/user";

@Injectable()
export class UserService {

    users = Array<User>();

    getId(): object {
        return this.getId;
    }
    getNom(): object {
        return this.getNom;
    }
    getPrenom(): object {
        return this.getPrenom;
    }
    getEmail(): object {
        return this.getEmail;
    }
    getPassword(): object {
        return this.getPassword;
    }

    getUsers(): Array<User> {
        return this.users;
    }
}