import { Injectable } from "@nestjs/common";

@Injectable()
export class ProduitService {
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
}