import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TakingCategory }from './TakingCategory'
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],//ContactComponent, HighlightDirective, AwesomePipe
    exports: [TakingCategory]//ContactComponent
    //,providers: [ContactService]
})
export class TakingCategoryDomainModule { }