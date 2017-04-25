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
var http_1 = require('@angular/http');
var riskMatrix_1 = require('./interfaces/riskMatrix');
var risk_1 = require('./interfaces/risk');
var router_1 = require('@angular/router');
var RiskMatrixComponent = (function () {
    function RiskMatrixComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.rangoVerde = 1.6;
        this.rangoAmarillo = 3.3;
        this.rangoRojo = 3.34;
        this.baseUrl = 'http://localhost:8080';
        this.riesgos = [];
        this.riesgoTemp = {
            descripcion: "",
            probabilidad: "",
            impacto: "",
            valor: ""
        };
    }
    ;
    RiskMatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.riesgos = [];
            if (Object.keys(params).length !== 0) {
                _this.http.post(_this.baseUrl + "/getProjectMatrix", params, { headers: _this.getHeaders() })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.matrix = new riskMatrix_1.RiskMatrix(data.id, data.idProject);
                    _this.http.post(_this.baseUrl + "/getMatrixRisks", data, { headers: _this.getHeaders() })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.getMatrixRisks(data);
                    }, function (err) { return _this.logError(err); });
                }, function (err) { return _this.logError(err); });
            }
        });
    };
    ;
    RiskMatrixComponent.prototype.getMatrixRisks = function (data) {
        data.forEach(function (riesgo) {
            console.log(riesgo);
        });
    };
    ;
    RiskMatrixComponent.prototype.agregarRiesgo = function () {
        this.riesgoTemp.valor = (((+this.riesgoTemp.probabilidad / 100) * +this.riesgoTemp.impacto)).toString();
        var riesgo = new risk_1.Risk(this.riesgoTemp.descripcion, Number(this.riesgoTemp.probabilidad), Number(this.riesgoTemp.impacto), Number(this.riesgoTemp.valor));
        this.riesgos.push(riesgo);
        this.riesgoTemp = {
            descripcion: "",
            probabilidad: "",
            impacto: "",
            valor: ""
        };
    };
    ;
    RiskMatrixComponent.prototype.enRangoVerde = function (index) {
        if (+this.riesgos[index].valor <= this.rangoVerde) {
            return true;
        }
        return false;
    };
    ;
    RiskMatrixComponent.prototype.enRangoAmarillo = function (index) {
        if (+this.riesgos[index].valor <= this.rangoAmarillo && +this.riesgos[index].valor > this.rangoVerde) {
            return true;
        }
        return false;
    };
    ;
    RiskMatrixComponent.prototype.enRangoRojo = function (index) {
        if (+this.riesgos[index].valor <= this.rangoRojo && ++this.riesgos[index].valor > this.rangoAmarillo) {
            return true;
        }
        return false;
    };
    ;
    RiskMatrixComponent.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    ;
    RiskMatrixComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    ;
    RiskMatrixComponent.prototype.setearColores = function () {
        var temp = this.riesgos;
        this.riesgos = [];
        this.riesgos = temp;
    };
    RiskMatrixComponent = __decorate([
        core_1.Component({
            selector: 'riskMatrix',
            templateUrl: 'app/view/riskMatrix.html',
            styles: ["\n    .rangoVerde{\n      color: #008000;\n    }\n\n    .rangoAmarillo{\n      color: #FFFF00;\n    }\n\n    .rangoRojo{\n      color: #FF0000;\n    }\n\n  "]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], RiskMatrixComponent);
    return RiskMatrixComponent;
}());
exports.RiskMatrixComponent = RiskMatrixComponent;
;
//# sourceMappingURL=riskMatrix.component.js.map