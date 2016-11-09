import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TakingListComponent } from './TakingList/TakingList.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'takings', component: TakingListComponent }
    ])],
    exports: [RouterModule]
})
export class TakingRoutingModule { }