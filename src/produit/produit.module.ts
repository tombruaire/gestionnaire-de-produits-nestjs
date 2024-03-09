import { Module } from "@nestjs/common";
import { ProduitController } from "./produit.controller";
import { ProduitService } from "./produit.service";

@Module({
    controllers: [ProduitController],
    providers: [ProduitService],
    exports: [ProduitService]
})
export class ProduitsModule {
    //
}