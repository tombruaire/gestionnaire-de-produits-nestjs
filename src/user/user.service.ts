import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getId(): object {
        return this.getId;
    }
    getNom(): object {
        return this.getNom;
    }
    getPrenom(): object {
        return this.getPrenom;
    }
    getEmail(): object {
        return this.getEmail;
    }
    getPassword(): object {
        return this.getPassword;
    }
}