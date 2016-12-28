import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'dashboard', component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }