import { Injectable, NotFoundException } from "@nestjs/common";
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

    addUser(user: User): void {
        this.users.push(user);
    }

    editUser(id: number, nouveauUser: User): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = { ...nouveauUser, id };
        } else {
            throw new NotFoundException(`User avec l'ID ${id} non trouvé.`);
        }
    }

    deleteUser(id: number): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        } else {
            throw new NotFoundException(`User avec l'ID ${id} non trouvé.`);
        }
    }
}