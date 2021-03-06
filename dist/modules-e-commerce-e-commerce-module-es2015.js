(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-e-commerce-e-commerce-module"],{

/***/ "44r7":
/*!*****************************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ECommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceRoutingModule", function() { return ECommerceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _e_commerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-commerce.component */ "UPO/");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "R/kh");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "7mCN");
/* harmony import */ var _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-edit/product-edit.component */ "eC3h");








const routes = [
    {
        path: '',
        component: _e_commerce_component__WEBPACK_IMPORTED_MODULE_2__["ECommerceComponent"],
        children: [
            {
                path: 'customers',
                component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
            },
            {
                path: 'products',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
            },
            {
                path: 'product/add',
                component: _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            },
            {
                path: 'product/edit',
                component: _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            },
            {
                path: 'product/edit/:id',
                component: _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            },
            { path: '', redirectTo: 'customers', pathMatch: 'full' },
            { path: '**', redirectTo: 'customers', pathMatch: 'full' },
        ],
    },
];
class ECommerceRoutingModule {
}
ECommerceRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ECommerceRoutingModule });
ECommerceRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ECommerceRoutingModule_Factory(t) { return new (t || ECommerceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ECommerceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ECommerceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "6KFj":
/*!*********************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce.module.ts ***!
  \*********************************************************/
/*! exports provided: ECommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceModule", function() { return ECommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customers.component */ "R/kh");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "7mCN");
/* harmony import */ var _e_commerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-commerce.component */ "UPO/");
/* harmony import */ var _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./e-commerce-routing.module */ "44r7");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customers_components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/components/delete-customer-modal/delete-customer-modal.component */ "VY/g");
/* harmony import */ var _customers_components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/components/delete-customers-modal/delete-customers-modal.component */ "PmG3");
/* harmony import */ var _customers_components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/components/fetch-customers-modal/fetch-customers-modal.component */ "vWZh");
/* harmony import */ var _customers_components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/components/update-customers-status-modal/update-customers-status-modal.component */ "uqEa");
/* harmony import */ var _customers_components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/components/edit-customer-modal/edit-customer-modal.component */ "pk+k");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/components/delete-product-modal/delete-product-modal.component */ "ZzB5");
/* harmony import */ var _products_components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/components/delete-products-modal/delete-products-modal.component */ "mh1P");
/* harmony import */ var _products_components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products/components/update-products-status-modal/update-products-status-modal.component */ "BCVa");
/* harmony import */ var _products_components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/components/fetch-products-modal/fetch-products-modal.component */ "ADP4");
/* harmony import */ var _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/product-edit/product-edit.component */ "eC3h");
/* harmony import */ var _products_product_edit_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/product-edit/remarks/remarks.component */ "a+pU");
/* harmony import */ var _products_product_edit_specifications_specifications_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./products/product-edit/specifications/specifications.component */ "lMA/");
/* harmony import */ var _products_product_edit_remarks_delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/product-edit/remarks/delete-remark-modal/delete-remark-modal.component */ "qvwI");
/* harmony import */ var _products_product_edit_remarks_delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./products/product-edit/remarks/delete-remarks-modal/delete-remarks-modal.component */ "pres");
/* harmony import */ var _products_product_edit_remarks_fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./products/product-edit/remarks/fetch-remarks-modal/fetch-remarks-modal.component */ "h0ca");
/* harmony import */ var _products_product_edit_specifications_delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/product-edit/specifications/delete-spec-modal/delete-spec-modal.component */ "BOl5");
/* harmony import */ var _products_product_edit_specifications_delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./products/product-edit/specifications/delete-specs-modal/delete-specs-modal.component */ "iRVe");
/* harmony import */ var _products_product_edit_specifications_fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/product-edit/specifications/fetch-specs-modal/fetch-specs-modal.component */ "nFgm");
/* harmony import */ var _products_product_edit_remarks_edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./products/product-edit/remarks/edit-remark-modal/edit-remark-modal.component */ "aq+H");
/* harmony import */ var _products_product_edit_specifications_edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./products/product-edit/specifications/edit-spec-modal/edit-spec-modal.component */ "w9dg");
































class ECommerceModule {
}
ECommerceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ECommerceModule });
ECommerceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ECommerceModule_Factory(t) { return new (t || ECommerceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_7__["ECommerceRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ECommerceModule, { declarations: [_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
        _e_commerce_component__WEBPACK_IMPORTED_MODULE_6__["ECommerceComponent"],
        _customers_components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCustomerModalComponent"],
        _customers_components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCustomersModalComponent"],
        _customers_components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_12__["FetchCustomersModalComponent"],
        _customers_components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCustomersStatusModalComponent"],
        _customers_components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditCustomerModalComponent"],
        _products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["DeleteProductModalComponent"],
        _products_components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_17__["DeleteProductsModalComponent"],
        _products_components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProductsStatusModalComponent"],
        _products_components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_19__["FetchProductsModalComponent"],
        _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"],
        _products_product_edit_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_21__["RemarksComponent"],
        _products_product_edit_specifications_specifications_component__WEBPACK_IMPORTED_MODULE_22__["SpecificationsComponent"],
        _products_product_edit_remarks_delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_23__["DeleteRemarkModalComponent"],
        _products_product_edit_remarks_delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_24__["DeleteRemarksModalComponent"],
        _products_product_edit_remarks_fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_25__["FetchRemarksModalComponent"],
        _products_product_edit_specifications_delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_26__["DeleteSpecModalComponent"],
        _products_product_edit_specifications_delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_27__["DeleteSpecsModalComponent"],
        _products_product_edit_specifications_fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_28__["FetchSpecsModalComponent"],
        _products_product_edit_remarks_edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_29__["EditRemarkModalComponent"],
        _products_product_edit_specifications_edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditSpecModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_7__["ECommerceRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
        _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ECommerceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                    _e_commerce_component__WEBPACK_IMPORTED_MODULE_6__["ECommerceComponent"],
                    _customers_components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCustomerModalComponent"],
                    _customers_components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCustomersModalComponent"],
                    _customers_components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_12__["FetchCustomersModalComponent"],
                    _customers_components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCustomersStatusModalComponent"],
                    _customers_components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditCustomerModalComponent"],
                    _products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["DeleteProductModalComponent"],
                    _products_components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_17__["DeleteProductsModalComponent"],
                    _products_components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProductsStatusModalComponent"],
                    _products_components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_19__["FetchProductsModalComponent"],
                    _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"],
                    _products_product_edit_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_21__["RemarksComponent"],
                    _products_product_edit_specifications_specifications_component__WEBPACK_IMPORTED_MODULE_22__["SpecificationsComponent"],
                    _products_product_edit_remarks_delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_23__["DeleteRemarkModalComponent"],
                    _products_product_edit_remarks_delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_24__["DeleteRemarksModalComponent"],
                    _products_product_edit_remarks_fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_25__["FetchRemarksModalComponent"],
                    _products_product_edit_specifications_delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_26__["DeleteSpecModalComponent"],
                    _products_product_edit_specifications_delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_27__["DeleteSpecsModalComponent"],
                    _products_product_edit_specifications_fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_28__["FetchSpecsModalComponent"],
                    _products_product_edit_remarks_edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_29__["EditRemarkModalComponent"],
                    _products_product_edit_specifications_edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditSpecModalComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _e_commerce_routing_module__WEBPACK_IMPORTED_MODULE_7__["ECommerceRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
                    _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"]
                ],
                entryComponents: [
                    _customers_components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCustomerModalComponent"],
                    _customers_components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCustomersModalComponent"],
                    _customers_components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCustomersStatusModalComponent"],
                    _customers_components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_12__["FetchCustomersModalComponent"],
                    _customers_components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditCustomerModalComponent"],
                    _products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_16__["DeleteProductModalComponent"],
                    _products_components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_17__["DeleteProductsModalComponent"],
                    _products_components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProductsStatusModalComponent"],
                    _products_components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_19__["FetchProductsModalComponent"],
                    _products_product_edit_remarks_delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_23__["DeleteRemarkModalComponent"],
                    _products_product_edit_remarks_delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_24__["DeleteRemarksModalComponent"],
                    _products_product_edit_remarks_fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_25__["FetchRemarksModalComponent"],
                    _products_product_edit_specifications_delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_26__["DeleteSpecModalComponent"],
                    _products_product_edit_specifications_delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_27__["DeleteSpecsModalComponent"],
                    _products_product_edit_specifications_fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_28__["FetchSpecsModalComponent"],
                    _products_product_edit_remarks_edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_29__["EditRemarkModalComponent"],
                    _products_product_edit_specifications_edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditSpecModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "7mCN":
/*!*******************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-product-modal/delete-product-modal.component */ "ZzB5");
/* harmony import */ var _components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-products-modal/delete-products-modal.component */ "mh1P");
/* harmony import */ var _components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update-products-status-modal/update-products-status-modal.component */ "BCVa");
/* harmony import */ var _components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fetch-products-modal/fetch-products-modal.component */ "ADP4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services */ "swVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
// tslint:disable:no-string-literal















function ProductsComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selected records count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_ng_container_43_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.deleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Delete All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_ng_container_43_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.fetchSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Fetch Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_ng_container_43_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.updateStatusForSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Update Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
} }
function ProductsComponent_tr_78_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Selling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ProductsComponent_tr_78_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ProductsComponent_tr_78_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ProductsComponent_tr_78_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "USED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ProductsComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_tr_78_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const product_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.grouping.selectRow(product_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductsComponent_tr_78_ng_container_20_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ProductsComponent_tr_78_ng_container_21_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductsComponent_tr_78_ng_container_23_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductsComponent_tr_78_ng_container_24_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_tr_78_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const product_r6 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.delete(product_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r1.grouping.isRowSelected(product_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r6.VINCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r6.manufacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r6.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r6.modelYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("color", product_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$ ", product_r6.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-success", product_r6.status === 1)("label-light-primary", product_r6.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r6.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r6.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r6.condition === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r6.condition === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/ecommerce/product/edit/" + product_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
class ProductsComponent {
    constructor(fb, modalService, productsService) {
        this.fb = fb;
        this.modalService = modalService;
        this.productsService = productsService;
        this.subscriptions = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    }
    // angular lifecircle hooks
    ngOnInit() {
        this.filterForm();
        this.searchForm();
        this.productsService.fetch();
        const sb = this.productsService.isLoading$.subscribe(res => this.isLoading = res);
        this.subscriptions.push(sb);
        this.grouping = this.productsService.grouping;
        this.paginator = this.productsService.paginator;
        this.sorting = this.productsService.sorting;
        this.productsService.fetch();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    // filtration
    filterForm() {
        this.filterGroup = this.fb.group({
            status: [''],
            condition: [''],
            searchTerm: [''],
        });
        this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(() => this.filter()));
        this.subscriptions.push(this.filterGroup.controls.condition.valueChanges.subscribe(() => this.filter()));
    }
    filter() {
        const filter = {};
        const status = this.filterGroup.get('status').value;
        if (status) {
            filter['status'] = status;
        }
        const condition = this.filterGroup.get('condition').value;
        if (condition) {
            filter['condition'] = condition;
        }
        this.productsService.patchState({ filter });
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
        this.productsService.patchState({ searchTerm });
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
        this.productsService.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.productsService.patchState({ paginator });
    }
    // actions
    delete(id) {
        const modalRef = this.modalService.open(_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProductModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.productsService.fetch(), () => { });
    }
    deleteSelected() {
        const modalRef = this.modalService.open(_components_delete_products_modal_delete_products_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductsModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.productsService.fetch(), () => { });
    }
    updateStatusForSelected() {
        const modalRef = this.modalService.open(_components_update_products_status_modal_update_products_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProductsStatusModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.productsService.fetch(), () => { });
    }
    fetchSelected() {
        const modalRef = this.modalService.open(_components_fetch_products_modal_fetch_products_modal_component__WEBPACK_IMPORTED_MODULE_5__["FetchProductsModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.productsService.fetch(), () => { });
    }
}
ProductsComponent.??fac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ProductsService"])); };
ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 81, vars: 25, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", "routerLink", "/ecommerce/product/add", 1, "btn", "btn-primary"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-4"], [1, "row", 3, "formGroup"], [1, "col-lg-6"], ["name", "status", "placeholder", "Filter by Status", "formControlName", "status", 1, "form-control"], ["value", ""], ["value", "1"], ["value", "2"], [1, "form-text", "text-muted"], ["placeholder", "Filter by Contition", "name", "condition", "formControlName", "condition", 1, "form-control"], [1, "col-lg-2", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "value", "", "formControlName", "searchTerm", 1, "form-control"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["data-row-selection", "true", 1, "selection-cell-header"], [1, "checkbox", "checkbox-single"], ["type", "checkbox", 3, "checked", "click"], ["column", "VINCode", 3, "activeColumn", "activeDirection", "sort"], ["column", "manufacture", 3, "activeColumn", "activeDirection", "sort"], ["column", "model", 3, "activeColumn", "activeDirection", "sort"], ["column", "modelYear", 3, "activeColumn", "activeDirection", "sort"], ["column", "color", 3, "activeColumn", "activeDirection", "sort"], ["column", "price", 3, "activeColumn", "activeDirection", "sort"], ["column", "status", 3, "activeColumn", "activeDirection", "sort"], ["column", "condition", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-stream"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", 3, "click"], [1, "fa", "fa-sync-alt"], [1, "selection-cell"], [1, "label", "label-lg", "label-inline"], ["title", "Edit product", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "routerLink"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete product", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Products list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " by Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " in all fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ProductsComponent_ng_container_43_Template, 23, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsComponent_Template_input_click_49_listener() { return ctx.grouping.selectAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " VIN CODE (ID) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "app-sort-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_53_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " MANUFACTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "app-sort-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_56_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " MODEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "app-sort-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_59_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " YEAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "app-sort-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_62_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " COLOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "app-sort-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_65_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " PRICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "app-sort-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_68_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " STATUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "app-sort-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_71_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " CONDITION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "app-sort-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function ProductsComponent_Template_app_sort_icon_sort_74_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, ProductsComponent_tr_78_Template, 30, 20, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "app-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("paginate", function ProductsComponent_Template_app_paginator_paginate_80_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.filterGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.grouping.getSelectedRowsCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.grouping.checkAreAllRowsSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](79, 23, ctx.productsService.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "ADP4":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/components/fetch-products-modal/fetch-products-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FetchProductsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductsModalComponent", function() { return FetchProductsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FetchProductsModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchProductsModalComponent_tr_17_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Selling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchProductsModalComponent_tr_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchProductsModalComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, FetchProductsModalComponent_tr_17_ng_container_9_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, FetchProductsModalComponent_tr_17_ng_container_10_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.VINCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.manufacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-success", product_r2.status === 1)("label-light-primary", product_r2.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r2.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r2.status === 2);
} }
class FetchProductsModalComponent {
    constructor(productsService, modal) {
        this.productsService = productsService;
        this.modal = modal;
        this.products = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        const sb = this.productsService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((res) => {
            this.products = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    fetchSelected() {
        this.isLoading = true;
        const sb = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([]).pipe(// fake => update to call request method from your server
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
            if (this.modal) {
                this.modal.close();
            }
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
FetchProductsModalComponent.??fac = function FetchProductsModalComponent_Factory(t) { return new (t || FetchProductsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
FetchProductsModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FetchProductsModalComponent, selectors: [["app-fetch-products-modal"]], inputs: { ids: "ids" }, decls: 24, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"], [1, "label", "label-lg", "label-inline"]], template: function FetchProductsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Fetch selected products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FetchProductsModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "VIN CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "MANUFACTURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, FetchProductsModalComponent_tr_17_Template, 11, 9, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchProductsModalComponent_Template_button_click_20_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchProductsModalComponent_Template_button_click_22_listener() { return ctx.fetchSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXRjaC1wcm9kdWN0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FetchProductsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-products-modal',
                templateUrl: './fetch-products-modal.component.html',
                styleUrls: ['./fetch-products-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "BCVa":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/components/update-products-status-modal/update-products-status-modal.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: UpdateProductsStatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductsStatusModalComponent", function() { return UpdateProductsStatusModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function UpdateProductsStatusModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateProductsStatusModalComponent_tr_17_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Selling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateProductsStatusModalComponent_tr_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateProductsStatusModalComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, UpdateProductsStatusModalComponent_tr_17_ng_container_9_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UpdateProductsStatusModalComponent_tr_17_ng_container_10_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.VINCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.manufacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-success", product_r2.status === 1)("label-light-primary", product_r2.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r2.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r2.status === 2);
} }
class UpdateProductsStatusModalComponent {
    constructor(productsService, modal) {
        this.productsService = productsService;
        this.modal = modal;
        this.status = 2;
        this.products = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        const sb = this.productsService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((res) => {
            this.products = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    updateProductsStatus() {
        this.isLoading = true;
        const sb = this.productsService.updateStatusForItems(this.ids, +this.status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
UpdateProductsStatusModalComponent.??fac = function UpdateProductsStatusModalComponent_Factory(t) { return new (t || UpdateProductsStatusModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
UpdateProductsStatusModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateProductsStatusModalComponent, selectors: [["app-update-products-status-modal"]], inputs: { ids: "ids" }, decls: 30, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "form", "modal-footer"], [1, "form-group", "mr-2"], ["name", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], [1, "form-group"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"], [1, "label", "label-lg", "label-inline"]], template: function UpdateProductsStatusModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Status update for selected products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UpdateProductsStatusModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "VIN CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "MANUFACTURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, UpdateProductsStatusModalComponent_tr_17_Template, 11, 9, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProductsStatusModalComponent_Template_select_ngModelChange_20_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateProductsStatusModalComponent_Template_button_click_26_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateProductsStatusModalComponent_Template_button_click_28_listener() { return ctx.updateProductsStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Update Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZHVjdHMtc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateProductsStatusModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-products-status-modal',
                templateUrl: './update-products-status-modal.component.html',
                styleUrls: ['./update-products-status-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "BOl5":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/specifications/delete-spec-modal/delete-spec-modal.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DeleteSpecModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSpecModalComponent", function() { return DeleteSpecModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteSpecModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteSpecModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Specification is deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteSpecModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete this specification?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteSpecModalComponent {
    constructor(specsService, modal) {
        this.specsService = specsService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteSpec() {
        this.isLoading = true;
        const sb = this.specsService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteSpecModalComponent.??fac = function DeleteSpecModalComponent_Factory(t) { return new (t || DeleteSpecModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SpecificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteSpecModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteSpecModalComponent, selectors: [["app-delete-spec-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteSpecModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteSpecModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Specification Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteSpecModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteSpecModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteSpecModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteSpecModalComponent_Template_button_click_12_listener() { return ctx.deleteSpec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtc3BlYy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteSpecModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-spec-modal',
                templateUrl: './delete-spec-modal.component.html',
                styleUrls: ['./delete-spec-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["SpecificationsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PmG3":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/components/delete-customers-modal/delete-customers-modal.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DeleteCustomersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomersModalComponent", function() { return DeleteCustomersModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteCustomersModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteCustomersModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Customers are deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteCustomersModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete selected customers?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteCustomersModalComponent {
    constructor(customersService, modal) {
        this.customersService = customersService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteCustomers() {
        this.isLoading = true;
        const sb = this.customersService.deleteItems(this.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteCustomersModalComponent.??fac = function DeleteCustomersModalComponent_Factory(t) { return new (t || DeleteCustomersModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteCustomersModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteCustomersModalComponent, selectors: [["app-delete-customers-modal"]], inputs: { ids: "ids" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteCustomersModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteCustomersModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Customers Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteCustomersModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteCustomersModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteCustomersModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteCustomersModalComponent_Template_button_click_12_listener() { return ctx.deleteCustomers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY3VzdG9tZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteCustomersModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-customers-modal',
                templateUrl: './delete-customers-modal.component.html',
                styleUrls: ['./delete-customers-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "R/kh":
/*!*********************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/customers.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-customer-modal/delete-customer-modal.component */ "VY/g");
/* harmony import */ var _components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-customers-modal/delete-customers-modal.component */ "PmG3");
/* harmony import */ var _components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update-customers-status-modal/update-customers-status-modal.component */ "uqEa");
/* harmony import */ var _components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fetch-customers-modal/fetch-customers-modal.component */ "vWZh");
/* harmony import */ var _components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-customer-modal/edit-customer-modal.component */ "pk+k");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services */ "swVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
// tslint:disable:no-string-literal















function CustomersComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selected records count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_45_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.deleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Delete All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_45_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.fetchSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Fetch Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_45_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.updateStatusForSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Update Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
} }
function CustomersComponent_tr_77_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function CustomersComponent_tr_77_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function CustomersComponent_tr_77_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function CustomersComponent_tr_77_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function CustomersComponent_tr_77_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function CustomersComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_77_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const customer_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.grouping.selectRow(customer_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CustomersComponent_tr_77_ng_container_17_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CustomersComponent_tr_77_ng_container_18_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, CustomersComponent_tr_77_ng_container_19_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, CustomersComponent_tr_77_ng_container_24_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, CustomersComponent_tr_77_ng_container_25_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_77_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const customer_r6 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.edit(customer_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_tr_77_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const customer_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.delete(customer_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r1.grouping.isRowSelected(customer_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r6.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r6.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r6.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-danger", customer_r6.status === 1)("label-light-success", customer_r6.status === 2)("label-light-primary", customer_r6.status === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r6.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r6.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r6.status === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-success", customer_r6.type === 1)("label-primary", customer_r6.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r6.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r6.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
class CustomersComponent {
    constructor(fb, modalService, customerService) {
        this.fb = fb;
        this.modalService = modalService;
        this.customerService = customerService;
        this.subscriptions = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    }
    // angular lifecircle hooks
    ngOnInit() {
        this.filterForm();
        this.searchForm();
        this.customerService.fetch();
        this.grouping = this.customerService.grouping;
        this.paginator = this.customerService.paginator;
        this.sorting = this.customerService.sorting;
        const sb = this.customerService.isLoading$.subscribe(res => this.isLoading = res);
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
        this.customerService.patchState({ filter });
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
        this.customerService.patchState({ searchTerm: searchTerm.toLowerCase() });
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
        this.customerService.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.customerService.patchState({ paginator });
    }
    // form actions
    create() {
        this.edit(undefined);
    }
    edit(id) {
        const modalRef = this.modalService.open(_components_edit_customer_modal_edit_customer_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditCustomerModalComponent"], { size: 'xl' });
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.customerService.fetch(), () => { });
    }
    delete(id) {
        const modalRef = this.modalService.open(_components_delete_customer_modal_delete_customer_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteCustomerModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.customerService.fetch(), () => { });
    }
    deleteSelected() {
        const modalRef = this.modalService.open(_components_delete_customers_modal_delete_customers_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteCustomersModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.customerService.fetch(), () => { });
    }
    updateStatusForSelected() {
        const modalRef = this.modalService.open(_components_update_customers_status_modal_update_customers_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCustomersStatusModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.customerService.fetch(), () => { });
    }
    fetchSelected() {
        const modalRef = this.modalService.open(_components_fetch_customers_modal_fetch_customers_modal_component__WEBPACK_IMPORTED_MODULE_5__["FetchCustomersModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.customerService.fetch(), () => { });
    }
}
CustomersComponent.??fac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["CustomersService"])); };
CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 80, vars: 23, consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-4"], [1, "row", 3, "formGroup"], [1, "col-lg-6"], ["name", "status", "placeholder", "Filter by Status", "formControlName", "status", 1, "form-control"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "form-text", "text-muted"], ["placeholder", "Filter by Type", "name", "type", "formControlName", "type", 1, "form-control"], [1, "col-lg-2", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "value", "", "formControlName", "searchTerm", 1, "form-control"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["data-row-selection", "true", 1, "selection-cell-header"], [1, "checkbox", "checkbox-single"], ["type", "checkbox", 3, "checked", "click"], ["column", "id", 3, "activeColumn", "activeDirection", "sort"], ["column", "firstName", 3, "activeColumn", "activeDirection", "sort"], ["column", "lastName", 3, "activeColumn", "activeDirection", "sort"], ["column", "email", 3, "activeColumn", "activeDirection", "sort"], ["column", "gender", 3, "activeColumn", "activeDirection", "sort"], ["column", "status", 3, "activeColumn", "activeDirection", "sort"], ["column", "type", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-stream"], [1, "fa", "fa-sync-alt"], [1, "selection-cell"], [1, "label", "label-lg", "label-inline"], [1, "label", "label-dot", "label-primary", "mr-2"], [1, "font-bold", "font-primary"], ["title", "Edit customer", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete customer", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Customers list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_Template_button_click_6_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "New Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Susspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " by Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " in all fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, CustomersComponent_ng_container_45_Template, 23, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_Template_input_click_51_listener() { return ctx.grouping.selectAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "app-sort-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_55_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " FIRSTNAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "app-sort-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_58_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " LASTNAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "app-sort-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_61_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " EMAIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "app-sort-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_64_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " GENDER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "app-sort-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_67_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " STATUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "app-sort-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_70_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " TYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "app-sort-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function CustomersComponent_Template_app_sort_icon_sort_73_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, CustomersComponent_tr_77_Template, 31, 23, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "app-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("paginate", function CustomersComponent_Template_app_paginator_paginate_79_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.filterGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.grouping.getSelectedRowsCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.grouping.checkAreAllRowsSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](78, 21, ctx.customerService.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _services__WEBPACK_IMPORTED_MODULE_9__["CustomersService"] }]; }, null); })();


/***/ }),

/***/ "UPO/":
/*!************************************************************!*\
  !*** ./src/app/modules/e-commerce/e-commerce.component.ts ***!
  \************************************************************/
/*! exports provided: ECommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceComponent", function() { return ECommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ECommerceComponent {
    constructor() { }
    ngOnInit() { }
}
ECommerceComponent.??fac = function ECommerceComponent_Factory(t) { return new (t || ECommerceComponent)(); };
ECommerceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ECommerceComponent, selectors: [["app-e-commerce"]], decls: 1, vars: 0, template: function ECommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ECommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-commerce',
                templateUrl: './e-commerce.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VY/g":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/components/delete-customer-modal/delete-customer-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DeleteCustomerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerModalComponent", function() { return DeleteCustomerModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteCustomerModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteCustomerModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Customer is deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteCustomerModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete this customer?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteCustomerModalComponent {
    constructor(customersService, modal) {
        this.customersService = customersService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteCustomer() {
        this.isLoading = true;
        const sb = this.customersService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteCustomerModalComponent.??fac = function DeleteCustomerModalComponent_Factory(t) { return new (t || DeleteCustomerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteCustomerModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteCustomerModalComponent, selectors: [["app-delete-customer-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteCustomerModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteCustomerModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Customer Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteCustomerModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteCustomerModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteCustomerModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteCustomerModalComponent_Template_button_click_12_listener() { return ctx.deleteCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY3VzdG9tZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteCustomerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-customer-modal',
                templateUrl: './delete-customer-modal.component.html',
                styleUrls: ['./delete-customer-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Y0bP":
/*!************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_services/fake/customers.service.ts ***!
  \************************************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_fake/fake-helpers/http-extenstions */ "QDgw");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");








const DEFAULT_STATE = {
    filter: {},
    paginator: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["PaginatorState"](),
    sorting: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["SortState"](),
    searchTerm: '',
    grouping: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
    entityId: undefined
};
class CustomersService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/customers`;
    }
    // READ
    find(tableState) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    updateStatusForItems(ids, status) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((customers) => {
            return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
                c.status = status;
                return c;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])((customers) => {
            const tasks$ = [];
            customers.forEach(customer => {
                tasks$.push(this.update(customer));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
CustomersService.??fac = function CustomersService_Factory(t) { return new (t || CustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CustomersService, factory: CustomersService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZzB5":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/components/delete-product-modal/delete-product-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DeleteProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductModalComponent", function() { return DeleteProductModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteProductModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteProductModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Product is deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteProductModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete this product?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteProductModalComponent {
    constructor(productsService, modal) {
        this.productsService = productsService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteProduct() {
        this.isLoading = true;
        const sb = this.productsService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteProductModalComponent.??fac = function DeleteProductModalComponent_Factory(t) { return new (t || DeleteProductModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteProductModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteProductModalComponent, selectors: [["app-delete-product-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteProductModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteProductModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Product Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteProductModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteProductModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteProductModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteProductModalComponent_Template_button_click_12_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteProductModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-product-modal',
                templateUrl: './delete-product-modal.component.html',
                styleUrls: ['./delete-product-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "a+pU":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/remarks/remarks.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RemarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksComponent", function() { return RemarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-remark-modal/delete-remark-modal.component */ "qvwI");
/* harmony import */ var _delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-remarks-modal/delete-remarks-modal.component */ "pres");
/* harmony import */ var _edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-remark-modal/edit-remark-modal.component */ "aq+H");
/* harmony import */ var _fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-remarks-modal/fetch-remarks-modal.component */ "h0ca");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");














function RemarksComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selected records count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_ng_container_16_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.deleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Delete All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_ng_container_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.fetchSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Fetch Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
} }
function RemarksComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_tr_36_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const remark_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.grouping.selectRow(remark_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_tr_36_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const remark_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.edit(remark_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_tr_36_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const remark_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.delete(remark_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const remark_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r1.grouping.isRowSelected(remark_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](remark_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](remark_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](remark_r5.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
class RemarksComponent {
    constructor(fb, modalService, remarksService) {
        this.fb = fb;
        this.modalService = modalService;
        this.remarksService = remarksService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.searchForm();
        const sb = this.remarksService.isLoading$.subscribe((res) => (this.isLoading = res));
        this.subscriptions.push(sb);
        this.remarksService.patchState({ entityId: this.productId });
        this.grouping = this.remarksService.grouping;
        this.paginator = this.remarksService.paginator;
        this.sorting = this.remarksService.sorting;
        this.remarksService.fetch();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    //
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
        this.remarksService.patchState({ searchTerm });
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
        this.remarksService.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.remarksService.patchState({ paginator });
    }
    // actions
    delete(id) {
        const modalRef = this.modalService.open(_delete_remark_modal_delete_remark_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteRemarkModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.remarksService.fetch(), () => { });
    }
    deleteSelected() {
        const modalRef = this.modalService.open(_delete_remarks_modal_delete_remarks_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteRemarksModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.remarksService.fetch(), () => { });
    }
    fetchSelected() {
        const modalRef = this.modalService.open(_fetch_remarks_modal_fetch_remarks_modal_component__WEBPACK_IMPORTED_MODULE_5__["FetchRemarksModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.remarksService.fetch(), () => { });
    }
    edit(id) {
        const modalRef = this.modalService.open(_edit_remark_modal_edit_remark_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditRemarkModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.productId = this.productId;
        modalRef.result.then(() => this.remarksService.fetch(), () => { });
    }
    create() {
        this.edit(undefined);
    }
}
RemarksComponent.??fac = function RemarksComponent_Factory(t) { return new (t || RemarksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["RemarksService"])); };
RemarksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RemarksComponent, selectors: [["app-remarks"]], inputs: { productId: "productId" }, decls: 39, vars: 14, consts: [[1, "mt-5"], [1, "form", "margin-b-30"], [1, "form-filtration"], [1, "row", "align-items-center"], [1, "col-md-2", "margin-bottom-10-mobile"], [3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "formControlName", "searchTerm", 1, "form-control"], [1, "form-text", "text-muted"], [1, "col-md-8", "margin-bottom-10-mobile"], [1, "col-md-2", "text-right", "margin-bottom-10-mobile"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["data-row-selection", "true", 1, "selection-cell-header"], [1, "checkbox", "checkbox-single"], ["type", "checkbox", 3, "checked", "click"], ["column", "id", 3, "activeColumn", "activeDirection", "sort"], ["column", "text", 3, "activeColumn", "activeDirection", "sort"], ["column", "dueDate", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", 3, "click"], [1, "fa", "fa-stream"], [1, "selection-cell"], ["title", "Edit remark", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete remark", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"]], template: function RemarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " in all fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_Template_button_click_14_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Create new remark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, RemarksComponent_ng_container_16_Template, 19, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RemarksComponent_Template_input_click_22_listener() { return ctx.grouping.selectAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "app-sort-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function RemarksComponent_Template_app_sort_icon_sort_26_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " TEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "app-sort-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function RemarksComponent_Template_app_sort_icon_sort_29_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " DUE DATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "app-sort-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function RemarksComponent_Template_app_sort_icon_sort_32_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, RemarksComponent_tr_36_Template, 16, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("paginate", function RemarksComponent_Template_app_paginator_paginate_38_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.grouping.getSelectedRowsCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.grouping.checkAreAllRowsSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 12, ctx.remarksService.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_10__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_12__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1hcmtzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RemarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-remarks',
                templateUrl: './remarks.component.html',
                styleUrls: ['./remarks.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["RemarksService"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "aq+H":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/remarks/edit-remark-modal/edit-remark-modal.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditRemarkModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRemarkModalComponent", function() { return EditRemarkModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../_metronic/core */ "WsYS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function EditRemarkModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditRemarkModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditRemarkModalComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" with ID '", ctx_r6.remark.id, "");
} }
function EditRemarkModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EditRemarkModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, EditRemarkModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " remark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EditRemarkModalComponent_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.remark.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.remark.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.remark.id);
} }
function EditRemarkModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Text was entered correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Text is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Text should have at least 3 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Text should have maximum 10000 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Due date was entered correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Due date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " in 'mm/dd/yyyy' format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditRemarkModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Enter Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditRemarkModalComponent_ng_container_7_div_7_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EditRemarkModalComponent_ng_container_7_div_8_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EditRemarkModalComponent_ng_container_7_div_9_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, EditRemarkModalComponent_ng_container_7_div_10_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Dute date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditRemarkModalComponent_ng_container_7_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17); return _r11.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, EditRemarkModalComponent_ng_container_7_div_21_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, EditRemarkModalComponent_ng_container_7_div_22_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Select Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("text"))("is-valid", ctx_r2.isControlValid("text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("minlength", "text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("maxLength", "text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("dueDate"))("is-valid", ctx_r2.isControlValid("dueDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("dueDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "dueDate"));
} }
function EditRemarkModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditRemarkModalComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r3.formGroup.invalid);
} }
const EMPTY_REMARK = {
    id: undefined,
    carId: undefined,
    text: '',
    type: 1,
    dueDate: ''
};
class EditRemarkModalComponent {
    constructor(remarksService, fb, modal) {
        this.remarksService = remarksService;
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.isLoading$ = this.remarksService.isLoading$;
        this.loadRemarks();
    }
    loadRemarks() {
        if (!this.id) {
            this.remark = EMPTY_REMARK;
            this.remark.carId = this.productId;
            this.loadForm();
        }
        else {
            const sb = this.remarksService.getItemById(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((errorMessage) => {
                this.modal.dismiss(errorMessage);
                const empty = EMPTY_REMARK;
                empty.carId = this.productId;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(empty);
            })).subscribe((remark) => {
                this.remark = remark;
                this.loadForm();
            });
            this.subscriptions.push(sb);
        }
    }
    loadForm() {
        this.formGroup = this.fb.group({
            text: [this.remark.text, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10000)])],
            dueDate: [this.remark.dueDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
            type: [this.remark.type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    save() {
        this.prepareRemark();
        if (this.remark.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.remarksService.update(this.remark).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.remark);
        })).subscribe(res => this.remark = res);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.remarksService.create(this.remark).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.remark);
        })).subscribe((res) => this.remark = res);
        this.subscriptions.push(sbCreate);
    }
    prepareRemark() {
        const formData = this.formGroup.value;
        this.remark.carId = this.productId;
        this.remark.dueDate = formData.dueDate;
        this.remark.type = +formData.type;
        this.remark.text = formData.text;
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
}
EditRemarkModalComponent.??fac = function EditRemarkModalComponent_Factory(t) { return new (t || EditRemarkModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["RemarksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
EditRemarkModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EditRemarkModalComponent, selectors: [["app-edit-remark-modal"]], inputs: { id: "id", productId: "productId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
        ])], decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-12"], [1, "form-label"], ["type", "text", "name", "text", "placeholder", "Text", "autocomplete", "off", "formControlName", "text", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "input-group", "input-group-solid"], ["type", "text", "name", "dueDate", "autocomplete", "off", "placeholder", "dd/mm/yyyy", "ngbDatepicker", "", "formControlName", "dueDate", "readonly", "true", 1, "form-control", "form-control-lg", "form-control-solid"], ["d", "ngbDatepicker"], [1, "input-group-append", 3, "click"], [1, "input-group-text"], [1, "text-dark-50", "flaticon-calendar"], [1, "col-lg-12"], ["name", "type", "formControlName", "type", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "feedback"], [1, "valid-feedback"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function EditRemarkModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EditRemarkModalComponent_ng_container_3_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, EditRemarkModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditRemarkModalComponent_ng_container_7_Template, 38, 15, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditRemarkModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EditRemarkModalComponent_ng_container_11_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.remark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.remark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.remark);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXJlbWFyay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditRemarkModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-remark-modal',
                templateUrl: './edit-remark-modal.component.html',
                styleUrls: ['./edit-remark-modal.component.scss'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_6__["RemarksService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "eC3h":
/*!************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/product-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "swVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remarks/remarks.component */ "a+pU");
/* harmony import */ var _specifications_specifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./specifications/specifications.component */ "lMA/");











function ProductEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ProductEditComponent_ng_container_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("'", ctx_r7.product.manufacture, " ", ctx_r7.product.model, " - ", ctx_r7.product.modelYear, "'");
} }
function ProductEditComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductEditComponent_ng_container_6_span_2_Template, 2, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.id ? "Edit" : "New", " product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.product && ctx_r1.product.id);
} }
function ProductEditComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductEditComponent_li_20_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.changeTab(ctx_r8.tabs.REMARKS_TAB); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Product remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx_r2.activeTabId === ctx_r2.tabs.REMARKS_TAB);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-selected", ctx_r2.activeTabId === ctx_r2.tabs.REMARKS_TAB);
} }
function ProductEditComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductEditComponent_li_21_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.changeTab(ctx_r10.tabs.SPECIFICATIONS_TAB); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Product specifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx_r3.activeTabId === ctx_r3.tabs.SPECIFICATIONS_TAB);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-selected", ctx_r3.activeTabId === ctx_r3.tabs.SPECIFICATIONS_TAB);
} }
function ProductEditComponent_ng_container_22_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year can't be less than 1900 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year can't be more than 2023 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Model year should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mileage was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mileage is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mileage should have at least 1 symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mileage year should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Price was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Price is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Price should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Price should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "VIN code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " VIN code was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " VIN code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductEditComponent_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ProductEditComponent_ng_container_22_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r38.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Enter Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ProductEditComponent_ng_container_22_div_1_div_7_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ProductEditComponent_ng_container_22_div_1_div_8_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ProductEditComponent_ng_container_22_div_1_div_9_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ProductEditComponent_ng_container_22_div_1_div_10_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ProductEditComponent_ng_container_22_div_1_div_11_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Select Manufacture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pontiac");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Kia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Lotus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Subaru");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Jeep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Isuzu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Mitsubishi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Oldsmobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Chevrolet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Chrysler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Audi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Suzuki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "GMC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Cadillac");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Infinity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Mercury");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Dodge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Ram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lexus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Lamborghini");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Honda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Nissan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Ford");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Hyundai");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Saab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Toyota");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Enter Model year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, ProductEditComponent_ng_container_22_div_1_div_76_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, ProductEditComponent_ng_container_22_div_1_div_77_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, ProductEditComponent_ng_container_22_div_1_div_78_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, ProductEditComponent_ng_container_22_div_1_div_79_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, ProductEditComponent_ng_container_22_div_1_div_80_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, ProductEditComponent_ng_container_22_div_1_div_81_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, ProductEditComponent_ng_container_22_div_1_div_82_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Enter Mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, ProductEditComponent_ng_container_22_div_1_div_88_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](89, ProductEditComponent_ng_container_22_div_1_div_89_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, ProductEditComponent_ng_container_22_div_1_div_90_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](91, ProductEditComponent_ng_container_22_div_1_div_91_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, ProductEditComponent_ng_container_22_div_1_div_92_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Select Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "CadetBlue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Eagle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Gold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "LightSlateGrey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "RoyalBlue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Crimson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Sienna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Indigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Green");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Violet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "GoldenRod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "OrangeRed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Khaki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Teal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "DarkTurquoise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Enter Price ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](147, ProductEditComponent_ng_container_22_div_1_div_147_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](148, ProductEditComponent_ng_container_22_div_1_div_148_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](149, ProductEditComponent_ng_container_22_div_1_div_149_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](150, ProductEditComponent_ng_container_22_div_1_div_150_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](151, ProductEditComponent_ng_container_22_div_1_div_151_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Enter VIN code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](157, ProductEditComponent_ng_container_22_div_1_div_157_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, ProductEditComponent_ng_container_22_div_1_div_158_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](159, ProductEditComponent_ng_container_22_div_1_div_159_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Select Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Selling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Select Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "textarea", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r12.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r12.isControlInvalid("model"))("is-valid", ctx_r12.isControlValid("model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.isControlTouched("model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.isControlValid("model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("required", "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("minlength", "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("maxLength", "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r12.isControlInvalid("modelYear"))("is-valid", ctx_r12.isControlValid("modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.isControlTouched("modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.isControlValid("modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("required", "modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("minlength", "modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("min", "modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("max", "modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("maxLength", "modelYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r12.isControlInvalid("mileage"))("is-valid", ctx_r12.isControlValid("mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.isControlTouched("mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.isControlValid("mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("required", "mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("minlength", "mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("maxLength", "mileage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r12.isControlInvalid("price"))("is-valid", ctx_r12.isControlValid("price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.isControlTouched("price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.isControlValid("price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("required", "price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("minlength", "price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("maxLength", "price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r12.isControlInvalid("VINCode"))("is-valid", ctx_r12.isControlValid("VINCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.isControlTouched("VINCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.isControlValid("VINCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.controlHasError("required", "VINCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r12.formGroup.invalid);
} }
function ProductEditComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductEditComponent_ng_container_22_div_1_Template, 193, 47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.product);
} }
function ProductEditComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-remarks", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("productId", ctx_r5.product.id);
} }
function ProductEditComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-specifications", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("productId", ctx_r6.product.id);
} }
const EMPTY_PRODUCT = {
    id: undefined,
    model: '',
    manufacture: 'Pontiac',
    modelYear: 2020,
    mileage: 0,
    description: '',
    color: 'Red',
    price: 0,
    condition: 1,
    status: 1,
    VINCode: '',
};
class ProductEditComponent {
    constructor(fb, productsService, router, route) {
        this.fb = fb;
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.errorMessage = '';
        this.tabs = {
            BASIC_TAB: 0,
            REMARKS_TAB: 1,
            SPECIFICATIONS_TAB: 2
        };
        this.activeTabId = this.tabs.BASIC_TAB; // 0 => Basic info | 1 => Remarks | 2 => Specifications
        this.subscriptions = [];
    }
    ngOnInit() {
        this.isLoading$ = this.productsService.isLoading$;
        this.loadProduct();
    }
    loadProduct() {
        const sb = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            // get id from URL
            this.id = Number(params.get('id'));
            if (this.id || this.id > 0) {
                return this.productsService.getItemById(this.id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(EMPTY_PRODUCT);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
            this.errorMessage = errorMessage;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        })).subscribe((res) => {
            if (!res) {
                this.router.navigate(['/products'], { relativeTo: this.route });
            }
            this.product = res;
            this.previous = Object.assign({}, res);
            this.loadForm();
        });
        this.subscriptions.push(sb);
    }
    loadForm() {
        if (!this.product) {
            return;
        }
        this.formGroup = this.fb.group({
            model: [this.product.model, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
            manufacture: [this.product.manufacture],
            modelYear: [this.product.modelYear, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1900),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2023)
                ])],
            mileage: [this.product.mileage, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000000)
                ])],
            color: [this.product.color],
            price: [this.product.price],
            description: [this.product.description],
            status: [this.product.status],
            condition: [this.product.condition],
            VINCode: [this.product.VINCode, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    reset() {
        if (!this.previous) {
            return;
        }
        this.product = Object.assign({}, this.previous);
        this.loadForm();
    }
    save() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        const formValues = this.formGroup.value;
        this.product = Object.assign(this.product, formValues);
        if (this.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.productsService.update(this.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/ecommerce/products'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
            console.error('UPDATE ERROR', errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.product);
        })).subscribe(res => this.product = res);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.productsService.create(this.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/ecommerce/products'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
            console.error('UPDATE ERROR', errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.product);
        })).subscribe(res => this.product = res);
        this.subscriptions.push(sbCreate);
    }
    changeTab(tabId) {
        this.activeTabId = tabId;
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
}
ProductEditComponent.??fac = function ProductEditComponent_Factory(t) { return new (t || ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ProductEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductEditComponent, selectors: [["app-product-edit"]], decls: 25, vars: 13, consts: [[1, "card", "card-custom", "gutter-b"], [4, "ngIf"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", "routerLink", "/ecommerce/products", 1, "btn", "btn-light"], [1, "fa", "fa-arrow-left"], [1, "btn", "btn-secondary", "ml-2", 3, "click"], [1, "fa", "fa-redo"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line"], [1, "nav-item", "cursor-pointer", 3, "click"], ["data-toggle", "tab", "role", "tab", 1, "nav-link"], ["class", "nav-item cursor-pointer", 3, "click", 4, "ngIf"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], ["data-toggle", "tab", "role", "button", 1, "nav-link"], ["class", "mt-5", 4, "ngIf"], [1, "mt-5"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-lg-4"], ["type", "text", "autocomplete", "off", "placeholder", "Model", "name", "model", "formControlName", "model", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "feedback", 4, "ngIf"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["name", "manufacture", "formControlName", "manufacture", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "Pontiac"], ["value", "Kia"], ["value", "Lotus"], ["value", "Subaru"], ["value", "Jeep"], ["value", "Isuzu"], ["value", "Mitsubishi"], ["value", "Oldsmobile"], ["value", "Chevrolet"], ["value", "Chrysler"], ["value", "Audi"], ["value", "Suzuki"], ["value", "GMC"], ["value", "Cadillac"], ["value", "Infinity"], ["value", "Mercury"], ["value", "Dodge"], ["value", "Ram"], ["value", "Lexus"], ["value", "Lamborghini"], ["value", "Honda"], ["value", "Nissan"], ["value", "Ford"], ["value", "Hyundai"], ["value", "Saab"], ["value", "Toyota"], [1, "feedback"], ["type", "number", "placeholder", "Model Year", "name", "modelYear", "formControlName", "modelYear", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "number", "placeholder", "Mileage", "name", "mileage", "formControlName", "mileage", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "color", "formControlName", "color", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "Red"], ["value", "CadetBlue"], ["value", "Eagle"], ["value", "Gold"], ["value", "LightSlateGrey"], ["value", "RoyalBlue"], ["value", "Crimson"], ["value", "Blue"], ["value", "Sienna"], ["value", "Indigo"], ["value", "Green"], ["value", "Violet"], ["value", "GoldenRod"], ["value", "OrangeRed"], ["value", "Khaki"], ["value", "Teal"], ["value", "Purple"], ["value", "Orange"], ["value", "Pink"], ["value", "Black"], ["value", "DarkTurquoise"], ["type", "number", "autocomplete", "off", "placeholder", "Price", "name", "price", "formControlName", "price", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "autocomplete", "off", "placeholder", "VIN Code", "name", "VINCode", "formControlName", "VINCode", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "status", "formControlName", "status", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "1"], ["value", "2"], ["name", "condition", "formControlName", "condition", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "form-group"], ["name", "description", "formControlName", "description", 1, "form-control", "form-control-solid"], [1, "float-right"], ["routerLink", "/ecommerce/products", 1, "btn", "btn-default", "font-weight-bold", "mr-2"], ["type", "submit", 1, "btn", "btn-primary", "font-weight-bold", "mr-2", 3, "disabled"], [1, "valid-feedback"], [1, "invalid-feedback"], [3, "productId"]], template: function ProductEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductEditComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ProductEditComponent_ng_container_6_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductEditComponent_Template_button_click_12_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductEditComponent_Template_li_click_17_listener() { return ctx.changeTab(ctx.tabs.BASIC_TAB); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Basic info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductEditComponent_li_20_Template, 3, 3, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ProductEditComponent_li_21_Template, 3, 3, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ProductEditComponent_ng_container_22_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductEditComponent_ng_container_23_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductEditComponent_ng_container_24_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 11, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.product == null ? null : ctx.product.manufacture, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.activeTabId === ctx.tabs.BASIC_TAB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-selected", ctx.activeTabId === ctx.tabs.BASIC_TAB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product && ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product && ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activeTabId === ctx.tabs.BASIC_TAB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activeTabId === ctx.tabs.REMARKS_TAB && ctx.product && ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activeTabId === ctx.tabs.SPECIFICATIONS_TAB && ctx.product && ctx.product.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_7__["RemarksComponent"], _specifications_specifications_component__WEBPACK_IMPORTED_MODULE_8__["SpecificationsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-edit',
                templateUrl: './product-edit.component.html',
                styleUrls: ['./product-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "h0ca":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/remarks/fetch-remarks-modal/fetch-remarks-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FetchRemarksModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRemarksModalComponent", function() { return FetchRemarksModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FetchRemarksModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchRemarksModalComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const remark_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](remark_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](remark_r2.text);
} }
class FetchRemarksModalComponent {
    constructor(remarksService, modal) {
        this.remarksService = remarksService;
        this.modal = modal;
        this.remarks = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadRemarks();
    }
    loadRemarks() {
        const sb = this.remarksService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((res) => {
            this.remarks = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    fetchSelected() {
        this.isLoading = true;
        const sb = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([]).pipe(// fake => update to call request method from your server
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
FetchRemarksModalComponent.??fac = function FetchRemarksModalComponent_Factory(t) { return new (t || FetchRemarksModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
FetchRemarksModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FetchRemarksModalComponent, selectors: [["app-fetch-remarks-modal"]], inputs: { ids: "ids" }, decls: 20, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"]], template: function FetchRemarksModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Fetch selected remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FetchRemarksModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "TEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, FetchRemarksModalComponent_tr_13_Template, 5, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchRemarksModalComponent_Template_button_click_16_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchRemarksModalComponent_Template_button_click_18_listener() { return ctx.fetchSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.remarks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXRjaC1yZW1hcmtzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FetchRemarksModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-remarks-modal',
                templateUrl: './fetch-remarks-modal.component.html',
                styleUrls: ['./fetch-remarks-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "iRVe":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/specifications/delete-specs-modal/delete-specs-modal.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DeleteSpecsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSpecsModalComponent", function() { return DeleteSpecsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteSpecsModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteSpecsModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Specifications are deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteSpecsModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete selected specifications?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteSpecsModalComponent {
    constructor(specsService, modal) {
        this.specsService = specsService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteSpecs() {
        this.isLoading = true;
        const sb = this.specsService.deleteItems(this.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteSpecsModalComponent.??fac = function DeleteSpecsModalComponent_Factory(t) { return new (t || DeleteSpecsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SpecificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteSpecsModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteSpecsModalComponent, selectors: [["app-delete-specs-modal"]], inputs: { ids: "ids" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteSpecsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteSpecsModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Specifications Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteSpecsModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteSpecsModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteSpecsModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteSpecsModalComponent_Template_button_click_12_listener() { return ctx.deleteSpecs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtc3BlY3MtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteSpecsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-specs-modal',
                templateUrl: './delete-specs-modal.component.html',
                styleUrls: ['./delete-specs-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["SpecificationsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lMA/":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/specifications/specifications.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SpecificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationsComponent", function() { return SpecificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_models/specification.dictionary */ "t4s3");
/* harmony import */ var _delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-spec-modal/delete-spec-modal.component */ "BOl5");
/* harmony import */ var _delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-specs-modal/delete-specs-modal.component */ "iRVe");
/* harmony import */ var _edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-spec-modal/edit-spec-modal.component */ "w9dg");
/* harmony import */ var _fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch-specs-modal/fetch-specs-modal.component */ "nFgm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../_metronic/shared/crud-table/components/paginator/paginator.component */ "gBr1");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");















function SpecificationsComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Selected records count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_ng_container_16_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.deleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Delete All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_ng_container_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.fetchSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Fetch Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
} }
function SpecificationsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_tr_36_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const spec_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.grouping.selectRow(spec_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_tr_36_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const spec_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.edit(spec_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_tr_36_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const spec_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.delete(spec_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const spec_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r1.grouping.isRowSelected(spec_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](spec_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.specs[spec_r5.specId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](spec_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
class SpecificationsComponent {
    constructor(fb, modalService, specsService) {
        this.fb = fb;
        this.modalService = modalService;
        this.specsService = specsService;
        this.specs = _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_2__["SPECIFICATIONS_DICTIONARY"];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.searchForm();
        const sb = this.specsService.isLoading$.subscribe((res) => (this.isLoading = res));
        this.subscriptions.push(sb);
        this.specsService.patchState({ entityId: this.productId });
        this.grouping = this.specsService.grouping;
        this.paginator = this.specsService.paginator;
        this.sorting = this.specsService.sorting;
        this.specsService.fetch();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }
    //
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
        this.specsService.patchState({ searchTerm });
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
        this.specsService.patchState({ sorting });
    }
    // pagination
    paginate(paginator) {
        this.specsService.patchState({ paginator });
    }
    // actions
    delete(id) {
        const modalRef = this.modalService.open(_delete_spec_modal_delete_spec_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteSpecModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.result.then(() => this.specsService.fetch(), () => { });
    }
    deleteSelected() {
        const modalRef = this.modalService.open(_delete_specs_modal_delete_specs_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteSpecsModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.specsService.fetch(), () => { });
    }
    fetchSelected() {
        const modalRef = this.modalService.open(_fetch_specs_modal_fetch_specs_modal_component__WEBPACK_IMPORTED_MODULE_6__["FetchSpecsModalComponent"]);
        modalRef.componentInstance.ids = this.grouping.getSelectedRows();
        modalRef.result.then(() => this.specsService.fetch(), () => { });
    }
    edit(id) {
        const modalRef = this.modalService.open(_edit_spec_modal_edit_spec_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditSpecModalComponent"]);
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.productId = this.productId;
        modalRef.result.then(() => this.specsService.fetch(), () => { });
    }
    create() {
        this.edit(undefined);
    }
}
SpecificationsComponent.??fac = function SpecificationsComponent_Factory(t) { return new (t || SpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["SpecificationsService"])); };
SpecificationsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SpecificationsComponent, selectors: [["app-specifications"]], inputs: { productId: "productId" }, decls: 39, vars: 14, consts: [[1, "mt-5"], [1, "form", "margin-b-30"], [1, "form-filtration"], [1, "row", "align-items-center"], [1, "col-md-2", "margin-bottom-10-mobile"], [3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "formControlName", "searchTerm", 1, "form-control"], [1, "form-text", "text-muted"], [1, "col-md-6", "margin-bottom-10-mobile"], [1, "col-md-4", "text-right", "margin-bottom-10-mobile"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["data-row-selection", "true", 1, "selection-cell-header"], [1, "checkbox", "checkbox-single"], ["type", "checkbox", 3, "checked", "click"], ["column", "id", 3, "activeColumn", "activeDirection", "sort"], ["column", "specId", 3, "activeColumn", "activeDirection", "sort"], ["column", "value", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", 3, "click"], [1, "fa", "fa-stream"], [1, "selection-cell"], ["title", "Edit spec", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Delete specification", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"]], template: function SpecificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " by VALUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_Template_button_click_14_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Create new specification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, SpecificationsComponent_ng_container_16_Template, 19, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpecificationsComponent_Template_input_click_22_listener() { return ctx.grouping.selectAllRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "app-sort-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function SpecificationsComponent_Template_app_sort_icon_sort_26_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " SPECIFICATION TYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "app-sort-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function SpecificationsComponent_Template_app_sort_icon_sort_29_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " VALUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "app-sort-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function SpecificationsComponent_Template_app_sort_icon_sort_32_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, SpecificationsComponent_tr_36_Template, 16, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("paginate", function SpecificationsComponent_Template_app_paginator_paginate_38_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.grouping.getSelectedRowsCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.grouping.checkAreAllRowsSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("activeColumn", ctx.sorting.column)("activeDirection", ctx.sorting.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 12, ctx.specsService.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paginator", ctx.paginator)("isLoading", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_11__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__["InlineSVGDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpecificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specifications',
                templateUrl: './specifications.component.html',
                styleUrls: ['./specifications.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _services__WEBPACK_IMPORTED_MODULE_9__["SpecificationsService"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mh1P":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/components/delete-products-modal/delete-products-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DeleteProductsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductsModalComponent", function() { return DeleteProductsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteProductsModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteProductsModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Products are deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteProductsModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete selected products?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteProductsModalComponent {
    constructor(productsService, modal) {
        this.productsService = productsService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteProducts() {
        this.isLoading = true;
        const sb = this.productsService.deleteItems(this.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteProductsModalComponent.??fac = function DeleteProductsModalComponent_Factory(t) { return new (t || DeleteProductsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteProductsModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteProductsModalComponent, selectors: [["app-delete-products-modal"]], inputs: { ids: "ids" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteProductsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteProductsModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Products Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteProductsModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteProductsModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteProductsModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteProductsModalComponent_Template_button_click_12_listener() { return ctx.deleteProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcHJvZHVjdHMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteProductsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-products-modal',
                templateUrl: './delete-products-modal.component.html',
                styleUrls: ['./delete-products-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nFgm":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/specifications/fetch-specs-modal/fetch-specs-modal.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: FetchSpecsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecsModalComponent", function() { return FetchSpecsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_models/specification.dictionary */ "t4s3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function FetchSpecsModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchSpecsModalComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const spec_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](spec_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.specs[spec_r2.specId]);
} }
class FetchSpecsModalComponent {
    constructor(specsService, modal) {
        this.specsService = specsService;
        this.modal = modal;
        this.specs = _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_3__["SPECIFICATIONS_DICTIONARY"];
        this.specifications = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadSpecs();
    }
    loadSpecs() {
        const sb = this.specsService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((res) => {
            this.specifications = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    fetchSelected() {
        this.isLoading = true;
        const sb = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([]).pipe(// fake => update to call request method from your server
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
FetchSpecsModalComponent.??fac = function FetchSpecsModalComponent_Factory(t) { return new (t || FetchSpecsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["SpecificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"])); };
FetchSpecsModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FetchSpecsModalComponent, selectors: [["app-fetch-specs-modal"]], inputs: { ids: "ids" }, decls: 20, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"]], template: function FetchSpecsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Fetch selected specifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FetchSpecsModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "SPECIFICATION TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, FetchSpecsModalComponent_tr_13_Template, 5, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchSpecsModalComponent_Template_button_click_16_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchSpecsModalComponent_Template_button_click_18_listener() { return ctx.fetchSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.specifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXRjaC1zcGVjcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FetchSpecsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-specs-modal',
                templateUrl: './fetch-specs-modal.component.html',
                styleUrls: ['./fetch-specs-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_4__["SpecificationsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pk+k":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/components/edit-customer-modal/edit-customer-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EditCustomerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerModalComponent", function() { return EditCustomerModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../_metronic/core */ "WsYS");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function EditCustomerModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditCustomerModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditCustomerModalComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("'", ctx_r6.customer.firstName, " ", ctx_r6.customer.lastName, "'");
} }
function EditCustomerModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EditCustomerModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, EditCustomerModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EditCustomerModalComponent_ng_container_3_ng_container_4_Template, 2, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.customer.id);
} }
function EditCustomerModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last name was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last name should have at least 3 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Last name should have maximum 100 symbols ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Login was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Login is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email format is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Date of Birth was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " in 'mm/dd/yyyy' format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Login was entered correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditCustomerModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Enter First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditCustomerModalComponent_ng_container_7_div_7_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EditCustomerModalComponent_ng_container_7_div_8_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EditCustomerModalComponent_ng_container_7_div_9_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, EditCustomerModalComponent_ng_container_7_div_10_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Enter Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EditCustomerModalComponent_ng_container_7_div_15_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EditCustomerModalComponent_ng_container_7_div_16_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, EditCustomerModalComponent_ng_container_7_div_17_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, EditCustomerModalComponent_ng_container_7_div_18_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Enter Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, EditCustomerModalComponent_ng_container_7_div_23_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, EditCustomerModalComponent_ng_container_7_div_24_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Enter Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, EditCustomerModalComponent_ng_container_7_div_30_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, EditCustomerModalComponent_ng_container_7_div_31_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, EditCustomerModalComponent_ng_container_7_div_32_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCustomerModalComponent_ng_container_7_Template_div_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38); return _r20.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, EditCustomerModalComponent_ng_container_7_div_42_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, EditCustomerModalComponent_ng_container_7_div_43_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Enter IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, EditCustomerModalComponent_ng_container_7_div_48_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Select Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Select Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("firstName"))("is-valid", ctx_r2.isControlValid("firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("minlength", "firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("maxlength", "firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("lastName"))("is-valid", ctx_r2.isControlValid("lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("minlength", "lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("maxLength", "lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("userName"))("is-valid", ctx_r2.isControlValid("userName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("userName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "userName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("email"))("is-valid", ctx_r2.isControlValid("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("email", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("dob"))("is-valid", ctx_r2.isControlValid("dob"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("dob"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "dob"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("ipAddress"))("is-valid", ctx_r2.isControlValid("ipAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("ipAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("gender"));
} }
function EditCustomerModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCustomerModalComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r26.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r3.formGroup.invalid);
} }
const EMPTY_CUSTOMER = {
    id: undefined,
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    gender: 'Female',
    status: 2,
    dob: undefined,
    dateOfBbirth: '',
    ipAddress: '251.237.126.210',
    type: 2
};
class EditCustomerModalComponent {
    constructor(customersService, fb, modal) {
        this.customersService = customersService;
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.isLoading$ = this.customersService.isLoading$;
        this.loadCustomer();
    }
    loadCustomer() {
        if (!this.id) {
            this.customer = EMPTY_CUSTOMER;
            this.loadForm();
        }
        else {
            const sb = this.customersService.getItemById(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
                this.modal.dismiss(errorMessage);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(EMPTY_CUSTOMER);
            })).subscribe((customer) => {
                this.customer = customer;
                this.loadForm();
            });
            this.subscriptions.push(sb);
        }
    }
    loadForm() {
        this.formGroup = this.fb.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])],
            email: [this.customer.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            dob: [this.customer.dateOfBbirth, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
            userName: [this.customer.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            gender: [this.customer.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ipAddress: [this.customer.ipAddress],
            type: [this.customer.type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    save() {
        this.prepareCustomer();
        if (this.customer.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.customersService.update(this.customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.customer);
        })).subscribe(res => this.customer = res);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.customersService.create(this.customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.customer);
        })).subscribe((res) => this.customer = res);
        this.subscriptions.push(sbCreate);
    }
    prepareCustomer() {
        const formData = this.formGroup.value;
        this.customer.dob = new Date(formData.dob);
        this.customer.email = formData.email;
        this.customer.firstName = formData.firstName;
        this.customer.dateOfBbirth = formData.dob;
        this.customer.ipAddress = formData.ipAddress;
        this.customer.lastName = formData.lastName;
        this.customer.type = +formData.type;
        this.customer.userName = formData.userName;
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
}
EditCustomerModalComponent.??fac = function EditCustomerModalComponent_Factory(t) { return new (t || EditCustomerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
EditCustomerModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EditCustomerModalComponent, selectors: [["app-edit-customer-modal"]], inputs: { id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] }
        ])], decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "404px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-4"], [1, "form-label"], ["type", "text", "name", "firstName", "placeholder", "First Name", "autocomplete", "off", "formControlName", "firstName", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "autocomplete", "off", "formControlName", "lastName", 1, "form-control", "form-control-lg", "form-control-solid", "is-invalid"], ["type", "text", "name", "userName", "placeholder", "Login", "autocomplete", "off", "formControlName", "userName", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "email", "name", "email", "placeholder", "Email", "autocomplete", "off", "formControlName", "email", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "input-group", "input-group-solid"], ["type", "text", "name", "dob", "autocomplete", "off", "placeholder", "dd/mm/yyyy", "ngbDatepicker", "", "formControlName", "dob", "readonly", "true", 1, "form-control", "form-control-lg", "form-control-solid"], ["d", "ngbDatepicker"], [1, "input-group-append", 3, "click"], [1, "input-group-text"], [1, "text-dark-50", "flaticon-calendar"], ["type", "text", "name", "ipAddress", "placeholder", "255.255.255.0", "autocomplete", "off", "formControlName", "ipAddress", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "gender", "formControlName", "gender", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "Female"], ["value", "Male"], [1, "feedback"], ["name", "type", "formControlName", "type", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "1"], ["value", "2"], [1, "valid-feedback"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function EditCustomerModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EditCustomerModalComponent_ng_container_3_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, EditCustomerModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditCustomerModalComponent_ng_container_7_Template, 74, 43, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditCustomerModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EditCustomerModalComponent_ng_container_11_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWN1c3RvbWVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditCustomerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-customer-modal',
                templateUrl: './edit-customer-modal.component.html',
                styleUrls: ['./edit-customer-modal.component.scss'],
                // NOTE: For this example we are only providing current component, but probably
                // NOTE: you will w  ant to provide your main App Module
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"] }
                ]
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_6__["CustomersService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pres":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/remarks/delete-remarks-modal/delete-remarks-modal.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DeleteRemarksModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRemarksModalComponent", function() { return DeleteRemarksModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteRemarksModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteRemarksModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Remarks are deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteRemarksModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete selected remarks?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteRemarksModalComponent {
    constructor(remarksService, modal) {
        this.remarksService = remarksService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteRemarks() {
        this.isLoading = true;
        const sb = this.remarksService.deleteItems(this.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteRemarksModalComponent.??fac = function DeleteRemarksModalComponent_Factory(t) { return new (t || DeleteRemarksModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteRemarksModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteRemarksModalComponent, selectors: [["app-delete-remarks-modal"]], inputs: { ids: "ids" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteRemarksModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteRemarksModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Remarks Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteRemarksModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteRemarksModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteRemarksModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteRemarksModalComponent_Template_button_click_12_listener() { return ctx.deleteRemarks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcmVtYXJrcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteRemarksModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-remarks-modal',
                templateUrl: './delete-remarks-modal.component.html',
                styleUrls: ['./delete-remarks-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qvwI":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/remarks/delete-remark-modal/delete-remark-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DeleteRemarkModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRemarkModalComponent", function() { return DeleteRemarkModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DeleteRemarkModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteRemarkModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Remark is deleting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function DeleteRemarkModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Are you sure to permanently delete this remark?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
class DeleteRemarkModalComponent {
    constructor(remraksService, modal) {
        this.remraksService = remraksService;
        this.modal = modal;
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    deleteRemark() {
        this.isLoading = true;
        const sb = this.remraksService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.modal.dismiss(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
DeleteRemarkModalComponent.??fac = function DeleteRemarkModalComponent_Factory(t) { return new (t || DeleteRemarkModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
DeleteRemarkModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeleteRemarkModalComponent, selectors: [["app-delete-remark-modal"]], inputs: { id: "id" }, decls: 14, vars: 3, consts: [[4, "ngIf"], [1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function DeleteRemarkModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DeleteRemarkModalComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Remark Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeleteRemarkModalComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DeleteRemarkModalComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteRemarkModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DeleteRemarkModalComponent_Template_button_click_12_listener() { return ctx.deleteRemark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcmVtYXJrLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteRemarkModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-remark-modal',
                templateUrl: './delete-remark-modal.component.html',
                styleUrls: ['./delete-remark-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["RemarksService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ssbh":
/*!**********************************************************************!*\
  !*** ./src/app/modules/e-commerce/_services/fake/remarks.service.ts ***!
  \**********************************************************************/
/*! exports provided: RemarksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksService", function() { return RemarksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_fake/fake-helpers/http-extenstions */ "QDgw");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");








class RemarksService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/productRemarks`;
    }
    // READ
    find(tableState) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response.filter(el => el.carId === tableState.entityId), tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
RemarksService.??fac = function RemarksService_Factory(t) { return new (t || RemarksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RemarksService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RemarksService, factory: RemarksService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RemarksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "swVP":
/*!*******************************************************!*\
  !*** ./src/app/modules/e-commerce/_services/index.ts ***!
  \*******************************************************/
/*! exports provided: CustomersService, ProductsService, SpecificationsService, RemarksService, DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_customers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake/customers.service */ "Y0bP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return _fake_customers_service__WEBPACK_IMPORTED_MODULE_0__["CustomersService"]; });

/* harmony import */ var _fake_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake/products.service */ "u8vR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _fake_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]; });

/* harmony import */ var _fake_specifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake/specifications.service */ "utg0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecificationsService", function() { return _fake_specifications_service__WEBPACK_IMPORTED_MODULE_2__["SpecificationsService"]; });

/* harmony import */ var _fake_remarks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake/remarks.service */ "ssbh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemarksService", function() { return _fake_remarks_service__WEBPACK_IMPORTED_MODULE_3__["RemarksService"]; });

/* harmony import */ var src_app_modules_asset_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/asset/_services/fake/deals.service */ "BfxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return src_app_modules_asset_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"]; });

// Services
 // You have to comment this, when your real back-end is done
 // You have to comment this, when your real back-end is done
 // You have to comment this, when your real back-end is done
 // You have to comment this, when your real back-end is done
 // You have to comment this, when your real back-end is done
// export { CustomersService } from './customers.service'; // You have to uncomment this, when your real back-end is done
// export { ProductsService } from './products.service'; // You have to uncomment this, when your real back-end is done
// export { SpecificationsService } from './specifications.service'; // You have to uncomment this, when your real back-end is done
// export { RemarksService } from './remarks.service'; // You have to uncomment this, when your real back-end is done


/***/ }),

/***/ "t4s3":
/*!************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_models/specification.dictionary.ts ***!
  \************************************************************************/
/*! exports provided: SPECIFICATIONS_DICTIONARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFICATIONS_DICTIONARY", function() { return SPECIFICATIONS_DICTIONARY; });
const SPECIFICATIONS_DICTIONARY = [
    'Seats',
    'Fuel Type',
    'Stock',
    'Door count',
    'Engine',
    'Transmission',
    'Drivetrain',
    'Combined MPG',
    'Warranty',
    'Wheels'
];


/***/ }),

/***/ "u8vR":
/*!***********************************************************************!*\
  !*** ./src/app/modules/e-commerce/_services/fake/products.service.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_fake/fake-helpers/http-extenstions */ "QDgw");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");








class ProductsService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/products`;
    }
    // READ
    find(tableState) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    updateStatusForItems(ids, status) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((products) => {
            return products.filter(c => ids.indexOf(c.id) > -1).map(c => {
                c.status = status;
                return c;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])((products) => {
            const tasks$ = [];
            products.forEach(product => {
                tasks$.push(this.update(product));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ProductsService.??fac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProductsService, factory: ProductsService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "uqEa":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/components/update-customers-status-modal/update-customers-status-modal.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: UpdateCustomersStatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomersStatusModalComponent", function() { return UpdateCustomersStatusModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function UpdateCustomersStatusModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateCustomersStatusModalComponent_tr_15_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateCustomersStatusModalComponent_tr_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateCustomersStatusModalComponent_tr_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function UpdateCustomersStatusModalComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, UpdateCustomersStatusModalComponent_tr_15_ng_container_7_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UpdateCustomersStatusModalComponent_tr_15_ng_container_8_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, UpdateCustomersStatusModalComponent_tr_15_ng_container_9_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-danger", customer_r2.status === 1)("label-light-success", customer_r2.status === 2)("label-light-primary", customer_r2.status === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 3);
} }
class UpdateCustomersStatusModalComponent {
    constructor(customersService, modal) {
        this.customersService = customersService;
        this.modal = modal;
        this.status = 2;
        this.customers = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadCustomers();
    }
    loadCustomers() {
        const sb = this.customersService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((res) => {
            this.customers = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    updateCustomersStatus() {
        this.isLoading = true;
        const sb = this.customersService.updateStatusForItems(this.ids, +this.status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), // Remove it from your code (just for showing loading)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.modal.close()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.isLoading = false;
        })).subscribe();
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
UpdateCustomersStatusModalComponent.??fac = function UpdateCustomersStatusModalComponent_Factory(t) { return new (t || UpdateCustomersStatusModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"])); };
UpdateCustomersStatusModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateCustomersStatusModalComponent, selectors: [["app-update-customers-status-modal"]], inputs: { ids: "ids" }, decls: 30, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "form", "modal-footer"], [1, "form-group", "mr-2"], ["name", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "form-group"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"], [1, "label", "label-lg", "label-inline"]], template: function UpdateCustomersStatusModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Status update for selected customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UpdateCustomersStatusModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "FIRSTNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "LASTNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UpdateCustomersStatusModalComponent_tr_15_Template, 10, 11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateCustomersStatusModalComponent_Template_select_ngModelChange_18_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Suspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateCustomersStatusModalComponent_Template_button_click_26_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UpdateCustomersStatusModalComponent_Template_button_click_28_listener() { return ctx.updateCustomersStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Update Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY3VzdG9tZXJzLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateCustomersStatusModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-customers-status-modal',
                templateUrl: './update-customers-status-modal.component.html',
                styleUrls: ['./update-customers-status-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "utg0":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_services/fake/specifications.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SpecificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationsService", function() { return SpecificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_fake/fake-helpers/http-extenstions */ "QDgw");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");








class SpecificationsService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/productSpecs`;
    }
    // READ
    find(tableState) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response.filter(el => el.carId === tableState.entityId), tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    deleteItems(ids = []) {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
SpecificationsService.??fac = function SpecificationsService_Factory(t) { return new (t || SpecificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SpecificationsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: SpecificationsService, factory: SpecificationsService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpecificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vWZh":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/customers/components/fetch-customers-modal/fetch-customers-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FetchCustomersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCustomersModalComponent", function() { return FetchCustomersModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FetchCustomersModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchCustomersModalComponent_tr_15_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchCustomersModalComponent_tr_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchCustomersModalComponent_tr_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function FetchCustomersModalComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, FetchCustomersModalComponent_tr_15_ng_container_7_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, FetchCustomersModalComponent_tr_15_ng_container_8_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, FetchCustomersModalComponent_tr_15_ng_container_9_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("label-light-danger", customer_r2.status === 1)("label-light-success", customer_r2.status === 2)("label-light-primary", customer_r2.status === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customer_r2.status === 3);
} }
class FetchCustomersModalComponent {
    constructor(customersService, modal) {
        this.customersService = customersService;
        this.modal = modal;
        this.customers = [];
        this.isLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadCustomers();
    }
    loadCustomers() {
        const sb = this.customersService.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe((res) => {
            this.customers = res.filter(c => this.ids.indexOf(c.id) > -1);
        });
        this.subscriptions.push(sb);
    }
    fetchSelected() {
        this.isLoading = true;
        // just imitation, call server for fetching data
        setTimeout(() => {
            this.isLoading = false;
            this.modal.close();
        }, 1000);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
FetchCustomersModalComponent.??fac = function FetchCustomersModalComponent_Factory(t) { return new (t || FetchCustomersModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"])); };
FetchCustomersModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FetchCustomersModalComponent, selectors: [["app-fetch-customers-modal"]], inputs: { ids: "ids" }, decls: 22, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body", "overlay", "overlay-block", "cursor-default"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"], [1, "overlay-layer"], [1, "spinner", "spinner-lg", "spinner-primary"], [1, "label", "label-lg", "label-inline"]], template: function FetchCustomersModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Fetch selected customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FetchCustomersModalComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "FIRSTNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "LASTNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, FetchCustomersModalComponent_tr_15_Template, 10, 11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchCustomersModalComponent_Template_button_click_18_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FetchCustomersModalComponent_Template_button_click_20_listener() { return ctx.fetchSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXRjaC1jdXN0b21lcnMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FetchCustomersModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-customers-modal',
                templateUrl: './fetch-customers-modal.component.html',
                styleUrls: ['./fetch-customers-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "w9dg":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/e-commerce/products/product-edit/specifications/edit-spec-modal/edit-spec-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EditSpecModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpecModalComponent", function() { return EditSpecModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_models/specification.dictionary */ "t4s3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services */ "swVP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function EditSpecModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditSpecModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditSpecModalComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" '", ctx_r6.specs[ctx_r6.spec.specId], "");
} }
function EditSpecModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EditSpecModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, EditSpecModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " specification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EditSpecModalComponent_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.spec.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.spec.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.spec.id);
} }
function EditSpecModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function EditSpecModalComponent_ng_container_7_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const sp_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](sp_r12);
} }
function EditSpecModalComponent_ng_container_7_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value was entered correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditSpecModalComponent_ng_container_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditSpecModalComponent_ng_container_7_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value should have at least 3 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditSpecModalComponent_ng_container_7_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value should have maximum 10000 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EditSpecModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Select Specification Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditSpecModalComponent_ng_container_7_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Please select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Specification Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Enter Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, EditSpecModalComponent_ng_container_7_div_17_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, EditSpecModalComponent_ng_container_7_div_18_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, EditSpecModalComponent_ng_container_7_div_19_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, EditSpecModalComponent_ng_container_7_div_20_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.specs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r2.isControlInvalid("value"))("is-valid", ctx_r2.isControlValid("value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isControlValid("value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("required", "value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("minlength", "value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlHasError("maxLength", "value"));
} }
function EditSpecModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditSpecModalComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r3.formGroup.invalid);
} }
const EMPTY_SPEC = {
    id: undefined,
    carId: undefined,
    specId: 1,
    specName: '',
    value: ''
};
class EditSpecModalComponent {
    constructor(specsService, fb, modal) {
        this.specsService = specsService;
        this.fb = fb;
        this.modal = modal;
        this.specs = _models_specification_dictionary__WEBPACK_IMPORTED_MODULE_4__["SPECIFICATIONS_DICTIONARY"];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.isLoading$ = this.specsService.isLoading$;
        this.loadSpecs();
    }
    loadSpecs() {
        if (!this.id) {
            this.spec = EMPTY_SPEC;
            this.spec.carId = this.productId;
            this.loadForm();
        }
        else {
            const sb = this.specsService.getItemById(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
                this.modal.dismiss(errorMessage);
                const empty = EMPTY_SPEC;
                empty.carId = this.productId;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(empty);
            })).subscribe((spec) => {
                this.spec = spec;
                this.loadForm();
            });
            this.subscriptions.push(sb);
        }
    }
    loadForm() {
        this.formGroup = this.fb.group({
            value: [this.spec.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10000)])],
            specId: [this.spec.specId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
        });
    }
    save() {
        this.prepareSpec();
        if (this.spec.id) {
            this.edit();
        }
        else {
            this.create();
        }
    }
    edit() {
        const sbUpdate = this.specsService.update(this.spec).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.spec);
        })).subscribe(res => this.spec = res);
        this.subscriptions.push(sbUpdate);
    }
    create() {
        const sbCreate = this.specsService.create(this.spec).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.modal.close();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorMessage) => {
            this.modal.dismiss(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.spec);
        })).subscribe((res) => this.spec = res);
        this.subscriptions.push(sbCreate);
    }
    prepareSpec() {
        const formData = this.formGroup.value;
        this.spec.carId = this.productId;
        this.spec.specId = formData.specId;
        this.spec.specName = this.specs[this.spec.specId];
        this.spec.value = formData.value;
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
}
EditSpecModalComponent.??fac = function EditSpecModalComponent_Factory(t) { return new (t || EditSpecModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["SpecificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"])); };
EditSpecModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EditSpecModalComponent, selectors: [["app-edit-spec-modal"]], inputs: { id: "id", productId: "productId" }, decls: 12, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-12"], ["name", "specId", "formControlName", "specId", 1, "form-control", "form-control-lg", "form-control-solid"], [3, "value", 4, "ngFor", "ngForOf"], [1, "feedback"], [1, "col-xl-12"], [1, "form-label"], ["type", "text", "name", "value", "placeholder", "Value", "autocomplete", "off", "formControlName", "value", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [3, "value"], [1, "valid-feedback"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function EditSpecModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EditSpecModalComponent_ng_container_3_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, EditSpecModalComponent_ng_container_5_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditSpecModalComponent_ng_container_7_Template, 21, 10, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditSpecModalComponent_Template_button_click_9_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EditSpecModalComponent_ng_container_11_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.spec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.spec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.spec);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNwZWMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditSpecModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-spec-modal',
                templateUrl: './edit-spec-modal.component.html',
                styleUrls: ['./edit-spec-modal.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_5__["SpecificationsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-e-commerce-e-commerce-module-es2015.js.map