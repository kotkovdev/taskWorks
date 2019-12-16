(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n    <div class=\"container-fluid\">\n        <app-menu></app-menu>\n    </div>\n</nav>\n<div class=\"main-content\">\n    <app-header></app-header>\n    <div class=\"container-fluid mt--7\">\n        <router-outlet></router-outlet>\n\n        <footer class=\"footer\">\n            <div class=\"row align-items-center justify-content-xl-between\">\n            <div class=\"col-xl-6\">\n                <div class=\"copyright text-center text-xl-left text-muted\">\n                © 2019 <a href=\"https://taskworks.com\" class=\"font-weight-bold ml-1\" target=\"_blank\">Taskworks</a>\n                </div>\n            </div>\n            <div class=\"col-xl-6\">\n                <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n                <li class=\"nav-item\">\n                    <a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link\" target=\"_blank\">About Us</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"http://blog.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Blog</a>\n                </li>\n                </ul>\n            </div>\n            </div>\n        </footer>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>auth works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n        <div class=\"container-fluid\">\n            <!-- Form -->\n            <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\">\n                <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                </div>\n            </div>\n            </form>\n            <!-- User -->\n            <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link pr-0\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <div class=\"media align-items-center\">\n                    <span class=\"avatar avatar-sm rounded-circle\">\n                    <img alt=\"Image placeholder\" src=\"/assets/img/theme/team-1-800x800.jpg\">\n                    </span>\n                    <div class=\"media-body ml-2 d-none d-lg-block\">\n                    <span class=\"mb-0 text-sm  font-weight-bold\">John Doe</span>\n                    </div>\n                </div>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n                <div class=\" dropdown-header noti-title\">\n                    <h6 class=\"text-overflow m-0\">Welcome!</h6>\n                </div>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-single-02\"></i>\n                    <span>My profile</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-settings-gear-65\"></i>\n                    <span>Settings</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-calendar-grid-58\"></i>\n                    <span>Activity</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-support-16\"></i>\n                    <span>Support</span>\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a href=\"#!\" class=\"dropdown-item\">\n                    <i class=\"ni ni-user-run\"></i>\n                    <span>Logout</span>\n                </a>\n                </div>\n            </li>\n            </ul>\n        </div>\n    </nav>\n<div class=\"header bg-gradient-primary pb-8 pt-5 pt-md-8\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toggler -->\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n  aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>\n<!-- Brand -->\n<a class=\"navbar-brand pt-0\" routerLink=\"/\">\n  <img src=\"../assets/img/brand/blue.png\" class=\"navbar-brand-img\" alt=\"...\">\n</a>\n<!-- User -->\n<ul class=\"nav align-items-center d-md-none\">\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link nav-link-icon\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"ni ni-bell-55\"></i>\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\">\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n    </div>\n  </li>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <div class=\"media align-items-center\">\n        <span class=\"avatar avatar-sm rounded-circle\">\n          <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\">\n        </span>\n      </div>\n    </a>\n  </li>\n</ul>\n<!-- Collapse -->\n<div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n  <!-- Collapse header -->\n  <div class=\"navbar-collapse-header d-md-none\">\n    <div class=\"row\">\n      <div class=\"col-6 collapse-brand\">\n        <a href=\"../index.html\">\n          <img src=\"../assets/img/brand/blue.png\">\n        </a>\n      </div>\n      <div class=\"col-6 collapse-close\">\n        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n          aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n          <span></span>\n          <span></span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- Form -->\n  <form class=\"mt-4 mb-3 d-md-none\">\n    <div class=\"input-group input-group-rounded input-group-merge\">\n      <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n        aria-label=\"Search\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">\n          <span class=\"fa fa-search\"></span>\n        </div>\n      </div>\n    </div>\n  </form>\n  <!-- Navigation -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\" nav-link\" routerLink=\"/\"> <i class=\"ni ni-tv-2 text-primary\"></i> Dashboard\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/users\">\n        <i class=\"ni ni-single-02\"></i> Users\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/tasks\">\n        <i class=\"ni ni-bullet-list-67\"></i>Tasks\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/reports\">\n        <i class=\"ni ni-email-83\"></i>Reports\n      </a>\n    </li>\n  </ul>\n  <!-- Divider -->\n  <hr class=\"my-3\">\n  <!-- Heading -->\n  <h6 class=\"navbar-heading text-muted\">Settings</h6>\n  <!-- Navigation -->\n  <ul class=\"navbar-nav mb-md-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/projects\">\n        <i class=\"ni ni-archive-2\"></i> Projects\n      </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/departments\">\n          <i class=\"ni ni-building\"></i> Departments\n        </a>\n      </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/settings\">\n        <i class=\"ni ni-settings-gear-65\"></i> Settings\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html\">\n        <i class=\"ni ni-spaceship\"></i> Getting started\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-task/new-task.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-task/new-task.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <h1 class=\"mb-0\">Create new task</h1>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"title\">Title</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"title\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"title\">Title</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"title\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"title\">Title</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"title\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label for=\"description\">Description</label>\n                                    <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\n                                        class=\"form-control\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer py-4\">\n                <div class=\"float-right\">\n                    <button class=\"btn btn-default\">Cancel</button>\n                    <button class=\"btn btn-success\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/reports.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/reports.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reports works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\" id=\"search\">\n    <div class=\"input-group col-md-12\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search string...\">\n        <div class=\"input-group-prepend\">\n            <button class=\"btn btn-primary\">Search</button>\n        </div>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1\">\n        <div class=\"col\">\n          <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n              <h3 class=\"mb-0\"><b>#21442</b> Example task</h3>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n\n                </div>\n            </div>\n            <div class=\"card-footer py-4\">\n              \n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"float-left\">\n              <h1 class=\"mb-0\">Your tasks</h1>\n          </div>\n          <div class=\"float-right\">\n            <a class=\"btn btn-success\" routerLink=\"/tasks/new\"><span class=\"glyphicon glyphicon-plus\"></span> Create new</a>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Title</th>\n                <th scope=\"col\">Project</th>\n                <th scope=\"col\">Status</th>\n                <th scope=\"col\">Observers</th>\n                <th scope=\"col\">Completion</th>\n                <th scope=\"col\">Branch</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td scope=\"row\">21442</td>\n                <td scope=\"row\">\n                    <a href=\"/task/21442\">Design UI for taskworks</a>\n                </td>\n                <td scope=\"row\">\n                  <a href=\"#\">Example project</a>\n                </td>\n                <td>\n                  <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-warning\"></i> Im proccess\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">60%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                    <a href=\"#\">task-works-ui</a>\n                </td>\n                <td class=\"text-right\">\n                  <div class=\"dropdown\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer py-4\">\n          <!--<nav aria-label=\"...\">\n            <ul class=\"pagination justify-content-end mb-0\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                  <i class=\"fas fa-angle-left\"></i>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">\n                  <i class=\"fas fa-angle-right\"></i>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>-->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/new-task/new-task.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");







var routes = [
    {
        path: 'task/:id',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]
    },
    {
        path: 'tasks',
        component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]
    },
    {
        path: 'tasks/new',
        component: _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"]
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskWorks';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/new-task/new-task.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"],
                _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_12__["NewTaskComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gradient-primary {\n  padding-top: 3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyYWRpZW50LXByaW1hcnkge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59IiwiLmJnLWdyYWRpZW50LXByaW1hcnkge1xuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, globals) {
        this.router = router;
        this.globals = globals;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeProject = function (projectName) {
        console.log(projectName);
        this.router.navigateByUrl('/' + projectName);
        this.globals.set('project-name', projectName);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.menu {\n  height: 100vh;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2Lm1lbnUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMjBweDtcbn0iLCJuYXYubWVudSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/new-task/new-task.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-task/new-task.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-task/new-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-task/new-task.component.ts ***!
  \************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent() {
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/new-task/new-task.component.scss")]
        })
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/reports/reports.component.scss")]
        })
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iLCIjc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/globals.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsService", function() { return GlobalsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalsService = /** @class */ (function () {
    function GlobalsService() {
        this.params = [];
    }
    GlobalsService.prototype.set = function (key, value) {
        this.params[key] = value;
    };
    GlobalsService.prototype.get = function (key) {
        return this.params[key];
    };
    GlobalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GlobalsService);
    return GlobalsService;
}());



/***/ }),

/***/ "./src/app/services/http-helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-helper.service.ts ***!
  \*************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpHelperService = /** @class */ (function () {
    function HttpHelperService() {
        this.baseURL = 'http://localhost:8000/api';
    }
    HttpHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpHelperService);
    return HttpHelperService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-helper.service */ "./src/app/services/http-helper.service.ts");




var TasksService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TasksService, _super);
    function TasksService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    TasksService.prototype.getAll = function () {
        /*return this.http.get('/assets/config.json').subscribe(data => {
          console.log(data);
        });*/
        return this.http.get(this.baseURL + '/user/all').subscribe(function (data) {
            console.log(data);
        });
    };
    TasksService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TasksService);
    return TasksService;
}(_http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]));



/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TaskComponent = /** @class */ (function () {
    function TaskComponent(route) {
        this.route = route;
    }
    TaskComponent.prototype.ngOnInit = function () {
        console.log("Task component");
        console.log(this.route.snapshot.params);
    };
    TaskComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
        })
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/tasks.service */ "./src/app/services/tasks.service.ts");



var TasksComponent = /** @class */ (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.tasks = {};
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.tasks = this.tasksService.getAll();
        console.log(this);
    };
    TasksComponent.ctorParameters = function () { return [
        { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }
    ]; };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
        })
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:80000/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergey/Projects/taskworks-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map