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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var TakingList_component_1 = require('./TakingList/TakingList.component');
var TakingRoutingModule_1 = require('./TakingRoutingModule');
var Taking_Service_1 = require('../../Domain/Taking/Taking.Service');
var TakingGUIModule = (function () {
    function TakingGUIModule() {
    }
    TakingGUIModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, TakingRoutingModule_1.TakingRoutingModule],
            declarations: [TakingList_component_1.TakingListComponent],
            providers: [Taking_Service_1.TakingService]
        }), 
        __metadata('design:paramtypes', [])
    ], TakingGUIModule);
    return TakingGUIModule;
}());
exports.TakingGUIModule = TakingGUIModule;
//# sourceMappingURL=Taking.GUI.module.js.map