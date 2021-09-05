import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../../../../../../modules/asset/_models/deals.model';

@Component({
  selector: 'app-deal-info-widget',
  templateUrl: './deal-info-widget.component.html',
})
export class DealInfoWidgetComponent implements OnInit {

    constructor(private router: Router) { }

    @Input() dealInfo: any;
    @Input() cssClass: '';
    @Input() widgetHeight: any;
    ngOnInit(): void {
     
    }

    navigateToReviewPage() {
        this.router.navigate(['asset/reviewDealInfo/' + this.dealInfo.id]);
    }



}
