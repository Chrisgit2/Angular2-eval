import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent, Liste, Liste2 } from './AppComponent/AppComponent';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: 'Liste2', component: Liste2 },
            { path: 'Liste', component: Liste }          
        ])
    ],
    declarations: [AppComponent, Liste, Liste2],
    bootstrap: [AppComponent]
})
export class AppModule { }


