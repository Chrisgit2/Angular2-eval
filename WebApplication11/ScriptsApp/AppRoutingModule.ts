import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Liste, Liste2 } from './AppComponent/AppComponent';

export const routes: Routes = [
    { path: '', redirectTo: 'takings', pathMatch: 'full' },
    { path: 'Liste2', component: Liste2 },
    { path: 'Liste', component: Liste }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }