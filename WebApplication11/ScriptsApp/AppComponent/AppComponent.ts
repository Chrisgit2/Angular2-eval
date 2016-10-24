import { Component } from '@angular/core';
import { Umsatz } from '../Umsaetze/Umsatz';

@Component({
    selector: 'my-app',    
    templateUrl: 'ScriptsApp/AppComponent/AppComponent.component.html'    
})
export class AppComponent
{
    THEname = 'The Cool App';

    einUmsatz: Umsatz;

    constructor()
    {
        this.THEname = "7";
        this.einUmsatz = new Umsatz();
        this.einUmsatz.Text = "REWE sagt Danke!";
        this.einUmsatz.Amount = 17.3;

    }    

}