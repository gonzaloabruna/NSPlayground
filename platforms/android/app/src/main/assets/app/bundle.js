require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-app",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app.routing.ts");









var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_3__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIListViewModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ].concat(_app_routing__WEBPACK_IMPORTED_MODULE_7__["navigatableComponents"]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableComponents", function() { return navigatableComponents; });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./list/list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./login/login.component.ts");


var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"] }
];
var navigatableComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]
];


/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\n\n<GridLayout>\n  <RadListView [items]=\"groceryList\">\n    <ng-template let-item=\"item\">\n      <Label [text]=\"item.name\" class=\"p-15\"></Label>\n    </ng-template>\n  </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/grocery/grocery.service.ts");


var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-list",
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            providers: [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]],
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-image: url(\"~/images/background.jpg\");\n}\nStackLayout {\n  width: 300;\n  padding: 10 16;\n  background-color: #f0f0f0;\n}\nImage {\n  margin-bottom: 20;\n  height: 70;\n}\nButton, TextField {\n  margin-bottom: 10;\n}\n.btn-primary {\n  background-color: #CB1D00;\n  margin-left: 0;\n  margin-right: 0;\n}\nTextField {\n  placeholder-color: #C4AFB4;\n  color: black;\n}\n\n.dark {\n  background-color: #301217;\n}\n.dark TextField {\n  color:  #C4AFB4;\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout>\n  <StackLayout class=\"form\" [class.dark]=\"!isLoggingIn\">\n    <Image src=\"~/images/logo.png\"></Image>\n\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n      autocorrect=\"false\" autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\" class=\"input input-border\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"\n      [(ngModel)]=\"user.password\" class=\"input input-border\"></TextField>\n\n    <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"btn btn-primary\" (tap)=\"submit()\"></Button>\n    <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n  </StackLayout>\n</FlexboxLayout>"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/user/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new _shared_user_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.user.email = "test1234@test.com";
        this.user.password = "test";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://baas.kinvey.com/";
    Config.appKey = "kid_HyHoT_REf";
    Config.authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    Config.token = "";
    return Config;
}());



/***/ }),

/***/ "./shared/grocery/grocery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return Grocery; });
var Grocery = /** @class */ (function () {
    function Grocery(id, name) {
        this.id = id;
        this.name = name;
    }
    return Grocery;
}());



/***/ }),

/***/ "./shared/grocery/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/grocery/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "appdata/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/Groceries";
    }
    GroceryService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = {
            "sort": "{\"_kmd.lmt\": 1}"
        };
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name));
            });
            return groceryList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token
        };
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ }),

/***/ "./shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Please provide both an email address and password.");
        }
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": _config__WEBPACK_IMPORTED_MODULE_4__["Config"].authHeader
        };
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/http-client":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/http-client");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBTTFDO0lBQUE7SUFBMkIsQ0FBQztJQUFm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QUMsY0FBSTtZQUNKLDhDQUFNLENBQUMsS0FBSyxHQUFTLElBQUssQ0FBQyxJQUFJLENBQUMsU0FBUztRQUM3QyxDQUFDLENBQUMsRUFDRixpRUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNKLENBQUM7O2dCQS9DeUIsK0RBQVU7O0lBRDNCLFdBQVc7UUFEdkIsZ0VBQVUsRUFBRTt5Q0FFaUIsK0RBQVU7T0FEM0IsV0FBVyxDQWlEdkI7SUFBRCxrQkFBQztDQUFBO0FBakR1Qjs7Ozs7Ozs7QUNSeEIsaUQ7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLDRDOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge30iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBuYXZpZ2F0YWJsZUNvbXBvbmVudHMsIHJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9IiwiaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIExpc3RDb21wb25lbnRcbl07IiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyb2Nlcmllc1xcXCI+PC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZ3JvY2VyeUxpc3RcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcInAtMTVcXFwiPjwvTGFiZWw+XFxuICAgIDwvbmctdGVtcGxhdGU+XFxuICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbFwiO1xuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1saXN0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbGlzdC5jb21wb25lbnQuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeVNlcnZpY2U6IEdyb2NlcnlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKChsb2FkZWRHcm9jZXJpZXM6IFtdKSA9PiB7XG4gICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0OiBHcm9jZXJ5KSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIkZsZXhib3hMYXlvdXQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXG59XFxuU3RhY2tMYXlvdXQge1xcbiAgd2lkdGg6IDMwMDtcXG4gIHBhZGRpbmc6IDEwIDE2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuSW1hZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7XFxuICBoZWlnaHQ6IDcwO1xcbn1cXG5CdXR0b24sIFRleHRGaWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDtcXG59XFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQjFEMDA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuVGV4dEZpZWxkIHtcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjQzRBRkI0O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAxMjE3O1xcbn1cXG4uZGFyayBUZXh0RmllbGQge1xcbiAgY29sb3I6ICAjQzRBRkI0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dD5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCIgW2NsYXNzLmRhcmtdPVxcXCIhaXNMb2dnaW5nSW5cXFwiPlxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXG5cXG4gICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbWFpbCBBZGRyZXNzXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXFxcIiAodGFwKT1cXFwidG9nZ2xlRGlzcGxheSgpXFxcIj48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJ0ZXN0MTIzNEB0ZXN0LmNvbVwiO1xuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwidGVzdFwiO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcbiAgICAgICAgKGV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgIH0sXG4gICAgICAoZXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgaWYoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24uZXJyb3IuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbilcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59IiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTsiLCJleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9iYWFzLmtpbnZleS5jb20vXCI7XG4gIHN0YXRpYyBhcHBLZXkgPSBcImtpZF9IeUhvVF9SRWZcIjtcbiAgc3RhdGljIGF1dGhIZWFkZXIgPSBcIkJhc2ljIGEybGtYMGg1U0c5VVgxSkZaam8xTVRreE1ESmxaV0ZoTXpRME16TXlPREZqTjJNeU9ETTNNR1E1T1RJek1RXCI7XG4gIHN0YXRpYyB0b2tlbiA9IFwiXCI7XG59IiwiZXhwb3J0IGNsYXNzIEdyb2Nlcnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIG5hbWU6IHN0cmluZykge31cbn0iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeS5tb2RlbFwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5U2VydmljZSB7XG4gICAgYmFzZVVybCA9IENvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgLy8gS2ludmV5LXNwZWNpZmljIHN5bnRheCB0byBzb3J0IHRoZSBncm9jZXJpZXMgYnkgbGFzdCBtb2RpZmllZCB0aW1lLiBEb27igJl0IHdvcnJ5IGFib3V0IHRoZSBkZXRhaWxzIGhlcmUuXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBcInNvcnRcIjogXCJ7XFxcIl9rbWQubG10XFxcIjogMX1cIlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoKDxhbnk+Z3JvY2VyeSkuX2lkLCAoPGFueT5ncm9jZXJ5KS5OYW1lKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb2NlcnlMaXN0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIktpbnZleSBcIiArIENvbmZpZy50b2tlblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBpZiAoIXVzZXIuZW1haWwgfHwgIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogQ29uZmlnLmF1dGhIZWFkZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL2xvZ2luXCIsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgICkucGlwZShcbiAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxuICAgICAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gKDxhbnk+ZGF0YSkuX2ttZC5hdXRodG9rZW5cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=