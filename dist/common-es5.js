(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "BfxI": function BfxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsService", function () {
        return DealsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../_fake/fake-helpers/http-extenstions */
      "QDgw");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");

      var DEFAULT_STATE = {
        filter: {},
        paginator: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["PaginatorState"](),
        sorting: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["SortState"](),
        searchTerm: '',
        grouping: new _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
        entityId: undefined
      };

      var DealsService = /*#__PURE__*/function (_metronic_shared_crud) {
        _inherits(DealsService, _metronic_shared_crud);

        var _super = _createSuper(DealsService);

        function DealsService(http, baseHttp) {
          var _this;

          _classCallCheck(this, DealsService);

          _this = _super.call(this, http);
          _this.baseHttp = baseHttp;
          _this.API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/deals");
          return _this;
        }

        _createClass(DealsService, [{
          key: "find",
          value: function find(tableState) {
            return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              var filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response, tableState);
              var result = {
                items: filteredResult.items,
                total: filteredResult.total
              };
              console.log(result);
              return result;
            }));
          }
        }, {
          key: "deleteItems",
          value: function deleteItems() {
            var _this2 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var tasks$ = [];
            ids.forEach(function (id) {
              tasks$.push(_this2["delete"](id));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
          }
        }, {
          key: "updateStatusForItems",
          value: function updateStatusForItems(ids, status) {
            var _this3 = this;

            return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customers) {
              return customers.filter(function (c) {
                return ids.indexOf(c.id) > -1;
              }).map(function (c) {
                //c.statusName = status;
                return c;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (customers) {
              var tasks$ = [];
              customers.forEach(function (customer) {
                tasks$.push(_this3.update(customer));
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(tasks$);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sb) {
              return sb.unsubscribe();
            });
          }
        }]);

        return DealsService;
      }(_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"]);

      DealsService.ɵfac = function DealsService_Factory(t) {
        return new (t || DealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DealsService,
        factory: DealsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QDgw": function QDgw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseFilter", function () {
        return baseFilter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortArray", function () {
        return sortArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterArray", function () {
        return filterArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "searchInArray", function () {
        return searchInArray;
      });

      function baseFilter(entities, requestObj) {
        // Filtration
        var entitiesResult = filterArray(entities, requestObj); // Search

        entitiesResult = searchInArray(entitiesResult, requestObj.searchTerm); // Sorting
        // start

        if (requestObj.sorting.column) {
          entitiesResult = sortArray(entitiesResult, requestObj.sorting.column, requestObj.sorting.direction);
        } // end
        // Paginator
        // start


        var totalCount = entitiesResult.length;
        var startPosition = (requestObj.paginator.page - 1) * requestObj.paginator.pageSize;
        var endPosition = startPosition + requestObj.paginator.pageSize;
        entitiesResult = entitiesResult.slice(startPosition, endPosition); // end

        var responseObj = {
          items: entitiesResult,
          total: totalCount
        };
        return responseObj;
      }

      function sortArray(incomingArray) {
        var sortField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

        if (!sortField) {
          return incomingArray;
        }

        var result = [];
        result = incomingArray.sort(function (a, b) {
          if (a[sortField] < b[sortField]) {
            return sortOrder === 'asc' ? -1 : 1;
          }

          if (a[sortField] > b[sortField]) {
            return sortOrder === 'asc' ? 1 : -1;
          }

          return 0;
        });
        return result;
      }

      function filterArray(incomingArray, requestObj) {
        if (!requestObj || !requestObj.filter) {
          return incomingArray;
        }

        var result = incomingArray;
        var filtrationFields = Object.keys(requestObj.filter);
        filtrationFields.forEach(function (keyName) {
          // tslint:disable-next-line:triple-equals
          result = result.filter(function (el) {
            return el[keyName] == requestObj.filter[keyName];
          });
        });
        return result;
      }

      function searchInArray(incomingArray) {
        var searchTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (!searchTerm) {
          return incomingArray;
        }

        var acceptableForSearchTypes = {
          number: 1,
          string: 2
        };
        var result = incomingArray.filter(function (row) {
          var termIsFoundInRow = false;
          var keys = Object.keys(row).filter(function (keyName) {
            return acceptableForSearchTypes[typeof row[keyName]] && row[keyName];
          });

          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var keyName = _step.value;

              if (row[keyName].toString().toLowerCase().indexOf(searchTerm) > -1) {
                termIsFoundInRow = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return termIsFoundInRow;
        });
        return result;
      }
      /***/

    },

    /***/
    "Qy8N": function Qy8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      var ConfirmPasswordValidator = /*#__PURE__*/function () {
        function ConfirmPasswordValidator() {
          _classCallCheck(this, ConfirmPasswordValidator);
        }

        _createClass(ConfirmPasswordValidator, null, [{
          key: "MatchPassword",
          value:
          /**
           * Check matching password with confirm password
           * @param control AbstractControl
           */
          function MatchPassword(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('cPassword').value;

            if (password !== confirmPassword) {
              control.get('cPassword').setErrors({
                ConfirmPassword: true
              });
            } else {
              return null;
            }
          }
        }]);

        return ConfirmPasswordValidator;
      }();
      /***/

    },

    /***/
    "rrsC": function rrsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModel", function () {
        return UserModel;
      });
      /* harmony import */


      var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.model */
      "LZ44");

      var UserModel = /*#__PURE__*/function (_auth_model__WEBPACK_) {
        _inherits(UserModel, _auth_model__WEBPACK_);

        var _super2 = _createSuper(UserModel);

        function UserModel() {
          _classCallCheck(this, UserModel);

          return _super2.apply(this, arguments);
        }

        _createClass(UserModel, [{
          key: "setUser",
          value: function setUser(user) {
            this.id = user.id;
            this.username = user.username || '';
            this.password = user.password || '';
            this.fullname = user.fullname || '';
            this.email = user.email || '';
            this.pic = user.pic || './assets/media/users/default.jpg';
            this.roles = user.roles || [];
            this.occupation = user.occupation || '';
            this.companyName = user.companyName || '';
            this.phone = user.phone || '';
            this.address = user.address;
            this.socialNetworks = user.socialNetworks;
          }
        }]);

        return UserModel;
      }(_auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"]);
      /***/

    },

    /***/
    "tM0M": function tM0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationModule", function () {
        return TranslationModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslationModule = function TranslationModule() {
        _classCallCheck(this, TranslationModule);
      };

      TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TranslationModule
      });
      TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TranslationModule_Factory(t) {
          return new (t || TranslationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map