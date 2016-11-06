import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TakingCategoryListComponent } from './TakingCategoryList/TakingCategoryList.component';
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],//ContactComponent, HighlightDirective, AwesomePipe
    exports: [TakingCategoryListComponent]//ContactComponent
    //,providers: [ContactService]
})
export class TakingCategoryModule { }