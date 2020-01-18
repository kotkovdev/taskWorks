function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/new-project/new-project.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/new-project/new-project.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsNewProjectNewProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"new-project\" (ngSubmit)=\"onSubmit(formData)\" #newProjectForm=\"ngForm\" [formGroup]=\"projectForm\">\n    <div class=\"row m-1\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h1 class=\"mb-0\">Create new project</h1>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Repository URL</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"repository_url\" formControlName=\"repository\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <textarea id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" formControlName=\"description\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">RSA</label>\n                                        <textarea id=\"rsa\" cols=\"30\" rows=\"10\" class=\"form-control\" formControlName=\"rsa\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-default\">Cancel</button>\n                        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/projects-list/projects-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/projects-list/projects-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsListProjectsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-1\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <div class=\"float-left\">\n                    <h1 class=\"mb-0\">Projects</h1>\n                </div>\n                <div class=\"float-right\">\n                    <a class=\"btn btn-success\" routerLink=\"/projects/new\"><span class=\"glyphicon glyphicon-plus\"></span>Create new</a>\n                </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">ID</th>\n                            <th scope=\"col\">Name</th>\n                            <th scope=\"col\">Contributors</th>\n\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td scope=\"row\">21442</td>\n                            <td scope=\"row\">\n                                <a href=\"/task/21442\">TaskWorks project</a>\n                            </td>\n                            <td>\n                                <div class=\"avatar-group\">\n                                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                                        <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                                    </a>\n                                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                                        <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                                    </a>\n                                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                                        <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                                    </a>\n                                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                                        <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                                    </a>\n                                </div>\n                            </td>\n                            <td class=\"text-right\">\n                                <a href=\"#\">Settings</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card-footer py-4\">\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n    <div class=\"container-fluid\">\n        <app-menu></app-menu>\n    </div>\n</nav>\n<div class=\"main-content\">\n    <app-header></app-header>\n    <div class=\"container-fluid mt--7\">\n        <router-outlet></router-outlet>\n        <ng-http-loader></ng-http-loader>\n        <footer class=\"footer\">\n            <div class=\"row align-items-center justify-content-xl-between\">\n                <div class=\"col-xl-6\">\n                    <div class=\"copyright text-center text-xl-left text-muted\">\n                        © 2019 <a href=\"https://taskworks.com\" class=\"font-weight-bold ml-1\" target=\"_blank\">Taskworks</a>\n                    </div>\n                </div>\n                <div class=\"col-xl-6\">\n                    <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n                        <li class=\"nav-item\">\n                            <a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link\" target=\"_blank\">About Us</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"http://blog.creative-tim.com\" class=\"nav-link\" target=\"_blank\">Blog</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </footer>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n        <div class=\"container-fluid\">\n            <!-- Form -->\n            <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n            <div class=\"form-group mb-0\">\n                <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                </div>\n            </div>\n            </form>\n            <!-- User -->\n            <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link pr-0\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <div class=\"media align-items-center\">\n                    <span class=\"avatar avatar-sm rounded-circle\">\n                    <img alt=\"Image placeholder\" src=\"/assets/img/theme/team-1-800x800.jpg\">\n                    </span>\n                    <div class=\"media-body ml-2 d-none d-lg-block\">\n                    <span class=\"mb-0 text-sm  font-weight-bold\">John Doe</span>\n                    </div>\n                </div>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n                <div class=\" dropdown-header noti-title\">\n                    <h6 class=\"text-overflow m-0\">Welcome!</h6>\n                </div>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-single-02\"></i>\n                    <span>My profile</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-settings-gear-65\"></i>\n                    <span>Settings</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-calendar-grid-58\"></i>\n                    <span>Activity</span>\n                </a>\n                <a href=\"../examples/profile.html\" class=\"dropdown-item\">\n                    <i class=\"ni ni-support-16\"></i>\n                    <span>Support</span>\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a href=\"#!\" class=\"dropdown-item\">\n                    <i class=\"ni ni-user-run\"></i>\n                    <span>Logout</span>\n                </a>\n                </div>\n            </li>\n            </ul>\n        </div>\n    </nav>\n<div class=\"header bg-gradient-primary pb-8 pt-5 pt-md-8\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Toggler -->\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n  aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>\n<!-- Brand -->\n<a class=\"navbar-brand pt-0\" routerLink=\"/\">\n  <img src=\"../assets/img/brand/blue.png\" class=\"navbar-brand-img\" alt=\"...\">\n</a>\n<!-- User -->\n<ul class=\"nav align-items-center d-md-none\">\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link nav-link-icon\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"ni ni-bell-55\"></i>\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\">\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n    </div>\n  </li>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <div class=\"media align-items-center\">\n        <span class=\"avatar avatar-sm rounded-circle\">\n          <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\">\n        </span>\n      </div>\n    </a>\n  </li>\n</ul>\n<!-- Collapse -->\n<div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n  <!-- Collapse header -->\n  <div class=\"navbar-collapse-header d-md-none\">\n    <div class=\"row\">\n      <div class=\"col-6 collapse-brand\">\n        <a href=\"../index.html\">\n          <img src=\"../assets/img/brand/blue.png\">\n        </a>\n      </div>\n      <div class=\"col-6 collapse-close\">\n        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n          aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n          <span></span>\n          <span></span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- Form -->\n  <form class=\"mt-4 mb-3 d-md-none\">\n    <div class=\"input-group input-group-rounded input-group-merge\">\n      <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n        aria-label=\"Search\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">\n          <span class=\"fa fa-search\"></span>\n        </div>\n      </div>\n    </div>\n  </form>\n  <!-- Navigation -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\" nav-link\" routerLink=\"/\"> <i class=\"ni ni-tv-2 text-primary\"></i> Dashboard\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/users\">\n        <i class=\"ni ni-single-02\"></i> Users\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/tasks\">\n        <i class=\"ni ni-bullet-list-67\"></i>Tasks\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/reports\">\n        <i class=\"ni ni-email-83\"></i>Reports\n      </a>\n    </li>\n  </ul>\n  <!-- Divider -->\n  <hr class=\"my-3\">\n  <!-- Heading -->\n  <h6 class=\"navbar-heading text-muted\">Settings</h6>\n  <!-- Navigation -->\n  <ul class=\"navbar-nav mb-md-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/projects\">\n        <i class=\"ni ni-archive-2\"></i> Projects\n      </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/departments\">\n          <i class=\"ni ni-building\"></i> Departments\n        </a>\n      </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/settings\">\n        <i class=\"ni ni-settings-gear-65\"></i> Settings\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html\">\n        <i class=\"ni ni-spaceship\"></i> Getting started\n      </a>\n    </li>\n  </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/edit-report/edit-report.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/edit-report/edit-report.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportsEditReportEditReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"new-report\" (ngSubmit)=\"onSubmit(formData)\" #newProjectForm=\"ngForm\" [formGroup]=\"reportForm\">\n    <div class=\"row m-1\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <div class=\"float-left\">\n                        <h1 class=\"mb-0\">Edit report</h1>\n                    </div>\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-danger\">Decline</button>\n                        <button class=\"btn btn-success\">Move to new taks</button>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <textarea id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" formControlName=\"description\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-default\" routerLink=\"/reports/\">Cancel</button>\n                        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/new-report/new-report.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/new-report/new-report.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportsNewReportNewReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"new-report\" (ngSubmit)=\"onSubmit(formData)\" #newProjectForm=\"ngForm\" [formGroup]=\"reportForm\">\n    <div class=\"row m-1\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h1 class=\"mb-0\">Create new report</h1>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <textarea id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" formControlName=\"description\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-default\" routerLink=\"/reports/\">Cancel</button>\n                        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-1\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <div class=\"float-left\">\n                    <h1 class=\"mb-0\">Reports</h1>\n                </div>\n                <div class=\"float-right\">\n                    <a class=\"btn btn-success\" routerLink=\"/reports/new\"><span class=\"glyphicon glyphicon-plus\"></span>Create new</a>\n                </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">ID</th>\n                            <th scope=\"col\">Title</th>\n                            <th scope=\"col\">Attached Task</th>\n                            <th scope=\"col\">Status</th>\n                            <th scope=\"col\">Created</th>\n                            <th scope=\"col\">Updated</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let report of reports\">\n                            <td scope=\"row\">{{ report.id }}</td>\n                            <td scope=\"row\">\n                                <a [routerLink]=\"['/report',report.id]\">{{ report.title }}</a>\n                            </td>\n                            <td>\n                                <a routerLink=\"/task/1\">Task name</a>\n                            </td>\n                            <td>\n                                Here is status\n                            </td>\n                            <td>{{ report.created_at }}</td>\n                            <td>{{ report.updated_at }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card-footer py-4\">\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-inline\" id=\"search\">\n    <div class=\"input-group col-md-12\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search string...\">\n        <div class=\"input-group-prepend\">\n            <button class=\"btn btn-primary\">Search</button>\n        </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/new-task/new-task.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/new-task/new-task.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasksNewTaskNewTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"task-form\" (ngSubmit)=\"onSubmit(formData)\" #newTaskForm=\"ngForm\" [formGroup]=\"taskForm\">\n    <div class=\"row m-1\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h1 class=\"mb-0\">Create new task</h1>\n                </div>\n                <div class=\"card-body\">\n                    <div *ngIf=\"taskSaved\" class=\"alert alert-success\" role=\"alert\">\n                        <strong>Success!</strong> New task was be saved!\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Project</label>\n                                        <select name=\"project\" id=\"project\" class=\"form-control\" formControlName=\"project_id\">\n                                            <option value=\"\">-</option>\n                                            <option *ngFor=\"let project of projects\" value=\"{{project.id}}\">{{project.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Accountable</label>\n                                        <select id=\"accountable\" class=\"form-control\" formControlName=\"user_id\">\n                                            <option value=\"\">-</option>\n                                            <option *ngFor=\"let user of users\" value=\"{{user.id}}\">{{user.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Status</label>\n                                        <select name=\"project\" id=\"status\" class=\"form-control\" formControlName=\"status_id\">\n                                            <option value=\"0\">-</option>\n                                            <option value=\"1\">Analitycs</option>\n                                            <option value=\"2\">Development</option>\n                                            <option value=\"3\">Testing</option>\n                                            <option value=\"4\">Release</option>\n                                            <!--<option *ngFor=\"let project of projects\" value=\"{{project.id}}\">{{project.name}}</option>-->\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Report</label>\n                                        <select id=\"report\" class=\"form-control\" formControlName=\"report_id\">\n                                            <option value=\"\">-</option>\n                                            <option *ngFor=\"let report of reports\" value=\"{{report.id}}\">#{{report.id}} {{report.title}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" formControlName=\"description\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-default\">Cancel</button>\n                        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/task/task.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/task/task.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasksTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-1\" *ngIf=\"task\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <div class=\"float-left\">\n                    <h1 class=\"mb-0\"><b>#{{task.id}}</b> {{task.title}}</h1>\n                </div>\n                <div class=\"float-right\">\n                    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#report\" aria-expanded=\"false\" aria-controls=\"report\">\n                        Show attached report\n                    </button>\n                    <button class=\"btn btn-primary\">Edit</button>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <strong>Accountable: </strong>\n                        <a routerLink=\"/user/{{task.user.id}}\">#{{task.user.id}} {{task.user.name}}</a>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <strong>Project: </strong>\n                        <a routerLink=\"/project/{{task.project.id}}\">#{{task.project.id}} {{task.project.name}}</a>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <strong>Report: </strong>\n                        <a routerLink=\"/report/{{task.report.id}}\">#{{task.report.id}} {{task.report.title}}</a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <hr>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"collapse\" id=\"report\">\n                            <h3><strong>Report:</strong> #{{task.report.id}} {{task.report.title}}</h3>\n                            <div class=\"card card-body\">\n                                <pre>\n                                    {{task.report.description}}\n                                </pre>\n                            </div>\n                            <hr>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div>{{task.description}}</div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <hr>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"card card-body\">\n                            <h3>Changes history</h3>\n                            <pre>\n                                Here is will be history of task changes\n                            </pre>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-footer py-4\">\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTasksTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-1\">\n    <div class=\"col\">\n        <div class=\"card shadow\">\n            <div class=\"card-header border-0\">\n                <div class=\"float-left\">\n                    <h1 class=\"mb-0\">Your tasks</h1>\n                </div>\n                <div class=\"float-right\">\n                    <a class=\"btn btn-success\" routerLink=\"/tasks/new\"><span class=\"glyphicon glyphicon-plus\"></span> Create new</a>\n                </div>\n            </div>\n            <div class=\"table-responsive\">\n                <table class=\"table align-items-center table-flush\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">ID</th>\n                            <th scope=\"col\">Title</th>\n                            <th scope=\"col\">Project</th>\n                            <th scope=\"col\">Status</th>\n                            <th scope=\"col\">Report</th>\n                            <th scope=\"col\">Completion</th>\n                            <th scope=\"col\">Accountable</th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let task of tasks\">\n                            <td scope=\"row\">#{{task.id}}</td>\n                            <td scope=\"row\">\n                                <a routerLink=\"/task/{{task.id}}\">{{task.title}}</a>\n                            </td>\n                            <td scope=\"row\">\n                                <a routerLink=\"/project/{{task.project.id}}\">{{task.project.name}}</a>\n                            </td>\n                            <td>\n                                <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-warning\"></i> {{task.status_id}}\n                  </span>\n                            </td>\n                            <td>\n                                <a routerLink=\"/report/{{task.report.id}}\">{{task.report.title}}</a>\n                            </td>\n                            <td>\n                                <div class=\"d-flex align-items-center\">\n                                    <span class=\"mr-2\">60%</span>\n                                    <div>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <a routerLink=\"/user/{{task.user.id}}\">{{task.user.name}}</a>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"dropdown\">\n                                    <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <i class=\"fas fa-ellipsis-v\"></i>\n                                    </a>\n                                    <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card-footer py-4\">\n                <!--<nav aria-label=\"...\">\n            <ul class=\"pagination justify-content-end mb-0\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                  <i class=\"fas fa-angle-left\"></i>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">\n                  <i class=\"fas fa-angle-right\"></i>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>-->\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-form/user-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-form/user-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUserFormUserFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"new-project\" (ngSubmit)=\"onSubmit(formData)\" #newProjectForm=\"ngForm\" [formGroup]=\"userForm\">\n    <div class=\"row m-1\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h1 class=\"mb-0\">Create new user</h1>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Email</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Password</label>\n                                        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"title\">Repeat password</label>\n                                        <input type=\"password\" class=\"form-control\" id=\"rPassword\" formControlName=\"rPassword\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <h2>Access to Projects</h2>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group\">\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer py-4\">\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-default\">Cancel</button>\n                        <button class=\"btn btn-success\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersListUsersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-1\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"float-left\">\n              <h1 class=\"mb-0\">Users</h1>\n          </div>\n          <div class=\"float-right\">\n            <a class=\"btn btn-success\" routerLink=\"/users/new\"><span class=\"glyphicon glyphicon-plus\"></span> Create new</a>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\"></th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n\n              <tr *ngFor=\"let user of users\">\n                <td scope=\"row\">{{ user.id }}</td>\n                <td scope=\"row\">\n                    <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                        <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                </td>\n                <td scope=\"row\">\n                  <a href=\"#\">{{ user.name }}</a>\n                </td>\n                <td scope=\"row\">\n                    <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Projects/new-project/new-project.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Projects/new-project/new-project.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsNewProjectNewProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3RzL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Projects/new-project/new-project.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Projects/new-project/new-project.component.ts ***!
    \***************************************************************/

  /*! exports provided: NewProjectComponent */

  /***/
  function srcAppProjectsNewProjectNewProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function () {
      return NewProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NewProjectComponent =
    /*#__PURE__*/
    function () {
      function NewProjectComponent(formBuilder) {
        _classCallCheck(this, NewProjectComponent);

        this.formBuilder = formBuilder;
      }

      _createClass(NewProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projectForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repository: ['', null],
            description: ['', null],
            rsa: ['', null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(this.projectForm.valid);
          console.log(this.projectForm.controls['name'].value);
          return false;
        }
      }]);

      return NewProjectComponent;
    }();

    NewProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/new-project/new-project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-project.component.scss */
      "./src/app/Projects/new-project/new-project.component.scss")).default]
    })], NewProjectComponent);
    /***/
  },

  /***/
  "./src/app/Projects/projects-list/projects-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/Projects/projects-list/projects-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsListProjectsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3RzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Projects/projects-list/projects-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Projects/projects-list/projects-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProjectsListComponent */

  /***/
  function srcAppProjectsProjectsListProjectsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () {
      return ProjectsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsListComponent =
    /*#__PURE__*/
    function () {
      function ProjectsListComponent() {
        _classCallCheck(this, ProjectsListComponent);
      }

      _createClass(ProjectsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsListComponent;
    }();

    ProjectsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Projects/projects-list/projects-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects-list.component.scss */
      "./src/app/Projects/projects-list/projects-list.component.scss")).default]
    })], ProjectsListComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/tasks/tasks.component.ts");
    /* harmony import */


    var _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tasks/task/task.component */
    "./src/app/tasks/task/task.component.ts");
    /* harmony import */


    var _tasks_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tasks/new-task/new-task.component */
    "./src/app/tasks/new-task/new-task.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _Projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Projects/projects-list/projects-list.component */
    "./src/app/Projects/projects-list/projects-list.component.ts");
    /* harmony import */


    var _Projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Projects/new-project/new-project.component */
    "./src/app/Projects/new-project/new-project.component.ts");
    /* harmony import */


    var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users/users-list/users-list.component */
    "./src/app/users/users-list/users-list.component.ts");
    /* harmony import */


    var _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./users/user-form/user-form.component */
    "./src/app/users/user-form/user-form.component.ts");
    /* harmony import */


    var _reports_new_report_new_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./reports/new-report/new-report.component */
    "./src/app/reports/new-report/new-report.component.ts");
    /* harmony import */


    var _reports_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reports/edit-report/edit-report.component */
    "./src/app/reports/edit-report/edit-report.component.ts");

    var routes = [
    /**
     * Tasks
     */
    {
      path: 'task/:id',
      component: _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]
    }, {
      path: 'tasks',
      component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]
    }, {
      path: 'tasks/new',
      component: _tasks_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"]
    },
    /**
     * Reports
     */
    {
      path: 'reports',
      component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"]
    }, {
      path: 'reports/new',
      component: _reports_new_report_new_report_component__WEBPACK_IMPORTED_MODULE_11__["NewReportComponent"]
    }, {
      path: 'report/:id',
      component: _reports_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_12__["EditReportComponent"]
    },
    /**
     * Projects
     */
    {
      path: 'projects',
      component: _Projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsListComponent"]
    }, {
      path: 'projects/new',
      component: _Projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_8__["NewProjectComponent"]
    },
    /**
     * Users
     */
    {
      path: 'users',
      component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"]
    }, {
      path: 'users/new',
      component: _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(route) {
        _classCallCheck(this, AppComponent);

        this.route = route;
        this.title = 'TaskWorks';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]]
        }]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-http-loader */
    "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/tasks/tasks.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tasks/task/task.component */
    "./src/app/tasks/task/task.component.ts");
    /* harmony import */


    var _tasks_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tasks/new-task/new-task.component */
    "./src/app/tasks/new-task/new-task.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _reports_new_report_new_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./reports/new-report/new-report.component */
    "./src/app/reports/new-report/new-report.component.ts");
    /* harmony import */


    var _Projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Projects/projects-list/projects-list.component */
    "./src/app/Projects/projects-list/projects-list.component.ts");
    /* harmony import */


    var _Projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Projects/new-project/new-project.component */
    "./src/app/Projects/new-project/new-project.component.ts");
    /* harmony import */


    var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./users/users-list/users-list.component */
    "./src/app/users/users-list/users-list.component.ts");
    /* harmony import */


    var _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./users/user-form/user-form.component */
    "./src/app/users/user-form/user-form.component.ts");
    /* harmony import */


    var _reports_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./reports/edit-report/edit-report.component */
    "./src/app/reports/edit-report/edit-report.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _tasks_task_task_component__WEBPACK_IMPORTED_MODULE_12__["TaskComponent"], _tasks_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_13__["NewTaskComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_14__["ReportsComponent"], _Projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsListComponent"], _Projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__["NewProjectComponent"], _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__["UsersListComponent"], _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_19__["UserFormComponent"], _reports_new_report_new_report_component__WEBPACK_IMPORTED_MODULE_15__["NewReportComponent"], _reports_edit_report_edit_report_component__WEBPACK_IMPORTED_MODULE_20__["EditReportComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["NgHttpLoaderModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-gradient-primary {\n  padding-top: 3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyYWRpZW50LXByaW1hcnkge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59IiwiLmJnLWdyYWRpZW50LXByaW1hcnkge1xuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeProject",
        value: function changeProject(projectName) {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/interfaces/Report.ts":
  /*!**************************************!*\
    !*** ./src/app/interfaces/Report.ts ***!
    \**************************************/

  /*! exports provided: Report */

  /***/
  function srcAppInterfacesReportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Report", function () {
      return Report;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Report = function Report(id, title, description, attachments) {
      _classCallCheck(this, Report);

      this.id = id;
      this.title = title;
      this.description = description;
      this.attachments = attachments;
    };
    /***/

  },

  /***/
  "./src/app/interfaces/Task.ts":
  /*!************************************!*\
    !*** ./src/app/interfaces/Task.ts ***!
    \************************************/

  /*! exports provided: Task */

  /***/
  function srcAppInterfacesTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Task = function Task(id, title, status_id, user_id, report_id, project_id, description) {
      _classCallCheck(this, Task);

      this.id = id;
      this.title = title;
      this.status_id = status_id;
      this.user_id = user_id;
      this.report_id = report_id;
      this.project_id = project_id;
      this.description = description;
    };
    /***/

  },

  /***/
  "./src/app/interfaces/User.ts":
  /*!************************************!*\
    !*** ./src/app/interfaces/User.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppInterfacesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(id, name, email, password) {
      _classCallCheck(this, User);

      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav.menu {\n  height: 100vh;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2Lm1lbnUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMjBweDtcbn0iLCJuYXYubWVudSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/menu/menu.component.scss")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/reports/edit-report/edit-report.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/reports/edit-report/edit-report.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportsEditReportEditReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvZWRpdC1yZXBvcnQvZWRpdC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/reports/edit-report/edit-report.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/reports/edit-report/edit-report.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditReportComponent */

  /***/
  function srcAppReportsEditReportEditReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditReportComponent", function () {
      return EditReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/reports.service */
    "./src/app/services/reports.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_interfaces_Report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/interfaces/Report */
    "./src/app/interfaces/Report.ts");

    var EditReportComponent =
    /*#__PURE__*/
    function () {
      function EditReportComponent(reportService, formBuilder, route) {
        _classCallCheck(this, EditReportComponent);

        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.route = route;
      }

      _createClass(EditReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.reportForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.route.paramMap.subscribe(function (params) {
            _this.reportId = Number(params.get('id'));

            _this.loadFormData(_this.reportId);
          });
        }
      }, {
        key: "loadFormData",
        value: function loadFormData(reportId) {
          var _this2 = this;

          this.reportService.getById(reportId).subscribe(function (report) {
            _this2.reportForm.get('title').setValue(report.title);

            _this2.reportForm.get('description').setValue(report.description);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.reportForm.valid) {
            var controls = this.reportForm.controls;
            var report = new src_app_interfaces_Report__WEBPACK_IMPORTED_MODULE_5__["Report"](null, controls['title'].value, controls['description'].value, null);
            this.reportService.update(this.reportId, report).subscribe(function (response) {
              console.log(response);
            });
          }
        }
      }]);

      return EditReportComponent;
    }();

    EditReportComponent.ctorParameters = function () {
      return [{
        type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    EditReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/edit-report/edit-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-report.component.scss */
      "./src/app/reports/edit-report/edit-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]))], EditReportComponent);
    /***/
  },

  /***/
  "./src/app/reports/new-report/new-report.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/reports/new-report/new-report.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportsNewReportNewReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvbmV3LXJlcG9ydC9uZXctcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/reports/new-report/new-report.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/reports/new-report/new-report.component.ts ***!
    \************************************************************/

  /*! exports provided: NewReportComponent */

  /***/
  function srcAppReportsNewReportNewReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewReportComponent", function () {
      return NewReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_interfaces_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/interfaces/Report */
    "./src/app/interfaces/Report.ts");
    /* harmony import */


    var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/reports.service */
    "./src/app/services/reports.service.ts");

    var NewReportComponent =
    /*#__PURE__*/
    function () {
      function NewReportComponent(reportsService, formBuilder) {
        _classCallCheck(this, NewReportComponent);

        this.reportsService = reportsService;
        this.formBuilder = formBuilder;
      }

      _createClass(NewReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reportForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.reportForm.valid) {
            var controls = this.reportForm.controls;
            var report = new src_app_interfaces_Report__WEBPACK_IMPORTED_MODULE_3__["Report"](null, controls['title'].value, controls['description'].value, null);
            this.reportsService.create(report).subscribe(function (response) {
              console.log(response);
            });
          }
        }
      }]);

      return NewReportComponent;
    }();

    NewReportComponent.ctorParameters = function () {
      return [{
        type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    NewReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/new-report/new-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-report.component.scss */
      "./src/app/reports/new-report/new-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]))], NewReportComponent);
    /***/
  },

  /***/
  "./src/app/reports/reports.component.scss":
  /*!************************************************!*\
    !*** ./src/app/reports/reports.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reports/reports.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reports/reports.component.ts ***!
    \**********************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/reports.service */
    "./src/app/services/reports.service.ts");

    var ReportsComponent =
    /*#__PURE__*/
    function () {
      function ReportsComponent(reportsService) {
        _classCallCheck(this, ReportsComponent);

        this.reportsService = reportsService;
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.reportsService.getAll().subscribe(function (reports) {
            _this3.reports = reports;
          });
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]]
        }]
      }];
    };

    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.scss */
      "./src/app/reports/reports.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]))], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/search/search.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/search/search.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#search {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnZXkvUHJvamVjdHMvdGFza3dvcmtzLXVpL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iLCIjc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/services/http-helper.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/http-helper.service.ts ***!
    \*************************************************/

  /*! exports provided: HttpHelperService */

  /***/
  function srcAppServicesHttpHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHelperService", function () {
      return HttpHelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpHelperService =
    /*#__PURE__*/
    function () {
      function HttpHelperService() {
        _classCallCheck(this, HttpHelperService);

        this.baseURL = 'http://localhost:8000/api';
        this.token = sessionStorage.getItem('api_token');
      }

      _createClass(HttpHelperService, [{
        key: "url",
        value: function url(_url) {
          return this.baseURL + _url + '?api_token=' + this.token;
        }
      }]);

      return HttpHelperService;
    }();

    HttpHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpHelperService);
    /***/
  },

  /***/
  "./src/app/services/projects.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/projects.service.ts ***!
    \**********************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-helper.service */
    "./src/app/services/http-helper.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProjectsService =
    /*#__PURE__*/
    function (_http_helper_service_) {
      _inherits(ProjectsService, _http_helper_service_);

      function ProjectsService(http) {
        var _this4;

        _classCallCheck(this, ProjectsService);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ProjectsService).call(this));
        _this4.http = http;
        return _this4;
      }

      _createClass(ProjectsService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url('/project/all'));
        }
      }]);

      return ProjectsService;
    }(_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]);

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectsService);
    /***/
  },

  /***/
  "./src/app/services/reports.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/reports.service.ts ***!
    \*********************************************/

  /*! exports provided: ReportsService */

  /***/
  function srcAppServicesReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-helper.service */
    "./src/app/services/http-helper.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ReportsService =
    /*#__PURE__*/
    function (_http_helper_service_2) {
      _inherits(ReportsService, _http_helper_service_2);

      function ReportsService(http) {
        var _this5;

        _classCallCheck(this, ReportsService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ReportsService).call(this));
        _this5.http = http;
        return _this5;
      }

      _createClass(ReportsService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url('/report/all'));
        }
      }, {
        key: "create",
        value: function create(report) {
          return this.http.post(this.url('/report/new'), report);
        }
      }, {
        key: "getById",
        value: function getById(reportId) {
          return this.http.get(this.url('/report/' + reportId));
        }
      }, {
        key: "update",
        value: function update(reportId, report) {
          return this.http.post(this.url('/report/' + reportId), report);
        }
      }]);

      return ReportsService;
    }(_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]);

    ReportsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportsService);
    /***/
  },

  /***/
  "./src/app/services/tasks.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/tasks.service.ts ***!
    \*******************************************/

  /*! exports provided: TasksService */

  /***/
  function srcAppServicesTasksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksService", function () {
      return TasksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-helper.service */
    "./src/app/services/http-helper.service.ts");

    var TasksService =
    /*#__PURE__*/
    function (_http_helper_service_3) {
      _inherits(TasksService, _http_helper_service_3);

      function TasksService(http) {
        var _this6;

        _classCallCheck(this, TasksService);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(TasksService).call(this));
        _this6.http = http;
        return _this6;
      }

      _createClass(TasksService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url('/task/all'));
        }
      }, {
        key: "create",
        value: function create(task) {
          return this.http.post(this.url('/task/new'), task);
        }
      }, {
        key: "getById",
        value: function getById(taskId) {
          return this.http.get(this.url('/task/' + taskId));
        }
      }]);

      return TasksService;
    }(_http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]);

    TasksService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TasksService);
    /***/
  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-helper.service */
    "./src/app/services/http-helper.service.ts");

    var UsersService =
    /*#__PURE__*/
    function (_http_helper_service_4) {
      _inherits(UsersService, _http_helper_service_4);

      function UsersService(http) {
        var _this7;

        _classCallCheck(this, UsersService);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(UsersService).call(this));
        _this7.http = http;
        return _this7;
      }

      _createClass(UsersService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url('/user/all'));
        }
      }, {
        key: "create",
        value: function create(user) {
          console.log("creating user");
          return this.http.post(this.url('/user/new'), user);
        }
      }]);

      return UsersService;
    }(_http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"]);

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
    /***/
  },

  /***/
  "./src/app/tasks/new-task/new-task.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/tasks/new-task/new-task.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasksNewTaskNewTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasks/new-task/new-task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/tasks/new-task/new-task.component.ts ***!
    \******************************************************/

  /*! exports provided: NewTaskComponent */

  /***/
  function srcAppTasksNewTaskNewTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function () {
      return NewTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/projects.service */
    "./src/app/services/projects.service.ts");
    /* harmony import */


    var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/reports.service */
    "./src/app/services/reports.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_interfaces_Task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/interfaces/Task */
    "./src/app/interfaces/Task.ts");
    /* harmony import */


    var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/tasks.service */
    "./src/app/services/tasks.service.ts");

    var NewTaskComponent =
    /*#__PURE__*/
    function () {
      function NewTaskComponent(formBuilder, route, usersService, projectsService, reportsService, tasksService) {
        _classCallCheck(this, NewTaskComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.usersService = usersService;
        this.projectsService = projectsService;
        this.reportsService = reportsService;
        this.tasksService = tasksService;
        this.taskSaved = false;
        this.users = [];
      }

      _createClass(NewTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.taskForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            project_id: ['', null],
            report_id: ['', null],
            user_id: ['', null],
            status_id: ['', null],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.usersService.getAll().subscribe(function (users) {
            _this8.users = users;
          });
          this.projectsService.getAll().subscribe(function (projects) {
            _this8.projects = projects;
          });
          this.reportsService.getAll().subscribe(function (reports) {
            _this8.reports = reports;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          if (this.taskForm.valid) {
            var controls = this.taskForm.controls;
            var task = new src_app_interfaces_Task__WEBPACK_IMPORTED_MODULE_7__["Task"](null, controls['title'].value, controls['status_id'].value, controls['user_id'].value, controls['report_id'].value, controls['project_id'].value, controls['description'].value);
            this.task = task;

            if (this.taskId == null) {
              this.tasksService.create(this.task).subscribe(function (task) {
                _this9.task = task;
                _this9.taskSaved = true;
              });
            } else {
              /* here is saving exist task */
            }
          }
        }
      }]);

      return NewTaskComponent;
    }();

    NewTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]]
        }]
      }, {
        type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]]
        }]
      }, {
        type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]]
        }]
      }, {
        type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"]]
        }]
      }];
    };

    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/new-task/new-task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-task.component.scss */
      "./src/app/tasks/new-task/new-task.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"]))], NewTaskComponent);
    /***/
  },

  /***/
  "./src/app/tasks/task/task.component.scss":
  /*!************************************************!*\
    !*** ./src/app/tasks/task/task.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasksTaskTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tasks/task/task.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tasks/task/task.component.ts ***!
    \**********************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppTasksTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tasks.service */
    "./src/app/services/tasks.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TaskComponent =
    /*#__PURE__*/
    function () {
      function TaskComponent(route, tasksService) {
        _classCallCheck(this, TaskComponent);

        this.route = route;
        this.tasksService = tasksService;
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.subscribe(function (params) {
            _this10.taskId = Number(params.get('id'));

            _this10.getTask(_this10.taskId);
          });
        }
      }, {
        key: "getTask",
        value: function getTask(taskId) {
          var _this11 = this;

          return this.tasksService.getById(taskId).subscribe(function (task) {
            _this11.task = task;
            console.log(_this11.task);
          });
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]]
        }]
      }];
    };

    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/task/task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task.component.scss */
      "./src/app/tasks/task/task.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]))], TaskComponent);
    /***/
  },

  /***/
  "./src/app/tasks/tasks.component.scss":
  /*!********************************************!*\
    !*** ./src/app/tasks/tasks.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTasksTasksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tasks/tasks.component.ts":
  /*!******************************************!*\
    !*** ./src/app/tasks/tasks.component.ts ***!
    \******************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/tasks.service */
    "./src/app/services/tasks.service.ts");

    var TasksComponent =
    /*#__PURE__*/
    function () {
      function TasksComponent(tasksService) {
        _classCallCheck(this, TasksComponent);

        this.tasksService = tasksService;
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.tasksService.getAll().subscribe(function (tasks) {
            _this12.tasks = tasks;
            console.log(_this12.tasks);
          });
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent.ctorParameters = function () {
      return [{
        type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]]
        }]
      }];
    };

    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasks.component.scss */
      "./src/app/tasks/tasks.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]))], TasksComponent);
    /***/
  },

  /***/
  "./src/app/users/user-form/user-form.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/users/user-form/user-form.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUserFormUserFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/user-form/user-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/users/user-form/user-form.component.ts ***!
    \********************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUsersUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/interfaces/User */
    "./src/app/interfaces/User.ts");

    var UserFormComponent =
    /*#__PURE__*/
    function () {
      function UserFormComponent(formBuilder, usersService) {
        _classCallCheck(this, UserFormComponent);

        this.formBuilder = formBuilder;
        this.usersService = usersService;
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
        /**
         *
         * @param form
         *
         * Submition form event
         */

      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var user = new src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_4__["User"](null, this.userForm.controls['name'].value, this.userForm.controls['email'].value, this.userForm.controls['password'].value);
          this.createUser(user);
        }
        /**
         *
         * @param user
         *
         * Creating a new user
         */

      }, {
        key: "createUser",
        value: function createUser(user) {
          this.usersService.create(user).subscribe();
          console.log(user);
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]]
        }]
      }];
    };

    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-form/user-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-form.component.scss */
      "./src/app/users/user-form/user-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]))], UserFormComponent);
    /***/
  },

  /***/
  "./src/app/users/users-list/users-list.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/users/users-list/users-list.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersListUsersListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/users/users-list/users-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/users/users-list/users-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppUsersUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/users.service */
    "./src/app/services/users.service.ts");

    var UsersListComponent =
    /*#__PURE__*/
    function () {
      function UsersListComponent(usersService) {
        _classCallCheck(this, UsersListComponent);

        this.usersService = usersService;
        this.users = [];
      }

      _createClass(UsersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.usersService.getAll().subscribe(function (users) {
            _this13.users = users;
          });
        }
      }]);

      return UsersListComponent;
    }();

    UsersListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]]
        }]
      }];
    };

    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-list.component.scss */
      "./src/app/users/users-list/users-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]))], UsersListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:80000/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sergey/Projects/taskworks-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map