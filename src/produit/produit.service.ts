import { Injectable, NotFoundException } from "@nestjs/common";
import { Produit } from "./model/produit";

@Injectable()
export class ProduitService {

    produits = Array<Produit>();

    getId(produit: Produit): number {
        return produit.id;
    }

    getNom(produit: Produit): string {
        return produit.nom;
    }

    getDescription(produit: Produit): string {
        return produit.description;
    }

    getPrix(produit: Produit): number {
        return produit.prix;
    }

    getProduits(): Array<Produit> {
        return this.produits;
    }

    addProduit(produit: Produit): void {
        this.produits.push(produit);
    }

    editProduit(id: number, nouveauProduit: Produit): void {
        const index = this.produits.findIndex(produit => produit.id === id);
        if (index !== -1) {
            this.produits[index] = { ...nouveauProduit, id };
        } else {
            throw new NotFoundException(`Produit avec l'ID ${id} non trouvé.`);
        }
    }

    deleteProduit(id: number): void {
        const index = this.produits.findIndex(produit => produit.id === id);
        if (index !== -1) {
            this.produits.splice(index, 1);
        } else {
            throw new NotFoundException(`Produit avec l'ID ${id} non trouvé.`);
        }
    }
}


