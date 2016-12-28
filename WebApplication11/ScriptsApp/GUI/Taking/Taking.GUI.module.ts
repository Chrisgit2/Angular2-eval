import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TakingListComponent } from './TakingList/TakingList.component';
import { TakingRoutingModule } from './TakingRoutingModule'

import { TakingService } from '../../Domain/Taking/Taking.Service'

@NgModule({
    imports: [CommonModule, FormsModule, TakingRoutingModule],
    declarations: [TakingListComponent],
    providers: [TakingService]

})
export class TakingGUIModule { }