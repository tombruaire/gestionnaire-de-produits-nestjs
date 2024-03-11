import { Injectable } from "@nestjs/common";
import { User } from "./model/user";

@Injectable()
export class UserService {

    users = Array<User>();

    getId(user: User): number {
        return user.id;
    }

    getNom(user: User): string {
        return user.nom;
    }

    getPrenom(user: User): string {
        return user.prenom;
    }

    getEmail(user: User): string {
        return user.email;
    }

    getPassword(user: User): string {
        return user.password;
    }

    getUsers(): Array<User> {
        return this.users;
    }
}