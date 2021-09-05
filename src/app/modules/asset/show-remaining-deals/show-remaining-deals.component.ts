import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-show-remaining-deals',
    templateUrl: './show-remaining-deals.component.html',
    styleUrls: ['./show-remaining-deals.component.scss']
})
export class ShowRemainingDealsComponent implements OnInit {

    constructor() { }
    @Input() showDetails: any;
    ngOnInit(): void {
    }

    open = false;

}
