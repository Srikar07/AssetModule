"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsDataContext = void 0;
var deals_table_1 = require("./deals.table");
// Wrapper class
var DealsDataContext = /** @class */ (function () {
    function DealsDataContext() {
    }
    DealsDataContext.deals = deals_table_1.DealsTable.deals;
    return DealsDataContext;
}());
exports.DealsDataContext = DealsDataContext;
//# sourceMappingURL=deals.data-context.js.map