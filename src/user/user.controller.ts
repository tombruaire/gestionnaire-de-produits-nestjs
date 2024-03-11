import { Controller, Get, Post, Param } from "@nestjs/common";
import { UserService } from "./user.service";

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
    addProduct(): string {
        return null;
    }

}