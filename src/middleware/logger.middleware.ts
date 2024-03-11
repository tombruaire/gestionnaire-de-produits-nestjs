import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    private logger = new Logger('RequestLoggerMiddleware');

    use(req: Request, res: Response, next: NextFunction): void {
        const userAgent = req.headers['user-agent'] || 'Unknown';
        const clientIp = req.ip || 'Unknown';
        const requestUrl = req.originalUrl || req.url || 'Unknown';

        this.logger.log(`Requête de type ${req.method} réceptionnée à ${new Date()}`);
        this.logger.log(`Provenance: ${requestUrl}`);
        this.logger.log(`Agent utilisateur: ${userAgent}`);
        this.logger.log(`Adresse IP du client: ${clientIp}`);

        next();
    }
}
