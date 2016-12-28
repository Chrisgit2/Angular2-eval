import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Taking } from './Taking';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],
    exports: [Taking]
})
export class TakingDomainModule { }