import { Controller, Get, Post, Param, Body, NotFoundException } from "@nestjs/common";
import { ProduitService } from "./produit.service";
import { Produit } from "./model/produit";

@Controller() 
export class ProduitController {

    constructor(private readonly produitService: ProduitService) {}

    // Affichage de tous les produits (/produits)
    @Get('produits')
    getProducts(): object {
        return this.produitService.getProduits();
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
        const newProduct = { 
            id: 1, 
            nom: "PS5", 
            description: "Console de jeux", 
            prix: 500.0 
        };
        this.produitService.addProduit(newProduct);
        return "Produit ajouté avec succès.";
    }

    // Modification d'un produit (/produit/edit/1)
    @Post('produit/edit/:id')
    editProduct(
        @Param('id') id: number,
        @Body() updatedProduct: Produit
    ): string {
        try {
            this.produitService.editProduit(id, updatedProduct);
            return "Produit modifié avec succès.";
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw error;
            }
        }
    }

    // Suppression d'un produit (/produit/delete/1)
    @Post('produit/delete/:id')
    deleteProduct(
        @Param('id') id: number
    ): string {
        try {
            this.produitService.deleteProduit(id);
            return "Produit supprimé avec succès.";
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw error;
            }
        }
    }

}