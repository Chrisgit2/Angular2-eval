import { Component} from '@angular/core';
import { RouterModule  } from '@angular/router';
import { Taking } from '../Takings/Domain/Taking';

@Component({
    selector: 'my-app',    
    templateUrl: 'ScriptsApp/AppComponent/AppComponent.component.html'    
})
export class AppComponent
{
    THEname;

    einUmsatz: Taking;

    constructor()
    {
        this.THEname = "7";
        this.einUmsatz = new Taking();
        this.einUmsatz.Text = "REWE sagt Danke!";
        this.einUmsatz.Amount = 17.3;
    }    

}

@Component({
    template: `
  <h1>Liste</h1>
`
})
export class Liste {
}

@Component({
    template: `
  <h1>Liste2</h1>
`
})
export class Liste2 {
}