import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CategoryListComponent } from './CategoryList/CategoryList.component';
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],//ContactComponent, HighlightDirective, AwesomePipe
    exports: [CategoryListComponent]//ContactComponent
    //,providers: [ContactService]
})
export class CategoryModule { }