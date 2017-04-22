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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RiskMatrixComponent = (function () {
    function RiskMatrixComponent(http) {
        this.http = http;
        this.riesgos = [];
        this.riesgos.push({ "riesgo": "Riesgo #1", "proabilidad": 70, "impacto": 5 });
        this.riesgos.push({ "riesgo": "Riesgo #2", "proabilidad": 20, "impacto": 3 });
        this.riesgos.push({ "riesgo": "Riesgo #3", "proabilidad": 50, "impacto": 1 });
    }
    ;
    RiskMatrixComponent.prototype.btnGetResponse = function () {
        console.log('gg');
    };
    return RiskMatrixComponent;
}());
RiskMatrixComponent = __decorate([
    core_1.Component({
        selector: 'riskMatrix',
        templateUrl: 'app/view/riskMatrix.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RiskMatrixComponent);
exports.RiskMatrixComponent = RiskMatrixComponent;
;
//# sourceMappingURL=riskMatrix.component.js.map