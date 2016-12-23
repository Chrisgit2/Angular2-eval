import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent, Liste, Liste2 } from './AppComponent/AppComponent';
import { AppRoutingModule } from './AppRoutingModule'

//Feature Modul
import { TakingGUIModule } from './GUI/Taking/Taking.GUI.module'
import { TakingCategoryGUIModule } from './GUI/TakingCategory/TakingCategory.GUI.module'
//TakingGUIModule

@NgModule({
    imports: [BrowserModule, AppRoutingModule, TakingGUIModule, TakingCategoryGUIModule],
    declarations: [AppComponent, Liste, Liste2 ],
    bootstrap: [AppComponent]
})
export class AppModule { }


//RouterModule.forRoot([
//    { path: 'Liste2', component: TakingListComponent },
//    { path: 'Liste', component: TakingCategoryListComponent }      