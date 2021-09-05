import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DealsTable } from '../_fake/fake-server/deals.table';
import { NodeService } from '../_services/node.service';

@Component({
    selector: 'app-review-deal-info',
    templateUrl: './review-deal-info.component.html',
    providers: [NodeService],
    styleUrls: ['./review-deal-info.component.scss']
})
export class ReviewDealInfoComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private nodeService: NodeService) { }

    reviewInfo: any;
    deals = DealsTable.deals;

    node: Node;
    ngOnInit(): void {
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
            this.reviewInfo.id = "5"
        }

        this.nodeService.node$.subscribe(
            node => {
                this.nodeService.addNode(this.reviewInfo);
            },
            err => {
                console.log(err);
            }
        );
    }

}
