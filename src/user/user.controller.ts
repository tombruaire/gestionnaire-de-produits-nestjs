import { Controller, Get, Post, Param, Body, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./model/user";

@Controller() 
export class UserController {

    constructor(private readonly userService: UserService) {}

    // Affichage de tous les users (/users)
    @Get('users')
    getUsers(): object {
        return this.userService.getUsers();
    }
 
    // Affichage d'un user en fonction de son id (/users/1)
    @Get('user/:id')
    getUserId(
        @Param('id') id: number
    ): object {
        return this.getUserId;
    }

    // Affichage d'un user en fonction de son nom (/user/monproduit)
    @Get('user/:nom')
    getUserName(
        @Param('nom') nom: string
    ): object {
        return this.getUserName;
    }

    // Ajout d'un user
    @Post('user/add')
    addUser(): string {
        const newUser = { 
            id: 1, 
            nom: "BRUAIRE", 
            prenom: "Tom", 
            email: "tom.bruaire@efrei.net",
            password: "azerty123"
        };
        this.userService.addUser(newUser);
        return "User ajouté avec succès.";
    }

    // Modification d'un user
    @Post('user/edit/:id')
    editUser(
        @Param('id') id: number,
        @Body() updatedUser: User
    ): string {
        try {
            this.userService.editUser(id, updatedUser);
            return "User modifié avec succès.";
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw error;
            }
        }
    }

    // Suppression d'un user
    @Post('user/delete/:id')
    deleteUser(
        @Param('id') id: number
    ): string {
        try {
            this.userService.deleteUser(id);
            return "User supprimé avec succès.";
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw error;
            }
        }
    }

}