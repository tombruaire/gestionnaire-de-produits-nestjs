import { Injectable } from "@nestjs/common";
import { Produit } from "./model/produit";

@Injectable()
export class ProduitService {

    produits = Array<Produit>();

    getId(): object {
        return this.getId;
    }
    getNom(): object {
        return this.getNom;
    }
    getDescription(): object {
        return this.getDescription;
    }
    getPrix(): object {
        return this.getPrix;
    }

    getProduits(): Array<Produit> {
        return this.produits;
    }
}


