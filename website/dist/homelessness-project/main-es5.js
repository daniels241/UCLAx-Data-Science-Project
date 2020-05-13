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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  background-blend-mode: darken;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 80vw;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  margin: auto;\n  width: 100%;\n  bottom: 0px;\n  margin-top: 8px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcQ29kaW5nXFxob21lbGVzc25lc3MtcHJvamVjdFxcVUNMQXgtRGF0YS1TY2llbmNlLVByb2plY3RcXHdlYnNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSx1RkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEQ0Y7QUNFQTs7Ozs7O0VBTUUsYUFBQTtBRENGO0FDRUE7RUFDRSxTQUFBO0FEQ0Y7QUNFQTtFQUNFLE9BQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7QURDRjtBQ0VBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLGlCQUFBO0FEQ0Y7QUNFQTtFQUNFLFVBQUE7QURDRjtBQ0VBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QURDRjtBQ0VBO0VBQ0UsYUFBQTtBRENGO0FDRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLGlCQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURDRjtBQ0VBOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QURDRjtBQ0VBO0VBQ0UsY0FBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QURDRjtBQ0VBO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRENGO0FDRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FEQ0Y7QUNFQTtFQUNFLGdFQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEQ0Y7QUNHQSxzQkFBQTtBQUNBO0VBRUU7O0lBRUUsV0FBQTtFRERGOztFQ0lBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RURERjs7RUNJQTtJQUNFLGlCQUFBO0VEREY7O0VDSUE7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RURERjtBQUNGO0FDSUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFREZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogLThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogODB2dztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjODg4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLmNhcmQtc21hbGwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzY5Njc2Nztcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgd2lkdGg6IDE5MjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXG4udGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufSIsIlxyXG46aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogLThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICBjb2xvcjogI2MyYzNjNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICBjb2xvcjogIzI0MjkyZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgbGVmdDogLTIzMHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufSJdfQ== */"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GraphComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.name)("selected", option_r2.name == ctx_r0.param1.name ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.display, " ");
      }
    }

    function GraphComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.name)("selected", option_r3.name == ctx_r1.param2.name ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.display, " ");
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
          this.options = [{
            "name": "year",
            "display": "Year"
          }, {
            "name": "SPM5",
            "display": "First time homeless"
          }, {
            "name": "spm0_coc_award_amount",
            "display": "HUD Award Amount"
          }, {
            "name": "state",
            "display": "State"
          }, {
            "name": "HMIS_count",
            "display": "Homelessness"
          }];
          this.param1 = this.options[1];
          this.param2 = this.options[0];
          this.newGraph(this.param1, this.param2);
        }
      }, {
        key: "newGraph",
        value: function newGraph(param1, param2) {
          console.log("changing! ".concat(this.param1.name, " vs ").concat(this.param2.name));
          var image = {
            param1: param1,
            param2: param2,
            source: "../../assets/".concat(param1.name, "_x_").concat(param2.name, ".png")
          };
          this.image = image;
        }
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
      decls: 23,
      vars: 11,
      consts: [[1, "container"], [1, "row"], [1, "twelve", "columns", "u-centered"], [1, "twelve", "columns"], [1, "u-centered", 3, "src"], [1, "four", "columns", "offset-by-two"], [3, "ngModel", "ngModelChange", "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "four", "columns"], [3, "value", "selected"]],
      template: function GraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y Axis:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphComponent_Template_select_ngModelChange_15_listener($event) {
            return ctx.param1.name = $event;
          })("change", function GraphComponent_Template_select_change_15_listener() {
            return ctx.newGraph(ctx.param1, ctx.param2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GraphComponent_option_16_Template, 2, 3, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "X Axis:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.param2.name = $event;
          })("change", function GraphComponent_Template_select_change_21_listener() {
            return ctx.newGraph(ctx.param1, ctx.param2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GraphComponent_option_22_Template, 2, 3, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.param1.display), " graphed against ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.param2.display), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.param1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.param2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n\n@media (min-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 85%;\n    padding: 0;\n  }\n}\n\n@media (min-width: 550px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .column[_ngcontent-%COMP%], .columns[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n\n  .column[_ngcontent-%COMP%]:first-child, .columns[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n\n  .one.column[_ngcontent-%COMP%], .one.columns[_ngcontent-%COMP%] {\n    width: 4.6666666667%;\n  }\n\n  .two.columns[_ngcontent-%COMP%] {\n    width: 13.3333333333%;\n  }\n\n  .three.columns[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n\n  .four.columns[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .five.columns[_ngcontent-%COMP%] {\n    width: 39.3333333333%;\n  }\n\n  .six.columns[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  .seven.columns[_ngcontent-%COMP%] {\n    width: 56.6666666667%;\n  }\n\n  .eight.columns[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .nine.columns[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .ten.columns[_ngcontent-%COMP%] {\n    width: 82.6666666667%;\n  }\n\n  .eleven.columns[_ngcontent-%COMP%] {\n    width: 91.3333333333%;\n  }\n\n  .twelve.columns[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .one-third.column[_ngcontent-%COMP%] {\n    width: 30.6666666667%;\n  }\n\n  .two-thirds.column[_ngcontent-%COMP%] {\n    width: 65.3333333333%;\n  }\n\n  .one-half.column[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n\n  \n  .offset-by-one.column[_ngcontent-%COMP%], .offset-by-one.columns[_ngcontent-%COMP%] {\n    margin-left: 8.6666666667%;\n  }\n\n  .offset-by-two.column[_ngcontent-%COMP%], .offset-by-two.columns[_ngcontent-%COMP%] {\n    margin-left: 17.3333333333%;\n  }\n\n  .offset-by-three.column[_ngcontent-%COMP%], .offset-by-three.columns[_ngcontent-%COMP%] {\n    margin-left: 26%;\n  }\n\n  .offset-by-four.column[_ngcontent-%COMP%], .offset-by-four.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-five.column[_ngcontent-%COMP%], .offset-by-five.columns[_ngcontent-%COMP%] {\n    margin-left: 43.3333333333%;\n  }\n\n  .offset-by-six.column[_ngcontent-%COMP%], .offset-by-six.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n\n  .offset-by-seven.column[_ngcontent-%COMP%], .offset-by-seven.columns[_ngcontent-%COMP%] {\n    margin-left: 60.6666666667%;\n  }\n\n  .offset-by-eight.column[_ngcontent-%COMP%], .offset-by-eight.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-nine.column[_ngcontent-%COMP%], .offset-by-nine.columns[_ngcontent-%COMP%] {\n    margin-left: 78%;\n  }\n\n  .offset-by-ten.column[_ngcontent-%COMP%], .offset-by-ten.columns[_ngcontent-%COMP%] {\n    margin-left: 86.6666666667%;\n  }\n\n  .offset-by-eleven.column[_ngcontent-%COMP%], .offset-by-eleven.columns[_ngcontent-%COMP%] {\n    margin-left: 95.3333333333%;\n  }\n\n  .offset-by-one-third.column[_ngcontent-%COMP%], .offset-by-one-third.columns[_ngcontent-%COMP%] {\n    margin-left: 34.6666666667%;\n  }\n\n  .offset-by-two-thirds.column[_ngcontent-%COMP%], .offset-by-two-thirds.columns[_ngcontent-%COMP%] {\n    margin-left: 69.3333333333%;\n  }\n\n  .offset-by-one-half.column[_ngcontent-%COMP%], .offset-by-one-half.columns[_ngcontent-%COMP%] {\n    margin-left: 52%;\n  }\n}\n\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  \n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n\n@media (min-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 4.2rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 3.6rem;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n\n  h6[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #1EAEDB;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0FA0CE;\n}\n\n.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover, input[type=button][_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, input[type=submit][_ngcontent-%COMP%]:focus, input[type=reset][_ngcontent-%COMP%]:focus, input[type=button][_ngcontent-%COMP%]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.button-primary[_ngcontent-%COMP%], button.button-primary[_ngcontent-%COMP%], input[type=submit].button-primary[_ngcontent-%COMP%], input[type=reset].button-primary[_ngcontent-%COMP%], input[type=button].button-primary[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.button-primary[_ngcontent-%COMP%]:hover, button.button-primary[_ngcontent-%COMP%]:hover, input[type=submit].button-primary[_ngcontent-%COMP%]:hover, input[type=reset].button-primary[_ngcontent-%COMP%]:hover, input[type=button].button-primary[_ngcontent-%COMP%]:hover, .button.button-primary[_ngcontent-%COMP%]:focus, button.button-primary[_ngcontent-%COMP%]:focus, input[type=submit].button-primary[_ngcontent-%COMP%]:focus, input[type=reset].button-primary[_ngcontent-%COMP%]:focus, input[type=button].button-primary[_ngcontent-%COMP%]:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 100%;\n  padding: 6px 10px;\n  \n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\ninput[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\nlabel[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\nfieldset[_ngcontent-%COMP%] {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  display: inline;\n}\nlabel[_ngcontent-%COMP%]    > .label-body[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-weight: normal;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: circle inside;\n}\nol[_ngcontent-%COMP%] {\n  list-style: decimal inside;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 0;\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\ncode[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px;\n}\npre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1;\n}\nth[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\nth[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\nbutton[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\npre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], table[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n.u-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n}\n.u-max-full-width[_ngcontent-%COMP%] {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.u-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.u-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.u-centered[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1;\n}\n\n\n.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after, .u-cf[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoL0Q6XFxDb2RpbmdcXGhvbWVsZXNzbmVzcy1wcm9qZWN0XFxVQ0xBeC1EYXRhLVNjaWVuY2UtUHJvamVjdFxcd2Vic2l0ZS9zcmNcXGFwcFxcZ3JhcGhcXGdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztDQUFBO0FBVUE7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FBa0JBO29EQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURGSjtBQ0dFOztFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QURBSjtBQ0VFLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VEQ0o7QUFDRjtBQ0NFLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7RURDSjs7RUNBRTs7SUFFRSxlQUFBO0VER0o7O0VDRkU7O0lBRUUsY0FBQTtFREtKOztFQ0hFOztJQUNrQyxvQkFBQTtFRE9wQzs7RUNORTtJQUFrQyxxQkFBQTtFRFVwQzs7RUNURTtJQUFrQyxVQUFBO0VEYXBDOztFQ1pFO0lBQWtDLHFCQUFBO0VEZ0JwQzs7RUNmRTtJQUFrQyxxQkFBQTtFRG1CcEM7O0VDbEJFO0lBQWtDLFVBQUE7RURzQnBDOztFQ3JCRTtJQUFrQyxxQkFBQTtFRHlCcEM7O0VDeEJFO0lBQWtDLHFCQUFBO0VENEJwQzs7RUMzQkU7SUFBa0MsVUFBQTtFRCtCcEM7O0VDOUJFO0lBQWtDLHFCQUFBO0VEa0NwQzs7RUNqQ0U7SUFBa0MscUJBQUE7RURxQ3BDOztFQ3BDRTtJQUFrQyxXQUFBO0lBQWEsY0FBQTtFRHlDakQ7O0VDdkNFO0lBQWtDLHFCQUFBO0VEMkNwQzs7RUMxQ0U7SUFBa0MscUJBQUE7RUQ4Q3BDOztFQzVDRTtJQUFrQyxVQUFBO0VEZ0RwQzs7RUM5Q0UsWUFBQTtFQUNBOztJQUNrQywwQkFBQTtFRGtEcEM7O0VDakRFOztJQUNrQywyQkFBQTtFRHFEcEM7O0VDcERFOztJQUNrQyxnQkFBQTtFRHdEcEM7O0VDdkRFOztJQUNrQywyQkFBQTtFRDJEcEM7O0VDMURFOztJQUNrQywyQkFBQTtFRDhEcEM7O0VDN0RFOztJQUNrQyxnQkFBQTtFRGlFcEM7O0VDaEVFOztJQUNrQywyQkFBQTtFRG9FcEM7O0VDbkVFOztJQUNrQywyQkFBQTtFRHVFcEM7O0VDdEVFOztJQUNrQyxnQkFBQTtFRDBFcEM7O0VDekVFOztJQUNrQywyQkFBQTtFRDZFcEM7O0VDNUVFOztJQUNrQywyQkFBQTtFRGdGcEM7O0VDOUVFOztJQUNrQywyQkFBQTtFRGtGcEM7O0VDakZFOztJQUNrQywyQkFBQTtFRHFGcEM7O0VDbkZFOztJQUNrQyxnQkFBQTtFRHVGcEM7QUFDRjtBQ25GRTtvREFBQTtBQUVBOzt5REFBQTtBQUdBO0VBQ0UsZ0JBQUE7QURxRko7QUNwRkU7RUFDRSxnQkFBQTtFQUFrQix3RUFBQTtFQUNsQixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUZBQUE7RUFDQSxXQUFBO0FEd0ZKO0FDckZFO29EQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEd0ZKO0FDdkZFO0VBQUssZUFBQTtFQUFtQixnQkFBQTtFQUFtQix1QkFBQTtBRDZGN0M7QUM1RkU7RUFBSyxpQkFBQTtFQUFtQixpQkFBQTtFQUFtQix1QkFBQTtBRGtHN0M7QUNqR0U7RUFBSyxlQUFBO0VBQW1CLGdCQUFBO0VBQW1CLHVCQUFBO0FEdUc3QztBQ3RHRTtFQUFLLGlCQUFBO0VBQW1CLGlCQUFBO0VBQW1CLHdCQUFBO0FENEc3QztBQzNHRTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQW1CLHdCQUFBO0FEaUg3QztBQ2hIRTtFQUFLLGlCQUFBO0VBQW1CLGdCQUFBO0VBQW1CLGlCQUFBO0FEc0g3QztBQ3BIRSx3QkFBQTtBQUNBO0VBQ0U7SUFBSyxlQUFBO0VEd0hQOztFQ3ZIRTtJQUFLLGlCQUFBO0VEMkhQOztFQzFIRTtJQUFLLGlCQUFBO0VEOEhQOztFQzdIRTtJQUFLLGVBQUE7RURpSVA7O0VDaElFO0lBQUssaUJBQUE7RURvSVA7O0VDbklFO0lBQUssaUJBQUE7RUR1SVA7QUFDRjtBQ3JJRTtFQUNFLGFBQUE7QUR1SUo7QUNwSUU7b0RBQUE7QUFFQTtFQUNFLGNBQUE7QUR1SUo7QUN0SUU7RUFDRSxjQUFBO0FEeUlKO0FDdElFO29EQUFBO0FBRUE7Ozs7O0VBS0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR5SUo7QUN4SUU7Ozs7Ozs7Ozs7RUFVRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEMklKO0FDMUlFOzs7OztFQUtFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FENklKO0FDNUlFOzs7Ozs7Ozs7O0VBVUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUQrSUo7QUM1SUU7b0RBQUE7QUFFQTs7Ozs7Ozs7O0VBU0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUFtQiw2REFBQTtFQUNuQixzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEZ0pKO0FDL0lFLDBEQUFBO0FBQ0E7Ozs7Ozs7O0VBUUUsd0JBQUE7RUFDRyxxQkFBQTtFQUNLLGdCQUFBO0FEa0paO0FDakpFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEb0pKO0FDbkpFOzs7Ozs7Ozs7RUFTRSx5QkFBQTtFQUNBLFVBQUE7QURzSko7QUNySkU7O0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRHdKSjtBQ3ZKRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FEMEpKO0FDekpFOztFQUVFLGVBQUE7QUQ0Sko7QUMzSkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUQ4Sko7QUMzSkU7b0RBQUE7QUFFQTtFQUNFLHlCQUFBO0FEOEpKO0FDN0pFO0VBQ0UsMEJBQUE7QURnS0o7QUMvSkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBRGtLSjtBQ2pLRTs7OztFQUlFLDRCQUFBO0VBQ0EsY0FBQTtBRG9LSjtBQ25LRTtFQUNFLG1CQUFBO0FEc0tKO0FDbktFO29EQUFBO0FBRUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEc0tKO0FDcktFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUR3S0o7QUNyS0U7b0RBQUE7QUFFQTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUR3S0o7QUN2S0U7O0VBRUUsZUFBQTtBRDBLSjtBQ3pLRTs7RUFFRSxnQkFBQTtBRDRLSjtBQ3pLRTtvREFBQTtBQUVBOztFQUVFLG1CQUFBO0FENEtKO0FDM0tFOzs7O0VBSUUscUJBQUE7QUQ4S0o7QUM3S0U7Ozs7Ozs7OztFQVNFLHFCQUFBO0FEZ0xKO0FDL0tFO0VBQ0kscUJBQUE7QURrTE47QUNoTEU7b0RBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBRG1MSjtBQ2xMRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBRHFMSjtBQ3BMRTtFQUNFLFlBQUE7QUR1TEo7QUN0TEU7RUFDRSxXQUFBO0FEeUxKO0FDeExFO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEMkxOO0FDdkxFO29EQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FEMExKO0FDdkxFO29EQUFBO0FBR0EsMkJBQUE7QUFDQTs7O0VBR0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEeUxKO0FDdExFO29EQUFBO0FBRUE7Ozs7O0NBQUE7QUFRQSx1QkFBQTtBQUdBLDhEQUFBO0FBR0EsdUJBQUE7QUFHQSx3QkFBQTtBQUdBLDJCQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuKiBTa2VsZXRvbiBWMi4wLjRcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiogMTIvMjkvMjAxNFxuKi9cbi8qIFRhYmxlIG9mIGNvbnRlbnRzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcbi0gR3JpZFxuLSBCYXNlIFN0eWxlc1xuLSBUeXBvZ3JhcGh5XG4tIExpbmtzXG4tIEJ1dHRvbnNcbi0gRm9ybXNcbi0gTGlzdHNcbi0gQ29kZVxuLSBUYWJsZXNcbi0gU3BhY2luZ1xuLSBVdGlsaXRpZXNcbi0gQ2xlYXJpbmdcbi0gTWVkaWEgUXVlcmllc1xuKi9cbi8qIEdyaWRcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb2x1bW4sXG4uY29sdW1ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jb2x1bW4sXG4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG5cbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcbi5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5vbmUuY29sdW1uLFxuLm9uZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC50d28uY29sdW1ucyB7XG4gICAgd2lkdGg6IDEzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnRocmVlLmNvbHVtbnMge1xuICAgIHdpZHRoOiAyMiU7XG4gIH1cblxuICAuZm91ci5jb2x1bW5zIHtcbiAgICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuZml2ZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMzkuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuc2l4LmNvbHVtbnMge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuc2V2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDU2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmVpZ2h0LmNvbHVtbnMge1xuICAgIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5uaW5lLmNvbHVtbnMge1xuICAgIHdpZHRoOiA3NCU7XG4gIH1cblxuICAudGVuLmNvbHVtbnMge1xuICAgIHdpZHRoOiA4Mi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5lbGV2ZW4uY29sdW1ucyB7XG4gICAgd2lkdGg6IDkxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnR3ZWx2ZS5jb2x1bW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5vbmUtdGhpcmQuY29sdW1uIHtcbiAgICB3aWR0aDogMzAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAudHdvLXRoaXJkcy5jb2x1bW4ge1xuICAgIHdpZHRoOiA2NS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vbmUtaGFsZi5jb2x1bW4ge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAvKiBPZmZzZXRzICovXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxuLm9mZnNldC1ieS10d28uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNiU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxuLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXG4ub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1zaXguY29sdW1uLFxuLm9mZnNldC1ieS1zaXguY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUyJTtcbiAgfVxuXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcbi5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcbi5vZmZzZXQtYnktbmluZS5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNzglO1xuICB9XG5cbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxuLm9mZnNldC1ieS10ZW4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDg2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxuLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxuLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcbi5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcbi5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUyJTtcbiAgfVxufVxuLyogQmFzZSBTdHlsZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLyogTk9URVxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNWVtO1xuICAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi8qIFR5cG9ncmFwaHlcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy42cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wOHJlbTtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLyogTGFyZ2VyIHRoYW4gcGhhYmxldCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLyogTGlua3NcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuYSB7XG4gIGNvbG9yOiAjMUVBRURCO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwRkEwQ0U7XG59XG5cbi8qIEJ1dHRvbnNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmJ1dHRvbixcbmJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idXR0b246aG92ZXIsXG5idXR0b246aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXTpob3Zlcixcbi5idXR0b246Zm9jdXMsXG5idXR0b246Zm9jdXMsXG5pbnB1dFt0eXBlPXN1Ym1pdF06Zm9jdXMsXG5pbnB1dFt0eXBlPXJlc2V0XTpmb2N1cyxcbmlucHV0W3R5cGU9YnV0dG9uXTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItY29sb3I6ICM4ODg7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5idXR0b24uYnV0dG9uLXByaW1hcnksXG5idXR0b24uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeSB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xuICBib3JkZXItY29sb3I6ICMzM0MzRjA7XG59XG5cbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeTpob3Zlcixcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPXJlc2V0XS5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9YnV0dG9uXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBRURCO1xuICBib3JkZXItY29sb3I6ICMxRUFFREI7XG59XG5cbi8qIEZvcm1zXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPW51bWJlcl0sXG5pbnB1dFt0eXBlPXNlYXJjaF0sXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLFxuaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzLFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xuICBvdXRsaW5lOiAwO1xufVxuXG5sYWJlbCxcbmxlZ2VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmxhYmVsID4gLmxhYmVsLWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIExpc3RzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnVsIHtcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTtcbn1cblxub2wsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG51bCB1bCxcbnVsIG9sLFxub2wgb2wsXG5vbCB1bCB7XG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xufVxuXG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qIENvZGVcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuY29kZSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gIG1hcmdpbjogMCAwLjJyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnByZSA+IGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi8qIFRhYmxlc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG50aCxcbnRkIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTtcbn1cblxudGg6Zmlyc3QtY2hpbGQsXG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxudGg6bGFzdC1jaGlsZCxcbnRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4vKiBTcGFjaW5nXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmJ1dHRvbixcbi5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuZmllbGRzZXQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbnByZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmZpZ3VyZSxcbnRhYmxlLFxucCxcbnVsLFxub2wsXG5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi8qIFV0aWxpdGllc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4udS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi51LW1heC1mdWxsLXdpZHRoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udS1wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udS1wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnUtY2VudGVyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDkwJTtcbn1cblxuLyogTWlzY1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5ociB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTtcbn1cblxuLyogQ2xlYXJpbmdcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xuLmNvbnRhaW5lcjphZnRlcixcbi5yb3c6YWZ0ZXIsXG4udS1jZiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogTWVkaWEgUXVlcmllc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKlxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XG50aGVyZS5cbiovXG4vKiBMYXJnZXIgdGhhbiBtb2JpbGUgKi9cbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXG4vKiBMYXJnZXIgdGhhbiBEZXNrdG9wIEhEICovIiwiLypcclxuKiBTa2VsZXRvbiBWMi4wLjRcclxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXHJcbiogd3d3LmdldHNrZWxldG9uLmNvbVxyXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4qIDEyLzI5LzIwMTRcclxuKi9cclxuXHJcblxyXG4vKiBUYWJsZSBvZiBjb250ZW50c1xyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuLSBHcmlkXHJcbi0gQmFzZSBTdHlsZXNcclxuLSBUeXBvZ3JhcGh5XHJcbi0gTGlua3NcclxuLSBCdXR0b25zXHJcbi0gRm9ybXNcclxuLSBMaXN0c1xyXG4tIENvZGVcclxuLSBUYWJsZXNcclxuLSBTcGFjaW5nXHJcbi0gVXRpbGl0aWVzXHJcbi0gQ2xlYXJpbmdcclxuLSBNZWRpYSBRdWVyaWVzXHJcbiovXHJcblxyXG5cclxuLyogR3JpZFxyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAuY29sdW1uLFxyXG4gIC5jb2x1bW5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgXHJcbiAgLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBwYWRkaW5nOiAwOyB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDgwJTsgfVxyXG4gICAgLmNvbHVtbixcclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQlOyB9XHJcbiAgICAuY29sdW1uOmZpcnN0LWNoaWxkLFxyXG4gICAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxyXG4gIFxyXG4gICAgLm9uZS5jb2x1bW4sXHJcbiAgICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XHJcbiAgICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XHJcbiAgICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XHJcbiAgICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XHJcbiAgICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XHJcbiAgICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XHJcbiAgICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XHJcbiAgICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcbiAgXHJcbiAgICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XHJcbiAgICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XHJcbiAgXHJcbiAgICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxyXG4gIFxyXG4gICAgLyogT2Zmc2V0cyAqL1xyXG4gICAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS10d28uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxyXG4gICAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XHJcbiAgICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cclxuICAgIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cclxuICAgIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXHJcbiAgICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XHJcbiAgICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxyXG4gICAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxyXG4gIFxyXG4gICAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxyXG4gICAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcclxuICAgIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cclxuICBcclxuICAgIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxyXG4gICAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQmFzZSBTdHlsZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAvKiBOT1RFXHJcbiAgaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxyXG4gIGFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IH1cclxuICBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMyMjI7IH1cclxuICBcclxuICBcclxuICAvKiBUeXBvZ3JhcGh5XHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cclxuICBoMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XHJcbiAgaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxyXG4gIGg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxyXG4gIGg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxyXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cclxuICAgIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cclxuICAgIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cclxuICAgIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cclxuICAgIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cclxuICAgIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogTGlua3NcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBhIHtcclxuICAgIGNvbG9yOiAjMUVBRURCOyB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBGQTBDRTsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEJ1dHRvbnNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAuYnV0dG9uLFxyXG4gIGJ1dHRvbixcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbiAgLmJ1dHRvbjpob3ZlcixcclxuICBidXR0b246aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuICAuYnV0dG9uOmZvY3VzLFxyXG4gIGJ1dHRvbjpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gICAgb3V0bGluZTogMDsgfVxyXG4gIC5idXR0b24uYnV0dG9uLXByaW1hcnksXHJcbiAgYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnksXHJcbiAgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmJ1dHRvbi1wcmltYXJ5LFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyB9XHJcbiAgLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBidXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICBpbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXHJcbiAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICAuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEZvcm1zXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gIHRleHRhcmVhIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgfVxyXG4gIHRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDsgfVxyXG4gIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuICB0ZXh0YXJlYTpmb2N1cyxcclxuICBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcclxuICAgIG91dGxpbmU6IDA7IH1cclxuICBsYWJlbCxcclxuICBsZWdlbmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwOyB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cclxuICBsYWJlbCA+IC5sYWJlbC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cclxuICBcclxuICBcclxuICAvKiBMaXN0c1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cclxuICBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxyXG4gIG9sLCB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgdWwgdWwsXHJcbiAgdWwgb2wsXHJcbiAgb2wgb2wsXHJcbiAgb2wgdWwge1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogOTAlOyB9XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIENvZGVcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBjb2RlIHtcclxuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xyXG4gICAgbWFyZ2luOiAwIC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuICBwcmUgPiBjb2RlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlOyB9XHJcbiAgXHJcbiAgXHJcbiAgLyogVGFibGVzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XHJcbiAgdGg6Zmlyc3QtY2hpbGQsXHJcbiAgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XHJcbiAgdGg6bGFzdC1jaGlsZCxcclxuICB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cclxuICBcclxuICBcclxuICAvKiBTcGFjaW5nXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgYnV0dG9uLFxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCxcclxuICBmaWVsZHNldCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cclxuICBwcmUsXHJcbiAgYmxvY2txdW90ZSxcclxuICBkbCxcclxuICBmaWd1cmUsXHJcbiAgdGFibGUsXHJcbiAgcCxcclxuICB1bCxcclxuICBvbCxcclxuICBmb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfVxyXG4gIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgIH1cclxuICBcclxuICAvKiBVdGlsaXRpZXNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAudS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC51LW1heC1mdWxsLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuICAudS1wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDsgfVxyXG4gIC51LXB1bGwtbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDsgfVxyXG4gIC51LWNlbnRlcmVkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIE1pc2NcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBociB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cclxuICBcclxuICBcclxuICAvKiBDbGVhcmluZ1xyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIFxyXG4gIC8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cclxuICAuY29udGFpbmVyOmFmdGVyLFxyXG4gIC5yb3c6YWZ0ZXIsXHJcbiAgLnUtY2Yge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7IH1cclxuICBcclxuICBcclxuICAvKiBNZWRpYSBRdWVyaWVzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgLypcclxuICBOb3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcclxuICBuZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xyXG4gIG9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxyXG4gIHRoZXJlLlxyXG4gICovXHJcbiAgXHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxyXG4gIFxyXG4gIC8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cclxuICBcclxuICAvKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XHJcbiAgXHJcbiAgLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XHJcbiAgIl19 */"]
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
    /*! D:\Coding\homelessness-project\UCLAx-Data-Science-Project\website\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map