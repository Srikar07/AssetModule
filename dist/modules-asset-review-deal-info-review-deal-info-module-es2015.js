(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-asset-review-deal-info-review-deal-info-module"],{

/***/ "6lhB":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/deal-basic-information/deal-basic-information.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DealBasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealBasicInformationComponent", function() { return DealBasicInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_fake/fake-server/deals.table */ "knAO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/node.service */ "k5BX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class DealBasicInformationComponent {
    constructor(route, nodeService) {
        this.route = route;
        this.nodeService = nodeService;
        this.cssClass = "card-stretch gutter-b";
        this.currentTab = 'Day';
        this.deals = _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__["DealsTable"].deals;
        nodeService.node$.subscribe(n => this.reviewInfo = n);
    }
    ngOnInit() {
        //var dealId = this.route.snapshot.paramMap.get('id');
        //this.reviewInfo = this.deals.find(x => x.id == dealId);
        if (this.reviewInfo === 'undefined') {
            this.reviewInfo = null;
        }
        if (this.reviewInfo == null) {
            this.reviewInfo.name = "Test";
            this.reviewInfo.businessUnitName = "Test";
            this.reviewInfo.startDate = "Test";
            this.reviewInfo.id = "5";
        }
    }
}
DealBasicInformationComponent.??fac = function DealBasicInformationComponent_Factory(t) { return new (t || DealBasicInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"])); };
DealBasicInformationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DealBasicInformationComponent, selectors: [["app-deal-basic-information"]], decls: 45, vars: 9, consts: [[1, "card", "card-custom", 3, "ngClass"], [1, "card-header", "border-0", "pt-5"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-body", "pt-2", "pb-0", "mt-n3"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-wizard-v2__form"], [1, "form-group"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "row"], [1, "col-xl-4"]], template: function DealBasicInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Deal Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Deal Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Business Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Project Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Project Manager:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Investment Lead:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Legal Lead:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Property:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.businessUnitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.statusName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.propertyManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.investmentLead);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.legalLead);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.reviewInfo.properties);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsLWJhc2ljLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DealBasicInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deal-basic-information',
                templateUrl: './deal-basic-information.component.html',
                styleUrls: ['./deal-basic-information.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"] }]; }, null); })();


/***/ }),

/***/ "95+U":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/properties-info/properties-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PropertiesInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesInfoComponent", function() { return PropertiesInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/node.service */ "k5BX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
function PropertiesInfoComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const dealProperty_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, dealProperty_r1.propertyName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.propertyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.propertyType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.businessUnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.propertyAddressString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.units, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.propertyManager, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", dealProperty_r1.assetManager, " ");
} }
class PropertiesInfoComponent {
    constructor(nodeService) {
        this.nodeService = nodeService;
        nodeService.node$.subscribe(n => this.dealInfo = n);
        console.log(this.dealInfo);
    }
    ngOnInit() {
    }
}
PropertiesInfoComponent.??fac = function PropertiesInfoComponent_Factory(t) { return new (t || PropertiesInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"])); };
PropertiesInfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PropertiesInfoComponent, selectors: [["app-properties-info"]], decls: 29, vars: 1, consts: [[1, "card", "card-custom"], [1, "card-header", "border-0", "pt-5"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-body", "pt-2", "pb-0", "mt-n3"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-wizard-v2__form"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-bordered", "table-striped", "table-head-custom", "table-vertical-center", "overflow-hidden", "w-auto"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function PropertiesInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Property Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Property Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Ownership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Property Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Asset Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, PropertiesInfoComponent_tr_28_Template, 15, 10, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.dealInfo.properties);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PropertiesInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-properties-info',
                templateUrl: './properties-info.component.html',
                styleUrls: ['./properties-info.component.scss']
            }]
    }], function () { return [{ type: _services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] }]; }, null); })();


/***/ }),

/***/ "PSlX":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/default-review-info-page/default-review-info-page.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DefaultReviewInfoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultReviewInfoPageComponent", function() { return DefaultReviewInfoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function DefaultReviewInfoPageComponent_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const img_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", img_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](img_r2.description);
} }
function DefaultReviewInfoPageComponent_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DefaultReviewInfoPageComponent_ngb_carousel_1_1_ng_template_0_Template, 6, 2, "ng-template", 3);
} }
function DefaultReviewInfoPageComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DefaultReviewInfoPageComponent_ngb_carousel_1_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.images);
} }
class DefaultReviewInfoPageComponent {
    constructor(_http) {
        this._http = _http;
        this.images = [
            {
                description: "15 Dundonal",
                image: "./assets/media/propertyImages/15_Dundonald.jpg",
            }, {
                description: "25 Fisherville",
                image: "./assets/media/propertyImages/25Fisherville_Slide1.jpg",
            }, {
                description: "25 Cougar",
                image: "./assets/media/propertyImages/25-cougar.jpg",
            }
        ];
    }
    ngOnInit() {
        //this._http.get('https://picsum.photos/list')
        //    .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
        //    .subscribe(images => this.images = images);
        console.log(this.images);
    }
    _randomImageUrls(images) {
        console.log(this.images);
        return [1, 2, 3].map(() => {
            const randomId = images[Math.floor(Math.random() * images.length)].id;
            return `https://picsum.photos/900/500?image=${randomId}`;
        });
    }
}
DefaultReviewInfoPageComponent.??fac = function DefaultReviewInfoPageComponent_Factory(t) { return new (t || DefaultReviewInfoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DefaultReviewInfoPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DefaultReviewInfoPageComponent, selectors: [["app-default-review-info-page"]], decls: 2, vars: 1, consts: [[1, "col-xl-8"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["alt", "Random first slide", 2, "width", "900px", "height", "500px", 3, "src"], [1, "carousel-caption"]], template: function DefaultReviewInfoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DefaultReviewInfoPageComponent_ngb_carousel_1_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LXJldmlldy1pbmZvLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DefaultReviewInfoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default-review-info-page',
                templateUrl: './default-review-info-page.component.html',
                styleUrls: ['./default-review-info-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mAYS":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/review-deal-info-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ReviewDealInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDealInfoRoutingModule", function() { return ReviewDealInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deal_basic_information_deal_basic_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal-basic-information/deal-basic-information.component */ "6lhB");
/* harmony import */ var _deal_documents_deal_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deal-documents/deal-documents.component */ "v0zJ");
/* harmony import */ var _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-review-info-page/default-review-info-page.component */ "PSlX");
/* harmony import */ var _properties_info_properties_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-info/properties-info.component */ "95+U");
/* harmony import */ var _review_deal_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-deal-info.component */ "XbN/");









const routes = [
    {
        path: '',
        component: _review_deal_info_component__WEBPACK_IMPORTED_MODULE_6__["ReviewDealInfoComponent"],
        children: [
            {
                path: '',
                component: _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_4__["DefaultReviewInfoPageComponent"],
            }, {
                path: 'Default',
                component: _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_4__["DefaultReviewInfoPageComponent"],
            }, {
                path: 'dealBasicInformation',
                component: _deal_basic_information_deal_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["DealBasicInformationComponent"],
            },
            {
                path: 'dealDocuments',
                component: _deal_documents_deal_documents_component__WEBPACK_IMPORTED_MODULE_3__["DealDocumentsComponent"],
            },
            {
                path: 'properties',
                component: _properties_info_properties_info_component__WEBPACK_IMPORTED_MODULE_5__["PropertiesInfoComponent"],
            },
            { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
            { path: '**', redirectTo: 'profile-overview', pathMatch: 'full' },
        ],
    },
];
class ReviewDealInfoRoutingModule {
}
ReviewDealInfoRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ReviewDealInfoRoutingModule });
ReviewDealInfoRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ReviewDealInfoRoutingModule_Factory(t) { return new (t || ReviewDealInfoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReviewDealInfoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReviewDealInfoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nZyo":
/*!***************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/review-deal-info.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReviewDealInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDealInfoModule", function() { return ReviewDealInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _review_deal_info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-deal-info-routing.module */ "mAYS");
/* harmony import */ var _deal_documents_deal_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deal-documents/deal-documents.component */ "v0zJ");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _deal_basic_information_deal_basic_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deal-basic-information/deal-basic-information.component */ "6lhB");
/* harmony import */ var _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-review-info-page/default-review-info-page.component */ "PSlX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _properties_info_properties_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties-info/properties-info.component */ "95+U");











class ReviewDealInfoModule {
}
ReviewDealInfoModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ReviewDealInfoModule });
ReviewDealInfoModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ReviewDealInfoModule_Factory(t) { return new (t || ReviewDealInfoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _review_deal_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReviewDealInfoRoutingModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReviewDealInfoModule, { declarations: [_deal_documents_deal_documents_component__WEBPACK_IMPORTED_MODULE_3__["DealDocumentsComponent"], _deal_basic_information_deal_basic_information_component__WEBPACK_IMPORTED_MODULE_5__["DealBasicInformationComponent"], _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultReviewInfoPageComponent"], _properties_info_properties_info_component__WEBPACK_IMPORTED_MODULE_9__["PropertiesInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _review_deal_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReviewDealInfoRoutingModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReviewDealInfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_deal_documents_deal_documents_component__WEBPACK_IMPORTED_MODULE_3__["DealDocumentsComponent"], _deal_basic_information_deal_basic_information_component__WEBPACK_IMPORTED_MODULE_5__["DealBasicInformationComponent"], _default_review_info_page_default_review_info_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultReviewInfoPageComponent"], _properties_info_properties_info_component__WEBPACK_IMPORTED_MODULE_9__["PropertiesInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _review_deal_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReviewDealInfoRoutingModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v0zJ":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/deal-documents/deal-documents.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DealDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealDocumentsComponent", function() { return DealDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");







function DealDocumentsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DealDocumentsComponent_tr_21_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const doc_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.reloadDocument(doc_r1.location); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](doc_r1.fileName);
} }
class DealDocumentsComponent {
    constructor(route, modalService) {
        this.route = route;
        this.modalService = modalService;
        this.doc = "/assets/attachments/test_2.pdf";
        this.allDocuments = [
            {
                fileName: "Test 1",
                location: "/assets/attachments/test_1.pdf"
            }, {
                fileName: "Test 2",
                location: "/assets/attachments/test_2.pdf"
            },
        ];
    }
    ngOnInit() {
        var dealId = this.route.snapshot.paramMap.get('id');
        console.log(dealId);
    }
    open(content, data) {
        this.doc = data;
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    reloadDocument(data) {
        console.log(data);
        this.doc = data;
    }
}
DealDocumentsComponent.??fac = function DealDocumentsComponent_Factory(t) { return new (t || DealDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
DealDocumentsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DealDocumentsComponent, selectors: [["app-deal-documents"]], decls: 24, vars: 4, consts: [[1, "row"], [1, "card", "card-custom", "card-stretch", "gutter-b"], [1, "card-header", "border-0", "mt-4"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "mt-3", "font-weight-bold", "font-size-sm"], [1, "card-body", "pt-8"], [1, "d-flex", "align-items-center", "mb-10"], [1, "d-flex", "flex-column", "font-weight-bold"], [1, "table", "table-bordered", "table-striped"], [4, "ngFor", "ngForOf"], [1, "col-6"], [2, "display", "block", 3, "src", "original-size", "autoresize"], [1, "btn", "btn-primary", 3, "click"]], template: function DealDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "click Below List to load the file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "File Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, DealDocumentsComponent_tr_21_Template, 8, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "pdf-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allDocuments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.doc)("original-size", false)("autoresize", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%] {\n  color: #000;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.col-6[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2RlYWwtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBS0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6ImRlYWwtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgdGgge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29sLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DealDocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deal-documents',
                templateUrl: './deal-documents.component.html',
                styleUrls: ['./deal-documents.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-asset-review-deal-info-review-deal-info-module-es2015.js.map