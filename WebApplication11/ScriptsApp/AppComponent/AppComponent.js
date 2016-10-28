"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Umsatz_1 = require('../Umsaetze/Umsatz');
var AppComponent = (function () {
    function AppComponent() {
        this.THEname = "7";
        this.einUmsatz = new Umsatz_1.Umsatz();
        this.einUmsatz.Text = "REWE sagt Danke!";
        this.einUmsatz.Amount = 17.3;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'ScriptsApp/AppComponent/AppComponent.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Liste = (function () {
    function Liste() {
    }
    Liste = __decorate([
        core_1.Component({
            template: "\n  <h1>Liste</h1>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Liste);
    return Liste;
}());
exports.Liste = Liste;
var Liste2 = (function () {
    function Liste2() {
    }
    Liste2 = __decorate([
        core_1.Component({
            template: "\n  <h1>Liste2</h1>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Liste2);
    return Liste2;
}());
exports.Liste2 = Liste2;
//# sourceMappingURL=AppComponent.js.map