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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  background-blend-mode: darken;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 80vw;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin: auto;\n  height: 30px;\n  width: 100%;\n  bottom: 0px;\n  margin-top: 8px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  margin-left: 4%;\n}\n.column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n  width: 4.6666666667%;\n}\n.two.columns[_ngcontent-%COMP%] {\n  width: 13.3333333333%;\n}\n.three.columns[_ngcontent-%COMP%] {\n  width: 22%;\n}\n.four.columns[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.five.columns[_ngcontent-%COMP%] {\n  width: 39.3333333333%;\n}\n.six.columns[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.seven.columns[_ngcontent-%COMP%] {\n  width: 56.6666666667%;\n}\n.eight.columns[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.nine.columns[_ngcontent-%COMP%] {\n  width: 74%;\n}\n.ten.columns[_ngcontent-%COMP%] {\n  width: 82.6666666667%;\n}\n.eleven.columns[_ngcontent-%COMP%] {\n  width: 91.3333333333%;\n}\n.twelve.columns[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n}\n.one-third.column[_ngcontent-%COMP%] {\n  width: 30.6666666667%;\n}\n.two-thirds.column[_ngcontent-%COMP%] {\n  width: 65.3333333333%;\n}\n.one-half.column[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n  margin-left: 8.6666666667%;\n}\n.offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n  margin-left: 17.3333333333%;\n}\n.offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n  margin-left: 26%;\n}\n.offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n  margin-left: 43.3333333333%;\n}\n.offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n.offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n  margin-left: 60.6666666667%;\n}\n.offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n  margin-left: 78%;\n}\n.offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n  margin-left: 86.6666666667%;\n}\n.offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n  margin-left: 95.3333333333%;\n}\n.offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n  margin-left: 34.6666666667%;\n}\n.offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n  margin-left: 69.3333333333%;\n}\n.offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n  margin-left: 52%;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n\n  .content[_ngcontent-%COMP%] {\n    max-width: 90vw;\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcQ29kaW5nXFxVQ0xBeC1EYXRhLVNjaWVuY2UtUHJvamVjdFxcd2Vic2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLHVGQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURDRjtBQ0VBOzs7Ozs7RUFNRSxhQUFBO0FEQ0Y7QUNFQTtFQUNFLFNBQUE7QURDRjtBQ0VBO0VBQ0UsT0FBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsVUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxZQUFB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QUE7QURvRWxDO0FDbkVBOztFQUNrQywyQkFBQTtBRHVFbEM7QUN0RUE7O0VBQ2tDLGdCQUFBO0FEMEVsQztBQ3pFQTs7RUFDa0MsMkJBQUE7QUQ2RWxDO0FDNUVBOztFQUNrQywyQkFBQTtBRGdGbEM7QUM5RUE7O0VBQ2tDLDJCQUFBO0FEa0ZsQztBQ2pGQTs7RUFDa0MsMkJBQUE7QURxRmxDO0FDbkZBOztFQUNrQyxnQkFBQTtBRHVGbEM7QUNwRkEsc0JBQUE7QUFDQTtFQUVFOztJQUVFLFdBQUE7RURzRkY7O0VDbkZBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RURzRkY7O0VDbkZBO0lBQ0UsaUJBQUE7RURzRkY7O0VDbkZBO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VEc0ZGOztFQ25GQTtJQUNFLGVBQUE7RURzRkY7QUFDRjtBQ25GQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEcUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogLThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogODB2dztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjODg4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLmNhcmQtc21hbGwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzY5Njc2Nztcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNvbHVtbixcbi5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29sdW1uOmZpcnN0LWNoaWxkLFxuLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm9uZS5jb2x1bW4sXG4ub25lLmNvbHVtbnMge1xuICB3aWR0aDogNC42NjY2NjY2NjY3JTtcbn1cblxuLnR3by5jb2x1bW5zIHtcbiAgd2lkdGg6IDEzLjMzMzMzMzMzMzMlO1xufVxuXG4udGhyZWUuY29sdW1ucyB7XG4gIHdpZHRoOiAyMiU7XG59XG5cbi5mb3VyLmNvbHVtbnMge1xuICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG59XG5cbi5maXZlLmNvbHVtbnMge1xuICB3aWR0aDogMzkuMzMzMzMzMzMzMyU7XG59XG5cbi5zaXguY29sdW1ucyB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5zZXZlbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDU2LjY2NjY2NjY2NjclO1xufVxuXG4uZWlnaHQuY29sdW1ucyB7XG4gIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbn1cblxuLm5pbmUuY29sdW1ucyB7XG4gIHdpZHRoOiA3NCU7XG59XG5cbi50ZW4uY29sdW1ucyB7XG4gIHdpZHRoOiA4Mi42NjY2NjY2NjY3JTtcbn1cblxuLmVsZXZlbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDkxLjMzMzMzMzMzMzMlO1xufVxuXG4udHdlbHZlLmNvbHVtbnMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5vbmUtdGhpcmQuY29sdW1uIHtcbiAgd2lkdGg6IDMwLjY2NjY2NjY2NjclO1xufVxuXG4udHdvLXRoaXJkcy5jb2x1bW4ge1xuICB3aWR0aDogNjUuMzMzMzMzMzMzMyU7XG59XG5cbi5vbmUtaGFsZi5jb2x1bW4ge1xuICB3aWR0aDogNDglO1xufVxuXG4vKiBPZmZzZXRzICovXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktdHdvLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxuLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDI2JTtcbn1cblxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcbi5vZmZzZXQtYnktZm91ci5jb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxuLm9mZnNldC1ieS1maXZlLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktc2l4LmNvbHVtbixcbi5vZmZzZXQtYnktc2l4LmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNTIlO1xufVxuXG4ub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktbmluZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA3OCU7XG59XG5cbi5vZmZzZXQtYnktdGVuLmNvbHVtbixcbi5vZmZzZXQtYnktdGVuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogNTIlO1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSxcbi50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufSIsIlxyXG46aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogLThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICBjb2xvcjogI2MyYzNjNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgY29sb3I6ICMyNDI5MmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuc3ZnI2Nsb3VkcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTE2MHB4O1xyXG4gIGxlZnQ6IC0yMzBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTsgfVxyXG4uY29sdW1uLFxyXG4uY29sdW1ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlOyB9XHJcbi5jb2x1bW46Zmlyc3QtY2hpbGQsXHJcbi5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMDsgfVxyXG5cclxuLm9uZS5jb2x1bW4sXHJcbi5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cclxuLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxyXG4udGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XHJcbi5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cclxuLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxyXG4uc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XHJcbi5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cclxuLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxyXG4ubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XHJcbi50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cclxuLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxyXG4udHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcblxyXG4ub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbi50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuXHJcbi5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XHJcblxyXG4vKiBPZmZzZXRzICovXHJcbi5vZmZzZXQtYnktb25lLmNvbHVtbixcclxuLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxyXG4ub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXHJcbi5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cclxuLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXHJcbi5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cclxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcclxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XHJcbi5vZmZzZXQtYnktc2l4LmNvbHVtbixcclxuLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxyXG4ub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcclxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxyXG4ub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcclxuLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxyXG4ub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XHJcbi5vZmZzZXQtYnktdGVuLmNvbHVtbixcclxuLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxyXG4ub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXHJcbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cclxuXHJcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcclxuLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4ub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxyXG4ub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XHJcblxyXG4ub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcclxuLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAudGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59Il19 */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);

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
      consts: [[1, ""], [1, "row"], [1, "twelve", "columns"], ["id", "dropdown", 3, "ngModel", "ngModelChange"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], [1, "twelve", "columns", "u-centered"], [1, "six", "columns"], [1, "u-centered", 3, "src", "alt"], [1, "desc"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "ngValue", "selected"]],
      template: function GraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.graph = $event;
          })("ngModelChange", function GraphComponent_Template_select_ngModelChange_6_listener() {
            return ctx.newGraph(ctx.graph);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GraphComponent_option_7_Template, 2, 3, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GraphComponent_div_19_Template, 6, 3, "div", 9);

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
      styles: ["@charset \"UTF-8\";\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n\n@media (min-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 85%;\n    padding: 0;\n  }\n}\n\n@media (min-width: 550px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n\n  .column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n\n  .one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n    width: 4.6666666667%;\n  }\n\n  .two.columns[_ngcontent-%COMP%] {\n    width: 13.3333333333%;\n  }\n\n  .three.columns[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n\n  .four.columns[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .five.columns[_ngcontent-%COMP%] {\n    width: 39.3333333333%;\n  }\n\n  .six.columns[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  .seven.columns[_ngcontent-%COMP%] {\n    width: 56.6666666667%;\n  }\n\n  .eight.columns[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .nine.columns[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .ten.columns[_ngcontent-%COMP%] {\n    width: 82.6666666667%;\n  }\n\n  .eleven.columns[_ngcontent-%COMP%] {\n    width: 91.3333333333%;\n  }\n\n  .twelve.columns[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .one-third.column[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .two-thirds.column[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .one-half.column[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  \n  .offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n    margin-left: 8.6666666667%;\n  }\n\n  .offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n    margin-left: 17.3333333333%;\n  }\n\n  .offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n    margin-left: 26%;\n  }\n\n  .offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n    margin-left: 43.3333333333%;\n  }\n\n  .offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n\n  .offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n    margin-left: 60.6666666667%;\n  }\n\n  .offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n    margin-left: 78%;\n  }\n\n  .offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n    margin-left: 86.6666666667%;\n  }\n\n  .offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n    margin-left: 95.3333333333%;\n  }\n\n  .offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n}\n\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  \n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n\n@media (min-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 4.2rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 3.6rem;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #1EAEDB;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0FA0CE;\n}\n\n.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover, input[type=button][_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, input[type=submit][_ngcontent-%COMP%]:focus, input[type=reset][_ngcontent-%COMP%]:focus, input[type=button][_ngcontent-%COMP%]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.button-primary[_ngcontent-%COMP%], button.button-primary[_ngcontent-%COMP%], input[type=submit].button-primary[_ngcontent-%COMP%], input[type=reset].button-primary[_ngcontent-%COMP%], input[type=button].button-primary[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.button-primary[_ngcontent-%COMP%]:hover, button.button-primary[_ngcontent-%COMP%]:hover, input[type=submit].button-primary[_ngcontent-%COMP%]:hover, input[type=reset].button-primary[_ngcontent-%COMP%]:hover, input[type=button].button-primary[_ngcontent-%COMP%]:hover, .button.button-primary[_ngcontent-%COMP%]:focus, button.button-primary[_ngcontent-%COMP%]:focus, input[type=submit].button-primary[_ngcontent-%COMP%]:focus, input[type=reset].button-primary[_ngcontent-%COMP%]:focus, input[type=button].button-primary[_ngcontent-%COMP%]:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 100%;\n  padding: 6px 10px;\n  \n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\ninput[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\nlabel[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\nfieldset[_ngcontent-%COMP%] {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  display: inline;\n}\nlabel[_ngcontent-%COMP%]    > .label-body[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-weight: normal;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: circle inside;\n}\nol[_ngcontent-%COMP%] {\n  list-style: decimal inside;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 0;\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\ncode[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n.desc[_ngcontent-%COMP%] {\n  white-space: pre !important;\n  margin-top: 2.5rem;\n  max-width: 25vw;\n  word-wrap: normal;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1;\n}\nth[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\nth[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\nbutton[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\npre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], table[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  white-space: pre;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n.u-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n.u-max-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.u-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.u-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.u-centered[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1;\n}\n#dropdown[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  margin-bottom: 2rem;\n  width: 25vw;\n}\n\n\n.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after, .u-cf[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoL0Q6XFxDb2RpbmdcXFVDTEF4LURhdGEtU2NpZW5jZS1Qcm9qZWN0XFx3ZWJzaXRlL3NyY1xcYXBwXFxncmFwaFxcZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFrQkE7b0RBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREZKO0FDR0U7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBREFKO0FDRUUsa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RURDSjtBQUNGO0FDQ0Usa0NBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtFRENKOztFQ0FFOztJQUVFLGVBQUE7RURHSjs7RUNGRTs7SUFFRSxjQUFBO0VES0o7O0VDSEU7O0lBQ2tDLG9CQUFBO0VET3BDOztFQ05FO0lBQWtDLHFCQUFBO0VEVXBDOztFQ1RFO0lBQWtDLFVBQUE7RURhcEM7O0VDWkU7SUFBa0MscUJBQUE7RURnQnBDOztFQ2ZFO0lBQWtDLHFCQUFBO0VEbUJwQzs7RUNsQkU7SUFBa0MsVUFBQTtFRHNCcEM7O0VDckJFO0lBQWtDLHFCQUFBO0VEeUJwQzs7RUN4QkU7SUFBa0MscUJBQUE7RUQ0QnBDOztFQzNCRTtJQUFrQyxVQUFBO0VEK0JwQzs7RUM5QkU7SUFBa0MscUJBQUE7RURrQ3BDOztFQ2pDRTtJQUFrQyxxQkFBQTtFRHFDcEM7O0VDcENFO0lBQWtDLFdBQUE7SUFBYSxjQUFBO0VEeUNqRDs7RUN2Q0U7SUFBa0MscUJBQUE7RUQyQ3BDOztFQzFDRTtJQUFrQyxxQkFBQTtFRDhDcEM7O0VDNUNFO0lBQWtDLFVBQUE7RURnRHBDOztFQzlDRSxZQUFBO0VB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QUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUQyTEo7QUN6TEU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRDRMSjtBQ3pMRTtvREFBQTtBQUdBLDJCQUFBO0FBQ0E7OztFQUdFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRDJMSjtBQ3hMRTtvREFBQTtBQUVBOzs7OztDQUFBO0FBUUEsdUJBQUE7QUFHQSw4REFBQTtBQUdBLHVCQUFBO0FBR0Esd0JBQUE7QUFHQSwyQkFBQSIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiogU2tlbGV0b24gVjIuMC40XG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcbiogd3d3LmdldHNrZWxldG9uLmNvbVxuKiBGcmVlIHRvIHVzZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4qIDEyLzI5LzIwMTRcbiovXG4vKiBUYWJsZSBvZiBjb250ZW50c1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG4tIEdyaWRcbi0gQmFzZSBTdHlsZXNcbi0gVHlwb2dyYXBoeVxuLSBMaW5rc1xuLSBCdXR0b25zXG4tIEZvcm1zXG4tIExpc3RzXG4tIENvZGVcbi0gVGFibGVzXG4tIFNwYWNpbmdcbi0gVXRpbGl0aWVzXG4tIENsZWFyaW5nXG4tIE1lZGlhIFF1ZXJpZXNcbiovXG4vKiBHcmlkXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29sdW1uLFxuLmNvbHVtbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY29sdW1uLFxuLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgfVxuXG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXG4uY29sdW1uczpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAub25lLmNvbHVtbixcbi5vbmUuY29sdW1ucyB7XG4gICAgd2lkdGg6IDQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAudHdvLmNvbHVtbnMge1xuICAgIHdpZHRoOiAxMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC50aHJlZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMjIlO1xuICB9XG5cbiAgLmZvdXIuY29sdW1ucyB7XG4gICAgd2lkdGg6IDMwLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmZpdmUuY29sdW1ucyB7XG4gICAgd2lkdGg6IDM5LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnNpeC5jb2x1bW5zIHtcbiAgICB3aWR0aDogNDglO1xuICB9XG5cbiAgLnNldmVuLmNvbHVtbnMge1xuICAgIHdpZHRoOiA1Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5laWdodC5jb2x1bW5zIHtcbiAgICB3aWR0aDogNjUuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAubmluZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogNzQlO1xuICB9XG5cbiAgLnRlbi5jb2x1bW5zIHtcbiAgICB3aWR0aDogODIuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuZWxldmVuLmNvbHVtbnMge1xuICAgIHdpZHRoOiA5MS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC50d2VsdmUuY29sdW1ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAub25lLXRoaXJkLmNvbHVtbiB7XG4gICAgd2lkdGg6IDMwLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLnR3by10aGlyZHMuY29sdW1uIHtcbiAgICB3aWR0aDogNjUuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub25lLWhhbGYuY29sdW1uIHtcbiAgICB3aWR0aDogNDglO1xuICB9XG5cbiAgLyogT2Zmc2V0cyAqL1xuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxuLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcbi5vZmZzZXQtYnktZm91ci5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxuLm9mZnNldC1ieS1maXZlLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcbi5vZmZzZXQtYnktc2l4LmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA1MiU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDc4JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcbi5vZmZzZXQtYnktdGVuLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcbi5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXG4ub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA1MiU7XG4gIH1cbn1cbi8qIEJhc2UgU3R5bGVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi8qIE5PVEVcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4vKiBUeXBvZ3JhcGh5XG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDhyZW07XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgfVxuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8qIExpbmtzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmEge1xuICBjb2xvcjogIzFFQUVEQjtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMEZBMENFO1xufVxuXG4vKiBCdXR0b25zXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi5idXR0b24sXG5idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmhvdmVyLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1yZXNldF06aG92ZXIsXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG4uYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmZvY3VzLFxuaW5wdXRbdHlwZT1yZXNldF06Zm9jdXMsXG5pbnB1dFt0eXBlPWJ1dHRvbl06Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICBvdXRsaW5lOiAwO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJ1dHRvbi1wcmltYXJ5LFxuaW5wdXRbdHlwZT1yZXNldF0uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYnV0dG9uLXByaW1hcnkge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcbiAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuaW5wdXRbdHlwZT1yZXNldF0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuaW5wdXRbdHlwZT1yZXNldF0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCO1xufVxuXG4vKiBGb3Jtc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXRlbF0sXG5pbnB1dFt0eXBlPXVybF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIC8qIFRoZSA2cHggdmVydGljYWxseSBjZW50ZXJzIHRleHQgb24gRkYsIGlnbm9yZWQgYnkgV2Via2l0ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcbiAgb3V0bGluZTogMDtcbn1cblxubGFiZWwsXG5sZWdlbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5sYWJlbCA+IC5sYWJlbC1ib2R5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiBMaXN0c1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG51bCB7XG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7XG59XG5cbm9sIHtcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7XG59XG5cbm9sLCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxudWwgdWwsXG51bCBvbCxcbm9sIG9sLFxub2wgdWwge1xuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xuICBmb250LXNpemU6IDkwJTtcbn1cblxubGkge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4vKiBDb2RlXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmNvZGUge1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBtYXJnaW46IDAgMC4ycmVtO1xuICBmb250LXNpemU6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5wcmUgPiBjb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuXG4uZGVzYyB7XG4gIHdoaXRlLXNwYWNlOiBwcmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBtYXgtd2lkdGg6IDI1dnc7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4vKiBUYWJsZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xudGgsXG50ZCB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7XG59XG5cbnRoOmZpcnN0LWNoaWxkLFxudGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbnRoOmxhc3QtY2hpbGQsXG50ZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLyogU3BhY2luZ1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5idXR0b24sXG4uYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCxcbmZpZWxkc2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5wcmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5maWd1cmUsXG50YWJsZSxcbnAsXG51bCxcbm9sLFxuZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4vKiBVdGlsaXRpZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLnUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udS1tYXgtZnVsbC13aWR0aCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnUtcHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnUtcHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi51LWNlbnRlcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG5cbi8qIE1pc2NcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaHIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7XG59XG5cbiNkcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHdpZHRoOiAyNXZ3O1xufVxuXG4vKiBDbGVhcmluZ1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXG4uY29udGFpbmVyOmFmdGVyLFxuLnJvdzphZnRlcixcbi51LWNmIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi8qXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcbm5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcbnRoZXJlLlxuKi9cbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi8iLCIvKlxyXG4qIFNrZWxldG9uIFYyLjAuNFxyXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcclxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXHJcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiogMTIvMjkvMjAxNFxyXG4qL1xyXG5cclxuXHJcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xyXG4tIEdyaWRcclxuLSBCYXNlIFN0eWxlc1xyXG4tIFR5cG9ncmFwaHlcclxuLSBMaW5rc1xyXG4tIEJ1dHRvbnNcclxuLSBGb3Jtc1xyXG4tIExpc3RzXHJcbi0gQ29kZVxyXG4tIFRhYmxlc1xyXG4tIFNwYWNpbmdcclxuLSBVdGlsaXRpZXNcclxuLSBDbGVhcmluZ1xyXG4tIE1lZGlhIFF1ZXJpZXNcclxuKi9cclxuXHJcblxyXG4vKiBHcmlkXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5jb2x1bW4sXHJcbiAgLmNvbHVtbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICBcclxuICAvKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA0MDBweCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIHBhZGRpbmc6IDA7IH1cclxuICB9XHJcbiAgXHJcbiAgLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODAlOyB9XHJcbiAgICAuY29sdW1uLFxyXG4gICAgLmNvbHVtbnMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNCU7IH1cclxuICAgIC5jb2x1bW46Zmlyc3QtY2hpbGQsXHJcbiAgICAuY29sdW1uczpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XHJcbiAgXHJcbiAgICAub25lLmNvbHVtbixcclxuICAgIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cclxuICAgIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cclxuICAgIC50aHJlZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMjIlOyAgICAgICAgICAgIH1cclxuICAgIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5zaXguY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyAgICAgICAgICAgIH1cclxuICAgIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5uaW5lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNzQuMCU7ICAgICAgICAgIH1cclxuICAgIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cclxuICAgIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cclxuICAgIC50d2VsdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWxlZnQ6IDA7IH1cclxuICBcclxuICAgIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cclxuICAgIC50d28tdGhpcmRzLmNvbHVtbiAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cclxuICBcclxuICAgIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XHJcbiAgXHJcbiAgICAvKiBPZmZzZXRzICovXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDguNjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cclxuICAgIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxyXG4gICAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxyXG4gICAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDYwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5vZmZzZXQtYnktbmluZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XHJcbiAgICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XHJcbiAgXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XHJcbiAgICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxyXG4gIFxyXG4gICAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBCYXNlIFN0eWxlc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIC8qIE5PVEVcclxuICBodG1sIGlzIHNldCB0byA2Mi41JSBzbyB0aGF0IGFsbCB0aGUgUkVNIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IFNrZWxldG9uXHJcbiAgYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTsgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFR5cG9ncmFwaHlcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxyXG4gIGgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cclxuICBoMiB7IGZvbnQtc2l6ZTogMy42cmVtOyBsaW5lLWhlaWdodDogMS4yNTsgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxyXG4gIGgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XHJcbiAgaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XHJcbiAgaDUgeyBmb250LXNpemU6IDEuOHJlbTsgbGluZS1oZWlnaHQ6IDEuNTsgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtOyB9XHJcbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxyXG4gICAgaDIgeyBmb250LXNpemU6IDQuMnJlbTsgfVxyXG4gICAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxyXG4gICAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxyXG4gICAgaDUgeyBmb250LXNpemU6IDIuNHJlbTsgfVxyXG4gICAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7IH1cclxuICBcclxuICBcclxuICAvKiBMaW5rc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICMxRUFFREI7IH1cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMEZBMENFOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQnV0dG9uc1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIC5idXR0b24sXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAuYnV0dG9uOmhvdmVyLFxyXG4gIGJ1dHRvbjpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG4gIC5idXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl06Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XHJcbiAgICBvdXRsaW5lOiAwOyB9XHJcbiAgLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcclxuICBidXR0b24uYnV0dG9uLXByaW1hcnksXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeSxcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnksXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5idXR0b24tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XHJcbiAgICBib3JkZXItY29sb3I6ICMzM0MzRjA7IH1cclxuICAuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxyXG4gIGJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxyXG4gIC5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXHJcbiAgYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogRm9ybXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7IC8qIFRoZSA2cHggdmVydGljYWxseSBjZW50ZXJzIHRleHQgb24gRkYsIGlnbm9yZWQgYnkgV2Via2l0ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyB9XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4gIHRleHRhcmVhOmZvY3VzLFxyXG4gIHNlbGVjdDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xyXG4gICAgb3V0bGluZTogMDsgfVxyXG4gIGxhYmVsLFxyXG4gIGxlZ2VuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4gIGZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7IH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTsgfVxyXG4gIGxhYmVsID4gLmxhYmVsLWJvZHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIExpc3RzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XHJcbiAgb2wsIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7IH1cclxuICB1bCB1bCxcclxuICB1bCBvbCxcclxuICBvbCBvbCxcclxuICBvbCB1bCB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7IH1cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQ29kZVxyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGNvZGUge1xyXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XHJcbiAgICBtYXJnaW46IDAgLjJyZW07XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxyXG4gIHByZSA+IGNvZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7IH1cclxuICAuZGVzYyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDI1dnc7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGVzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XHJcbiAgdGg6Zmlyc3QtY2hpbGQsXHJcbiAgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbiAgdGg6bGFzdC1jaGlsZCxcclxuICB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuICBcclxuICBcclxuICAvKiBTcGFjaW5nXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgYnV0dG9uLFxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCxcclxuICBmaWVsZHNldCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cclxuICBwcmUsXHJcbiAgYmxvY2txdW90ZSxcclxuICBkbCxcclxuICBmaWd1cmUsXHJcbiAgdGFibGUsXHJcbiAgcCxcclxuICB1bCxcclxuICBvbCxcclxuICBmb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgXHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07IFxyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTsgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgIH1cclxuICBcclxuICAvKiBVdGlsaXRpZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAudS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC51LW1heC1mdWxsLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAudS1wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDsgfVxyXG4gIC51LXB1bGwtbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDsgfVxyXG4gIC51LWNlbnRlcmVkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIE1pc2NcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBociB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cclxuICBcclxuICAjZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyaW5nXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgXHJcbiAgLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xyXG4gIC5jb250YWluZXI6YWZ0ZXIsXHJcbiAgLnJvdzphZnRlcixcclxuICAudS1jZiB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIE1lZGlhIFF1ZXJpZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAvKlxyXG4gIE5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xyXG4gIG5lYXIgdGhlIHJlbGV2YW50IGNvZGUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIGNoYW5nZSB0aGUgc3R5bGVzIGZvciBidXR0b25zXHJcbiAgb24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XHJcbiAgdGhlcmUuXHJcbiAgKi9cclxuICBcclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAoYWxzbyBwb2ludCB3aGVuIGdyaWQgYmVjb21lcyBhY3RpdmUpICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHRhYmxldCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cclxuICAiXX0= */"]
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
      source: "../../assets/coc_category_x_homelessness_return_rate_dist.png",
      title: "Distribution of Homelessness Return Rate by CoC Category",
      desc: "\n        - I Will \n        - Fill This Out\n        - Soon\n        "
    }, {
      source: "../../assets/Total_Homeless_x_CoC_category.png",
      title: "Homeless Count by CoC Category",
      desc: "\n        - I Will \n        - Fill This Out\n        - Soon\n        "
    }, {
      source: "../../assets/Year_x_Homelessness_Return_Rate_CoC_category_2.png",
      title: "Homlessness Return Rate by Year by CoC Category",
      desc: "\n        - I Will \n        - Fill This Out\n        - Soon\n        "
    }, {
      source: "../../assets/coc_category_x_award_amount_1.png",
      title: "Award Dispersion by CoC Category - Detailed",
      desc: "\n        - I Will \n        - Fill This Out\n        - Soon\n        "
    }, {
      source: "../../assets/coc_category_x_award_amount_2.png",
      title: "Award Dispersion by CoC Category - General",
      desc: "\n        - I Will \n        - Fill This Out\n        - Soon\n        "
    }];
    var tables = [{
      source: "../../assets/coc_category_by_coc_type.png",
      title: "CoC Category vs. Coc Type",
      desc: "There are far more non urban CoCs than urban CoCs."
    }, {
      source: "../../assets/monetary_counts_by_coc_type.png",
      title: "Monetary Rewards vs. CoC Type",
      desc: "The monetary rewards going into each CoC type are comparable with slightly more money going towards planning for non urban CoCs."
    }, {
      source: "../../assets/recidivism_counts_by_coc_type.png",
      title: "Recidivism Counts vs. Coc Type",
      desc: "By all counts recidivism is worse in non urban CoCs."
    }, {
      source: "../../assets/student_counts_by_coc_type.png",
      title: "Student Counts vs. Coc Type",
      desc: "Overall student homelessness is worse in non urban CoCs with the exception of unsheltered students."
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