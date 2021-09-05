(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-asset-asset-module"],{

/***/ "1Fuf":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/asset/show-remaining-deals/show-remaining-deals.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ShowRemainingDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRemainingDealsComponent", function() { return ShowRemainingDealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShowRemainingDealsComponent {
    constructor() {
        this.open = false;
    }
    ngOnInit() {
    }
}
ShowRemainingDealsComponent.ɵfac = function ShowRemainingDealsComponent_Factory(t) { return new (t || ShowRemainingDealsComponent)(); };
ShowRemainingDealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowRemainingDealsComponent, selectors: [["app-show-remaining-deals"]], inputs: { showDetails: "showDetails" }, decls: 0, vars: 0, template: function ShowRemainingDealsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXJlbWFpbmluZy1kZWFscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowRemainingDealsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-remaining-deals',
                templateUrl: './show-remaining-deals.component.html',
                styleUrls: ['./show-remaining-deals.component.scss']
            }]
    }], function () { return []; }, { showDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KQB9":
/*!***********************************************!*\
  !*** ./src/app/modules/asset/asset.module.ts ***!
  \***********************************************/
/*! exports provided: AssetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetModule", function() { return AssetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-routing.module */ "kBzq");
/* harmony import */ var _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exisiting-deals/exisiting-deals.component */ "QCmO");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deals-dashboard/deals-dashboard.component */ "ws06");
/* harmony import */ var _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-dashboard/projects-dashboard.component */ "ox/o");
/* harmony import */ var _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../_metronic/partials/content/widgets/widgets.module */ "kFOB");
/* harmony import */ var _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-remaining-deals/show-remaining-deals.component */ "1Fuf");
/* harmony import */ var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-deal/create-deal.component */ "evJ9");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./review-deal-info/review-deal-info.component */ "XbN/");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./google-auto-complete/google-auto-complete.component */ "LPfA");
/* harmony import */ var _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-deal/components/edit-property-modal/edit-property-modal.component */ "w0rC");
























class AssetModule {
}
AssetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetModule });
AssetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetModule_Factory(t) { return new (t || AssetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"],
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"],
            _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetModule, { declarations: [_exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"],
        _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DealsDashboardComponent"],
        _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsDashboardComponent"],
        _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__["ShowRemainingDealsComponent"],
        _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__["CreateDealComponent"],
        _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__["ReviewDealInfoComponent"],
        _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__["GoogleAutoCompleteComponent"],
        _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditPropertyModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"],
        _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"],
        _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"],
                    _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DealsDashboardComponent"],
                    _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsDashboardComponent"],
                    _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__["ShowRemainingDealsComponent"],
                    _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__["CreateDealComponent"],
                    _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__["ReviewDealInfoComponent"],
                    _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__["GoogleAutoCompleteComponent"],
                    _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditPropertyModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"],
                    _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"],
                    _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"],
                    ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "LPfA":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/asset/google-auto-complete/google-auto-complete.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GoogleAutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAutoCompleteComponent", function() { return GoogleAutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["addresstext"];
class GoogleAutoCompleteComponent {
    constructor() {
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            //componentRestrictions: { country: 'US' },
            types: [this.adressType] // 'establishment' / 'address' / 'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
}
GoogleAutoCompleteComponent.ɵfac = function GoogleAutoCompleteComponent_Factory(t) { return new (t || GoogleAutoCompleteComponent)(); };
GoogleAutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleAutoCompleteComponent, selectors: [["app-google-auto-complete"]], viewQuery: function GoogleAutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addresstext = _t.first);
    } }, inputs: { adressType: "adressType", autocompleteInput: "autocompleteInput" }, outputs: { setAddress: "setAddress" }, decls: 2, vars: 1, consts: [["type", "text", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel2", "data-keyboard", "false", 1, "form-control", 2, "border", "1px solid #ccc", "width", "200px", "z-index", "2", 3, "ngModel", "ngModelChange"], ["addresstext", ""]], template: function GoogleAutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoogleAutoCompleteComponent_Template_input_ngModelChange_0_listener($event) { return ctx.autocompleteInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.autocompleteInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29nbGUtYXV0by1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-auto-complete',
                templateUrl: './google-auto-complete.component.html',
                styleUrls: ['./google-auto-complete.component.scss']
            }]
    }], function () { return []; }, { adressType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setAddress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addresstext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addresstext']
        }], autocompleteInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QCmO":
/*!****************************************************************************!*\
  !*** ./src/app/modules/asset/exisiting-deals/exisiting-deals.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExisitingDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExisitingDealsComponent", function() { return ExisitingDealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/fake/deals.service */ "BfxI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");











function ExisitingDealsComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Selected records count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.fetchSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fetch Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateStatusForSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Update Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
} }
function ExisitingDealsComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_tr_49_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const deal_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.navigateToReviewPage(deal_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deal_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.businessUnitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.statusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.investmentLead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deal_r6.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
} }
class ExisitingDealsComponent {
    constructor(fb, modalService, dealsService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.dealsService = dealsService;
        this.router = router;
        this.subscriptions = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    }
    ngOnInit() {
        this.filterForm();
        this.searchForm();
        this.dealsService.fetch();
        this.grouping = this.dealsService.grouping;
        this.paginator = this.dealsService.paginator;
        this.sorting = this.dealsService.sorting;
        const sb = this.dealsService.isLoading$.subscribe(res => this.isLoading = res);
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // filtration
    filterForm() {
        this.filterGroup = this.fb.group({
            status: [''],
            type: [''],
            searchTerm: [''],
        });
        this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(() => this.filter()));
        this.subscriptions.push(this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter()));
    }
    filter() {
        const filter = {};
        const status = this.filterGroup.get('status').value;
        if (status) {
            filter['status'] = status;
        }
        const type = this.filterGroup.get('type').value;
        if (type) {
            filter['type'] = type;
        }
        this.dealsService.patchState({ filter });
    }
    // search
    searchForm() {
        this.searchGroup = this.fb.group({
            searchTerm: [''],
        });
        const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
            .pipe(
        /*
      The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
      we are limiting the amount of server requests emitted to a maximum of one every 150ms
      */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe((val) => this.search(val));
        this.subscriptions.push(searchEvent);
    }
    search(searchTerm) {
        console.log(searchTerm);
        this.dealsService.patchState({ searchTerm: searchTerm.toLowerCase() });
    }
    // sorting
    sort(column) {
        const sorting = this.sorting;
        const isActiveColumn = sorting.column === column;
        if (!isActiveColumn) {
            sorting.column = column;
            sorting.direction = 'asc';
        }
        else {
            sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
        }
        this.dealsService.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.dealsService.patchState({ paginator });
    }
    updateStatusForSelected() { }
    delete(id) { }
    edit(id) { }
    create() { }
    deleteSelected() { }
    fetchSelected() { }
    navigateToReviewPage(dealId) {
        this.router.navigate(['asset/reviewDealInfo/' + dealId]);
    }
}
ExisitingDealsComponent.ɵfac = function ExisitingDealsComponent_Factory(t) { return new (t || ExisitingDealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ExisitingDealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExisitingDealsComponent, selectors: [["app-exisiting-deals"]], decls: 52, vars: 21, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["routerLink", "/asset/createNewDeal", "routerLinkActive", "active", 1, "btn", "btn-primary"], [1, "menu-bullet", "menu-bullet-dot"], [1, "menu-text"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-8", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "value", "", "formControlName", "searchTerm", 1, "form-control"], [1, "form-text", "text-muted"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "id", 3, "activeColumn", "activeDirection", "sort"], ["column", "name", 3, "activeColumn", "activeDirection", "sort"], ["column", "type", 3, "activeColumn", "activeDirection", "sort"], ["column", "businessUnitName", 3, "activeColumn", "activeDirection", "sort"], ["column", "statusName", 3, "activeColumn", "activeDirection", "sort"], ["column", "investmentLead", 3, "activeColumn", "activeDirection", "sort"], ["column", "startDate", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-stream"], [1, "fa", "fa-sync-alt"], [1, "label", "label-lg", "label-inline"], ["title", "Redirect to Deal", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"]], template: function ExisitingDealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create New Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " in all fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExisitingDealsComponent_ng_container_20_Template, 23, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-sort-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_27_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-sort-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_30_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " TYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-sort-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_33_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " BUSINESS UNIT NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-sort-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_36_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " PROJECT STATUS NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-sort-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_39_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " INVESTMENT LEAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-sort-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_42_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " START DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "app-sort-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_45_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ExisitingDealsComponent_tr_49_Template, 20, 8, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function ExisitingDealsComponent_Template_app_paginator_paginate_51_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grouping.getSelectedRowsCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 19, ctx.dealsService.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGlzaXRpbmctZGVhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExisitingDealsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exisiting-deals',
                templateUrl: './exisiting-deals.component.html',
                styleUrls: ['./exisiting-deals.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Qrho":
/*!****************************************************************!*\
  !*** ./src/app/modules/asset/_fake/fake-server/users.table.ts ***!
  \****************************************************************/
/*! exports provided: UsersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
class UsersTable {
}
UsersTable.users = [
    {
        id: 1,
        firstName: 'Srikar',
        lastName: 'Kollur'
    }, {
        id: 2,
        firstName: 'Aman',
        lastName: 'Brar'
    }, {
        id: 3,
        firstName: 'Vineeth',
        lastName: 'Venugopal'
    }, {
        id: 4,
        firstName: 'Palwinder',
        lastName: 'Chima'
    }
];


/***/ }),

/***/ "XbN/":
/*!******************************************************************************!*\
  !*** ./src/app/modules/asset/review-deal-info/review-deal-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReviewDealInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDealInfoComponent", function() { return ReviewDealInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_fake/fake-server/deals.table */ "knAO");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/node.service */ "k5BX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");







class ReviewDealInfoComponent {
    constructor(route, nodeService) {
        this.route = route;
        this.nodeService = nodeService;
        this.deals = _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__["DealsTable"].deals;
    }
    ngOnInit() {
        var dealId = this.route.snapshot.paramMap.get('id');
        //console.log(dealId);
        //console.log(this.deals);
        this.reviewInfo = this.deals.find(x => x.id == dealId);
        if (this.reviewInfo === 'undefined') {
            this.reviewInfo = null;
        }
        if (this.reviewInfo == null) {
            this.reviewInfo.name = "Test";
            this.reviewInfo.businessUnitName = "Test";
            this.reviewInfo.startDate = "Test";
            this.reviewInfo.id = "5";
        }
        this.nodeService.node$.subscribe(node => {
            this.nodeService.addNode(this.reviewInfo);
        }, err => {
            console.log(err);
        });
    }
}
ReviewDealInfoComponent.ɵfac = function ReviewDealInfoComponent_Factory(t) { return new (t || ReviewDealInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"])); };
ReviewDealInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewDealInfoComponent, selectors: [["app-review-deal-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], decls: 47, vars: 7, consts: [[1, "d-flex", "flex-row"], ["id", "kt_profile_aside", 1, "flex-row-auto", "offcanvas-mobile", "w-300px", "w-xl-350px"], [1, "card", "card-custom", "card-stretch"], [1, "card-body", "pt-4"], [1, "py-9"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "font-weight-bold", "mr-2"], [1, "text-muted", "text-hover-primary"], [1, "text-muted"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "navi", "navi-bold", "navi-hover", "navi-active", "navi-link-rounded"], [1, "navi-item", "mb-2"], ["routerLink", "./Default", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "navi-icon", "mr-2"], ["cacheSVG", "true", 1, "svg-icon", 3, "inlineSVG"], [1, "navi-text", "font-size-lg"], ["routerLink", "./dealBasicInformation", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "./dealDocuments", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "./properties", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "flex-row-fluid", "ml-lg-8"]], template: function ReviewDealInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Deal Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Business Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Images ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Basic Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Deal Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Properties ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewInfo.businessUnitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewInfo.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Files/Pictures1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Bookmark.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Files/File.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Map/Marker1.svg");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctZGVhbC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewDealInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-deal-info',
                templateUrl: './review-deal-info.component.html',
                providers: [_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]],
                styleUrls: ['./review-deal-info.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }]; }, null); })();


/***/ }),

/***/ "evJ9":
/*!********************************************************************!*\
  !*** ./src/app/modules/asset/create-deal/create-deal.component.ts ***!
  \********************************************************************/
/*! exports provided: User, CreateDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDealComponent", function() { return CreateDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/components/wizard */ "p8Fu");
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/components/util */ "rh/z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_fake/fake-server/deals.table */ "knAO");
/* harmony import */ var _components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-property-modal/edit-property-modal.component */ "w0rC");
/* harmony import */ var _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_fake/fake-server/ownerships.table */ "vnjQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");















const _c0 = ["wizard"];
function CreateDealComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dealType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dealType_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dealType_r7.name);
} }
function CreateDealComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Deal Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateDealComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateDealComponent_div_71_div_1_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoDealTypeval.errors == null ? null : ctx_r2.basicInfoDealTypeval.errors.required);
} }
function CreateDealComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Deal Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateDealComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateDealComponent_div_76_div_1_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.basicInfoFormval.name.errors.required);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function CreateDealComponent_tr_126_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_tr_126_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const dealProperty_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.edit(dealProperty_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_tr_126_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const dealProperty_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deletePropertyRecord(dealProperty_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dealProperty_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, dealProperty_r10.propertyName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.propertyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.propertyType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.businessUnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.propertyAddressString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.units, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.propertyManager, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dealProperty_r10.assetManager, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
function CreateDealComponent_ngx_dropzone_preview_134_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreateDealComponent_ngx_dropzone_preview_134_Template_ngx_dropzone_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const f_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onRemove(f_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r15.name);
} }
function CreateDealComponent_tr_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r18.name);
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
const _c3 = function () { return { standalone: true }; };
class User {
    constructor(name) {
        this.name = name;
    }
}
class CreateDealComponent {
    constructor(formBuilder, router, zone, modalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.zone = zone;
        this.modalService = modalService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.submitted = false;
        this.options = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor'),
            new User('Srikar'),
            new User('Aman'),
            new User('Palwinder'),
            new User('Anthony'),
            new User('Sunaiana'),
            new User('Ali'),
            new User('Saniya'),
            new User('Sarah'),
            new User('Vineeth'),
            new User('Mohammad'),
            new User('Jermain'),
        ];
        this.model = {
            fname: 'John',
            lname: 'Wick',
            phone: '+61412345678',
            email: 'john.wick@reeves.com',
            address1: 'Address Line 1',
            address2: 'Address Line 2',
            postcode: '3000',
            city: 'Melbourne',
            state: 'VIC',
            country: 'AU',
            delivery: 'overnight',
            packaging: 'regular',
            preferreddelivery: 'morning',
            locaddress1: 'Address Line 1',
            locaddress2: 'Address Line 2',
            locpostcode: '3072',
            loccity: 'Preston',
            locstate: 'VIC',
            loccountry: 'AU',
            ccname: 'John Wick',
            ccnumber: '4444 3333 2222 1111',
            ccmonth: '01',
            ccyear: '21',
            cccvv: '123',
        };
        this.newDealInfo = {
            name: '',
            dealType: '',
            //ownership: '',
            //assetManager: '',
            investmentLead: '',
            legalLead: '',
            propertyManager: '',
            properties: [],
        };
        this.files = [];
        this.property = {};
        this.drpOwnership = _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_7__["OwnershipsTable"].ownerships;
        this.drpDealTypes = [{
                id: 1,
                name: 'Acquisition'
            },
            {
                id: 2,
                name: 'Disposition'
            },
            {
                id: 3,
                name: 'Development'
            }];
        this.title = 'reactive-form-validation-in-angular8';
    }
    onSelect(event) {
        //console.log(event);
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        //console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    /*########### Form ###########*/
    //basicInfoForm = this.formBuilder.group({
    //    dealType: ['', [Validators.required]]
    //})
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tnc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.basicInfoForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dealType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this.filter(name) : this.options.slice()));
    }
    filter(name) {
        return this.options.filter(option => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    displayFn(user) {
        return user ? user.name : undefined;
    }
    // Choose city using select dropdown
    changeDealType(e) {
        //console.log(e.value)
        this.newDealInfo.dealType.get('skilltwo').setValue(e.target.value, {
            onlySelf: true
        });
    }
    get basicInfoFormval() {
        return this.basicInfoForm.controls;
    }
    get basicInfoDealTypeval() {
        return this.basicInfoForm.get('dealType');
    }
    //this.user.fullName='';
    signup() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        alert('form fields are validated successfully!');
    }
    ngAfterViewInit() {
        // Initialize form wizard
        this.wizard = new _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_1__["default"](this.el.nativeElement, {
            startStep: 1
        });
        // Validation before going to next page
        //this.wizard.on('beforeNext', (wizardObj) => {
        //    // https://angular.io/guide/forms
        //    // https://angular.io/guide/form-validation
        //    // validate the form and use below function to stop the wizard's step
        //    //wizardObj.stop();
        //    wizardObj.stop();
        //    if (!this.basicInfoForm.valid) {
        //        alert('test -valid')
        //        wizardObj.stop();
        //        return false;
        //    } else {
        //        wizardObj.stop();
        //        alert(JSON.stringify(this.basicInfoForm.value))
        //    }
        //});
        // Validation before going to next page
        //this.wizard.on('beforeNext', (wizardObj) => {
        //    alert('test')
        //    // https://angular.io/guide/forms
        //    // https://angular.io/guide/form-validation
        //    // validate the form and use below function to stop the wizard's step
        //    //wizardObj.stop();
        //});
        // Change event
        this.wizard.on('change', (wizardObj) => {
            //console.log(JSON.stringify(this.newDealInfo))
            if (wizardObj.currentStep == 1) {
                //alert('form fields are validated successfully!');
                if (this.basicInfoForm.invalid) {
                    wizardObj.stop();
                }
            }
            setTimeout(() => {
                _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].scrollTop();
            }, 500);
        });
    }
    onSubmit() {
        this.submitted = true;
        if (!this.basicInfoForm.invalid) {
            alert('Successfully Created a new Deal');
            this.newDealInfo.id = '101';
            _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_5__["DealsTable"].deals.push(this.newDealInfo);
            this.router.navigate(['asset/reviewDealInfo/101']);
        }
        //alert(JSON.stringify(this.newDealInfo))
    }
    ngOnDestroy() {
        this.wizard = undefined;
    }
    getAddress(place) {
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }
    //getEstablishmentAddress(place: object) {
    //    this.establishmentAddress = place['formatted_address'];
    //    this.phone = this.getPhone(place);
    //    this.formattedEstablishmentAddress = place['formatted_address'];
    //    this.zone.run(() => {
    //        this.formattedEstablishmentAddress = place['formatted_address'];
    //        this.phone = place['formatted_phone_number'];
    //    });
    //}
    getAddrComponent(place, componentTemplate) {
        let result;
        for (let i = 0; i < place.address_components.length; i++) {
            const addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    }
    getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    }
    getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    }
    getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    }
    getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    }
    getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    }
    getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    }
    getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    }
    insertProperty() {
        this.property.propertyAddressString = this.formattedAddress;
        alert(this.formattedAddress);
        this.newDealInfo.properties.push(this.property);
        this.formattedAddress = "";
        this.property = {};
    }
    deletePropertyRecord(property) {
        this.newDealInfo.properties.forEach((value, index) => {
            if (value.id == property.id)
                this.newDealInfo.properties.splice(index, 1);
        });
    }
    create() {
        this.edit(undefined);
    }
    edit(property) {
        const modalRef = this.modalService.open(_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditPropertyModalComponent"], { size: 'xl' });
        modalRef.componentInstance.propertyInput = property;
        modalRef.componentInstance.newDealInfo = this.newDealInfo;
        //modalRef.componentInstance.id = 10;
        //modalRef.componentInstance.propertyInput = {
        //    id: 10,
        //    propertyStatus: '',
        //    propertyStatusId: 0,
        //    propertyName: 'Exisiting property',
        //    propertyTypeId: 0,
        //    propertyType: '',
        //    propertyManager: '',
        //    assetManager: '',
        //    units: 0,
        //    businessUnitId: 0,
        //    businessUnitName: '',
        //    mainPointOfContact: '',
        //    capexTeamLeadContact: '',
        //    nominees: [],
        //    propertyAddressString: '',
        //    propertyAddress: ({} as PropertyAddressModel),
        //};
        //modalRef.result.then(() =>
        //    this.customerService.fetch(),
        //    () => { }
        //);
        modalRef.result.then(response => {
            console.log(response);
            this.newDealInfo.properties = response;
            //this.zone.run(() => {
            //    this.reloadData();
            //})
            console.log(this.newDealInfo);
            this.reloadData();
        });
        //this.reloadData()
    }
    reloadData() {
        this.newDealInfo.properties = [...this.newDealInfo.properties];
        this.newDealInfo.properties = [...this.newDealInfo.properties];
        this.newDealInfo.properties = [...this.newDealInfo.properties];
    }
}
CreateDealComponent.ɵfac = function CreateDealComponent_Factory(t) { return new (t || CreateDealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"])); };
CreateDealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateDealComponent, selectors: [["app-create-deal"]], viewQuery: function CreateDealComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 177, vars: 31, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["id", "kt_wizard_v2", "data-wizard-state", "step-first", 1, "wizard", "wizard-2"], ["wizard", ""], [1, "wizard-nav", "border-right", "py-8", "px-8", "py-lg-20", "px-lg-10"], [1, "wizard-steps"], ["href", "javascript:;", "data-wizard-type", "step", "data-wizard-state", "current", 1, "wizard-step"], [1, "wizard-wrapper"], [1, "wizard-icon"], [1, "svg-icon", "svg-icon-3x", 3, "inlineSVG"], [1, "wizard-label"], [1, "wizard-title"], [1, "wizard-desc"], ["href", "javascript:;", "data-wizard-type", "step", 1, "wizard-step"], [1, "wizard-body", "py-8", "px-8", "py-lg-20", "px-lg-10"], [1, "row"], [1, "offset-xxl-2", "col-xxl-8", "offset-md-2", "col-md-8"], ["id", "kt_form", 1, "form", 3, "formGroup"], ["data-wizard-type", "step-content", "data-wizard-state", "current", 1, "pb-5"], [1, "mb-10", "font-weight-bold", "text-dark"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-wizard-v2__form"], [1, "form-group"], ["name", "dealType", "formControlName", "dealType", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "0", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "name", "name", "name", "placeholder", "", "value", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["data-wizard-type", "step-content", 1, "pb-5"], [1, "col-xl-12"], ["type", "text", "name", "investmentLead", "placeholder", "Investment Lead", "value", "", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-text", "text-muted"], ["type", "text", "name", "postcode", "placeholder", "Legal Lead", "value", "newDealInfo.legalLead", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "card-toolbar"], ["title", "Edit Property", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-bordered", "table-striped", "table-head-custom", "table-vertical-center", "overflow-hidden", "w-auto"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "expandable", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "border-bottom", "mb-5", "pb-5"], [1, "font-weight-bolder", "mb-3"], [1, "line-height-xl"], [1, "table", "table-striped", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "border-top", "pt-10"], [1, "mr-2"], ["data-wizard-type", "action-prev", 1, "btn", "btn-light-primary", "font-weight-bold", "text-uppercase", "px-9", "py-4"], ["data-wizard-type", "action-submit", 1, "btn", "btn-success", "font-weight-bold", "text-uppercase", "px-9", "py-4", 3, "click"], ["data-wizard-type", "action-next", 1, "btn", "btn-primary", "font-weight-bold", "text-uppercase", "px-9", "py-4"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngClass"], ["title", "Delete Property", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [3, "removable", "removed"], ["scope", "row"]], template: function CreateDealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create A New Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Setup Basic Deal Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Additional Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter Additional Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Address, Street, City, State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Upload Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Completed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Review and Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Enter Basic Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Deal Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_select_ngModelChange_67_listener($event) { return ctx.newDealInfo.dealType = $event; })("change", function CreateDealComponent_Template_select_change_67_listener($event) { return ctx.changeDealType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Choose Deal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CreateDealComponent_option_70_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CreateDealComponent_div_71_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Deal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_75_listener($event) { return ctx.newDealInfo.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CreateDealComponent_div_76_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Additional Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Investment Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_85_listener($event) { return ctx.newDealInfo.investmentLead = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Please enter your Investment Lead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Legal - Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_93_listener($event) { return ctx.newDealInfo.legalLead = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Please enter your Legal Lead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Enter the properties List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_a_click_101_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_button_click_103_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Add New Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Property Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Property Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Ownership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Property Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Asset Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, CreateDealComponent_tr_126_Template, 21, 12, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Select your Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ngx-dropzone", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateDealComponent_Template_ngx_dropzone_change_131_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Drop files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, CreateDealComponent_ngx_dropzone_preview_134_Template, 3, 2, "ngx-dropzone-preview", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Review your Details and Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " di ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Deal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Deal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Ownership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Attachments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "File Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, CreateDealComponent_tr_167_Template, 5, 2, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_div_click_173_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Next Step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/User.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Map/Compass.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Map/Position.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Thunder-move.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Like.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newDealInfo.dealType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx.basicInfoDealTypeval.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drpDealTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoDealTypeval.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newDealInfo.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, ctx.basicInfoFormval.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoFormval.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3))("ngModel", ctx.newDealInfo.investmentLead);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3))("ngModel", ctx.newDealInfo.legalLead);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/plugins/keenthemes-icons/svg/017-reload.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newDealInfo.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.newDealInfo.dealType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.newDealInfo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.newDealInfo.ownership, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["ɵb"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["NgxDropzonePreviewComponent"]], styles: [".wizard.wizard-2[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n  padding: 0;\n  flex: 0 0 400px;\n  width: 400px;\n  max-width: 100%;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  position: relative;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-right: 1.1rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B5B5C3;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n  fill: #B5B5C3;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%] {\n  color: #181C32;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-desc[_ngcontent-%COMP%] {\n  color: #7E8299;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%] {\n  color: #7E8299;\n  font-size: 1.25rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%] {\n  display: none;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%] {\n  background-color: #F3F6F9;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%] {\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3699FF !important;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n  fill: #3699FF !important;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]:after {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \" \";\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  position: absolute;\n  border-left-color: #F3F6F9;\n  border-width: 1rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n    flex: 0 0 325px;\n    width: 325px;\n  }\n}\n@media (max-width: 991.98px) {\n  .wizard.wizard-2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid #EBEDF3;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]:after {\n    content: none;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFnZXNcXHdpemFyZFxcd2l6YXJkLTIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWRlYWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMuYm9vdHN0cmFwLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXGNvbXBvbmVudHNcXG1peGluc1xcX3N2Zy1pY29uLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDQyxhQUFBO0FDYkQ7QURnQkM7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBWGlCO0VBWWpCLGVBQUE7QUNkRjtBRGlCRTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDZkg7QURrQkc7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5R0V5WmdEO0FEemFwRDtBRGtCSTtFQUNDLGFBQUE7QUNoQkw7QURtQkk7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUdFZ1orQztBRGphcEQ7QURtQks7RUFDQyxjRTNCZ0I7QURVdEI7QUV0Qlk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZ3QmhCO0FFbEJnQjtFQUNJLDBCQUFBO0FGb0JwQjtBRGtCSTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDaEJMO0FEa0JLO0VBQ0MsY0VyQ2dCO0VGc0NoQixnQkFBQTtFQUNBLGlCQUFBO0FDaEJOO0FEbUJLO0VBQ0MsY0U5Q2dCO0FENkJ0QjtBRHFCSTtFQUNDLGNFbkRpQjtFRm9EakIsa0JBQUE7QUNuQkw7QURxQks7RUFDQyxhQUFBO0FDbkJOO0FEdUJJO0VBQ0MseUJFakVpQjtFRmtFakIseUdFMFcrQztBRC9YcEQ7QUR1Qks7RUFDQyx5R0V1VzhDO0FENVhwRDtBRHVCTTtFQUNDLHlCQUFBO0FDckJQO0FFM0RZO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtBRjZEaEI7QUV2RGdCO0VBQ0ksMEJBQUE7QUZ5RHBCO0FEc0JLO0VBQ0MsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkV6RmdCO0VGMEZoQixrQkFBQTtBQ3BCTjtBRDRCQztFQUNDLFdBQUE7QUMxQkY7QUdESTtFSm9DRjtJQUNDLGVBQUE7SUFDQSxZQW5IbUI7RUNvRnBCO0FBQ0Y7QUd2Qkk7RUo0REg7SUFDQyxjQUFBO0VDbENBO0VEcUNBO0lBQ0MsV0FBQTtJQUNBLGdDQUFBO0VDbkNEO0VEd0NJO0lBQ0MsYUFBQTtFQ3RDTDtFRDhDQTtJQUNDLFdBQUE7RUM1Q0Q7QUFDRiIsImZpbGUiOiJjcmVhdGUtZGVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vIFdpemFyZCAyXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kd2l6YXJkLW5hdi13aWR0aDogNDAwcHg7XHJcbiR3aXphcmQtbmF2LXdpZHRoLXNtOiAzMjVweDtcclxuXHJcbi8vIEJhc2VcclxuLndpemFyZC53aXphcmQtMiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0Ly8gTmF2XHJcblx0LndpemFyZC1uYXYge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGZsZXg6IDAgMCAkd2l6YXJkLW5hdi13aWR0aDtcclxuXHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aDtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHJcblx0XHQvLyBTdGVwc1xyXG5cdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0LndpemFyZC13cmFwcGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjVyZW07XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdFx0aSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuc3ZnLWljb24ge1xyXG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkdGV4dC1tdXRlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkZGFyaztcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1kZXNjIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICRkYXJrLTUwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XHJcblxyXG5cdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0XHRcdGkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuc3ZnLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIHN2Zy1pY29uLWNvbG9yKCRwcmltYXJ5LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdC1jb2xvcjogJGdyYXktMTAwO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDFyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBCb2R5XHJcblx0LndpemFyZC1ib2R5IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuLy8gQ3VzdG9tIGRlc2t0b3AgcmFuZ2VcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKGxnLCB4bCkge1xyXG5cdC8vIEJhc2VcclxuXHQud2l6YXJkLndpemFyZC0yIHtcclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHRmbGV4OiAwIDAgJHdpemFyZC1uYXYtd2lkdGgtc207XHJcblx0XHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aC1zbTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFRhYmxldCBhbmQgbW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcblx0LndpemFyZC53aXphcmQtMiB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHJcblx0XHQvLyBOYXZcclxuXHRcdC53aXphcmQtbmF2IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG5cclxuXHRcdFx0LndpemFyZC1zdGVwc3tcclxuXHRcdFx0XHQud2l6YXJkLXN0ZXB7XHJcblx0XHRcdFx0XHQmW2RhdGEtd2l6YXJkLXN0YXRlPVwiY3VycmVudFwiXSB7XHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBCb2R5XHJcblx0XHQud2l6YXJkLWJvZHkge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLndpemFyZC53aXphcmQtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IHtcbiAgcGFkZGluZzogMDtcbiAgZmxleDogMCAwIDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1pY29uIGkge1xuICBjb2xvcjogI0I1QjVDMztcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1pY29uIC5zdmctaWNvbiBzdmcgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgZmlsbDogI0I1QjVDMztcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1pY29uIC5zdmctaWNvbiBzdmc6aG92ZXIgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtdGl0bGUge1xuICBjb2xvcjogIzE4MUMzMjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC1kZXNjIHtcbiAgY29sb3I6ICM3RTgyOTk7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtYXJyb3cge1xuICBjb2xvcjogIzdFODI5OTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWFycm93Lmxhc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2Rjk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1pY29uIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWljb24gaSB7XG4gIGNvbG9yOiAjMzY5OUZGICFpbXBvcnRhbnQ7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtaWNvbiAuc3ZnLWljb24gc3ZnIGcgW2ZpbGxdIHtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIGZpbGw6ICMzNjk5RkYgIWltcG9ydGFudDtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1pY29uIC5zdmctaWNvbiBzdmc6aG92ZXIgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF06YWZ0ZXIge1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdC1jb2xvcjogI0YzRjZGOTtcbiAgYm9yZGVyLXdpZHRoOiAxcmVtO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYge1xuICAgIGZsZXg6IDAgMCAzMjVweDtcbiAgICB3aWR0aDogMzI1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAud2l6YXJkLndpemFyZC0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRURGMztcbiAgfVxuICAud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIi8vXHJcbi8vIEdsb2JhbCB2YXJpYWJsZXMgZm9yIEJvb3RzdHJhcCBjdXN0b21pemF0aW9uLlxyXG4vLyBUbyBvdmVycmlkZSBhbnkgQm9vdHN0cmFwIHZhcmlhYmxlIHNhZmVseSB5b3UgY2FuIHVzZSBfdmFyaWFibGVzLmRlbW8uc2Nzc1xyXG4vL1xyXG5cclxuLy9cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4vLyBCbGFjayBjb2xvclxyXG4kYmxhY2s6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjMDAwMDAwICFkZWZhdWx0O1xyXG5cclxuLy8gV2hpdGUgY29sb3JcclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuXHJcbi8vIEdyYXkgY29sb3JzXHJcbiRncmF5LTEwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNGM0Y2RjkgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNFQkVERjMgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNFNEU2RUYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNEMUQzRTAgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNCNUI1QzMgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCM3RTgyOTkgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCM1RTYyNzggIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCMzRjQyNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCMxODFDMzIgIWRlZmF1bHQ7XHJcblxyXG4vLyBEYXJrIGNvbG9yc1xyXG4kZGFyazogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktOTAwICFkZWZhdWx0O1xyXG4kZGFyay03NTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktODAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstNjU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTcwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLTUwOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS02MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay0yNTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFRleHQgbXV0ZWRcclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGdyYXktNTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEdyYXkgY29sb3JzIGxpc3RcclxuJGdyYXlzOiAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcblx0XCI3MDBcIjogJGdyYXktNzAwLFxyXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxyXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXHJcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9vdHN0cmFwIHN0YW5kYXJkICYgZXh0ZW5kZWQgY29sb3JzXHJcbi8vIERhcmsgY29sb3JzXHJcbiRkYXJrOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZGFyayAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRkYXJrLWhvdmVyOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0ZGFya2VuKCRkYXJrLCAzJSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay1saWdodDogICAgICAgICAgXHRcdFx0XHRcdFx0XHQgICAgJGdyYXktNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstaW52ZXJzZTogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFByaW1hcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMzY5OUZGICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHByaW1hcnktaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxODdERTQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0UxRjBGRiAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFNlY29uZGFyeSBjb2xvcnNcclxuJHNlY29uZGFyeTogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRzZWNvbmRhcnktaG92ZXI6ICBcdFx0XHRcdFx0XHRcdFx0XHRkYXJrZW4oJGdyYXktMzAwLCA0JSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWxpZ2h0OiAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHNlY29uZGFyeS1pbnZlcnNlOlx0XHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFN1Y2Nlc3MgY29sb3JzXHJcbiRzdWNjZXNzOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMUJDNUJEICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHN1Y2Nlc3MtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMwQkI3QUYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc3VjY2Vzcy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0M5RjdGNSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzdWNjZXNzLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gSW5jbyBjb2xvcnNcclxuJGluZm86ICAgICAgICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0Izg5NTBGQyAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRpbmZvLWhvdmVyOiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCM3MzM3RUUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5mby1saWdodDogICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjRUVFNUZGICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGluZm8taW52ZXJzZTogXHRcdCBcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFdhcm5pbmcgY29sb3JzXHJcbiR3YXJuaW5nOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZBODAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdhcm5pbmctaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTlEMDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2FybmluZy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRjRERSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3YXJuaW5nLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRGFuZ2VyIGNvbG9yc1xyXG4kZGFuZ2VyOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0I0Y2NEU2MCAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRkYW5nZXItaG92ZXI6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRUUyRDQxICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhbmdlci1saWdodDogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkUyRTUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFuZ2VyLWludmVyc2U6ICAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIExpZ2h0IGNvbG9yc1xyXG4kbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGxpZ2h0LWhvdmVyOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbGlnaHQtbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRsaWdodC1pbnZlcnNlOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBXaGl0ZSBjb2xvcnNcclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdoaXRlLWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtaW52ZXJzZTogICAgXHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSwgIC8vIGN1c3RvbSBjb2xvciB0eXBlXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEV4dGVuZGVkIGhvdmVyIGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtaG92ZXItY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1ob3ZlciwgICAvLyBjdXN0b20gY29sb3IgdHlwZVxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1ob3ZlcixcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWhvdmVyLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWhvdmVyLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWhvdmVyLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWhvdmVyLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItaG92ZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWhvdmVyLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWhvdmVyXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGludmVyc2UgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1pbnZlcnNlLWNvbG9yczogKFxyXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUtaW52ZXJzZSxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnktaW52ZXJzZSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWludmVyc2UsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtaW52ZXJzZSxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mby1pbnZlcnNlLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWludmVyc2UsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1pbnZlcnNlLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodC1pbnZlcnNlLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWludmVyc2VcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgb3V0bGluZSBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLW91dGxpbmUtaW52ZXJzZS1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkZGFyay03NSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGxpZ2h0IGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtbGlnaHQtY29sb3JzOiAoXHJcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLWxpZ2h0LFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1saWdodCxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWxpZ2h0LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWxpZ2h0LFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWxpZ2h0LFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWxpZ2h0LFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItbGlnaHQsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWxpZ2h0XHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIHNoYWRvdyBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLXNoYWRvdy1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkZGFyayxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkZGFyayxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCB0aGVtZSB0ZXh0IGNvbG9yc1xyXG4kdGhlbWUtdGV4dC1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLFxyXG4gICAgXCJkYXJrLTc1XCI6ICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrLTY1XCI6ICAgICRkYXJrLTY1LFxyXG4gICAgXCJkYXJrLTUwXCI6ICAgICRkYXJrLTUwLFxyXG4gICAgXCJkYXJrLTI1XCI6ICAgICRkYXJrLTI1LFxyXG4gICAgXCJtdXRlZFwiOiAgICAgICR0ZXh0LW11dGVkXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFNvY2lhbCBOZXR3b3JrIENvbG9ycyBVc2VkIFdpdGggQm9vc3RyYXAgQnV0dG9ucyhzZWU6IGh0dHBzOi8vcHJpbWFyeWNvbG9ycy5uZXQvKVxyXG4kc29jaWFsLWNvbG9yczogKFxyXG5cdGZhY2Vib29rOiAoXHJcblx0XHRiYXNlOiAjM2I1OTk4LFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjM2I1OTk4LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzNiNTk5OCwgNy41JSlcclxuXHQpLFxyXG5cdGdvb2dsZTogKFxyXG5cdFx0YmFzZTogI2RkNGIzOSxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2RkNGIzOSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNkZDRiMzksIDcuNSUpXHJcblx0KSxcclxuXHR0d2l0dGVyOiAoXHJcblx0XHRiYXNlOiAjMWRhMWYyLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMWRhMWYyLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzFkYTFmMiwgNy41JSlcclxuXHQpLFxyXG5cdGluc3RhZ3JhbTogKFxyXG5cdFx0YmFzZTogI2UxMzA2YyxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2UxMzA2YywgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNlMTMwNmMsIDcuNSUpXHJcblx0KSxcclxuXHR5b3V0dWJlOiAoXHJcblx0XHRiYXNlOiAjZmYwMDAwLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZmYwMDAwLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2ZmMDAwMCwgNy41JSlcclxuXHQpLFxyXG4gICAgbGlua2VkaW46IChcclxuICAgICAgICBiYXNlOiAjMDA3N2I1LFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwNzdiNSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMDc3YjUsIDcuNSUpXHJcbiAgICApLFxyXG4gICAgc2t5cGU6IChcclxuICAgICAgICBiYXNlOiAjMDBhZmYwLFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwYWZmMCwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMGFmZjAsIDcuNSUpXHJcbiAgICApXHJcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgY3VzdG9tIHNwYWNpbmcgZm9yIEJvb3RzdHJhcFxyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IChcclxuICAgIDA6IDAsXHJcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksICBcdC8vIDMuNXB4XHJcbiAgICAyOiAoJHNwYWNlciAqIC41KSwgICBcdC8vIDdweDtcclxuXHQzOiAoJHNwYWNlciAqIC43NSksICBcdC8vIDEwLjVweFxyXG5cdDQ6ICgkc3BhY2VyICogMSksICAgIFx0Ly8gMTRweFxyXG5cdDU6ICgkc3BhY2VyICogMS4yNSksIFx0Ly8gMTcuNXB4XHJcblx0NjogKCRzcGFjZXIgKiAxLjUpLCAgXHQvLyAyMXB4XHJcblx0NzogKCRzcGFjZXIgKiAxLjc1KSwgXHQvLyAyNC41cHhcclxuXHQ4OiAoJHNwYWNlciAqIDIpLCAgICBcdC8vIDI4cHhcclxuXHQ5OiAoJHNwYWNlciAqIDIuMjUpLCBcdC8vIDMxLjVweFxyXG5cdDEwOiAoJHNwYWNlciAqIDIuNSksIFx0Ly8gMzVweFxyXG5cdDExOiAoJHNwYWNlciAqIDIuNzUpLFx0Ly8gMzguNXB4XHJcblx0MTI6ICgkc3BhY2VyICogMyksICAgXHQvLyA0MnB4XHJcblx0MTM6ICgkc3BhY2VyICogMy4yNSksXHQvLyA0NS41cHhcclxuXHQxNDogKCRzcGFjZXIgKiAzLjUpLCBcdC8vIDQ5cHhcclxuXHQxNTogKCRzcGFjZXIgKiAzLjc1KSwgXHQvLyA1Mi41cHhcclxuXHQxNjogKCRzcGFjZXIgKiA0KSwgXHRcdC8vIDU1cHhcclxuXHQxNzogKCRzcGFjZXIgKiA0LjI1KSwgXHQvLyA1OC41cHhcclxuXHQxODogKCRzcGFjZXIgKiA0LjUpLCBcdC8vIDYycHhcclxuXHQxOTogKCRzcGFjZXIgKiA0Ljc1KSwgXHQvLyA2NS41cHhcclxuXHQyMDogKCRzcGFjZXIgKiA1KSwgXHRcdC8vIDY5cHhcclxuXHQyMTogKCRzcGFjZXIgKiA1LjI1KSxcdC8vIDczLjVweFxyXG5cdDIyOiAoJHNwYWNlciAqIDUuNSksIFx0Ly8gNzdweFxyXG5cdDIzOiAoJHNwYWNlciAqIDUuNzUpLCBcdC8vIDgwLjVweFxyXG5cdDI0OiAoJHNwYWNlciAqIDYpLCBcdFx0Ly8gODRweFxyXG5cdDI1OiAoJHNwYWNlciAqIDYuMjUpLCBcdC8vIDg3LjVweFxyXG5cdDI2OiAoJHNwYWNlciAqIDYuNSksIFx0Ly8gOTFweFxyXG5cdDI3OiAoJHNwYWNlciAqIDYuNzUpLCBcdC8vIDk0LjVweFxyXG5cdDI4OiAoJHNwYWNlciAqIDcpLCBcdFx0Ly8gOTlweFxyXG5cdDI5OiAoJHNwYWNlciAqIDcuMjUpLCAgIC8vIDEwMi41cHhcclxuXHQzMDogKCRzcGFjZXIgKiA3LjUpLCBcdC8vIDEwNnB4XHJcblx0MzE6ICgkc3BhY2VyICogNy43NSksIFx0Ly8gMTA5LjVweFxyXG5cdDMyOiAoJHNwYWNlciAqIDgpLCBcdFx0Ly8gMTEzcHhcclxuXHQzMzogKCRzcGFjZXIgKiA4LjI1KSwgXHQvLyAxMTYuNXB4XHJcblx0MzQ6ICgkc3BhY2VyICogOC41KSwgXHQvLyAxMjBweFxyXG5cdDM1OiAoJHNwYWNlciAqIDguNzUpLCBcdC8vIDEyMy41cHhcclxuXHQzNjogKCRzcGFjZXIgKiA5KSwgXHRcdC8vIDEyN3B4XHJcblx0Mzc6ICgkc3BhY2VyICogOS4yNSksICAgIC8vIDEzMC41cHhcclxuXHQ0ODogKCRzcGFjZXIgKiA5LjUpLCBcdC8vIDEzNHB4XHJcblx0Mzk6ICgkc3BhY2VyICogOS43NSksIFx0Ly8gMTM3LjVweFxyXG4gICAgNDA6ICgkc3BhY2VyICogMTApLCBcdC8vIDE0MHB4XHJcbik7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuJGxpbmUtaGVpZ2h0LXhsOlx0XHRcdFx0XHRcdFx0XHRcdDEuOCAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxLjM1ICFkZWZhdWx0O1xyXG5cclxuJGNvbXBvbmVudC1saWdodC1zdHlsZS1vcGFjaXR5OiAgICAgICAgICAgICAgICAgXHQwLjEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3ggc2hhZG93XHJcbiRib3gtc2hhZG93LXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgkYmxhY2ssIDAuMDUpO1xyXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC4xcmVtIDFyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAuNXJlbSAxLjVyZW0gMC41cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAxcmVtIDJyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gQm9yZGVyIFJhZGl1ZXNcclxuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgXHRcdFx0XHRcdFx0LjI4cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQuNDJyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdC44NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9yZGVyIHNldHRpbmdzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBIb3ZlciBiYWNrZ3JvdW5kIGNvbG9yXHJcbiRob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQWN0aXZlYmFja2dyb3VuZCBjb2xvclxyXG4kYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRncmF5LTEwMCwgMSUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIE9wdGlvbnNcclxuLy9cclxuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxyXG4kZW5hYmxlLXJvdW5kZWQ6IFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0dHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQwMHB4IC8vIGN1c3RvbSBicmVha3BvaW50XHJcbikgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMTQwcHgsXHJcbiAgeHhsOiAxMzQwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDEyICFkZWZhdWx0O1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICBcdFx0XHRcdFx0XHQyNXB4ICFkZWZhdWx0O1xyXG4kZ3JpZC1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBCb2R5XHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIEZvbnQgZmFtaWx5XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdFBvcHBpbnMsIEhlbHZldGljYSwgXCJzYW5zLXNlcmlmXCIgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTNweGBcclxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICBcdCBcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogMS4wOCAhZGVmYXVsdDsgICAvLyAxNC4wNHB4XHJcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRmb250LXNpemUtYmFzZSAqIC45MjUgIWRlZmF1bHQ7ICAgLy8gMTIuMDI1cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjggIWRlZmF1bHQ7ICAgICAvLyAxMC40cHhcclxuXHJcbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAgICAgIC8vIDI2cHhcclxuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7ICAgLy8gMjIuNzVweFxyXG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAgICAvLyAxOS41cHhcclxuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMzUgIWRlZmF1bHQ7ICAgLy8gMTcuNTVweFxyXG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgICAvLyAxNi4yNXB4XHJcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjE3NSAhZGVmYXVsdDsgIC8vIDE1LjI3NXB4XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7ICAvLyA3MS41cHhcclxuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDsgIC8vIDU4LjVweFxyXG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0OyAgLy8gNDUuNXB4XHJcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7ICAvLyAzMi41cHhcclxuJGRpc3BsYXk1LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuMjVyZW0gIWRlZmF1bHQ7IC8vIDI5LjVweFxyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplczogKFxyXG4gICAgZm9udC1zaXplLWgxOiAkaDEtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWgyOiAkaDItZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWgzOiAkaDMtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg0OiAkaDQtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg1OiAkaDUtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg2OiAkaDYtZm9udC1zaXplLFxyXG4gICAgZGlzcGxheTE6ICRkaXNwbGF5MS1zaXplLFxyXG4gICAgZGlzcGxheTI6ICRkaXNwbGF5Mi1zaXplLFxyXG4gICAgZGlzcGxheTM6ICRkaXNwbGF5My1zaXplLFxyXG4gICAgZGlzcGxheTQ6ICRkaXNwbGF5NC1zaXplLFxyXG4gICAgZGlzcGxheTU6ICRkaXNwbGF5NS1zaXplXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb250IFdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBcdFx0XHRcdFx0XHRsaWdodGVyICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICBcdFx0XHRcdFx0XHQzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIFx0XHRcdFx0XHRcdDQwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0NTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBcdFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXN0OiAgICAgICAgICBcdFx0XHRcdFx0XHQ3MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFRyYW5zaXRpb25cclxuJHRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRhbGwgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0cmFuc2l0aW9uLWxpbms6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdHJhbnNpdGlvbi1pbnB1dDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJHByaW1hcnksIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XHJcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXHJcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6ICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjY1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgMC44MjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjQycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIFx0XHRcdFx0XHRcdC42ICFkZWZhdWx0O1xyXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHRjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDsvLyBDdXN0b20gdmFyaWFibGVcclxuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgXHRcdFx0XHRcdFx0bm9ybWFsICFkZWZhdWx0O1xyXG4kYnRuLXNlY29uZGFyeS1jb2xvcjpcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRidG4tc2Vjb25kYXJ5LWhvdmVyLWJnLWNvbG9yOlx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGJ0bi1pY29uLXNpemUteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0cHggIWRlZmF1bHQ7IC8vY3VzdG9tIHBhcmFtZXRlclxyXG5cclxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgXHRcdFx0JHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0bGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1yZWFkb25seS1iZzogICAgICAgICAgICAgICAgICAgICBcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtZ3JvdXAtaWNvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICBcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgIFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgIFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgXHRcdFx0JGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtc29saWQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwOyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLWJnLWZvY3VzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1zb2xpZC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGxhY2Vob2xkZXItY29sb3I7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0JGRhcmstNzU7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybXNcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tbGFiZWwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS1mZWVkYmFjay1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tdGV4dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLXRleHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS12YWxpZGF0aW9uLWlucHV0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgZmFsc2U7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFRhYmxlXHJcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0JHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1mb250LXNpemU6ICAgICAgICAgICAgIFx0XHRcdFx0XHQxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWhlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICBcdFx0XHRcdFx0NjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICBcdFx0XHRcdFx0XHQkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICBcdFx0XHRcdFx0XHRyZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICAgICAgICAgdXBwZXJjYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgIDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWxldHRlci1zcGFjaW5nOiAgICAgICAgICAgICAgICAgMC4xcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIENhcmRcclxuJGNhcmQtYm94LXNoYWRvdzogXHRcdFx0XHRcdFx0XHRcdFx0MHB4IDBweCAzMHB4IDBweCByZ2JhKDgyLDYzLDEwNSwwLjA1KSAhZGVmYXVsdDsgLy8gY2FyZCBjdXN0b20gc2hhZG93XHJcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQycmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQyLjI1cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaGVhZGVyLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHQ3MHB4ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LWhlYWRlci1iZzogICBcdFx0XHRcdFx0XHQgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LWhlYWRlci1oZWlnaHQ6IFx0XHRcdFx0XHRcdDcwcHggIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktemluZGV4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAxICAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4xKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgIFx0XHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICBcdFx0XHRcdC41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICBcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHRcdG51bGwgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICBcdFx0XHRcdHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgIFx0XHRcdFx0MCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3c6ICAgICAgIFx0XHRcdFx0ICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICBcdFx0XHRcdDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgXHRcdFx0XHRcdDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgXHRcdCBcdFx0XHQkYmxhY2sgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIFx0XHRcdFx0LjIgIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgXHRcdFx0IFx0JGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgIFx0XHRcdFx0MXB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICBcdFx0XHRcdDEuNXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgXHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICBcdFx0XHRcdCRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcblxyXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHQgXHRcdFx0MTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDgwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDUwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgXHQgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzpcdFx0XHRcdFx0XHRcdFx0MHB4IDBweCA1MHB4IDBweCByZ2JhKDgyLDYzLDEwNSwgMC4xNSkgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0OTYgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbWVudS13aWR0aHM6IChcclxuXHRzbTogMTc1cHgsXHJcblx0bWQ6IDI1MHB4LFxyXG5cdGxnOiAzNTBweCxcclxuXHR4bDogNDAwcHgsXHJcblx0eHhsOiA2MDBweFxyXG4pOyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBQb3BvdmVyc1xyXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQyNzZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHQwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xNSkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHQkZGFyayAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgXHRcdFx0XHQ1MDAgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIFx0XHRcdFx0MXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgXHRcdFx0XHQxLjI1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgIFx0XHRcdFx0JGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVG9vbHRpcHNcclxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQwLjlyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIFx0XHRcdFx0MjAwcHggIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgXHRcdFx0XHQzcHggIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHQkcG9wb3Zlci1ib3gtc2hhZG93ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNzVyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIFx0XHRcdFx0MXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQwICFkZWZhdWx0O1xyXG5cclxuLy8gQ3VzdG9tIFRvYXN0c1xyXG4kdG9hc3QtemluZGV4Olx0XHRcdFx0XHRcdFx0XHRcdFx0JHppbmRleC1kcm9wZG93biArIDEwMCAhZGVmYXVsdDtcclxuJHRvYXN0LXNwYWNpbmc6XHRcdFx0XHRcdFx0XHRcdFx0XHQycmVtICAhZGVmYXVsdDtcclxuJHRvYXN0LXdpZHRoOiBcdFx0XHRcdFx0XHRcdFx0XHRcdDM1MHB4ICFkZWZhdWx0O1xyXG4kdG9hc3QtYm94LXNoYWRvdzpcdFx0XHRcdFx0XHRcdFx0XHQkZHJvcGRvd24tYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1jb2xvcjogXHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IFx0XHRcdFx0XHQjZmZmICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBQcm9ncmVzcyBiYXJzXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0LXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByb2dyZXNzLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNzVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAgICAgICAgICAgICAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBCYWRnZXNcclxuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdC43NWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDg1JSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb2RlXHJcbiRjb2RlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY29kZS1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4xNXJlbSAwLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIE1vZGFsc1xyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC10aXRsZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGFyayAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4zcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1zbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8gQWxlcnRzXHJcbi8vXHJcbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG4kYWxlcnQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRjYXJkLWJveC1zaGFkb3cgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIE5hdnNcclxuXHJcbiRuYXYtbGluay1weDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjVyZW07XHJcbiRuYXYtbGluay1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjc1cmVtO1xyXG4kbmF2LWJ0bi1weDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1zZWN0aW9uLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbTtcclxuJG5hdi1lbGVtLXNwYWNlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjVyZW07XHJcblxyXG4kbmF2LWxpbmstYmctaG92ZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwO1xyXG4kbmF2LWxpbmstYmctYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwO1xyXG5cclxuJG5hdi1oZWFkZXItcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcbiRuYXYtZm9vdGVyLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG5cclxuJG5hdi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcbiRuYXYtaWNvbi1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1cmVtO1xyXG4kbmF2LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMnJlbTtcclxuIiwiLy9cclxuLy8gU1ZHIEljb25cclxuLy9cclxuXHJcblxyXG5AbWl4aW4gc3ZnLWljb24tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBnIHtcclxuICAgICAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgZmlsbDogJGNvbG9yIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBnIHtcclxuICAgICAgICAgICAgICAgIFtmaWxsXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdmctaWNvbi10cmFuc2l0aW9uKCkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBnIHtcclxuICAgICAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc3ZnLWljb24tc2l6ZSgkc2l6ZSwgJGltcG9ydGFudDogZmFsc2UpIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZSB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgICAgIHdpZHRoOiAkc2l6ZSB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc3ZnLWxvZ28tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSl7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgcGF0aHtcclxuICAgICAgICAgICAgZmlsbDogJGNvbG9yIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDealComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-deal',
                templateUrl: './create-deal.component.html',
                styleUrls: ['./create-deal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wizard', { static: true }]
        }] }); })();


/***/ }),

/***/ "k5BX":
/*!*********************************************************!*\
  !*** ./src/app/modules/asset/_services/node.service.ts ***!
  \*********************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class NodeService {
    constructor() {
        //private node = new BehaviorSubject<any[]>([]);
        this.node = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get node$() {
        return this.node.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((node) => !!node));
    }
    addNode(data) {
        this.node.next(data);
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(); };
NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "kBzq":
/*!*******************************************************!*\
  !*** ./src/app/modules/asset/asset-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AssetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function() { return AssetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _asset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset.component */ "ho/u");
/* harmony import */ var _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exisiting-deals/exisiting-deals.component */ "QCmO");
/* harmony import */ var _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deals-dashboard/deals-dashboard.component */ "ws06");
/* harmony import */ var _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-dashboard/projects-dashboard.component */ "ox/o");
/* harmony import */ var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-deal/create-deal.component */ "evJ9");









const routes = [{
        path: '',
        component: _asset_component__WEBPACK_IMPORTED_MODULE_2__["AssetComponent"],
        children: [
            {
                path: 'existingDeals',
                component: _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"],
            },
            {
                path: 'dealsDashboard',
                component: _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DealsDashboardComponent"],
            },
            {
                path: 'projectsDashboard',
                component: _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsDashboardComponent"]
            },
            {
                path: 'createNewDeal',
                component: _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_6__["CreateDealComponent"]
            },
            {
                path: 'reviewDealInfo/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-asset-review-deal-info-review-deal-info-module */ "modules-asset-review-deal-info-review-deal-info-module").then(__webpack_require__.bind(null, /*! ../../modules/asset/review-deal-info/review-deal-info.module */ "nZyo")).then((m) => m.ReviewDealInfoModule),
            },
            //{
            //    path: 'reviewDealInfo',
            //    loadChildren: () =>
            //        import('../../modules/asset/review-deal-info/review-deal-info.module').then(
            //            (m) => m.ReviewDealInfoModule
            //        ),
            //},
            //{
            //    path: 'product/edit',
            //    component: ProductEditComponent
            //},
            //{
            //    path: 'product/edit/:id',
            //    component: ProductEditComponent
            //},
            { path: '', redirectTo: 'customers', pathMatch: 'full' },
            { path: '**', redirectTo: 'customers', pathMatch: 'full' },
        ],
    },];
class AssetRoutingModule {
}
AssetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetRoutingModule });
AssetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetRoutingModule_Factory(t) { return new (t || AssetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kvL/":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js ***!
  \*************************************************************************/
/*! exports provided: NgxDropzoneComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneModule, NgxDropzonePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxDropzoneService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxDropzoneLabelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");









function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["ngx-dropzone-label"]]];
const _c1 = ["ngx-dropzone-label"];
const _c2 = ["fileInput"];
function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
} }
const _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
const _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgxDropzoneLabelDirective {
}
NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) { return new (t || NgxDropzoneLabelDirective)(); };
NgxDropzoneLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxDropzoneLabelDirective, selectors: [["ngx-dropzone-label"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ngx-dropzone-label'
            }]
    }], null, null); })();

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
function coerceNumberProperty(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return (!isNaN(parseFloat(value)) && !isNaN(Number(value))) ? Number(value) : null;
}

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
    KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
class NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._removable = false;
        /** Emitted when the element should be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Make the preview item focusable using the tab key. */
        this.tabIndex = 0;
    }
    /** The file to preview. */
    set file(value) { this._file = value; }
    get file() { return this._file; }
    /** Allow the user to remove files. */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    keyEvent(event) {
        switch (event.keyCode) {
            case KEY_CODE.BACKSPACE:
            case KEY_CODE.DELETE:
                this.remove();
                break;
            default:
                break;
        }
    }
    /** We use the HostBinding to pass these common styles to child components. */
    get hostStyle() {
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /** Remove method to be used from the template. */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /** Remove the preview item (use from component code). */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => {
                    resolve(e.target.result);
                };
                reader.onerror = e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                };
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            });
        });
    }
}
NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) { return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
NgxDropzonePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzonePreviewComponent, selectors: [["ngx-dropzone-preview"]], hostVars: 3, hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
    } }, inputs: { file: "file", removable: "removable" }, outputs: { removed: "removed" }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzonePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"] });
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['tabindex']
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
        }] }); })();

/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
class NgxDropzoneService {
    parseFileList(files, accept, maxFileSize, multiple) {
        const addedFiles = [];
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
            }
            if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
            }
            if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
            }
            addedFiles.push(file);
        }
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
        const filetype = file.type.toLowerCase();
        const filename = file.name.toLowerCase();
        const matchedFileType = acceptFiletypes.find(acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        });
        return !!matchedFileType;
    }
    rejectFile(rejectedFiles, file, reason) {
        const rejectedFile = file;
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) { return new (t || NgxDropzoneService)(); };
NgxDropzoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxDropzoneService, factory: NgxDropzoneService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class NgxDropzoneComponent {
    constructor(service) {
        this.service = service;
        /** Emitted when any files were added or rejected. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Set the accepted file types. Defaults to '*'. */
        this.accept = '*';
        this._disabled = false;
        this._multiple = true;
        this._maxFileSize = undefined;
        this._expandable = false;
        this._disableClick = false;
        this._isHovered = false;
    }
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /** Disable any user interaction with the component. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /** Allow the selection of multiple files. */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /** Set the maximum size a single file may have. */
    get maxFileSize() {
        return this._maxFileSize;
    }
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /** Allow the dropzone container to expand vertically. */
    get expandable() {
        return this._expandable;
    }
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /** Open the file selector on click. */
    get disableClick() {
        return this._disableClick;
    }
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /** Show the native OS file explorer to select files. */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    _onDragLeave() {
        this._isHovered = false;
    }
    _onDrop(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = false;
        this.handleFileDrop(event.dataTransfer.files);
    }
    showFileSelector() {
        if (!this.disabled) {
            this._fileInput.nativeElement.click();
        }
    }
    _onFilesSelected(event) {
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    handleFileDrop(files) {
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
        this.change.next({
            addedFiles: result.addedFiles,
            rejectedFiles: result.rejectedFiles,
            source: this
        });
    }
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) { return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxDropzoneService, 2)); };
NgxDropzoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneComponent, selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]], contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
    } }, viewQuery: function NgxDropzoneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
    } }, hostVars: 8, hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() { return ctx._onClick(); })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) { return ctx._onDragOver($event); })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() { return ctx._onDragLeave(); })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) { return ctx._onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-dz-hovered", ctx._isHovered)("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick);
    } }, inputs: { accept: "accept", disabled: "disabled", multiple: "multiple", maxFileSize: "maxFileSize", expandable: "expandable", disableClick: "disableClick", id: "id", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NgxDropzoneService])], ngContentSelectors: _c4, decls: 5, vars: 8, consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]], template: function NgxDropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) { return ctx._onFilesSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5;pointer-events:none}.expandable[_nghost-%COMP%]{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"] });
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput', { static: true },] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
                providers: [NgxDropzoneService],
                styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
            }]
    }], function () { return [{ type: NgxDropzoneService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _isHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-hovered']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-disabled']
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expandable']
        }], disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.unclickable']
        }], 
    /** Show the native OS file explorer to select files. */
    _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], _onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], _onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave']
        }], _onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], _previewChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgxDropzonePreviewComponent, { descendants: true }]
        }], _fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', { static: true }]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }] }); })();

class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        super(sanitizer);
        /** The image data source. */
        this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
    }
    /** The file to preview. */
    set file(value) {
        this._file = value;
        this.renderImage();
    }
    get file() { return this._file; }
    ngOnInit() {
        this.renderImage();
    }
    renderImage() {
        this.readFile()
            .then(img => setTimeout(() => this.imageSrc = img))
            .catch(err => console.error(err));
    }
}
NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) { return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
NgxDropzoneImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneImagePreviewComponent, selectors: [["ngx-dropzone-image-preview"]], inputs: { file: "file" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneImagePreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{max-width:unset!important;min-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;max-height:100%;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"] });
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
NgxDropzoneImagePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-image-preview',
                template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneImagePreviewComponent
                    }
                ],
                styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus img,:host:hover img{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{border-radius:5px;max-height:100%;opacity:.8}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgxDropzoneRemoveBadgeComponent {
}
NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) { return new (t || NgxDropzoneRemoveBadgeComponent)(); };
NgxDropzoneRemoveBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneRemoveBadgeComponent, selectors: [["ngx-dropzone-remove-badge"]], decls: 3, vars: 0, consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]], template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2px}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-remove-badge',
                template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
                styles: [":host{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke:#fff;stroke-width:2px}"]
            }]
    }], null, null); })();

class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
    constructor(sanitizer) {
        super(sanitizer);
    }
    ngOnInit() {
        if (!this.file) {
            console.error('No file to read. Please provide a file using the [file] Input property.');
            return;
        }
        /**
         * We sanitize the URL here to enable the preview.
         * Please note that this could cause security issues!
         **/
        this.videoSrc = URL.createObjectURL(this.file);
        this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
    }
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
}
NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) { return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
NgxDropzoneVideoPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDropzoneVideoPreviewComponent, selectors: [["ngx-dropzone-video-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneVideoPreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]], template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent], styles: ["[_nghost-%COMP%]{max-width:unset!important;min-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   video[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{border-radius:5px;max-height:100%}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"] });
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-video-preview',
                template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneVideoPreviewComponent
                    }
                ],
                styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus video,:host:hover video{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{border-radius:5px;max-height:100%}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();

class NgxDropzoneModule {
}
NgxDropzoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxDropzoneModule });
NgxDropzoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxDropzoneModule_Factory(t) { return new (t || NgxDropzoneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDropzoneModule, { declarations: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-dropzone
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-dropzone.js.map

/***/ }),

/***/ "ox/o":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/asset/projects-dashboard/projects-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDashboardComponent", function() { return ProjectsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _metronic_partials_content_widgets_asset_module_quick_links_widgets_quick_links_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_metronic/partials/content/widgets/asset-module/quick-links-widgets/quick-links-widgets.component */ "iEbA");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");




class ProjectsDashboardComponent {
    constructor() {
        this.doc = "/assets/attachments/test_1.pdf";
    }
    ngOnInit() {
    }
}
ProjectsDashboardComponent.ɵfac = function ProjectsDashboardComponent_Factory(t) { return new (t || ProjectsDashboardComponent)(); };
ProjectsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsDashboardComponent, selectors: [["app-projects-dashboard"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-lg-6", "col-xxl-4"], [1, "col-lg-6", "col-xxl-8"], [2, "display", "block", 3, "src", "render-text"]], template: function ProjectsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quick-links-widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.doc)("render-text", true);
    } }, directives: [_metronic_partials_content_widgets_asset_module_quick_links_widgets_quick_links_widgets_component__WEBPACK_IMPORTED_MODULE_1__["QuickLinksWidgetsComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["PdfViewerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-dashboard',
                templateUrl: './projects-dashboard.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vnjQ":
/*!*********************************************************************!*\
  !*** ./src/app/modules/asset/_fake/fake-server/ownerships.table.ts ***!
  \*********************************************************************/
/*! exports provided: OwnershipsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnershipsTable", function() { return OwnershipsTable; });
class OwnershipsTable {
}
OwnershipsTable.ownerships = [{
        id: 1,
        name: 'IMH'
    },
    {
        id: 2,
        name: 'Blackstar'
    }];


/***/ }),

/***/ "w0rC":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/asset/create-deal/components/edit-property-modal/edit-property-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditPropertyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyModalComponent", function() { return EditPropertyModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_metronic/core */ "WsYS");
/* harmony import */ var _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_fake/fake-server/ownerships.table */ "vnjQ");
/* harmony import */ var _fake_fake_server_users_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_fake/fake-server/users.table */ "Qrho");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../google-auto-complete/google-auto-complete.component */ "LPfA");











const _c0 = ["addresstext"];
function EditPropertyModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EditPropertyModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EditPropertyModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPropertyModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPropertyModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.property.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.property.id);
} }
function EditPropertyModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PropertyName should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Units Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units cannot be less than 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPropertyModalComponent_ng_container_7_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const businessUnit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", businessUnit_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessUnit_r17.name);
} }
function EditPropertyModalComponent_ng_container_7_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pType_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pType_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pType_r18.name);
} }
function EditPropertyModalComponent_ng_container_7_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r19.firstName, " ", user_r19.lastName, "");
} }
function EditPropertyModalComponent_ng_container_7_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r20.firstName, " ", user_r20.lastName, "");
} }
function EditPropertyModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Property Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditPropertyModalComponent_ng_container_7_div_7_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditPropertyModalComponent_ng_container_7_div_8_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditPropertyModalComponent_ng_container_7_div_9_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditPropertyModalComponent_ng_container_7_div_10_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Location Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-google-auto-complete", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setAddress", function EditPropertyModalComponent_ng_container_7_Template_app_google_auto_complete_setAddress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.getAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditPropertyModalComponent_ng_container_7_div_21_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditPropertyModalComponent_ng_container_7_div_22_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditPropertyModalComponent_ng_container_7_div_23_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Business Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EditPropertyModalComponent_ng_container_7_option_29_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Business Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select Property Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EditPropertyModalComponent_ng_container_7_option_38_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Property Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select Property Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditPropertyModalComponent_ng_container_7_option_48_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Select Asset Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EditPropertyModalComponent_ng_container_7_option_53_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("propertyName"))("is-valid", ctx_r2.isControlValid("propertyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isControlValid("propertyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controlHasError("required", "propertyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controlHasError("minlength", "propertyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controlHasError("maxlength", "propertyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.property.propertyAddressString);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("units"))("is-valid", ctx_r2.isControlValid("units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isControlValid("units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controlHasError("required", "units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controlHasError("min", "units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("businessUnitId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.BusinessUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("propertyTypeId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.PropertyTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("propertyManagerId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.Users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.isControlInvalid("assetManagerId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.Users);
} }
function EditPropertyModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPropertyModalComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class EMPTY_Property {
    static get DEFAULT_PropertyModel() {
        return {
            id: undefined,
            propertyStatus: '',
            propertyStatusId: 0,
            propertyName: '',
            propertyTypeId: 0,
            propertyType: '',
            propertyManagerId: 0,
            propertyManager: '',
            assetManagerId: 0,
            assetManager: '',
            units: undefined,
            businessUnitId: 0,
            businessUnitName: '',
            mainPointOfContact: '',
            capexTeamLeadContact: '',
            nominees: [],
            propertyAddressString: '',
            propertyAddress: {},
        };
    }
}
class EditPropertyModalComponent {
    constructor(fb, modal, zone) {
        this.fb = fb;
        this.modal = modal;
        this.zone = zone;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.BusinessUnits = _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_4__["OwnershipsTable"].ownerships;
        this.Users = _fake_fake_server_users_table__WEBPACK_IMPORTED_MODULE_5__["UsersTable"].users;
        this.subscriptions = [];
        this.PropertyTypes = [
            {
                id: 1,
                name: "Residential",
            }, {
                id: 2,
                name: "Commerical",
            }
        ];
    }
    ngOnInit() {
        this.loadProperty();
        //this.getPlaceAutocomplete();
    }
    loadProperty() {
        if (!this.propertyInput) {
            this.property = EMPTY_Property.DEFAULT_PropertyModel;
            this.loadForm();
        }
        else {
            console.log(this.propertyInput);
            this.property = this.propertyInput;
            this.loadForm();
            //const sb = this.customersService.getItemById(this.id).pipe(
            //    first(),
            //    catchError((errorMessage) => {
            //        this.modal.dismiss(errorMessage);
            //        return of(EMPTY_CUSTOMER);
            //    })
            //).subscribe((customer: Customer) => {
            //    this.customer = customer;
            //    this.loadForm();
            //});
            //this.subscriptions.push(sb);
        }
    }
    loadForm() {
        this.formGroup = this.fb.group({
            //propertyStatus: [this.property.propertyStatus, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
            propertyName: [this.property.propertyName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
            //propertyManager: [this.property.propertyManager, Validators.compose([Validators.required, Validators.email])],
            //assetManager: [this.property.assetManager, Validators.compose([Validators.nullValidator])],
            //businessUnitName: [this.property.businessUnitName, Validators.compose([Validators.required])],
            units: [this.property.units, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])],
            propertyTypeId: [this.property.propertyTypeId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            businessUnitId: [this.property.businessUnitId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            assetManagerId: [this.property.assetManagerId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            propertyManagerId: [this.property.propertyManagerId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
        console.log(this.formGroup);
    }
    save() {
        this.prepareCustomer();
        //this.create();
        if (this.property.id) {
            //this.edit();
        }
        else {
            this.create();
        }
        this.passEntry.emit(this.newDealInfo.properties);
        this.modal.close(this.newDealInfo.properties);
    }
    edit() {
        this.property = this.newDealInfo.properties.find();
        //const sbUpdate = this.customersService.update(this.customer).pipe(
        //    tap(() => {
        //        this.modal.close();
        //    }),
        //    catchError((errorMessage) => {
        //        this.modal.dismiss(errorMessage);
        //        return of(this.customer);
        //    }),
        //).subscribe(res => this.customer = res);
        //this.subscriptions.push(sbUpdate);
    }
    create() {
        var maxId = 0;
        if (this.newDealInfo.properties.length > 0) {
            maxId = Math.max.apply(Math, this.newDealInfo.properties.map(function (o) { return o.id; }));
        }
        //alert(maxId);
        this.property.id = maxId + 1;
        this.newDealInfo.properties.push(this.property); // should be removed on edit
        //const sbCreate = this.customersService.create(this.customer).pipe(
        //    tap(() => {
        //        this.modal.close();
        //    }),
        //    catchError((errorMessage) => {
        //        this.modal.dismiss(errorMessage);
        //        return of(this.customer);
        //    }),
        //).subscribe((res: Customer) => this.customer = res);
        //this.subscriptions.push(sbCreate);
    }
    prepareCustomer() {
        const formData = this.formGroup.value;
        //this.property.id = new Date(formData.dob);
        this.property.propertyName = formData.propertyName;
        this.property.propertyTypeId = formData.propertyTypeId;
        this.property.units = formData.units;
        this.property.propertyType = this.PropertyTypes.filter(x => x.id == this.property.propertyTypeId)[0].name;
        this.property.businessUnitId = formData.businessUnitId;
        this.property.businessUnitName = this.BusinessUnits.filter(x => x.id == this.property.businessUnitId)[0].name;
        this.property.assetManagerId = formData.assetManagerId;
        var selectedAssetManager = this.Users.find(x => x.id == this.property.assetManagerId);
        this.property.assetManager = selectedAssetManager.firstName;
        this.property.propertyManagerId = formData.propertyManagerId;
        var selectedPropertyManager = this.Users.find(x => x.id == this.property.propertyManagerId);
        this.property.propertyManager = selectedPropertyManager.firstName;
        //this.property.propertyManager = formData.propertyManager;
        //this.property.dateOfBbirth = formData.dob;
        //this.property.ipAddress = formData.ipAddress;
        //this.property.lastName = formData.lastName;
        //this.property.type = +formData.type;
        //this.property.userName = formData.userName;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    getAddress(place) {
        this.address = place['formatted_address'];
        //this.phone = this.getPhone(place);
        //alert(this.address)
        this.formattedAddress = place['formatted_address'];
        this.property.propertyAddressString = this.formattedAddress;
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }
    getAddrComponent(place, componentTemplate) {
        let result;
        for (let i = 0; i < place.address_components.length; i++) {
            const addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    }
    getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    }
    getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    }
    getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    }
    getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    }
    getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    }
    getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    }
    getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    }
    ngAfterViewInit() {
        /*this.getPlaceAutocomplete();*/
    }
}
EditPropertyModalComponent.ɵfac = function EditPropertyModalComponent_Factory(t) { return new (t || EditPropertyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
EditPropertyModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPropertyModalComponent, selectors: [["app-edit-property-modal"]], viewQuery: function EditPropertyModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, inputs: { id: "id", propertyInput: "propertyInput", newDealInfo: "newDealInfo" }, outputs: { passEntry: "passEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomDateParserFormatter"] }
        ])], decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "404px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-4"], [1, "form-label"], ["type", "text", "name", "propertyName", "placeholder", "Property Name", "autocomplete", "off", "formControlName", "propertyName", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["adressType", "geocode", 3, "setAddress"], ["type", "number", "name", "units", "placeholder", "Units", "autocomplete", "off", "formControlName", "units", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "businessUnitId", "formControlName", "businessUnitId", 1, "form-control", "form-control-lg", "form-control-solid"], [3, "value", 4, "ngFor", "ngForOf"], [1, "feedback"], ["name", "propertyTypeId", "formControlName", "propertyTypeId", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "propertyManagerId", "formControlName", "propertyManagerId", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "assetManagerId", "formControlName", "assetManagerId", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "valid-feedback"], [1, "invalid-feedback"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-elevate", 3, "click"]], template: function EditPropertyModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditPropertyModalComponent_ng_container_3_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPropertyModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditPropertyModalComponent_ng_container_7_Template, 54, 29, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPropertyModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPropertyModalComponent_ng_container_11_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__["GoogleAutoCompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".modal {\n  z-index: 1001 !important;\n}\n\n  .modal-backdrop {\n  z-index: 1000 !important;\n}\n\n  .pac-container {\n  z-index: 1055 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlZGl0LXByb3BlcnR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6ImVkaXQtcHJvcGVydHktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucGFjLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxMDU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPropertyModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-property-modal',
                templateUrl: './edit-property-modal.component.html',
                styleUrls: ['./edit-property-modal.component.scss'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], propertyInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newDealInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addresstext']
        }] }); })();


/***/ }),

/***/ "ws06":
/*!****************************************************************************!*\
  !*** ./src/app/modules/asset/deals-dashboard/deals-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DealsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsDashboardComponent", function() { return DealsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_fake/fake-server/deals.table */ "knAO");
/* harmony import */ var _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/fake/deals.service */ "BfxI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_partials_content_widgets_asset_module_deal_info_widget_deal_info_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/partials/content/widgets/asset-module/deal-info-widget/deal-info-widget.component */ "TA49");







function DealsDashboardComponent_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DealsDashboardComponent_div_6_div_10_app_deal_info_widget_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-deal-info-widget", 14);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r5 = ctx_r8.$implicit;
    const j_r6 = ctx_r8.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dealInfo", item_r5)("widgetHeight", "150px")("ngClass", j_r6 < 5 ? "" : "hiddenWidget hiddenWidget");
} }
function DealsDashboardComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DealsDashboardComponent_div_6_div_10_app_deal_info_widget_1_Template, 1, 3, "app-deal-info-widget", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r6 < 5 || ctx_r4.show);
} }
function DealsDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DealsDashboardComponent_div_6_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.show = !ctx_r9.show; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Show all Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DealsDashboardComponent_div_6_div_9_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DealsDashboardComponent_div_6_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gDeals_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project Status: ", gDeals_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gDeals_r1.value.length > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gDeals_r1.value);
} }
class DealsDashboardComponent {
    constructor(dealsService) {
        this.dealsService = dealsService;
        this.deals = _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__["DealsTable"].deals;
        this.groupedDeals = [];
        this.value = "test";
        this.show = false;
    }
    ngOnInit() {
        this.groupedDeals = Array.from(this.groupBy(this.deals, gDeal => gDeal.statusName), ([name, value]) => ({ name, value }));
        console.log(this.groupedDeals);
        //console.log(this.groupedDeals.values());
        //console.log(this.groupedDeals.Keys());
        /*console.log(Array.from(this.groupedDeals, ([name, value]) => ({ name, value })));*/
    }
    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });
        return map;
    }
    showAllProjects(statusName) {
        alert(statusName);
    }
}
DealsDashboardComponent.ɵfac = function DealsDashboardComponent_Factory(t) { return new (t || DealsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"])); };
DealsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealsDashboardComponent, selectors: [["app-deals-dashboard"]], decls: 7, vars: 1, consts: [["routerLink", "/asset/createNewDeal", "routerLinkActive", "active", 1, "btn", "btn-primary"], [1, "menu-bullet", "menu-bullet-dot"], [1, "menu-text"], [4, "ngFor", "ngForOf"], [1, "p-1", "flex-grow-1"], [1, "text-black-50", "font-weight-bolder", "line-height-lg", "mb-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "ng-model", "show", 1, "form-check-input", 3, "change"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "row"], [4, "ngIf"], ["class", "col-md-3 mx-auto my-5", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mx-auto", "my-5"], ["cssClass", "gutter-b card-stretch", 3, "dealInfo", "widgetHeight", "ngClass", 4, "ngIf"], ["cssClass", "gutter-b card-stretch", 3, "dealInfo", "widgetHeight", "ngClass"]], template: function DealsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create New Deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DealsDashboardComponent_div_6_Template, 11, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupedDeals);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _metronic_partials_content_widgets_asset_module_deal_info_widget_deal_info_widget_component__WEBPACK_IMPORTED_MODULE_5__["DealInfoWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deals-dashboard',
                templateUrl: './deals-dashboard.component.html',
            }]
    }], function () { return [{ type: _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-asset-asset-module.js.map