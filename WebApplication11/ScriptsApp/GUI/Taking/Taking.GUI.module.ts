import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TakingsListComponent } from './TakingList/TakingList.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],//ContactComponent, HighlightDirective, AwesomePipe
    exports: [TakingsListComponent]//ContactComponent
    //,providers: [ContactService]
})
export class TakingsModule { }