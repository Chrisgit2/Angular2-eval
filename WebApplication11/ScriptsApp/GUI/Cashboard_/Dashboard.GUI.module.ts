import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './Dashboard/Dashboard.component';
import { DashboardRoutingModule } from  './DashboardRoutingModule'

@NgModule({
    imports: [CommonModule, FormsModule, DashboardRoutingModule],
    declarations: [DashboardComponent]    
})
export class DashboardGUIModule { }