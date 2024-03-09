import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log(
            `Requête de type ${req.method} réceptionnée à ${new Date()}`,
        );
        next();
    }
}