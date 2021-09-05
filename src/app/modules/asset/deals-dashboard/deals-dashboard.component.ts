import { Component, OnInit } from '@angular/core';
import { DealsTable } from '../_fake/fake-server/deals.table';
import { Deal } from '../_models/deals.model';

import { DealsService } from '../_services/fake/deals.service'

@Component({
    selector: 'app-deals-dashboard',
    templateUrl: './deals-dashboard.component.html',
})
export class DealsDashboardComponent implements OnInit {

    deals = DealsTable.deals;
    groupedDeals: any=[];
    value = "test";
    show = false;
    constructor(public dealsService: DealsService) { }

    ngOnInit(): void {
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
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    showAllProjects(statusName) {
        alert(statusName)
    }
}
