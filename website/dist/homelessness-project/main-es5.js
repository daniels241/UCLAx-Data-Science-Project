function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _graph_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./graph/graph.component */
    "./src/app/graph/graph.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'UCLA Hackathon: On Homelessness';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 0,
      consts: [["role", "banner", 1, "toolbar"], [1, "center"], ["role", "main", 1, "content"], [2, "text-align", "center"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A UCLA Extension Social Justice Hackathon Entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created by Alison Wood, James Doran, Daniel Sedano, and Evan Davis-Palley");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }
      },
      directives: [_graph_graph_component__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  background-blend-mode: darken;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 80vw;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  margin: auto;\n  width: 100%;\n  bottom: 0px;\n  margin-top: 8px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  margin-left: 4%;\n}\n.column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n  width: 4.6666666667%;\n}\n.two.columns[_ngcontent-%COMP%] {\n  width: 13.3333333333%;\n}\n.three.columns[_ngcontent-%COMP%] {\n  width: 22%;\n}\n.four.columns[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.five.columns[_ngcontent-%COMP%] {\n  width: 39.3333333333%;\n}\n.six.columns[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.seven.columns[_ngcontent-%COMP%] {\n  width: 56.6666666667%;\n}\n.eight.columns[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.nine.columns[_ngcontent-%COMP%] {\n  width: 74%;\n}\n.ten.columns[_ngcontent-%COMP%] {\n  width: 82.6666666667%;\n}\n.eleven.columns[_ngcontent-%COMP%] {\n  width: 91.3333333333%;\n}\n.twelve.columns[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n}\n.one-third.column[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.two-thirds.column[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.one-half.column[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n  margin-left: 8.6666666667%;\n}\n.offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n  margin-left: 17.3333333333%;\n}\n.offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n  margin-left: 26%;\n}\n.offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n  margin-left: 43.3333333333%;\n}\n.offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n.offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n  margin-left: 60.6666666667%;\n}\n.offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n  margin-left: 78%;\n}\n.offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n  margin-left: 86.6666666667%;\n}\n.offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n  margin-left: 95.3333333333%;\n}\n.offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcQ29kaW5nXFxVQ0xBeC1EYXRhLVNjaWVuY2UtUHJvamVjdFxcd2Vic2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLHVGQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURDRjtBQ0VBOzs7Ozs7RUFNRSxhQUFBO0FEQ0Y7QUNFQTtFQUNFLFNBQUE7QURDRjtBQ0VBO0VBQ0UsT0FBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsVUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxZQUFB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Q25FQTs7RUFDa0MsMkJBQUE7QUR1RWxDO0FDdEVBOztFQUNrQyxnQkFBQTtBRDBFbEM7QUN6RUE7O0VBQ2tDLDJCQUFBO0FENkVsQztBQzVFQTs7RUFDa0MsMkJBQUE7QURnRmxDO0FDOUVBOztFQUNrQywyQkFBQTtBRGtGbEM7QUNqRkE7O0VBQ2tDLDJCQUFBO0FEcUZsQztBQ25GQTs7RUFDa0MsZ0JBQUE7QUR1RmxDO0FDcEZBLHNCQUFBO0FBQ0E7RUFFRTs7SUFFRSxXQUFBO0VEc0ZGOztFQ25GQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VEc0ZGOztFQ25GQTtJQUNFLGlCQUFBO0VEc0ZGOztFQ25GQTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFRHNGRjtBQUNGO0FDbkZBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RURxRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAtOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM4ODg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjNjk2NzY3O1xufVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbnN2ZyNyb2NrZXQge1xuICB3aWR0aDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAtMjRweDtcbn1cblxuc3ZnI3JvY2tldC1zbW9rZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE4MHB4O1xuICB6LWluZGV4OiAtMTA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAouKAouKAolwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LWluZGVudDogNHB4O1xufVxuXG4udGVybWluYWwgcHJlIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNvbHVtbixcbi5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29sdW1uOmZpcnN0LWNoaWxkLFxuLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm9uZS5jb2x1bW4sXG4ub25lLmNvbHVtbnMge1xuICB3aWR0aDogNC42NjY2NjY2NjY3JTtcbn1cblxuLnR3by5jb2x1bW5zIHtcbiAgd2lkdGg6IDEzLjMzMzMzMzMzMzMlO1xufVxuXG4udGhyZWUuY29sdW1ucyB7XG4gIHdpZHRoOiAyMiU7XG59XG5cbi5mb3VyLmNvbHVtbnMge1xuICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG59XG5cbi5maXZlLmNvbHVtbnMge1xuICB3aWR0aDogMzkuMzMzMzMzMzMzMyU7XG59XG5cbi5zaXguY29sdW1ucyB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5zZXZlbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDU2LjY2NjY2NjY2NjclO1xufVxuXG4uZWlnaHQuY29sdW1ucyB7XG4gIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbn1cblxuLm5pbmUuY29sdW1ucyB7XG4gIHdpZHRoOiA3NCU7XG59XG5cbi50ZW4uY29sdW1ucyB7XG4gIHdpZHRoOiA4Mi42NjY2NjY2NjY3JTtcbn1cblxuLmVsZXZlbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDkxLjMzMzMzMzMzMzMlO1xufVxuXG4udHdlbHZlLmNvbHVtbnMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5vbmUtdGhpcmQuY29sdW1uIHtcbiAgd2lkdGg6IDMwLjY2NjY2NjY2NjclO1xufVxuXG4udHdvLXRoaXJkcy5jb2x1bW4ge1xuICB3aWR0aDogNjUuMzMzMzMzMzMzMyU7XG59XG5cbi5vbmUtaGFsZi5jb2x1bW4ge1xuICB3aWR0aDogNDglO1xufVxuXG4vKiBPZmZzZXRzICovXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktdHdvLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxuLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDI2JTtcbn1cblxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcbi5vZmZzZXQtYnktZm91ci5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxuLm9mZnNldC1ieS1maXZlLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktc2l4LmNvbHVtbixcbi5vZmZzZXQtYnktc2l4LmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNTIlO1xufVxuXG4ub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktbmluZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA3OCU7XG59XG5cbi5vZmZzZXQtYnktdGVuLmNvbHVtbixcbi5vZmZzZXQtYnktdGVuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNTIlO1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSxcbi50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59IiwiXHJcbjpob3N0IHtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1heC13aWR0aDogODB2dztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiAjODg4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtc21hbGwge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoYmxhY2ssIDAuMzUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLTI0cHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDE4MHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzE5NzZkMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG4udGVybWluYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxufVxyXG5cclxuLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiAjYzJjM2M0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdGV4dC1pbmRlbnQ6IDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHByZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7IH1cclxuLmNvbHVtbixcclxuLmNvbHVtbnMge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTsgfVxyXG4uY29sdW1uOmZpcnN0LWNoaWxkLFxyXG4uY29sdW1uczpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cclxuXHJcbi5vbmUuY29sdW1uLFxyXG4ub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XHJcbi50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cclxuLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxyXG4uZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbi5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cclxuLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxyXG4uc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XHJcbi5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxyXG4udGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XHJcbi5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cclxuLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxyXG5cclxuLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxyXG4udHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcblxyXG4ub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxyXG5cclxuLyogT2Zmc2V0cyAqL1xyXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS10d28uY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XHJcbi5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XHJcbi5vZmZzZXQtYnktZm91ci5jb2x1bW4sXHJcbi5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1maXZlLmNvbHVtbixcclxuLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxyXG4ub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cclxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcclxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxyXG4ub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XHJcblxyXG4ub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcclxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxyXG5cclxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graph/graph.component */
    "./src/app/graph/graph.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/graph/graph.component.ts":
  /*!******************************************!*\
    !*** ./src/app/graph/graph.component.ts ***!
    \******************************************/

  /*! exports provided: GraphComponent */

  /***/
  function srcAppGraphGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphComponent", function () {
      return GraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./image */
    "./src/app/graph/image.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GraphComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var graphChosen_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", graphChosen_r1)("selected", graphChosen_r1.title == ctx_r0.graph.title ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", graphChosen_r1.title, " ");
      }
    }

    var GraphComponent =
    /*#__PURE__*/
    function () {
      function GraphComponent() {
        _classCallCheck(this, GraphComponent);
      }

      _createClass(GraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.graph = _image__WEBPACK_IMPORTED_MODULE_1__["graphs"][0];
          this.graphList = _image__WEBPACK_IMPORTED_MODULE_1__["graphs"];
        }
      }, {
        key: "newGraph",
        value: function newGraph(graph) {}
      }]);

      return GraphComponent;
    }();

    GraphComponent.ɵfac = function GraphComponent_Factory(t) {
      return new (t || GraphComponent)();
    };

    GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphComponent,
      selectors: [["app-graph"]],
      inputs: {
        param1: "param1",
        param2: "param2"
      },
      decls: 20,
      vars: 8,
      consts: [[1, ""], [1, "row"], [1, "twelve", "columns", "u-centered"], [1, "twelve", "columns"], [1, "u-centered", 3, "src", "alt"], [1, "eight", "columns", "offset-by-two"], [3, "ngModel", "ngModelChange"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], [1, "data"], [3, "ngValue", "selected"]],
      template: function GraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Choose a Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.graph = $event;
          })("ngModelChange", function GraphComponent_Template_select_ngModelChange_14_listener() {
            return ctx.newGraph(ctx.graph);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GraphComponent_option_15_Template, 2, 3, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.graph.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.graph.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.graph.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.graph);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.graphList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.graph.desc);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n\n@media (min-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 85%;\n    padding: 0;\n  }\n}\n\n@media (min-width: 550px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n\n  .column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n\n  .one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n    width: 4.6666666667%;\n  }\n\n  .two.columns[_ngcontent-%COMP%] {\n    width: 13.3333333333%;\n  }\n\n  .three.columns[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n\n  .four.columns[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .five.columns[_ngcontent-%COMP%] {\n    width: 39.3333333333%;\n  }\n\n  .six.columns[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  .seven.columns[_ngcontent-%COMP%] {\n    width: 56.6666666667%;\n  }\n\n  .eight.columns[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .nine.columns[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .ten.columns[_ngcontent-%COMP%] {\n    width: 82.6666666667%;\n  }\n\n  .eleven.columns[_ngcontent-%COMP%] {\n    width: 91.3333333333%;\n  }\n\n  .twelve.columns[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .one-third.column[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .two-thirds.column[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .one-half.column[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  \n  .offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n    margin-left: 8.6666666667%;\n  }\n\n  .offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n    margin-left: 17.3333333333%;\n  }\n\n  .offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n    margin-left: 26%;\n  }\n\n  .offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n    margin-left: 43.3333333333%;\n  }\n\n  .offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n\n  .offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n    margin-left: 60.6666666667%;\n  }\n\n  .offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n    margin-left: 78%;\n  }\n\n  .offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n    margin-left: 86.6666666667%;\n  }\n\n  .offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n    margin-left: 95.3333333333%;\n  }\n\n  .offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n}\n\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  \n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n\n@media (min-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 4.2rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 3.6rem;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #1EAEDB;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0FA0CE;\n}\n\n.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover, input[type=button][_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, input[type=submit][_ngcontent-%COMP%]:focus, input[type=reset][_ngcontent-%COMP%]:focus, input[type=button][_ngcontent-%COMP%]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.button-primary[_ngcontent-%COMP%], button.button-primary[_ngcontent-%COMP%], input[type=submit].button-primary[_ngcontent-%COMP%], input[type=reset].button-primary[_ngcontent-%COMP%], input[type=button].button-primary[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.button-primary[_ngcontent-%COMP%]:hover, button.button-primary[_ngcontent-%COMP%]:hover, input[type=submit].button-primary[_ngcontent-%COMP%]:hover, input[type=reset].button-primary[_ngcontent-%COMP%]:hover, input[type=button].button-primary[_ngcontent-%COMP%]:hover, .button.button-primary[_ngcontent-%COMP%]:focus, button.button-primary[_ngcontent-%COMP%]:focus, input[type=submit].button-primary[_ngcontent-%COMP%]:focus, input[type=reset].button-primary[_ngcontent-%COMP%]:focus, input[type=button].button-primary[_ngcontent-%COMP%]:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 100%;\n  padding: 6px 10px;\n  \n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\ninput[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\nlabel[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\nfieldset[_ngcontent-%COMP%] {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  display: inline;\n}\nlabel[_ngcontent-%COMP%]    > .label-body[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-weight: normal;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: circle inside;\n}\nol[_ngcontent-%COMP%] {\n  list-style: decimal inside;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 0;\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\ncode[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\ndata[_ngcontent-%COMP%] {\n  white-space: pre !important;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1;\n}\nth[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\nth[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\nbutton[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\npre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], table[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  white-space: pre;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n.u-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n.u-max-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.u-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.u-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.u-centered[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1;\n}\n\n\n.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after, .u-cf[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoL0Q6XFxDb2RpbmdcXFVDTEF4LURhdGEtU2NpZW5jZS1Qcm9qZWN0XFx3ZWJzaXRlL3NyY1xcYXBwXFxncmFwaFxcZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFrQkE7b0RBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREZKO0FDR0U7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBREFKO0FDRUUsa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RURDSjtBQUNGO0FDQ0Usa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtFRENKOztFQ0FFOztJQUVFLGVBQUE7RURHSjs7RUNGRTs7SUFFRSxjQUFBO0VES0o7O0VDSEU7O0lBQ2tDLG9CQUFBO0VET3BDOztFQ05FO0lBQWtDLHFCQUFBO0VEVXBDOztFQ1RFO0lBQWtDLFVBQUE7RURhcEM7O0VDWkU7SUFBa0MscUJBQUE7RURnQnBDOztFQ2ZFO0lBQWtDLHFCQUFBO0VEbUJwQzs7RUNsQkU7SUFBa0MsVUFBQTtFRHNCcEM7O0VDckJFO0lBQWtDLHFCQUFBO0VEeUJwQzs7RUN4QkU7SUFBa0MscUJBQUE7RUQ0QnBDOztFQzNCRTtJQUFrQyxVQUFBO0VEK0JwQzs7RUM5QkU7SUFBa0MscUJBQUE7RURrQ3BDOztFQ2pDRTtJQUFrQyxxQkFBQTtFRHFDcEM7O0VDcENFO0lBQWtDLFdBQUE7SUFBYSxjQUFBO0VEeUNqRDs7RUN2Q0U7SUFBa0MscUJBQUE7RUQyQ3BDOztFQzFDRTtJQUFrQyxxQkFBQTtFRDhDcEM7O0VDNUNFO0lBQWtDLFVBQUE7RURnRHBDOztFQzlDRSxZQUFBO0VB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QUFDQTs7O0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEMkxKO0FDeExFO29EQUFBO0FBRUE7Ozs7O0NBQUE7QUFRQSx1QkFBQTtBQUdBLDhEQUFBO0FBR0EsdUJBQUE7QUFHQSx3QkFBQTtBQUdBLDJCQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuKiBTa2VsZXRvbiBWMi4wLjRcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiogMTIvMjkvMjAxNFxuKi9cbi8qIFRhYmxlIG9mIGNvbnRlbnRzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcbi0gR3JpZFxuLSBCYXNlIFN0eWxlc1xuLSBUeXBvZ3JhcGh5XG4tIExpbmtzXG4tIEJ1dHRvbnNcbi0gRm9ybXNcbi0gTGlzdHNcbi0gQ29kZVxuLSBUYWJsZXNcbi0gU3BhY2luZ1xuLSBVdGlsaXRpZXNcbi0gQ2xlYXJpbmdcbi0gTWVkaWEgUXVlcmllc1xuKi9cbi8qIEdyaWRcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb2x1bW4sXG4uY29sdW1ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jb2x1bW4sXG4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG5cbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcbi5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5vbmUuY29sdW1uLFxuLm9uZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC50d28uY29sdW1ucyB7XG4gICAgd2lkdGg6IDEzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnRocmVlLmNvbHVtbnMge1xuICAgIHdpZHRoOiAyMiU7XG4gIH1cblxuICAuZm91ci5jb2x1bW5zIHtcbiAgICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuZml2ZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMzkuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuc2l4LmNvbHVtbnMge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuc2V2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDU2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmVpZ2h0LmNvbHVtbnMge1xuICAgIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5uaW5lLmNvbHVtbnMge1xuICAgIHdpZHRoOiA3NCU7XG4gIH1cblxuICAudGVuLmNvbHVtbnMge1xuICAgIHdpZHRoOiA4Mi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5lbGV2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDkxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnR3ZWx2ZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5vbmUtdGhpcmQuY29sdW1uIHtcbiAgICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAudHdvLXRoaXJkcy5jb2x1bW4ge1xuICAgIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vbmUtaGFsZi5jb2x1bW4ge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAvKiBPZmZzZXRzICovXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxuLm9mZnNldC1ieS10d28uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxuLm9mZnNldC1ieS1zaXguY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUyJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcbi5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcbi5vZmZzZXQtYnktbmluZS5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNzglO1xuICB9XG5cbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxuLm9mZnNldC1ieS10ZW4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxuLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUyJTtcbiAgfVxufVxuLyogQmFzZSBTdHlsZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLyogTk9URVxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNWVtO1xuICAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi8qIFR5cG9ncmFwaHlcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy42cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wOHJlbTtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLyogTGlua3NcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuYSB7XG4gIGNvbG9yOiAjMUVBRURCO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwRkEwQ0U7XG59XG5cbi8qIEJ1dHRvbnNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmJ1dHRvbixcbmJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idXR0b246aG92ZXIsXG5idXR0b246aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5idXR0b246Zm9jdXMsXG5idXR0b246Zm9jdXMsXG5pbnB1dFt0eXBlPXN1Ym1pdF06Zm9jdXMsXG5pbnB1dFt0eXBlPXJlc2V0XTpmb2N1cyxcbmlucHV0W3R5cGU9YnV0dG9uXTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItY29sb3I6ICM4ODg7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5idXR0b24uYnV0dG9uLXByaW1hcnksXG5idXR0b24uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeSB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xuICBib3JkZXItY29sb3I6ICMzM0MzRjA7XG59XG5cbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeTpob3Zlcixcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xuICBib3JkZXItY29sb3I6ICMxRUFFREI7XG59XG5cbi8qIEZvcm1zXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPW51bWJlcl0sXG5pbnB1dFt0eXBlPXNlYXJjaF0sXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLFxuaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzLFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xuICBvdXRsaW5lOiAwO1xufVxuXG5sYWJlbCxcbmxlZ2VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmxhYmVsID4gLmxhYmVsLWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIExpc3RzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnVsIHtcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTtcbn1cblxub2wsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG51bCB1bCxcbnVsIG9sLFxub2wgb2wsXG5vbCB1bCB7XG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xufVxuXG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qIENvZGVcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuY29kZSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIG1hcmdpbjogMCAwLjJyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnByZSA+IGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbmRhdGEge1xuICB3aGl0ZS1zcGFjZTogcHJlICFpbXBvcnRhbnQ7XG59XG5cbi8qIFRhYmxlc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG50aCxcbnRkIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTtcbn1cblxudGg6Zmlyc3QtY2hpbGQsXG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxudGg6bGFzdC1jaGlsZCxcbnRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4vKiBTcGFjaW5nXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmJ1dHRvbixcbi5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuZmllbGRzZXQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbnByZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmZpZ3VyZSxcbnRhYmxlLFxucCxcbnVsLFxub2wsXG5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi8qIFV0aWxpdGllc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4udS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi51LW1heC1mdWxsLXdpZHRoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udS1wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udS1wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnUtY2VudGVyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDkwJTtcbn1cblxuLyogTWlzY1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5ociB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTtcbn1cblxuLyogQ2xlYXJpbmdcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xuLmNvbnRhaW5lcjphZnRlcixcbi5yb3c6YWZ0ZXIsXG4udS1jZiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogTWVkaWEgUXVlcmllc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKlxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XG50aGVyZS5cbiovXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovIiwiLypcclxuKiBTa2VsZXRvbiBWMi4wLjRcclxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXHJcbiogd3d3LmdldHNrZWxldG9uLmNvbVxyXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4qIDEyLzI5LzIwMTRcclxuKi9cclxuXHJcblxyXG4vKiBUYWJsZSBvZiBjb250ZW50c1xyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuLSBHcmlkXHJcbi0gQmFzZSBTdHlsZXNcclxuLSBUeXBvZ3JhcGh5XHJcbi0gTGlua3NcclxuLSBCdXR0b25zXHJcbi0gRm9ybXNcclxuLSBMaXN0c1xyXG4tIENvZGVcclxuLSBUYWJsZXNcclxuLSBTcGFjaW5nXHJcbi0gVXRpbGl0aWVzXHJcbi0gQ2xlYXJpbmdcclxuLSBNZWRpYSBRdWVyaWVzXHJcbiovXHJcblxyXG5cclxuLyogR3JpZFxyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAuY29sdW1uLFxyXG4gIC5jb2x1bW5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgXHJcbiAgLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBwYWRkaW5nOiAwOyB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDgwJTsgfVxyXG4gICAgLmNvbHVtbixcclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQlOyB9XHJcbiAgICAuY29sdW1uOmZpcnN0LWNoaWxkLFxyXG4gICAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxyXG4gIFxyXG4gICAgLm9uZS5jb2x1bW4sXHJcbiAgICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XHJcbiAgICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XHJcbiAgICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XHJcbiAgICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XHJcbiAgICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XHJcbiAgICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XHJcbiAgICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcbiAgXHJcbiAgICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcbiAgXHJcbiAgICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxyXG4gIFxyXG4gICAgLyogT2Zmc2V0cyAqL1xyXG4gICAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS10d28uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxyXG4gICAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XHJcbiAgICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cclxuICAgIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxyXG4gICAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxyXG4gIFxyXG4gICAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuICBcclxuICAgIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQmFzZSBTdHlsZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAvKiBOT1RFXHJcbiAgaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxyXG4gIGFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IH1cclxuICBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMyMjI7IH1cclxuICBcclxuICBcclxuICAvKiBUeXBvZ3JhcGh5XHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cclxuICBoMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XHJcbiAgaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxyXG4gIGg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxyXG4gIGg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxyXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cclxuICAgIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cclxuICAgIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cclxuICAgIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cclxuICAgIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cclxuICAgIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTGlua3NcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBhIHtcclxuICAgIGNvbG9yOiAjMUVBRURCOyB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBGQTBDRTsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEJ1dHRvbnNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAuYnV0dG9uLFxyXG4gIGJ1dHRvbixcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLmJ1dHRvbjpob3ZlcixcclxuICBidXR0b246aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuICAuYnV0dG9uOmZvY3VzLFxyXG4gIGJ1dHRvbjpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gICAgb3V0bGluZTogMDsgfVxyXG4gIC5idXR0b24uYnV0dG9uLXByaW1hcnksXHJcbiAgYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnksXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyB9XHJcbiAgLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBidXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICAuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEZvcm1zXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gIHRleHRhcmVhIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgfVxyXG4gIHRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDsgfVxyXG4gIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuICB0ZXh0YXJlYTpmb2N1cyxcclxuICBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcclxuICAgIG91dGxpbmU6IDA7IH1cclxuICBsYWJlbCxcclxuICBsZWdlbmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwOyB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cclxuICBsYWJlbCA+IC5sYWJlbC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cclxuICBcclxuICBcclxuICAvKiBMaXN0c1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cclxuICBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxyXG4gIG9sLCB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgdWwgdWwsXHJcbiAgdWwgb2wsXHJcbiAgb2wgb2wsXHJcbiAgb2wgdWwge1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogOTAlOyB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIENvZGVcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBjb2RlIHtcclxuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xyXG4gICAgbWFyZ2luOiAwIC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuICBwcmUgPiBjb2RlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlOyB9XHJcbiAgZGF0YSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhYmxlc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxyXG4gIHRoOmZpcnN0LWNoaWxkLFxyXG4gIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgfVxyXG4gIHRoOmxhc3QtY2hpbGQsXHJcbiAgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogU3BhY2luZ1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGJ1dHRvbixcclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3QsXHJcbiAgZmllbGRzZXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XHJcbiAgcHJlLFxyXG4gIGJsb2NrcXVvdGUsXHJcbiAgZGwsXHJcbiAgZmlndXJlLFxyXG4gIHRhYmxlLFxyXG4gIHAsXHJcbiAgdWwsXHJcbiAgb2wsXHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IFxyXG4gICAgd2hpdGUtc3BhY2U6IHByZTt9XHJcbiAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyAgfVxyXG4gIFxyXG4gIC8qIFV0aWxpdGllc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIC51LWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnUtbWF4LWZ1bGwtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC51LXB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XHJcbiAgLnUtcHVsbC1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0OyB9XHJcbiAgLnUtY2VudGVyZWQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTWlzY1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIENsZWFyaW5nXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgXHJcbiAgLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xyXG4gIC5jb250YWluZXI6YWZ0ZXIsXHJcbiAgLnJvdzphZnRlcixcclxuICAudS1jZiB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIE1lZGlhIFF1ZXJpZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAvKlxyXG4gIE5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xyXG4gIG5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXHJcbiAgb24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XHJcbiAgdGhlcmUuXHJcbiAgKi9cclxuICBcclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-graph',
          templateUrl: './graph.component.html',
          styleUrls: ['./graph.component.scss']
        }]
      }], function () {
        return [];
      }, {
        param1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        param2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/graph/image.ts":
  /*!********************************!*\
    !*** ./src/app/graph/image.ts ***!
    \********************************/

  /*! exports provided: graphs, tables */

  /***/
  function srcAppGraphImageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "graphs", function () {
      return graphs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tables", function () {
      return tables;
    });

    var graphs = [{
      source: "../../assets/Year_x_doe_total_CoC_category_2.png",
      title: "Total Homeless per Year",
      desc: "\n        - Bullet point 1\n        - Bullet point 2\n        - Bullet point 3\n        "
    }, {
      source: "../../assets/SPM5_x_year.png",
      title: "First Time Homeless vs Year",
      desc: "Bullet points go here!"
    }];
    var tables = [{
      source: "",
      title: "First Time Homeless vs Year",
      desc: "Bullet points go here!"
    }, {
      source: "",
      title: "First Time Homeless vs Year",
      desc: "Bullet points go here!"
    }];
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\Coding\UCLAx-Data-Science-Project\website\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map