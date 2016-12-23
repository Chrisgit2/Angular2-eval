import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TakingCategoryListComponent } from './TakingCategoryList/TakingCategoryList.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'takingcategories', component: TakingCategoryListComponent }
    ])],
    exports: [RouterModule]
})
export class TakingCategoryRoutingModule { }