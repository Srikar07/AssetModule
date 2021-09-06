
import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel, PaginatorState, SortState, GroupingState } from '../../../../_metronic/shared/crud-table';
import { Deal } from '../../_models/deals.model';
import { baseFilter } from '../../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

const DEFAULT_STATE: ITableState = {
    filter: {},
    paginator: new PaginatorState(),
    sorting: new SortState(),
    searchTerm: '',
    grouping: new GroupingState(),
    entityId: undefined
};

@Injectable({
    providedIn: 'root'
})
export class DealsService extends TableService<Deal> implements OnDestroy {
    API_URL = `${environment.apiUrl}/deals`;
    constructor(@Inject(HttpClient) http, private baseHttp: HttpClient) {
        super(http);
    }

    find(tableState: ITableState): Observable<TableResponseModel<Deal>> {
        return this.http.get<Deal[]>(this.API_URL).pipe(
            map((response: Deal[]) => {
                const filteredResult = baseFilter(response, tableState);
                const result: TableResponseModel<Deal> = {
                    items: filteredResult.items,
                    total: filteredResult.total
                };

                console.log(result);
                return result;
            })
        );
    }

    deleteItems(ids: number[] = []): Observable<any> {
        const tasks$ = [];
        ids.forEach(id => {
            tasks$.push(this.delete(id));
        });
        return forkJoin(tasks$);
    }

    updateStatusForItems(ids: number[], status: number): Observable<any> {
        return this.http.get<Deal[]>(this.API_URL).pipe(
            map((customers: Deal[]) => {
                return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
                    //c.statusName = status;
                    return c;
                });
            }),
            exhaustMap((customers: Deal[]) => {
                const tasks$ = [];
                customers.forEach(customer => {
                    tasks$.push(this.update(customer));
                });
                return forkJoin(tasks$);
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}