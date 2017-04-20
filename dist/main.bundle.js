webpackJsonp([0,4],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // Run correctHeight function on load and resize window event
        jQuery(window).bind("load resize", function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* correctHeight */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["c" /* detectBody */])();
        });
        // Correct height of wrapper after metisMenu animation.
        jQuery('.metismenu a').click(function () {
            setTimeout(function () {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* correctHeight */])();
            }, 300);
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(662),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = correctHeight;
/* harmony export (immutable) */ __webpack_exports__["c"] = detectBody;
/* harmony export (immutable) */ __webpack_exports__["a"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/hide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();
    if (navbarHeight > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }
    if (navbarHeight < wrapperHeigh) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/app.helpers.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var basicComponent = (function () {
    function basicComponent() {
    }
    basicComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'basic',
            template: __webpack_require__(664)
        }), 
        __metadata('design:paramtypes', [])
    ], basicComponent);
    return basicComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/basic.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var blankComponent = (function () {
    function blankComponent() {
    }
    blankComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    blankComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    blankComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'blank',
            template: __webpack_require__(665)
        }), 
        __metadata('design:paramtypes', [])
    ], blankComponent);
    return blankComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/blank.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inventarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var inventarioComponent = (function () {
    function inventarioComponent() {
    }
    inventarioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'inventario',
            template: __webpack_require__(668)
        }), 
        __metadata('design:paramtypes', [])
    ], inventarioComponent);
    return inventarioComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/inventario.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var loginComponent = (function () {
    function loginComponent() {
    }
    loginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'login',
            template: __webpack_require__(669)
        }), 
        __metadata('design:paramtypes', [])
    ], loginComponent);
    return loginComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/login.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var mainViewComponent = (function () {
    function mainViewComponent() {
    }
    mainViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'mianView',
            template: __webpack_require__(670)
        }), 
        __metadata('design:paramtypes', [])
    ], mainViewComponent);
    return mainViewComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/main-view.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minorViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var minorViewComponent = (function () {
    function minorViewComponent() {
    }
    minorViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'minorView',
            template: __webpack_require__(671)
        }), 
        __metadata('design:paramtypes', [])
    ], minorViewComponent);
    return minorViewComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/minor-view.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var registerComponent = (function () {
    function registerComponent() {
    }
    registerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'register',
            template: __webpack_require__(672)
        }), 
        __metadata('design:paramtypes', [])
    ], registerComponent);
    return registerComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/register.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 364;


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(491);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/main.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_main_view_main_view_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_minor_view_minor_view_module__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_login_login_module__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_register_register_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_inventario_inventario_module__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_common_layouts_layouts_module__ = __webpack_require__(486);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                // Angular modules
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                // Views
                __WEBPACK_IMPORTED_MODULE_7__views_main_view_main_view_module__["a" /* MainViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__views_minor_view_minor_view_module__["a" /* MinorViewModule */],
                __WEBPACK_IMPORTED_MODULE_9__views_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_10__views_register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_11__views_inventario_inventario_module__["a" /* InventarioModule */],
                // Modules
                __WEBPACK_IMPORTED_MODULE_12__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */])
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_minor_view_minor_view_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_register_register_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_blank_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_layouts_basic_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_inventario_inventario_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });







var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'mainView', pathMatch: 'full' },
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_common_layouts_basic_component__["a" /* basicComponent */],
        children: [
            { path: 'mainView', component: __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__["a" /* mainViewComponent */] },
            { path: 'minorView', component: __WEBPACK_IMPORTED_MODULE_1__views_minor_view_minor_view_component__["a" /* minorViewComponent */] },
            { path: 'inventarioView', component: __WEBPACK_IMPORTED_MODULE_6__views_inventario_inventario_component__["a" /* inventarioComponent */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_blank_component__["a" /* blankComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__["a" /* loginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__views_register_register_component__["a" /* registerComponent */] }
        ]
    },
    // Handle all other routes
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__["a" /* mainViewComponent */] }
];
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/app.routes.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'footer',
            template: __webpack_require__(663)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/footer.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_component__ = __webpack_require__(484);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], FooterModule);
    return FooterModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/footer.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */], __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__["a" /* TopnavbarModule */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__["a" /* FooterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutsModule);
    return LayoutsModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/layouts.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__(666)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/navigation.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_component__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationModule);
    return NavigationModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/navigation.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopnavbarComponent = (function () {
    function TopnavbarComponent() {
    }
    TopnavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* smoothlyMenu */])();
    };
    TopnavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
            selector: 'topnavbar',
            template: __webpack_require__(667)
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavbarComponent);
    return TopnavbarComponent;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/topnavbar.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnavbar_component__ = __webpack_require__(489);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopnavbarModule = (function () {
    function TopnavbarModule() {
    }
    TopnavbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavbarModule);
    return TopnavbarModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/topnavbar.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(300);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(482);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/index.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventario_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventarioModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventarioModule = (function () {
    function InventarioModule() {
    }
    InventarioModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__inventario_component__["a" /* inventarioComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], InventarioModule);
    return InventarioModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/inventario.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* loginComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/login.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_view_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainViewModule = (function () {
    function MainViewModule() {
    }
    MainViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__main_view_component__["a" /* mainViewComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MainViewModule);
    return MainViewModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/main-view.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minor_view_component__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinorViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MinorViewModule = (function () {
    function MinorViewModule() {
    }
    MinorViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__minor_view_component__["a" /* minorViewComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MinorViewModule);
    return MinorViewModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/minor-view.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_component__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__register_component__["a" /* registerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterModule);
    return RegisterModule;
}());
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/register.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/environment.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/alomatics/Desktop/bonsait/MEAN Base/src/polyfills.js.map

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        10GB of <strong>250GB</strong> Free.\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\n    </div>\n</div>"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\n                    </a>\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n                <div class=\"logo-element\">\n                    IN+\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('mainView')}\">\n                <a [routerLink]=\"['/mainView']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Main view</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['/minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Minor view</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('inventarioView')}\">\n                <a [routerLink]=\"['/inventarioView']\"><i class=\"fa fa-file-text-o\"></i> <span class=\"nav-label\">Inventario view</span> </a>\n</li>\n            <li>\n                <a [routerLink]=\"['/login']\"><i class=\"fa fa-sign-in\"></i> <span class=\"nav-label\">Login</span> </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/register']\"><i class=\"fa fa-pencil\"></i> <span class=\"nav-label\">Register</span> </a>\n            </li>\n        </ul>\n\n    </div>\n</nav>\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title text-center\">\n                    <h2>Inventario</h2>\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                           placeholder=\"Search in table\">\n\n                    <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                        <thead>\n                        <tr>\n                            <th>Producto</th>\n                            <th>Proveedor</th>\n                            <th>Cantidad</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr class=\"gradeX\">\n                            <td>Trident</td>\n                            <td>Internet Explorer 4.0</td>\n                            <td>5</td>\n                        </tr>\n                        <tr class=\"gradeC\">\n                            <td>Trident</td>\n                            <td>Internet Explorer 5.0</td>\n                            <td>6</td>\n                        </tr>\n                        <tr class=\"gradeA\">\n                            <td>Trident</td>\n                            <td>Internet Explorer 5.5</td>\n                            <td>4</td>\n                        </tr>\n                        <tr class=\"gradeA\">\n                            <td>Gecko</td>\n                            <td>Netscape Navigator 9</td>\n                            <td>2</td>\n                        </tr>\n\n                        <tr class=\"gradeA\">\n                            <td>Webkit</td>\n                            <td>Safari 1.3</td>\n                            <td>8</td>\n                        </tr>\n                        <tr class=\"gradeA\">\n                            <td>Webkit</td>\n                            <td>Safari 2.0</td>\n                            <td>1</td>\n                        </tr>\n                        <tr class=\"gradeA\">\n                            <td>Webkit</td>\n                            <td>Safari 3.0</td>\n                            <td>9</td>\n                        </tr>\n                        <tr class=\"gradeA\">\n                            <td>Webkit</td>\n                            <td>OmniWeb 5.5</td>\n                            <td>4</td>\n                        </tr>\n                        <tr class=\"gradeU\">\n                            <td>Other browsers</td>\n                            <td>All others</td>\n                            <td>6</td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                        <tr>\n                            <td colspan=\"5\">\n                                <ul class=\"pagination pull-right\"></ul>\n                            </td>\n                        </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\n    <div>\n        <div>\n            <h1 class=\"logo-name\">IN+</h1>\n        </div>\n        <h3>Welcome to IN+</h3>\n        <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.\n        </p>\n        <p>Login in. To see it in action.</p>\n        <form class=\"m-t\" role=\"form\" action=\"#\">\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n\n            <a href=\"#\"><small>Forgot password?</small></a>\n            <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n            <a class=\"btn btn-sm btn-white btn-block\" href=\"#\">Create an account</a>\n        </form>\n        <p class=\"m-t\"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>\n    </div>\n</div>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Welcome in Inspinia Angular 2 Starter Project\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n    <div>\n        <div>\n            <h1 class=\"logo-name\">IN+</h1>\n        </div>\n        <h3>Register to IN+</h3>\n        <p>Create account to see it in action.</p>\n        <form class=\"m-t\" role=\"form\" action=\"#\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <div class=\"checkbox i-checks\"><label> <input type=\"checkbox\"><i></i> Agree the terms and policy </label></div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Register</button>\n\n            <p class=\"text-muted text-center\"><small>Already have an account?</small></p>\n            <a class=\"btn btn-sm btn-white btn-block\" href=\"#\">Login</a>\n        </form>\n        <p class=\"m-t\"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>\n    </div>\n</div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);


/***/ })

},[705]);
//# sourceMappingURL=main.bundle.map