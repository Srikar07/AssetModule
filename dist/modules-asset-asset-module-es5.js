(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-asset-asset-module"], {
    /***/
    "1Fuf": function Fuf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowRemainingDealsComponent", function () {
        return ShowRemainingDealsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShowRemainingDealsComponent = /*#__PURE__*/function () {
        function ShowRemainingDealsComponent() {
          _classCallCheck(this, ShowRemainingDealsComponent);

          this.open = false;
        }

        _createClass(ShowRemainingDealsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ShowRemainingDealsComponent;
      }();

      ShowRemainingDealsComponent.ɵfac = function ShowRemainingDealsComponent_Factory(t) {
        return new (t || ShowRemainingDealsComponent)();
      };

      ShowRemainingDealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowRemainingDealsComponent,
        selectors: [["app-show-remaining-deals"]],
        inputs: {
          showDetails: "showDetails"
        },
        decls: 0,
        vars: 0,
        template: function ShowRemainingDealsComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXJlbWFpbmluZy1kZWFscy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowRemainingDealsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show-remaining-deals',
            templateUrl: './show-remaining-deals.component.html',
            styleUrls: ['./show-remaining-deals.component.scss']
          }]
        }], function () {
          return [];
        }, {
          showDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "KQB9": function KQB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetModule", function () {
        return AssetModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./asset-routing.module */
      "kBzq");
      /* harmony import */


      var _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exisiting-deals/exisiting-deals.component */
      "QCmO");
      /* harmony import */


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./deals-dashboard/deals-dashboard.component */
      "ws06");
      /* harmony import */


      var _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./projects-dashboard/projects-dashboard.component */
      "ox/o");
      /* harmony import */


      var _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../_metronic/partials/content/widgets/widgets.module */
      "kFOB");
      /* harmony import */


      var _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./show-remaining-deals/show-remaining-deals.component */
      "1Fuf");
      /* harmony import */


      var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./create-deal/create-deal.component */
      "evJ9");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./review-deal-info/review-deal-info.component */
      "XbN/");
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");
      /* harmony import */


      var _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./google-auto-complete/google-auto-complete.component */
      "LPfA");
      /* harmony import */


      var _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./create-deal/components/edit-property-modal/edit-property-modal.component */
      "w0rC");

      var AssetModule = function AssetModule() {
        _classCallCheck(this, AssetModule);
      };

      AssetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AssetModule
      });
      AssetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AssetModule_Factory(t) {
          return new (t || AssetModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetModule, {
          declarations: [_exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"], _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DealsDashboardComponent"], _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsDashboardComponent"], _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__["ShowRemainingDealsComponent"], _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__["CreateDealComponent"], _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__["ReviewDealInfoComponent"], _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__["GoogleAutoCompleteComponent"], _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditPropertyModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"], _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DealsDashboardComponent"], _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsDashboardComponent"], _show_remaining_deals_show_remaining_deals_component__WEBPACK_IMPORTED_MODULE_12__["ShowRemainingDealsComponent"], _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_13__["CreateDealComponent"], _review_deal_info_review_deal_info_component__WEBPACK_IMPORTED_MODULE_18__["ReviewDealInfoComponent"], _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_20__["GoogleAutoCompleteComponent"], _create_deal_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditPropertyModalComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["CRUDTableModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"], _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LPfA": function LPfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAutoCompleteComponent", function () {
        return GoogleAutoCompleteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["addresstext"];

      var GoogleAutoCompleteComponent = /*#__PURE__*/function () {
        function GoogleAutoCompleteComponent() {
          _classCallCheck(this, GoogleAutoCompleteComponent);

          this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(GoogleAutoCompleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getPlaceAutocomplete();
          }
        }, {
          key: "getPlaceAutocomplete",
          value: function getPlaceAutocomplete() {
            var _this = this;

            var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
              //componentRestrictions: { country: 'US' },
              types: [this.adressType] // 'establishment' / 'address' / 'geocode'

            });
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
              var place = autocomplete.getPlace();

              _this.invokeEvent(place);
            });
          }
        }, {
          key: "invokeEvent",
          value: function invokeEvent(place) {
            this.setAddress.emit(place);
          }
        }]);

        return GoogleAutoCompleteComponent;
      }();

      GoogleAutoCompleteComponent.ɵfac = function GoogleAutoCompleteComponent_Factory(t) {
        return new (t || GoogleAutoCompleteComponent)();
      };

      GoogleAutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GoogleAutoCompleteComponent,
        selectors: [["app-google-auto-complete"]],
        viewQuery: function GoogleAutoCompleteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addresstext = _t.first);
          }
        },
        inputs: {
          adressType: "adressType",
          autocompleteInput: "autocompleteInput"
        },
        outputs: {
          setAddress: "setAddress"
        },
        decls: 2,
        vars: 1,
        consts: [["type", "text", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel2", "data-keyboard", "false", 1, "form-control", 2, "border", "1px solid #ccc", "width", "200px", "z-index", "2", 3, "ngModel", "ngModelChange"], ["addresstext", ""]],
        template: function GoogleAutoCompleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoogleAutoCompleteComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.autocompleteInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.autocompleteInput);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29nbGUtYXV0by1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAutoCompleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-google-auto-complete',
            templateUrl: './google-auto-complete.component.html',
            styleUrls: ['./google-auto-complete.component.scss']
          }]
        }], function () {
          return [];
        }, {
          adressType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          setAddress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          addresstext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addresstext']
          }],
          autocompleteInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "QCmO": function QCmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExisitingDealsComponent", function () {
        return ExisitingDealsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/fake/deals.service */
      "BfxI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../_metronic/shared/crud-table/components/sort-icon/sort-icon.component */
      "xGIk");
      /* harmony import */


      var _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../_metronic/shared/crud-table/components/paginator/paginator.component */
      "gBr1");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");

      function ExisitingDealsComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.deleteSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.fetchSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fetch Selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_ng_container_20_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.updateStatusForSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Update Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.grouping.getSelectedRowsCount());
        }
      }

      function ExisitingDealsComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExisitingDealsComponent_tr_49_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var deal_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.navigateToReviewPage(deal_r6.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deal_r6 = ctx.$implicit;

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
        }
      }

      var ExisitingDealsComponent = /*#__PURE__*/function () {
        function ExisitingDealsComponent(fb, modalService, dealsService, router) {
          _classCallCheck(this, ExisitingDealsComponent);

          this.fb = fb;
          this.modalService = modalService;
          this.dealsService = dealsService;
          this.router = router;
          this.subscriptions = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        }

        _createClass(ExisitingDealsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.filterForm();
            this.searchForm();
            this.dealsService.fetch();
            this.grouping = this.dealsService.grouping;
            this.paginator = this.dealsService.paginator;
            this.sorting = this.dealsService.sorting;
            var sb = this.dealsService.isLoading$.subscribe(function (res) {
              return _this2.isLoading = res;
            });
            this.subscriptions.push(sb);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          } // filtration

        }, {
          key: "filterForm",
          value: function filterForm() {
            var _this3 = this;

            this.filterGroup = this.fb.group({
              status: [''],
              type: [''],
              searchTerm: ['']
            });
            this.subscriptions.push(this.filterGroup.controls.status.valueChanges.subscribe(function () {
              return _this3.filter();
            }));
            this.subscriptions.push(this.filterGroup.controls.type.valueChanges.subscribe(function () {
              return _this3.filter();
            }));
          }
        }, {
          key: "filter",
          value: function filter() {
            var filter = {};
            var status = this.filterGroup.get('status').value;

            if (status) {
              filter['status'] = status;
            }

            var type = this.filterGroup.get('type').value;

            if (type) {
              filter['type'] = type;
            }

            this.dealsService.patchState({
              filter: filter
            });
          } // search

        }, {
          key: "searchForm",
          value: function searchForm() {
            var _this4 = this;

            this.searchGroup = this.fb.group({
              searchTerm: ['']
            });
            var searchEvent = this.searchGroup.controls.searchTerm.valueChanges.pipe(
            /*
            The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
            we are limiting the amount of server requests emitted to a maximum of one every 150ms
            */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function (val) {
              return _this4.search(val);
            });
            this.subscriptions.push(searchEvent);
          }
        }, {
          key: "search",
          value: function search(searchTerm) {
            console.log(searchTerm);
            this.dealsService.patchState({
              searchTerm: searchTerm.toLowerCase()
            });
          } // sorting

        }, {
          key: "sort",
          value: function sort(column) {
            var sorting = this.sorting;
            var isActiveColumn = sorting.column === column;

            if (!isActiveColumn) {
              sorting.column = column;
              sorting.direction = 'asc';
            } else {
              sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
            }

            this.dealsService.patchState({
              sorting: sorting
            });
          } // pagination

        }, {
          key: "paginate",
          value: function paginate(paginator) {
            this.dealsService.patchState({
              paginator: paginator
            });
          }
        }, {
          key: "updateStatusForSelected",
          value: function updateStatusForSelected() {}
        }, {
          key: "delete",
          value: function _delete(id) {}
        }, {
          key: "edit",
          value: function edit(id) {}
        }, {
          key: "create",
          value: function create() {}
        }, {
          key: "deleteSelected",
          value: function deleteSelected() {}
        }, {
          key: "fetchSelected",
          value: function fetchSelected() {}
        }, {
          key: "navigateToReviewPage",
          value: function navigateToReviewPage(dealId) {
            this.router.navigate(['asset/reviewDealInfo/' + dealId]);
          }
        }]);

        return ExisitingDealsComponent;
      }();

      ExisitingDealsComponent.ɵfac = function ExisitingDealsComponent_Factory(t) {
        return new (t || ExisitingDealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ExisitingDealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExisitingDealsComponent,
        selectors: [["app-exisiting-deals"]],
        decls: 52,
        vars: 21,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["routerLink", "/asset/createNewDeal", "routerLinkActive", "active", 1, "btn", "btn-primary"], [1, "menu-bullet", "menu-bullet-dot"], [1, "menu-text"], [1, "card-body"], [1, "form", "form-label-right"], [1, "form-group", "row"], [1, "col-lg-8", 3, "formGroup"], ["type", "text", "name", "searchText", "placeholder", "Search", "value", "", "formControlName", "searchTerm", 1, "form-control"], [1, "form-text", "text-muted"], [4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], ["column", "id", 3, "activeColumn", "activeDirection", "sort"], ["column", "name", 3, "activeColumn", "activeDirection", "sort"], ["column", "type", 3, "activeColumn", "activeDirection", "sort"], ["column", "businessUnitName", 3, "activeColumn", "activeDirection", "sort"], ["column", "statusName", 3, "activeColumn", "activeDirection", "sort"], ["column", "investmentLead", 3, "activeColumn", "activeDirection", "sort"], ["column", "startDate", 3, "activeColumn", "activeDirection", "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", 3, "paginator", "isLoading", "paginate"], [1, "form"], [1, "row", "align-items-center", "form-group-actions", "margin-top-20", "margin-bottom-20"], [1, "col-xl-12"], [1, "form-group", "form-group-inline"], [1, "form-label", "form-label-no-wrap"], [1, "font-bold", "font-danger"], ["type", "button", 1, "btn", "btn-danger", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bolder", "font-size-sm", "mr-1", 3, "click"], [1, "fa", "fa-stream"], [1, "fa", "fa-sync-alt"], [1, "label", "label-lg", "label-inline"], ["title", "Redirect to Deal", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"]],
        template: function ExisitingDealsComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_27_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " NAME ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-sort-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_30_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " TYPE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-sort-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_33_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " BUSINESS UNIT NAME ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-sort-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_36_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " PROJECT STATUS NAME ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-sort-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_39_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " INVESTMENT LEAD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-sort-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_42_listener($event) {
              return ctx.sort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " START DATE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "app-sort-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function ExisitingDealsComponent_Template_app_sort_icon_sort_45_listener($event) {
              return ctx.sort($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paginate", function ExisitingDealsComponent_Template_app_paginator_paginate_51_listener($event) {
              return ctx.paginate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _metronic_shared_crud_table_components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_7__["SortIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _metronic_shared_crud_table_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__["PaginatorComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGlzaXRpbmctZGVhbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExisitingDealsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-exisiting-deals',
            templateUrl: './exisiting-deals.component.html',
            styleUrls: ['./exisiting-deals.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_4__["DealsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qrho": function Qrho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersTable", function () {
        return UsersTable;
      });

      var UsersTable = function UsersTable() {
        _classCallCheck(this, UsersTable);
      };

      UsersTable.users = [{
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
      }];
      /***/
    },

    /***/
    "XbN/": function XbN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewDealInfoComponent", function () {
        return ReviewDealInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_fake/fake-server/deals.table */
      "knAO");
      /* harmony import */


      var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/node.service */
      "k5BX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");

      var ReviewDealInfoComponent = /*#__PURE__*/function () {
        function ReviewDealInfoComponent(route, nodeService) {
          _classCallCheck(this, ReviewDealInfoComponent);

          this.route = route;
          this.nodeService = nodeService;
          this.deals = _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__["DealsTable"].deals;
        }

        _createClass(ReviewDealInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var dealId = this.route.snapshot.paramMap.get('id'); //console.log(dealId);
            //console.log(this.deals);

            this.reviewInfo = this.deals.find(function (x) {
              return x.id == dealId;
            });

            if (this.reviewInfo === 'undefined') {
              this.reviewInfo = null;
            }

            if (this.reviewInfo == null) {
              this.reviewInfo.name = "Test";
              this.reviewInfo.businessUnitName = "Test";
              this.reviewInfo.startDate = "Test";
              this.reviewInfo.id = "5";
            }

            this.nodeService.node$.subscribe(function (node) {
              _this5.nodeService.addNode(_this5.reviewInfo);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ReviewDealInfoComponent;
      }();

      ReviewDealInfoComponent.ɵfac = function ReviewDealInfoComponent_Factory(t) {
        return new (t || ReviewDealInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]));
      };

      ReviewDealInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReviewDealInfoComponent,
        selectors: [["app-review-deal-info"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])],
        decls: 47,
        vars: 7,
        consts: [[1, "d-flex", "flex-row"], ["id", "kt_profile_aside", 1, "flex-row-auto", "offcanvas-mobile", "w-300px", "w-xl-350px"], [1, "card", "card-custom", "card-stretch"], [1, "card-body", "pt-4"], [1, "py-9"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "font-weight-bold", "mr-2"], [1, "text-muted", "text-hover-primary"], [1, "text-muted"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "navi", "navi-bold", "navi-hover", "navi-active", "navi-link-rounded"], [1, "navi-item", "mb-2"], ["routerLink", "./Default", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "navi-icon", "mr-2"], ["cacheSVG", "true", 1, "svg-icon", 3, "inlineSVG"], [1, "navi-text", "font-size-lg"], ["routerLink", "./dealBasicInformation", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "./dealDocuments", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "./properties", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "flex-row-fluid", "ml-lg-8"]],
        template: function ReviewDealInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctZGVhbC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewDealInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-review-deal-info',
            templateUrl: './review-deal-info.component.html',
            providers: [_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]],
            styleUrls: ['./review-deal-info.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "evJ9": function evJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateDealComponent", function () {
        return CreateDealComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../assets/js/components/wizard */
      "p8Fu");
      /* harmony import */


      var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../assets/js/components/util */
      "rh/z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_fake/fake-server/deals.table */
      "knAO");
      /* harmony import */


      var _components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/edit-property-modal/edit-property-modal.component */
      "w0rC");
      /* harmony import */


      var _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_fake/fake-server/ownerships.table */
      "vnjQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");

      var _c0 = ["wizard"];

      function CreateDealComponent_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dealType_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dealType_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dealType_r7.name);
        }
      }

      function CreateDealComponent_div_71_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Deal Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateDealComponent_div_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateDealComponent_div_71_div_1_Template, 2, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoDealTypeval.errors == null ? null : ctx_r2.basicInfoDealTypeval.errors.required);
        }
      }

      function CreateDealComponent_div_76_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Deal Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateDealComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateDealComponent_div_76_div_1_Template, 2, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.basicInfoFormval.name.errors.required);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "active": a0
        };
      };

      function CreateDealComponent_tr_126_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_tr_126_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var dealProperty_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.edit(dealProperty_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_tr_126_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var dealProperty_r10 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.deletePropertyRecord(dealProperty_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dealProperty_r10 = ctx.$implicit;

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
        }
      }

      function CreateDealComponent_ngx_dropzone_preview_134_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreateDealComponent_ngx_dropzone_preview_134_Template_ngx_dropzone_preview_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var f_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.onRemove(f_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r15.name);
        }
      }

      function CreateDealComponent_tr_167_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r18.name);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c3 = function _c3() {
        return {
          standalone: true
        };
      };

      var User = function User(name) {
        _classCallCheck(this, User);

        this.name = name;
      };

      var CreateDealComponent = /*#__PURE__*/function () {
        function CreateDealComponent(formBuilder, router, zone, modalService) {
          _classCallCheck(this, CreateDealComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.zone = zone;
          this.modalService = modalService;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
          this.submitted = false;
          this.options = [new User('Mary'), new User('Shelley'), new User('Igor'), new User('Srikar'), new User('Aman'), new User('Palwinder'), new User('Anthony'), new User('Sunaiana'), new User('Ali'), new User('Saniya'), new User('Sarah'), new User('Vineeth'), new User('Mohammad'), new User('Jermain')];
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
            cccvv: '123'
          };
          this.newDealInfo = {
            name: '',
            dealType: '',
            //ownership: '',
            //assetManager: '',
            investmentLead: '',
            legalLead: '',
            propertyManager: '',
            properties: []
          };
          this.files = [];
          this.property = {};
          this.drpOwnership = _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_7__["OwnershipsTable"].ownerships;
          this.drpDealTypes = [{
            id: 1,
            name: 'Acquisition'
          }, {
            id: 2,
            name: 'Disposition'
          }, {
            id: 3,
            name: 'Development'
          }];
          this.title = 'reactive-form-validation-in-angular8';
        }

        _createClass(CreateDealComponent, [{
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files;

            //console.log(event);
            (_this$files = this.files).push.apply(_this$files, _toConsumableArray(event.addedFiles));
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            //console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
          }
          /*########### Form ###########*/
          //basicInfoForm = this.formBuilder.group({
          //    dealType: ['', [Validators.required]]
          //})

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

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
              dealType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this6.filter(name) : _this6.options.slice();
            }));
          }
        }, {
          key: "filter",
          value: function filter(name) {
            return this.options.filter(function (option) {
              return option.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }, {
          key: "displayFn",
          value: function displayFn(user) {
            return user ? user.name : undefined;
          } // Choose city using select dropdown

        }, {
          key: "changeDealType",
          value: function changeDealType(e) {
            //console.log(e.value)
            this.newDealInfo.dealType.get('skilltwo').setValue(e.target.value, {
              onlySelf: true
            });
          }
        }, {
          key: "basicInfoFormval",
          get: function get() {
            return this.basicInfoForm.controls;
          }
        }, {
          key: "basicInfoDealTypeval",
          get: function get() {
            return this.basicInfoForm.get('dealType');
          } //this.user.fullName='';

        }, {
          key: "signup",
          value: function signup() {
            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            }

            alert('form fields are validated successfully!');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            // Initialize form wizard
            this.wizard = new _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_1__["default"](this.el.nativeElement, {
              startStep: 1
            }); // Validation before going to next page
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

            this.wizard.on('change', function (wizardObj) {
              //console.log(JSON.stringify(this.newDealInfo))
              if (wizardObj.currentStep == 1) {
                //alert('form fields are validated successfully!');
                if (_this7.basicInfoForm.invalid) {
                  wizardObj.stop();
                }
              }

              setTimeout(function () {
                _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].scrollTop();
              }, 500);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;

            if (!this.basicInfoForm.invalid) {
              alert('Successfully Created a new Deal');
              this.newDealInfo.id = '101';

              _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_5__["DealsTable"].deals.push(this.newDealInfo);

              this.router.navigate(['asset/reviewDealInfo/101']);
            } //alert(JSON.stringify(this.newDealInfo))

          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.wizard = undefined;
          }
        }, {
          key: "getAddress",
          value: function getAddress(place) {
            var _this8 = this;

            this.address = place['formatted_address'];
            this.phone = this.getPhone(place);
            this.formattedAddress = place['formatted_address'];
            this.zone.run(function () {
              return _this8.formattedAddress = place['formatted_address'];
            });
          } //getEstablishmentAddress(place: object) {
          //    this.establishmentAddress = place['formatted_address'];
          //    this.phone = this.getPhone(place);
          //    this.formattedEstablishmentAddress = place['formatted_address'];
          //    this.zone.run(() => {
          //        this.formattedEstablishmentAddress = place['formatted_address'];
          //        this.phone = place['formatted_phone_number'];
          //    });
          //}

        }, {
          key: "getAddrComponent",
          value: function getAddrComponent(place, componentTemplate) {
            var result;

            for (var i = 0; i < place.address_components.length; i++) {
              var addressType = place.address_components[i].types[0];

              if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
              }
            }

            return;
          }
        }, {
          key: "getStreetNumber",
          value: function getStreetNumber(place) {
            var COMPONENT_TEMPLATE = {
              street_number: 'short_name'
            },
                streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return streetNumber;
          }
        }, {
          key: "getStreet",
          value: function getStreet(place) {
            var COMPONENT_TEMPLATE = {
              route: 'long_name'
            },
                street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return street;
          }
        }, {
          key: "getCity",
          value: function getCity(place) {
            var COMPONENT_TEMPLATE = {
              locality: 'long_name'
            },
                city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return city;
          }
        }, {
          key: "getState",
          value: function getState(place) {
            var COMPONENT_TEMPLATE = {
              administrative_area_level_1: 'short_name'
            },
                state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return state;
          }
        }, {
          key: "getDistrict",
          value: function getDistrict(place) {
            var COMPONENT_TEMPLATE = {
              administrative_area_level_2: 'short_name'
            },
                state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return state;
          }
        }, {
          key: "getCountryShort",
          value: function getCountryShort(place) {
            var COMPONENT_TEMPLATE = {
              country: 'short_name'
            },
                countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return countryShort;
          }
        }, {
          key: "getCountry",
          value: function getCountry(place) {
            var COMPONENT_TEMPLATE = {
              country: 'long_name'
            },
                country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return country;
          }
        }, {
          key: "getPostCode",
          value: function getPostCode(place) {
            var COMPONENT_TEMPLATE = {
              postal_code: 'long_name'
            },
                postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return postCode;
          }
        }, {
          key: "getPhone",
          value: function getPhone(place) {
            var COMPONENT_TEMPLATE = {
              formatted_phone_number: 'formatted_phone_number'
            },
                phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return phone;
          }
        }, {
          key: "insertProperty",
          value: function insertProperty() {
            this.property.propertyAddressString = this.formattedAddress;
            alert(this.formattedAddress);
            this.newDealInfo.properties.push(this.property);
            this.formattedAddress = "";
            this.property = {};
          }
        }, {
          key: "deletePropertyRecord",
          value: function deletePropertyRecord(property) {
            var _this9 = this;

            this.newDealInfo.properties.forEach(function (value, index) {
              if (value.id == property.id) _this9.newDealInfo.properties.splice(index, 1);
            });
          }
        }, {
          key: "create",
          value: function create() {
            this.edit(undefined);
          }
        }, {
          key: "edit",
          value: function edit(property) {
            var _this10 = this;

            var modalRef = this.modalService.open(_components_edit_property_modal_edit_property_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditPropertyModalComponent"], {
              size: 'xl'
            });
            modalRef.componentInstance.propertyInput = property;
            modalRef.componentInstance.newDealInfo = this.newDealInfo; //modalRef.componentInstance.id = 10;
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

            modalRef.result.then(function (response) {
              console.log(response);
              _this10.newDealInfo.properties = response; //this.zone.run(() => {
              //    this.reloadData();
              //})

              console.log(_this10.newDealInfo);

              _this10.reloadData();
            }); //this.reloadData()
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            this.newDealInfo.properties = _toConsumableArray(this.newDealInfo.properties);
            this.newDealInfo.properties = _toConsumableArray(this.newDealInfo.properties);
            this.newDealInfo.properties = _toConsumableArray(this.newDealInfo.properties);
          }
        }]);

        return CreateDealComponent;
      }();

      CreateDealComponent.ɵfac = function CreateDealComponent_Factory(t) {
        return new (t || CreateDealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]));
      };

      CreateDealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateDealComponent,
        selectors: [["app-create-deal"]],
        viewQuery: function CreateDealComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
          }
        },
        decls: 177,
        vars: 31,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["id", "kt_wizard_v2", "data-wizard-state", "step-first", 1, "wizard", "wizard-2"], ["wizard", ""], [1, "wizard-nav", "border-right", "py-8", "px-8", "py-lg-20", "px-lg-10"], [1, "wizard-steps"], ["href", "javascript:;", "data-wizard-type", "step", "data-wizard-state", "current", 1, "wizard-step"], [1, "wizard-wrapper"], [1, "wizard-icon"], [1, "svg-icon", "svg-icon-3x", 3, "inlineSVG"], [1, "wizard-label"], [1, "wizard-title"], [1, "wizard-desc"], ["href", "javascript:;", "data-wizard-type", "step", 1, "wizard-step"], [1, "wizard-body", "py-8", "px-8", "py-lg-20", "px-lg-10"], [1, "row"], [1, "offset-xxl-2", "col-xxl-8", "offset-md-2", "col-md-8"], ["id", "kt_form", 1, "form", 3, "formGroup"], ["data-wizard-type", "step-content", "data-wizard-state", "current", 1, "pb-5"], [1, "mb-10", "font-weight-bold", "text-dark"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-wizard-v2__form"], [1, "form-group"], ["name", "dealType", "formControlName", "dealType", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "0", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "name", "name", "name", "placeholder", "", "value", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["data-wizard-type", "step-content", 1, "pb-5"], [1, "col-xl-12"], ["type", "text", "name", "investmentLead", "placeholder", "Investment Lead", "value", "", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-text", "text-muted"], ["type", "text", "name", "postcode", "placeholder", "Legal Lead", "value", "newDealInfo.legalLead", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "card-toolbar"], ["title", "Edit Property", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-bordered", "table-striped", "table-head-custom", "table-vertical-center", "overflow-hidden", "w-auto"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "expandable", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "border-bottom", "mb-5", "pb-5"], [1, "font-weight-bolder", "mb-3"], [1, "line-height-xl"], [1, "table", "table-striped", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "border-top", "pt-10"], [1, "mr-2"], ["data-wizard-type", "action-prev", 1, "btn", "btn-light-primary", "font-weight-bold", "text-uppercase", "px-9", "py-4"], ["data-wizard-type", "action-submit", 1, "btn", "btn-success", "font-weight-bold", "text-uppercase", "px-9", "py-4", 3, "click"], ["data-wizard-type", "action-next", 1, "btn", "btn-primary", "font-weight-bold", "text-uppercase", "px-9", "py-4"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngClass"], ["title", "Delete Property", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], [3, "removable", "removed"], ["scope", "row"]],
        template: function CreateDealComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_select_ngModelChange_67_listener($event) {
              return ctx.newDealInfo.dealType = $event;
            })("change", function CreateDealComponent_Template_select_change_67_listener($event) {
              return ctx.changeDealType($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_75_listener($event) {
              return ctx.newDealInfo.name = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_85_listener($event) {
              return ctx.newDealInfo.investmentLead = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateDealComponent_Template_input_ngModelChange_93_listener($event) {
              return ctx.newDealInfo.legalLead = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_a_click_101_listener() {
              return ctx.reloadData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_button_click_103_listener() {
              return ctx.create();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateDealComponent_Template_ngx_dropzone_change_131_listener($event) {
              return ctx.onSelect($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDealComponent_Template_div_click_173_listener() {
              return ctx.onSubmit();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_10__["InlineSVGDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["ɵb"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["NgxDropzonePreviewComponent"]],
        styles: [".wizard.wizard-2[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n  padding: 0;\n  flex: 0 0 400px;\n  width: 400px;\n  max-width: 100%;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  position: relative;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-right: 1.1rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B5B5C3;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n  fill: #B5B5C3;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%] {\n  color: #181C32;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-desc[_ngcontent-%COMP%] {\n  color: #7E8299;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%] {\n  color: #7E8299;\n  font-size: 1.25rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%] {\n  display: none;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%] {\n  background-color: #F3F6F9;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%] {\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3699FF !important;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n  fill: #3699FF !important;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]:after {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \" \";\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  position: absolute;\n  border-left-color: #F3F6F9;\n  border-width: 1rem;\n}\n.wizard.wizard-2[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n    flex: 0 0 325px;\n    width: 325px;\n  }\n}\n@media (max-width: 991.98px) {\n  .wizard.wizard-2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid #EBEDF3;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]:after {\n    content: none;\n  }\n  .wizard.wizard-2[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL3dpemFyZC93aXphcmQtMi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY3JlYXRlLWRlYWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9jb21wb25lbnRzL192YXJpYWJsZXMuYm9vdHN0cmFwLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9jb21wb25lbnRzL21peGlucy9fc3ZnLWljb24uc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDQyxhQUFBO0FDYkQ7QURnQkM7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBWGlCO0VBWWpCLGVBQUE7QUNkRjtBRGlCRTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDZkg7QURrQkc7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5R0V5WmdEO0FEemFwRDtBRGtCSTtFQUNDLGFBQUE7QUNoQkw7QURtQkk7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUdFZ1orQztBRGphcEQ7QURtQks7RUFDQyxjRTNCZ0I7QURVdEI7QUV0Qlk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZ3QmhCO0FFbEJnQjtFQUNJLDBCQUFBO0FGb0JwQjtBRGtCSTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDaEJMO0FEa0JLO0VBQ0MsY0VyQ2dCO0VGc0NoQixnQkFBQTtFQUNBLGlCQUFBO0FDaEJOO0FEbUJLO0VBQ0MsY0U5Q2dCO0FENkJ0QjtBRHFCSTtFQUNDLGNFbkRpQjtFRm9EakIsa0JBQUE7QUNuQkw7QURxQks7RUFDQyxhQUFBO0FDbkJOO0FEdUJJO0VBQ0MseUJFakVpQjtFRmtFakIseUdFMFcrQztBRC9YcEQ7QUR1Qks7RUFDQyx5R0V1VzhDO0FENVhwRDtBRHVCTTtFQUNDLHlCQUFBO0FDckJQO0FFM0RZO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtBRjZEaEI7QUV2RGdCO0VBQ0ksMEJBQUE7QUZ5RHBCO0FEc0JLO0VBQ0MsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkV6RmdCO0VGMEZoQixrQkFBQTtBQ3BCTjtBRDRCQztFQUNDLFdBQUE7QUMxQkY7QUdESTtFSm9DRjtJQUNDLGVBQUE7SUFDQSxZQW5IbUI7RUNvRnBCO0FBQ0Y7QUd2Qkk7RUo0REg7SUFDQyxjQUFBO0VDbENBO0VEcUNBO0lBQ0MsV0FBQTtJQUNBLGdDQUFBO0VDbkNEO0VEd0NJO0lBQ0MsYUFBQTtFQ3RDTDtFRDhDQTtJQUNDLFdBQUE7RUM1Q0Q7QUFDRiIsImZpbGUiOiJjcmVhdGUtZGVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBXaXphcmQgMlxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcbi8vXG5cbi8vIEluaXRpYWxpemF0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXMsIG1peGlucyBhbmQgZnVuY3Rpb25zXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xuXG5cbi8vIFZhcmlhYmxlc1xuJHdpemFyZC1uYXYtd2lkdGg6IDQwMHB4O1xuJHdpemFyZC1uYXYtd2lkdGgtc206IDMyNXB4O1xuXG4vLyBCYXNlXG4ud2l6YXJkLndpemFyZC0yIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHQvLyBOYXZcblx0LndpemFyZC1uYXYge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0ZmxleDogMCAwICR3aXphcmQtbmF2LXdpZHRoO1xuXHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aDtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cblx0XHQvLyBTdGVwc1xuXHRcdC53aXphcmQtc3RlcHMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0Ly8gU3RlcFxuXHRcdFx0LndpemFyZC1zdGVwIHtcblx0XHRcdFx0cGFkZGluZzogMC43NXJlbSAxLjVyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xuXG5cdFx0XHRcdC53aXphcmQtd3JhcHBlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC53aXphcmQtaWNvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjVyZW07XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjFyZW07XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcblxuXHRcdFx0XHRcdGkge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR0ZXh0LW11dGVkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdmctaWNvbiB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkdGV4dC1tdXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LndpemFyZC1sYWJlbCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGRhcms7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LndpemFyZC1kZXNjIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkZGFyay01MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQud2l6YXJkLWFycm93IHtcblx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXG5cdFx0XHRcdFx0Ji5sYXN0IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMDtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xuXG5cdFx0XHRcdFx0LndpemFyZC1pY29uIHtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XG5cblx0XHRcdFx0XHRcdGkge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN2Zy1pY29uIHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHByaW1hcnksIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0bGVmdDogMTAwJTtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdC1jb2xvcjogJGdyYXktMTAwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxcmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEJvZHlcblx0LndpemFyZC1ib2R5IHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG4vLyBDdXN0b20gZGVza3RvcCByYW5nZVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKGxnLCB4bCkge1xuXHQvLyBCYXNlXG5cdC53aXphcmQud2l6YXJkLTIge1xuXHRcdC8vIE5hdlxuXHRcdC53aXphcmQtbmF2IHtcblx0XHRcdGZsZXg6IDAgMCAkd2l6YXJkLW5hdi13aWR0aC1zbTtcblx0XHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aC1zbTtcblx0XHR9XG5cdH1cbn1cblxuLy8gVGFibGV0IGFuZCBtb2JpbGUgbW9kZVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG5cdC53aXphcmQud2l6YXJkLTIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXG5cdFx0Ly8gTmF2XG5cdFx0LndpemFyZC1uYXYge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcblxuXHRcdFx0LndpemFyZC1zdGVwc3tcblx0XHRcdFx0LndpemFyZC1zdGVwe1xuXHRcdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEJvZHlcblx0XHQud2l6YXJkLWJvZHkge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG4iLCIud2l6YXJkLndpemFyZC0yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYge1xuICBwYWRkaW5nOiAwO1xuICBmbGV4OiAwIDAgNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gaSB7XG4gIGNvbG9yOiAjQjVCNUMzO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2ZyBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICBmaWxsOiAjQjVCNUMzO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2Zzpob3ZlciBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC10aXRsZSB7XG4gIGNvbG9yOiAjMTgxQzMyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLWRlc2Mge1xuICBjb2xvcjogIzdFODI5OTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1hcnJvdyB7XG4gIGNvbG9yOiAjN0U4Mjk5O1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtYXJyb3cubGFzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGOTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWljb24ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtaWNvbiBpIHtcbiAgY29sb3I6ICMzNjk5RkYgIWltcG9ydGFudDtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1pY29uIC5zdmctaWNvbiBzdmcgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgZmlsbDogIzM2OTlGRiAhaW1wb3J0YW50O1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2Zzpob3ZlciBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjNGNkY5O1xuICBib3JkZXItd2lkdGg6IDFyZW07XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiB7XG4gICAgZmxleDogMCAwIDMyNXB4O1xuICAgIHdpZHRoOiAzMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC53aXphcmQud2l6YXJkLTIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFREYzO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgLndpemFyZC53aXphcmQtMiAud2l6YXJkLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiLy9cbi8vIEdsb2JhbCB2YXJpYWJsZXMgZm9yIEJvb3RzdHJhcCBjdXN0b21pemF0aW9uLlxuLy8gVG8gb3ZlcnJpZGUgYW55IEJvb3RzdHJhcCB2YXJpYWJsZSBzYWZlbHkgeW91IGNhbiB1c2UgX3ZhcmlhYmxlcy5kZW1vLnNjc3Ncbi8vXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIEJsYWNrIGNvbG9yXG4kYmxhY2s6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjMDAwMDAwICFkZWZhdWx0O1xuXG4vLyBXaGl0ZSBjb2xvclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcblxuLy8gR3JheSBjb2xvcnNcbiRncmF5LTEwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNGM0Y2RjkgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRUJFREYzICFkZWZhdWx0O1xuJGdyYXktMzAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I0U0RTZFRiAhZGVmYXVsdDtcbiRncmF5LTQwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNEMUQzRTAgIWRlZmF1bHQ7XG4kZ3JheS01MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjQjVCNUMzICFkZWZhdWx0O1xuJGdyYXktNjAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzdFODI5OSAhZGVmYXVsdDtcbiRncmF5LTcwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCM1RTYyNzggIWRlZmF1bHQ7XG4kZ3JheS04MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjM0Y0MjU0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzE4MUMzMiAhZGVmYXVsdDtcblxuLy8gRGFyayBjb2xvcnNcbiRkYXJrOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZGFyay03NTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktODAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRkYXJrLTY1OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS03MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGRhcmstNTA6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kZGFyay0yNTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gVGV4dCBtdXRlZFxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGdyYXktNTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gR3JheSBjb2xvcnMgbGlzdFxuJGdyYXlzOiAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG5cdFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4pICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gQm9vdHN0cmFwIHN0YW5kYXJkICYgZXh0ZW5kZWQgY29sb3JzXG4vLyBEYXJrIGNvbG9yc1xuJGRhcms6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRkYXJrICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcbiRkYXJrLWhvdmVyOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0ZGFya2VuKCRkYXJrLCAzJSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGRhcmstbGlnaHQ6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0ICAgICRncmF5LTQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kZGFyay1pbnZlcnNlOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBQcmltYXJ5IGNvbG9yc1xuJHByaW1hcnk6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMzNjk5RkYgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxuJHByaW1hcnktaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxODdERTQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHByaW1hcnktbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFMUYwRkYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHByaW1hcnktaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBTZWNvbmRhcnkgY29sb3JzXG4kc2Vjb25kYXJ5OiAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcbiRzZWNvbmRhcnktaG92ZXI6ICBcdFx0XHRcdFx0XHRcdFx0XHRkYXJrZW4oJGdyYXktMzAwLCA0JSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHNlY29uZGFyeS1saWdodDogIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kc2Vjb25kYXJ5LWludmVyc2U6XHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBTdWNjZXNzIGNvbG9yc1xuJHN1Y2Nlc3M6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxQkM1QkQgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxuJHN1Y2Nlc3MtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMwQkI3QUYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHN1Y2Nlc3MtbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNDOUY3RjUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHN1Y2Nlc3MtaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEluY28gY29sb3JzXG4kaW5mbzogICAgICAgICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjODk1MEZDICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcbiRpbmZvLWhvdmVyOiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCM3MzM3RUUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGluZm8tbGlnaHQ6ICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0I0VFRTVGRiAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kaW5mby1pbnZlcnNlOiBcdFx0IFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBXYXJuaW5nIGNvbG9yc1xuJHdhcm5pbmc6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkE4MDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxuJHdhcm5pbmctaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTlEMDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHdhcm5pbmctbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkY0REUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHdhcm5pbmctaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIERhbmdlciBjb2xvcnNcbiRkYW5nZXI6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRjY0RTYwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcbiRkYW5nZXItaG92ZXI6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRUUyRDQxICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRkYW5nZXItbGlnaHQ6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZFMkU1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRkYW5nZXItaW52ZXJzZTogICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBMaWdodCBjb2xvcnNcbiRsaWdodDogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxuJGxpZ2h0LWhvdmVyOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGxpZ2h0LWxpZ2h0OiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGxpZ2h0LWludmVyc2U6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JGdyYXktNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gV2hpdGUgY29sb3JzXG4kd2hpdGU6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxuJHdoaXRlLWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHdoaXRlLWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcbiR3aGl0ZS1pbnZlcnNlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcbiR0aGVtZS1jb2xvcnM6IChcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSwgIC8vIGN1c3RvbSBjb2xvciB0eXBlXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuKSAhZGVmYXVsdDtcblxuLy8gRXh0ZW5kZWQgaG92ZXIgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXG4kdGhlbWUtaG92ZXItY29sb3JzOiAoXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUtaG92ZXIsICAgLy8gY3VzdG9tIGNvbG9yIHR5cGVcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWhvdmVyLFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWhvdmVyLFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2Vzcy1ob3ZlcixcbiAgICBcImluZm9cIjogICAgICAgJGluZm8taG92ZXIsXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWhvdmVyLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLWhvdmVyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtaG92ZXIsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWhvdmVyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEV4dGVuZGVkIGludmVyc2UgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXG4kdGhlbWUtaW52ZXJzZS1jb2xvcnM6IChcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1pbnZlcnNlLFxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnktaW52ZXJzZSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeS1pbnZlcnNlLFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2Vzcy1pbnZlcnNlLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mby1pbnZlcnNlLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZy1pbnZlcnNlLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLWludmVyc2UsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodC1pbnZlcnNlLFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFyay1pbnZlcnNlXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEV4dGVuZGVkIG91dGxpbmUgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXG4kdGhlbWUtb3V0bGluZS1pbnZlcnNlLWNvbG9yczogKFxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLTc1LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkZGFyay03NSxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gRXh0ZW5kZWQgbGlnaHQgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXG4kdGhlbWUtbGlnaHQtY29sb3JzOiAoXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1saWdodCxcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWxpZ2h0LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWxpZ2h0LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2Vzcy1saWdodCxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8tbGlnaHQsXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWxpZ2h0LFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLWxpZ2h0LFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWxpZ2h0XG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEV4dGVuZGVkIHNoYWRvdyBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcbiR0aGVtZS1zaGFkb3ctY29sb3JzOiAoXG4gICAgXCJ3aGl0ZVwiOiAgICAgICRkYXJrLFxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkZGFyayxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gRXh0ZW5kZWQgdGhlbWUgdGV4dCBjb2xvcnNcbiR0aGVtZS10ZXh0LWNvbG9yczogKFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmssXG4gICAgXCJkYXJrLTc1XCI6ICAgICRkYXJrLTc1LFxuICAgIFwiZGFyay02NVwiOiAgICAkZGFyay02NSxcbiAgICBcImRhcmstNTBcIjogICAgJGRhcmstNTAsXG4gICAgXCJkYXJrLTI1XCI6ICAgICRkYXJrLTI1LFxuICAgIFwibXV0ZWRcIjogICAgICAkdGV4dC1tdXRlZFxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBTb2NpYWwgTmV0d29yayBDb2xvcnMgVXNlZCBXaXRoIEJvb3N0cmFwIEJ1dHRvbnMoc2VlOiBodHRwczovL3ByaW1hcnljb2xvcnMubmV0LylcbiRzb2NpYWwtY29sb3JzOiAoXG5cdGZhY2Vib29rOiAoXG5cdFx0YmFzZTogIzNiNTk5OCxcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxuICAgICAgICBsaWdodDogcmdiYSgjM2I1OTk4LCAwLjEpLFxuICAgICAgICBob3ZlcjogZGFya2VuKCMzYjU5OTgsIDcuNSUpXG5cdCksXG5cdGdvb2dsZTogKFxuXHRcdGJhc2U6ICNkZDRiMzksXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2RkNGIzOSwgMC4xKSxcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjZGQ0YjM5LCA3LjUlKVxuXHQpLFxuXHR0d2l0dGVyOiAoXG5cdFx0YmFzZTogIzFkYTFmMixcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxuICAgICAgICBsaWdodDogcmdiYSgjMWRhMWYyLCAwLjEpLFxuICAgICAgICBob3ZlcjogZGFya2VuKCMxZGExZjIsIDcuNSUpXG5cdCksXG5cdGluc3RhZ3JhbTogKFxuXHRcdGJhc2U6ICNlMTMwNmMsXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2UxMzA2YywgMC4xKSxcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjZTEzMDZjLCA3LjUlKVxuXHQpLFxuXHR5b3V0dWJlOiAoXG5cdFx0YmFzZTogI2ZmMDAwMCxcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxuICAgICAgICBsaWdodDogcmdiYSgjZmYwMDAwLCAwLjEpLFxuICAgICAgICBob3ZlcjogZGFya2VuKCNmZjAwMDAsIDcuNSUpXG5cdCksXG4gICAgbGlua2VkaW46IChcbiAgICAgICAgYmFzZTogIzAwNzdiNSxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwNzdiNSwgMC4xKSxcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjMDA3N2I1LCA3LjUlKVxuICAgICksXG4gICAgc2t5cGU6IChcbiAgICAgICAgYmFzZTogIzAwYWZmMCxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwYWZmMCwgMC4xKSxcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjMDBhZmYwLCA3LjUlKVxuICAgIClcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBFeHRlbmRlZCBjdXN0b20gc3BhY2luZyBmb3IgQm9vdHN0cmFwXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSwgIFx0Ly8gMy41cHhcbiAgICAyOiAoJHNwYWNlciAqIC41KSwgICBcdC8vIDdweDtcblx0MzogKCRzcGFjZXIgKiAuNzUpLCAgXHQvLyAxMC41cHhcblx0NDogKCRzcGFjZXIgKiAxKSwgICAgXHQvLyAxNHB4XG5cdDU6ICgkc3BhY2VyICogMS4yNSksIFx0Ly8gMTcuNXB4XG5cdDY6ICgkc3BhY2VyICogMS41KSwgIFx0Ly8gMjFweFxuXHQ3OiAoJHNwYWNlciAqIDEuNzUpLCBcdC8vIDI0LjVweFxuXHQ4OiAoJHNwYWNlciAqIDIpLCAgICBcdC8vIDI4cHhcblx0OTogKCRzcGFjZXIgKiAyLjI1KSwgXHQvLyAzMS41cHhcblx0MTA6ICgkc3BhY2VyICogMi41KSwgXHQvLyAzNXB4XG5cdDExOiAoJHNwYWNlciAqIDIuNzUpLFx0Ly8gMzguNXB4XG5cdDEyOiAoJHNwYWNlciAqIDMpLCAgIFx0Ly8gNDJweFxuXHQxMzogKCRzcGFjZXIgKiAzLjI1KSxcdC8vIDQ1LjVweFxuXHQxNDogKCRzcGFjZXIgKiAzLjUpLCBcdC8vIDQ5cHhcblx0MTU6ICgkc3BhY2VyICogMy43NSksIFx0Ly8gNTIuNXB4XG5cdDE2OiAoJHNwYWNlciAqIDQpLCBcdFx0Ly8gNTVweFxuXHQxNzogKCRzcGFjZXIgKiA0LjI1KSwgXHQvLyA1OC41cHhcblx0MTg6ICgkc3BhY2VyICogNC41KSwgXHQvLyA2MnB4XG5cdDE5OiAoJHNwYWNlciAqIDQuNzUpLCBcdC8vIDY1LjVweFxuXHQyMDogKCRzcGFjZXIgKiA1KSwgXHRcdC8vIDY5cHhcblx0MjE6ICgkc3BhY2VyICogNS4yNSksXHQvLyA3My41cHhcblx0MjI6ICgkc3BhY2VyICogNS41KSwgXHQvLyA3N3B4XG5cdDIzOiAoJHNwYWNlciAqIDUuNzUpLCBcdC8vIDgwLjVweFxuXHQyNDogKCRzcGFjZXIgKiA2KSwgXHRcdC8vIDg0cHhcblx0MjU6ICgkc3BhY2VyICogNi4yNSksIFx0Ly8gODcuNXB4XG5cdDI2OiAoJHNwYWNlciAqIDYuNSksIFx0Ly8gOTFweFxuXHQyNzogKCRzcGFjZXIgKiA2Ljc1KSwgXHQvLyA5NC41cHhcblx0Mjg6ICgkc3BhY2VyICogNyksIFx0XHQvLyA5OXB4XG5cdDI5OiAoJHNwYWNlciAqIDcuMjUpLCAgIC8vIDEwMi41cHhcblx0MzA6ICgkc3BhY2VyICogNy41KSwgXHQvLyAxMDZweFxuXHQzMTogKCRzcGFjZXIgKiA3Ljc1KSwgXHQvLyAxMDkuNXB4XG5cdDMyOiAoJHNwYWNlciAqIDgpLCBcdFx0Ly8gMTEzcHhcblx0MzM6ICgkc3BhY2VyICogOC4yNSksIFx0Ly8gMTE2LjVweFxuXHQzNDogKCRzcGFjZXIgKiA4LjUpLCBcdC8vIDEyMHB4XG5cdDM1OiAoJHNwYWNlciAqIDguNzUpLCBcdC8vIDEyMy41cHhcblx0MzY6ICgkc3BhY2VyICogOSksIFx0XHQvLyAxMjdweFxuXHQzNzogKCRzcGFjZXIgKiA5LjI1KSwgICAgLy8gMTMwLjVweFxuXHQ0ODogKCRzcGFjZXIgKiA5LjUpLCBcdC8vIDEzNHB4XG5cdDM5OiAoJHNwYWNlciAqIDkuNzUpLCBcdC8vIDEzNy41cHhcbiAgICA0MDogKCRzcGFjZXIgKiAxMCksIFx0Ly8gMTQwcHhcbik7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG4kbGluZS1oZWlnaHQteGw6XHRcdFx0XHRcdFx0XHRcdFx0MS44ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MS4zNSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1saWdodC1zdHlsZS1vcGFjaXR5OiAgICAgICAgICAgICAgICAgXHQwLjEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gQm94IHNoYWRvd1xuJGJveC1zaGFkb3cteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKCRibGFjaywgMC4wNSk7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC4xcmVtIDFyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDAgLjVyZW0gMS41cmVtIDAuNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIDFyZW0gMnJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbi8vIEJvcmRlciBSYWRpdWVzXG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICBcdFx0XHRcdFx0XHQuMjhyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQuNDJyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICBcdFx0XHRcdFx0XHQuODVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14bDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbi8vIEJvcmRlciBzZXR0aW5nc1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG5cbi8vIEhvdmVyIGJhY2tncm91bmQgY29sb3JcbiRob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBBY3RpdmViYWNrZ3JvdW5kIGNvbG9yXG4kYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRncmF5LTEwMCwgMSUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cbiRlbmFibGUtcm91bmRlZDogXHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0dHJ1ZSAhZGVmYXVsdDtcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4IC8vIGN1c3RvbSBicmVha3BvaW50XG4pICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzQwcHhcbikgIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIFx0XHRcdFx0XHRcdDI1cHggIWRlZmF1bHQ7XG4kZ3JpZC1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuXG4vLyBCb2R5XG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIEZvbnQgZmFtaWx5XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICBcdFx0XHRcdFx0XHRQb3BwaW5zLCBIZWx2ZXRpY2EsIFwic2Fucy1zZXJpZlwiICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTNweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgXHQgXHRcdFx0XHRcdCRmb250LXNpemUtYmFzZSAqIDEuMDggIWRlZmF1bHQ7ICAgLy8gMTQuMDRweFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjkyNSAhZGVmYXVsdDsgICAvLyAxMi4wMjVweFxuJGZvbnQtc2l6ZS14czogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjggIWRlZmF1bHQ7ICAgICAvLyAxMC40cHhcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7ICAgICAgLy8gMjZweFxuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7ICAgLy8gMjIuNzVweFxuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgICAgLy8gMTkuNXB4XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4zNSAhZGVmYXVsdDsgICAvLyAxNy41NXB4XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgICAvLyAxNi4yNXB4XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4xNzUgIWRlZmF1bHQ7ICAvLyAxNS4yNzVweFxuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7ICAvLyA3MS41cHhcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7ICAvLyA1OC41cHhcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7ICAvLyA0NS41cHhcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7ICAvLyAzMi41cHhcbiRkaXNwbGF5NS1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjI1cmVtICFkZWZhdWx0OyAvLyAyOS41cHhcblxuLy8gRm9udCBTaXplc1xuJGZvbnQtc2l6ZXM6IChcbiAgICBmb250LXNpemUtaDE6ICRoMS1mb250LXNpemUsXG4gICAgZm9udC1zaXplLWgyOiAkaDItZm9udC1zaXplLFxuICAgIGZvbnQtc2l6ZS1oMzogJGgzLWZvbnQtc2l6ZSxcbiAgICBmb250LXNpemUtaDQ6ICRoNC1mb250LXNpemUsXG4gICAgZm9udC1zaXplLWg1OiAkaDUtZm9udC1zaXplLFxuICAgIGZvbnQtc2l6ZS1oNjogJGg2LWZvbnQtc2l6ZSxcbiAgICBkaXNwbGF5MTogJGRpc3BsYXkxLXNpemUsXG4gICAgZGlzcGxheTI6ICRkaXNwbGF5Mi1zaXplLFxuICAgIGRpc3BsYXkzOiAkZGlzcGxheTMtc2l6ZSxcbiAgICBkaXNwbGF5NDogJGRpc3BsYXk0LXNpemUsXG4gICAgZGlzcGxheTU6ICRkaXNwbGF5NS1zaXplXG4pICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuLy8gRm9udCBXZWlnaHRcbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICBcdFx0XHRcdFx0XHQzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICBcdFx0XHRcdFx0XHQ0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICBcdFx0XHRcdFx0XHQ1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBcdFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVzdDogICAgICAgICAgXHRcdFx0XHRcdFx0NzAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG5cbi8vIFRyYW5zaXRpb25cbiR0cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0YWxsIDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHRyYW5zaXRpb24tbGluazogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kdHJhbnNpdGlvbi1pbnB1dDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcHJpbWFyeSwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogICAgICAgICAgIDE1JSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjgyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjQycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICBcdFx0XHRcdFx0XHQuNiAhZGVmYXVsdDtcbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdGNvbG9yIC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0Oy8vIEN1c3RvbSB2YXJpYWJsZVxuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgXHRcdFx0XHRcdFx0bm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1zZWNvbmRhcnktY29sb3I6XHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xuJGJ0bi1zZWNvbmRhcnktaG92ZXItYmctY29sb3I6XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xuJGJ0bi1pY29uLXNpemUteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0cHggIWRlZmF1bHQ7IC8vY3VzdG9tIHBhcmFtZXRlclxuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6XHRcdFx0XHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdGxpZ2h0ZW4oJHByaW1hcnksIDEwJSk7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kaW5wdXQtcmVhZG9ubHktYmc6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRpbnB1dC1ncm91cC1pY29uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgIFx0XHQkZGFyay03NSAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICBcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXNvbGlkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kaW5wdXQtc29saWQtYmctZm9jdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwOyAvLyBDdXN0b20gdmFyaWFibGVcbiRpbnB1dC1zb2xpZC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGxhY2Vob2xkZXItY29sb3I7ICAvLyBDdXN0b20gdmFyaWFibGVcbiRpbnB1dC1zb2xpZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCRkYXJrLTc1OyAvLyBDdXN0b20gdmFyaWFibGVcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICAgbm9uZSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgICAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGZvcm0tbGFiZWwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRmb3JtLWZlZWRiYWNrLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGZvcm0tdGV4dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRmb3JtLXZhbGlkYXRpb24taW5wdXQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBmYWxzZTsgIC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBUYWJsZVxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0dHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtZm9udC1zaXplOiAgICAgICAgICAgICBcdFx0XHRcdFx0MXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kdGFibGUtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgIFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICBcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZGFyayAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgXHRcdFx0XHRcdFx0JHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHRhYmxlLWNvbXBhY3QtaGVhZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiR0YWJsZS1jb21wYWN0LWhlYWQtdGV4dC10cmFuc2Zvcm06ICAgICAgICAgICAgICAgICB1cHBlcmNhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgIDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kdGFibGUtY29tcGFjdC1oZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiR0YWJsZS1jb21wYWN0LWhlYWQtbGV0dGVyLXNwYWNpbmc6ICAgICAgICAgICAgICAgICAwLjFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG4vLyBDYXJkXG4kY2FyZC1ib3gtc2hhZG93OiBcdFx0XHRcdFx0XHRcdFx0XHQwcHggMHB4IDMwcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMDUpICFkZWZhdWx0OyAvLyBjYXJkIGN1c3RvbSBzaGFkb3dcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDJyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQyLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGNhcmQtaGVhZGVyLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0NzBweCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kY2FyZC1zdGlja3ktaGVhZGVyLWJnOiAgIFx0XHRcdFx0XHRcdCAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGNhcmQtc3RpY2t5LWhlYWRlci1oZWlnaHQ6IFx0XHRcdFx0XHRcdDcwcHggIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGNhcmQtc3RpY2t5LXppbmRleDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMSAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJGNhcmQtc3RpY2t5LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjEpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgIFx0XHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICBcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdFx0bnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgXHRcdFx0XHRyZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgXHRcdFx0XHQwICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3c6ICAgICAgIFx0XHRcdFx0ICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgXHRcdFx0XHQwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICBcdFx0XHRcdFx0MCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICBcdFx0IFx0XHRcdCRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIFx0XHRcdFx0LjIgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICBcdFx0XHRcdCRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICBcdFx0XHQgXHQkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIFx0XHRcdFx0MS41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgXHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgXHRcdFx0XHQkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHQgXHRcdFx0MTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0NTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDMwMHB4ICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICBcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgXHQgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICBcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuJGRyb3Bkb3duLWJveC1zaGFkb3c6XHRcdFx0XHRcdFx0XHRcdDBweCAwcHggNTBweCAwcHggcmdiYSg4Miw2MywxMDUsIDAuMTUpICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ5NiAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1tZW51LXdpZHRoczogKFxuXHRzbTogMTc1cHgsXG5cdG1kOiAyNTBweCxcblx0bGc6IDM1MHB4LFxuXHR4bDogNDAwcHgsXG5cdHh4bDogNjAwcHhcbik7IC8vIEN1c3RvbSB2YXJpYWJsZVxuXG5cbi8vIFBvcG92ZXJzXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIFx0XHRcdFx0Mjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdDBweCAwcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjE1KSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItZm9udC13ZWlnaHQ6ICAgICAgICAgICBcdFx0XHRcdDUwMCAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxuJHBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICBcdFx0XHRcdDEuMjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICBcdFx0XHRcdCRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIFx0XHRcdFx0MjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgXHRcdFx0XHQzcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDEgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdCRwb3BvdmVyLWJveC1zaGFkb3cgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNzVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbSBUb2FzdHNcbiR0b2FzdC16aW5kZXg6XHRcdFx0XHRcdFx0XHRcdFx0XHQkemluZGV4LWRyb3Bkb3duICsgMTAwICFkZWZhdWx0O1xuJHRvYXN0LXNwYWNpbmc6XHRcdFx0XHRcdFx0XHRcdFx0XHQycmVtICAhZGVmYXVsdDtcbiR0b2FzdC13aWR0aDogXHRcdFx0XHRcdFx0XHRcdFx0XHQzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93Olx0XHRcdFx0XHRcdFx0XHRcdCRkcm9wZG93bi1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1jb2xvcjogXHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBcdFx0XHRcdFx0I2ZmZiAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWhlaWdodC14czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kcHJvZ3Jlc3MtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC43NXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kcHJvZ3Jlc3MtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAgICAgICAgICAgICAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG4vLyBCYWRnZXNcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0LjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0Ljc1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDg1JSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRjb2RlLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjE1cmVtIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cblxuLy8gTW9kYWxzXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtdGl0bGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRhcmsgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJG1vZGFsLXRpdGxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kbW9kYWwtdGl0bGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4zcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRtb2RhbC10aXRsZS1zbWFsbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG4kbW9kYWwtdGl0bGUtc21hbGwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRtb2RhbC10aXRsZS1zbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJG1vZGFsLXRpdGxlLWNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxuJG1vZGFsLXRpdGxlLWNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcbiRtb2RhbC10aXRsZS1jbG9zZS1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cbiRhbGVydC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGNhcmQtYm94LXNoYWRvdyAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcHg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtO1xuJG5hdi1saW5rLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNzVyZW07XG4kbmF2LWJ0bi1weDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcbiRuYXYtc2VjdGlvbi1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjVyZW07XG4kbmF2LWVsZW0tc3BhY2U6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNXJlbTtcblxuJG5hdi1saW5rLWJnLWhvdmVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMDtcbiRuYXYtbGluay1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDA7XG5cbiRuYXYtaGVhZGVyLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xuJG5hdi1mb290ZXItcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XG5cbiRuYXYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xuJG5hdi1pY29uLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW07XG4kbmF2LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMnJlbTtcbiIsIi8vXG4vLyBTVkcgSWNvblxuLy9cblxuXG5AbWl4aW4gc3ZnLWljb24tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICAgIHN2ZyB7XG4gICAgICAgIGcge1xuICAgICAgICAgICAgW2ZpbGxdIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgZyB7XG4gICAgICAgICAgICAgICAgW2ZpbGxdIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gc3ZnLWljb24tdHJhbnNpdGlvbigpIHtcbiAgICBzdmcge1xuICAgICAgICBnIHtcbiAgICAgICAgICAgIFtmaWxsXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzdmctaWNvbi1zaXplKCRzaXplLCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICAgIHN2ZyB7XG4gICAgICAgIGhlaWdodDogJHNpemUgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgICAgICAgd2lkdGg6ICRzaXplIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG4gICAgfVxufVxuXG5AbWl4aW4gc3ZnLWxvZ28tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSl7XG4gICAgc3Zne1xuICAgICAgICBwYXRoe1xuICAgICAgICAgICAgZmlsbDogJGNvbG9yIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDealComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-deal',
            templateUrl: './create-deal.component.html',
            styleUrls: ['./create-deal.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
          }];
        }, {
          el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wizard', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "k5BX": function k5BX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeService", function () {
        return NodeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NodeService = /*#__PURE__*/function () {
        function NodeService() {
          _classCallCheck(this, NodeService);

          //private node = new BehaviorSubject<any[]>([]);
          this.node = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(NodeService, [{
          key: "node$",
          get: function get() {
            return this.node.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (node) {
              return !!node;
            }));
          }
        }, {
          key: "addNode",
          value: function addNode(data) {
            this.node.next(data);
          }
        }]);

        return NodeService;
      }();

      NodeService.ɵfac = function NodeService_Factory(t) {
        return new (t || NodeService)();
      };

      NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NodeService,
        factory: NodeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kBzq": function kBzq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function () {
        return AssetRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _asset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./asset.component */
      "ho/u");
      /* harmony import */


      var _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exisiting-deals/exisiting-deals.component */
      "QCmO");
      /* harmony import */


      var _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./deals-dashboard/deals-dashboard.component */
      "ws06");
      /* harmony import */


      var _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projects-dashboard/projects-dashboard.component */
      "ox/o");
      /* harmony import */


      var _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-deal/create-deal.component */
      "evJ9");

      var routes = [{
        path: '',
        component: _asset_component__WEBPACK_IMPORTED_MODULE_2__["AssetComponent"],
        children: [{
          path: 'existingDeals',
          component: _exisiting_deals_exisiting_deals_component__WEBPACK_IMPORTED_MODULE_3__["ExisitingDealsComponent"]
        }, {
          path: 'dealsDashboard',
          component: _deals_dashboard_deals_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DealsDashboardComponent"]
        }, {
          path: 'projectsDashboard',
          component: _projects_dashboard_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsDashboardComponent"]
        }, {
          path: 'createNewDeal',
          component: _create_deal_create_deal_component__WEBPACK_IMPORTED_MODULE_6__["CreateDealComponent"]
        }, {
          path: 'reviewDealInfo/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | modules-asset-review-deal-info-review-deal-info-module */
            "modules-asset-review-deal-info-review-deal-info-module").then(__webpack_require__.bind(null,
            /*! ../../modules/asset/review-deal-info/review-deal-info.module */
            "nZyo")).then(function (m) {
              return m.ReviewDealInfoModule;
            });
          }
        }, //{
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
        {
          path: '',
          redirectTo: 'customers',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'customers',
          pathMatch: 'full'
        }]
      }];

      var AssetRoutingModule = function AssetRoutingModule() {
        _classCallCheck(this, AssetRoutingModule);
      };

      AssetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AssetRoutingModule
      });
      AssetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AssetRoutingModule_Factory(t) {
          return new (t || AssetRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kvL/": function kvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function () {
        return NgxDropzoneComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function () {
        return NgxDropzoneImagePreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function () {
        return NgxDropzoneModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function () {
        return NgxDropzonePreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function () {
        return NgxDropzoneRemoveBadgeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function () {
        return NgxDropzoneVideoPreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NgxDropzoneService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return NgxDropzoneLabelDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["ngx-dropzone-label"]]];
      var _c1 = ["ngx-dropzone-label"];
      var _c2 = ["fileInput"];

      function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
        }
      }

      var _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
      var _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];

      function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NgxDropzoneLabelDirective = function NgxDropzoneLabelDirective() {
        _classCallCheck(this, NgxDropzoneLabelDirective);
      };

      NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) {
        return new (t || NgxDropzoneLabelDirective)();
      };

      NgxDropzoneLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgxDropzoneLabelDirective,
        selectors: [["ngx-dropzone-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ngx-dropzone-label'
          }]
        }], null, null);
      })();
      /**
       * Coerces a data-bound value (typically a string) to a boolean.
       * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
       */


      function coerceBooleanProperty(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /**
       * Whether the provided value is considered a number.
       * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
       */


      function coerceNumberProperty(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : null;
      }

      var KEY_CODE;

      (function (KEY_CODE) {
        KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
        KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
      })(KEY_CODE || (KEY_CODE = {}));

      var NgxDropzonePreviewComponent = /*#__PURE__*/function () {
        function NgxDropzonePreviewComponent(sanitizer) {
          _classCallCheck(this, NgxDropzonePreviewComponent);

          this.sanitizer = sanitizer;
          this._removable = false;
          /** Emitted when the element should be removed. */

          this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Make the preview item focusable using the tab key. */

          this.tabIndex = 0;
        }
        /** The file to preview. */


        _createClass(NgxDropzonePreviewComponent, [{
          key: "file",
          get: function get() {
            return this._file;
          }
          /** Allow the user to remove files. */
          ,
          set: function set(value) {
            this._file = value;
          }
        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          },
          set: function set(value) {
            this._removable = coerceBooleanProperty(value);
          }
        }, {
          key: "keyEvent",
          value: function keyEvent(event) {
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

        }, {
          key: "hostStyle",
          get: function get() {
            var styles = "\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t";
            return this.sanitizer.bypassSecurityTrustStyle(styles);
          }
          /** Remove method to be used from the template. */

        }, {
          key: "_remove",
          value: function _remove(event) {
            event.stopPropagation();
            this.remove();
          }
          /** Remove the preview item (use from component code). */

        }, {
          key: "remove",
          value: function remove() {
            if (this._removable) {
              this.removed.next(this.file);
            }
          }
        }, {
          key: "readFile",
          value: function readFile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                          resolve(e.target.result);
                        };

                        reader.onerror = function (e) {
                          console.error("FileReader failed on file ".concat(_this11.file.name, "."));
                          reject(e);
                        };

                        if (!_this11.file) {
                          return reject('No file to read. Please provide a file using the [file] Input property.');
                        }

                        reader.readAsDataURL(_this11.file);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return NgxDropzonePreviewComponent;
      }();

      NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) {
        return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      NgxDropzonePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzonePreviewComponent,
        selectors: [["ngx-dropzone-preview"]],
        hostVars: 3,
        hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) {
              return ctx.keyEvent($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
          }
        },
        inputs: {
          file: "file",
          removable: "removable"
        },
        outputs: {
          removed: "removed"
        },
        ngContentSelectors: _c1,
        decls: 2,
        vars: 1,
        consts: [[3, "click", 4, "ngIf"], [3, "click"]],
        template: function NgxDropzonePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent];
        },
        styles: ["[_nghost-%COMP%]{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]
      });

      NgxDropzonePreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      NgxDropzonePreviewComponent.propDecorators = {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        keyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keyup', ['$event']]
        }],
        hostStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['tabindex']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-preview',
            template: "\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n\t\t<ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n\t\t</ngx-dropzone-remove-badge>\n\t",
            styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }];
        }, {
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['tabindex']
          }],
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
          }],
          hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
          }]
        });
      })();
      /**
       * This service contains the filtering logic to be applied to
       * any dropped or selected file. If a file matches all criteria
       * like maximum size or accept type, it will be emitted in the
       * addedFiles array, otherwise in the rejectedFiles array.
       */


      var NgxDropzoneService = /*#__PURE__*/function () {
        function NgxDropzoneService() {
          _classCallCheck(this, NgxDropzoneService);
        }

        _createClass(NgxDropzoneService, [{
          key: "parseFileList",
          value: function parseFileList(files, accept, maxFileSize, multiple) {
            var addedFiles = [];
            var rejectedFiles = [];

            for (var i = 0; i < files.length; i++) {
              var file = files.item(i);

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

            var result = {
              addedFiles: addedFiles,
              rejectedFiles: rejectedFiles
            };
            return result;
          }
        }, {
          key: "isAccepted",
          value: function isAccepted(file, accept) {
            if (accept === '*') {
              return true;
            }

            var acceptFiletypes = accept.split(',').map(function (it) {
              return it.toLowerCase().trim();
            });
            var filetype = file.type.toLowerCase();
            var filename = file.name.toLowerCase();
            var matchedFileType = acceptFiletypes.find(function (acceptFiletype) {
              // check for wildcard mimetype (e.g. image/*)
              if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
              } // check for file extension (e.g. .csv)


              if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
              } // check for exact mimetype match (e.g. image/jpeg)


              return acceptFiletype == filetype;
            });
            return !!matchedFileType;
          }
        }, {
          key: "rejectFile",
          value: function rejectFile(rejectedFiles, file, reason) {
            var rejectedFile = file;
            rejectedFile.reason = reason;
            rejectedFiles.push(rejectedFile);
          }
        }]);

        return NgxDropzoneService;
      }();

      NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) {
        return new (t || NgxDropzoneService)();
      };

      NgxDropzoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgxDropzoneService,
        factory: NgxDropzoneService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var NgxDropzoneComponent = /*#__PURE__*/function () {
        function NgxDropzoneComponent(service) {
          _classCallCheck(this, NgxDropzoneComponent);

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

        _createClass(NgxDropzoneComponent, [{
          key: "_hasPreviews",
          get: function get() {
            return !!this._previewChildren.length;
          }
          /** Disable any user interaction with the component. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = coerceBooleanProperty(value);

            if (this._isHovered) {
              this._isHovered = false;
            }
          }
          /** Allow the selection of multiple files. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = coerceBooleanProperty(value);
          }
          /** Set the maximum size a single file may have. */

        }, {
          key: "maxFileSize",
          get: function get() {
            return this._maxFileSize;
          },
          set: function set(value) {
            this._maxFileSize = coerceNumberProperty(value);
          }
          /** Allow the dropzone container to expand vertically. */

        }, {
          key: "expandable",
          get: function get() {
            return this._expandable;
          },
          set: function set(value) {
            this._expandable = coerceBooleanProperty(value);
          }
          /** Open the file selector on click. */

        }, {
          key: "disableClick",
          get: function get() {
            return this._disableClick;
          },
          set: function set(value) {
            this._disableClick = coerceBooleanProperty(value);
          }
          /** Show the native OS file explorer to select files. */

        }, {
          key: "_onClick",
          value: function _onClick() {
            if (!this.disableClick) {
              this.showFileSelector();
            }
          }
        }, {
          key: "_onDragOver",
          value: function _onDragOver(event) {
            if (this.disabled) {
              return;
            }

            this.preventDefault(event);
            this._isHovered = true;
          }
        }, {
          key: "_onDragLeave",
          value: function _onDragLeave() {
            this._isHovered = false;
          }
        }, {
          key: "_onDrop",
          value: function _onDrop(event) {
            if (this.disabled) {
              return;
            }

            this.preventDefault(event);
            this._isHovered = false;
            this.handleFileDrop(event.dataTransfer.files);
          }
        }, {
          key: "showFileSelector",
          value: function showFileSelector() {
            if (!this.disabled) {
              this._fileInput.nativeElement.click();
            }
          }
        }, {
          key: "_onFilesSelected",
          value: function _onFilesSelected(event) {
            var files = event.target.files;
            this.handleFileDrop(files); // Reset the native file input element to allow selecting the same file again

            this._fileInput.nativeElement.value = ''; // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.

            this.preventDefault(event);
          }
        }, {
          key: "handleFileDrop",
          value: function handleFileDrop(files) {
            var result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
            this.change.next({
              addedFiles: result.addedFiles,
              rejectedFiles: result.rejectedFiles,
              source: this
            });
          }
        }, {
          key: "preventDefault",
          value: function preventDefault(event) {
            event.preventDefault();
            event.stopPropagation();
          }
        }]);

        return NgxDropzoneComponent;
      }();

      NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) {
        return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxDropzoneService, 2));
      };

      NgxDropzoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneComponent,
        selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]],
        contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
          }
        },
        viewQuery: function NgxDropzoneComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() {
              return ctx._onClick();
            })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) {
              return ctx._onDragOver($event);
            })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() {
              return ctx._onDragLeave();
            })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) {
              return ctx._onDrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-dz-hovered", ctx._isHovered)("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick);
          }
        },
        inputs: {
          accept: "accept",
          disabled: "disabled",
          multiple: "multiple",
          maxFileSize: "maxFileSize",
          expandable: "expandable",
          disableClick: "disableClick",
          id: "id",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"]
        },
        outputs: {
          change: "change"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NgxDropzoneService])],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 8,
        consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]],
        template: function NgxDropzoneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) {
              return ctx._onFilesSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5;pointer-events:none}.expandable[_nghost-%COMP%]{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
      });

      NgxDropzoneComponent.ctorParameters = function () {
        return [{
          type: NgxDropzoneService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      NgxDropzoneComponent.propDecorators = {
        _previewChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NgxDropzonePreviewComponent, {
            descendants: true
          }]
        }],
        _fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput', {
            "static": true
          }]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ngx-dz-disabled']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxFileSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        expandable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.expandable']
        }],
        disableClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.unclickable']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-describedby']
        }],
        _isHovered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ngx-dz-hovered']
        }],
        _onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        _onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        _onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave']
        }],
        _onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone, [ngx-dropzone]',
            template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
            providers: [NgxDropzoneService],
            styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
          }]
        }], function () {
          return [{
            type: NgxDropzoneService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _isHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-hovered']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-disabled']
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expandable']
          }],
          disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.unclickable']
          }],

          /** Show the native OS file explorer to select files. */
          _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          _onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
          }],
          _onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave']
          }],
          _onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
          }],
          _previewChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgxDropzonePreviewComponent, {
              descendants: true
            }]
          }],
          _fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', {
              "static": true
            }]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
          }]
        });
      })();

      var NgxDropzoneImagePreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo) {
        _inherits(NgxDropzoneImagePreviewComponent, _NgxDropzonePreviewCo);

        var _super = _createSuper(NgxDropzoneImagePreviewComponent);

        function NgxDropzoneImagePreviewComponent(sanitizer) {
          var _this12;

          _classCallCheck(this, NgxDropzoneImagePreviewComponent);

          _this12 = _super.call(this, sanitizer);
          /** The image data source. */

          _this12.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
          _this12.imageSrc = _this12.sanitizer.bypassSecurityTrustUrl(_this12.defaultImgLoading);
          return _this12;
        }
        /** The file to preview. */


        _createClass(NgxDropzoneImagePreviewComponent, [{
          key: "file",
          get: function get() {
            return this._file;
          },
          set: function set(value) {
            this._file = value;
            this.renderImage();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderImage();
          }
        }, {
          key: "renderImage",
          value: function renderImage() {
            var _this13 = this;

            this.readFile().then(function (img) {
              return setTimeout(function () {
                return _this13.imageSrc = img;
              });
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }]);

        return NgxDropzoneImagePreviewComponent;
      }(NgxDropzonePreviewComponent);

      NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) {
        return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      NgxDropzoneImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneImagePreviewComponent,
        selectors: [["ngx-dropzone-image-preview"]],
        inputs: {
          file: "file"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: NgxDropzonePreviewComponent,
          useExisting: NgxDropzoneImagePreviewComponent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 3,
        vars: 2,
        consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]],
        template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent];
        },
        styles: ["[_nghost-%COMP%]{max-width:unset!important;min-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;max-height:100%;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
      });

      NgxDropzoneImagePreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      NgxDropzoneImagePreviewComponent.propDecorators = {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-image-preview',
            template: "\n    <img [src]=\"imageSrc\" />\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
            providers: [{
              provide: NgxDropzonePreviewComponent,
              useExisting: NgxDropzoneImagePreviewComponent
            }],
            styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus img,:host:hover img{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{border-radius:5px;max-height:100%;opacity:.8}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }];
        }, {
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var NgxDropzoneRemoveBadgeComponent = function NgxDropzoneRemoveBadgeComponent() {
        _classCallCheck(this, NgxDropzoneRemoveBadgeComponent);
      };

      NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) {
        return new (t || NgxDropzoneRemoveBadgeComponent)();
      };

      NgxDropzoneRemoveBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneRemoveBadgeComponent,
        selectors: [["ngx-dropzone-remove-badge"]],
        decls: 3,
        vars: 0,
        consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]],
        template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%]{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2px}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-remove-badge',
            template: "\n    <svg>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"10\" />\n      <line x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\" />\n    </svg>\n  ",
            styles: [":host{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke:#fff;stroke-width:2px}"]
          }]
        }], null, null);
      })();

      var NgxDropzoneVideoPreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo2) {
        _inherits(NgxDropzoneVideoPreviewComponent, _NgxDropzonePreviewCo2);

        var _super2 = _createSuper(NgxDropzoneVideoPreviewComponent);

        function NgxDropzoneVideoPreviewComponent(sanitizer) {
          _classCallCheck(this, NgxDropzoneVideoPreviewComponent);

          return _super2.call(this, sanitizer);
        }

        _createClass(NgxDropzoneVideoPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            URL.revokeObjectURL(this.videoSrc);
          }
        }]);

        return NgxDropzoneVideoPreviewComponent;
      }(NgxDropzonePreviewComponent);

      NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) {
        return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      NgxDropzoneVideoPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneVideoPreviewComponent,
        selectors: [["ngx-dropzone-video-preview"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: NgxDropzonePreviewComponent,
          useExisting: NgxDropzoneVideoPreviewComponent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 3,
        vars: 2,
        consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]],
        template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NgxDropzoneRemoveBadgeComponent],
        styles: ["[_nghost-%COMP%]{max-width:unset!important;min-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   video[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{border-radius:5px;max-height:100%}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
      });

      NgxDropzoneVideoPreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-video-preview',
            template: "\n    <video *ngIf=\"sanitizedVideoSrc\" controls (click)=\"$event.stopPropagation()\">\n      <source [src]=\"sanitizedVideoSrc\" />\n    </video>\n    <ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
            providers: [{
              provide: NgxDropzonePreviewComponent,
              useExisting: NgxDropzoneVideoPreviewComponent
            }],
            styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus video,:host:hover video{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{border-radius:5px;max-height:100%}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }];
        }, null);
      })();

      var NgxDropzoneModule = function NgxDropzoneModule() {
        _classCallCheck(this, NgxDropzoneModule);
      };

      NgxDropzoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxDropzoneModule
      });
      NgxDropzoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxDropzoneModule_Factory(t) {
          return new (t || NgxDropzoneModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDropzoneModule, {
          declarations: function declarations() {
            return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
            exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-dropzone
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-dropzone.js.map

      /***/

    },

    /***/
    "ox/o": function oxO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsDashboardComponent", function () {
        return ProjectsDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _metronic_partials_content_widgets_asset_module_quick_links_widgets_quick_links_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/widgets/asset-module/quick-links-widgets/quick-links-widgets.component */
      "iEbA");
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");

      var ProjectsDashboardComponent = /*#__PURE__*/function () {
        function ProjectsDashboardComponent() {
          _classCallCheck(this, ProjectsDashboardComponent);

          this.doc = "/assets/attachments/test_1.pdf";
        }

        _createClass(ProjectsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsDashboardComponent;
      }();

      ProjectsDashboardComponent.ɵfac = function ProjectsDashboardComponent_Factory(t) {
        return new (t || ProjectsDashboardComponent)();
      };

      ProjectsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsDashboardComponent,
        selectors: [["app-projects-dashboard"]],
        decls: 5,
        vars: 2,
        consts: [[1, "row"], [1, "col-lg-6", "col-xxl-4"], [1, "col-lg-6", "col-xxl-8"], [2, "display", "block", 3, "src", "render-text"]],
        template: function ProjectsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-quick-links-widgets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "pdf-viewer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.doc)("render-text", true);
          }
        },
        directives: [_metronic_partials_content_widgets_asset_module_quick_links_widgets_quick_links_widgets_component__WEBPACK_IMPORTED_MODULE_1__["QuickLinksWidgetsComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["PdfViewerComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects-dashboard',
            templateUrl: './projects-dashboard.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vnjQ": function vnjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnershipsTable", function () {
        return OwnershipsTable;
      });

      var OwnershipsTable = function OwnershipsTable() {
        _classCallCheck(this, OwnershipsTable);
      };

      OwnershipsTable.ownerships = [{
        id: 1,
        name: 'IMH'
      }, {
        id: 2,
        name: 'Blackstar'
      }];
      /***/
    },

    /***/
    "w0rC": function w0rC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPropertyModalComponent", function () {
        return EditPropertyModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _metronic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../_metronic/core */
      "WsYS");
      /* harmony import */


      var _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_fake/fake-server/ownerships.table */
      "vnjQ");
      /* harmony import */


      var _fake_fake_server_users_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_fake/fake-server/users.table */
      "Qrho");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../google-auto-complete/google-auto-complete.component */
      "LPfA");

      var _c0 = ["addresstext"];

      function EditPropertyModalComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPropertyModalComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPropertyModalComponent_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.property.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.property.id);
        }
      }

      function EditPropertyModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name was entered correct ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PropertyName should have at least 3 symbols ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property Name should have maximum 100 symbols ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Units Count ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units cannot be less than 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditPropertyModalComponent_ng_container_7_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var businessUnit_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", businessUnit_r17.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](businessUnit_r17.name);
        }
      }

      function EditPropertyModalComponent_ng_container_7_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pType_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pType_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pType_r18.name);
        }
      }

      function EditPropertyModalComponent_ng_container_7_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r19.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r19.firstName, " ", user_r19.lastName, "");
        }
      }

      function EditPropertyModalComponent_ng_container_7_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r20.firstName, " ", user_r20.lastName, "");
        }
      }

      function EditPropertyModalComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setAddress", function EditPropertyModalComponent_ng_container_7_Template_app_google_auto_complete_setAddress_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.getAddress($event);
          });

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
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      function EditPropertyModalComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPropertyModalComponent_ng_container_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var EMPTY_Property = /*#__PURE__*/function () {
        function EMPTY_Property() {
          _classCallCheck(this, EMPTY_Property);
        }

        _createClass(EMPTY_Property, null, [{
          key: "DEFAULT_PropertyModel",
          get: function get() {
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
              propertyAddress: {}
            };
          }
        }]);

        return EMPTY_Property;
      }();

      var EditPropertyModalComponent = /*#__PURE__*/function () {
        function EditPropertyModalComponent(fb, modal, zone) {
          _classCallCheck(this, EditPropertyModalComponent);

          this.fb = fb;
          this.modal = modal;
          this.zone = zone;
          this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.BusinessUnits = _fake_fake_server_ownerships_table__WEBPACK_IMPORTED_MODULE_4__["OwnershipsTable"].ownerships;
          this.Users = _fake_fake_server_users_table__WEBPACK_IMPORTED_MODULE_5__["UsersTable"].users;
          this.subscriptions = [];
          this.PropertyTypes = [{
            id: 1,
            name: "Residential"
          }, {
            id: 2,
            name: "Commerical"
          }];
        }

        _createClass(EditPropertyModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadProperty(); //this.getPlaceAutocomplete();
          }
        }, {
          key: "loadProperty",
          value: function loadProperty() {
            if (!this.propertyInput) {
              this.property = EMPTY_Property.DEFAULT_PropertyModel;
              this.loadForm();
            } else {
              console.log(this.propertyInput);
              this.property = this.propertyInput;
              this.loadForm(); //const sb = this.customersService.getItemById(this.id).pipe(
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
        }, {
          key: "loadForm",
          value: function loadForm() {
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
              propertyManagerId: [this.property.propertyManagerId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            });
            console.log(this.formGroup);
          }
        }, {
          key: "save",
          value: function save() {
            this.prepareCustomer(); //this.create();

            if (this.property.id) {//this.edit();
            } else {
              this.create();
            }

            this.passEntry.emit(this.newDealInfo.properties);
            this.modal.close(this.newDealInfo.properties);
          }
        }, {
          key: "edit",
          value: function edit() {
            this.property = this.newDealInfo.properties.find(); //const sbUpdate = this.customersService.update(this.customer).pipe(
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
        }, {
          key: "create",
          value: function create() {
            var maxId = 0;

            if (this.newDealInfo.properties.length > 0) {
              maxId = Math.max.apply(Math, this.newDealInfo.properties.map(function (o) {
                return o.id;
              }));
            } //alert(maxId);


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
        }, {
          key: "prepareCustomer",
          value: function prepareCustomer() {
            var _this14 = this;

            var formData = this.formGroup.value; //this.property.id = new Date(formData.dob);

            this.property.propertyName = formData.propertyName;
            this.property.propertyTypeId = formData.propertyTypeId;
            this.property.units = formData.units;
            this.property.propertyType = this.PropertyTypes.filter(function (x) {
              return x.id == _this14.property.propertyTypeId;
            })[0].name;
            this.property.businessUnitId = formData.businessUnitId;
            this.property.businessUnitName = this.BusinessUnits.filter(function (x) {
              return x.id == _this14.property.businessUnitId;
            })[0].name;
            this.property.assetManagerId = formData.assetManagerId;
            var selectedAssetManager = this.Users.find(function (x) {
              return x.id == _this14.property.assetManagerId;
            });
            this.property.assetManager = selectedAssetManager.firstName;
            this.property.propertyManagerId = formData.propertyManagerId;
            var selectedPropertyManager = this.Users.find(function (x) {
              return x.id == _this14.property.propertyManagerId;
            });
            this.property.propertyManager = selectedPropertyManager.firstName; //this.property.propertyManager = formData.propertyManager;
            //this.property.dateOfBbirth = formData.dob;
            //this.property.ipAddress = formData.ipAddress;
            //this.property.lastName = formData.lastName;
            //this.property.type = +formData.type;
            //this.property.userName = formData.userName;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          } // helpers for View

        }, {
          key: "isControlValid",
          value: function isControlValid(controlName) {
            var control = this.formGroup.controls[controlName];
            return control.valid && (control.dirty || control.touched);
          }
        }, {
          key: "isControlInvalid",
          value: function isControlInvalid(controlName) {
            var control = this.formGroup.controls[controlName];
            return control.invalid && (control.dirty || control.touched);
          }
        }, {
          key: "controlHasError",
          value: function controlHasError(validation, controlName) {
            var control = this.formGroup.controls[controlName];
            return control.hasError(validation) && (control.dirty || control.touched);
          }
        }, {
          key: "isControlTouched",
          value: function isControlTouched(controlName) {
            var control = this.formGroup.controls[controlName];
            return control.dirty || control.touched;
          }
        }, {
          key: "getAddress",
          value: function getAddress(place) {
            var _this15 = this;

            this.address = place['formatted_address']; //this.phone = this.getPhone(place);
            //alert(this.address)

            this.formattedAddress = place['formatted_address'];
            this.property.propertyAddressString = this.formattedAddress;
            this.zone.run(function () {
              return _this15.formattedAddress = place['formatted_address'];
            });
          }
        }, {
          key: "getAddrComponent",
          value: function getAddrComponent(place, componentTemplate) {
            var result;

            for (var i = 0; i < place.address_components.length; i++) {
              var addressType = place.address_components[i].types[0];

              if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
              }
            }

            return;
          }
        }, {
          key: "getStreetNumber",
          value: function getStreetNumber(place) {
            var COMPONENT_TEMPLATE = {
              street_number: 'short_name'
            },
                streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return streetNumber;
          }
        }, {
          key: "getStreet",
          value: function getStreet(place) {
            var COMPONENT_TEMPLATE = {
              route: 'long_name'
            },
                street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return street;
          }
        }, {
          key: "getCity",
          value: function getCity(place) {
            var COMPONENT_TEMPLATE = {
              locality: 'long_name'
            },
                city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return city;
          }
        }, {
          key: "getState",
          value: function getState(place) {
            var COMPONENT_TEMPLATE = {
              administrative_area_level_1: 'short_name'
            },
                state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return state;
          }
        }, {
          key: "getDistrict",
          value: function getDistrict(place) {
            var COMPONENT_TEMPLATE = {
              administrative_area_level_2: 'short_name'
            },
                state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return state;
          }
        }, {
          key: "getCountryShort",
          value: function getCountryShort(place) {
            var COMPONENT_TEMPLATE = {
              country: 'short_name'
            },
                countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return countryShort;
          }
        }, {
          key: "getCountry",
          value: function getCountry(place) {
            var COMPONENT_TEMPLATE = {
              country: 'long_name'
            },
                country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return country;
          }
        }, {
          key: "getPostCode",
          value: function getPostCode(place) {
            var COMPONENT_TEMPLATE = {
              postal_code: 'long_name'
            },
                postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return postCode;
          }
        }, {
          key: "getPhone",
          value: function getPhone(place) {
            var COMPONENT_TEMPLATE = {
              formatted_phone_number: 'formatted_phone_number'
            },
                phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
            return phone;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            /*this.getPlaceAutocomplete();*/
          }
        }]);

        return EditPropertyModalComponent;
      }();

      EditPropertyModalComponent.ɵfac = function EditPropertyModalComponent_Factory(t) {
        return new (t || EditPropertyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      EditPropertyModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditPropertyModalComponent,
        selectors: [["app-edit-property-modal"]],
        viewQuery: function EditPropertyModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
          }
        },
        inputs: {
          id: "id",
          propertyInput: "propertyInput",
          newDealInfo: "newDealInfo"
        },
        outputs: {
          passEntry: "passEntry"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
          useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
          useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomDateParserFormatter"]
        }])],
        decls: 12,
        vars: 6,
        consts: [[1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "404px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-4"], [1, "form-label"], ["type", "text", "name", "propertyName", "placeholder", "Property Name", "autocomplete", "off", "formControlName", "propertyName", 1, "form-control", "form-control-lg", "form-control-solid"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["adressType", "geocode", 3, "setAddress"], ["type", "number", "name", "units", "placeholder", "Units", "autocomplete", "off", "formControlName", "units", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "businessUnitId", "formControlName", "businessUnitId", 1, "form-control", "form-control-lg", "form-control-solid"], [3, "value", 4, "ngFor", "ngForOf"], [1, "feedback"], ["name", "propertyTypeId", "formControlName", "propertyTypeId", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "propertyManagerId", "formControlName", "propertyManagerId", 1, "form-control", "form-control-lg", "form-control-solid"], ["name", "assetManagerId", "formControlName", "assetManagerId", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "valid-feedback"], [1, "invalid-feedback"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-elevate", 3, "click"]],
        template: function EditPropertyModalComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPropertyModalComponent_Template_button_click_9_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPropertyModalComponent_ng_container_11_Template, 3, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _google_auto_complete_google_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__["GoogleAutoCompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".modal {\n  z-index: 1001 !important;\n}\n\n  .modal-backdrop {\n  z-index: 1000 !important;\n}\n\n  .pac-container {\n  z-index: 1055 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2VkaXQtcHJvcGVydHktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1wcm9wZXJ0eS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubW9kYWwge1xuICAgIHotaW5kZXg6IDEwMDEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1iYWNrZHJvcCB7XG4gICAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnBhYy1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEwNTUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPropertyModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-property-modal',
            templateUrl: './edit-property-modal.component.html',
            styleUrls: ['./edit-property-modal.component.scss'],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"],
              useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
              useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_3__["CustomDateParserFormatter"]
            }]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          propertyInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          newDealInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addresstext']
          }]
        });
      })();
      /***/

    },

    /***/
    "ws06": function ws06(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDashboardComponent", function () {
        return DealsDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_fake/fake-server/deals.table */
      "knAO");
      /* harmony import */


      var _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/fake/deals.service */
      "BfxI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _metronic_partials_content_widgets_asset_module_deal_info_widget_deal_info_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../_metronic/partials/content/widgets/asset-module/deal-info-widget/deal-info-widget.component */
      "TA49");

      function DealsDashboardComponent_div_6_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function DealsDashboardComponent_div_6_div_10_app_deal_info_widget_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-deal-info-widget", 14);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var item_r5 = ctx_r8.$implicit;
          var j_r6 = ctx_r8.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dealInfo", item_r5)("widgetHeight", "150px")("ngClass", j_r6 < 5 ? "" : "hiddenWidget hiddenWidget");
        }
      }

      function DealsDashboardComponent_div_6_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DealsDashboardComponent_div_6_div_10_app_deal_info_widget_1_Template, 1, 3, "app-deal-info-widget", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var j_r6 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r6 < 5 || ctx_r4.show);
        }
      }

      function DealsDashboardComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DealsDashboardComponent_div_6_Template_input_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.show = !ctx_r9.show;
          });

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
        }

        if (rf & 2) {
          var gDeals_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project Status: ", gDeals_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gDeals_r1.value.length > 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gDeals_r1.value);
        }
      }

      var DealsDashboardComponent = /*#__PURE__*/function () {
        function DealsDashboardComponent(dealsService) {
          _classCallCheck(this, DealsDashboardComponent);

          this.dealsService = dealsService;
          this.deals = _fake_fake_server_deals_table__WEBPACK_IMPORTED_MODULE_1__["DealsTable"].deals;
          this.groupedDeals = [];
          this.value = "test";
          this.show = false;
        }

        _createClass(DealsDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.groupedDeals = Array.from(this.groupBy(this.deals, function (gDeal) {
              return gDeal.statusName;
            }), function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  name = _ref2[0],
                  value = _ref2[1];

              return {
                name: name,
                value: value
              };
            });
            console.log(this.groupedDeals); //console.log(this.groupedDeals.values());
            //console.log(this.groupedDeals.Keys());

            /*console.log(Array.from(this.groupedDeals, ([name, value]) => ({ name, value })));*/
          }
        }, {
          key: "groupBy",
          value: function groupBy(list, keyGetter) {
            var map = new Map();
            list.forEach(function (item) {
              var key = keyGetter(item);
              var collection = map.get(key);

              if (!collection) {
                map.set(key, [item]);
              } else {
                collection.push(item);
              }
            });
            return map;
          }
        }, {
          key: "showAllProjects",
          value: function showAllProjects(statusName) {
            alert(statusName);
          }
        }]);

        return DealsDashboardComponent;
      }();

      DealsDashboardComponent.ɵfac = function DealsDashboardComponent_Factory(t) {
        return new (t || DealsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]));
      };

      DealsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DealsDashboardComponent,
        selectors: [["app-deals-dashboard"]],
        decls: 7,
        vars: 1,
        consts: [["routerLink", "/asset/createNewDeal", "routerLinkActive", "active", 1, "btn", "btn-primary"], [1, "menu-bullet", "menu-bullet-dot"], [1, "menu-text"], [4, "ngFor", "ngForOf"], [1, "p-1", "flex-grow-1"], [1, "text-black-50", "font-weight-bolder", "line-height-lg", "mb-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "ng-model", "show", 1, "form-check-input", 3, "change"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "row"], [4, "ngIf"], ["class", "col-md-3 mx-auto my-5", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mx-auto", "my-5"], ["cssClass", "gutter-b card-stretch", 3, "dealInfo", "widgetHeight", "ngClass", 4, "ngIf"], ["cssClass", "gutter-b card-stretch", 3, "dealInfo", "widgetHeight", "ngClass"]],
        template: function DealsDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupedDeals);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _metronic_partials_content_widgets_asset_module_deal_info_widget_deal_info_widget_component__WEBPACK_IMPORTED_MODULE_5__["DealInfoWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-deals-dashboard',
            templateUrl: './deals-dashboard.component.html'
          }]
        }], function () {
          return [{
            type: _services_fake_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-asset-asset-module-es5.js.map