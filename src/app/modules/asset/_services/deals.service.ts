import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../../../_metronic/shared/crud-table';
import { Deal } from '../_models/deals.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DealsService extends TableService<Deal> implements OnDestroy {
    API_URL = `${environment.apiUrl}/customers`;
    constructor(@Inject(HttpClient) http) {
        super(http);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}