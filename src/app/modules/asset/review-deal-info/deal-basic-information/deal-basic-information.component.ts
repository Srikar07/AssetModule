import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealsTable } from '../../_fake/fake-server/deals.table';
import { NodeService } from '../../_services/node.service';

@Component({
    selector: 'app-deal-basic-information',
    templateUrl: './deal-basic-information.component.html',
    styleUrls: ['./deal-basic-information.component.scss']
})
export class DealBasicInformationComponent implements OnInit {

    cssClass = "card-stretch gutter-b";
    currentTab = 'Day';

    reviewInfo: any;
    deals = DealsTable.deals;
    constructor(private route: ActivatedRoute, private nodeService: NodeService) {
        nodeService.node$.subscribe(n => this.reviewInfo = n);

    }

    ngOnInit(): void {
        //var dealId = this.route.snapshot.paramMap.get('id');
        //this.reviewInfo = this.deals.find(x => x.id == dealId);
        if (this.reviewInfo === 'undefined') {
            this.reviewInfo = null;
        }

        if (this.reviewInfo == null) {
            this.reviewInfo.name = "Test";
            this.reviewInfo.businessUnitName = "Test";
            this.reviewInfo.startDate = "Test";
            this.reviewInfo.id = "5"
        }


    }

}
