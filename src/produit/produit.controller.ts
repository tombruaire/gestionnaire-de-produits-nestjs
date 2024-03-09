import { Controller, Get, Post, Param } from "@nestjs/common";
import { ProduitService } from "./produit.service";

@Controller() 
export class ProduitController {

    constructor(private readonly produitService: ProduitService) {}

    // Affichage de tous les produits (/produits)
    @Get('produits')
    getProducts(): object {
        return this.getProducts();
    }
 
    // Affichage d'un produit en fonction de son id (/produit/1)
    @Get('produit/:id')
    getProductId(
        @Param('id') id: number
    ): object {
        return this.getProductId(id);
    }

    // Affichage d'un produit en fonction de son nom (/produit/monproduit)
    @Get('produit/:nom')
    getProductName(
        @Param('nom') nom: string
    ): object {
        return this.getProductName;
    }

    // Ajout d'un produit (/produit/add)
    @Post('produit/add')
    addProduct(): string {
        return null;
    }

    // Modification d'un produit (/produit/edit/1)
    @Post('produit/edit/:id')
    editProduct(
        @Param('id') id: number
    ): object {
        return null;
    }

    // Suppression d'un produit (/produit/delete/1)
    @Post('produit/delete/:id')
    deleteProduct(
        @Param('id') id: number
    ): object {
        return null;
    }

}