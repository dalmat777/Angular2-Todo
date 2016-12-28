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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
// Todo: have to add few things  for observable
var ComponentService = (function () {
    function ComponentService(http) {
        this.http = http;
        this.baseUrl = 'http://apitodo.herokuapp.com/api/todos';
    }
    ComponentService.prototype.getTodos = function () {
        return this.http
            .get(this.baseUrl)
            .map(function (response) { return response.json(); });
    };
    return ComponentService;
}());
ComponentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ComponentService);
exports.ComponentService = ComponentService;
//# sourceMappingURL=app.component.service.js.map