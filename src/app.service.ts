import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tom BRUAIRE - M1 Dev. Manager Full Stack - Groupe 01';
  }
}
