"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["main"],{

/***/ 6911:
/*!************************************************!*\
  !*** ./src/@core/animations/core.animation.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInLeft": function() { return /* binding */ fadeInLeft; },
/* harmony export */   "zoomIn": function() { return /* binding */ zoomIn; },
/* harmony export */   "fadeIn": function() { return /* binding */ fadeIn; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 6755);

// Animation: FadeInLeft
var fadeInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(100%)'
}))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('800ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(0%)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()], {
  optional: true
})])])]);
// Animation: ZoomIn
var zoomIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('zoomIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0,
  transform: 'scale(0.5) translateY(-20%)'
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem',
  transform: 'scale(1) translateY(0)'
}))], {
  optional: true
})])]);
// Animation: FadeIn
var fadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem'
}))], {
  optional: true
})])]);

/***/ }),

/***/ 1705:
/*!************************************!*\
  !*** ./src/@core/common.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreCommonModule": function() { return /* binding */ CoreCommonModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 8001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/directives */ 5448);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/pipes.module */ 324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);








var CoreCommonModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreCommonModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreCommonModule);
});
CoreCommonModule.ɵfac = function CoreCommonModule_Factory(t) {
  return new (t || CoreCommonModule)();
};
CoreCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreCommonModule
});
CoreCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreCommonModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule]
  });
})();

/***/ }),

/***/ 4557:
/*!***************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuComponent": function() { return /* binding */ CoreMenuComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 8428);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 8425);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 6922);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 8210);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 769);














var _c0 = ["core-menu", ""];
function CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 5);
  }
  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}
var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};
var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};
var _c3 = function _c3() {
  return [];
};
var _c4 = function _c4(a0) {
  return [a0];
};
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }
  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10);
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r3.children);
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r3.disabled === true))("routerLinkActive", !item_r3.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r3.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r3.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r3.url));
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }
  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}
function CoreMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template, 1, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "collapsible");
  }
}
function CoreMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
  }
}
function CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}
function CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r19.disabled === true))("routerLinkActive", !item_r19.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r19.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r19.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r19.url));
  }
}
function CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}
function CoreMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template, 1, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "collapsible");
  }
}
function CoreMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.menu);
  }
}
var CoreMenuComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuComponent(_changeDetectorRef, _coreMenuService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuComponent);
    this._changeDetectorRef = _changeDetectorRef;
    this._coreMenuService = _coreMenuService;
    this.layout = 'vertical';
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Set the menu either from the input or from the service
      this.menu = this.menu || this._coreMenuService.getCurrentMenu();
      // Subscribe to the current menu changes
      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
        // Load menu
        _this.menu = _this._coreMenuService.getCurrentMenu();
        _this._changeDetectorRef.markForCheck();
      });
    }
  }]);
  return CoreMenuComponent;
}();
CoreMenuComponent.ɵfac = function CoreMenuComponent_Factory(t) {
  return new (t || CoreMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__.CoreMenuService));
};
CoreMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CoreMenuComponent,
  selectors: [["", "core-menu", ""]],
  inputs: {
    layout: "layout",
    menu: "menu"
  },
  attrs: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["core-menu-vertical-section", "", "class", "navigation-header", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-section", "", 1, "navigation-header", 3, "item"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"], ["core-menu-horizontal-collapsible", "", "class", "dropdown nav-item", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "nav-item", 3, "item"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CoreMenuComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalItemComponent],
  styles: [".vertical-layout:not(.vertical-overlay-menu) .main-menu:not(.expanded) .nav-item.has-sub.open .menu-content {\n  display: none;\n}\n\n.nav-item.disabled {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQUNFLGFBQUE7QUFIUjs7QUFTRTtFQUNFLGFBQUE7QUFOSiIsImZpbGUiOiJjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSGlkZSBjb2xsYXBzaWJsZSBtZW51IHdoaWxlIG1lbnUgaXMgY29sbGFwc2VkXHJcbi52ZXJ0aWNhbC1sYXlvdXQ6bm90KC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUpIHtcclxuICAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIHtcclxuICAgIC5uYXYtaXRlbS5oYXMtc3ViLm9wZW4ge1xyXG4gICAgICAubWVudS1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 7702:
/*!************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* binding */ CoreMenuModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 4557);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 8428);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 8425);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 6922);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 769);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 8210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);














_core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalSectionComponent;
_core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent;
_core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuVerticalCollapsibleComponent;
var CoreMenuModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuModule);
});
CoreMenuModule.ɵfac = function CoreMenuModule_Factory(t) {
  return new (t || CoreMenuModule)();
};
CoreMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: CoreMenuModule
});
CoreMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(), _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CoreMenuModule, {
    declarations: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuComponent, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalItemComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_8__.CoreMenuHorizontalCollapsibleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuComponent]
  });
})();

/***/ }),

/***/ 8029:
/*!*************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuService": function() { return /* binding */ CoreMenuService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/service */ 3650);






var CoreMenuService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  function CoreMenuService(_router, _authenticationService) {
    var _this = this;
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuService);
    this._router = _router;
    this._authenticationService = _authenticationService;
    this._registry = {};
    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    });
    // Set defaults
    this.onItemCollapsed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.onItemCollapseToggled = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // Set private defaults
    this._currentMenuKey = null;
    this._onMenuRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuUnregistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
  }
  // Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * onMenuRegistered
   *
   * @returns {Observable<any>}
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuService, [{
    key: "onMenuRegistered",
    get: function get() {
      return this._onMenuRegistered.asObservable();
    }
    /**
     * onMenuUnregistered
     *
     * @returns {Observable<any>}
     */
  }, {
    key: "onMenuUnregistered",
    get: function get() {
      return this._onMenuUnregistered.asObservable();
    }
    /**
     * onMenuChanged
     *
     * @returns {Observable<any>}
     */
  }, {
    key: "onMenuChanged",
    get: function get() {
      return this._onMenuChanged.asObservable();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register the provided menu with the provided key
     *
     * @param key
     * @param menu
     */
  }, {
    key: "register",
    value: function register(key, menu) {
      // Confirm if the key already used
      if (this._registry[key]) {
        console.error("Menu with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      }
      // Add to registry
      this._registry[key] = menu;
      // Notify subject
      this._onMenuRegistered.next([key, menu]);
    }
    /**
     * Unregister the menu from the registry
     *
     * @param key
     */
  }, {
    key: "unregister",
    value: function unregister(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
      }
      // Unregister sidebar
      delete this._registry[key];
      // Notify subject
      this._onMenuUnregistered.next(key);
    }
    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */
  }, {
    key: "getMenu",
    value: function getMenu(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      }
      // Return sidebar
      return this._registry[key];
    }
    /**
     * Get current menu
     *
     * @returns {any}
     */
  }, {
    key: "getCurrentMenu",
    value: function getCurrentMenu() {
      if (!this._currentMenuKey) {
        console.warn("The current menu is not set.");
        return;
      }
      return this.getMenu(this._currentMenuKey);
    }
    /**
     * Set menu with the key as the current menu
     *
     * @param key
     */
  }, {
    key: "setCurrentMenu",
    value: function setCurrentMenu(key) {
      // Confirm if the sidebar exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      }
      // Set current menu key
      this._currentMenuKey = key;
      // Notify subject
      this._onMenuChanged.next(key);
    }
  }]);
  return CoreMenuService;
}();
CoreMenuService.ɵfac = function CoreMenuService_Factory(t) {
  return new (t || CoreMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};
CoreMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMenuService,
  factory: CoreMenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8210:
/*!****************************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/collapsible/collapsible.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalCollapsibleComponent": function() { return /* binding */ CoreMenuHorizontalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 5724);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 769);















var _c0 = ["core-menu-horizontal-collapsible", ""];
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("ngClass", ctx_r1.item.type == "section" ? "dropdown-toggle nav-link" : "dropdown-item dropdown-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 9);
  }
  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data-feather", ctx_r6.item.icon);
  }
}
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.item.title);
  }
}
var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};
var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};
var _c3 = function _c3() {
  return [];
};
var _c4 = function _c4(a0) {
  return [a0];
};
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, item_r7.disabled === true))("routerLinkActive", !item_r7.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c2, item_r7.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", item_r7.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c4, item_r7.url));
  }
}
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7);
  }
}
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "collapsible");
  }
}
var _c5 = function _c5(a0) {
  return {
    show: a0
  };
};
function CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template, 2, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c5, ctx_r0.isShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}
var CoreMenuHorizontalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuHorizontalCollapsibleComponent(el, _router, _coreConfigService, _coreMenuService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuHorizontalCollapsibleComponent);
    this.el = el;
    this._router = _router;
    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this.isShow = false;
    // Conditionally add the active classes if UrlInChildren
    this.isActive = false;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuHorizontalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
      // Subscribe to the current menu changes
      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      });
      // Listen for router events and expand
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.isActive = true;
        } else {
          _this.isActive = false;
        }
      });
      // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)
      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open
     */
  }, {
    key: "show",
    value: function show() {
      this.isShow = true;
      this.setSubMenuProp();
    }
    /**
     * Close
     */
  }, {
    key: "hide",
    value: function hide() {
      this.isShow = false;
    }
    /**
     * Set sub-menu properties based on screen size
     *
     */
  }, {
    key: "setSubMenuProp",
    value: function setSubMenuProp() {
      var _this2 = this;
      setTimeout(function () {
        var nativeElement = _this2.el.nativeElement,
          nativeElementChildren = _this2.el.nativeElement.children[1];
        // If element has sub menu
        if (nativeElement.classList.contains('dropdown-submenu')) {
          var innerHeight = window.innerHeight,
            dropdownTop = nativeElementChildren.getBoundingClientRect().top,
            dropdownLeft = nativeElementChildren.getBoundingClientRect().left,
            dropdownHeight = nativeElementChildren.scrollHeight,
            dropdownWidth = nativeElementChildren.scrollWidth;
          //Set sub-menu height
          if (innerHeight - dropdownTop - dropdownHeight - 28 < 1) {
            var maxHeight = innerHeight - dropdownTop - 25;
            nativeElementChildren.setAttribute('style', 'overflow-y: auto; overflow-x: hidden; max-height : ' + maxHeight + 'px');
          }
          // Open sub-menu on left based on screen size (To avoid opn sub-menu outside of the screen)
          if (dropdownLeft + dropdownWidth - (window.innerWidth - 16) >= 0) {
            nativeElementChildren.parentElement.classList.add('openLeft');
          }
        }
      });
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children;
      // Return false if parent don't have any children
      if (!children) {
        return false;
      }
      // Loop all the children
      var _iterator = (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          }
          // If child.url is same as provided url
          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  }]);
  return CoreMenuHorizontalCollapsibleComponent;
}();
CoreMenuHorizontalCollapsibleComponent.ɵfac = function CoreMenuHorizontalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuHorizontalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__.CoreMenuService));
};
CoreMenuHorizontalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalCollapsibleComponent,
  selectors: [["", "core-menu-horizontal-collapsible", ""]],
  hostVars: 6,
  hostBindings: function CoreMenuHorizontalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function CoreMenuHorizontalCollapsibleComponent_mouseenter_HostBindingHandler() {
        return ctx.show();
      })("mouseleave", function CoreMenuHorizontalCollapsibleComponent_mouseleave_HostBindingHandler() {
        return ctx.hide();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.isActive)("open", ctx.isActive)("sidebar-group-active", ctx.isActive);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuHorizontalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, CoreMenuHorizontalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 769:
/*!**************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/item/item.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalItemComponent": function() { return /* binding */ CoreMenuHorizontalItemComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);








var _c0 = ["core-menu-horizontal-item", ""];
function CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
var _c1 = function _c1(a0) {
  return [a0];
};
function CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}
function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.item.title);
  }
}
function CoreMenuHorizontalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}
var CoreMenuHorizontalItemComponent = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuHorizontalItemComponent() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuHorizontalItemComponent);
});
CoreMenuHorizontalItemComponent.ɵfac = function CoreMenuHorizontalItemComponent_Factory(t) {
  return new (t || CoreMenuHorizontalItemComponent)();
};
CoreMenuHorizontalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalItemComponent,
  selectors: [["", "core-menu-horizontal-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"]],
  template: function CoreMenuHorizontalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 6922:
/*!**************************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/collapsible/collapsible.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalCollapsibleComponent": function() { return /* binding */ CoreMenuVerticalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 5724);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 8425);














var _c0 = ["core-menu-vertical-collapsible", ""];
function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r6.toggleOpen($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 10);
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", ctx_r8.item.icon);
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r9.item.badge.translate)("ngClass", ctx_r9.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.item.badge.title, " ");
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template, 2, 3, "span", 9);
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.badge);
  }
}
var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};
var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};
var _c3 = function _c3() {
  return [];
};
var _c4 = function _c4(a0) {
  return [a0];
};
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 16);
  }
  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10);
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible");
  }
}
function CoreMenuVerticalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}
var CoreMenuVerticalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreMenuService} _coreMenuService
   * @param {ChangeDetectorRef} _changeDetectorRef
   */
  function CoreMenuVerticalCollapsibleComponent(_router, _coreMenuService, _changeDetectorRef) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalCollapsibleComponent);
    this._router = _router;
    this._coreMenuService = _coreMenuService;
    this._changeDetectorRef = _changeDetectorRef;
    this.isOpen = false;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuVerticalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Listen for router events and expand
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.expand();
        } else {
          _this.collapse();
        }
      });
      // Subscribe to the current menu changes
      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      });
      // Listen for collapsing of any menu item
      this._coreMenuService.onItemCollapsed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (clickedItem) {
        if (clickedItem && clickedItem.children) {
          // Check if the clicked item is one of the children of this item
          if (_this.confirmItemInChildren(_this.item, clickedItem)) {
            return;
          }
          // Check if the url can be found in one of the children of this item
          if (_this.confirmUrlInChildren(_this.item, _this._router.url)) {
            return;
          }
          // If the clicked item is not this item, collapse...
          if (_this.item !== clickedItem) {
            _this.collapse();
          }
        }
      });
      // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)
      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.expand();
      } else {
        this.collapse();
      }
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle collapse
     *
     * @param e
     */
  }, {
    key: "toggleOpen",
    value: function toggleOpen(e) {
      e.preventDefault();
      this.isOpen = !this.isOpen;
      // Menu collapse toggled...
      this._coreMenuService.onItemCollapsed.next(this.item);
      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Expand the collapsible menu
     */
  }, {
    key: "expand",
    value: function expand() {
      if (this.isOpen) {
        return;
      }
      this.isOpen = true;
      // Mark for check
      this._changeDetectorRef.markForCheck();
      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Collapse the collapsible menu
     */
  }, {
    key: "collapse",
    value: function collapse() {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
      // Mark for check
      this._changeDetectorRef.markForCheck();
      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children;
      // Return false if parent don't have any children
      if (!children) {
        return false;
      }
      // Loop all the children
      var _iterator = (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          }
          // If child.url is same as provided url
          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
    /**
     * Check if the provided parent has the provided item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */
  }, {
    key: "confirmItemInChildren",
    value: function confirmItemInChildren(parent, item) {
      var children = parent.children;
      // Return false if parent don't have any children
      if (!children) {
        return false;
      }
      // Return true parent has the provided item in one of its children
      if (children.indexOf(item) > -1) {
        return true;
      }
      var _iterator2 = (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          if (child.children) {
            // Call function again with child (for sub to sub item)
            if (this.confirmItemInChildren(child, item)) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
  }]);
  return CoreMenuVerticalCollapsibleComponent;
}();
CoreMenuVerticalCollapsibleComponent.ɵfac = function CoreMenuVerticalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuVerticalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};
CoreMenuVerticalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalCollapsibleComponent,
  selectors: [["", "core-menu-vertical-collapsible", ""]],
  hostVars: 2,
  hostBindings: function CoreMenuVerticalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.isOpen);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "click", 4, "ngIf"], ["itemContent", ""], [1, "menu-content"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"]],
  template: function CoreMenuVerticalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, CoreMenuVerticalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8425:
/*!************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/item/item.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalItemComponent": function() { return /* binding */ CoreMenuVerticalItemComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);








var _c0 = ["core-menu-vertical-item", ""];
function CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
var _c1 = function _c1(a0) {
  return [a0];
};
function CoreMenuVerticalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r8.item.badge.translate)("ngClass", ctx_r8.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.item.badge.title, " ");
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template, 2, 3, "span", 9);
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.badge);
  }
}
function CoreMenuVerticalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreMenuVerticalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}
var CoreMenuVerticalItemComponent = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuVerticalItemComponent() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalItemComponent);
});
CoreMenuVerticalItemComponent.ɵfac = function CoreMenuVerticalItemComponent_Factory(t) {
  return new (t || CoreMenuVerticalItemComponent)();
};
CoreMenuVerticalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalItemComponent,
  selectors: [["", "core-menu-vertical-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"]],
  template: function CoreMenuVerticalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 8428:
/*!******************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/section/section.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalSectionComponent": function() { return /* binding */ CoreMenuVerticalSectionComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);






var _c0 = ["core-menu-vertical-section", ""];
function CoreMenuVerticalSectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", ctx_r0.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data-feather", "more-horizontal");
  }
}
var CoreMenuVerticalSectionComponent = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreMenuVerticalSectionComponent() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalSectionComponent);
});
CoreMenuVerticalSectionComponent.ɵfac = function CoreMenuVerticalSectionComponent_Factory(t) {
  return new (t || CoreMenuVerticalSectionComponent)();
};
CoreMenuVerticalSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalSectionComponent,
  selectors: [["", "core-menu-vertical-section", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "navigation-section-text", 3, "translate"], [3, "data-feather"]],
  template: function CoreMenuVerticalSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CoreMenuVerticalSectionComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 9039:
/*!*********************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarComponent": function() { return /* binding */ CoreSidebarComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/media.service */ 216);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 5224);













var _c0 = ["*"];
var CoreSidebarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMediaService} _coreMediaService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {AnimationBuilder} _animationBuilder
   * @param {MediaObserver} _mediaObserver
   */
  function CoreSidebarComponent(document, _renderer, _elementRef, _coreConfigService, _changeDetectorRef, _coreMediaService, _coreSidebarService, _animationBuilder, _mediaObserver) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarComponent);
    this.document = document;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._changeDetectorRef = _changeDetectorRef;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._animationBuilder = _animationBuilder;
    this._mediaObserver = _mediaObserver;
    this._overlay = null;
    // Set Defaults
    this.isOpened = false;
    this.overlayVisibility = true;
    this.hideOnEsc = false;
    // Layout root element
    this.rootElement = this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];
    this.collapsedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.openedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    // Set Private Defaults
    this._collapsed = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarComponent, [{
    key: "onKeydownHandler",
    value: function onKeydownHandler(event) {
      if (this.hideOnEsc) {
        this.close();
      }
    }
    // Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Collapsed
     *
     * @param {boolean} value
     */
  }, {
    key: "collapsed",
    get: function get() {
      return this._collapsed;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */,
    set: function set(value) {
      // Set the collapsed value
      this._collapsed = value;
      // If the sidebar is closed, return
      if (!this.isOpened) {
        this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default
        return;
      }
      // If Collapsed
      if (value) {
        // Collapse the sidebar
        this.collapse();
        // Add menu-collapsed in body and remove menu-expanded
        this.rootElement.classList.add('menu-collapsed');
        this.rootElement.classList.remove('menu-expanded');
      }
      // If Expanded
      else {
        // Expanded the sidebar
        this.expand();
        // Add menu-expanded in body and remove menu-collapsed
        this.rootElement.classList.add('menu-expanded');
        this.rootElement.classList.remove('menu-collapsed');
      }
      // Emit the 'collapsedChangedEvent' event
      this.collapsedChangedEvent.emit(this.collapsed);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe to app-config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfig = config;
        if (config.layout.type == 'vertical') {
          _this.menuClass = 'vertical-menu-modern';
        } else {
          _this.menuClass = 'horizontal-menu';
        }
      });
      // Register the sidebar
      this._coreSidebarService.setSidebarRegistry(this.name, this);
      // Setup collapsibleSidebar
      this._setupCollapsibleSidebar();
      // Default collapsed
      this._defaultCollapsed();
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // If the sidebar is collapsed, expand it to reset changes
      if (this.collapsed) {
        this.expand();
      }
      // Remove sidebar registry
      this._coreSidebarService.removeSidebarRegistry(this.name);
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    // Private Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setup the collapsible sidebar handler
     *
     * @private
     */
  }, {
    key: "_setupCollapsibleSidebar",
    value: function _setupCollapsibleSidebar() {
      var _this2 = this;
      // Return if the collapsible sidebar breakpoint was not set from the layout
      if (!this.collapsibleSidebar) {
        return;
      }
      // Set the _wasCollapsible false for the first time
      this._wasCollapsible = false;
      // Set the wasCollapsed from the layout
      this._wasCollapsed = this.collapsed;
      // On every media(screen) change
      this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        // Get the collapsible status
        var isCollapsible = _this2._mediaObserver.isActive(_this2.collapsibleSidebar);
        //! On screen resize set the config collapsed state if we have else this.collapsed
        _this2._wasCollapsed = _this2._coreConfig.layout.menu.collapsed || _this2.collapsed;
        // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)
        // ? Improve this menu condition
        if (!isCollapsible && _this2.name === 'menu') {
          _this2.rootElement.classList.remove(_this2.menuClass);
          _this2.rootElement.classList.add('vertical-overlay-menu');
        }
        // If the both status are the same, then return
        if (_this2._wasCollapsible === isCollapsible) {
          return;
        }
        // If isCollapsible is true, use collapsible sidebar
        if (isCollapsible) {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = true;
          // Set the the opened status to true
          _this2.isOpened = true;
          _this2.expanded = true; // Adde expanded class init
          // Emit the 'openedChangedEvent' event
          _this2.openedChangedEvent.emit(_this2.isOpened);
          // If the sidebar was collapsed, forcefully collapse it again
          if (_this2._wasCollapsed) {
            // Collapse
            _this2.collapsed = true;
            _this2.expanded = false; // Remove expanded class
            // Change detector
            _this2._changeDetectorRef.markForCheck();
          }
          // If sidebar is collapsible, switch to collapsible menu (modern-menu)
          if (_this2.name === 'menu') {
            _this2.rootElement.classList.add(_this2.menuClass);
            _this2.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');
          }
          // Hide the overlay if any exists
          _this2._hideOverlay();
        }
        // Else use overlay sidebar
        else {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = false;
          // Expanded the sidebar in case if it was collapsed
          _this2.expand();
          // Force the the opened status to close
          _this2.isOpened = false;
          // Emit the 'openedChangedEvent' event
          _this2.openedChangedEvent.emit(_this2.isOpened);
          // If sidebar is not collapsible, switch to overlay menu (On window resize)
          _this2.rootElement.classList.remove(_this2.menuClass);
          _this2.rootElement.classList.add('vertical-overlay-menu');
          // Hide the sidebar
          _this2._hideSidebar();
        }
        // Set the new active status
        _this2._wasCollapsible = isCollapsible;
      });
    }
    /**
     * Setup the initial collapsed status
     *
     * @private
     */
  }, {
    key: "_defaultCollapsed",
    value: function _defaultCollapsed() {
      // Return, if sidebar is not collapsed
      if (!this.collapsed) {
        return;
      }
      // Return if the sidebar is closed
      if (!this.isOpened) {
        return;
      }
      // Collapse the sidebar
      this.collapse();
    }
    /**
     * Show the overlay
     *
     * @private
     */
  }, {
    key: "_showOverlay",
    value: function _showOverlay() {
      var _this3 = this;
      // Create the overlay element
      this._overlay = this._renderer.createElement('div');
      // Add a class to the overlay element and make it visible
      this._overlay.classList.add(this.overlayClass);
      this._overlay.classList.add('show');
      // If overlayVisibility is false, set the bg transparent
      if (!this.overlayVisibility) {
        this._overlay.classList.add('bg-transparent');
      }
      // Append the overlay element to the parent element of the sidebar
      this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
      // Overlay enter animation and attach it to the animationPlayer
      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1
      }))]).create(this._overlay);
      // Play the overlay animation
      this._animationPlayer.play();
      // Add an event listener to the overlay, on click of it close the sidebar
      this._overlay.addEventListener('click', function () {
        _this3.close();
      });
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Hide the overlay
     *
     * @private
     */
  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      var _this4 = this;
      // If overlay is already hidden, return
      if (!this._overlay) {
        return;
      }
      // Overlay leave animation and attach it to the animationPlayer
      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))]).create(this._overlay);
      // Play the overlay leave animation
      this._animationPlayer.play();
      // Once the animation is done...
      this._animationPlayer.onDone(function () {
        // If the overlay still exists...
        if (_this4._overlay) {
          // Remove the overlay
          _this4._overlay.parentNode.removeChild(_this4._overlay);
          _this4._overlay = null;
        }
      });
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it visible
     *
     * @private
     */
  }, {
    key: "_showSidebar",
    value: function _showSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Open overlay menu
        this.rootElement.classList.add('menu-open');
        this.rootElement.classList.remove('menu-hide');
      }
      // For default sidebar add show class to make it visible
      else {
        this._renderer.addClass(this._elementRef.nativeElement, 'show');
        // Add .modal-open from body to remove browser scroll
        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.add('modal-open');
        }
      }
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it invisible
     *
     * @private
     */
  }, {
    key: "_hideSidebar",
    value: function _hideSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Hide overlay menu
        this.rootElement.classList.remove('menu-open');
        this.rootElement.classList.add('menu-hide');
      }
      // For default sidebar remove show class to make it visible
      else {
        this._renderer.removeClass(this._elementRef.nativeElement, 'show');
        // Remove .modal-open from body
        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.remove('modal-open');
        }
      }
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // For Collapsible Sidebar
    /**
     * Collapse the temporarily expanded sidebar
     */
  }, {
    key: "collapseTemporarily",
    value: function collapseTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      }
      // Collapse the sidebar back
      this.expanded = false;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar temporarily
     */
  }, {
    key: "expandTemporarily",
    value: function expandTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      }
      // Expanded the sidebar temporarily
      this.expanded = true;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * On Sidebar's Mouseenter Event
     */
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      // Expand the sidebar temporarily
      this.expandTemporarily();
    }
    /**
     * On Sidebar's Mouseleave Event
     */
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      // Collapse the sidebar temporarily
      this.collapseTemporarily();
    }
    /**
     * Collapse the sidebar permanently
     */
  }, {
    key: "collapse",
    value: function collapse() {
      // If the sidebar is not collapsed
      if (this.collapsed) {
        return;
      }
      // Set collapse true
      this.collapsed = true;
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar permanently
     */
  }, {
    key: "expand",
    value: function expand() {
      // If the sidebar is collapsed
      if (!this.collapsed) {
        return;
      }
      // Set collapse false (expanded)
      this.collapsed = false;
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle the sidebar expand/collapse permanently
     */
  }, {
    key: "toggleCollapsible",
    value: function toggleCollapsible() {
      if (this.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    }
    // For Overlay Sidebar
    /**
     * Open the sidebar
     */
  }, {
    key: "open",
    value: function open() {
      // If sidebar already open or collapsible, then return
      if (this.isOpened || this.iscollapsibleSidebar) {
        return;
      }
      // Show the sidebar
      this._showSidebar();
      // Show the overlay
      this._showOverlay();
      // Set the sidebar opened status
      this.isOpened = true;
      // Emit the 'openedChangedEvent' event
      this.openedChangedEvent.emit(this.isOpened);
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Close the sidebar
     */
  }, {
    key: "close",
    value: function close() {
      // If sidebar is not open or collapsible, then return
      if (!this.isOpened || this.iscollapsibleSidebar) {
        return;
      }
      // Hide the overlay
      this._hideOverlay();
      // Set the opened status
      this.isOpened = false;
      // Emit the 'openedChangedEvent' event
      this.openedChangedEvent.emit(this.isOpened);
      // Hide overlay menu
      this._hideSidebar();
      // Change detector
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle open/close the sidebar
     */
  }, {
    key: "toggleOpen",
    value: function toggleOpen() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
  }]);
  return CoreSidebarComponent;
}();
CoreSidebarComponent.ɵfac = function CoreSidebarComponent_Factory(t) {
  return new (t || CoreSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_3__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_8__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.MediaObserver));
};
CoreSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreSidebarComponent,
  selectors: [["core-sidebar"]],
  hostVars: 2,
  hostBindings: function CoreSidebarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function CoreSidebarComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mouseenter", function CoreSidebarComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CoreSidebarComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded", ctx.expanded);
    }
  },
  inputs: {
    name: "name",
    overlayClass: "overlayClass",
    collapsibleSidebar: "collapsibleSidebar",
    overlayVisibility: "overlayVisibility",
    hideOnEsc: "hideOnEsc",
    collapsed: "collapsed"
  },
  outputs: {
    collapsedChangedEvent: "collapsedChangedEvent",
    openedChangedEvent: "openedChangedEvent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CoreSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3207:
/*!******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarModule": function() { return /* binding */ CoreSidebarModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




var CoreSidebarModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreSidebarModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreSidebarModule);
});
CoreSidebarModule.ɵfac = function CoreSidebarModule_Factory(t) {
  return new (t || CoreSidebarModule)();
};
CoreSidebarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreSidebarModule
});
CoreSidebarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreSidebarModule, {
    declarations: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarComponent],
    exports: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarComponent]
  });
})();

/***/ }),

/***/ 6528:
/*!*******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarService": function() { return /* binding */ CoreSidebarService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



var CoreSidebarService = /*#__PURE__*/function () {
  function CoreSidebarService() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarService);
    // Private
    this._registry = {};
  }
  /**
   * Get the sidebar with the given key
   *
   * @param key
   * @returns {CoreSidebarComponent}
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarService, [{
    key: "getSidebarRegistry",
    value: function getSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      }
      // Return the sidebar
      return this._registry[key];
    }
    /**
     * Set the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */
  }, {
    key: "setSidebarRegistry",
    value: function setSidebarRegistry(key, sidebar) {
      // Check if the key already being used
      if (this._registry[key]) {
        console.error("The sidebar with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      }
      // Set to the registry
      this._registry[key] = sidebar;
    }
    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */
  }, {
    key: "removeSidebarRegistry",
    value: function removeSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
      }
      // Unregister the sidebar
      delete this._registry[key];
    }
  }]);
  return CoreSidebarService;
}();
CoreSidebarService.ɵfac = function CoreSidebarService_Factory(t) {
  return new (t || CoreSidebarService)();
};
CoreSidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreSidebarService,
  factory: CoreSidebarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6533:
/*!*************************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinComponent": function() { return /* binding */ CoreTouchspinComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);








function CoreTouchspinComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 8);
  }
}
function CoreTouchspinComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
}
function CoreTouchspinComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
}
function CoreTouchspinComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 11);
  }
}
var _c0 = function _c0(a0, a1) {
  return {
    "touchspin-sm": a0,
    "touchspin-lg": a1
  };
};
var _c1 = function _c1(a0, a1, a2, a3) {
  return {
    "btn-info": a0,
    "btn-warning": a1,
    "btn-success": a2,
    "btn-danger": a3
  };
};
var CoreTouchspinComponent = /*#__PURE__*/function () {
  function CoreTouchspinComponent() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTouchspinComponent);
    this.numberValue = 0;
    this.iconChevron = false;
    this.disabledValue = false;
    this.size = '';
    this.color = '';
    this.maxValue = 9999;
    this.minValue = 0;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.disabledValueIncrement = false;
    this.disabledValueDecrement = false;
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTouchspinComponent, [{
    key: "inputChange",
    value: function inputChange(inputValue) {
      if (inputValue == this.maxValue || inputValue > this.maxValue) {
        this.disabledValueIncrement = true;
      } else {
        this.disabledValueIncrement = false;
      }
      if (inputValue == this.minValue || inputValue < this.minValue) {
        this.disabledValueDecrement = true;
      } else {
        this.disabledValueDecrement = false;
      }
      this.emitChange(inputValue);
    }
  }, {
    key: "increment",
    value: function increment() {
      if (this.stepValue == undefined) {
        this.numberValue += 1;
      } else {
        this.numberValue += this.stepValue;
      }
      this.emitChange(this.numberValue);
      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.maxValue || this.numberValue > this.maxValue) {
          this.disabledValueIncrement = true;
        } else {
          this.disabledValueIncrement = false;
        }
        if (this.numberValue > this.minValue) {
          this.disabledValueDecrement = false;
        } else {
          this.disabledValueDecrement = true;
        }
      }
    }
  }, {
    key: "decrement",
    value: function decrement() {
      if (this.stepValue == undefined) {
        this.numberValue -= 1;
      } else {
        this.numberValue -= this.stepValue;
      }
      this.emitChange(this.numberValue);
      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.minValue || this.numberValue < this.minValue) {
          this.disabledValueDecrement = true;
        } else {
          this.disabledValueDecrement = false;
        }
        if (this.numberValue < this.maxValue) {
          this.disabledValueIncrement = false;
        } else {
          this.disabledValueIncrement = true;
        }
      }
    }
    /**
     * Emit changed value
     * @param value
     */
  }, {
    key: "emitChange",
    value: function emitChange(value) {
      this.onChange.emit(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.disabledValueIncrement = this.disabledValue;
      this.disabledValueDecrement = this.disabledValue;
      // Check if current value is equal to min / max value then disable button respectively
      if (this.numberValue === this.minValue) {
        this.disabledValueDecrement = true;
      } else if (this.numberValue === this.maxValue) {
        this.disabledValueIncrement = true;
      }
    }
  }]);
  return CoreTouchspinComponent;
}();
CoreTouchspinComponent.ɵfac = function CoreTouchspinComponent_Factory(t) {
  return new (t || CoreTouchspinComponent)();
};
CoreTouchspinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreTouchspinComponent,
  selectors: [["core-touchspin"]],
  inputs: {
    numberValue: "numberValue",
    iconChevron: "iconChevron",
    disabledValue: ["disable", "disabledValue"],
    size: "size",
    color: "color",
    stepValue: "stepValue",
    maxValue: "maxValue",
    minValue: "minValue"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 8,
  vars: 28,
  consts: [[1, "btn-group", "touchspin-wrapper", 3, "ngClass"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-down", 3, "disabled", "ngClass", "click"], ["data-feather", "minus", 4, "ngIf"], ["data-feather", "chevron-down", 4, "ngIf"], ["type", "number", "pattern", "\\d*", "maxlength", "4", 1, "form-control", 3, "ngModel", "value", "disabled", "step", "min", "max", "ngModelChange", "input"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-up", 3, "disabled", "ngClass", "click"], ["data-feather", "plus", 4, "ngIf"], ["data-feather", "chevron-up", 4, "ngIf"], ["data-feather", "minus"], ["data-feather", "chevron-down"], ["data-feather", "plus"], ["data-feather", "chevron-up"]],
  template: function CoreTouchspinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_1_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreTouchspinComponent_span_2_Template, 1, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreTouchspinComponent_span_3_Template, 1, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CoreTouchspinComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.numberValue = $event;
      })("input", function CoreTouchspinComponent_Template_input_input_4_listener($event) {
        return ctx.inputChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_5_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CoreTouchspinComponent_span_6_Template, 1, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CoreTouchspinComponent_span_7_Template, 1, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c0, ctx.size == "sm", ctx.size == "lg"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueDecrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](18, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.numberValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.numberValue)("disabled", ctx.disabledValue)("step", ctx.stepValue)("min", ctx.minValue)("max", ctx.maxValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueIncrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](23, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  styles: [".touchspin-wrapper {\n  width: 8.4rem;\n}\n.touchspin-wrapper .btn-touchspin {\n  z-index: 1;\n  padding: 0;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 5px !important;\n  position: relative;\n  top: 4px;\n}\n.touchspin-wrapper .btn-touchspin span {\n  position: relative;\n  top: 1px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-down {\n  left: 10px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-up {\n  right: 10px;\n}\n.touchspin-wrapper .form-control {\n  padding: 5px;\n  height: auto;\n  border-radius: 5px !important;\n  border: 0 !important;\n  background-color: #f8f8f8;\n  text-align: center;\n  font-weight: 500;\n}\n.touchspin-wrapper .form-control:focus {\n  box-shadow: none;\n}\n.touchspin-wrapper.touchspin-lg {\n  width: 9.375rem;\n}\n.touchspin-wrapper.touchspin-lg .btn-touchspin {\n  min-width: 24px;\n  height: 24px;\n  top: 5px;\n}\n.touchspin-wrapper.touchspin-lg .form-control {\n  padding: 9px;\n  height: auto;\n}\n.touchspin-wrapper.touchspin-sm {\n  width: 6.25rem;\n}\n.touchspin-wrapper.touchspin-sm .btn-touchspin {\n  min-width: 16px;\n  height: 16px;\n  top: 4px;\n}\n.touchspin-wrapper.touchspin-sm .form-control {\n  padding: 2px;\n  height: auto;\n}\n.dark-layout .touchspin-wrapper .form-control {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtdG91Y2hzcGluLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UsYUFaMEI7QUFMNUI7QUFtQkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBYjRCO0VBYzVCLFlBYjZCO0VBYzdCLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBakJKO0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBakJOO0FBbUJJO0VBQ0UsVUFBQTtBQWpCTjtBQW1CSTtFQUNFLFdBQUE7QUFqQk47QUFxQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkNzRE07RURyRE4sa0JBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGdCQUFBO0FBbkJOO0FBdUJFO0VBQ0UsZUFqRDJCO0FBNEIvQjtBQXVCSTtFQUNFLGVBL0M2QjtFQWdEN0IsWUEvQzhCO0VBZ0Q5QixRQUFBO0FBckJOO0FBd0JJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF0Qk47QUEwQkU7RUFDRSxjQS9EMkI7QUF1Qy9CO0FBMEJJO0VBQ0UsZUE1RDZCO0VBNkQ3QixZQTVEOEI7RUE2RDlCLFFBQUE7QUF4Qk47QUEyQkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQXpCTjtBQWtDSTtFQUNFLHlCRTNFZTtBRjRDckIiLCJmaWxlIjoiY29yZS10b3VjaHNwaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zY3NzL2Jhc2UvYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcbkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyB2YXJpYWJsZSBkZWNsYXJhdGlvblxyXG4kdG91Y2hzcGluLWJnLWNvbG9yOiAkYm9keS1iZztcclxuJHRvdWNoc3Bpbi1kYXJrLWJnLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG5cclxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGg6IDguNHJlbTtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtbGc6IDkuMzc1cmVtO1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aC1zbTogNi4yNXJlbTtcclxuXHJcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aDogMjBweDtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDogMjBweDtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoLWxnOiAyNHB4O1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4taGVpZ2h0LWxnOiAyNHB4O1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtc206IDE2cHg7XHJcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi1oZWlnaHQtc206IDE2cHg7XHJcblxyXG4udG91Y2hzcGluLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aDtcclxuXHJcbiAgLmJ0bi10b3VjaHNwaW4ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aDtcclxuICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmLmJ0bi10b3VjaHNwaW4tZG93biB7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAmLmJ0bi10b3VjaHNwaW4tdXAge1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3VjaHNwaW4tYmctY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50b3VjaHNwaW4tbGcge1xyXG4gICAgd2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLWxnO1xyXG5cclxuICAgIC5idG4tdG91Y2hzcGluIHtcclxuICAgICAgbWluLXdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtbGc7XHJcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZztcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50b3VjaHNwaW4tc20ge1xyXG4gICAgd2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLXNtO1xyXG5cclxuICAgIC5idG4tdG91Y2hzcGluIHtcclxuICAgICAgbWluLXdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtc207XHJcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1zbTtcclxuICAgICAgdG9wOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZGFyayBsYXlvdXQgc3R5bGVcclxuXHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLnRvdWNoc3Bpbi13cmFwcGVyIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG91Y2hzcGluLWRhcmstYmctY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS01MDogI2Y2ZjZmNiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxyXG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcclxuJGdyYXktMzAwOiAjZGFlMWU3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodFxyXG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjYjhjMmNjICFkZWZhdWx0OyAvLyAkZ3JheVxyXG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xyXG4kZ3JheS05MDA6ICMyYTJlMzAgIWRlZmF1bHQ7XHJcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxyXG5cclxuJHB1cnBsZTogIzczNjdmMCAhZGVmYXVsdDsgLy8kcHJpbWFyeVxyXG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcclxuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cclxuJG9yYW5nZTogI2ZmOWY0MyAhZGVmYXVsdDsgLy8kd2FybmluZ1xyXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcclxuXHJcbiRwcmltYXJ5OiAkcHVycGxlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAjODI4NjhiICFkZWZhdWx0O1xyXG4kaW5mbzogJGJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAkb3JhbmdlICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICRncmF5LTUwICFkZWZhdWx0O1xyXG4kZGFyazogIzRiNGI0YiAhZGVmYXVsdDtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuLy8gc2Nzcy1kb2NzLWVuZCBjb250YWluZXItbWF4LXdpZHRoc1xyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAyNTogKFxyXG4gICAgICAkc3BhY2VyICogMC4yNVxyXG4gICAgKSxcclxuICAgIDUwOiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjVcclxuICAgICksXHJcbiAgICA3NTogKFxyXG4gICAgICAkc3BhY2VyICogMC43NVxyXG4gICAgKSxcclxuICAgIDE6IChcclxuICAgICAgJHNwYWNlclxyXG4gICAgKSxcclxuICAgIDI6IChcclxuICAgICAgJHNwYWNlciAqIDEuNVxyXG4gICAgKSxcclxuICAgIDM6IChcclxuICAgICAgJHNwYWNlciAqIDNcclxuICAgICksXHJcbiAgICA0OiAoXHJcbiAgICAgICRzcGFjZXIgKiAzLjVcclxuICAgICksXHJcbiAgICA1OiAoXHJcbiAgICAgICRzcGFjZXIgKiA0XHJcbiAgICApXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogIzZlNmI3YiAhZGVmYXVsdDtcclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuXHJcbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lICFkZWZhdWx0O1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAycmVtICFkZWZhdWx0O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXHJcblxyXG4kbGluZS1oZWlnaHQtbGc6IDEuMjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1zbTogMSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcclxuJGJvcmRlci1jb2xvcjogI2ViZTlmMSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIHNoYWRvd1xyXG4kYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG4vLyBUeXBvZ3JhcGh5XHJcblxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogJ01vbnRzZXJyYXQnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LXNpemUtYmFzZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1sZzogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogY2VpbCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSAhZGVmYXVsdDtcclxuXHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwICFkZWZhdWx0O1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNDUgIWRlZmF1bHQ7XHJcblxyXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xyXG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjcxNCAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xyXG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI4NiAhZGVmYXVsdDtcclxuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4wNyAhZGVmYXVsdDtcclxuXHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogaW5oZXJpdCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWNvbG9yOiAjNWU1ODczICFkZWZhdWx0O1xyXG5cclxuJGRpc3BsYXkxLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXkyLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXkzLXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuJGRpc3BsYXk0LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRsZWFkLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4xNCAhZGVmYXVsdDtcclxuJGxlYWQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LW11dGVkOiAjYjliOWMzICFkZWZhdWx0O1xyXG4kaHItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuLy8gVGFibGVzXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAwLjcycmVtICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWFjY2VudC1iZzogI2ZhZmFmYyAhZGVmYXVsdDtcclxuJHRhYmxlLWhvdmVyLWJnOiAjZjZmNmY5ICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWRhcmstYmc6ICRkYXJrICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtdGgtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuJGJ0bi1wYWRkaW5nLXk6IDAuNzg2cmVtICFkZWZhdWx0O1xyXG4kYnRuLXBhZGRpbmcteDogMS41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC40ODZyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC45ICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6IDAuOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6IDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAxICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlciAwcyAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm1zXHJcbiRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICNkOGQ2ZGU7XHJcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAwLjQzOHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktc206IDAuMTg4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICNlZmVmZWYgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IDIuNzE0cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAyLjE0MnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1sZzogMy4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyLWNvbG9yIDBzICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAzcHggIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5LjUgNy41JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMC43NSA0LjM1IDQuMTggNi43NSA4Ljc1IDAuNzUnIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiUyM2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjEuNXB4Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzRSUzQ2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjY1KTtcclxuXHJcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogbm9uZTtcclxuXHJcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXHJcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6IDEwcHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XHJcblxyXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuXHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwICFkZWZhdWx0O1xyXG4kemluZGV4LWRyb3Bkb3duOiAxMCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS4yOHJlbSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bl9zcGFjaW5nOiAwLjVyZW07IC8vIGN1c3RvbVxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC44NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjU1NzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjQ0M3JlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjc0NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1mb250LXNpemUtbGc6IDEuMTRyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kcGFnaW5hdGlvbi1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIENhcmRzXHJcbiRjYXJkLXNwYWNlci15OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDAuNDI4cmVtICFkZWZhdWx0O1xyXG5cclxuLy9BbGVydHNcclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuNzFyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbi8vIExpc3QgZ3JvdXBcclxuXHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuLy8gTmF2IHRhYnNcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogMC4yNSAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIG5hdmJhclxyXG5cclxuJGZsb2F0aW5nLW5hdi1tYXJnaW46IDEuM3JlbTtcclxuXHJcbi8vIFRvb2x0aXBzXHJcblxyXG4kdG9vbHRpcC1iZzogIzMyMzIzMiAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogMC43NzVyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1tYXgtd2lkdGg6IDIyMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJHBvcG92ZXItaGVhZGVyLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDEuMjFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbiR0b2FzdC1tYXgtd2lkdGg6IDM4MHB4ICFkZWZhdWx0O1xyXG4kdG9hc3QtcGFkZGluZy14OiAxLjE0cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtcGFkZGluZy15OiAwLjE1cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHRvYXN0LWJvcmRlci1yYWRpdXM6IDAuMjg2cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuXHJcbiR0b2FzdC1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vIFByb2dyZXNzXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDVyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuODU3ICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWRjcnVtYnNcclxuXHJcbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6IDAuNnJlbSAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDAgIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcclxuXHJcbi8vIENhcm91c2VsXHJcblxyXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xyXG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHRcIj48cG9seWxpbmUgcG9pbnRzPVwiOSAxOCAxNSAxMiA5IDZcIj48L3BvbHlsaW5lPjwvc3ZnPicpICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcclxuJGJhZGdlLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNb2RhbFxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMC44cmVtIDEuNHJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMC44cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMS40cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC14bDogOTQlICFkZWZhdWx0O1xyXG4kbW9kYWwtc206IDQwMHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gICAgU2xpZGUgSW4gTW9kYWxcclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLXNtOiAyNXJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aDogMjhyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtbGc6IDMwcmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIENsb3NlXHJcblxyXG4kY2xvc2UtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xyXG4kY2xvc2UtZm9udC13ZWlnaHQ6IDQwMCAhZGVmYXVsdDtcclxuJGNsb3NlLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb2RlXHJcblxyXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcclxuJGtiZC1iZzogI2VlZSAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogM3JlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDFyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy9zdmcgY29sb3JcclxuJHN2Zy1jb2xvci1saWdodDogIzYyNjI2MiAhZGVmYXVsdDtcclxuXHJcbi8vIFNWRyBpY29uc1xyXG4vLyBGb3IgQnJlYWRjcnVtYlxyXG4kZG91YmxlLWNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb25zLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTMgMTcgMTggMTIgMTMgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgMTcgMTEgMTIgNiA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuLy8gQ2hldnJvbiBJY29uc1xyXG4kY2hldnJvbi1sZWZ0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxNSAxOCA5IDEyIDE1IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tdXA6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxOCAxNSAxMiA5IDYgMTUnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi1kb3duOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcblxyXG4kZG93bmxvYWQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWRvd25sb2FkJyUzRSUzQ3BhdGggZD0nTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTQnJTNFJTNDL3BhdGglM0UlM0Nwb2x5bGluZSBwb2ludHM9JzcgMTAgMTIgMTUgMTcgMTAnJTNFJTNDL3BvbHlsaW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNScgeDI9JzEyJyB5Mj0nMyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJHJlbW92ZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXIteCclM0UlM0NsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGVjazogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGVjayclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzIwIDYgOSAxNyA0IDEyJyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNpcmNsZTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaXJjbGUnJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDL3N2ZyUzRVwiO1xyXG4kaW5mb0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItaW5mbyclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE2JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOCcgeDI9JzEyLjAxJyB5Mj0nOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJHdhcm5pbmdJY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFsZXJ0LXRyaWFuZ2xlJyUzRSUzQ3BhdGggZD0nTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAweiclM0UlM0MvcGF0aCUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nOScgeDI9JzEyJyB5Mj0nMTMnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE3JyB4Mj0nMTIuMDEnIHkyPScxNyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJG1lbnU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdjc3MtaTZkenExJyUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxMicgeDI9JzIxJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nNicgeDI9JzIxJyB5Mj0nNiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxOCcgeDI9JzIxJyB5Mj0nMTgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcblxyXG4kY2hhdC1iZy1saWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJekxqQXVNU3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJMFV4UlRCRk9UdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcclxuJGNoYXQtYmctZGFyazogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhacFpYZENiM2c5SWpBZ01DQXlOakFnTWpZd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5qQWdNall3T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanh6ZEhsc1pTQjBlWEJsUFNKMFpYaDBMMk56Y3lJK0Nna3VjM1F3ZTJacGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzJacGJHdzZJekUzTVVFeU5EdDlDand2YzNSNWJHVStDanhuUGdvSlBHY2dhV1E5SW1rdGJHbHJaUzFtYjI5a0lqNEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qUXVOQ3d4Tm1Nd0xqSXNNQzQyTERBdU5Dd3hMak1zTUM0MUxESm9MVE11TjJ3eExqSXNNaTR6YkRBdU5Td3dMamxzTFRBdU1pd3dMakZXTWpoak1pNHlMREV1Tnl3eUxqY3NOQzQ0TERFc053b0pDUWxqTFRBdU9Dd3hMVEV1T1N3eExqY3RNeTR5TERFdU9WWXpOMk10TUM0NUxETXVOUzAwTGpFc05pMDNMamdzTm1ndE1qQmpMVE11Tml3d0xUWXVPQzB5TGpVdE55NDNMVFoyTFRBdU1XTXRNaTQzTFRBdU5DMDBMall0TXkwMExqSXROUzQzWXpBdU1pMHhMak1zTUM0NUxUSXVOU3d4TGprdE15NHlDZ2tKQ1hZdE5pNDRiQzB3TGpndE1TNDJiQzB3TGpRdE1DNDViREF1T1Mwd0xqUk1MVEUzTERFNGFDMHpReTB4Tnk0eUxEVXVOaTAwTGprdE1pNHlMRGN1TlN3d0xqWkRNVFV1TkN3eUxqTXNNakV1T1N3NExqSXNNalF1TkN3eE5ub2dUUzB4TWk0MExERTRZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4Q2drSkNXd3RNeTR4TERFdU5td3dMamtzTVM0NGJERXVNeTB3TGpkak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRJdU1pMHhMakZqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpFS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4WXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFF6Y3VOQ3d5TWl3M0xqY3NNaklzT0N3eU1TNDViREl1T1MweExqTmpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak1LQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d6TGpFdE1TNDFiQzB3TGprdE1TNDRiQzB4TGpRc01DNDNZeTB3TGpnc01DNDBMVEV1Tnl3d0xqUXRNaTQyTERBdU1Xd3RNaTQ0TFRFdU1rTXhNaTR6TERFNExERXlMaklzTVRnc01USXVNU3d4T0d3d0xEQUtDUWtKWXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVV3MExERTRMakZETXk0NUxERTRMRE11Tnl3eE9Dd3pMallzTVRoc01Dd3dZeTB3TGpJc01DMHdMak1zTUMwd0xqUXNNQzR4VERFc01Ua3VNZ29KQ1FsakxUQXVPQ3d3TGpRdE1TNDRMREF1TkMweUxqY3NNRXd0TkN3eE9DNHhReTAwTGpFc01UZ3ROQzR6TERFNExUUXVOQ3d4T0d3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZNTFRjc01Ua3VNbU10TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eENna0pDVU10TVRJdU1Td3hPQzB4TWk0ekxERTRMVEV5TGpRc01UaE1MVEV5TGpRc01UaE1MVEV5TGpRc01UaDZJRTB0TVRJdU5Dd3hObWd0TkM0NVF5MHhNeTQxTERVdU1TMHhMalV0TUM0M0xEa3VOU3d6TGpKak5pd3lMakVzTVRBdU55dzJMamdzTVRJdU9Dd3hNaTQ0YUMweUxqRnNMVEF1TVMwd0xqRUtDUWtKVERFNUxqa3NNVFpJTFRFeUxqUk1MVEV5TGpRc01UWjZJRTB4Tnk0NUxESXpMamRzTVM0MExUQXVOMmd4TGpOMk1tZ3RNeloyTFRFdU1Xd3dMak10TUM0eWJERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRJTFRNS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3VERJdU15d3lNMmd5TGpac01TNDBMREF1TjJNd0xqY3NNQzQwTERFdU55d3dMalFzTWk0MUxEQnNNUzQzTFRBdU4yZ3pMakpzTVM0M0xEQXVOME14Tmk0eUxESTBMakVzTVRjdU1Td3lOQzR4TERFM0xqa3NNak11TjNvS0NRa0pJRTB0TVRNdU9Dd3lOMnd4Tmk0MExEUXVPVXd4T0M0NUxESTNTQzB4TXk0NGVpQk5MVEUwTGpRc01qbG9NQzR6YkRFMkxqY3NOV3d4Tmk0M0xUVm9NQzR6WXpFdU55d3dMRE1zTVM0ekxETXNNM010TVM0ekxETXRNeXd6YUMwek5HTXRNUzQzTERBdE15MHhMak10TXkwekNna0pDVU10TVRjdU5Dd3pNQzR6TFRFMkxqRXNNamt0TVRRdU5Dd3lPWG9nVFMweE15NHhMRE0zWXpBdU9Dd3lMalFzTXk0eExEUXNOUzQzTERSb01qQmpNaTQxTERBc05DNDRMVEV1Tml3MUxqY3RORU14T0M0eUxETTNMVEV6TGpFc016Y3RNVE11TVN3ek4zb2lMejRLQ1FrOGNHRjBhQ0JwWkQwaWNHRjBhRFpmWm1sc2JDMWpiM0I1SWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpnMExqUXNNVFpqTUM0eUxEQXVOaXd3TGpRc01TNHpMREF1TlN3eWFDMHpMamRzTVM0eUxESXVNMnd3TGpVc01DNDViQzB3TGpJc01DNHhWakk0WXpJdU1pd3hMamNzTWk0M0xEUXVPQ3d4TERjS0NRa0pZeTB3TGpnc01TMHhMamtzTVM0M0xUTXVNaXd4TGpsV016ZGpMVEF1T1N3ekxqVXROQzR4TERZdE55NDRMRFpvTFRJd1l5MHpMallzTUMwMkxqZ3RNaTQxTFRjdU55MDJkaTB3TGpGakxUSXVOeTB3TGpRdE5DNDJMVE10TkM0eUxUVXVOMk13TGpJdE1TNHpMREF1T1MweUxqVXNNUzQ1TFRNdU1nb0pDUWwyTFRZdU9Hd3RNQzQ0TFRFdU5td3RNQzQwTFRBdU9Xd3dMamt0TUM0MFRESTBNeXd4T0dndE0yTXlMamd0TVRJdU5Dd3hOUzR4TFRJd0xqSXNNamN1TlMweE55NDBRekkzTlM0MExESXVNeXd5T0RFdU9TdzRMaklzTWpnMExqUXNNVFo2SUUweU5EY3VOU3d4T0FvSkNRbGpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRNdU1Td3hMalpzTUM0NUxERXVPR3d4TGpNdE1DNDNZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4WXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eENna0pDV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTR5TFRFdU1XTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNDVMVEV1TXdvSkNRbGpNQzQ0TFRBdU15d3hMamN0TUM0ekxESXVOQ3d3YkRJdU9Td3hMak5qTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JETXVNUzB4TGpWc0xUQXVPUzB4TGpoc0xURXVOQ3d3TGpkakxUQXVPQ3d3TGpRdE1TNDNMREF1TkMweUxqWXNNQzR4YkMweUxqZ3RNUzR5Q2drSkNXTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOQzB3TGpGc01Dd3dZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNV3d0TWk0ekxURXVNV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TlMwd0xqRnNNQ3d3Q2drSkNXTXRNQzR5TERBdE1DNHpMREF0TUM0MExEQXVNV3d0TWk0eUxERXVNV010TUM0NExEQXVOQzB4TGpnc01DNDBMVEl1Tnl3d2JDMHlMakl0TVM0eFl5MHdMakV0TUM0eExUQXVNeTB3TGpFdE1DNDBMVEF1TVd3d0xEQmpMVEF1TWl3d0xUQXVNeXd3TFRBdU5Dd3dMakZzTFRJdU1pd3hMakVLQ1FrSll5MHdMamdzTUM0MExURXVPQ3d3TGpRdE1pNDNMREJzTFRJdU1pMHhMakZETWpRM0xqa3NNVGdzTWpRM0xqY3NNVGdzTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGhNTWpRM0xqVXNNVGg2SUUweU5EY3VOU3d4Tm1ndE5DNDVZek11T1MweE1DNDVMREUxTGprdE1UWXVOeXd5Tmk0NExURXlMamdLQ1FrSll6WXNNaTR4TERFd0xqY3NOaTQ0TERFeUxqZ3NNVEl1T0dndE1pNHhiQzB3TGpFdE1DNHhiQzB3TGpNc01DNHhTREkwTnk0MVRESTBOeTQxTERFMmVpQk5NamMzTGprc01qTXVOMnd4TGpRdE1DNDNhREV1TTNZeWFDMHpObll0TVM0eGJEQXVNeTB3TGpKc01TNDBMVEF1TjJneUxqWUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqY3NNQzQwTERJdU5pd3dMakZzTVM0M0xUQXVOd29KQ1Fsb015NHliREV1Tnl3d0xqZERNamMyTGpJc01qUXVNU3d5TnpjdU1Td3lOQzR4TERJM055NDVMREl6TGpkTU1qYzNMamtzTWpNdU4zb2dUVEkwTmk0eUxESTNiREUyTGpRc05DNDVUREkzT1N3eU4wZ3lORFl1TW5vZ1RUSTBOUzQxTERJNWFEQXVNMnd4Tmk0M0xEVnNNVFl1TnkwMWFEQXVNd29KQ1Fsak1TNDNMREFzTXl3eExqTXNNeXd6Y3kweExqTXNNeTB6TEROb0xUTTBZeTB4TGpjc01DMHpMVEV1TXkwekxUTlRNalF6TGprc01qa3NNalExTGpVc01qbDZJRTB5TkRZdU9Td3pOMk13TGpnc01pNDBMRE11TVN3MExEVXVOaXcwYURJd1l6SXVOU3d3TERRdU9DMHhMallzTlM0M0xUUUtDUWtKU0RJME5pNDVlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TlRrdU5Td3lNV010TVM0ekxUTXVOaTAwTGpjdE5pMDRMalV0Tm1ndE5ESmpMVE11T0N3d0xUY3VNaXd5TGpRdE9DNDFMRFpqTFRNdU15d3dMak10TlM0NExETXVNaTAxTGpVc05pNDFZekF1TWl3eUxqa3NNaTQyTERVdU1pdzFMalVzTlM0MUNna0pDV010TVM0M0xEUXVOeXd3TGpnc09TNDRMRFV1TkN3eE1TNDFZekVzTUM0ekxESXNNQzQxTERNc01DNDFhRFF5WXpVc01DdzVMVFFzT1MwNVl6QXRNUzB3TGpJdE1pNHhMVEF1TlMwell6TXVNeTB3TGpNc05TNDRMVE11TWl3MUxqVXROaTQxQ2drSkNVTXhOalF1Tnl3eU15NDJMREUyTWk0MExESXhMak1zTVRVNUxqVXNNakY2SUUweE5URXNNVGRvTFRReVl5MHlMamNzTUMwMUxqSXNNUzQyTFRZdU15dzBhRFUwTGpkRE1UVTJMaklzTVRndU5pd3hOVE11Tnl3eE55d3hOVEVzTVRkNklFMHhOREV1Tnl3ME13b0pDUWxqTWk0eExURXVOeXd6TGpNdE5DNHpMRE11TXkwM2FDMHlZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROQzR6WXpJdU1TMHhMamNzTXk0ekxUUXVNeXd6TGpNdE4yZ3RNbU13TERNdU9TMHpMakVzTnkwM0xEZG9MVFF1TTJNeUxqRXRNUzQzTERNdU15MDBMak1zTXk0ekxUZG9MVElLQ1FrSll6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE4yTXRNeTQ1TERBdE55MHpMakV0TnkwM2N6TXVNUzAzTERjdE4yZzBNbU16TGprc01DdzNMRE11TVN3M0xEZHpMVE11TVN3M0xUY3NOMGd4TkRFdU4zb2dUVEV3T1N3eU4yTXRNeXd3TFRVdU9Dd3hMalV0Tnk0MUxEUklNVEF4Q2drSkNXTXRNaTR5TERBdE5DMHhMamd0TkMwMGN6RXVPQzAwTERRdE5HZzFPR015TGpJc01DdzBMREV1T0N3MExEUnpMVEV1T0N3MExUUXNOR2d0TUM0MVl5MHhMamN0TWk0MUxUUXVOUzAwTFRjdU5TMDBTREV3T1hvaUx6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16a3NNVEUxWXpRdU5Dd3dMRGd0TXk0MkxEZ3RPSE10TXk0MkxUZ3RPQzA0Y3kwNExETXVOaTA0TERoVE16UXVOaXd4TVRVc016a3NNVEUxZWlCTk5EVXNNVEEzWXpBc015NHpMVEl1Tnl3MkxUWXNObk10TmkweUxqY3ROaTAyQ2drSkNYTXlMamN0Tml3MkxUWlRORFVzTVRBekxqY3NORFVzTVRBM2VpQk5ORElzTnpoMkxUSm9PSFl0TmtnME1HTXRNaTR5TERBdE5Dd3hMamd0TkN3MGRqRXdTREl5YkMweExqTXNORXd5TUN3NU1HZ3lMakpzTXk0NExEUXdhREkyYkRNdU9DMDBNRWcxT0d3dE1DNDNMVEpNTlRZc09EUklOREpXTnpoNkNna0pDU0JOTXpnc056UjJNVEJvTWxZM05HZzRkaTB5YUMwNFF6TTRMamtzTnpJc016Z3NOekl1T1N3ek9DdzNOSG9nVFRRd0xEZzJhREUwTGpac01DNDNMREpJTWpJdU9Hd3dMamN0TWtnME1Ib2dUVFV6TGpnc09UQklNalF1TW13ekxqWXNNemhvTWpJdU5FdzFNeTQ0TERrd2VpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhNamtzT1RKb0xUWjJOR2d0Tm5ZMGFDMDJkakUwYUMwemJEQXVNaXd5YkRNdU9Dd3pNbWd6Tm13ekxqZ3RNekpzTUM0eUxUSm9MVE4yTFRFMGFDMDJkaTAwYUMwMmRpMDBTREV5T1hvZ1RURTBOeXd4TVRSMkxURXlhQzAwZGpSb00zWTRTREUwTndvSkNRbDZJRTB4TkRRc01URTBkaTAyYUMwMGRqWklNVFEwZWlCTk1UTTRMREV5TUhZdE1UWm9MVFIyTVRrdU1rTXhNelV1Tml3eE1qSXVOU3d4TXpjc01USXhMalFzTVRNNExERXlNSG9nVFRFek1pd3hNak11T0ZZeE1EQm9MVFIyTWpNdU9Bb0pDUWxETVRJNUxqTXNNVEkwTGpFc01UTXdMamNzTVRJMExqRXNNVE15TERFeU15NDRlaUJOTVRJMkxERXlNeTR5VmpFd05HZ3ROSFl4TmtNeE1qTXNNVEl4TGpRc01USTBMalFzTVRJeUxqVXNNVEkyTERFeU15NHllaUJOTVRJd0xERXhOSFl0Tm1ndE5IWTJTREV5TUhvZ1RURXhOQ3d4TVRSMkxUaG9Nd29KQ1FsMkxUUm9MVFIyTVRKSU1URTBlaUJOTVRReExERXdNbll0TkdndE5IWTBhRE4yTkdneFZqRXdNbm9nVFRFek5Td3hNREoyTFRob0xUUjJOR2d6ZGpSSU1UTTFlaUJOTVRJNUxEazRkaTAwYUMwMGRqaG9NWFl0TkVneE1qbDZJRTB4TWpNc01UQXlkaTAwYUMwMGRqaG9NWFl0TkVneE1qTjZDZ2tKQ1NCTk1UTXdMREV5Tm1NMUxqa3NNQ3d4TUM0NUxUUXVNaXd4TVM0NExURXdhRGN1T1d3dE15NDFMRE13YUMwek1pNDBiQzB6TGpVdE16Qm9OeTQ1UXpFeE9TNHhMREV5TVM0NExERXlOQzR4TERFeU5pd3hNekFzTVRJMmVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHlNVElzT0RaMk1tZ3ROSFl0TWtneU1USjZJRTB5TVRZc09EWm9MVEoyTW1neVZqZzJlaUJOTVRrMkxEZzJUREU1Tml3NE5tTXRNaTQzTERBdU55MDBMalVzTXk0ekxUTXVPU3cyWXpBdU5Dd3hMamdzTVM0MkxETXVNaXd6TGpNc015NDRDZ2tKQ1d3d0xqRXNNQzR5YkRFdU1TdzBMalZqTUM0eUxEQXVPU3d4TERFdU5Td3hMamtzTVM0MWJEQXNNR3czTERJMExqWmpNQzR5TERBdU9Td3hMREV1TkN3eExqa3NNUzQwYURWak1DNDVMREFzTVM0M0xUQXVOaXd4TGprdE1TNDBiRGN0TWpRdU5tTXdMamtzTUN3eExqY3RNQzQyTERFdU9TMHhMalVLQ1FrSmJERXVNUzAwTGpWc01DNHhMVEF1TW1NeUxqWXRNQzQ1TERRdU1TMHpMamNzTXk0eUxUWXVNMk10TUM0MkxURXVOeTB5TFRNdE15NDRMVE11TTFZNE5tTXdMVGN1TnkwMkxqTXRNVFF0TVRRdE1UUlRNVGsyTERjNExqTXNNVGsyTERnMmVpQk5NakF3TERnMmFEWjJNbWd0T1FvSkNRbGpMVEV1Tnl3d0xUTXNNUzR6TFRNc00zTXhMak1zTXl3ekxETm9NalpqTVM0M0xEQXNNeTB4TGpNc015MHpjeTB4TGpNdE15MHpMVE5vTFROMkxUSm9NbU13TFRZdU5pMDFMalF0TVRJdE1USXRNVEp6TFRFeUxEVXVOQzB4TWl3eE1rZ3lNREI2SUUweE9UZ3VOaXd4TURCc0xURXROR2d5TkM0NUNna0pDV3d0TVN3MFNERTVPQzQyZWlCTk1qQTNMalVzTVRJMmJDMDJMamt0TWpSb01UZ3VOMnd0Tmk0NUxESTBTREl3Tnk0MWVpQk5NVFV3TERJME1tTXhNaTR5TERBc01qSXRPUzQ0TERJeUxUSXljeTA1TGpndE1qSXRNakl0TWpKekxUSXlMRGt1T0MweU1pd3lNZ29KQ1FsVE1UTTNMamdzTWpReUxERTFNQ3d5TkRKNklFMHhOelFzTWpJd1l6QXNNVE11TXkweE1DNDNMREkwTFRJMExESTBjeTB5TkMweE1DNDNMVEkwTFRJMGJEQXNNR013TFRFekxqTXNNVEF1TnkweU5Dd3lOQzB5TkZNeE56UXNNakEyTGpjc01UYzBMREl5TUhvZ1RURTBOUzQyTERJek55NDNDZ2tKQ1d3eUxUQXVPV014TGpVdE1DNDJMRE11TWkwd0xqWXNOQzQzTERCc01pd3dMamxqTUM0NUxEQXVOQ3d5TERBc01pNDFMVEF1T0d3eExqRXRNUzQ1WXpBdU9DMHhMalFzTWk0eUxUSXVOQ3d6TGpndE1pNDRiREl1TVMwd0xqVmpNUzB3TGpJc01TNDJMVEV1TVN3eExqVXRNaTR4YkMwd0xqSXRNaTR5Q2drSkNXTXRNQzR4TFRFdU5pd3dMalF0TXk0eUxERXVOQzAwTGpWc01TNDBMVEV1TjJNd0xqY3RNQzQ0TERBdU55MHhMamtzTUMweUxqWnNMVEV1TkMweExqZGpMVEV1TVMweExqSXRNUzQyTFRJdU9DMHhMalF0TkM0MWJEQXVNaTB5TGpKak1DNHhMVEV0TUM0MkxURXVPUzB4TGpZdE1pNHhDZ2tKQ1d3dE1pNHhMVEF1TldNdE1TNDJMVEF1TkMwekxURXVOQzB6TGpndE1pNDRiQzB4TGpFdE1TNDVZeTB3TGpVdE1DNDVMVEV1TmkweExqSXRNaTQxTFRBdU9Hd3RNaXd3TGpsakxURXVOU3d3TGpZdE15NHlMREF1TmkwMExqY3NNR3d0TWkwd0xqbGpMVEF1T1Mwd0xqUXRNaXd3TFRJdU5Td3dMamdLQ1FrSmJDMHhMREl1TVdNdE1DNDRMREV1TkMweUxqSXNNaTQwTFRNdU9Dd3lMamhzTFRJdU1Td3dMalZqTFRFc01DNHlMVEV1Tml3eExqRXRNUzQxTERJdU1Xd3dMaklzTWk0eVl6QXVNU3d4TGpZdE1DNDBMRE11TWkweExqUXNOQzQxYkMweExqUXNNUzQzQ2drSkNXTXRNQzQzTERBdU9DMHdMamNzTVM0NUxEQXNNaTQyYkRFdU5Dd3hMamRqTVM0eExERXVNaXd4TGpZc01pNDRMREV1TkN3MExqVnNMVEF1TWl3eUxqSmpMVEF1TVN3eExEQXVOaXd4TGprc01TNDJMREl1TVd3eUxqRXNNQzQxWXpFdU5pd3dMalFzTXl3eExqUXNNeTQ0TERJdU9Hd3hMakVzTVM0NUNna0pDVU14TkRNdU5pd3lNemN1T0N3eE5EUXVOeXd5TXpndU1Td3hORFV1Tml3eU16Y3VOMHd4TkRVdU5pd3lNemN1TjNvZ1RURTBPQzQwTERJek9DNDNZekV0TUM0MExESXVNUzB3TGpRc015NHhMREJzTWl3d0xqbGpNUzQ0TERBdU9DdzBMREF1TVN3MUxURXVObXd4TGpFdE1TNDVDZ2tKQ1dNd0xqWXRNQzQ1TERFdU5TMHhMallzTWk0MUxURXVPR3d5TGpFdE1DNDFZekV1T1Mwd0xqUXNNeTR6TFRJdU15d3pMakV0TkM0eWJDMHdMakl0TWk0eVl5MHdMakV0TVM0eExEQXVNeTB5TGpJc01TMHpiREV1TkMweExqZGpNUzR6TFRFdU5Td3hMak10TXk0M0xEQXROUzR5YkMweExqUXRNUzQzQ2drSkNXTXRNQzQzTFRBdU9DMHhMakV0TVM0NUxURXRNMnd3TGpJdE1pNHlZekF1TWkweUxURXVNUzB6TGpndE15NHhMVFF1TW13dE1pNHhMVEF1TldNdE1TNHhMVEF1TWkweUxUQXVPUzB5TGpVdE1TNDRiQzB4TGpFdE1TNDVZeTB4TFRFdU55MHpMakl0TWk0MExUVXRNUzQyYkMweUxEQXVPUW9KQ1FsakxURXNNQzQwTFRJdU1Td3dMalF0TXk0eExEQnNMVEl0TUM0NVl5MHhMamd0TUM0NExUUXRNQzR4TFRVc01TNDJiQzB4TGpFc01TNDVZeTB3TGpZc01DNDVMVEV1TlN3eExqWXRNaTQxTERFdU9Hd3RNaTR4TERBdU5XTXRNUzQ1TERBdU5DMHpMak1zTWk0ekxUTXVNU3cwTGpKc01DNHlMREl1TWdvSkNRbGpNQzR4TERFdU1TMHdMak1zTWk0eUxURXNNMnd0TVM0MExERXVOMk10TVM0ekxERXVOUzB4TGpNc015NDNMREFzTlM0eWJERXVOQ3d4TGpkak1DNDNMREF1T0N3eExqRXNNUzQ1TERFc00yd3RNQzR5TERJdU1tTXRNQzR5TERJc01TNHhMRE11T0N3ekxqRXNOQzR5YkRJdU1Td3dMalVLQ1FrSll6RXVNU3d3TGpJc01pd3dMamtzTWk0MUxERXVPR3d4TGpFc01TNDVZekVzTVM0M0xETXVNaXd5TGpRc05Td3hMalpNTVRRNExqUXNNak00TGpkNklFMHhOVElzTWpBM1l6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxUTVRVeUxESXdOeTQyTERFMU1pd3lNRGQ2SUUweE5UZ3NNakE1WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakE1TGpZc01UVTRMREl3T1hvZ1RURTBOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVFvSkNRbHpMVEF1TkN3eExURXNNVk14TkRjc01qRXdMallzTVRRM0xESXhNSG9nVFRFME1Td3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME1Td3lNVEF1Tml3eE5ERXNNakV3ZWlCTk1UUTBMREl3TldNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTkN3eU1EVXVOaXd4TkRRc01qQTFlaUJOTVRNMkxESXhNMk13TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNMkxESXhNeTQyTERFek5pd3lNVE42SUUweE16a3NNakU1Q2drSkNXTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE01TERJeE9TNDJMREV6T1N3eU1UbDZJRTB4TXprc01qSTFZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TXprc01qSTFMallzTVRNNUxESXlOWG9LQ1FrSklFMHhORE1zTWpNeVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhORE1zTWpNeUxqWXNNVFF6TERJek1ub2dUVEUwT0N3eU16QmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hDZ2tKQ1ZNeE5EZ3NNak13TGpZc01UUTRMREl6TUhvZ1RURTFNeXd5TXpSak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTFNeXd5TXpRdU5pd3hOVE1zTWpNMGVpQk5NVFUzTERJeU9HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eENna0pDWE10TUM0MExERXRNU3d4VXpFMU55d3lNamd1Tml3eE5UY3NNakk0ZWlCTk1UWXpMREl5TkdNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UWXpMREl5TkM0MkxERTJNeXd5TWpSNklFMHhOVGtzTWpJeFl6QXRNQzQyTERBdU5DMHhMREV0TVFvSkNRbHpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRVNUxESXlNUzQyTERFMU9Td3lNakY2SUUweE5qTXNNakU0WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5qTXNNakU0TGpZc01UWXpMREl4T0hvZ1RURTFPQ3d5TVRRS0NRa0pZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qRTBMallzTVRVNExESXhOSG9nVFRFek5Dd3lNakJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFek5Dd3lNakF1Tml3eE16UXNNakl3ZWdvSkNRa2dUVEUxTUN3eU1qVmpNaTQ0TERBc05TMHlMaklzTlMwMWN5MHlMakl0TlMwMUxUVnpMVFVzTWk0eUxUVXNOVk14TkRjdU1pd3lNalVzTVRVd0xESXlOWG9nVFRFMU55d3lNakJqTUN3ekxqa3RNeTR4TERjdE55dzNjeTAzTFRNdU1TMDNMVGR6TXk0eExUY3NOeTAzQ2drSkNWTXhOVGNzTWpFMkxqRXNNVFUzTERJeU1Ib2dUVEkwTXl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TkRONklFMHlOaklzTWpBd1l6QXRNQzQyTERBdU5DMHhMREV0TVdneUNna0pDV013TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNeU5qSXVOQ3d5TURFc01qWXlMREl3TUM0MkxESTJNaXd5TURCNklFMHlORGdzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURUtDUWtKU0RJME9Ib2dUVEl5TXl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TWpONklFMHlNamdzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESUtDUWtKWXpBdU5pd3dMREV0TUM0MExERXRNWE10TUM0MExURXRNUzB4U0RJeU9Ib2dUVEl6Tnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpNM0xqUXNNakV4TERJek55d3lNVEF1Tml3eU16Y3NNakV3ZWdvSkNRa2dUVEkxTWl3eU1URmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETWpVeUxqUXNNakV5TERJMU1pd3lNVEV1Tml3eU5USXNNakV4ZWlCTk1qWTBMREl3T1dNdE1DNDJMREF0TVN3d0xqUXRNU3d4Y3pBdU5Dd3hMREVzTVdneUNna0pDV013TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd5TmpSNklFMHlOVE1zTVRrMVl6QXRNQzQyTERBdU5DMHhMREV0TVdneVl6QXVOaXd3TERFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eGFDMHlRekkxTXk0MExERTVOaXd5TlRNc01UazFMallzTWpVekxERTVOWG9LQ1FrSklFMHlNelFzTVRrMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklNak0wZWlCTk1qUXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbG9MVEpETWpRd0xqUXNNakF4TERJME1Dd3lNREF1Tml3eU5EQXNNakF3ZWlCTk1qRTFMREl4TldNd0xUQXVOU3d3TFRBdU9Td3dMVEV1TkdNdE1pNDFMVEV1TVMwekxqY3ROQzB5TGpZdE5pNDJZekF1TWkwd0xqVXNNQzQxTFRFc01DNDVMVEV1TkdNdE1DNDVMVElzTUMwMExqSXNNUzQ1TFRVdU1nb0pDUWxqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUdNd0xqUXRNQzQxTERBdU9TMHdMamtzTVM0MUxURXVNV013TGpVdE1pNDNMRE11TVMwMExqVXNOUzQ0TFRRdU1XTXdMamNzTUM0eExERXVOQ3d3TGpRc01pd3dMamhqTlM0ekxUTXVPQ3d4TVM0MkxUVXVPU3d4T0M0eUxUVXVPUW9KQ1Fsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamxqTWk0ekxURXVOaXcxTGpRdE1TdzNMREV1TTJNd0xqUXNNQzQyTERBdU55d3hMak1zTUM0NExESmpNQzQyTERBdU1pd3hMakVzTUM0MkxERXVOU3d4TGpGak1pNDNMREF1T0N3MExqSXNNeTQxTERNdU5DdzJMakpzTUN3d0Nna0pDV014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpKak1TNDVMRElzTVM0NExEVXVNaTB3TGpJc04yTXRNQzQwTERBdU5DMHdMamtzTUM0M0xURXVOU3d4WXpBc01DNDFMREFzTUM0NUxEQXNNUzQwZGpGb0xUWXlkaTB4U0RJeE5Yb2dUVEl4TlM0NExESXdOeTQ0Q2drSkNXTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpaakxURXVNeTB4TFRFdU5pMHlMamt0TUM0MkxUUXVNbXd3TERCRE1qRTFMREl3Tnk0MUxESXhOUzQwTERJd055NDNMREl4TlM0NExESXdOeTQ0VERJeE5TNDRMREl3Tnk0NGVpQk5NakUzTGpNc01qQXpMaklLQ1FrSll5MHdMalFzTUM0NUxUQXVOeXd4TGpndE1Td3lMamRqTFRFdE1DNDBMVEV1TmkweExqVXRNUzR6TFRJdU5XTXdMakl0TUM0MUxEQXVOaTB3TGprc01TNHhMVEV1TWtNeU1UWXVOU3d5TURJdU5pd3lNVFl1T1N3eU1ESXVPU3d5TVRjdU15d3lNRE11TWt3eU1UY3VNeXd5TURNdU1ub0tDUWtKSUUweU1Ua3VOaXd4T1RndU4yTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRE1qRTRMak1zTVRrM0xqWXNNakU0TGprc01UazRMak1zTWpFNUxqWXNNVGs0TGpjS0NRa0pUREl4T1M0MkxERTVPQzQzZWlCTk1qSXdMamdzTVRrM1l6QXVOQzB3TGpVc01DNDNMVEVzTVM0eExURXVOV010TUM0ekxUQXVOUzB3TGprdE1DNDNMVEV1TkMwd0xqUnpMVEF1Tnl3d0xqa3RNQzQwTERFdU5FTXlNakF1TXl3eE9UWXVOeXd5TWpBdU5Td3hPVFl1T1N3eU1qQXVPQ3d4T1RjS0NRa0pUREl5TUM0NExERTVOM29nVFRJeU5pNHhMREU1TVM0eVl5MHhMREF1T1MweUxERXVPQzB5TGprc01pNDRZeTB3TGpNdE1DNHpMVEF1Tnkwd0xqWXRNUzR4TFRBdU9HTXdMalF0TVM0MkxESXVNUzB5TGpVc015NDNMVEl1TVFvSkNRbERNakkxTGprc01Ua3hMakVzTWpJMkxERTVNUzR5TERJeU5pNHhMREU1TVM0eVRESXlOaTR4TERFNU1TNHllaUJOTWpZNExqZ3NNVGswWXkwd0xqa3RNUzB4TGprdE1TNDVMVEl1T1MweUxqaGpNUzQxTFRBdU5pd3pMak1zTUM0eExETXVPU3d4TGpjS0NRa0pZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNeU5qa3VOU3d4T1RNdU5Dd3lOamt1TVN3eE9UTXVOaXd5TmpndU9Dd3hPVFJNTWpZNExqZ3NNVGswZWlCTk1qY3dMakVzTVRrMUxqVmpNQzQwTERBdU5Td3dMamdzTVN3eExqRXNNUzQwQ2drSkNXTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW5NdE1DNDNMVEF1T1MweExqSXRNQzQ0UXpJM01DNDFMREU1TlM0eExESTNNQzR6TERFNU5TNHpMREkzTUM0eExERTVOUzQxZWlCTk1qY3pMamtzTWpBeExqUmpMVEF1TlMwd0xqa3RNUzB4TGpndE1TNDFMVEl1TndvSkNRbGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXlOelF1TWl3eU1ERXVNU3d5TnpRc01qQXhMaklzTWpjekxqa3NNakF4TGpSNklFMHlOelV1Tml3eU1EVXVPV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M0Nna0pDV013TGpRdE1DNHpMREF1T0Mwd0xqWXNNUzR5TFRGak1Td3dMalVzTVM0MExERXVOeXd4TERJdU4wTXlOell1Tml3eU1EVXVNeXd5TnpZdU1pd3lNRFV1Tnl3eU56VXVOaXd5TURVdU9Yb2dUVEkzTmk0NExESXhNUzQwWXkwd0xqRXRNUzR5TFRBdU5DMHlMalF0TUM0MkxUTXVOZ29KQ1Fsak1DNDFMVEF1TVN3d0xqa3RNQzQwTERFdU1pMHdMalpETWpjNExqUXNNakE0TGpVc01qYzRMakVzTWpFd0xqUXNNamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUjZJRTB5TnpVc01qRTBZeTB3TGpVdE1UWXRNVE11T1MweU9DNDJMVEk1TGprdE1qZ3VNUW9KQ1FsakxURTFMak1zTUM0MUxUSTNMallzTVRJdU9DMHlPQzR4TERJNExqRklNamMxVERJM05Td3lNVFI2SUUwM01pNHpMREU1T0M0eFl5MHdMakl0TUM0ekxUQXVNeTB3TGpjdE1DNHpMVEV1TVhZdE1USm9MVEoyTVRKak1Dd3lMaklzTVM0NExEUXNOQ3cwQ2drSkNXTXhMaklzTUN3eUxqTXRNQzQxTERNdU1TMHhMalJqTUM0MkxUQXVOeXd3TGprdE1TNDJMREF1T1MweUxqVjJMVEV5YUMweWRqRXlZekFzTVM0eExUQXVPU3d5TFRJc01td3dMREJETnpNdU15d3hPVGtzTnpJdU55d3hPVGd1Tnl3M01pNHpMREU1T0M0eGVpQk5OelVzTVRjMkNna0pDV013TGpRc01Dd3dMamNzTUN3eExqRXRNQzR4WXpBdU5Td3lMaklzTWk0MkxETXVOU3cwTGpnc00yTXdMalV0TUM0eExERXRNQzR6TERFdU5DMHdMalpqTVM0eExESXVNU3d4TGpjc05DNDBMREV1Tnl3MkxqZDJNalJqTUN3ekxqTXRNaTQzTERZdE5pdzJhQzB6ZGprS0NRa0pZekFzTWk0NExUSXVNaXcxTFRVc05YTXROUzB5TGpJdE5TMDFkaTA1YUMwell5MHpMak1zTUMwMkxUSXVOeTAyTFRaMkxUSTBZekF0Tnk0M0xEWXVNeTB4TkN3eE5DMHhORU0zTUN3eE56TXVPQ3czTWk0eUxERTNOaXczTlN3eE56WjZJRTAxT0N3eE9URjJNVElLQ1FrSll6QXNNQzQ0TERBdU5Td3hMalVzTVM0eUxERXVPR013TGprc01DNDBMREV1T1N3d0xqRXNNaTQwTFRBdU4yTXdMakl0TUM0ekxEQXVNeTB3TGpjc01DNHpMVEV1TVhZdE1USm9Nbll4TW1Nd0xESXVNaTB4TGpjc05DMHpMamtzTkdNdE1DNDFMREF0TVMwd0xqRXRNUzQwTFRBdU1nb0pDUWxqTFRBdU1pMHdMakV0TUM0MExUQXVNaTB3TGpjdE1DNHpkakl1TldNd0xESXVNaXd4TGpnc05DdzBMRFJvTVRaak1pNHlMREFzTkMweExqZ3NOQzAwZGkweU5HTXdMVEV1TlMwd0xqSXRNaTQ1TFRBdU55MDBMakpqTFRBdU5Dd3dMakV0TUM0NUxEQXVNaTB4TGpNc01DNHlDZ2tKQ1dNdE1pNHhMREF0TkM0eExURXVNUzAxTGpJdE0yTXRNeTB3TGpFdE5TNDJMVEl0Tmk0MUxUUXVPVU0yTWk0MExERTNOQ3cxT0N3eE56a3NOVGdzTVRnMVZqRTVNWG9nVFRZM0xESXhOWFk1WXpBc01TNDNMREV1TXl3ekxETXNNM016TFRFdU15d3pMVE4yTFRsSU5qZDZJaTgrQ2drSlBIQmhkR2dnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUUzB4Tnl3eE9URmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TVRkNklFMHlMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTWdvSkNRbGpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERklNME15TGpRc01qQXhMRElzTWpBd0xqWXNNaXd5TURCNklFMHRNVElzTWpBMVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEV5ZWdvSkNRa2dUUzB6Tnl3eU1EWmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NbU13TGpZc01Dd3hMVEF1TkN3eExURnpMVEF1TkMweExURXRNVWd0TXpkNklFMHRNeklzTWpFd1l5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweENna0pDWE10TUM0MExURXRNUzB4U0Mwek1ub2dUUzB5TXl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRJeUxqWXNNakV4TFRJekxESXhNQzQyTFRJekxESXhNSG9nVFMwNExESXhNV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKYURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVGN1Tml3eU1USXRPQ3d5TVRFdU5pMDRMREl4TVhvZ1RUUXNNakE1WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU5Ib0tDUWtKSUUwdE55d3hPVFZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUWXVOaXd4T1RZdE55d3hPVFV1TmkwM0xERTVOWG9nVFMweU5pd3hPVFZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTWdvSkNRbGpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklMVEkyZWlCTkxUSXdMREl3TUdNd0xUQXVOaXd3TGpRdE1Td3hMVEZvTW1Nd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXRNVGt1Tml3eU1ERXRNakFzTWpBd0xqWXRNakFzTWpBd2VpQk5MVFExTERJeE5Rb0pDUWxqTUMwd0xqVXNNQzB3TGprc01DMHhMalJqTFRJdU5TMHhMakV0TXk0M0xUUXRNaTQyTFRZdU5tTXdMakl0TUM0MUxEQXVOUzB4TERBdU9TMHhMalJqTFRBdU9TMHlMREF0TkM0eUxERXVPUzAxTGpKakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01Bb0pDUWxqTUM0MExUQXVOU3d3TGprdE1DNDVMREV1TlMweExqRmpNQzQxTFRJdU55d3pMakV0TkM0MUxEVXVPQzAwTGpGak1DNDNMREF1TVN3eExqUXNNQzQwTERJc01DNDRZelV1TXkwekxqZ3NNVEV1TmkwMUxqa3NNVGd1TWkwMUxqbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGprS0NRa0pZekl1TXkweExqWXNOUzQwTFRFc055d3hMak5qTUM0MExEQXVOaXd3TGpjc01TNHpMREF1T0N3eVl6QXVOaXd3TGpJc01TNHhMREF1Tml3eExqVXNNUzR4WXpJdU55d3dMamdzTkM0eUxETXVOU3d6TGpRc05pNHliREFzTUdNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSUtDUWtKWXpFdU9Td3lMREV1T0N3MUxqSXRNQzR5TERkakxUQXVOQ3d3TGpRdE1DNDVMREF1TnkweExqVXNNV013TERBdU5Td3dMREF1T1N3d0xERXVOSFl4YUMwMk1uWXRNVWd0TkRWNklFMHRORFF1TWl3eU1EY3VPR010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWUtDUWtKWXkweExqTXRNUzB4TGpZdE1pNDVMVEF1TmkwMExqSnNNQ3d3UXkwME5Td3lNRGN1TlMwME5DNDJMREl3Tnk0M0xUUTBMaklzTWpBM0xqaE1MVFEwTGpJc01qQTNMamg2SUUwdE5ESXVOeXd5TURNdU1tTXRNQzQwTERBdU9TMHdMamNzTVM0NExURXNNaTQzQ2drSkNXTXRNUzB3TGpRdE1TNDJMVEV1TlMweExqTXRNaTQxWXpBdU1pMHdMalVzTUM0MkxUQXVPU3d4TGpFdE1TNHlReTAwTXk0MUxESXdNaTQyTFRRekxqRXNNakF5TGprdE5ESXVOeXd5TURNdU1rd3ROREl1Tnl3eU1ETXVNbm9nVFMwME1DNDBMREU1T0M0M0Nna0pDV010TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRMVFF4TGpjc01UazNMall0TkRFdU1Td3hPVGd1TXkwME1DNDBMREU1T0M0M2VpQk5MVE01TGpJc01UazNDZ2tKQ1dNd0xqTXRNQzQxTERBdU55MHhMREV1TVMweExqVmpMVEF1TXkwd0xqVXRNQzQ1TFRBdU55MHhMalF0TUM0MGN5MHdMamNzTUM0NUxUQXVOQ3d4TGpSRExUTTVMamNzTVRrMkxqY3RNemt1TlN3eE9UWXVPUzB6T1M0eUxERTVOMHd0TXprdU1pd3hPVGQ2SUUwdE16TXVPU3d4T1RFdU1nb0pDUWxqTFRFc01DNDVMVElzTVM0NExUSXVPU3d5TGpoakxUQXVNeTB3TGpNdE1DNDNMVEF1TmkweExqRXRNQzQ0WXpBdU5DMHhMallzTWk0eExUSXVOU3d6TGpjdE1pNHhReTB6TkM0eExERTVNUzR4TFRNMExERTVNUzR5TFRNekxqa3NNVGt4TGpKTUxUTXpMamtzTVRreExqSjZJRTA0TGpnc01UazBDZ2tKQ1dNdE1DNDVMVEV0TVM0NUxURXVPUzB5TGprdE1pNDRZekV1TlMwd0xqWXNNeTR6TERBdU1Td3pMamtzTVM0M1l6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME01TGpVc01Ua3pMalFzT1M0eExERTVNeTQyTERndU9Dd3hPVFJNT0M0NExERTVOSG9nVFRFd0xqRXNNVGsxTGpVS0NRa0pZekF1TkN3d0xqVXNNQzQ0TERFc01TNHhMREV1TkdNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbU10TUM0eExUQXVOUzB3TGpjdE1DNDVMVEV1TWkwd0xqaERNVEF1TlN3eE9UVXVNU3d4TUM0ekxERTVOUzR6TERFd0xqRXNNVGsxTGpWNklFMHhNeTQ1TERJd01TNDBDZ2tKQ1dNdE1DNDFMVEF1T1Mwd0xqa3RNUzQ0TFRFdU5TMHlMamRqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa014TkM0eUxESXdNUzR4TERFMExESXdNUzR5TERFekxqa3NNakF4TGpSNklFMHhOUzQzTERJd05TNDVDZ2tKQ1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNZekF1TkMwd0xqTXNNQzQ0TFRBdU5pd3hMakl0TVdNeExEQXVOU3d4TGpRc01TNDNMREVzTWk0M1F6RTJMallzTWpBMUxqTXNNVFl1TWl3eU1EVXVOeXd4TlM0M0xESXdOUzQ1ZWlCTk1UWXVPQ3d5TVRFdU5Bb0pDUWxqTFRBdU1TMHhMakl0TUM0MExUSXVOQzB3TGpZdE15NDJZekF1TlMwd0xqRXNNQzQ1TFRBdU5Dd3hMakl0TUM0MlF6RTRMalFzTWpBNExqVXNNVGd1TVN3eU1UQXVOQ3d4Tmk0NExESXhNUzQwVERFMkxqZ3NNakV4TGpSTU1UWXVPQ3d5TVRFdU5Ib2dUVEUxTERJeE5Bb0pDUWxqTFRBdU5TMHhOaTB4TXk0NUxUSTRMall0TWprdU9TMHlPQzR4WXkweE5TNHpMREF1TlMweU55NDJMREV5TGpndE1qZ3VNU3d5T0M0eFNERTFUREUxTERJeE5Ib2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLJztcclxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMtZGFyay5zY3NzXHJcbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIGRhcmsgdGhlbWUgdmFyaWFibGVzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXHJcbi8vICBUSElTIEZJTEUgV0lMTCBHRVQgT1ZFUldSSVRURU4gV0lUSCBFQUNIIFZVRVhZIEhUTUwgVEVNUExBVEUgUkVMRUFTRS5cclxuLy8gIFRJUDpcclxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vQm9keVxyXG4kdGhlbWUtZGFyay1ib2R5LWJnOiAjMTYxZDMxICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib2R5LWNvbG9yOiAjYjRiN2JkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3JkZXItY29sb3I6ICMzYjQyNTMgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogIzQ0NDA1ZSAhZGVmYXVsdDtcclxuXHJcbi8vVHlwb2dyYXBoeVxyXG4kdGhlbWUtZGFyay1oZWFkaW5ncy1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstbGFiZWwtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRleHQtbXV0ZWQtY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcblxyXG4vL0NhcmRcclxuJHRoZW1lLWRhcmstY2FyZC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjI0KTtcclxuXHJcbi8vSW5wdXRcclxuJHRoZW1lLWRhcmstaW5wdXQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1ib3JkZXItY29sb3I6ICM0MDQ2NTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJnOiAjMjQyMzNhICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICM0NDRiNjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBTd2l0Y2hcclxuJHRoZW1lLWRhcmstc3dpdGNoLWJnOiAjNTQ1YTZhO1xyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmctZGlzYWJsZWQ6ICMxYjIzMzc7XHJcblxyXG4vL1RhYmxlXHJcbiR0aGVtZS1kYXJrLXRhYmxlLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1oZWFkZXItYmc6ICMzNDNkNTUgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLXJvdy1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtaG92ZXItYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLXN0cmlwZWQtYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtZGFyay1tb2RhbC1oZWFkZXItYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXBhZ2luYXRpb24tYmc6ICMyNDJiM2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWNoYXJ0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay13aWRnZXQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 4677:
/*!**********************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinModule": function() { return /* binding */ CoreTouchspinModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.component */ 6533);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







var CoreTouchspinModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreTouchspinModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreTouchspinModule);
});
CoreTouchspinModule.ɵfac = function CoreTouchspinModule_Factory(t) {
  return new (t || CoreTouchspinModule)();
};
CoreTouchspinModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreTouchspinModule
});
CoreTouchspinModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreTouchspinModule, {
    declarations: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule],
    exports: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinComponent]
  });
})();

/***/ }),

/***/ 6200:
/*!***************************************!*\
  !*** ./src/@core/components/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* reexport safe */ _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule; },
/* harmony export */   "CoreSidebarModule": function() { return /* reexport safe */ _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule; },
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* reexport safe */ _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-menu/core-menu.module */ 7702);
/* harmony import */ var _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-sidebar/core-sidebar.module */ 3207);
/* harmony import */ var _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-customizer/theme-customizer.module */ 1100);
// common components




/***/ }),

/***/ 7976:
/*!*****************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerComponent": function() { return /* binding */ CoreThemeCustomizerComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);













function CoreThemeCustomizerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Semi Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CoreThemeCustomizerComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Menu Collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var _c0 = function _c0(a0) {
  return {
    selected: a0
  };
};
function CoreThemeCustomizerComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Navbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.navbarColor("");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.navbarColor("bg-primary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.navbarColor("bg-secondary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.navbarColor("bg-success");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r12.navbarColor("bg-danger");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.navbarColor("bg-info");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r14.navbarColor("bg-warning");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r15.navbarColor("bg-dark");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx_r2.navbarColorValue === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r2.navbarColorValue === "bg-primary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r2.navbarColorValue === "bg-secondary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx_r2.navbarColorValue === "bg-success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx_r2.navbarColorValue === "bg-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx_r2.navbarColorValue === "bg-info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx_r2.navbarColorValue === "bg-warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx_r2.navbarColorValue === "bg-dark"));
  }
}
function CoreThemeCustomizerComponent_p_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Navbar Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CoreThemeCustomizerComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CoreThemeCustomizerComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var CoreThemeCustomizerComponent = /*#__PURE__*/function () {
  /**
   * Constructor
       * @param {FormBuilder} _formBuilder
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * */
  function CoreThemeCustomizerComponent(_formBuilder, _coreConfigService, _coreSidebarService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreThemeCustomizerComponent);
    this._formBuilder = _formBuilder;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  //  Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreThemeCustomizerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Build theme config form
      this.form = this._formBuilder.group({
        app: this._formBuilder.group({
          appName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLogoImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        }),
        layout: this._formBuilder.group({
          skin: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          menu: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            collapsed: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          navbar: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          footer: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          enableLocalStorage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          customizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          scrollTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          buyNow: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        })
      });
      // Subscribe to the config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        // Update config
        _this.coreConfig = config;
        // Set the config form values
        _this.form.setValue(config, {
          emitEvent: false
        });
      });
      // Subscribe to the form layout.type value changes
      this.form.get('layout.type').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (value) {
        _this._resetFormValues(value);
      });
      // Subscribe to the form value changes
      this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfigService.config = config;
      });
      // Set navbar color
      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    //  Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Reset form values based on the selected menu layout
     *
     * @param value
     * @private
     */
  }, {
    key: "_resetFormValues",
    value: function _resetFormValues(value) {
      switch (value) {
        case 'vertical':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }
        case 'horizontal':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }
      }
      // Set navbar color
      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Patch selected navbar color value to form
     *
     * @param value
     */
  }, {
    key: "navbarColor",
    value: function navbarColor(value) {
      this.navbarColorValue = value;
      this.form.patchValue({
        layout: {
          navbar: {
            customBackgroundColor: true,
            backgroundColor: this.navbarColorValue
          }
        }
      });
    }
    /**
     * Toggle sidebar open
     *
     * @param key
     */
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);
  return CoreThemeCustomizerComponent;
}();
CoreThemeCustomizerComponent.ɵfac = function CoreThemeCustomizerComponent_Factory(t) {
  return new (t || CoreThemeCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarService));
};
CoreThemeCustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreThemeCustomizerComponent,
  selectors: [["core-theme-customizer"]],
  decls: 101,
  vars: 8,
  consts: [[1, "customizer-content", 3, "perfectScrollbar"], [1, "customizer-header", "px-2", "pt-1", "pb-0", "position-relative"], [1, "mb-0"], [1, "m-0"], [1, "customizer-close", 3, "click"], [3, "data-feather"], [3, "formGroup"], ["formGroupName", "layout"], ["id", "customizer-styling", 1, "px-2"], ["id", "customizer-styling-skin"], [1, "font-weight-bold"], [1, "d-flex"], [1, "custom-control", "custom-radio", "mr-1"], ["type", "radio", "id", "skinlight", "formControlName", "skin", "value", "default", 1, "custom-control-input", "layout-name"], ["for", "skinlight", 1, "custom-control-label"], ["type", "radio", "id", "skinbordered", "formControlName", "skin", "value", "bordered", 1, "custom-control-input", "layout-name"], ["for", "skinbordered", 1, "custom-control-label"], ["type", "radio", "id", "skindark", "formControlName", "skin", "value", "dark", 1, "custom-control-input", "layout-name"], ["for", "skindark", 1, "custom-control-label"], ["class", "custom-control custom-radio", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], ["for", "routeSelect", 1, "font-weight-bold", "mr-auto", "m-0"], ["formControlName", "animation", "id", "routeSelect", 1, "form-control", "w-50"], ["value", "fadeInLeft"], ["value", "zoomIn"], ["value", "fadeIn"], ["value", "none"], [1, "customizer-menu", "px-2"], ["id", "customizer-menu-type"], ["type", "radio", "id", "menu-type-vertical", "value", "vertical", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-vertical", 1, "custom-control-label"], ["type", "radio", "id", "menu-type-horizontal", "value", "horizontal", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-horizontal", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "class", "d-flex mt-2", "formGroupName", "menu", 4, "ngIf"], ["id", "customizer-menu-hidden", "formGroupName", "menu", 1, "d-flex", "mt-2"], [1, "font-weight-bold", "mr-auto", "m-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["type", "checkbox", "id", "collapse-sidebar-hidden", "formControlName", "hidden", 1, "custom-control-input"], ["for", "collapse-sidebar-hidden", 1, "custom-control-label"], ["id", "customizer-navbar", "formGroupName", "navbar", 1, "px-2"], ["id", "customizer-navbar-colors", 4, "ngIf"], ["id", "customizer-navbar-type"], ["class", "navbar-type-text font-weight-bold", 4, "ngIf", "ngIfElse"], ["navbarTypeHorizontal", ""], ["type", "radio", "id", "nav-type-floating", "value", "floating-nav", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-floating", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-sticky", "value", "fixed-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-static", "value", "navbar-static-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-static", 1, "custom-control-label"], ["id", "customizer-footer", "formGroupName", "footer", 1, "px-2", "mb-2"], ["id", "customizer-footer-type"], ["type", "radio", "id", "footer-type-sticky", "value", "footer-sticky", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-static", "value", "footer-static", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-static", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-hidden", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "skinsemidark", "formControlName", "skin", "value", "semi-dark", 1, "custom-control-input", "layout-name"], ["for", "skinsemidark", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "formGroupName", "menu", 1, "d-flex", "mt-2"], ["type", "checkbox", "id", "collapse-sidebar-switch", "formControlName", "collapsed", 1, "custom-control-input"], ["for", "collapse-sidebar-switch", 1, "custom-control-label"], ["id", "customizer-navbar-colors"], [1, "list-inline", "unstyled-list"], [1, "color-box", "bg-white", "border", 3, "ngClass", "click"], [1, "color-box", "bg-primary", 3, "ngClass", "click"], [1, "color-box", "bg-secondary", 3, "ngClass", "click"], [1, "color-box", "bg-success", 3, "ngClass", "click"], [1, "color-box", "bg-danger", 3, "ngClass", "click"], [1, "color-box", "bg-info", 3, "ngClass", "click"], [1, "color-box", "bg-warning", 3, "ngClass", "click"], [1, "color-box", "bg-dark", 3, "ngClass", "click"], [1, "navbar-type-text", "font-weight-bold"], ["type", "radio", "id", "nav-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-hidden", 1, "custom-control-label"]],
  template: function CoreThemeCustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar("themeCustomizer");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Skin");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CoreThemeCustomizerComponent_div_28_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Route Transition");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Fade In Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Zoom In");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Fade In");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Menu Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CoreThemeCustomizerComponent_div_55_Template, 6, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Menu Hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CoreThemeCustomizerComponent_div_64_Template, 12, 24, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, CoreThemeCustomizerComponent_p_66_Template, 2, 0, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, CoreThemeCustomizerComponent_ng_template_67_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Floating");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Sticky");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, CoreThemeCustomizerComponent_div_82_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Footer Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Sticky");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical")("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
    }
  },
  directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
  styles: [".customizer.show {\n  box-shadow: 0 15px 30px 0 rgba(34, 41, 47, 0.11), 0 5px 15px 0 rgba(34, 41, 47, 0.08);\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJ0aGVtZS1jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZXIuc2hvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDM0LCA0MSwgNDcsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjA4KTtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 1100:
/*!**************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* binding */ CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 8001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/directives */ 5448);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.module */ 3207);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 7976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var CoreThemeCustomizerModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreThemeCustomizerModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreThemeCustomizerModule);
});
CoreThemeCustomizerModule.ɵfac = function CoreThemeCustomizerModule_Factory(t) {
  return new (t || CoreThemeCustomizerModule)();
};
CoreThemeCustomizerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CoreThemeCustomizerModule
});
CoreThemeCustomizerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreThemeCustomizerModule, {
    declarations: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__.CoreThemeCustomizerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule],
    exports: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_4__.CoreThemeCustomizerComponent]
  });
})();

/***/ }),

/***/ 3822:
/*!**********************************!*\
  !*** ./src/@core/core.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




var CoreModule = /*#__PURE__*/function () {
  function CoreModule(parentModule) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreModule);
    if (parentModule) {
      throw new Error('Import CoreModule in the AppModule only');
    }
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: CoreModule,
        providers: [{
          provide: _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CORE_CUSTOM_CONFIG,
          useValue: config
        }]
      };
    }
  }]);
  return CoreModule;
}();
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CoreModule, 12));
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

/***/ }),

/***/ 9850:
/*!***********************************************************************!*\
  !*** ./src/@core/directives/core-feather-icons/core-feather-icons.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconDirective": function() { return /* binding */ FeatherIconDirective; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ 2560);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);





var FeatherIconDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function FeatherIconDirective(_elementRef, _changeDetector) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeatherIconDirective);
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatherIconDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement;
      // SVG parameter
      this.name = changes.name ? changes.name.currentValue : '';
      this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14
      this.class = changes.class ? changes.class.currentValue : '';
      // Create SVG
      var svg = feather_icons__WEBPACK_IMPORTED_MODULE_2__.icons[this.name].toSvg({
        class: this.class,
        width: this.size,
        height: this.size
      });
      // Set SVG
      if (this.inner) {
        this._nativeElement.innerHTML = svg;
      } else {
        this._nativeElement.outerHTML = svg;
      }
      this._changeDetector.markForCheck();
    }
  }]);
  return FeatherIconDirective;
}();
FeatherIconDirective.ɵfac = function FeatherIconDirective_Factory(t) {
  return new (t || FeatherIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
FeatherIconDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FeatherIconDirective,
  selectors: [["", "data-feather", ""]],
  inputs: {
    name: ["data-feather", "name"],
    class: "class",
    size: "size",
    inner: "inner"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 3113:
/*!*********************************************************************************!*\
  !*** ./src/@core/directives/core-ripple-effect/core-ripple-effect.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RippleEffectDirective": function() { return /* binding */ RippleEffectDirective; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 4116);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




var RippleEffectDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function RippleEffectDirective(_elementRef) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RippleEffectDirective);
    this._elementRef = _elementRef;
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RippleEffectDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement;
      if (
      // Attach ripple with light style i.e solid variant of button
      !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-outline-.*/.test(c);
      }) && !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-flat-.*/.test(c);
      })) {
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement, ['waves-float', 'waves-light']);
      } else {
        // Attach ripple with transparent style i.e flat, outline variant of button
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement);
      }
    }
  }]);
  return RippleEffectDirective;
}();
RippleEffectDirective.ɵfac = function RippleEffectDirective_Factory(t) {
  return new (t || RippleEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
RippleEffectDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: RippleEffectDirective,
  selectors: [["", "rippleEffect", ""]],
  inputs: {
    wave: "wave"
  }
});

/***/ }),

/***/ 5448:
/*!********************************************!*\
  !*** ./src/@core/directives/directives.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreDirectivesModule": function() { return /* binding */ CoreDirectivesModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 3113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





var CoreDirectivesModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoreDirectivesModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreDirectivesModule);
});
CoreDirectivesModule.ɵfac = function CoreDirectivesModule_Factory(t) {
  return new (t || CoreDirectivesModule)();
};
CoreDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreDirectivesModule
});
CoreDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreDirectivesModule, {
    declarations: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
    exports: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective]
  });
})();

/***/ }),

/***/ 5104:
/*!****************************************!*\
  !*** ./src/@core/pipes/filter.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
    key: "transform",
    value:
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @param {string} key
     *
     * @returns {any}
     */
    function transform(items, searchText, key) {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter(function (it) {
        return it[key].toLowerCase().includes(searchText);
      });
    }
  }]);
  return FilterPipe;
}();
FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};
FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 4932:
/*!******************************************!*\
  !*** ./src/@core/pipes/initials.pipe.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialsPipe": function() { return /* binding */ InitialsPipe; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



var InitialsPipe = /*#__PURE__*/function () {
  function InitialsPipe() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitialsPipe);
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InitialsPipe, [{
    key: "transform",
    value: function transform(fullName) {
      return fullName === null || fullName === void 0 ? void 0 : fullName.split(' ').map(function (n) {
        return n[0];
      }).join('');
    }
  }]);
  return InitialsPipe;
}();
InitialsPipe.ɵfac = function InitialsPipe_Factory(t) {
  return new (t || InitialsPipe)();
};
InitialsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "initials",
  type: InitialsPipe,
  pure: true
});

/***/ }),

/***/ 324:
/*!*****************************************!*\
  !*** ./src/@core/pipes/pipes.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorePipesModule": function() { return /* binding */ CorePipesModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 5104);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 4932);
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/safe.pipe */ 3031);
/* harmony import */ var _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/stripHtml.pipe */ 799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);







var CorePipesModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CorePipesModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CorePipesModule);
});
CorePipesModule.ɵfac = function CorePipesModule_Factory(t) {
  return new (t || CorePipesModule)();
};
CorePipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: CorePipesModule
});
CorePipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CorePipesModule, {
    declarations: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe],
    exports: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_3__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_5__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe]
  });
})();

/***/ }),

/***/ 3031:
/*!**************************************!*\
  !*** ./src/@core/pipes/safe.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);




/**
 * Sanitize HTML
 */
var SafePipe = /*#__PURE__*/function () {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  function SafePipe(_sanitizer) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SafePipe);
    this._sanitizer = _sanitizer;
  }
  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SafePipe, [{
    key: "transform",
    value: function transform(value, type) {
      switch (type) {
        case 'html':
          return this._sanitizer.bypassSecurityTrustHtml(value);
        case 'style':
          return this._sanitizer.bypassSecurityTrustStyle(value);
        case 'script':
          return this._sanitizer.bypassSecurityTrustScript(value);
        case 'url':
          return this._sanitizer.bypassSecurityTrustUrl(value);
        case 'resourceUrl':
          return this._sanitizer.bypassSecurityTrustResourceUrl(value);
        default:
          return this._sanitizer.bypassSecurityTrustHtml(value);
      }
    }
  }]);
  return SafePipe;
}();
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 799:
/*!*******************************************!*\
  !*** ./src/@core/pipes/stripHtml.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripHtmlPipe": function() { return /* binding */ StripHtmlPipe; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



var StripHtmlPipe = /*#__PURE__*/function () {
  function StripHtmlPipe() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StripHtmlPipe);
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StripHtmlPipe, [{
    key: "transform",
    value: function transform(value) {
      return value.replace(/<.*?>/g, ''); // replace tags
    }
  }]);
  return StripHtmlPipe;
}();
StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) {
  return new (t || StripHtmlPipe)();
};
StripHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "striphtml",
  type: StripHtmlPipe,
  pure: true
});

/***/ }),

/***/ 8726:
/*!**********************************************!*\
  !*** ./src/@core/services/config.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_CUSTOM_CONFIG": function() { return /* binding */ CORE_CUSTOM_CONFIG; },
/* harmony export */   "CoreConfigService": function() { return /* binding */ CoreConfigService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 8127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);









// Injection token for the core custom settings
var CORE_CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('coreCustomConfig');
var CoreConfigService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _config
   * @param {Router} _router
   */
  function CoreConfigService(_router, _config) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreConfigService);
    this._router = _router;
    this._config = _config;
    // Get the config from local storage
    if (_config.layout.enableLocalStorage) {
      this.localConfig = JSON.parse(localStorage.getItem('config'));
    } else {
      localStorage.removeItem('config');
    }
    // Set the defaultConfig to localConfig if we have else appConfig (app-config.ts)
    this._defaultConfig = this.localConfig ? this.localConfig : _config;
    // Initialize the config service
    this._initConfig();
  }
  //  Accessors
  // -----------------------------------------------------------------------------------------------------
  // Set the config
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreConfigService, [{
    key: "config",
    get:
    // Get the config
    function get() {
      return this._configSubject.asObservable();
    }
    /**
     * Get default config
     *
     * @returns {any}
     */,
    set: function set(data) {
      var config;
      // Set config = localConfig, If we have else defaultConfig
      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      }
      // Merge provided data with config, and create new merged config
      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data);
      // Set config to local storage if enableLocalStorage parameter is true
      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      }
      // Inform the observers
      this._configSubject.next(config);
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return this._defaultConfig;
    }
    // Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
  }, {
    key: "_initConfig",
    value: function _initConfig() {
      var _this = this;
      // Set the config from the default config
      this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig));
      // On every RoutesRecognized event
      // Check if localDefault (localStorage if we have else defaultConfig) is different form the default one
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.ResolveEnd;
      })).subscribe(function () {
        // Get the local config from local storage
        _this.localConfig = JSON.parse(localStorage.getItem('config'));
        // Set localDefault to localConfig if we have else defaultConfig
        var localDefault = _this.localConfig ? _this.localConfig : _this._defaultConfig;
        // If localDefault is different form the provided config (page config)
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual(_this._configSubject.getValue().layout, localDefault.layout)) {
          // Clone the current config
          var config = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(_this._configSubject.getValue());
          // Reset the layout from the default config
          config.layout = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(localDefault.layout);
          // Set the config
          _this._configSubject.next(config);
        }
      });
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Set config
     *
     * @param data
     * @param {{emitEvent: boolean}} param
     */
  }, {
    key: "setConfig",
    value: function setConfig(data) {
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        emitEvent: true
      };
      var config;
      // Set config = localConfig, If we have else defaultConfig
      this.localConfig = JSON.parse(localStorage.getItem('config'));
      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      }
      // Merge provided value with config, and create new merged config
      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data);
      // Set config to local storage if enableLocalStorage parameter is true
      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      }
      // If emitEvent option is true...
      if (param.emitEvent === true) {
        // Inform the observers
        this._configSubject.next(config);
      }
    }
    /**
     * Get config
     *
     * @returns {Observable<any>}
     */
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this._configSubject.asObservable();
    }
    /**
     * Reset to the default config
     */
  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig));
    }
  }]);
  return CoreConfigService;
}();
CoreConfigService.ɵfac = function CoreConfigService_Factory(t) {
  return new (t || CoreConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CORE_CUSTOM_CONFIG));
};
CoreConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CoreConfigService,
  factory: CoreConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4074:
/*!******************************************************!*\
  !*** ./src/@core/services/loading-screen.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreLoadingScreenService": function() { return /* binding */ CoreLoadingScreenService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);









var CoreLoadingScreenService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _document
   * @param {Router} _router
   * @param {AnimationBuilder} _animationBuilder
   */
  function CoreLoadingScreenService(_document, _router, _animationBuilder) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreLoadingScreenService);
    this._document = _document;
    this._router = _router;
    this._animationBuilder = _animationBuilder;
    // Initialize
    this._init();
  }
  // Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Initialize
   *
   * @private
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreLoadingScreenService, [{
    key: "_init",
    value: function _init() {
      var _this = this;
      // Get the loading screen element
      this.loadingScreenEl = this._document.body.querySelector('#loading-bg');
      // If loading screen element
      if (this.loadingScreenEl) {
        // Hide it on the first NavigationEnd event
        this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(function () {
          setTimeout(function () {
            _this.hide();
          });
        });
      }
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Show the loading screen
     */
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;
      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '99999'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this2.animationPlayer.play();
      }, 0);
    }
    /**
     * Hide the loading screen
     */
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;
      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '-10'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this3.loadingScreenEl.remove();
        _this3.animationPlayer.play();
      }, 0);
    }
  }]);
  return CoreLoadingScreenService;
}();
CoreLoadingScreenService.ɵfac = function CoreLoadingScreenService_Factory(t) {
  return new (t || CoreLoadingScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder));
};
CoreLoadingScreenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: CoreLoadingScreenService,
  factory: CoreLoadingScreenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 216:
/*!*********************************************!*\
  !*** ./src/@core/services/media.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMediaService": function() { return /* binding */ CoreMediaService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5224);






var CoreMediaService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {MediaObserver} _mediaObserver
   */
  function CoreMediaService(_mediaObserver) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMediaService);
    this._mediaObserver = _mediaObserver;
    this.onMediaUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    // Set the defaults
    this.currentMediaQuery = '';
    // Initialize
    this._init();
  }
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Initialize
   *
   * @private
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMediaService, [{
    key: "_init",
    value: function _init() {
      var _this = this;
      this._mediaObserver.media$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(function (change) {
        // console.log('subscription: ', change);
        if (_this.currentMediaQuery !== change.mqAlias) {
          _this.currentMediaQuery = change.mqAlias;
          _this.onMediaUpdate.next(change.mqAlias);
        }
      });
    }
  }]);
  return CoreMediaService;
}();
CoreMediaService.ɵfac = function CoreMediaService_Factory(t) {
  return new (t || CoreMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver));
};
CoreMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMediaService,
  factory: CoreMediaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7330:
/*!***************************************************!*\
  !*** ./src/@core/services/translation.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTranslationService": function() { return /* binding */ CoreTranslationService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9686);




var CoreTranslationService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {TranslateService} _translateService
   */
  function CoreTranslationService(_translateService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTranslationService);
    this._translateService = _translateService;
  }
  // Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Translate
   *
   * @param {Locale} args
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTranslationService, [{
    key: "translate",
    value: function translate() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var locales = [].concat(args);
      locales.forEach(function (locale) {
        // use setTranslation() with the third argument value as true to append translations instead of replacing them
        _this._translateService.setTranslation(locale.lang, locale.data, true);
      });
    }
  }]);
  return CoreTranslationService;
}();
CoreTranslationService.ɵfac = function CoreTranslationService_Factory(t) {
  return new (t || CoreTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
};
CoreTranslationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreTranslationService,
  factory: CoreTranslationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreConfig": function() { return /* binding */ coreConfig; }
/* harmony export */ });
/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them on each component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */
// prettier-ignore
var coreConfig = {
  app: {
    appName: 'Hello Home',
    appTitle: 'Hello Home - Dashboard',
    appLogoImage: 'assets/images/logo/logo.svg',
    appLanguage: 'en' // App Default Language (en, fr, de, pt etc..)
  },

  layout: {
    skin: 'default',
    type: 'vertical',
    animation: 'fadeIn',
    menu: {
      hidden: false,
      collapsed: false // Boolean: true, false
    },

    // ? For horizontal menu, navbar type will work for navMenu type
    navbar: {
      hidden: false,
      type: 'floating-nav',
      background: 'navbar-light',
      customBackgroundColor: true,
      backgroundColor: '' // BS color i.e bg-primary, bg-success
    },

    footer: {
      hidden: false,
      type: 'footer-static',
      background: 'footer-light',
      customBackgroundColor: false,
      backgroundColor: '' // BS color i.e bg-primary, bg-success
    },

    enableLocalStorage: true,
    customizer: false,
    scrollTop: false,
    buyNow: false // Boolean: true, false (Set false in real project, For demo purpose only)
  }
};

/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 4116);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/menu/menu */ 7001);
/* harmony import */ var app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/menu/i18n/en */ 9545);
/* harmony import */ var app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/menu/i18n/fr */ 796);
/* harmony import */ var app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/menu/i18n/de */ 3673);
/* harmony import */ var app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/menu/i18n/pt */ 9424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var _core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/loading-screen.service */ 4074);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/translation.service */ 7330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 2923);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 1851);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9039);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 7976);

























function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "vertical-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "horizontal-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_core_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "core-sidebar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AppComponent_core_sidebar_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r3.toggleSidebar("themeCustomizer");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "core-theme-customizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("invisibleOverlay", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"]("spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("data-feather", "settings");
  }
}
var AppComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Title} _title
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreLoadingScreenService} _coreLoadingScreenService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreTranslationService} _coreTranslationService
   * @param {TranslateService} _translateService
   */
  function AppComponent(document, _title, _renderer, _elementRef, _coreConfigService, _coreSidebarService, _coreLoadingScreenService, _coreMenuService, _coreTranslationService, _translateService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);
    this.document = document;
    this._title = _title;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService;
    this._coreLoadingScreenService = _coreLoadingScreenService;
    this._coreMenuService = _coreMenuService;
    this._coreTranslationService = _coreTranslationService;
    this._translateService = _translateService;
    // Get the application main menu
    this.menu = app_menu_menu__WEBPACK_IMPORTED_MODULE_3__.menu;
    // Register the menu to the menu service
    this._coreMenuService.register('main', this.menu);
    // Set the main menu as our current menu
    this._coreMenuService.setCurrentMenu('main');
    // Add languages to the translation service
    this._translateService.addLangs(['en', 'fr', 'de', 'pt']);
    // This language will be used as a fallback when a translation isn't found in the current language
    this._translateService.setDefaultLang('en');
    // Set the translations for the menu
    this._coreTranslationService.translate(app_menu_i18n_en__WEBPACK_IMPORTED_MODULE_4__.locale, app_menu_i18n_fr__WEBPACK_IMPORTED_MODULE_5__.locale, app_menu_i18n_de__WEBPACK_IMPORTED_MODULE_6__.locale, app_menu_i18n_pt__WEBPACK_IMPORTED_MODULE_7__.locale);
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
  }
  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Init wave effect (Ripple effect)
      node_waves__WEBPACK_IMPORTED_MODULE_2__.init();
      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
        // Set application default language.
        // Change application language? Read the ngxTranslate Fix
        // ? Use app-config.ts file to set default language
        var appLanguage = _this.coreConfig.app.appLanguage || 'en';
        _this._translateService.use(appLanguage);
        // ? OR
        // ? User the current browser lang if available, if undefined use 'en'
        // const browserLang = this._translateService.getBrowserLang();
        // this._translateService.use(browserLang.match(/en|fr|de|pt/) ? browserLang : 'en');
        /**
         * ! Fix : ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */
        /**
         *
         * Using different language than the default ('en') one i.e French?
         * In this case, you may find the issue where application is not properly translated when your app is initialized.
         *
         * It's due to ngxTranslate module and below is a fix for that.
         * Eventually we will move to the multi language implementation over to the Angular's core language service.
         *
         **/
        // Set the default language to 'en' and then back to 'fr'.
        setTimeout(function () {
          _this._translateService.setDefaultLang('en');
          _this._translateService.setDefaultLang(appLanguage);
        });
        /**
         * !Fix: ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */
        // Layout
        //--------
        // Remove default classes first
        _this._elementRef.nativeElement.classList.remove('vertical-layout', 'vertical-menu-modern', 'horizontal-layout', 'horizontal-menu');
        // Add class based on config options
        if (_this.coreConfig.layout.type === 'vertical') {
          _this._elementRef.nativeElement.classList.add('vertical-layout', 'vertical-menu-modern');
        } else if (_this.coreConfig.layout.type === 'horizontal') {
          _this._elementRef.nativeElement.classList.add('horizontal-layout', 'horizontal-menu');
        }
        // Navbar
        //--------
        // Remove default classes first
        _this._elementRef.nativeElement.classList.remove('navbar-floating', 'navbar-static', 'navbar-sticky', 'navbar-hidden');
        // Add class based on config options
        if (_this.coreConfig.layout.navbar.type === 'navbar-static-top') {
          _this._elementRef.nativeElement.classList.add('navbar-static');
        } else if (_this.coreConfig.layout.navbar.type === 'fixed-top') {
          _this._elementRef.nativeElement.classList.add('navbar-sticky');
        } else if (_this.coreConfig.layout.navbar.type === 'floating-nav') {
          _this._elementRef.nativeElement.classList.add('navbar-floating');
        } else {
          _this._elementRef.nativeElement.classList.add('navbar-hidden');
        }
        // Footer
        //--------
        // Remove default classes first
        _this._elementRef.nativeElement.classList.remove('footer-fixed', 'footer-static', 'footer-hidden');
        // Add class based on config options
        if (_this.coreConfig.layout.footer.type === 'footer-sticky') {
          _this._elementRef.nativeElement.classList.add('footer-fixed');
        } else if (_this.coreConfig.layout.footer.type === 'footer-static') {
          _this._elementRef.nativeElement.classList.add('footer-static');
        } else {
          _this._elementRef.nativeElement.classList.add('footer-hidden');
        }
        // Blank layout
        if (_this.coreConfig.layout.menu.hidden && _this.coreConfig.layout.navbar.hidden && _this.coreConfig.layout.footer.hidden) {
          _this._elementRef.nativeElement.classList.add('blank-page');
          // ! Fix: Transition issue while coming from blank page
          _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:none');
        } else {
          _this._elementRef.nativeElement.classList.remove('blank-page');
          // ! Fix: Transition issue while coming from blank page
          setTimeout(function () {
            _this._renderer.setAttribute(_this._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:300ms ease all');
          }, 0);
          // If navbar hidden
          if (_this.coreConfig.layout.navbar.hidden) {
            _this._elementRef.nativeElement.classList.add('navbar-hidden');
          }
          // Menu (Vertical menu hidden)
          if (_this.coreConfig.layout.menu.hidden) {
            _this._renderer.setAttribute(_this._elementRef.nativeElement, 'data-col', '1-column');
          } else {
            _this._renderer.removeAttribute(_this._elementRef.nativeElement, 'data-col');
          }
          // Footer
          if (_this.coreConfig.layout.footer.hidden) {
            _this._elementRef.nativeElement.classList.add('footer-hidden');
          }
        }
        // Skin Class (Adding to body as it requires highest priority)
        if (_this.coreConfig.layout.skin !== '' && _this.coreConfig.layout.skin !== undefined) {
          _this.document.body.classList.remove('default-layout', 'bordered-layout', 'dark-layout', 'semi-dark-layout');
          _this.document.body.classList.add(_this.coreConfig.layout.skin + '-layout');
        }
      });
      // Set the application page title
      this._title.setTitle(this.coreConfig.app.appTitle);
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);
  return AppComponent;
}();
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_10__.CoreLoadingScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_11__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__.CoreTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["name", "themeCustomizer", "class", "customizer d-none d-md-block", 3, "invisibleOverlay", 4, "ngIf"], ["name", "themeCustomizer", 1, "customizer", "d-none", "d-md-block", 3, "invisibleOverlay"], [1, "customizer-toggle", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [3, "data-feather"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AppComponent_core_sidebar_2_Template, 4, 4, "core-sidebar", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.customizer);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_13__.VerticalLayoutComponent, app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_14__.HorizontalLayoutComponent, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_15__.CoreSidebarComponent, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_16__.FeatherIconDirective, _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_17__.CoreThemeCustomizerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 5336);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 9013);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@core/core.module */ 3822);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components */ 6200);
/* harmony import */ var app_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app-config */ 635);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.component */ 2050);
/* harmony import */ var app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/layout.module */ 6092);
/* harmony import */ var app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/sample/sample.module */ 6446);
/* harmony import */ var _shered_global_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shered/global-error-handler.service */ 8167);
/* harmony import */ var _interceptor_basicHeaderInterceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptor/basicHeaderInterceptor */ 1712);










 // For auth after login toast














// import {HeadersInterceptor} from "./interceptor/Auth.interseptor";
var appRoutes = [{
  path: '',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_main_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/pages/pages.module */ 9550)).then(function (m) {
      return m.PagesModule;
    });
  }
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
}];

var AppModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _interceptor_basicHeaderInterceptor__WEBPACK_IMPORTED_MODULE_11__.HeadersInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler,
    useClass: _shered_global_error_handler_service__WEBPACK_IMPORTED_MODULE_10__.GlobalErrorHandler
  }],
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot(),
  //NgBootstrap
  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule.forRoot(),
  // Core modules
  _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule.forRoot(app_app_config__WEBPACK_IMPORTED_MODULE_6__.coreConfig), _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreThemeCustomizerModule,
  // App modules
  app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_9__.SampleModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
    //NgBootstrap
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _core_common_module__WEBPACK_IMPORTED_MODULE_4__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_5__.CoreThemeCustomizerModule,
    // App modules
    app_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, app_main_sample_sample_module__WEBPACK_IMPORTED_MODULE_9__.SampleModule]
  });
})();

/***/ }),

/***/ 2968:
/*!**************************************!*\
  !*** ./src/app/auth/models/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_0__.Role; },
/* harmony export */   "User": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.User; }
/* harmony export */ });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ 8276);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 3245);



/***/ }),

/***/ 8276:
/*!*************************************!*\
  !*** ./src/app/auth/models/role.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
var Role;
(function (Role) {
  Role["Admin"] = "Admin";
  Role["Client"] = "Client";
  Role["User"] = "User";
})(Role || (Role = {}));

/***/ }),

/***/ 3245:
/*!*************************************!*\
  !*** ./src/app/auth/models/user.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);


var User = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function User() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, User);
});

/***/ }),

/***/ 261:
/*!********************************************************!*\
  !*** ./src/app/auth/service/authentication.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 8260);
/* harmony import */ var app_auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/models */ 2968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 9013);









var AuthenticationService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  function AuthenticationService(_http, _toastrService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthenticationService);
    this._http = _http;
    this._toastrService = _toastrService;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  // getter: currentUserValue
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthenticationService, [{
    key: "currentUserValue",
    get: function get() {
      return this.currentUserSubject.value;
    }
    /**
     *  Confirms if user is admin
     */
  }, {
    key: "isAdmin",
    get: function get() {
      return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_3__.Role.Admin;
    }
    /**
     *  Confirms if user is client
     */
  }, {
    key: "isClient",
    get: function get() {
      return this.currentUser && this.currentUserSubject.value.role === app_auth_models__WEBPACK_IMPORTED_MODULE_3__.Role.Client;
    }
    /**
     * User login
     *
     * @param email
     * @param password
     * @returns user
     */
  }, {
    key: "login",
    value: function login(email, password) {
      var _this = this;
      return this._http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users/authenticate"), {
        email: email,
        password: password
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (user) {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          // Display welcome toast!
          setTimeout(function () {
            _this._toastrService.success('You have successfully logged in as an ' + user.role + ' user to Vuexy. Now you can start to explore. Enjoy! 🎉', '👋 Welcome, ' + user.firstName + '!', {
              toastClass: 'toast ngx-toastr',
              closeButton: true
            });
          }, 2500);
          // notify
          _this.currentUserSubject.next(user);
        }
        return user;
      }));
    }
  }, {
    key: "logout",
    value: function logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      // notify
      this.currentUserSubject.next(null);
    }
  }]);
  return AuthenticationService;
}();
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3650:
/*!***************************************!*\
  !*** ./src/app/auth/service/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService; }
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 261);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 9249);



/***/ }),

/***/ 9249:
/*!**********************************************!*\
  !*** ./src/app/auth/service/user.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6781);





var UserService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _http
   */
  function UserService(_http) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserService);
    this._http = _http;
  }
  /**
   * Get all users
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserService, [{
    key: "getAll",
    value: function getAll() {
      return this._http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users"));
    }
    /**
     * Get user by id
     */
  }, {
    key: "getById",
    value: function getById(id) {
      return this._http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, "/users/").concat(id));
    }
  }]);
  return UserService;
}();
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9351:
/*!*************************************!*\
  !*** ./src/app/interceptor/Data.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallerConstant": function() { return /* binding */ CallerConstant; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);


var CallerConstant = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CallerConstant() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CallerConstant);
});
// HTTP Headers
CallerConstant.HTTPHeaders = {
  Authorization: {
    Key: 'Authorization'
  },
  ContentType: {
    Key: 'Content-Type',
    Value: 'application/json'
  },
  Accept: {
    Key: 'Accept',
    Value: 'application/json'
  }
};

/***/ }),

/***/ 1712:
/*!*******************************************************!*\
  !*** ./src/app/interceptor/basicHeaderInterceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadersInterceptor": function() { return /* binding */ HeadersInterceptor; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ 9351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);






var HeadersInterceptor = /*#__PURE__*/function () {
  function HeadersInterceptor() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeadersInterceptor);
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeadersInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      var token = localStorage.getItem('tokenKey');
      if (token) request = request.clone({
        headers: request.headers.set(_Data__WEBPACK_IMPORTED_MODULE_2__.CallerConstant.HTTPHeaders.Authorization.Key, token)
      });
      request.headers.set(_Data__WEBPACK_IMPORTED_MODULE_2__.CallerConstant.HTTPHeaders.ContentType.Key, _Data__WEBPACK_IMPORTED_MODULE_2__.CallerConstant.HTTPHeaders.ContentType.Value);
      request.headers.set(_Data__WEBPACK_IMPORTED_MODULE_2__.CallerConstant.HTTPHeaders.Accept.Key, _Data__WEBPACK_IMPORTED_MODULE_2__.CallerConstant.HTTPHeaders.Accept.Value);
      return next.handle(request).pipe(
      // Response
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (response) {
        return response;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
      }));
    }
  }]);
  return HeadersInterceptor;
}();
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) {
  return new (t || HeadersInterceptor)();
};
HeadersInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HeadersInterceptor,
  factory: HeadersInterceptor.ɵfac
});

/***/ }),

/***/ 3957:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", link_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}
function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}
function BreadcrumbComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !link_r1.isLink);
  }
}
var _c0 = function _c0(a0, a1) {
  return {
    "justify-content-center": a0,
    "justify-content-end": a1
  };
};
var _c1 = function _c1(a0, a1, a2, a3, a4, a5) {
  return {
    "breadcrumb-slash": a0,
    "breadcrumb-dots": a1,
    "breadcrumb-dashes": a2,
    "breadcrumb-pipes": a3,
    "breadcrumb-chevron": a4,
    "mr-1": a5
  };
};
var BreadcrumbComponent = /*#__PURE__*/function () {
  function BreadcrumbComponent() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BreadcrumbComponent);
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BreadcrumbComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // concatenate default properties with passed properties
      this.breadcrumb = this.breadcrumb;
    }
  }]);
  return BreadcrumbComponent;
}();
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  inputs: {
    breadcrumb: "breadcrumb"
  },
  decls: 3,
  vars: 13,
  consts: [[1, "breadcrumb-wrapper", "d-flex", 3, "ngClass"], [1, "breadcrumb", 3, "ngClass"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.breadcrumb.alignment == "center", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](6, _c1, ctx.breadcrumb.type == "slash", ctx.breadcrumb.type == "dots", ctx.breadcrumb.type == "dashes", ctx.breadcrumb.type == "pipes", ctx.breadcrumb.type == "chevron", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadcrumb.links);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
  encapsulation: 2
});

/***/ }),

/***/ 3586:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": function() { return /* binding */ BreadcrumbModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 3957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);







var BreadcrumbModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function BreadcrumbModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreadcrumbModule);
});
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};
BreadcrumbModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([])]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
    declarations: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 4665:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderComponent": function() { return /* binding */ ContentHeaderComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 3957);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 3113);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);









var _c0 = function _c0() {
  return ["/"];
};
function ContentHeaderComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "check-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "message-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "calendar");
  }
}
function ContentHeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ContentHeaderComponent_ng_container_0_ng_container_8_Template, 19, 21, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.contentHeader.headerTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumb", ctx_r0.contentHeader.breadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.contentHeader.actionButton);
  }
}
var ContentHeaderComponent = /*#__PURE__*/function () {
  function ContentHeaderComponent() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentHeaderComponent);
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentHeaderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
  return ContentHeaderComponent;
}();
ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) {
  return new (t || ContentHeaderComponent)();
};
ContentHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContentHeaderComponent,
  selectors: [["app-content-header"]],
  inputs: {
    contentHeader: "contentHeader"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "content-header", "row"], [1, "content-header-left", "col-md-9", "col-12", "mb-2"], [1, "row", "breadcrumbs-top"], [1, "col-12", "d-flex"], [1, "content-header-title", "float-left", "mb-0"], [3, "breadcrumb"], [1, "content-header-right", "text-md-right", "col-md-3", "col-12", "d-md-block", "d-none"], [1, "form-group", "breadcrum-right"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", "id", "dropdownSettings", "type", "button", "rippleEffect", "", 1, "btn-icon", "btn", "btn-primary", "btn-round", "btn-sm"], [3, "data-feather"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSettings"], ["ngbDropdownItem", "", 3, "routerLink"]],
  template: function ContentHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentHeaderComponent_ng_container_0_Template, 9, 3, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.contentHeader);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem],
  encapsulation: 2
});

/***/ }),

/***/ 9079:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderModule": function() { return /* binding */ ContentHeaderModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.module */ 3586);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);









var ContentHeaderModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentHeaderModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentHeaderModule);
});
ContentHeaderModule.ɵfac = function ContentHeaderModule_Factory(t) {
  return new (t || ContentHeaderModule)();
};
ContentHeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ContentHeaderModule
});
ContentHeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContentHeaderModule, {
    declarations: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule],
    exports: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent]
  });
})();

/***/ }),

/***/ 9575:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/content/content.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/animations/core.animation */ 6911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);








var ContentComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   *
   */
  function ContentComponent(_coreConfigService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentComponent);
    this._coreConfigService = _coreConfigService;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  /**
   * Fade In Left Animation
   *
   * @param outlet
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentComponent, [{
    key: "fadeInLeft",
    value: function fadeInLeft(outlet) {
      if (this.animate === 'fadeInLeft') {
        return outlet.activatedRouteData.animation;
      }
      return null;
    }
    /**
     * Zoom In Animation
     *
     * @param outlet
     */
  }, {
    key: "zoomIn",
    value: function zoomIn(outlet) {
      if (this.animate === 'zoomIn') {
        return outlet.activatedRouteData.animation;
      }
      return null;
    }
    /**
     * Fade In Animation
     *
     * @param outlet
     */
  }, {
    key: "fadeIn",
    value: function fadeIn(outlet) {
      if (this.animate === 'fadeIn') {
        return outlet.activatedRouteData.animation;
      }
      return null;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
        _this.animate = _this.coreConfig.layout.animation;
      });
    }
  }]);
  return ContentComponent;
}();
ContentComponent.ɵfac = function ContentComponent_Factory(t) {
  return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService));
};
ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ContentComponent,
  selectors: [["content"]],
  decls: 3,
  vars: 3,
  consts: [["outlet", "outlet"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@zoomIn", ctx.zoomIn(_r0))("@fadeInLeft", ctx.fadeInLeft(_r0))("@fadeIn", ctx.fadeIn(_r0));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  encapsulation: 2,
  data: {
    animation: [_core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.zoomIn, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeIn]
  }
});

/***/ }),

/***/ 6294:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/content/content.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": function() { return /* binding */ ContentModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 9575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






var ContentModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentModule);
});
ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};
ContentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContentModule, {
    declarations: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent]
  });
})();

/***/ }),

/***/ 3081:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 323);









function FooterComponent_app_scroll_top_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-scroll-top");
  }
}
function FooterComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var FooterComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function FooterComponent(_coreConfigService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);
    this._coreConfigService = _coreConfigService;
    this.year = new Date().getFullYear();
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }]);
  return FooterComponent;
}();
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["footer"]],
  decls: 13,
  vars: 6,
  consts: [[1, "clearfix", "mb-0"], [1, "float-md-left", "d-block", "d-md-inline-block", "mt-25"], ["href", "https://directorstudio.me/", "target", "_blank", 1, "ml-25"], [1, "d-none", "d-sm-inline-block"], [1, "float-md-right", "d-none", "d-md-block"], [3, "data-feather"], [4, "ngIf"], [1, "buy-now"], ["href", "https://1.envato.market/vuexy_admin", "target", "_blank", "class", "btn btn-danger", 4, "ngIf"], ["href", "https://1.envato.market/vuexy_admin", "target", "_blank", 1, "btn", "btn-danger"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Director Studio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, ", All rights Reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Hand-crafted & Made with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FooterComponent_app_scroll_top_10_Template, 1, 0, "app-scroll-top", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FooterComponent_a_12_Template, 2, 0, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" COPYRIGHT \xA9 ", ctx.year, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("pink");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "heart");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.scrollTop);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.buyNow);
    }
  },
  directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__.ScrollTopComponent],
  encapsulation: 2
});

/***/ }),

/***/ 2004:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/footer/footer.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 3081);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);







var FooterModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterModule);
});
FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};
FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__.ScrollTopComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
  });
})();

/***/ }),

/***/ 323:
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/footer/scroll-to-top/scroll-top.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": function() { return /* binding */ ScrollTopComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 3113);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);








var _c0 = function _c0(a0) {
  return {
    "show-scroll-to-top": a0
  };
};
var ScrollTopComponent = /*#__PURE__*/function () {
  function ScrollTopComponent(document) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollTopComponent);
    this.document = document;
    this.topOffset = 150; // Top offset to display scroll to top button
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollTopComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if (window.pageYOffset > this.topOffset || document.documentElement.scrollTop > this.topOffset || document.body.scrollTop > this.topOffset) {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 8);
        }
      })();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
  return ScrollTopComponent;
}();
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
  return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};
ScrollTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScrollTopComponent,
  selectors: [["app-scroll-top"]],
  hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 2,
  vars: 4,
  consts: [["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", "btn-icon", "scroll-to-top", 3, "ngClass", "click"], [3, "data-feather"]],
  template: function ScrollTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_0_listener() {
        return ctx.scrollToTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx.windowScrolled));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", "arrow-up");
    }
  },
  directives: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective],
  styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5%;\n  right: 30px;\n  z-index: 99;\n  display: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1JTtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2hvdy1zY3JvbGwtdG8tdG9wIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 3693:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 4557);









var HorizontalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   */
  function HorizontalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);
    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On Init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
      // Get current menu
      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }]);
  return HorizontalMenuComponent;
}();
HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) {
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService));
};
HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["horizontal-menu"]],
  decls: 2,
  vars: 0,
  consts: [[1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "layout", "horizontal", "core-menu", "", 1, "nav", "navbar-nav"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
  },
  directives: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 2130:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuModule": function() { return /* binding */ HorizontalMenuModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 6200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 3693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);






var HorizontalMenuModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function HorizontalMenuModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HorizontalMenuModule);
});
HorizontalMenuModule.ɵfac = function HorizontalMenuModule_Factory(t) {
  return new (t || HorizontalMenuModule)();
};
HorizontalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: HorizontalMenuModule
});
HorizontalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HorizontalMenuModule, {
    declarations: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule],
    exports: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuComponent]
  });
})();

/***/ }),

/***/ 9389:
/*!**********************************************************!*\
  !*** ./src/app/layout/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 4075);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 3693);






function MenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "vertical-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function MenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "horizontal-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
var MenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   * @param {Renderer2} _renderer
   */
  function MenuComponent(_elementRef, _renderer) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuComponent);
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    // Set the default menu
    this._menuType = 'vertical-menu';
  }
  // Accessors
  // -----------------------------------------------------------------------------------------------------
  //Get the menu type
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuComponent, [{
    key: "menuType",
    get: function get() {
      return this._menuType;
    },
    set: function set(value) {
      // Remove the old class name from native element
      this._renderer.removeClass(this._elementRef.nativeElement, this.menuType);
      // Store the menuType value
      this._menuType = value;
      // Add the new class name from native element
      this._renderer.addClass(this._elementRef.nativeElement, value);
    }
  }]);
  return MenuComponent;
}();
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  inputs: {
    menuType: "menuType"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MenuComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "vertical-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "horizontal-menu");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent, app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 4735:
/*!*******************************************************!*\
  !*** ./src/app/layout/components/menu/menu.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": function() { return /* binding */ MenuModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 9389);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.module */ 5314);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.module */ 2130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);







var MenuModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function MenuModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuModule);
});
MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || MenuModule)();
};
MenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MenuModule
});
MenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
    imports: [_core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuModule],
    exports: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent]
  });
})();

/***/ }),

/***/ 4075:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 8029);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 4557);
















var _c0 = function _c0() {
  return ["/"];
};
var _c1 = function _c1(a0) {
  return {
    "d-block": a0
  };
};
var VerticalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {Router} _router
   */
  function VerticalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService, _router) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);
    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService;
    this._router = _router;
    this.isScrolled = false;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On Init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
      this.isCollapsed = this._coreSidebarService.getSidebarRegistry('menu').collapsed;
      // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        if (_this._coreSidebarService.getSidebarRegistry('menu')) {
          _this._coreSidebarService.getSidebarRegistry('menu').close();
        }
      });
      // scroll to active on navigation end
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(function () {
        setTimeout(function () {
          _this.directiveRef.scrollToElement('.navigation .active', -180, 500);
        });
      });
      // Get current menu
      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Sidebar scroll set isScrolled as true
     */
  }, {
    key: "onSidebarScroll",
    value: function onSidebarScroll() {
      if (this.directiveRef.position(true).y > 3) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
    /**
     * Toggle sidebar expanded status
     */
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
    }
    /**
     * Toggle sidebar collapsed status
     */
  }, {
    key: "toggleSidebarCollapsible",
    value: function toggleSidebarCollapsible() {
      var _this2 = this;
      // Get the current menu state
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.isCollapsed = config.layout.menu.collapsed;
      });
      if (this.isCollapsed) {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: false
            }
          }
        }, {
          emitEvent: true
        });
      } else {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: true
            }
          }
        }, {
          emitEvent: true
        });
      }
    }
  }]);
  return VerticalMenuComponent;
}();
VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) {
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["vertical-menu"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 16,
  vars: 8,
  consts: [[1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mr-auto"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", 2, "width", "45px", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav-item", "nav-toggle"], [1, "nav-link", "modern-nav-toggle", "d-none", "d-xl-block", "pr-0", 3, "click"], [1, "toggle-icon", "feather", "font-medium-4", "collapse-toggle-icon", "text-primary", 3, "ngClass"], [1, "nav-link", "modern-nav-toggle", "d-block", "d-xl-none", "pr-0", 3, "click"], ["data-feather", "x", 1, "font-medium-4", "text-primary", "toggle-icon"], [1, "shadow-bottom", 3, "ngClass"], [1, "main-menu-content", 3, "perfectScrollbar", "scroll"], ["layout", "vertical", "core-menu", "", 1, "navigation", "navigation-main"]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_9_listener() {
        return ctx.toggleSidebarCollapsible();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_11_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scroll", function VerticalMenuComponent_Template_div_scroll_14_listener() {
        return ctx.onSidebarScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "ul", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.isCollapsed === true ? "icon-circle" : "icon-disc");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c1, ctx.isScrolled));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 5314:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuModule": function() { return /* binding */ VerticalMenuModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 6200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 4075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);









var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var VerticalMenuModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function VerticalMenuModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VerticalMenuModule);
});
VerticalMenuModule.ɵfac = function VerticalMenuModule_Factory(t) {
  return new (t || VerticalMenuModule)();
};
VerticalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: VerticalMenuModule
});
VerticalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](VerticalMenuModule, {
    declarations: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_2__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_4__.VerticalMenuComponent]
  });
})();

/***/ }),

/***/ 830:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarBookmarkComponent": function() { return /* binding */ NavbarBookmarkComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 1704);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 5104);













var _c0 = ["openBookmark"];
function NavbarBookmarkComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", page_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r5.icon);
  }
}
var _c1 = function _c1(a0) {
  return {
    current_item: a0
  };
};
function NavbarBookmarkComponent_ng_container_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r9.closeBookmark();
      return ctx_r9.removeOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_button_click_6_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var page_r7 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return ctx_r11.toggleBookmark(page_r7.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var page_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r8 === ctx_r6.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r7.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r7.isBookmarked);
  }
}
function NavbarBookmarkComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_12_li_1_Template, 8, 10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.bookmarkText, "title"), 0, 6));
  }
}
function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r16.closeBookmark();
      return ctx_r16.removeOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var page_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return ctx_r18.toggleBookmark(page_r13.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var i_r14 = ctx_r20.index;
    var page_r13 = ctx_r20.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r14 === ctx_r15.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r13.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r13.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r13.isBookmarked);
  }
}
function NavbarBookmarkComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template, 8, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var page_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", page_r13.isBookmarked);
  }
}
function NavbarBookmarkComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NavbarBookmarkComponent_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "filter");
  }
  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](1, 1, ctx_r4.pages, ctx_r4.bookmarkText, "title"));
  }
}
var NavbarBookmarkComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param _searchService
   */
  function NavbarBookmarkComponent(document, _searchService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarBookmarkComponent);
    this.document = document;
    this._searchService = _searchService;
    // Public
    this.bookmarkText = '';
    this.openBookmarkRef = false;
    this.activeIndex = 0;
    this.pages = [];
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarBookmarkComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openBookmarkRef = false;
      this.bookmarkText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      // Close Bookmark if Clicked on Overlay
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      }
      // Close Bookmark if clicked Outside of Container
      if (!(event.target.nodeName === 'INPUT') && this.openBookmarkRef === true) {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Add Bookmark
     *
     * @param id
     */
  }, {
    key: "addBookmark",
    value: function addBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });
      this.pages[index].isBookmarked = true;
      this.bookmarkedItems.push(this.pages[index]);
    }
    /**
     * Remove Bookmark
     *
     * @param id
     */
  }, {
    key: "removeBookmark",
    value: function removeBookmark(id) {
      var index = this.bookmarkedItems.findIndex(function (object) {
        return object.id === id;
      });
      this.bookmarkedItems[index].isBookmarked = false;
      this.bookmarkedItems.splice(index, 1);
    }
    /**
     * Open Bookmark
     */
  }, {
    key: "openBookmark",
    value: function openBookmark() {
      this.openBookmarkRef = true;
      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Close Bookmark
     */
  }, {
    key: "closeBookmark",
    value: function closeBookmark() {
      this.openBookmarkRef = false;
      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Remove Overlay
     */
  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Next Active Match
     */
  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.bookmarkSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */
  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */
  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }
      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }
    }
    /**
     * Toggle Bookmark
     *
     * @param id
     */
  }, {
    key: "toggleBookmark",
    value: function toggleBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });
      if (this.pages[index].isBookmarked === true) {
        this.removeBookmark(id);
      } else {
        this.addBookmark(id);
      }
    }
    /**
     * Toggle Bookmark Popup
     */
  }, {
    key: "toggleBookmarkPopup",
    value: function toggleBookmarkPopup() {
      var _this = this;
      setTimeout(function () {
        if (_this.openBookmarkRef === false) {
          _this.openBookmark();
        } else {
          _this.closeBookmark();
        }
        setTimeout(function () {
          _this._bookmarkElement.nativeElement.focus();
        }, 0);
      }, 0);
    }
    /**
     * Update Bookmark
     *
     * @param event
     */
  }, {
    key: "bookmarkUpdate",
    value: function bookmarkUpdate(event) {
      var val = event.target.value.toLowerCase();
      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }
      this.autoSuggestion(event);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;
      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.bookmarkedItems = _this2.pages.filter(function (page) {
          return page.isBookmarked === true;
        });
        _this2.bookmarkSearchLimit = _this2.apiData[0].bookmarkLimit;
      });
      this._searchService.onIsBookmarkOpenChange.subscribe(function (res) {
        _this2.openBookmarkRef = res;
      });
    }
  }]);
  return NavbarBookmarkComponent;
}();
NavbarBookmarkComponent.ɵfac = function NavbarBookmarkComponent_Factory(t) {
  return new (t || NavbarBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};
NavbarBookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarBookmarkComponent,
  selectors: [["app-navbar-bookmark"]],
  viewQuery: function NavbarBookmarkComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._bookmarkElement = _t.first);
    }
  },
  hostBindings: function NavbarBookmarkComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarBookmarkComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarBookmarkComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 15,
  vars: 10,
  consts: [[1, "nav", "navbar-nav", "bookmark-icons"], [4, "ngFor", "ngForOf"], [1, "nav", "navbar-nav"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "bookmark-star", 3, "click"], [3, "data-feather"], [1, "bookmark-input", "search-input"], [1, "bookmark-input-icon"], ["type", "text", "placeholder", "Bookmark", "tabindex", "0", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openBookmark", ""], [1, "search-list", "search-list-bookmark", "show", 3, "perfectScrollbar"], [4, "ngIf", "ngIfElse"], ["defaultBookmarks", ""], ["placement", "bottom", 1, "nav-link", 3, "routerLink", "ngbTooltip"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click"], [1, "d-flex", "justify-content-start", "align-items-center"], ["type", "button", 1, "btn", "p-0", 3, "click"], [1, "feather", "icon-star"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngIf"]],
  template: function NavbarBookmarkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_1_Template, 4, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_Template_a_click_4_listener() {
        return ctx.toggleBookmarkPopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarBookmarkComponent_Template_input_keyup_9_listener($event) {
        return ctx.bookmarkUpdate($event);
      })("ngModelChange", function NavbarBookmarkComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.bookmarkText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NavbarBookmarkComponent_ng_container_12_Template, 4, 9, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NavbarBookmarkComponent_ng_template_13_Template, 2, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bookmarkedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon text-warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "star");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.openBookmarkRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.bookmarkText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bookmarkText !== "")("ngIfElse", _r3);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7920:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/navbar-notification.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNotificationComponent": function() { return /* binding */ NavbarNotificationComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/notifications.service */ 2008);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);









function NavbarNotificationComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", message_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", message_r2.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r2.text);
  }
}
var _c0 = function _c0(a0, a1, a2) {
  return {
    "bg-light-danger": a0,
    "bg-light-success": a1,
    "bg-light-warning": a2
  };
};
function NavbarNotificationComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var systemMessage_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c0, systemMessage_r3.icon === "x", systemMessage_r3.icon === "check", systemMessage_r3.icon === "alert-triangle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", systemMessage_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", systemMessage_r3.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](systemMessage_r3.text);
  }
}
var NavbarNotificationComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {NotificationsService} _notificationsService
   */
  function NavbarNotificationComponent(_notificationsService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarNotificationComponent);
    this._notificationsService = _notificationsService;
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarNotificationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this._notificationsService.onApiDataChange.subscribe(function (res) {
        _this.notifications = res;
      });
    }
  }]);
  return NavbarNotificationComponent;
}();
NavbarNotificationComponent.ɵfac = function NavbarNotificationComponent_Factory(t) {
  return new (t || NavbarNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
};
NavbarNotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NavbarNotificationComponent,
  selectors: [["app-navbar-notification"]],
  decls: 24,
  vars: 5,
  consts: [["ngbDropdown", "", 1, "nav-item", "dropdown-notification", "mr-25"], ["ngbDropdownToggle", "", "id", "navbarNotificationDropdown", 1, "nav-link"], ["data-feather", "bell", 1, "ficon"], [1, "badge", "badge-pill", "badge-danger", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarNotificationDropdown", 1, "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex"], [1, "notification-title", "mb-0", "mr-auto"], [1, "badge", "badge-pill", "badge-light-primary"], [1, "scrollable-container", "media-list", 3, "perfectScrollbar"], ["class", "d-flex", "href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [1, "media", "d-flex", "align-items-center"], [1, "font-weight-bolder", "mr-auto", "mb-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["id", "systemNotification", "type", "checkbox", 1, "custom-control-input", 3, "checked"], ["for", "systemNotification", 1, "custom-control-label"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-block"], ["href", "javascript:void(0)", 1, "d-flex"], [1, "media", "d-flex", "align-items-start"], [1, "media-left"], [1, "avatar"], ["alt", "avatar", "width", "32", "height", "32", 3, "src"], [1, "media-body"], [1, "media-heading", 3, "innerHTML"], [1, "notification-text"], [1, "avatar", 3, "ngClass"], [1, "avatar-content"], [1, "avatar-icon", 3, "data-feather"]],
  template: function NavbarNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NavbarNotificationComponent_a_13_Template, 9, 3, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "System Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NavbarNotificationComponent_a_20_Template, 10, 8, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Read all notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length), " New ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.messages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.notifications.system);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.systemMessages);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective],
  encapsulation: 2
});

/***/ }),

/***/ 2008:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/notifications.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": function() { return /* binding */ NotificationsService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6781);





var NotificationsService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function NotificationsService(_httpClient) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationsService);
    this._httpClient = _httpClient;
    // Public
    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.getNotificationsData();
  }
  /**
   * Get Notifications Data
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationsService, [{
    key: "getNotificationsData",
    value: function getNotificationsData() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/notifications-data').subscribe(function (response) {
          _this.apiData = response;
          _this.onApiDataChange.next(_this.apiData);
          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);
  return NotificationsService;
}();
NotificationsService.ɵfac = function NotificationsService_Factory(t) {
  return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
NotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationsService,
  factory: NotificationsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6097:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/navbar-search.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarSearchComponent": function() { return /* binding */ NavbarSearchComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 1704);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 5104);












var _c0 = ["openSearch"];
var _c1 = ["pageList"];
var _c2 = function _c2(a0) {
  return {
    current_item: a0
  };
};
function NavbarSearchComponent_ng_container_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseover_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return page_r12.hover = true;
    })("mouseout", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseout_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return page_r12.hover = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_ng_container_16_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r17.toggleSearch();
    })("keyup.enter", function NavbarSearchComponent_ng_container_16_li_1_Template_a_keyup_enter_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r18.navigate(page_r12.link);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var page_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("current_item", page_r12.hover);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, i_r13 === ctx_r11.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r12.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r12.title);
  }
}
function NavbarSearchComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_16_li_1_Template, 6, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.searchText, "title"), 0, 4));
  }
}
function NavbarSearchComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NavbarSearchComponent_ng_container_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var file_r20 = ctx.$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r19.i === ctx_r19.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", file_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.by);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.size);
  }
}
function NavbarSearchComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_24_li_1_Template, 12, 7, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r5.files, ctx_r5.searchText, "title"), 0, 4));
  }
}
function NavbarSearchComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NavbarSearchComponent_ng_container_32_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var contact_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", contact_r22.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.date);
  }
}
function NavbarSearchComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_32_li_1_Template, 12, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r8.contacts, ctx_r8.searchText, "title"), 0, 4));
  }
}
function NavbarSearchComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var NavbarSearchComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param router
   * @param _searchService
   */
  function NavbarSearchComponent(document, _elementRef, router, _searchService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarSearchComponent);
    this.document = document;
    this._elementRef = _elementRef;
    this.router = router;
    this._searchService = _searchService;
    // Public
    this.searchText = '';
    this.openSearchRef = false;
    this.activeIndex = 0;
    this.pages = [];
    this.files = [];
    this.contacts = [];
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarSearchComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openSearchRef = false;
      this.searchText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openSearchRef = false;
        this.searchText = '';
      }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Next Active Match
     */
  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.pageSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */
  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Remove Overlay
     */
  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */
  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      var _a;
      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }
      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }
      if (13 === event.keyCode) {
        // Navigate to activeIndex
        // ! Todo: Improve this code
        var current_item = this._pageListElement.nativeElement.getElementsByClassName('current_item');
        (_a = current_item[0]) === null || _a === void 0 ? void 0 : _a.children[0].click();
      }
    }
    /**
     * Toggle Search
     */
  }, {
    key: "toggleSearch",
    value: function toggleSearch() {
      var _this = this;
      this._searchService.onIsBookmarkOpenChange.next(false);
      this.removeOverlay();
      this.openSearchRef = !this.openSearchRef;
      this.activeIndex = 0;
      setTimeout(function () {
        _this._inputElement.nativeElement.focus();
      });
      if (this.openSearchRef === false) {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
        this.searchText = '';
      }
    }
    /**
     * Search Update
     *
     * @param event
     */
  }, {
    key: "searchUpdate",
    value: function searchUpdate(event) {
      var val = event.target.value.toLowerCase();
      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }
      this.autoSuggestion(event);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;
      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.pageSearchLimit = _this2.apiData[0].searchLimit;
        _this2.files = _this2.apiData[1].data;
        _this2.contacts = _this2.apiData[2].data;
      });
    }
  }]);
  return NavbarSearchComponent;
}();
NavbarSearchComponent.ɵfac = function NavbarSearchComponent_Factory(t) {
  return new (t || NavbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};
NavbarSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarSearchComponent,
  selectors: [["app-navbar-search"]],
  viewQuery: function NavbarSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._pageListElement = _t.first);
    }
  },
  hostBindings: function NavbarSearchComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarSearchComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarSearchComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 36,
  vars: 28,
  consts: [[1, "nav-item", "nav-search"], [1, "nav-link", "nav-link-search", 3, "click"], [3, "data-feather"], [1, "search-input"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Vuexy...", "tabindex", "-1", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openSearch", ""], [1, "btn", "search-input-close", "p-0", 3, "click"], [1, "search-list", "search-list-main", 3, "perfectScrollbar"], ["pageList", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0)"], [1, "section-label", "mt-75", "mb-0"], [4, "ngIf", "ngIfElse"], ["noResultsPages", ""], ["noResultsFiles", ""], ["noResultsMembers", ""], ["class", "auto-suggestion", 3, "ngClass", "current_item", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass", "mouseover", "mouseout"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click", "keyup.enter"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "mr-75", 3, "data-feather"], [1, "auto-suggestion", "justify-content-between"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "py-50"], [1, "d-flex", "justify-content-start"], ["data-feather", "alert-circle", 1, "mr-25"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex"], [1, "mr-75"], ["alt", "png", "height", "32", 3, "src"], [1, "search-data"], [1, "search-data-title", "mb-0"], [1, "text-muted"], [1, "search-data-size", "mr-50", "text-muted"], ["class", "auto-suggestion", 4, "ngFor", "ngForOf"], [1, "auto-suggestion"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "py-50", "w-100"], [1, "avatar", "mr-75"]],
  template: function NavbarSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_a_click_1_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarSearchComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchUpdate($event);
      })("ngModelChange", function NavbarSearchComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_button_click_8_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ul", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NavbarSearchComponent_ng_container_16_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, NavbarSearchComponent_ng_template_18_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NavbarSearchComponent_ng_container_24_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NavbarSearchComponent_ng_template_26_Template, 6, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, NavbarSearchComponent_ng_container_32_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, NavbarSearchComponent_ng_template_34_Template, 6, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
      var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.openSearchRef === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.searchText !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](17, 16, ctx.pages, ctx.searchText, "title").length)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](25, 20, ctx.files, ctx.searchText, "title").length)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 24, ctx.contacts, ctx.searchText, "title").length)("ngIfElse", _r9);
    }
  },
  directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
  pipes: [_core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
  encapsulation: 2
});

/***/ }),

/***/ 1704:
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/search.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6781);





var SearchService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function SearchService(_httpClient) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchService);
    this._httpClient = _httpClient;
    // Public
    this.search = '';
    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.onIsBookmarkOpenChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.getSearchData();
  }
  /**
   * Get Search Data
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchService, [{
    key: "getSearchData",
    value: function getSearchData() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/search-data').subscribe(function (response) {
          _this.apiData = response;
          _this.onApiDataChange.next(_this.apiData);
          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);
  return SearchService;
}();
SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 360:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 8127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/service */ 3650);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/media.service */ 216);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 6528);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 5224);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);

















var _c0 = function _c0() {
  return ["/"];
};
function NavbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.coreConfig.app.appName);
  }
}
function NavbarComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_ul_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r2.toggleSidebar("menu");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "menu");
  }
}
var NavbarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreMediaService} _coreMediaService
   * @param {MediaObserver} _mediaObserver
   * @param {TranslateService} _translateService
   */
  function NavbarComponent(_router, _authenticationService, _coreConfigService, _coreMediaService, _coreSidebarService, _mediaObserver, _translateService) {
    var _this = this;
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);
    this._router = _router;
    this._authenticationService = _authenticationService;
    this._coreConfigService = _coreConfigService;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._mediaObserver = _mediaObserver;
    this._translateService = _translateService;
    this.isFixed = false;
    this.windowScrolled = false;
    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    });
    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      fr: {
        title: 'French',
        flag: 'fr'
      },
      de: {
        title: 'German',
        flag: 'de'
      },
      pt: {
        title: 'Portuguese',
        flag: 'pt'
      }
    };
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) && this.coreConfig.layout.navbar.type == 'navbar-static-top' && this.coreConfig.layout.type == 'horizontal') {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
    /**
     * Set the language
     *
     * @param language
     */
  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      // Set the selected language for the navbar on change
      this.selectedLanguage = language;
      // Use the selected language id for translations
      this._translateService.use(language);
      this._coreConfigService.setConfig({
        app: {
          appLanguage: language
        }
      }, {
        emitEvent: true
      });
    }
    /**
     * Toggle Dark Skin
     */
  }, {
    key: "toggleDarkSkin",
    value: function toggleDarkSkin() {
      var _this2 = this;
      // Get the current skin
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.currentSkin = config.layout.skin;
      });
      // Toggle Dark skin with prevSkin skin
      this.prevSkin = localStorage.getItem('prevSkin');
      if (this.currentSkin === 'dark') {
        this._coreConfigService.setConfig({
          layout: {
            skin: this.prevSkin ? this.prevSkin : 'default'
          }
        }, {
          emitEvent: true
        });
      } else {
        localStorage.setItem('prevSkin', this.currentSkin);
        this._coreConfigService.setConfig({
          layout: {
            skin: 'dark'
          }
        }, {
          emitEvent: true
        });
      }
    }
    /**
     * Logout method
     */
  }, {
    key: "logout",
    value: function logout() {
      localStorage.clear();
      this._router.navigate(['/login']);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;
      // get the currentUser details from localStorage
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // Subscribe to the config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this3.coreConfig = config;
        _this3.horizontalMenu = config.layout.type === 'horizontal';
        _this3.hiddenMenu = config.layout.menu.hidden === true;
        _this3.currentSkin = config.layout.skin;
        // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
        if (_this3.coreConfig.layout.type === 'vertical') {
          setTimeout(function () {
            if (_this3.coreConfig.layout.navbar.type === 'fixed-top') {
              _this3.isFixed = true;
            }
          }, 0);
        }
      });
      // Horizontal Layout Only: Add class fixed-top to navbar below large screen
      if (this.coreConfig.layout.type == 'horizontal') {
        // On every media(screen) change
        this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
          var isFixedTop = _this3._mediaObserver.isActive('bs-gt-xl');
          if (isFixedTop) {
            _this3.isFixed = false;
          } else {
            _this3.isFixed = true;
          }
        });
      }
      // Set the selected language from default languageOptions
      this.selectedLanguage = lodash__WEBPACK_IMPORTED_MODULE_2__.find(this.languageOptions, {
        id: this._translateService.currentLang
      });
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }]);
  return NavbarComponent;
}();
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_4__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_5__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_6__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  hostVars: 4,
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fixed-top", ctx.isFixed)("navbar-static-style-on-scroll", ctx.windowScrolled);
    }
  },
  decls: 20,
  vars: 6,
  consts: [["class", "navbar-header d-xl-block d-none", 4, "ngIf"], [1, "navbar-container", "d-flex", "content"], [1, "bookmark-wrapper", "d-flex", "align-items-center"], ["class", "nav navbar-nav d-xl-none", 4, "ngIf"], [1, "nav-item", "d-none", "d-lg-block"], ["type", "button", 1, "nav-link", "nav-link-style", "btn", 3, "click"], [1, "ficon", "font-medium-5", "feather", 3, "ngClass"], [1, "nav", "navbar-nav", "align-items-center", "ml-auto"], ["ngbDropdown", "", 1, "nav-item", "dropdown-user"], ["id", "dropdown-user", "ngbDropdownToggle", "", "id", "navbarUserDropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-user-link"], [1, "user-nav", "d-sm-flex", "d-none"], [1, "user-name", "font-weight-bolder"], [1, "user-status"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarUserDropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click"], [3, "data-feather"], [1, "navbar-header", "d-xl-block", "d-none"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", "width", "36", 3, "src"], [1, "brand-text", "mb-0"], [1, "nav", "navbar-nav", "d-xl-none"], [1, "nav-link", "menu-toggle", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 8, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, NavbarComponent_ul_3_Template, 4, 3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() {
        return ctx.toggleDarkSkin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "m.reda@capitallords.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Root");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.horizontalMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.menu.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.currentSkin === "dark" ? "icon-sun" : "icon-moon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "power");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownItem, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_7__.FeatherIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref],
  styles: [".dropdown-menu-right {\n  right: 0 !important;\n  left: auto !important;\n}\n\n.touchspin-cart .touchspin-wrapper {\n  width: 6.4rem;\n}\n\n.touchspin-cart:focus-within {\n  box-shadow: none !important;\n}\n\napp-navbar-bookmark {\n  display: flex;\n}\n\n.navbar-static-style-on-scroll {\n  background-color: #fff !important;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px !important;\n}\n\n.dark-layout .navbar-container .search-input .search-list li.auto-suggestion:hover {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBUUU7RUFDRSxhQUFBO0FBTEo7O0FBT0U7RUFDRSwyQkFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSwyREFBQTtBQVBGOztBQWlCWTtFQUNFLHlCQ3BCTztBRE1yQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcclxuXHJcbi8vIFRvIG9wZW4gZGQgb24gcmlnaHRcclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBDYXJ0IFRvdWNoc3BpblxyXG4udG91Y2hzcGluLWNhcnQge1xyXG4gIC50b3VjaHNwaW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNi40cmVtO1xyXG4gIH1cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtbmF2YmFyLWJvb2ttYXJrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vLyBBcHBseSBzdHlsZSBvbiB3aW5kb3cgc2Nyb2xsIGZvciBuYXZiYXIgc3RhdGljIHR5cGVcclxuLm5hdmJhci1zdGF0aWMtc3R5bGUtb24tc2Nyb2xsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIERhcmsgTGF5b3V0XHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgIC5zZWFyY2gtbGlzdCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgJi5hdXRvLXN1Z2dlc3Rpb24ge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLWRhcmsuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vL0JvZHlcclxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9keS1jb2xvcjogI2I0YjdiZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yOiAjM2I0MjUzICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XHJcblxyXG4vL1R5cG9ncmFwaHlcclxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWxhYmVsLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10ZXh0LW11dGVkLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xyXG5cclxuLy9DYXJkXHJcbiR0aGVtZS1kYXJrLWNhcmQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XHJcblxyXG4vL0lucHV0XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0NjU2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjNDQ0YjYwICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZzogIzU0NWE2YTtcclxuJHRoZW1lLWRhcmstc3dpdGNoLWJnLWRpc2FibGVkOiAjMWIyMzM3O1xyXG5cclxuLy9UYWJsZVxyXG4kdGhlbWUtZGFyay10YWJsZS1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1yb3ctYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhvdmVyLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWRhcmstbW9kYWwtaGVhZGVyLWJnOiAjMTYxZDMxICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jaGFydC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstd2lkZ2V0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 2625:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.module */ 4677);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 360);
/* harmony import */ var app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component */ 830);
/* harmony import */ var app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/navbar-search.component */ 6097);
/* harmony import */ var app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/navbar-notification.component */ 7920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);












var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var NavbarModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function NavbarModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavbarModule);
});
NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || NavbarModule)();
};
NavbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: NavbarModule
});
NavbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__.CoreTouchspinModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_6__.NavbarSearchComponent, app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_5__.NavbarBookmarkComponent, app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_7__.NavbarNotificationComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_3__.CoreTouchspinModule],
    exports: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent]
  });
})();

/***/ }),

/***/ 6840:
/*!**********************************************!*\
  !*** ./src/app/layout/custom-breakpoints.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomBreakPointsProvider": function() { return /* binding */ CustomBreakPointsProvider; }
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ 5224);

var BS_BREAKPOINTS = [{
  alias: 'bs-xs',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsXs'
}, {
  alias: 'bs-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px) and (max-width: 767.98px)',
  suffix: 'BsSm'
}, {
  alias: 'bs-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px) and (max-width: 991.98px)',
  suffix: 'BsMd'
}, {
  alias: 'bs-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px) and (max-width: 1199.98px)',
  suffix: 'BsLg'
}, {
  alias: 'bs-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsXl'
}, {
  alias: 'bs-gt-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px)',
  suffix: 'BsGtSm'
}, {
  alias: 'bs-gt-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px)',
  suffix: 'BsGtMd'
}, {
  alias: 'bs-gt-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px)',
  suffix: 'BsGtLg'
}, {
  alias: 'bs-gt-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsGtXl'
}, {
  alias: 'bs-lt-sm',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsLtSm'
}, {
  alias: 'bs-lt-md',
  overlapping: false,
  mediaQuery: '(max-width: 767.98px)',
  suffix: 'BsLtMd'
}, {
  alias: 'bs-lt-lg',
  overlapping: false,
  mediaQuery: '(max-width: 991.98px)',
  suffix: 'BsLtLg'
}, {
  alias: 'bs-lt-xl',
  overlapping: false,
  mediaQuery: '(max-width: 1199.98px)',
  suffix: 'BsLtXl'
}];
var CustomBreakPointsProvider = {
  provide: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
  useValue: BS_BREAKPOINTS,
  multi: true
};

/***/ }),

/***/ 1851:
/*!******************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutComponent": function() { return /* binding */ HorizontalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 9575);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 360);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 9389);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9039);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 3081);













function HorizontalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function HorizontalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function HorizontalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}
function HorizontalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background);
  }
}
function HorizontalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 1, "app-navbar", 8);
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}
var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};
function HorizontalLayoutComponent_ng_template_9_app_menu_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-menu", 13);
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r11.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type + " " + ctx_r11.coreConfig.layout.navbar.backgroundColor : ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type, ctx_r11.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}
var _c1 = function _c1(a0) {
  return [a0];
};
function HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r12.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r12.coreConfig.layout.menu.collapsed === true ? "" : "expanded"));
  }
}
function HorizontalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_template_9_app_menu_1_Template, 1, 4, "app-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template, 2, 4, "core-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}
function HorizontalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 17);
  }
  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r13.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type + " " + ctx_r13.coreConfig.layout.footer.backgroundColor : ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type);
  }
}
function HorizontalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 16);
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}
var HorizontalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function HorizontalLayoutComponent(_coreConfigService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalLayoutComponent);
    this._coreConfigService = _coreConfigService;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }]);
  return HorizontalLayoutComponent;
}();
HorizontalLayoutComponent.ɵfac = function HorizontalLayoutComponent_Factory(t) {
  return new (t || HorizontalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};
HorizontalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HorizontalLayoutComponent,
  selectors: [["horizontal-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar horizontal-header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "horizontal-header-navbar", "navbar-expand-lg", "navbar", "navbar-fixed", "align-items-center", "navbar-shadow", "navbar-brand-center", 3, "ngClass"], [1, "horizontal-menu-wrapper"], ["menuType", "horizontal-menu", "class", "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow menu-border d-none d-xl-block", 3, "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-light menu-accordio menu-shadow d-xl-none", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["menuType", "horizontal-menu", 1, "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-shadow", "menu-border", "d-none", "d-xl-block", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-light", "menu-accordio", "menu-shadow", "d-xl-none", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function HorizontalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HorizontalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HorizontalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, HorizontalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, HorizontalLayoutComponent_ng_template_9_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, HorizontalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.CoreSidebarComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.horizontal-menu .content {\n  margin-left: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n.horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  background: #fff;\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n.horizontal-menu .header-navbar.navbar-light {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  left: 0;\n  top: 62px;\n  width: calc(100vw - (100vw - 100%) - (2rem * 2));\n  background: #fff;\n}\n.horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  left: calc(50% - 56px);\n  padding: 0;\n  z-index: 1000;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: flex;\n  align-items: center;\n  margin-right: 0;\n  font-size: inherit;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 36px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #52b965;\n  padding-left: 1rem;\n  margin-bottom: 0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  border: none;\n  margin-top: 0;\n  min-height: 52px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 1rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n  display: flex;\n  align-items: center;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n  left: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n  color: #6e6b7b;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(5px);\n  transition: transform 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n  color: #52b965;\n  font-weight: 500;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n  display: flex;\n  margin-right: 0.715rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #52b965, rgba(82, 185, 101, 0.7));\n  box-shadow: 0px 0px 6px 1px rgba(82, 185, 101, 0.6);\n  color: #fff;\n  border-radius: 4px;\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  padding: 8px 20px;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #52b965;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n  .horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n  }\n}\n.horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n  top: 62px;\n  background-color: #fff;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - (4.45rem + calc(3.35rem + 0.2rem)));\n}\n.horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n  width: 100%;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n  }\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n  }\n  .horizontal-layout .header-navbar {\n    background: #fff;\n  }\n  .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n@media (max-width: 575.98px) {\n  html body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n.horizontal-layout .horizontal-header-navbar .navbar-container ul.navbar-nav li.dropdown .dropdown-menu {\n  top: 41px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtZW51XFxtZW51LXR5cGVzXFxob3Jpem9udGFsLW1lbnUuc2NzcyIsImhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcdmFyaWFibGVzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29yZVxcbWl4aW5zXFxtYWluLW1lbnUtbWl4aW4uc2NzcyIsIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtZW51XFxtZW51LXR5cGVzXFx2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VBQ0UsY0FBQTtBQ1ZKO0FEWU07RUFDRSx1QkFBQTtBQ1ZSO0FEaUJJO0VBQ0Usb0JBQUE7QUNmTjtBRG9CSTtFQUNFLG1CRVJtQjtBRFZ6QjtBRHNCRTtFQUNFLGdCQUFBO0FDcEJKO0FEMEJFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDJCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDekJSO0FEMkJNO0VBQ0UsYUFBQTtBQ3pCUjtBRDZCRTtFQUNFLGdCR3hESTtFSHlESix1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzNCSjtBRDRCSTtFQUNFLGdCRzdERTtBRm1DUjtBRDhCSTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkdyRUU7QUZ5Q1I7QUQ4Qkk7RUFDRSx1Qkc0Q1U7QUZ4RWhCO0FEOEJJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUM1Qk47QUQrQk07RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUM3QlI7QUQ4QlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM1QlY7QUQ2QlU7RUFDRSxlQUFBO0FDM0JaO0FEK0JVO0VBQ0UsY0lyR0Q7RUpzR0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQzdCWjtBRHNDVTtFQUNFLFlBQUE7RUFDQSwrU0FBQTtBQ3BDWjtBRDBDVTtFQUNFLDRTQUFBO0FDeENaO0FENENNO0VBQ0UsYUFBQTtBQzFDUjtBRDRDTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzFDUjtBRDJDUTtFQUNFLCtCQUFBO0FDekNWO0FEMENVO0VBQ0UsY0c5SEQ7QUZzRlg7QUQyQ1E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsZ1RBQUE7QUMxQ1Y7QUQ0Q1E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzFDVjtBRDRDUTtFQUNFLGtCQUFBO0FDMUNWO0FENkNZO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQzNDZDtBRCtDVTtFQUNFLG1CR3pFRjtBRjRCVjtBRGdEVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQzlDWjtBRCtDWTs7RUFFRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUM3Q2Q7QURrRE07RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FDaERSO0FEb0RZO0VBQ0UseUJBQUE7QUNsRGQ7QURvRFk7RUFDRSw2QkFBQTtFQUNBLGNHbkdEO0FGaURiO0FEbURjO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtBQ2pEaEI7QURxRFU7RUFDRSxtQkc1R0Y7RUg2R0UsY0k3TUQ7RUo4TUMsZ0JBQUE7QUNuRFo7QUR1RGM7RUFDRSxjR2xISDtFSG1IRyxtQkFBQTtBQ3JEaEI7QUQwRFE7O0VBRUUsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDeERWO0FEMERRO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUN4RFY7QUQyRFU7RUFDRSxtQkd2SUY7RUh3SUUsa0JBQUE7QUN6RFo7QUQ2RFU7RUFDRSxxRUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0d6T0o7RUgwT0ksa0JBQUE7QUMzRFo7QURrRUU7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2hFSjtBRHFFTTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUNuRVI7QUQ2RUk7RUFDRSxZQUFBO0FDMUVOO0FJN0lJO0VMME5FO0lBQ0UsU0FBQTtFQzFFTjtBQUNGO0FENkVNO0VBRUUscURBQUE7QUM1RVI7QUQrRUk7RUFDRSxpSUFBQTtFQU1BLDJCQUFBO0FDbEZOO0FENkZROztFTWhQTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzSkY7QUlySkk7RUx5T0k7O0lNak9GLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGdKSjtBQUNGO0FENkZROztFTWhRTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzS0Y7QUlyS0k7RUx5UEk7O0lNalBGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGdLSjtBQUNGO0FENkZROztFTWhSTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUxzTEY7QUlyTEk7RUx5UUk7O0lNalFGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGdMSjtBQUNGO0FEK0ZJO0VBQ0UsNENBQUE7QUM3Rk47QUQrRkk7RUFDRSx5QkduUUk7RUhvUUosZ0JBQUE7QUM3Rk47QURnR007RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCR3BXQTtFSHFXQSw4Q0FBQTtBQzlGUjtBRHFHUTs7RU1yVE47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbU5GO0FJbE5JO0VMOFNJOztJTXRTRix5RUFBQTtJQUdBLDZFQUFBO0lBQUEsd0ZBQUE7RUw2TUo7QUFDRjtBRHFHUTs7RU1yVU47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbU9GO0FJbE9JO0VMOFRJOztJTXRURixzRUFBQTtJQUdBLDBFQUFBO0lBQUEscUZBQUE7RUw2Tko7QUFDRjtBRHFHUTs7RU1yVk47O1FBQUE7RUFNQTs7UUFBQTtFQUFBOztRQUFBO0FMbVBGO0FJbFBJO0VMOFVJOztJTXRVRix5RUFBQTtJQUdBLDZFQUFBO0lBQUEsd0ZBQUE7RUw2T0o7QUFDRjtBRHNHSTtFQUNFLHlDQUFBO0FDcEdOO0FEc0dJO0VBQ0UsMkRBQUE7QUNwR047QURzR0k7RUFDRSx5QkcxVUk7RUgyVUosZ0JBQUE7QUNwR047QURzR0k7RUFDRSxrQkFBQTtBQ3BHTjtBRHFHTTtFQUNFLGdCRzFhQTtBRnVVUjtBRHFHUTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FDbkdWO0FEMEdROztFTTlYTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1UkY7QUl0Ukk7RUx1WEk7O0lNL1dGLHdGQUFBO0lBR0EsNEZBQUE7SUFBQSx1R0FBQTtFTGlSSjtBQUNGO0FEMEdROztFTTlZTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1U0Y7QUl0U0k7RUx1WUk7O0lNL1hGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlTSjtBQUNGO0FEMEdROztFTTlaTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VEY7QUl0VEk7RUx1Wkk7O0lNL1lGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFTGlUSjtBQUNGO0FEOEdROztFTWxiTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VUY7QUl0VUk7RUwyYUk7O0lNbmFGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlVSjtBQUNGO0FEOEdROztFTWxjTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1VkY7QUl0Vkk7RUwyYkk7O0lNbmJGLG1FQUFBO0lBR0EsdUVBQUE7SUFBQSxrRkFBQTtFTGlWSjtBQUNGO0FEOEdROztFTWxkTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUx1V0Y7QUl0V0k7RUwyY0k7O0lNbmNGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFTGlXSjtBQUNGO0FEb0hjOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2xIaEI7QUluWEk7RUxvZkk7SUFDRSxhQUFBO0VDN0hSO0VEaUlFO0lBQ0UsZ0JHeGpCRTtFRnliTjtFRGlJRTtJQUNFLGlHQUFBO0VDL0hKO0FBQ0Y7QUkvWEk7RUxxZ0JGO0lBQ0UsMkZBQUE7RUNuSUY7QUFDRjtBTTdjQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VETkEsY0NPMkI7QU5vYzdCO0FNaGNJO0VEUkYsV0FBQTtFQUNBLFlKNkJvQjtBRDhhdEI7QU0vYkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlMYWtCO0VLWmxCLFlBQUE7QU5pY0o7QU01YlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTjhiWjtBTTdiWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FOZ2NkO0FLaGRJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQ2lCdUM7RURoQnZDLFlDZ0J1QztFRGZ2QyxXQ2V1QztFRGR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FMa2ROO0FLL2NNO0VBQ0Usd0JBQUE7QUxpZFI7QU14Y1E7RUFDRSxhQUFBO0FOMGNWO0FNcGNJO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QU5zY047QU01Z0JBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUROQSxjQ08yQjtBTm1nQjdCO0FNL2ZJO0VEUkYsV0FBQTtFQUNBLFlKNkJvQjtBRDZldEI7QU05ZkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlMYWtCO0VLWmxCLFlBQUE7QU5nZ0JKO0FNM2ZVOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QU42Zlo7QU01Zlk7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBTitmZDtBSy9nQkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJDaUJ1QztFRGhCdkMsWUNnQnVDO0VEZnZDLFdDZXVDO0VEZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUxpaEJOO0FLOWdCTTtFQUNFLHdCQUFBO0FMZ2hCUjtBTXZnQlE7RUFDRSxhQUFBO0FOeWdCVjtBTW5nQkk7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBTnFnQk47QUF2a0JBO0VBQ0Usb0JBQUE7QUF5a0JGIiwiZmlsZSI6Imhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdEZpbGUgTmFtZTogaG9yaXpvbnRhbC1tZW51LnNjc3NcclxuXHREZXNjcmlwdGlvbjogQSBjbGFzc2ljIGhvcml6b250YWwgbWVudSBmb3IgZWFzeSBuYXZpZ2F0aW9uICYgc3VwcG9ydCBhbGwgZGV2aWNlcy5cclxuXHRJdCBzdXBwb3J0IGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgYm9yZGVycyBtZW51IGZvclxyXG5cdGl0ZW0gc2VwYXJhdGlvbi5cclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0SXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlVGhlbWVcclxuXHRBdXRob3I6IFBJWElOVkVOVFxyXG5cdEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gSG9yaXpvbnRhbCBNZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uaG9yaXpvbnRhbC1tZW51IHtcclxuICAvLyBDb250ZW50IEFyZWEgbWFyZ2luXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAmLnNob3ctb3ZlcmxheSB7XHJcbiAgICAgIC5jb250ZW50LW92ZXJsYXkge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBOYXZiYXIgY29udGFpbmVyIHNwYWNpbmcgZm9yIGFsbFxyXG4gIC5uYXZiYXIuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgbWluLWhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLy9cclxuICAvLyBOYXZiYXIgSGVhZGVyIC8vXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0vL1xyXG4gIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICB6LWluZGV4OiA5OTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAmLm5hdmJhci1saWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYXZiYXItIEJyYW5kIENlbnRlciAtIExvZ29cclxuICAgICYubmF2YmFyLWhvcml6b250YWwuZmxvYXRpbmctbmF2IHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiA2MnB4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICogMikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgfVxyXG4gICAgJi5uYXZiYXItZml4ZWQge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJi5uYXZiYXItYnJhbmQtY2VudGVyIHtcclxuICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDU2cHgpOyAvLyBsZWZ0IDUwJSAtIGJyYW5kaW5nIHdpZHRoXHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAuYnJhbmQtbG9nbyBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQnJhbmQgVGV4dCBTY3NzXHJcbiAgICAgICAgICAuYnJhbmQtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubmF2YmFyLWhvcml6b250YWwge1xyXG4gICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICYuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICR3aGl0ZSksICcjJywgJyUyMycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMTVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS02MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICAgIC8vIGNvbnRlbnQ6ICdcXGU4NDQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkYm9keS1jb2xvciksICcjJywgJyUyMycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDAuNjhyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC42OHJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24tc3VibWVudSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgJi5vcGVuTGVmdCB7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC44NTdyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuODU3cmVtO1xyXG5cclxuICAgICAgICA+IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XHJcbiAgICAgICAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm9wZW4ge1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGksXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzE1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjcxNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjYpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZGFyayB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAmLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzYzUwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1sYXlvdXQge1xyXG4gIC8vIG5hdmJhciBmbG9hdGluZ1xyXG4gICYubmF2YmFyLWZsb2F0aW5nIHtcclxuICAgIC8vIEhvcml6b250YWwgbGF5b3V0IG5hdmJhciBzaGFkb3cgcG9zaXRpb24gYW5kIGhlaWdodCBmaXhcclxuICAgIC5oZWFkZXItbmF2YmFyLXNoYWRvdyB7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeGwpIHtcclxuICAgICAgLmhlYWRlci1uYXZiYXItc2hhZG93IHtcclxuICAgICAgICB0b3A6IDQ1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bm90KC5ibGFuay1wYWdlKSB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDkuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIgKyAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSkgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307IC8vICogMiAgYXMgd2UgaGF2ZSAyIG5hdmJhciAobWVudSArIG5hdmJhcikgIGluIGhvcml6b250YWwgbGF5b3V0LlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC45NSkgNDQlLFxyXG4gICAgICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC40NikgNzMlLFxyXG4gICAgICAgIHJnYmEoJHdoaXRlLCAwKSAxMDAlXHJcbiAgICAgICk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgICAgLm5hdmJhci1ob3Jpem9udGFsLmZsb2F0aW5nLW5hdiB7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogJGZsb2F0aW5nLW5hdi1tYXJnaW47XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwIGNvbnRlbnQgYXJlYSB3cmFwcGVyIGhlaWdodFxyXG4gICAgJi5mb290ZXItc3RhdGljIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZsb2F0aW5nLW5hdi1tYXJnaW59LFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1maXhlZCB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgI3skZmxvYXRpbmctbmF2LW1hcmdpbn0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG5hdmJhciBzdGlja3lcclxuICAmLm5hdmJhci1zdGlja3kge1xyXG4gICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skbmF2YmFyLWhlaWdodH0qIDIpICN7JGNvbnRlbnQtcGFkZGluZ30gMCAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICAgIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyLmZpeGVkLXRvcCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDYycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcCBjb250ZW50IGFyZWEgd3JhcHBlciBoZWlnaHRcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmb290ZXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG5hdmJhciBzdGF0aWNcclxuICAmLm5hdmJhci1zdGF0aWMge1xyXG4gICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0pICN7JGNvbnRlbnQtcGFkZGluZ30gMCAjeyRjb250ZW50LXBhZGRpbmd9O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSBjYWxjKCN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9ICsgY2FsYygjeyRmb290ZXItaGVpZ2h0fSArIDAuMnJlbSkpKTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgLy8gPyBBZGRlZCBmb3IgYW5ndWxhciBmaXggYXMgaXQgYWRkcyB0aGlzIGNsYXNzIHRvIG5hdmJhciBpbiBoeiBsYXlvdXRcclxuICAgICAgICAmLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFwcCBjb250ZW50IGFyZWEgd3JhcHBlciBoZWlnaHRcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgICN7JG5hdmJhci1oZWlnaHR9LFxyXG4gICAgICAgICAgICBjYWxjKCN7JGZvb3Rlci1oZWlnaHR9ICsgMC4ycmVtKSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItaGlkZGVuIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBuYXZiYXIgSGlkZGVuXHJcbiAgJi5uYXZiYXItaGlkZGVuIHtcclxuICAgICYuZm9vdGVyLXN0YXRpYyB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1maXhlZCB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnZlcnRpY2FsLW92ZXJsYXktbWVudSB7XHJcbiAgICAjbWFpbi1tZW51LW5hdmlnYXRpb24ge1xyXG4gICAgICA+IGxpIHtcclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBtZCBhbmQgZG93biBzY3JlZW5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgLmhvcml6b250YWwtbGF5b3V0IHtcclxuICAgICYuaG9yaXpvbnRhbC1tZW51IHtcclxuICAgICAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgICAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JG5hdmJhci1oZWlnaHR9ICsgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSkgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAwXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgLy8gRm9yIHN0YXRpYyBuYXZiYXJcclxuICBodG1sIGJvZHkuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuYXBwLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtICsgI3skbmF2YmFyLWhlaWdodH0pIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAtIDAuOHJlbSkgMFxyXG4gICAgICBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0pICFpbXBvcnRhbnQ7IC8vIC0gMC44cmVtIHRvIHJlZHVjZSBwYWRkaW5nIGluIHNtYWxsIHNjcmVlblxyXG4gIH1cclxufVxyXG4vLyBJbXBvcnQgdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MgZm9yIHNtYWxsIHNjcmVlbiBzdXBwb3J0XHJcbkBpbXBvcnQgJ3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzJztcclxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRGaWxlIE5hbWU6IGhvcml6b250YWwtbWVudS5zY3NzXG5cdERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgaG9yaXpvbnRhbCBtZW51IGZvciBlYXN5IG5hdmlnYXRpb24gJiBzdXBwb3J0IGFsbCBkZXZpY2VzLlxuXHRJdCBzdXBwb3J0IGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgYm9yZGVycyBtZW51IGZvclxuXHRpdGVtIHNlcGFyYXRpb24uXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0SXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlVGhlbWVcblx0QXV0aG9yOiBQSVhJTlZFTlRcblx0QXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uaG9yaXpvbnRhbC1tZW51IC5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5jb250ZW50LnNob3ctb3ZlcmxheSAuY29udGVudC1vdmVybGF5IHtcbiAgei1pbmRleDogOTk4ICFpbXBvcnRhbnQ7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5uYXZiYXIuaGVhZGVyLW5hdmJhciAubmF2YmFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xufVxuLmhvcml6b250YWwtbWVudSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIgLmhlYWRlci1uYXZiYXIge1xuICBtaW4taGVpZ2h0OiA0LjQ1cmVtO1xufVxuLmhvcml6b250YWwtbWVudSBmb290ZXIge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuLmhvcml6b250YWwtbWVudSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjJweDtcbiAgei1pbmRleDogOTkwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5oZWFkZXItbmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsLmZsb2F0aW5nLW5hdiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNjJweDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtICgycmVtICogMikpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhciAubmF2YmFyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItYnJhbmQtY2VudGVyIC5uYXZiYXItaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDU2cHgpO1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItYnJhbmQtY2VudGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWJyYW5kLWNlbnRlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIC5icmFuZC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMzZweDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWJyYW5kLWNlbnRlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIC5icmFuZC10ZXh0IHtcbiAgY29sb3I6ICM1MmI5NjU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBsZWZ0OiAwLjRyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuc2lkZWJhci1ncm91cC1hY3RpdmUgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiAyMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4taGVpZ2h0OiA1MnB4O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZGlzYWJsZWQgYSB7XG4gIGNvbG9yOiAjYjhjMmNjO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGxlZnQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIHJpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC42OHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudS5vcGVuTGVmdCAuZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnUuc2lkZWJhci1ncm91cC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudSA+IC5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudSA+IC5kcm9wZG93bi1tZW51IGksXG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51ID4gLmRyb3Bkb3duLW1lbnUgc3ZnIHtcbiAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpIHtcbiAgcGFkZGluZy10b3A6IDAuODU3cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC44NTdyZW07XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiAuZHJvcGRvd24tbWVudSBhID4gKiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiAuZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNmU2YjdiO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgYTpob3ZlciA+ICoge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgY29sb3I6ICM1MmI5NjU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiAuZHJvcGRvd24tbWVudSAub3Blbi5hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICM2ZTZiN2I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgaSxcbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMC43MTVyZW0gMS4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjcxNXJlbTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaTpob3ZlciA+IGEge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkuYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsICM1MmI5NjUsIHJnYmEoODIsIDE4NSwgMTAxLCAwLjcpKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMXB4IHJnYmEoODIsIDE4NSwgMTAxLCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhvcml6b250YWwtbWVudSAubmF2aWdhdGlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5uYXZiYXItZGFyayAubmF2LWl0ZW0uYWN0aXZlID4gYSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTJiOTY1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzYzUwO1xufVxuXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nIC5oZWFkZXItbmF2YmFyLXNoYWRvdyB7XG4gIGhlaWdodDogODBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZyAuaGVhZGVyLW5hdmJhci1zaGFkb3cge1xuICAgIHRvcDogNDVweDtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZzpub3QoLmJsYW5rLXBhZ2UpIC5hcHAtY29udGVudCB7XG4gIHBhZGRpbmc6IGNhbGMoMnJlbSArIDQuNDVyZW0qIDIgKyAxLjNyZW0pIDJyZW0gMCAycmVtO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZyAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuOTUpIDQ0JSwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjQ2KSA3MyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDEpICsgNC40NXJlbSArIDMuMzVyZW0gKyAxLjNyZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMS4zcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDEpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMHJlbSArIDEuM3JlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDByZW0gKyAxLjNyZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDByZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMHJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDEuM3JlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0gKyAxLjNyZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kgLmFwcC1jb250ZW50IHtcbiAgcGFkZGluZzogY2FsYygycmVtICsgNC40NXJlbSogMikgMnJlbSAwIDJyZW07XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreSAuaGVhZGVyLW5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIgLm5hdmJhci1ob3Jpem9udGFsLmhlYWRlci1uYXZiYXIuZml4ZWQtdG9wIHtcbiAgbGVmdDogMDtcbiAgdG9wOiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjEpO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDEpICsgNC40NXJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDEpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMSkgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDByZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMHJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMHJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAwcmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuYXBwLWNvbnRlbnQge1xuICBwYWRkaW5nOiBjYWxjKDJyZW0gKyA0LjQ1cmVtKSAycmVtIDAgMnJlbTtcbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljIC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDQuNDVyZW0gKyBjYWxjKDMuMzVyZW0gKyAwLjJyZW0pKSk7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuaGVhZGVyLW5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIgLm5hdmJhci1ob3Jpem9udGFsLmhlYWRlci1uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyLm5hdmJhci1zdGF0aWMtdG9wIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDEpICsgNC40NXJlbSArIGNhbGMoMy4zNXJlbSArIDAuMnJlbSkgKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMSkgKyA0LjQ1cmVtICsgY2FsYygzLjM1cmVtICsgMC4ycmVtKSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMSkgKyA0LjQ1cmVtICsgY2FsYygzLjM1cmVtICsgMC4ycmVtKSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDQuNDVyZW0gKyBjYWxjKDMuMzVyZW0gKyAwLjJyZW0pKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMHJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAwcmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAwcmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDByZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMSkgKyAwcmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDByZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDByZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDEpICsgMHJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDByZW0gKyAwcmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgMHJlbSArIDByZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgMHJlbSArIDByZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyAwcmVtICsgMHJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDByZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgMHJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDByZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgMHJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0LnZlcnRpY2FsLW92ZXJsYXktbWVudSAjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IHVsID4gbGkgPiBhIGksXG4uaG9yaXpvbnRhbC1sYXlvdXQudmVydGljYWwtb3ZlcmxheS1tZW51ICNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpID4gdWwgPiBsaSA+IGEgc3ZnIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5ob3Jpem9udGFsLW1lbnUgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5oZWFkZXItbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob3Jpem9udGFsLWxheW91dCAuaGVhZGVyLW5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAuaG9yaXpvbnRhbC1sYXlvdXQgLmFwcC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiBjYWxjKDQuNDVyZW0gKyBjYWxjKDJyZW0gLSAwLjhyZW0pKSBjYWxjKDJyZW0gLSAwLjhyZW0pIDAgY2FsYygycmVtIC0gMC44cmVtKSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgaHRtbCBib2R5Lmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmFwcC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiBjYWxjKDJyZW0gLSAwLjhyZW0gKyA0LjQ1cmVtKSBjYWxjKDJyZW0gLSAwLjhyZW0pIDAgY2FsYygycmVtIC0gMC44cmVtKSAhaW1wb3J0YW50O1xuICB9XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBlcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSwgLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LWhpZGUgLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG4gIHdpZHRoOiAyNjBweDtcbiAgbGVmdDogLTI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaSB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnOmJlZm9yZSxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtb3BlbiAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNjBweCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBlcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSwgLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LWhpZGUgLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG4gIHdpZHRoOiAyNjBweDtcbiAgbGVmdDogLTI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaSB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnOmJlZm9yZSxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtb3BlbiAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNjBweCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQgLmhvcml6b250YWwtaGVhZGVyLW5hdmJhciAubmF2YmFyLWNvbnRhaW5lciB1bC5uYXZiYXItbmF2IGxpLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiA0MXB4ICFpbXBvcnRhbnQ7XG59IiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBjb21wb25lbnQgdmFyaWFibGVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJGJhc2UtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xyXG4kYm9keS1kaXJlY3Rpb246IGx0ciAhZGVmYXVsdDsgLy8gRGVmYXVsdCBsdHIsIGNoYW5nZSBpdCB0byBydGwgZm9yIFJpZ2h0IFRvIExlZnQgc3VwcG9ydC5cclxuJGNvbnRlbnQtcGFkZGluZzogMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgQ29sb3JzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJG5hdi1jb21wb25lbnQtYm9yZGVyLWNvbG9yOiAjZGRkICFkZWZhdWx0O1xyXG5cclxuJHN3aXBlci1iZzogI2YyZjRmNCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgTmF2YmFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJG5hdmJhci1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xyXG4kZm9vdGVyLWhlaWdodDogMy4zNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgTWFpbiBNZW51XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vbWFpbiBtZW51IGRhcmtcclxuJG1lbnUtZGFyay1jb2xvcjogI2RjZGNkYyAhZGVmYXVsdDtcclxuJG1lbnUtZGFyay1iZy1jb2xvcjogIzEwMTYzYSAhZGVmYXVsdDtcclxuXHJcbiRtZW51LXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHggIWRlZmF1bHQ7XHJcbiRtZW51LXNlY29uZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAyMHB4ICFkZWZhdWx0O1xyXG4kbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xyXG4kbWVudS1mb3J0aC1sZXZlbC1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCA1M3B4ICFkZWZhdWx0O1xyXG5cclxuLy8gdmVydGljYWwgbWVudVxyXG4kbWVudS1leHBhbmRlZC13aWR0aDogMjYwcHggIWRlZmF1bHQ7XHJcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogODBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgU2lkZWJhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kc2lkZWJhci13aWR0aDogMjYwcHggIWRlZmF1bHQ7XHJcbiRjaGF0LXNpZGViYXItd2lkdGg6IDM2MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgQXZhdGFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYXZhdGFyLXNpemU6IDMycHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHggIWRlZmF1bHQ7XHJcblxyXG4kYXZhdGFyLXNpemUteGw6IDcwcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc2l6ZS1sZzogNTBweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zaXplLXNtOiAyNHB4ICFkZWZhdWx0O1xyXG5cclxuJGF2YXRhci1iZzogI2MzYzNjMztcclxuJGF2YXRhci1ncm91cC1ib3JkZXI6ICR3aGl0ZTtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBQcm9ncmVzc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kcHJvZ3Jlc3Mtc2l6ZS14bDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtbGc6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1tZDogMC41N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtc206IDAuMTQzcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEZvcm1cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vICRpbnB1dC1oZWlnaHQsICRpbnB1dC1oZWlnaHQtbGcsICRpbnB1dC1oZWlnaHQtc20gYXJlIGluIHZhcmlhYmxlc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXhsOiAoJGZvbnQtc2l6ZS1iYXNlICsgMC41KSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXhsOiAxLjcgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14czogMS41ICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy15LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgteGw6IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXkteHM6IDAuMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC14czogMC4yNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy14bDogMC4zNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteHM6IDAuMTJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhsOiAkYm9yZGVyLXJhZGl1cy14bCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMteHM6ICRib3JkZXItcmFkaXVzLXhzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodC14bDogKCgkZm9udC1zaXplLXhsICogJGxpbmUtaGVpZ2h0LXhsKSArICgkaW5wdXQtcGFkZGluZy15LXhsICogMikpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXhzOiAoKCRmb250LXNpemUteHMgKiAkbGluZS1oZWlnaHQteHMpICsgKCRpbnB1dC1wYWRkaW5nLXkteHMgKiAyKSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtc206ICgoJGZvbnQtc2l6ZS1zbSAqICRsaW5lLWhlaWdodC1zbSkgKyAoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIpKSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBCbGFuayBQYWdlIEJnIENvbG9yXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYmxhbmstYmctY29sb3I6ICNlZmYyZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgRGF0YSBUYWJsZXMgQmcgQ29sb3JcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRkYXRhdGFibGUtYmctY29sb3I6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgU3dpdGNoXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRzd2l0Y2gtYmctY29sb3I6ICNlMmUyZTIgIWRlZmF1bHQ7XHJcbiRzd2l0Y2gtaW5kaWNhdG9yLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgVGltZWxpbmVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHRpbWVsaW5lLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1wb2ludC1zaXplOiAxLjc1cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXNpemU6IDEycHggIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3ItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLXdyYXBwZXItc2l6ZTogMjBweCAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1pdGVtLW1pbi1oZWlnaHQ6IDRyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1pdGVtLWljb24tZm9udC1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLWV2ZW50LXRpbWUtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLWV2ZW50LXRpbWUtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXHJcbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIG92ZXJyaWRlcyBvZiBCb290c3RyYXAgdmFyaWFibGVzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGdyYXktNTA6ICNmNmY2ZjYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2JhYmZjNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlc3RcclxuJGdyYXktMjAwOiAjZWRlZGVkICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVyXHJcbiRncmF5LTMwMDogI2RhZTFlNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRcclxuJGdyYXktNDAwOiAjNjM2MzYzICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogI2I4YzJjYyAhZGVmYXVsdDsgLy8gJGdyYXlcclxuJGdyYXktNzAwOiAjNGU1MTU0ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICMxZTFlMWUgIWRlZmF1bHQ7IC8vICRncmF5LWRhcmtcclxuJGdyYXktOTAwOiAjMmEyZTMwICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMyMjI5MmYgIWRlZmF1bHQ7IC8vIDIzMWY0OCAyMjI5MmZcclxuXHJcbiRwdXJwbGU6ICM3MzY3ZjAgIWRlZmF1bHQ7IC8vJHByaW1hcnlcclxuJGdyZWVuOiAjMjhjNzZmICFkZWZhdWx0OyAvLyRzdWNjZXNzXHJcbiRibHVlOiAjMDBjZmU4ICFkZWZhdWx0OyAvLyRpbmZvXHJcbiRvcmFuZ2U6ICNmZjlmNDMgIWRlZmF1bHQ7IC8vJHdhcm5pbmdcclxuJHJlZDogI2VhNTQ1NSAhZGVmYXVsdDsgLy8kZGFuZ2VyXHJcblxyXG4kcHJpbWFyeTogJHB1cnBsZSAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogIzgyODY4YiAhZGVmYXVsdDtcclxuJGluZm86ICRibHVlICFkZWZhdWx0O1xyXG4kd2FybmluZzogJG9yYW5nZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAkZ3JheS01MCAhZGVmYXVsdDtcclxuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgMjU6IChcclxuICAgICAgJHNwYWNlciAqIDAuMjVcclxuICAgICksXHJcbiAgICA1MDogKFxyXG4gICAgICAkc3BhY2VyICogMC41XHJcbiAgICApLFxyXG4gICAgNzU6IChcclxuICAgICAgJHNwYWNlciAqIDAuNzVcclxuICAgICksXHJcbiAgICAxOiAoXHJcbiAgICAgICRzcGFjZXJcclxuICAgICksXHJcbiAgICAyOiAoXHJcbiAgICAgICRzcGFjZXIgKiAxLjVcclxuICAgICksXHJcbiAgICAzOiAoXHJcbiAgICAgICRzcGFjZXIgKiAzXHJcbiAgICApLFxyXG4gICAgNDogKFxyXG4gICAgICAkc3BhY2VyICogMy41XHJcbiAgICApLFxyXG4gICAgNTogKFxyXG4gICAgICAkc3BhY2VyICogNFxyXG4gICAgKVxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjM1N3JlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBzaGFkb3dcclxuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuLy8gVHlwb2dyYXBoeVxyXG5cclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjQ1ICFkZWZhdWx0O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43MTQgIWRlZmF1bHQ7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XHJcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMDcgIWRlZmF1bHQ7XHJcblxyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1jb2xvcjogIzVlNTg3MyAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI2I5YjljMyAhZGVmYXVsdDtcclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG5cclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1hY2NlbnQtYmc6ICNmYWZhZmMgIWRlZmF1bHQ7XHJcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAjNDA0MDQwICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcclxuJGJ0bi1wYWRkaW5nLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuOSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWRpc2FibGVkLWJnOiAjZWZlZmVmICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtbGc6IDMuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1jaGVja2VkLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYSgkcHJpbWFyeSwgMC42NSk7XHJcblxyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLXNwYWNlcjogMCAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd25fc3BhY2luZzogMC41cmVtOyAvLyBjdXN0b21cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC41NTc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC43NDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLWxnOiAxLjE0cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwLjQyOHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vQWxlcnRzXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdiB0YWJzXHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6IDAuMjUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBuYXZiYXJcclxuXHJcbiRmbG9hdGluZy1uYXYtbWFyZ2luOiAxLjNyZW07XHJcblxyXG4vLyBUb29sdGlwc1xyXG5cclxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuNzc1cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogMSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtbWF4LXdpZHRoOiAzODBweCAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI4NnJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcblxyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiA1cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjZyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuOHJlbSAxLjRyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiA0MDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAgIFNsaWRlIEluIE1vZGFsXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1zbTogMjVyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XHJcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQ29kZVxyXG5cclxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTd2l0Y2hcclxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vc3ZnIGNvbG9yXHJcbiRzdmctY29sb3ItbGlnaHQ6ICM2MjYyNjIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTVkcgaWNvbnNcclxuLy8gRm9yIEJyZWFkY3J1bWJcclxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbi8vIENoZXZyb24gSWNvbnNcclxuJGNoZXZyb24tbGVmdDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tZG93bjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRyZW1vdmU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcclxuJGluZm9JY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWluZm8nJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMi4wMScgeTI9JzgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gID8gVElQOiAgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgZmlsZSBmb3Igb3ZlcnJpZGluZyBib290c3RyYXAgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXHJcbiAkcHJpbWFyeTogIzUyYjk2NTtcclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRmlsZSBOYW1lOiBtYWluLW1lbnUtbWl4aW4uc2Nzc1xyXG4vLyBEZXNjcmlwdGlvbjogQ29tbW9uIG1peGluIGZvciBtZW51cywgY29udGFpbiBkYXJrIGFuZCBsaWdodCB2ZXJzaW9uIHNjc3MuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBIZWFkZXIgbmF2YmFyIGNvbnRlbnQgYW5kIGJyYW5kIGV4cGFuZGVkICYgY29sbGFwc2VkIHN0YXRzXHJcbi8vIHNwYWNpbmcgYW5kIHNpemluZy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IGFuZCBuYXZiYXIgcG9zaXRpb24sIG1hcmdpbiBhbmQgd2lkdGggY2hhbmdlXHJcbkBtaXhpbiBtYWluLW1lbnUtd2lkdGgoJG1lbnUtd2lkdGgpIHtcclxuICBtYXJnaW4tbGVmdDogJG1lbnUtd2lkdGg7XHJcbn1cclxuQG1peGluIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LXdpZHRoKSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6ICRtZW51LXdpZHRoO1xyXG59XHJcbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgc2hvdyBoaWRlIGJhc2VkIG9uIHdpZHRoXHJcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LXRyYW5zZm9ybS1zaG93KCR0cmFuc2Zvcm0td2lkdGgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR0cmFuc2Zvcm0td2lkdGgsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwZXJzcGVjdGl2ZTogMTAwMDtcclxufVxyXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0taGlkZSgpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4vLyBNaXhpbnMgZm9yIHRoZSBzdWIgbWVudSBhcnJvd1xyXG5AbWl4aW4gdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRhcnJvdy1mb250LXNpemUpIHtcclxuICAmLmhhcy1zdWIge1xyXG4gICAgPiBhOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkYXJyb3ctZm9udC1zaXplO1xyXG4gICAgICB3aWR0aDogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB0b3A6IDE0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICYub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSB7XHJcbiAgICAgID4gYTphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIFVzZWQgZm9yIGFwcHNcclxuQG1peGluIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAkY29udGVudFBhZGRpbmc6IDByZW0sXHJcbiAgJG5hdmJhckhlaWdodDogMHJlbSxcclxuICAkZm9vdGVySGVpZ2h0OiAwcmVtLFxyXG4gICRmbG9hdGluZ05hdk1hcmdpbjogMHJlbSxcclxuICAkaG9yaXpvbnRhbE1lbnVIZWlnaHQ6IDByZW0sXHJcbiAgJHNwYWNpbmdTaWRlczogMSxcclxuICAkaG9yaXpvbnRhbExheW91dDogZmFsc2VcclxuKSB7XHJcbiAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgMTAwdmggLVxyXG4gICAgICBjYWxjKFxyXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICApXHJcbiAgKTtcclxuICBoZWlnaHQ6IGNhbGMoXHJcbiAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXHJcbiAgICAgIGNhbGMoXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICsgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgIClcclxuICApO1xyXG4gIC8vIHJlc3BvbnNpdmUgc2l6ZSBoZWlnaHRcclxuICBAaWYgJGhvcml6b250YWxMYXlvdXQge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICAxMDB2aCAtIGNhbGMoY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAtIDAuOHJlbSkgKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9KVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIDEwMHZoIC1cclxuICAgICAgICAgIGNhbGMoXHJcbiAgICAgICAgICAgIGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSAtIGNhbGMoMC44cmVtICogI3skc3BhY2luZ1NpZGVzfSkpICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gK1xyXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICAgICAgY2FsYyhcclxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXHJcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMaWdodCAmIERhcmsgbWVudSBtaXhpblxyXG4vLyAkdGhlbWUtY29sb3IgOiBNZW51IHRleHQgY29sb3JcclxuLy8gJHRoZW1lLWJnICAgIDogTWVudSBiYWNrZ3JvdW5kIGNvbG9yXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWl4aW4gbWVudS10aGVtZSgkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDEwJSk7XHJcbiAgJG1haW4tbWVudS10b3Atb3Blbi1ob3Zlci1iZzogZGFya2VuKCR0aGVtZS1iZywgNiUpO1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpO1xyXG5cclxuICAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZzogZGFya2VuKCR0aGVtZS1iZywgNCUpOyAvLyRwcmltYXJ5XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgJG1haW4tbWVudS1zdWItaG92ZXItY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCA0JSk7XHJcblxyXG4gICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuXHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XHJcblxyXG4gIC5uYXZpZ2F0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1iZztcclxuICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMjEuNSUpO1xyXG4gICAgICBtYXJnaW46IGNhbGMoI3skY29udGVudC1wYWRkaW5nfSArIDAuMjg2cmVtKSAwIDAuOHJlbSAoJGNvbnRlbnQtcGFkZGluZyArIDAuMnJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICYuaGFzLXN1YiB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UsIGJhY2tncm91bmQgMHMsIGNvbG9yIDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogZGFya2VuKCR0aGVtZS1jb2xvciwgNC45JSk7XHJcbiAgICAgICAgcGFkZGluZzogJG1lbnUtcGFkZGluZztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuXHJcbiAgICAgICAgc3Bhbi5tZW51LXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDMwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNZW51IEl0ZW0gSG92ZXIgQW5pbWF0aW9uXHJcbiAgICBsaS5uYXYtaXRlbSB7XHJcbiAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgfVxyXG4gICAgICB1bC5tZW51LWNvbnRlbnQge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGE6aG92ZXIgPiAqIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gbGkge1xyXG4gICAgICA+IGEge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSxcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgID4gdWwgbGkge1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5oYXMtc3ViKSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oYXMtc3ViIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gdWwgPiBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZyksXHJcbiAgICAgICYuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS10b3Atb3Blbi1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taGVhZC1iZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc7XHJcblxyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvdmVyLFxyXG4gICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAkbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFzLXN1YiB7XHJcbiAgICAgICAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3BlbixcclxuICAgICAgICAuc2lkZWJhci1ncm91cC1hY3RpdmUge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLW9wZW4tY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2ZvciAycmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvL2ZvciAzcmQgbGV2ZWwgbWVudVxyXG4gICAgICAgICAgICAub3BlbiB7XHJcbiAgICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3ZlcixcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgcmdiYSgkcHJpbWFyeSwgMSksIHJnYmEoJHByaW1hcnksIDAuNykpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoJHByaW1hcnksIDAuNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gTWVudSBjb250ZW50IGRpc3BsYXkgbWl4aW5cclxuLy8gJG1lbnUtZXhwYW5kZWQtd2lkdGggOiBFeHBhbmRlZCBtZW51IHdpZHRoXHJcbi8vICRtZW51LWNvbGxhcHNlZC13aWR0aDogQ29sbGFwc2VkIG1lbnUgd2lkdGhcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtaXhpbiBtZW51LWNvbnRlbnQoJG1lbnUtZXhwYW5kZWQtd2lkdGgsICRtZW51LWNvbGxhcHNlZC13aWR0aCwgJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcclxuICAubWFpbi1tZW51LWNvbnRlbnQge1xyXG4gICAgPiBzcGFuLm1lbnUtdGl0bGUsXHJcbiAgICBhLm1lbnUtdGl0bGUge1xyXG4gICAgICByaWdodDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgICB9XHJcbiAgICA+IHVsLm1lbnUtY29udGVudCB7XHJcbiAgICAgIGxlZnQ6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcclxuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMHB4IDJweCByZ2JhKCRibGFjaywgMC4xKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjAyKTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcclxuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxyXG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcclxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gVmVydGljYWwgT3ZlcmxheSBNZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udmVydGljYWwtb3ZlcmxheS1tZW51IHtcclxuICAvL0NvbnRlbnQgZXhwYW5kZWRcclxuICAuY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoMCk7XHJcbiAgfVxyXG4gIC8vTmF2YmFyIGV4cGFuZGVkXHJcbiAgLm5hdmJhciB7XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIEBpbmNsdWRlIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTWFpbiBtZW51IGV4cGFuZGVkXHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICBsZWZ0OiAtKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuXHJcbiAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgID4gbGkge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICA+IHN2ZyxcclxuICAgICAgICAgID4gaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQyOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLm1lbnUtb3BlbiB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkbWVudS1leHBhbmRlZC13aWR0aCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYubWVudS1oaWRlIHtcclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICBAZXh0ZW5kIC5tYWluLW1lbnU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 5648:
/*!***************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutModule": function() { return /* binding */ HorizontalLayoutModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 6200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 2625);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content/content.module */ 6294);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 4735);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 2004);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 1851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);











var HorizontalLayoutModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function HorizontalLayoutModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HorizontalLayoutModule);
});
HorizontalLayoutModule.ɵfac = function HorizontalLayoutModule_Factory(t) {
  return new (t || HorizontalLayoutModule)();
};
HorizontalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: HorizontalLayoutModule
});
HorizontalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HorizontalLayoutModule, {
    declarations: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_3__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule],
    exports: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalLayoutComponent]
  });
})();

/***/ }),

/***/ 6092:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 8001);
/* harmony import */ var app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/custom-breakpoints */ 6840);
/* harmony import */ var app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.module */ 8477);
/* harmony import */ var app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.module */ 5648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);








var LayoutModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function LayoutModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutModule);
});
LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};
LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_2__.CustomBreakPointsProvider],
  imports: [[_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule.withConfig({
    disableDefaultBps: true
  }), app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule], app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutModule, {
    imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule],
    exports: [app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_3__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalLayoutModule]
  });
})();

/***/ }),

/***/ 2923:
/*!**************************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutComponent": function() { return /* binding */ VerticalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 9575);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 360);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9039);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 9389);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 3081);













function VerticalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function VerticalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function VerticalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}
function VerticalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};
function VerticalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }
  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type, ctx_r10.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}
function VerticalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 4, "app-navbar", 8);
  }
  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}
function VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r11.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c0, ctx_r11.coreConfig.layout.skin === "semi-dark" || ctx_r11.coreConfig.layout.skin === "dark" ? "menu-dark" : "menu-light", ctx_r11.coreConfig.layout.menu.collapsed ? "" : "expanded"));
  }
}
function VerticalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template, 2, 5, "core-sidebar", 10);
  }
  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}
function VerticalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 14);
  }
  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r12.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type + " " + ctx_r12.coreConfig.layout.footer.backgroundColor : ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type);
  }
}
function VerticalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 13);
  }
  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}
var VerticalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function VerticalLayoutComponent(_coreConfigService, _elementRef) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalLayoutComponent);
    this._coreConfigService = _coreConfigService;
    this._elementRef = _elementRef;
    // Set the private defaults
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }]);
  return VerticalLayoutComponent;
}();
VerticalLayoutComponent.ɵfac = function VerticalLayoutComponent_Factory(t) {
  return new (t || VerticalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};
VerticalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: VerticalLayoutComponent,
  selectors: [["vertical-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar navbar navbar-expand-lg align-items-center navbar-shadow", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "navbar", "navbar-expand-lg", "align-items-center", "navbar-shadow", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-accordio menu-shadow", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-accordio", "menu-shadow", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function VerticalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VerticalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, VerticalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VerticalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, VerticalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VerticalLayoutComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, VerticalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarComponent, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  margin-right: 1.1rem;\n  flex-shrink: 0;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n  color: #565656;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n  left: 74px;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtZW51XFxtZW51LXR5cGVzXFx2ZXJ0aWNhbC1tZW51LnNjc3MiLCJ2ZXJ0aWNhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcbWFpbi1tZW51LW1peGluLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29yZVxcbWVudVxcbWVudS10eXBlc1xcdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OzsyRkFBQTtBQXFCSTtFQUNFLGdFQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDVk47QURZUTtFQUNFLG1CQUFBO0FDVlY7QURZUTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDVlY7QURjVTs7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1paO0FEcUJNO0VBQ0UsWUVOYztBRGJ0QjtBRHNCWTtFQUNFLGFBQUE7QUNwQmQ7QUQyQmdCOztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN4QmxCO0FFVkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJIbUMyQztFR2xDM0MsY0hrQzJDO0VHakMzQyxhSGlDMkM7RUdoQzNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZZTjtBRVRNO0VBQ0Usd0JBQUE7QUZXUjtBRGlCTTtFR2hFSixrQkRpQ29CO0FEaUJ0QjtBRHNCUTtFR3JFTixXQUFBO0VBQ0EsV0Q4QnFCO0FEb0J2QjtBRG9CVTtFQUNFLGFBQUE7QUNsQlo7QURvQlU7RUFDRSxZRTdDVTtFRjhDVixhQUFBO0FDbEJaO0FEbUJZO0VBQ0UsY0FBQTtBQ2pCZDtBRHNCUTtFQUVFLFVFdERhO0FEaUN2QjtBRHlCTTtFQUNFLFdFM0RlO0FEb0N2QjtBRHlCUTs7RUFFRSxhQUFBO0FDdkJWO0FENEJVO0VBQ0UsbUJBQUE7QUMxQlo7QUQyQlk7RUFDRSxhQUFBO0FDekJkO0FEMkJZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN6QmQ7QUQ2Qlk7RUFDRSxpQ0FBQTtBQzNCZDtBRDhCYztFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDNUJoQjtBRG1DUTtFQUNFLFlFakdZO0FEZ0V0QjtBRG9DYztFQUNFLGNBQUE7QUNsQ2hCO0FEb0NjO0VBQ0UsYUFBQTtBQ2xDaEI7QUVwRkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJIcUg2QztFR3BIN0MsWUhvSDZDO0VHbkg3QyxXSG1INkM7RUdsSDdDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZzRk47QUVuRk07RUFDRSx3QkFBQTtBRnFGUjtBRHVCVTtFQUNFLGVBQUE7QUNyQlo7QUR1QlU7RUFDRSxjQUFBO0FDckJaO0FEMEJRO0VBQ0UsaUJBQUE7QUN4QlY7QUQwQlk7RUFDRSxhQUFBO0FDeEJkO0FENEJZO0VBQ0Usc0JBQUE7QUMxQmQ7QURnQ007O0VHeEtKLGlCRGtDcUI7QUQwR3ZCO0FEa0NRO0VBQ0UsbURBQUE7QUNoQ1Y7QURtQ1E7RUFDRSwwQ0FBQTtFQUNBLFVBQUE7QUNqQ1Y7QURzQ0k7O0VBRUUsc0JBQUE7QUNwQ047QURxQ007O0VBQ0UsYUFBQTtBQ2xDUjtBRzlHSTtFSjBKRTtJQUNFLFlFdktjO0VEK0hwQjtBQUNGO0FHdkdJO0VKeUpFO0lBQ0UsUUFBQTtFQy9DTjtFRGtETTtJQUNFLFFBQUE7RUNoRFI7RURtREk7O0lHM05KLGNINk4rQjtFQ2pEL0I7RURvRE07O0lBRUUsY0FBQTtFQ2xEUjtFRG9ETTtJQUNFLFFBQUE7RUNsRFI7QUFDRjtBRzFISTtFSnVMRTtJQUNFLFFBQUE7RUMxRE47RUQ2RE07SUFDRSxRQUFBO0VDM0RSO0VEOERJOztJR3pQSixjSDJQK0I7RUM1RC9CO0FBQ0Y7QURpRUE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QURpRUE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QURrRUE7RUFDRTtJQUNFLGVBQUE7RUNoRUY7QUFDRjtBSXBPQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VGTkEsY0VPMkI7QUoyTjdCO0FJdk5JO0VGUkYsV0FBQTtFQUNBLFlENkJvQjtBRHFNdEI7QUl0TkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlIYWtCO0VHWmxCLFlBQUE7QUp3Tko7QUluTlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBSnFOWjtBSXBOWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FKdU5kO0FFdk9JO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCRWlCdUM7RUZoQnZDLFlFZ0J1QztFRmZ2QyxXRWV1QztFRmR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGeU9OO0FFdE9NO0VBQ0Usd0JBQUE7QUZ3T1I7QUkvTlE7RUFDRSxhQUFBO0FKaU9WO0FJM05JO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QUo2Tk47QUluU0E7Ozs7Ozs7OzsyRkFBQTtBQXFCRTtFRk5BLGNFTzJCO0FKMFI3QjtBSXRSSTtFRlJGLFdBQUE7RUFDQSxZRDZCb0I7QURvUXRCO0FJclJFO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxZSGFrQjtFR1psQixZQUFBO0FKdVJKO0FJbFJVOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUpvUlo7QUluUlk7O0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBSnNSZDtBRXRTSTtFQUNFLFdBQUE7RUFDQSxnVEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkVpQnVDO0VGaEJ2QyxZRWdCdUM7RUZmdkMsV0VldUM7RUZkdkMscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBRndTTjtBRXJTTTtFQUNFLHdCQUFBO0FGdVNSO0FJOVJRO0VBQ0UsYUFBQTtBSmdTVjtBSTFSSTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVEQUFBO0FKNFJOIiwiZmlsZSI6InZlcnRpY2FsLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtbWVudS5zY3NzXHJcbiAgICBEZXNjcmlwdGlvbjogQSBjbGFzc2ljIHZlcnRpY2FsIG1vZGVybiBzdHlsZSBtZW51IHdpdGggZXhwYW5kIGFuZCBjb2xsb3BzIHN1cHBvcnQuIEl0IHN1cHBvcnRcclxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XHJcbiAgICBpdGVtIHNlcGFyYXRpb24uXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xyXG5cclxuLy8gSW1wb3J0IGZpcnN0IG1haW4gbWVudSBtaXhpblxyXG5AaW1wb3J0ICcuLi8uLi9taXhpbnMvbWFpbi1tZW51LW1peGluJztcclxuXHJcbi8vICBWZXJ0aWNhbCBtZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udmVydGljYWwtbGF5b3V0IHtcclxuICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBiYWNrZ3JvdW5kIDBzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBsaSBhIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gbGkgPiBhIHN2ZyxcclxuICAgICAgICA+IGxpID4gYSBpIHtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3ViLW1lbnUgaWNvbiBzaXplXHJcbiAgICAgICAgLm1lbnUtY29udGVudCB7XHJcbiAgICAgICAgICA+IGxpID4gYSBzdmcsXHJcbiAgICAgICAgICA+IGxpID4gYSBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjQ1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9WZXJ0aWNhbCBtZW51IFtFeHBhbmRlZF1cclxuICAgICYubWVudS1leHBhbmRlZCB7XHJcbiAgICAgIC8vIE1haW4gbWVudSBleHBhbmRlZFxyXG4gICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICA+IGksXHJcbiAgICAgICAgICAgICAgPiBzdmcge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygkZm9udC1zaXplLWJhc2UgKyAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0NvbnRlbnQgZXhwYW5kZWRcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9WZXJ0aWNhbCBtZW51IFtDb2xsYXBzZWRdXHJcbiAgICAmLm1lbnUtY29sbGFwc2VkIHtcclxuICAgICAgLy9OYXZiYXIgY29sbGFwc2VkXHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LWNvbGxhcHNlZC13aWR0aCk7XHJcbiAgICAgICAgICAubW9kZXJuLW5hdi10b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5leHBhbmRlZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaXhlZC10b3AgbmF2YmFyIHdoZW4gbWVudS1jb2xsYXBzZWRcclxuICAgICAgICAmLmZpeGVkLXRvcCxcclxuICAgICAgICAmLmZsb2F0aW5nLW5hdiB7XHJcbiAgICAgICAgICBsZWZ0OiAkbWVudS1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIE1haW4gbWVudSBjb2xsYXBzZWRcclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcclxuXHJcbiAgICAgICAgLm5hdmJhci1oZWFkZXIgLmJyYW5kLXRleHQsXHJcbiAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXaGVuIG1lbnUgaXMgY29sbGFwc2VkIGFuZCBtb3VzZSBpcyBub3QgaG92ZXJlZCBvdmVyIG1lbnVcclxuICAgICAgICAmOm5vdCguZXhwYW5kZWQpIHtcclxuICAgICAgICAgIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjJyZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdmlnYXRpb24gbGkge1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2hlbiBtZW51IGlzIGNvbGxhcHNlZCBidXQgbW91c2UgaXMgaG92ZXJlZCBvdmVyIG1lbnVcclxuICAgICAgICAmLmV4cGFuZGVkIHtcclxuICAgICAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coMXJlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vZGVybi1uYXYtdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL05hdmlnYXRpb24gY29sbGFwc2VkXHJcbiAgICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0JyYW5kIGNlbnRlciBjb250ZW50IGNvbGxhcHNlZFxyXG4gICAgICAuYXBwLWNvbnRlbnQsXHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgkbWVudS1jb2xsYXBzZWQtd2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgICAvLyBGbG9hdGluZy1uYXZiYXJcclxuICAgICAgICAmLmZsb2F0aW5nLW5hdiB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gNC40cmVtIC0gNzRweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5hdmJhci1zdGF0aWMtdG9wXHJcbiAgICAgICAgJi5uYXZiYXItc3RhdGljLXRvcCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gNzRweCk7XHJcbiAgICAgICAgICBsZWZ0OiA3NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b2dnbGUtaWNvbixcclxuICAgIC5jb2xsYXBzZS10b2dnbGUtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC40MjVyZW07XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3IgbGcgYW5kIHVwIHNjcmVlblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgLnZlcnRpY2FsLWxheW91dCB7XHJcbiAgICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsbHkgbWVudSAmIGNvbnRlbnQgd2lkdGggZm9yIG1kIGFuZCBkb3duIHNjcmVlblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcclxuICAudmVydGljYWwtbGF5b3V0IHtcclxuICAgICYudmVydGljYWwtbWVudS1tb2Rlcm4ge1xyXG4gICAgICAvLyBub3QgdXNpbmcgdGhpcyBjbGFzcyBpbiBiZWxvdyA8IDk5MlxyXG4gICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIHtcclxuICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQsXHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgwKTtcclxuICAgICAgfVxyXG4gICAgICAmLm1lbnUtY29sbGFwc2VkIHtcclxuICAgICAgICAuYXBwLWNvbnRlbnQsXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3Igc20gYW5kIGRvd24gc2NyZWVuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gIC52ZXJ0aWNhbC1sYXlvdXQge1xyXG4gICAgJi52ZXJ0aWNhbC1tZW51LW1vZGVybiB7XHJcbiAgICAgIC8vIG5vdCB1c2luZyB0aGlzIGNsYXNzIDw5OTJcclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50LFxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4vLyBJRSBTcGVjaWZpYyBDU1NcclxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAudmVydGljYWwtbWVudS1tb2Rlcm4udmVydGljYWwtbGF5b3V0IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzcGFuIHtcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuLy8gSW1wb3J0IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIGZvciBzbWFsbCBzY3JlZW4gc3VwcG9ydFxyXG5AaW1wb3J0ICd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2Nzcyc7XHJcbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW1lbnUuc2Nzc1xuICAgIERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgdmVydGljYWwgbW9kZXJuIHN0eWxlIG1lbnUgd2l0aCBleHBhbmQgYW5kIGNvbGxvcHMgc3VwcG9ydC4gSXQgc3VwcG9ydFxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmbGlwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XG4gICAgaXRlbSBzZXBhcmF0aW9uLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcbiAgICBBdXRob3I6IFBJWElOVkVOVFxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgYmFja2dyb3VuZCAwcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpIGEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhIHN2Zyxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSBpIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm1lbnUtY29udGVudCA+IGxpID4gYSBzdmcsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm1lbnUtY29udGVudCA+IGxpID4gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjQ1cmVtO1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDExcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSB7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gc3ZnOmJlZm9yZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4xcmVtO1xuICBoZWlnaHQ6IDEuMXJlbTtcbiAgd2lkdGg6IDEuMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLmZvb3RlciB7XG4gIG1hcmdpbi1sZWZ0OiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubW9kZXJuLW5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyLmV4cGFuZGVkIHtcbiAgd2lkdGg6IDI2MHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyLmV4cGFuZGVkIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyLmZpeGVkLXRvcCwgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyLmZsb2F0aW5nLW5hdiB7XG4gIGxlZnQ6IDgwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUge1xuICB3aWR0aDogODBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubmF2YmFyLWhlYWRlciAuYnJhbmQtdGV4dCxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubW9kZXJuLW5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyLjJyZW07XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjI4NXJlbTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbSAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uIGxpLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICM1NjU2NTY7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQge1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmlnYXRpb24gPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmlnYXRpb24gPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaS5uYXZpZ2F0aW9uLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSB7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5hcHAtY29udGVudCxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmZvb3RlciB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuaGVhZGVyLW5hdmJhci5mbG9hdGluZy1uYXYge1xuICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gNC40cmVtIC0gNzRweCk7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5oZWFkZXItbmF2YmFyLm5hdmJhci1zdGF0aWMtdG9wIHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDc0cHgpO1xuICBsZWZ0OiA3NHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAudG9nZ2xlLWljb24sXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5jb2xsYXBzZS10b2dnbGUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC40MjVyZW07XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC50b2dnbGUtaWNvbjpmb2N1cyxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbGxhcHNlLXRvZ2dsZS1pY29uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5hcHAtY29udGVudCxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAudmVydGljYWwtbWVudS1tb2Rlcm4udmVydGljYWwtbGF5b3V0IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzcGFuIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzXG4gICAgRGVzY3JpcHRpb246IEEgb3ZlcmxheSBzdHlsZSB2ZXJ0aWNhbCBtZW51IHdpdGggc2hvdyBhbmQgaGlkZSBzdXBwb3J0LiBJdCBzdXBwb3J0XG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcbiAgICBpdGVtIHNlcGVyYXRpb24uXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuICAgIEF1dGhvcjogUElYSU5WRU5UXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51LCAudmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtaGlkZSAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbiAgd2lkdGg6IDI2MHB4O1xuICBsZWZ0OiAtMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmcsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmc6YmVmb3JlLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaTpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgZm9udC1zaXplOiAxLjQyOXJlbTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1Yi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiAubmF2aWdhdGlvbi1oZWFkZXIgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1vcGVuIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI2MHB4LCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzXG4gICAgRGVzY3JpcHRpb246IEEgb3ZlcmxheSBzdHlsZSB2ZXJ0aWNhbCBtZW51IHdpdGggc2hvdyBhbmQgaGlkZSBzdXBwb3J0LiBJdCBzdXBwb3J0XG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcbiAgICBpdGVtIHNlcGVyYXRpb24uXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuICAgIEF1dGhvcjogUElYSU5WRU5UXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51LCAudmVydGljYWwtb3ZlcmxheS1tZW51Lm1lbnUtaGlkZSAubWFpbi1tZW51IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbiAgd2lkdGg6IDI2MHB4O1xuICBsZWZ0OiAtMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmcsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmc6YmVmb3JlLFxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhID4gaTpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgZm9udC1zaXplOiAxLjQyOXJlbTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1Yi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiAubmF2aWdhdGlvbi1oZWFkZXIgLmZlYXRoZXItbW9yZS1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1vcGVuIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI2MHB4LCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbn0iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXHJcbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIGNvbXBvbmVudCB2YXJpYWJsZVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kYmFzZS1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XHJcbiRib2R5LWRpcmVjdGlvbjogbHRyICFkZWZhdWx0OyAvLyBEZWZhdWx0IGx0ciwgY2hhbmdlIGl0IHRvIHJ0bCBmb3IgUmlnaHQgVG8gTGVmdCBzdXBwb3J0LlxyXG4kY29udGVudC1wYWRkaW5nOiAycmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBDb2xvcnNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kbmF2LWNvbXBvbmVudC1ib3JkZXItY29sb3I6ICNkZGQgIWRlZmF1bHQ7XHJcblxyXG4kc3dpcGVyLWJnOiAjZjJmNGY0ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBOYXZiYXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kbmF2YmFyLWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDQuNDVyZW0gIWRlZmF1bHQ7XHJcbiRmb290ZXItaGVpZ2h0OiAzLjM1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBNYWluIE1lbnVcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy9tYWluIG1lbnUgZGFya1xyXG4kbWVudS1kYXJrLWNvbG9yOiAjZGNkY2RjICFkZWZhdWx0O1xyXG4kbWVudS1kYXJrLWJnLWNvbG9yOiAjMTAxNjNhICFkZWZhdWx0O1xyXG5cclxuJG1lbnUtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweCAhZGVmYXVsdDtcclxuJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDIwcHggIWRlZmF1bHQ7XHJcbiRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XHJcbiRtZW51LWZvcnRoLWxldmVsLXBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHggIWRlZmF1bHQ7XHJcblxyXG4vLyB2ZXJ0aWNhbCBtZW51XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcclxuJG1lbnUtY29sbGFwc2VkLXdpZHRoOiA4MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBTaWRlYmFyXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRzaWRlYmFyLXdpZHRoOiAyNjBweCAhZGVmYXVsdDtcclxuJGNoYXQtc2lkZWJhci13aWR0aDogMzYwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICBBdmF0YXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRhdmF0YXItc2l6ZTogMzJweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweCAhZGVmYXVsdDtcclxuXHJcbiRhdmF0YXItc2l6ZS14bDogNzBweCAhZGVmYXVsdDtcclxuJGF2YXRhci1zaXplLWxnOiA1MHB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXNpemUtc206IDI0cHggIWRlZmF1bHQ7XHJcblxyXG4kYXZhdGFyLWJnOiAjYzNjM2MzO1xyXG4kYXZhdGFyLWdyb3VwLWJvcmRlcjogJHdoaXRlO1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFByb2dyZXNzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRwcm9ncmVzcy1zaXplLXhsOiAxLjE0cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1sZzogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLW1kOiAwLjU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3Mtc2l6ZS1zbTogMC4xNDNyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgRm9ybVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gJGlucHV0LWhlaWdodCwgJGlucHV0LWhlaWdodC1sZywgJGlucHV0LWhlaWdodC1zbSBhcmUgaW4gdmFyaWFibGVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUteGw6ICgkZm9udC1zaXplLWJhc2UgKyAwLjUpICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteGw6IDEuNyAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXhzOiAxLjUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXkteGw6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC14bDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS14czogMC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXhzOiAwLjI3NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzLXhsOiAwLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy14czogMC4xMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMteGw6ICRib3JkZXItcmFkaXVzLXhsICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14czogJGJvcmRlci1yYWRpdXMteHMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0LXhsOiAoKCRmb250LXNpemUteGwgKiAkbGluZS1oZWlnaHQteGwpICsgKCRpbnB1dC1wYWRkaW5nLXkteGwgKiAyKSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQteHM6ICgoJGZvbnQtc2l6ZS14cyAqICRsaW5lLWhlaWdodC14cykgKyAoJGlucHV0LXBhZGRpbmcteS14cyAqIDIpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1zbTogKCgkZm9udC1zaXplLXNtICogJGxpbmUtaGVpZ2h0LXNtKSArICgkaW5wdXQtcGFkZGluZy15LXNtICogMikpICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEJsYW5rIFBhZ2UgQmcgQ29sb3JcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRibGFuay1iZy1jb2xvcjogI2VmZjJmNyAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBEYXRhIFRhYmxlcyBCZyBDb2xvclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGRhdGF0YWJsZS1iZy1jb2xvcjogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBTd2l0Y2hcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHN3aXRjaC1iZy1jb2xvcjogI2UyZTJlMiAhZGVmYXVsdDtcclxuJHN3aXRjaC1pbmRpY2F0b3ItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBUaW1lbGluZVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kdGltZWxpbmUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLXBvaW50LXNpemU6IDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itc2l6ZTogMTJweCAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1wb2ludC1pbmRpY2F0b3Itd3JhcHBlci1zaXplOiAyMHB4ICFkZWZhdWx0O1xyXG5cclxuJHRpbWVsaW5lLWl0ZW0tbWluLWhlaWdodDogNHJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLWl0ZW0taWNvbi1mb250LXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtZXZlbnQtdGltZS1zaXplOiAwLjg1cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtZXZlbnQtdGltZS1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGaWxlIE5hbWU6IG1haW4tbWVudS1taXhpbi5zY3NzXHJcbi8vIERlc2NyaXB0aW9uOiBDb21tb24gbWl4aW4gZm9yIG1lbnVzLCBjb250YWluIGRhcmsgYW5kIGxpZ2h0IHZlcnNpb24gc2Nzcy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEhlYWRlciBuYXZiYXIgY29udGVudCBhbmQgYnJhbmQgZXhwYW5kZWQgJiBjb2xsYXBzZWQgc3RhdHNcclxuLy8gc3BhY2luZyBhbmQgc2l6aW5nLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIE1peGlucyBmb3IgdGhlIG1lbnUgYW5kIG5hdmJhciBwb3NpdGlvbiwgbWFyZ2luIGFuZCB3aWR0aCBjaGFuZ2VcclxuQG1peGluIG1haW4tbWVudS13aWR0aCgkbWVudS13aWR0aCkge1xyXG4gIG1hcmdpbi1sZWZ0OiAkbWVudS13aWR0aDtcclxufVxyXG5AbWl4aW4gbWVudS1uYXZiYXItd2lkdGgoJG1lbnUtd2lkdGgpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogJG1lbnUtd2lkdGg7XHJcbn1cclxuLy8gTWl4aW5zIGZvciB0aGUgbWVudSBzaG93IGhpZGUgYmFzZWQgb24gd2lkdGhcclxuQG1peGluIHZlcnRpY2FsLW1lbnUtdHJhbnNmb3JtLXNob3coJHRyYW5zZm9ybS13aWR0aCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHRyYW5zZm9ybS13aWR0aCwgMCwgMCk7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwO1xyXG59XHJcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LXRyYW5zZm9ybS1oaWRlKCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi8vIE1peGlucyBmb3IgdGhlIHN1YiBtZW51IGFycm93XHJcbkBtaXhpbiB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coJGFycm93LWZvbnQtc2l6ZSkge1xyXG4gICYuaGFzLXN1YiB7XHJcbiAgICA+IGE6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKHN0ci1yZXBsYWNlKCRjaGV2cm9uLXJpZ2h0LCAnY3VycmVudENvbG9yJywgJGJvZHktY29sb3IpLCAnIycsICclMjMnKSk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAkYXJyb3ctZm9udC1zaXplO1xyXG4gICAgICBoZWlnaHQ6ICRhcnJvdy1mb250LXNpemU7XHJcbiAgICAgIHdpZHRoOiAkYXJyb3ctZm9udC1zaXplO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIHRvcDogMTRweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgJi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpIHtcclxuICAgICAgPiBhOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gVXNlZCBmb3IgYXBwc1xyXG5AbWl4aW4gY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICRjb250ZW50UGFkZGluZzogMHJlbSxcclxuICAkbmF2YmFySGVpZ2h0OiAwcmVtLFxyXG4gICRmb290ZXJIZWlnaHQ6IDByZW0sXHJcbiAgJGZsb2F0aW5nTmF2TWFyZ2luOiAwcmVtLFxyXG4gICRob3Jpem9udGFsTWVudUhlaWdodDogMHJlbSxcclxuICAkc3BhY2luZ1NpZGVzOiAxLFxyXG4gICRob3Jpem9udGFsTGF5b3V0OiBmYWxzZVxyXG4pIHtcclxuICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAxMDB2aCAtXHJcbiAgICAgIGNhbGMoXHJcbiAgICAgICAgY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICsgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgIClcclxuICApO1xyXG4gIGhlaWdodDogY2FsYyhcclxuICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cclxuICAgICAgY2FsYyhcclxuICAgICAgICBjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gKyAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgKVxyXG4gICk7XHJcbiAgLy8gcmVzcG9uc2l2ZSBzaXplIGhlaWdodFxyXG4gIEBpZiAkaG9yaXpvbnRhbExheW91dCB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIDEwMHZoIC0gY2FsYyhjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9IC0gMC44cmVtKSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXHJcbiAgICAgICAgICBjYWxjKGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gLSAwLjhyZW0pICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgMTAwdmggLVxyXG4gICAgICAgICAgY2FsYyhcclxuICAgICAgICAgICAgY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pIC0gY2FsYygwLjhyZW0gKiAjeyRzcGFjaW5nU2lkZXN9KSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArXHJcbiAgICAgICAgICAgICAgI3skZmxvYXRpbmdOYXZNYXJnaW59ICsgI3skaG9yaXpvbnRhbE1lbnVIZWlnaHR9XHJcbiAgICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICB2YXIoLS12aCwgMXZoKSAqIDEwMCAtXHJcbiAgICAgICAgICBjYWxjKFxyXG4gICAgICAgICAgICBjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgLSBjYWxjKDAuOHJlbSAqICN7JHNwYWNpbmdTaWRlc30pKSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICtcclxuICAgICAgICAgICAgICAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExpZ2h0ICYgRGFyayBtZW51IG1peGluXHJcbi8vICR0aGVtZS1jb2xvciA6IE1lbnUgdGV4dCBjb2xvclxyXG4vLyAkdGhlbWUtYmcgICAgOiBNZW51IGJhY2tncm91bmQgY29sb3JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtaXhpbiBtZW51LXRoZW1lKCR0aGVtZS1jb2xvciwgJHRoZW1lLWJnKSB7XHJcbiAgJG1haW4tbWVudS10b3Atb3Blbi1jb2xvcjogZGFya2VuKCR0aGVtZS1jb2xvciwgMTAlKTtcclxuICAkbWFpbi1tZW51LXRvcC1vcGVuLWhvdmVyLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA2JSk7XHJcbiAgJG1haW4tbWVudS10b3Atb3Blbi1oZWFkLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA0JSk7XHJcblxyXG4gICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnOiBkYXJrZW4oJHRoZW1lLWJnLCA0JSk7IC8vJHByaW1hcnlcclxuXHJcbiAgJG1haW4tbWVudS1zdWItY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAkbWFpbi1tZW51LXN1Yi1ob3Zlci1jb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDQlKTtcclxuXHJcbiAgJG1haW4tbWVudS1zdWItb3Blbi1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG5cclxuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICR0aGVtZS1iZztcclxuXHJcbiAgLm5hdmlnYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWJnO1xyXG4gICAgLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCAyMS41JSk7XHJcbiAgICAgIG1hcmdpbjogY2FsYygjeyRjb250ZW50LXBhZGRpbmd9ICsgMC4yODZyZW0pIDAgMC44cmVtICgkY29udGVudC1wYWRkaW5nICsgMC4ycmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgJi5oYXMtc3ViIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwcywgY29sb3IgMHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoZW1lLWNvbG9yLCA0LjklKTtcclxuICAgICAgICBwYWRkaW5nOiAkbWVudS1wYWRkaW5nO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG5cclxuICAgICAgICBzcGFuLm1lbnUtc3ViLXRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgMzAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiAqIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lbnUgSXRlbSBIb3ZlciBBbmltYXRpb25cclxuICAgIGxpLm5hdi1pdGVtIHtcclxuICAgICAgYTpob3ZlciA+ICoge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICB9XHJcbiAgICAgIHVsLm1lbnUtY29udGVudCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYTpob3ZlciA+ICoge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBsaSB7XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpLFxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgPiB1bCBsaSB7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpub3QoLmhhcy1zdWIpIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmhhcy1zdWIge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPiB1bCA+IGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSxcclxuICAgICAgJi5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXRvcC1vcGVuLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3Atb3Blbi1oZWFkLWJnO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLm9wZW4pIHtcclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgkcHJpbWFyeSwgMC43KTtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3Atb3Blbi1ob3Zlci1iZztcclxuXHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaG92ZXIsXHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluLW1lbnUtdG9wLWFjdGl2ZS1oZWFkLWJnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS1zdWItY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICRtZW51LXNlY29uZC1sZXZlbC1wYWRkaW5nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAkbWVudS10aGlyZC1sZXZlbC1wYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oYXMtc3ViIHtcclxuICAgICAgICAgICY6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcGVuLFxyXG4gICAgICAgIC5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS1zdWItb3Blbi1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vZm9yIDJyZCBsZXZlbCBtZW51XHJcbiAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC8vZm9yIDNyZCBsZXZlbCBtZW51XHJcbiAgICAgICAgICAgIC5vcGVuIHtcclxuICAgICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvdmVyLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtc3ViLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE4ZGVnLCByZ2JhKCRwcmltYXJ5LCAxKSwgcmdiYSgkcHJpbWFyeSwgMC43KSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgkcHJpbWFyeSwgMC43KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBNZW51IGNvbnRlbnQgZGlzcGxheSBtaXhpblxyXG4vLyAkbWVudS1leHBhbmRlZC13aWR0aCA6IEV4cGFuZGVkIG1lbnUgd2lkdGhcclxuLy8gJG1lbnUtY29sbGFwc2VkLXdpZHRoOiBDb2xsYXBzZWQgbWVudSB3aWR0aFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1peGluIG1lbnUtY29udGVudCgkbWVudS1leHBhbmRlZC13aWR0aCwgJG1lbnUtY29sbGFwc2VkLXdpZHRoLCAkdGhlbWUtY29sb3IsICR0aGVtZS1iZykge1xyXG4gIC5tYWluLW1lbnUtY29udGVudCB7XHJcbiAgICA+IHNwYW4ubWVudS10aXRsZSxcclxuICAgIGEubWVudS10aXRsZSB7XHJcbiAgICAgIHJpZ2h0OiAtKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICAgIH1cclxuICAgID4gdWwubWVudS1jb250ZW50IHtcclxuICAgICAgbGVmdDogJG1lbnUtY29sbGFwc2VkLXdpZHRoO1xyXG4gICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4yNXMsIG9wYWNpdHkgMC4yNXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMnB4IHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgkYmxhY2ssIDAuMik7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgkYmxhY2ssIDAuMDIpO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSB2ZXJ0aWNhbC1tZW51LWhhcy1zdWItYXJyb3coMXJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzXHJcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcclxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XHJcbiAgICBpdGVtIHNlcGVyYXRpb24uXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xyXG5cclxuLy8gSW1wb3J0IGZpcnN0IG1haW4gbWVudSBtaXhpblxyXG5AaW1wb3J0ICcuLi8uLi9taXhpbnMvbWFpbi1tZW51LW1peGluJztcclxuXHJcbi8vIFZlcnRpY2FsIE92ZXJsYXkgTWVudVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSB7XHJcbiAgLy9Db250ZW50IGV4cGFuZGVkXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xyXG4gIH1cclxuICAvL05hdmJhciBleHBhbmRlZFxyXG4gIC5uYXZiYXIge1xyXG4gICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICBAaW5jbHVkZSBtZW51LW5hdmJhci13aWR0aCgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIE1haW4gbWVudSBleHBhbmRlZFxyXG4gIC5tYWluLW1lbnUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xyXG4gICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgbGVmdDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICA+IGxpIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgPiBzdmcsXHJcbiAgICAgICAgICA+IGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40MjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5tZW51LW9wZW4ge1xyXG4gICAgLm1haW4tbWVudSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1lbnUtZXhwYW5kZWQtd2lkdGgsIDAsIDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1lbnUtaGlkZSB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgQGV4dGVuZCAubWFpbi1tZW51O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 8477:
/*!***********************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutModule": function() { return /* binding */ VerticalLayoutModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components */ 6200);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 2625);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/content/content.module */ 6294);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 4735);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 2004);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 2923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);











var VerticalLayoutModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function VerticalLayoutModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VerticalLayoutModule);
});
VerticalLayoutModule.ɵfac = function VerticalLayoutModule_Factory(t) {
  return new (t || VerticalLayoutModule)();
};
VerticalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: VerticalLayoutModule
});
VerticalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](VerticalLayoutModule, {
    declarations: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__.VerticalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_5__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__.FooterModule],
    exports: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__.VerticalLayoutComponent]
  });
})();

/***/ }),

/***/ 4402:
/*!***********************************************!*\
  !*** ./src/app/main/sample/home.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);




var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent() {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Home',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [{
            name: 'Home',
            isLink: true,
            link: '/'
          }, {
            name: 'Sample',
            isLink: false
          }]
        }
      };
    }
  }]);
  return HomeComponent;
}();
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 18,
  vars: 1,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "home-page"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-1"], [1, "card-text"], ["href", "https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/", "target", "_blank"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-content-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Kick start your project \uD83D\uDE80");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "All the best for your new project.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Please make sure to read our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Template Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " to understand where to go from here and how to use our template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
    }
  },
  directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 372:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/de.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'de',
  data: {
    SAMPLE: {
      AWESOME: 'Erstelle Awesome 🙌'
    }
  }
};

/***/ }),

/***/ 2374:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/en.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    SAMPLE: {
      AWESOME: 'Create Awesome 🙌'
    }
  }
};

/***/ }),

/***/ 4197:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/fr.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    SAMPLE: {
      AWESOME: 'Créer génial 🙌'
    }
  }
};

/***/ }),

/***/ 9345:
/*!****************************************!*\
  !*** ./src/app/main/sample/i18n/pt.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'pt',
  data: {
    SAMPLE: {
      AWESOME: 'Crie incrível 🙌'
    }
  }
};

/***/ }),

/***/ 4333:
/*!*************************************************!*\
  !*** ./src/app/main/sample/sample.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleComponent": function() { return /* binding */ SampleComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/en */ 2374);
/* harmony import */ var _i18n_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/fr */ 4197);
/* harmony import */ var _i18n_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/de */ 372);
/* harmony import */ var _i18n_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/pt */ 9345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 7330);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 9686);










var SampleComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  function SampleComponent(_coreTranslationService) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SampleComponent);
    this._coreTranslationService = _coreTranslationService;
    this._coreTranslationService.translate(_i18n_en__WEBPACK_IMPORTED_MODULE_2__.locale, _i18n_fr__WEBPACK_IMPORTED_MODULE_3__.locale, _i18n_de__WEBPACK_IMPORTED_MODULE_4__.locale, _i18n_pt__WEBPACK_IMPORTED_MODULE_5__.locale);
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SampleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Home',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [{
            name: 'Home',
            isLink: true,
            link: '/'
          }, {
            name: 'Sample',
            isLink: false
          }]
        }
      };
    }
  }]);
  return SampleComponent;
}();
SampleComponent.ɵfac = function SampleComponent_Factory(t) {
  return new (t || SampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.CoreTranslationService));
};
SampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SampleComponent,
  selectors: [["app-sample"]],
  decls: 16,
  vars: 4,
  consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "sample-page"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-1"], [1, "card-text"]],
  template: function SampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-content-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "This is your second page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake drag\xE9e chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o drag\xE9e chocolate. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 2, "SAMPLE.AWESOME"));
    }
  },
  directives: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_7__.ContentHeaderComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6446:
/*!**********************************************!*\
  !*** ./src/app/main/sample/sample.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleModule": function() { return /* binding */ SampleModule; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 9079);
/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample.component */ 4333);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ 4402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);










var routes = [{
  path: 'sample',
  component: _sample_component__WEBPACK_IMPORTED_MODULE_4__.SampleComponent,
  data: {
    animation: 'sample'
  }
}, {
  path: 'home',
  component: _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
  data: {
    animation: 'home'
  }
}];
var SampleModule = /*#__PURE__*/(0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SampleModule() {
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SampleModule);
});
SampleModule.ɵfac = function SampleModule_Factory(t) {
  return new (t || SampleModule)();
};
SampleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: SampleModule
});
SampleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SampleModule, {
    declarations: [_sample_component__WEBPACK_IMPORTED_MODULE_4__.SampleComponent, _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [_sample_component__WEBPACK_IMPORTED_MODULE_4__.SampleComponent, _home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent]
  });
})();

/***/ }),

/***/ 3673:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/de.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'de',
  data: {
    MENU: {
      HOME: 'Zuhause',
      SAMPLE: 'Stichprobe'
    }
  }
};

/***/ }),

/***/ 9545:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/en.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'en',
  data: {
    MENU: {
      HOME: 'Home',
      SAMPLE: 'Sample'
    }
  }
};

/***/ }),

/***/ 796:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/fr.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'fr',
  data: {
    MENU: {
      HOME: 'Maison',
      SAMPLE: 'Échantillon'
    }
  }
};

/***/ }),

/***/ 9424:
/*!*********************************!*\
  !*** ./src/app/menu/i18n/pt.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; }
/* harmony export */ });
var locale = {
  lang: 'pt',
  data: {
    MENU: {
      HOME: 'Casa',
      SAMPLE: 'Amostra'
    }
  }
};

/***/ }),

/***/ 7001:
/*!******************************!*\
  !*** ./src/app/menu/menu.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": function() { return /* binding */ menu; }
/* harmony export */ });
var menu = [{
  id: 'home',
  title: 'Home',
  translate: 'MENU.HOME',
  type: 'item',
  icon: 'home',
  url: 'home'
}, {
  id: 'types',
  title: 'Types',
  type: 'item',
  icon: 'bar-chart-2',
  url: 'types'
}, {
  id: 'locations',
  title: 'Locations',
  type: 'item',
  icon: 'map-pin',
  url: 'locations'
}, {
  id: 'amenities',
  title: 'Amenities',
  type: 'item',
  icon: 'plus-square',
  url: 'amenities'
}, {
  id: 'compounds',
  title: 'Compounds',
  type: 'item',
  icon: 'grid',
  url: 'compounds'
}, {
  id: 'units',
  title: 'Units',
  type: 'item',
  icon: 'tag',
  url: 'units'
}, {
  id: 'content',
  title: 'Content Editor',
  type: 'section',
  icon: 'image',
  children: [{
    id: 'home',
    title: 'Home Page',
    type: 'item',
    icon: 'home',
    url: 'content/home'
  }, {
    id: 'slider',
    title: 'Slider',
    type: 'item',
    icon: 'columns',
    url: 'slider'
  }, {
    id: 'about',
    title: 'About Page',
    type: 'item',
    icon: 'command',
    url: 'content/about'
  }, {
    id: 'service',
    title: 'Service Page',
    type: 'item',
    icon: 'check-circle',
    url: 'content/service'
  }, {
    id: 'contact',
    title: 'Contact Page',
    type: 'item',
    icon: 'codepen',
    url: 'content/contact'
  }, {
    id: 'config',
    title: 'Social Media',
    type: 'item',
    icon: 'cpu',
    url: 'content/config'
  }]
}, {
  id: 'site-data',
  title: 'Site Data',
  type: 'section',
  icon: 'image',
  children: [{
    id: 'newsletter',
    title: 'Newsletter',
    type: 'item',
    icon: 'voicemail',
    url: 'site-data/newsletter'
  }, {
    id: 'contact-us',
    title: 'Contact Us',
    type: 'item',
    icon: 'cast',
    url: 'site-data/contact'
  }, {
    id: 'register-interest',
    title: 'Register Interest',
    type: 'item',
    icon: 'award',
    url: 'site-data/register-interest'
  }]
}];

/***/ }),

/***/ 7049:
/*!*************************************************!*\
  !*** ./src/app/shered/error-handler.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": function() { return /* binding */ ErrorHandlerService; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





var ErrorHandlerService = /*#__PURE__*/function () {
  function ErrorHandlerService(toastr, router) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorHandlerService);
    this.toastr = toastr;
    this.router = router;
  }
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorHandlerService, [{
    key: "handelError",
    value: function handelError(errorResponse) {
      var _this = this;
      switch (errorResponse.status) {
        case 422:
          {
            for (var property in errorResponse.error.errors) {
              if (errorResponse.error.errors.hasOwnProperty(property)) {
                var propertyErrors = errorResponse.error.errors[property];
                propertyErrors.forEach(function (error) {
                  _this.toastr.error(error, errorResponse.error.message, {
                    toastClass: 'toast ngx-toastr',
                    closeButton: false
                  });
                });
              }
            }
            break;
          }
        case 401:
          {
            localStorage.clear();
            location.reload();
          }
        default:
          {
            // this.toastr.error("Something Wrong", "Contact Site Administrator", {
            //   toastClass: 'toast ngx-toastr',
            //   closeButton: false
            // });
            break;
          }
      }
    }
  }]);
  return ErrorHandlerService;
}();
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
  return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ErrorHandlerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ErrorHandlerService,
  factory: ErrorHandlerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8167:
/*!********************************************************!*\
  !*** ./src/app/shered/global-error-handler.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalErrorHandler": function() { return /* binding */ GlobalErrorHandler; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.service */ 7049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




var GlobalErrorHandler = /*#__PURE__*/function () {
  function GlobalErrorHandler(injector) {
    (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GlobalErrorHandler);
    this.injector = injector;
  }
  //============================Data===========================
  (0,C_Users_user_Desktop_WORK_HelloHome_HelloHome_Admin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GlobalErrorHandler, [{
    key: "handleError",
    value: function handleError(error) {
      var service = this.injector.get(_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerService);
      service.handelError(error);
    }
  }]);
  return GlobalErrorHandler;
}();
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
  return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
GlobalErrorHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GlobalErrorHandler,
  factory: GlobalErrorHandler.ɵfac
});

/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false,
  hmr: false,
  apiUrl: 'https://hhegypt.com/api'
  // apiUrl: 'http://localhost:8000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5590:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": function() { return /* binding */ hmrBootstrap; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 7431);


var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
  var ngModule;
  module.hot.accept();
  bootstrap().then(function (mod) {
    return ngModule = mod;
  });
  module.hot.dispose(function () {
    var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    var elements = appRef.components.map(function (c) {
      return c.location.nativeElement;
    });
    var makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
    ngModule.destroy();
    makeVisible();
  });
};

/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ 5590);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
var bootstrap = function bootstrap() {
  return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
  if (false) {} else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(function (err) {
    return console.log(err);
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(271); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map