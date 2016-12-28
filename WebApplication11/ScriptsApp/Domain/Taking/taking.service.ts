import { Injectable } from '@angular/core';
import { Taking } from './Taking';
import { TAKINGS } from './mock-takings';

@Injectable()
export class TakingService {
    getTakings(): Promise<Taking[]> {
        return Promise.resolve(TAKINGS);
    }
}