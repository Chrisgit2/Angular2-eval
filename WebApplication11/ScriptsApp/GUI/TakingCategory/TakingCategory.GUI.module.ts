import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TakingCategoryListComponent } from './TakingCategoryList/TakingCategoryList.component';
import { TakingCategoryRoutingModule } from './TakingCategoryRoutingModule';

@NgModule({
    imports: [CommonModule, FormsModule, TakingCategoryRoutingModule],
    declarations: [TakingCategoryListComponent]
})
export class TakingCategoryGUIModule { }