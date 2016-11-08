import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TakingListComponent } from './TakingList/TakingList.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TakingListComponent],
    exports: [TakingListComponent]
    //,providers: [ContactService]
})
export class TakingGUIModule { }