import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Taking } from './Taking';
import { TakingService } from './Taking.service';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],
    exports: [Taking, TakingService]
})
export class TakingDomainModule { }