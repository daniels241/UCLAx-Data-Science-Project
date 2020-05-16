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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  background-blend-mode: darken;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 2.5%;\n  padding: 0 16px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin: auto;\n  height: 30px;\n  width: 100%;\n  bottom: 0px;\n  margin-top: 8px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  margin-left: 4%;\n}\n.column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n  width: 4.6666666667%;\n}\n.two.columns[_ngcontent-%COMP%] {\n  width: 13.3333333333%;\n}\n.three.columns[_ngcontent-%COMP%] {\n  width: 22%;\n}\n.four.columns[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.five.columns[_ngcontent-%COMP%] {\n  width: 39.3333333333%;\n}\n.six.columns[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.seven.columns[_ngcontent-%COMP%] {\n  width: 56.6666666667%;\n}\n.eight.columns[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.nine.columns[_ngcontent-%COMP%] {\n  width: 74%;\n}\n.ten.columns[_ngcontent-%COMP%] {\n  width: 82.6666666667%;\n}\n.eleven.columns[_ngcontent-%COMP%] {\n  width: 91.3333333333%;\n}\n.twelve.columns[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n}\n.one-third.column[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.two-thirds.column[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.one-half.column[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n  margin-left: 8.6666666667%;\n}\n.offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n  margin-left: 17.3333333333%;\n}\n.offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n  margin-left: 26%;\n}\n.offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n  margin-left: 43.3333333333%;\n}\n.offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n.offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n  margin-left: 60.6666666667%;\n}\n.offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n  margin-left: 78%;\n}\n.offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n  margin-left: 86.6666666667%;\n}\n.offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n  margin-left: 95.3333333333%;\n}\n.offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n\n  .content[_ngcontent-%COMP%] {\n    max-width: 90vw;\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcQ29kaW5nXFxVQ0xBeC1EYXRhLVNjaWVuY2UtUHJvamVjdFxcd2Vic2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLHVGQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURDRjtBQ0VBOzs7Ozs7RUFNRSxhQUFBO0FEQ0Y7QUNFQTtFQUNFLFNBQUE7QURDRjtBQ0VBO0VBQ0UsT0FBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsVUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7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QywyQkFBQTtBRHVFbEM7QUN0RUE7O0VBQ2tDLGdCQUFBO0FEMEVsQztBQ3pFQTs7RUFDa0MsMkJBQUE7QUQ2RWxDO0FDNUVBOztFQUNrQywyQkFBQTtBRGdGbEM7QUM5RUE7O0VBQ2tDLDJCQUFBO0FEa0ZsQztBQ2pGQTs7RUFDa0MsMkJBQUE7QURxRmxDO0FDbkZBOztFQUNrQyxnQkFBQTtBRHVGbEM7QUNwRkEsc0JBQUE7QUFDQTtFQUVFOztJQUVFLFdBQUE7RURzRkY7O0VDbkZBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RURzRkY7O0VDbkZBO0lBQ0UsaUJBQUE7RURzRkY7O0VDbkZBO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VEc0ZGOztFQ25GQTtJQUNFLGVBQUE7RURzRkY7QUFDRjtBQ25GQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEcUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogLThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMi41JTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM4ODg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjNjk2NzY3O1xufVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbnN2ZyNyb2NrZXQge1xuICB3aWR0aDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAtMjRweDtcbn1cblxuc3ZnI3JvY2tldC1zbW9rZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE4MHB4O1xuICB6LWluZGV4OiAtMTA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAouKAouKAolwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LWluZGVudDogNHB4O1xufVxuXG4udGVybWluYWwgcHJlIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMsICNlZmYzZjYgOTAlKTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0xNjBweDtcbiAgbGVmdDogLTIzMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xufVxuXG4uY29sdW1uLFxuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNCU7XG59XG5cbi5jb2x1bW46Zmlyc3QtY2hpbGQsXG4uY29sdW1uczpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ub25lLmNvbHVtbixcbi5vbmUuY29sdW1ucyB7XG4gIHdpZHRoOiA0LjY2NjY2NjY2NjclO1xufVxuXG4udHdvLmNvbHVtbnMge1xuICB3aWR0aDogMTMuMzMzMzMzMzMzMyU7XG59XG5cbi50aHJlZS5jb2x1bW5zIHtcbiAgd2lkdGg6IDIyJTtcbn1cblxuLmZvdXIuY29sdW1ucyB7XG4gIHdpZHRoOiAzMC42NjY2NjY2NjY3JTtcbn1cblxuLmZpdmUuY29sdW1ucyB7XG4gIHdpZHRoOiAzOS4zMzMzMzMzMzMzJTtcbn1cblxuLnNpeC5jb2x1bW5zIHtcbiAgd2lkdGg6IDQ4JTtcbn1cblxuLnNldmVuLmNvbHVtbnMge1xuICB3aWR0aDogNTYuNjY2NjY2NjY2NyU7XG59XG5cbi5laWdodC5jb2x1bW5zIHtcbiAgd2lkdGg6IDY1LjMzMzMzMzMzMzMlO1xufVxuXG4ubmluZS5jb2x1bW5zIHtcbiAgd2lkdGg6IDc0JTtcbn1cblxuLnRlbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDgyLjY2NjY2NjY2NjclO1xufVxuXG4uZWxldmVuLmNvbHVtbnMge1xuICB3aWR0aDogOTEuMzMzMzMzMzMzMyU7XG59XG5cbi50d2VsdmUuY29sdW1ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm9uZS10aGlyZC5jb2x1bW4ge1xuICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG59XG5cbi50d28tdGhpcmRzLmNvbHVtbiB7XG4gIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbn1cblxuLm9uZS1oYWxmLmNvbHVtbiB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi8qIE9mZnNldHMgKi9cbi5vZmZzZXQtYnktb25lLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC1ieS10d28uY29sdW1uLFxuLm9mZnNldC1ieS10d28uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMjYlO1xufVxuXG4ub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS1zaXguY29sdW1uLFxuLm9mZnNldC1ieS1zaXguY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA1MiU7XG59XG5cbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcbi5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcbi5vZmZzZXQtYnktbmluZS5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDc4JTtcbn1cblxuLm9mZnNldC1ieS10ZW4uY29sdW1uLFxuLm9mZnNldC1ieS10ZW4uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxuLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA1MiU7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspLFxuLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59IiwiXHJcbjpob3N0IHtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMi41JSA7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6ICM4ODg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG59XHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgdG9wOiAtMjRweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTgwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG59XHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICB0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7IH1cclxuLmNvbHVtbixcclxuLmNvbHVtbnMge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTsgfVxyXG4uY29sdW1uOmZpcnN0LWNoaWxkLFxyXG4uY29sdW1uczpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cclxuXHJcbi5vbmUuY29sdW1uLFxyXG4ub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XHJcbi50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cclxuLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxyXG4uZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbi5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cclxuLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxyXG4uc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XHJcbi5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxyXG4udGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XHJcbi5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cclxuLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxyXG5cclxuLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxyXG4udHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcblxyXG4ub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxyXG5cclxuLyogT2Zmc2V0cyAqL1xyXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS10d28uY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XHJcbi5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XHJcbi5vZmZzZXQtYnktZm91ci5jb2x1bW4sXHJcbi5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1maXZlLmNvbHVtbixcclxuLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxyXG4ub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cclxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcclxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxyXG4ub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XHJcblxyXG4ub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cclxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcclxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxyXG5cclxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufSJdfQ== */"]
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

    function GraphComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var graphChosen_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", graphChosen_r2)("selected", graphChosen_r2.title == ctx_r0.graph.title ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", graphChosen_r2.title, " ");
      }
    }

    function GraphComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var table_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", table_r3.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", table_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](table_r3.desc);
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
          this.tables = _image__WEBPACK_IMPORTED_MODULE_1__["tables"];
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
      vars: 9,
      consts: [[1, ""], [1, "twelve", "columns"], ["id", "dropdown", 3, "ngModel", "ngModelChange"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], [1, "row"], [1, "twelve", "columns", "u-centered"], [1, "six", "columns"], [1, "u-centered", 3, "src", "alt"], [1, "six", "columns", "description-container"], [1, "desc"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "ngValue", "selected"]],
      template: function GraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.graph = $event;
          })("ngModelChange", function GraphComponent_Template_select_ngModelChange_6_listener() {
            return ctx.newGraph(ctx.graph);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GraphComponent_option_7_Template, 2, 3, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GraphComponent_div_19_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.graph);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.graphList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.graph.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.graph.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.graph.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.graph.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tables);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n\n@media (min-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 85%;\n    padding: 0;\n  }\n}\n\n@media (min-width: 550px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n\n  .column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n\n  .one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n    width: 4.6666666667%;\n  }\n\n  .two.columns[_ngcontent-%COMP%] {\n    width: 13.3333333333%;\n  }\n\n  .three.columns[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n\n  .four.columns[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .five.columns[_ngcontent-%COMP%] {\n    width: 39.3333333333%;\n  }\n\n  .six.columns[_ngcontent-%COMP%] {\n    width: 48%;\n    margin: 2rem 1rem 0 1rem;\n  }\n\n  .seven.columns[_ngcontent-%COMP%] {\n    width: 56.6666666667%;\n  }\n\n  .eight.columns[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .nine.columns[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .ten.columns[_ngcontent-%COMP%] {\n    width: 82.6666666667%;\n  }\n\n  .eleven.columns[_ngcontent-%COMP%] {\n    width: 91.3333333333%;\n  }\n\n  .twelve.columns[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 1rem;\n  }\n\n  .one-third.column[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .two-thirds.column[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .one-half.column[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  \n  .offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n    margin-left: 8.6666666667%;\n  }\n\n  .offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n    margin-left: 17.3333333333%;\n  }\n\n  .offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n    margin-left: 26%;\n  }\n\n  .offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n    margin-left: 43.3333333333%;\n  }\n\n  .offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n\n  .offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n    margin-left: 60.6666666667%;\n  }\n\n  .offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n    margin-left: 78%;\n  }\n\n  .offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n    margin-left: 86.6666666667%;\n  }\n\n  .offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n    margin-left: 95.3333333333%;\n  }\n\n  .offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n}\n\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  \n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #1976d2;\n          text-decoration-color: #1976d2;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n\n@media (min-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 4.2rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 3.6rem;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #1EAEDB;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0FA0CE;\n}\n\n.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover, input[type=button][_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, input[type=submit][_ngcontent-%COMP%]:focus, input[type=reset][_ngcontent-%COMP%]:focus, input[type=button][_ngcontent-%COMP%]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.button-primary[_ngcontent-%COMP%], button.button-primary[_ngcontent-%COMP%], input[type=submit].button-primary[_ngcontent-%COMP%], input[type=reset].button-primary[_ngcontent-%COMP%], input[type=button].button-primary[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.button-primary[_ngcontent-%COMP%]:hover, button.button-primary[_ngcontent-%COMP%]:hover, input[type=submit].button-primary[_ngcontent-%COMP%]:hover, input[type=reset].button-primary[_ngcontent-%COMP%]:hover, input[type=button].button-primary[_ngcontent-%COMP%]:hover, .button.button-primary[_ngcontent-%COMP%]:focus, button.button-primary[_ngcontent-%COMP%]:focus, input[type=submit].button-primary[_ngcontent-%COMP%]:focus, input[type=reset].button-primary[_ngcontent-%COMP%]:focus, input[type=button].button-primary[_ngcontent-%COMP%]:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 100%;\n  padding: 6px 10px;\n  \n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n  border: 3px solid #1976d2;\n  border-radius: 5px;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\ninput[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border: 3px solid #1976d2;\n  border-radius: 5px;\n  outline: 0;\n}\nlabel[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\nfieldset[_ngcontent-%COMP%] {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  display: inline;\n}\nlabel[_ngcontent-%COMP%]    > .label-body[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-weight: normal;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: circle inside;\n}\nol[_ngcontent-%COMP%] {\n  list-style: decimal inside;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 0;\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\ncode[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n.desc[_ngcontent-%COMP%] {\n  white-space: pre;\n  overflow: auto;\n  overflow-wrap: break-word;\n  height: 100%;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1;\n}\nth[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\nth[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\nbutton[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\npre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], table[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  white-space: pre;\n  font-size: 1.8rem;\n  letter-spacing: -0.05rem;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  border: 8px solid #1976d2;\n  border-radius: 5px;\n}\n\n.u-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n.u-max-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.u-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.u-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.u-centered[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1;\n}\n#dropdown[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  margin-bottom: 2rem;\n  width: 25vw;\n}\n.row[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 12px;\n  margin: 1rem 0 0 0;\n}\n\n\n.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after, .u-cf[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.description-container[_ngcontent-%COMP%] {\n  display: block;\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoL0Q6XFxDb2RpbmdcXFVDTEF4LURhdGEtU2NpZW5jZS1Qcm9qZWN0XFx3ZWJzaXRlL3NyY1xcYXBwXFxncmFwaFxcZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFrQkE7b0RBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREZKO0FDR0U7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBREFKO0FDRUUsa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RURDSjtBQUNGO0FDQ0Usa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtFRENKOztFQ0FFOztJQUVFLGVBQUE7RURHSjs7RUNGRTs7SUFFRSxjQUFBO0VES0o7O0VDSEU7O0lBQ2tDLG9CQUFBO0VET3BDOztFQ05FO0lBQWtDLHFCQUFBO0VEVXBDOztFQ1RFO0lBQWtDLFVBQUE7RURhcEM7O0VDWkU7SUFBa0MscUJBQUE7RURnQnBDOztFQ2ZFO0lBQWtDLHFCQUFBO0VEbUJwQzs7RUNsQkU7SUFBa0MsVUFBQTtJQUFZLHdCQUFBO0VEdUJoRDs7RUN0QkU7SUFBa0MscUJBQUE7RUQwQnBDOztFQ3pCRTtJQUFrQyxxQkFBQTtFRDZCcEM7O0VDNUJFO0lBQWtDLFVBQUE7RURnQ3BDOztFQy9CRTtJQUFrQyxxQkFBQTtFRG1DcEM7O0VDbENFO0lBQWtDLHFCQUFBO0VEc0NwQzs7RUNyQ0U7SUFBa0MsV0FBQTtJQUFhLGNBQUE7SUFBZ0IsZ0JBQUE7RUQyQ2pFOztFQ3pDRTtJQUFrQyxxQkFBQTtFRDZDcEM7O0VDNUNFO0lBQWtDLHFCQUFBO0VEZ0RwQzs7RUM5Q0U7SUFBa0MsVUFB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O0FEcUxKO0FDcExFO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEdUxOO0FDbkxFO29EQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FEc0xKO0FDcExFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUR1TEo7QUNwTEU7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR1TEo7QUNyTEU7b0RBQUE7QUFHQSwyQkFBQTtBQUNBOzs7RUFHRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUR1TEo7QUNwTEU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUR1TEo7QUNyTEU7b0RBQUE7QUFFQTs7Ozs7Q0FBQTtBQVFBLHVCQUFBO0FBR0EsOERBQUE7QUFHQSx1QkFBQTtBQUdBLHdCQUFBO0FBR0EsMkJBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4qIFNrZWxldG9uIFYyLjAuNFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuKiAxMi8yOS8yMDE0XG4qL1xuLyogVGFibGUgb2YgY29udGVudHNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xuLSBHcmlkXG4tIEJhc2UgU3R5bGVzXG4tIFR5cG9ncmFwaHlcbi0gTGlua3Ncbi0gQnV0dG9uc1xuLSBGb3Jtc1xuLSBMaXN0c1xuLSBDb2RlXG4tIFRhYmxlc1xuLSBTcGFjaW5nXG4tIFV0aWxpdGllc1xuLSBDbGVhcmluZ1xuLSBNZWRpYSBRdWVyaWVzXG4qL1xuLyogR3JpZFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbHVtbixcbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmNvbHVtbixcbi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cblxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxuLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLm9uZS5jb2x1bW4sXG4ub25lLmNvbHVtbnMge1xuICAgIHdpZHRoOiA0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLnR3by5jb2x1bW5zIHtcbiAgICB3aWR0aDogMTMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAudGhyZWUuY29sdW1ucyB7XG4gICAgd2lkdGg6IDIyJTtcbiAgfVxuXG4gIC5mb3VyLmNvbHVtbnMge1xuICAgIHdpZHRoOiAzMC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5maXZlLmNvbHVtbnMge1xuICAgIHdpZHRoOiAzOS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5zaXguY29sdW1ucyB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwIDFyZW07XG4gIH1cblxuICAuc2V2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDU2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmVpZ2h0LmNvbHVtbnMge1xuICAgIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5uaW5lLmNvbHVtbnMge1xuICAgIHdpZHRoOiA3NCU7XG4gIH1cblxuICAudGVuLmNvbHVtbnMge1xuICAgIHdpZHRoOiA4Mi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5lbGV2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDkxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnR3ZWx2ZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLm9uZS10aGlyZC5jb2x1bW4ge1xuICAgIHdpZHRoOiAzMC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC50d28tdGhpcmRzLmNvbHVtbiB7XG4gICAgd2lkdGg6IDY1LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9uZS1oYWxmLmNvbHVtbiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxuXG4gIC8qIE9mZnNldHMgKi9cbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxuLm9mZnNldC1ieS1vbmUuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXR3by5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcbi5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI2JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcbi5vZmZzZXQtYnktZml2ZS5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNTIlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxuLm9mZnNldC1ieS1laWdodC5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxuLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA3OCU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxuLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNTIlO1xuICB9XG59XG4vKiBCYXNlIFN0eWxlc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKiBOT1RFXG5odG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLyogVHlwb2dyYXBoeVxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMTk3NmQyO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA4cmVtO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4vKiBMaW5rc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5hIHtcbiAgY29sb3I6ICMxRUFFREI7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzBGQTBDRTtcbn1cblxuLyogQnV0dG9uc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4uYnV0dG9uLFxuYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpob3ZlcixcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlcixcbmlucHV0W3R5cGU9cmVzZXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmlucHV0W3R5cGU9c3VibWl0XTpmb2N1cyxcbmlucHV0W3R5cGU9cmVzZXRdOmZvY3VzLFxuaW5wdXRbdHlwZT1idXR0b25dOmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1jb2xvcjogIzg4ODtcbiAgb3V0bGluZTogMDtcbn1cblxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9c3VibWl0XS5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9cmVzZXRdLmJ1dHRvbi1wcmltYXJ5LFxuaW5wdXRbdHlwZT1idXR0b25dLmJ1dHRvbi1wcmltYXJ5IHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDtcbn1cblxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9c3VibWl0XS5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9cmVzZXRdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuaW5wdXRbdHlwZT1idXR0b25dLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9c3VibWl0XS5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9cmVzZXRdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuaW5wdXRbdHlwZT1idXR0b25dLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XG4gIGJvcmRlci1jb2xvcjogIzFFQUVEQjtcbn1cblxuLyogRm9ybXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPW51bWJlcl0sXG5pbnB1dFt0eXBlPXNlYXJjaF0sXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOTc2ZDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzE5NzZkMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiAwO1xufVxuXG5sYWJlbCxcbmxlZ2VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmxhYmVsID4gLmxhYmVsLWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIExpc3RzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnVsIHtcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTtcbn1cblxub2wsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG51bCB1bCxcbnVsIG9sLFxub2wgb2wsXG5vbCB1bCB7XG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xufVxuXG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qIENvZGVcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuY29kZSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIG1hcmdpbjogMCAwLjJyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnByZSA+IGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi5kZXNjIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogVGFibGVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnRoLFxudGQge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxO1xufVxuXG50aDpmaXJzdC1jaGlsZCxcbnRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG50aDpsYXN0LWNoaWxkLFxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi8qIFNwYWNpbmdcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuYnV0dG9uLFxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5maWVsZHNldCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxucHJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZmlndXJlLFxudGFibGUsXG5wLFxudWwsXG5vbCxcbmZvcm0ge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGJvcmRlcjogOHB4IHNvbGlkICMxOTc2ZDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogVXRpbGl0aWVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi51LWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnUtbWF4LWZ1bGwtd2lkdGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi51LXB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi51LXB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udS1jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTAlO1xufVxuXG4vKiBNaXNjXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmhyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxO1xufVxuXG4jZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB3aWR0aDogMjV2dztcbn1cblxuLnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xufVxuXG4vKiBDbGVhcmluZ1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXG4uY29udGFpbmVyOmFmdGVyLFxuLnJvdzphZnRlcixcbi51LWNmIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi8qXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcbnRoZXJlLlxuKi9cbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi8iLCIvKlxyXG4qIFNrZWxldG9uIFYyLjAuNFxyXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcclxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXHJcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiogMTIvMjkvMjAxNFxyXG4qL1xyXG5cclxuXHJcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xyXG4tIEdyaWRcclxuLSBCYXNlIFN0eWxlc1xyXG4tIFR5cG9ncmFwaHlcclxuLSBMaW5rc1xyXG4tIEJ1dHRvbnNcclxuLSBGb3Jtc1xyXG4tIExpc3RzXHJcbi0gQ29kZVxyXG4tIFRhYmxlc1xyXG4tIFNwYWNpbmdcclxuLSBVdGlsaXRpZXNcclxuLSBDbGVhcmluZ1xyXG4tIE1lZGlhIFF1ZXJpZXNcclxuKi9cclxuXHJcblxyXG4vKiBHcmlkXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5jb2x1bW4sXHJcbiAgLmNvbHVtbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICBcclxuICAvKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIHBhZGRpbmc6IDA7IH1cclxuICB9XHJcbiAgXHJcbiAgLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODAlOyB9XHJcbiAgICAuY29sdW1uLFxyXG4gICAgLmNvbHVtbnMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNCU7IH1cclxuICAgIC5jb2x1bW46Zmlyc3QtY2hpbGQsXHJcbiAgICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XHJcbiAgXHJcbiAgICAub25lLmNvbHVtbixcclxuICAgIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cclxuICAgIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cclxuICAgIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cclxuICAgIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyBtYXJnaW46IDJyZW0gMXJlbSAwIDFyZW07IH1cclxuICAgIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cclxuICAgIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cclxuICAgIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi10b3A6IDFyZW07IH1cclxuICBcclxuICAgIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cclxuICAgIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuICBcclxuICAgIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XHJcbiAgXHJcbiAgICAvKiBPZmZzZXRzICovXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cclxuICAgIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxyXG4gICAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxyXG4gICAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XHJcbiAgICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XHJcbiAgXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxyXG4gIFxyXG4gICAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBCYXNlIFN0eWxlc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIC8qIE5PVEVcclxuICBodG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXHJcbiAgYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTsgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFR5cG9ncmFwaHlcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxyXG4gIGgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cclxuICBoMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxyXG4gIGgzIHsgXHJcbiAgICBmb250LXNpemU6IDMuMHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7ICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMxOTc2ZDI7XHJcblxyXG4gIH1cclxuICBoNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cclxuICBoNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cclxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XHJcbiAgICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XHJcbiAgICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XHJcbiAgICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XHJcbiAgICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XHJcbiAgICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIExpbmtzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzFFQUVEQjsgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwRkEwQ0U7IH1cclxuICBcclxuICBcclxuICAvKiBCdXR0b25zXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgLmJ1dHRvbixcclxuICBidXR0b24sXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5idXR0b246aG92ZXIsXHJcbiAgYnV0dG9uOmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiAgLmJ1dHRvbjpmb2N1cyxcclxuICBidXR0b246Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcclxuICAgIG91dGxpbmU6IDA7IH1cclxuICAuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGJ1dHRvbi5idXR0b24tcHJpbWFyeSxcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeSxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgfVxyXG4gIC5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBidXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XHJcbiAgICBib3JkZXItY29sb3I6ICMxRUFFREI7IH1cclxuICBcclxuICBcclxuICAvKiBGb3Jtc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuICBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzE5NzZkMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyB9XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4gIHRleHRhcmVhOmZvY3VzLFxyXG4gIHNlbGVjdDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTk3NmQyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogMDsgfVxyXG4gIGxhYmVsLFxyXG4gIGxlZ2VuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4gIGZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7IH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTsgfVxyXG4gIGxhYmVsID4gLmxhYmVsLWJvZHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIExpc3RzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XHJcbiAgb2wsIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7IH1cclxuICB1bCB1bCxcclxuICB1bCBvbCxcclxuICBvbCBvbCxcclxuICBvbCB1bCB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7IH1cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQ29kZVxyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGNvZGUge1xyXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XHJcbiAgICBtYXJnaW46IDAgLjJyZW07XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxyXG4gIHByZSA+IGNvZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7IH1cclxuICAuZGVzYyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBUYWJsZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cclxuICB0aDpmaXJzdC1jaGlsZCxcclxuICB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cclxuICB0aDpsYXN0LWNoaWxkLFxyXG4gIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFNwYWNpbmdcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBidXR0b24sXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0LFxyXG4gIGZpZWxkc2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxyXG4gIHByZSxcclxuICBibG9ja3F1b3RlLFxyXG4gIGRsLFxyXG4gIGZpZ3VyZSxcclxuICB0YWJsZSxcclxuICBwLFxyXG4gIHVsLFxyXG4gIG9sLFxyXG4gIGZvcm0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtOyBcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07ICBcclxuICAgICAgYm9yZGVyOiA4cHggc29saWQgIzE5NzZkMjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIC8qIFV0aWxpdGllc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIC51LWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLnUtbWF4LWZ1bGwtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC51LXB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XHJcbiAgLnUtcHVsbC1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0OyB9XHJcbiAgLnUtY2VudGVyZWQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTWlzY1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxyXG4gIFxyXG4gICNkcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB3aWR0aDogMjV2dztcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xyXG4gIH1cclxuICAvKiBDbGVhcmluZ1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIFxyXG4gIC8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cclxuICAuY29udGFpbmVyOmFmdGVyLFxyXG4gIC5yb3c6YWZ0ZXIsXHJcbiAgLnUtY2Yge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7IH1cclxuICBcclxuICBcclxuICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIE1lZGlhIFF1ZXJpZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAvKlxyXG4gIE5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xyXG4gIG5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXHJcbiAgb24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XHJcbiAgdGhlcmUuXHJcbiAgKi9cclxuICBcclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cclxuICAiXX0= */"]
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
      source: "../../assets/coc_category_x_award_amount_1.png",
      title: "Award Dispersion by CoC Category - Detailed",
      desc: "\n        \u2022 This graph shows the distribution of monetery awards\n\t\tdistributed by HUD to each CoC Category.\n\n        \u2022 The funds are comparatively distributed with slightly\n\t\thigher amounts going to Major Cites.\n        "
    }, {
      source: "../../assets/coc_category_x_award_amount_2.png",
      title: "Award Dispersion by CoC Category - General",
      desc: "\n        \u2022 This graph shows the distribution of monetery awards\n\t\tdistributed by HUD to each CoC Category.\n \n        \u2022 The funds are comparatively distributed with slightly\n\t\thigher amounts going to Urban CoCs.\n        "
    }, {
      source: "../../assets/coc_category_x_homelessness_return_rate_dist.png",
      title: "Distribution of Homelessness Return Rate by CoC Category",
      desc: "\n        \u2022 This graph shows the relative distribution of the\n\t\tReturn Rate to Homelessness by CoC.\n\n        \u2022 We can see that Major Cities and other Urban CoCs\n\t\thave Return Rates densely distributed in\n\t\tthe (0.2-0.6) range and sparsely distributed\n\t\tin the 0.6+ range.\n\n        \u2022 We can also observe that Rural CoCs have\n\t\tReturn Rates more densely distributed\n\t\tin the higher ranges (0.6+).\n        "
    }, {
      source: "../../assets/Total_Homeless_x_CoC_category.png",
      title: "Homeless Count by CoC Category",
      desc: "\n        \u2022 This chart shows the Total Homeslessness Count with\n\t\tthe proportion of First Time Homeless count hued\n\t\tin light grey.\n\n        \u2022 We can see that First Time Homeless Counts are a\n\t\tsignificant portion of the overall Homeless\n\t\tpopulation as a whole.\n\n        \u2022 This is especially true in Rual CoCs and\n\t\tsmaller Urban CoCs. \n        "
    }, {
      source: "../../assets/Year_x_Homelessness_Return_Rate_CoC_category_2.png",
      title: "Homlessness Return Rate by Year by CoC Category",
      desc: "\n        \u2022 This graph shows the average Return Rates to\n\t\tHomelessness from 2015-2017 for each CoC Category.\n\n        \u2022 We can see a general upward trend per year\n\t\tfor each category.\n\n        \u2022 Rual CoCs have an overall higher Homelessness\n\t\tReturn Rate and a shaper incline relatice to the\n\t\tother CoC categories.\n        "
    }];
    var tables = [{
      source: "../../assets/coc_category_by_coc_type.png",
      title: "CoC Category vs. Coc Type",
      desc: "\u2022 There are far more non urban CoCs than urban CoCs."
    }, {
      source: "../../assets/monetary_counts_by_coc_type.png",
      title: "Monetary Rewards vs. CoC Type",
      desc: "\u2022 The monetary rewards going into each CoC type are\ncomparable with slightly more money going towards\nplanning for non urban CoCs."
    }, {
      source: "../../assets/recidivism_counts_by_coc_type.png",
      title: "Recidivism Counts vs. Coc Type",
      desc: "\u2022 By all counts recidivism is worse in non urban CoCs."
    }, {
      source: "../../assets/student_counts_by_coc_type.png",
      title: "Student Counts vs. Coc Type",
      desc: "\u2022 Overall student homelessness is worse in non urban CoCs\nwith the exception of unsheltered students."
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