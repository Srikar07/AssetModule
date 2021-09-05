import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../_services/node.service';

@Component({
    selector: 'app-properties-info',
    templateUrl: './properties-info.component.html',
    styleUrls: ['./properties-info.component.scss']
})
export class PropertiesInfoComponent implements OnInit {
    dealInfo: any;

    constructor(private nodeService: NodeService) {
        nodeService.node$.subscribe(n => this.dealInfo = n);
        console.log(this.dealInfo)
    }

    ngOnInit(): void {

    }

}
