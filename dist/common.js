(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "BfxI":
/*!***************************************************************!*\
  !*** ./src/app/modules/asset/_services/fake/deals.service.ts ***!
  \***************************************************************/
/*! exports provided: DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
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
class DealsService extends _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__["TableService"] {
    constructor(http, baseHttp) {
        super(http);
        this.baseHttp = baseHttp;
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl}/deals`;
    }
    find(tableState) {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake_fake_helpers_http_extenstions__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            console.log(result);
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
                //c.statusName = status;
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
DealsService.ɵfac = function DealsService_Factory(t) { return new (t || DealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DealsService, factory: DealsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QDgw":
/*!********************************************************!*\
  !*** ./src/app/_fake/fake-helpers/http-extenstions.ts ***!
  \********************************************************/
/*! exports provided: baseFilter, sortArray, filterArray, searchInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseFilter", function() { return baseFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortArray", function() { return sortArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterArray", function() { return filterArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInArray", function() { return searchInArray; });
function baseFilter(entities, requestObj) {
    // Filtration
    let entitiesResult = filterArray(entities, requestObj);
    // Search
    entitiesResult = searchInArray(entitiesResult, requestObj.searchTerm);
    // Sorting
    // start
    if (requestObj.sorting.column) {
        entitiesResult = sortArray(entitiesResult, requestObj.sorting.column, requestObj.sorting.direction);
    }
    // end
    // Paginator
    // start
    const totalCount = entitiesResult.length;
    const startPosition = (requestObj.paginator.page - 1) * requestObj.paginator.pageSize;
    const endPosition = startPosition + requestObj.paginator.pageSize;
    entitiesResult = entitiesResult.slice(startPosition, endPosition);
    // end
    const responseObj = {
        items: entitiesResult,
        total: totalCount
    };
    return responseObj;
}
function sortArray(incomingArray, sortField = '', sortOrder = 'asc') {
    if (!sortField) {
        return incomingArray;
    }
    let result = [];
    result = incomingArray.sort((a, b) => {
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
    let result = incomingArray;
    const filtrationFields = Object.keys(requestObj.filter);
    filtrationFields.forEach((keyName) => {
        // tslint:disable-next-line:triple-equals
        result = result.filter(el => el[keyName] == requestObj.filter[keyName]);
    });
    return result;
}
function searchInArray(incomingArray, searchTerm = '') {
    if (!searchTerm) {
        return incomingArray;
    }
    const acceptableForSearchTypes = { number: 1, string: 2 };
    const result = incomingArray.filter(row => {
        let termIsFoundInRow = false;
        const keys = Object.keys(row).filter(keyName => acceptableForSearchTypes[typeof row[keyName]] && row[keyName]);
        for (const keyName of keys) {
            if (row[keyName].toString().toLowerCase().indexOf(searchTerm) > -1) {
                termIsFoundInRow = true;
                break;
            }
        }
        return termIsFoundInRow;
    });
    return result;
}


/***/ }),

/***/ "Qy8N":
/*!*************************************************************************!*\
  !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('cPassword').value;
        if (password !== confirmPassword) {
            control.get('cPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "rrsC":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/user.model.ts ***!
  \****************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.model */ "LZ44");

class UserModel extends _auth_model__WEBPACK_IMPORTED_MODULE_0__["AuthModel"] {
    setUser(user) {
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
}


/***/ }),

/***/ "tM0M":
/*!****************************************************!*\
  !*** ./src/app/modules/i18n/translation.module.ts ***!
  \****************************************************/
/*! exports provided: TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class TranslationModule {
}
TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslationModule_Factory(t) { return new (t || TranslationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map