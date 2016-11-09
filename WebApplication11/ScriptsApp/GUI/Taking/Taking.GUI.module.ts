﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TakingListComponent } from './TakingList/TakingList.component';
import { TakingRoutingModule } from  './TakingRoutingModule'

@NgModule({
    imports: [CommonModule, FormsModule, TakingRoutingModule],
    declarations: [TakingListComponent]    
})
export class TakingGUIModule { }