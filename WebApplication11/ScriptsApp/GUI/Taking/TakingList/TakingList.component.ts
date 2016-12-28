import { Component, OnInit } from '@angular/core';
import { Taking } from '../../../Domain/Taking/Taking';
import { TakingService } from '../../../Domain/Taking/Taking.service';

@Component({
    templateUrl: 'ScriptsApp/GUI/Taking/TakingList/TakingList.component.html' 
})
export class TakingListComponent
{
    takings: Taking[];
    selectedTaking: Taking;
    constructor(private takingService: TakingService) { }

    getTakings(): void
    {
        this.takingService.getTakings().then(takings => this.takings = takings);
    }

    ngOnInit(): void
    {
        this.getTakings();
    }

    onSelect(i_taking: Taking): void
    {
        this.selectedTaking = i_taking;
    }
}