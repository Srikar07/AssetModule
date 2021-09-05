import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealsService } from '../_services/fake/deals.service';
import {
    GroupingState,
    PaginatorState,
    SortState,
    ISortView,
    IFilterView,
    IGroupingView,
    ISearchView,
} from '../../../_metronic/shared/crud-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exisiting-deals',
  templateUrl: './exisiting-deals.component.html',
  styleUrls: ['./exisiting-deals.component.scss']
})
export class ExisitingDealsComponent implements
    OnInit,
    OnDestroy,
    ISortView,
    IFilterView,
    IGroupingView,
    ISearchView,
    IFilterView {
    paginator: PaginatorState;
    sorting: SortState;
    grouping: GroupingState;
    isLoading: boolean;
    filterGroup: FormGroup;
    searchGroup: FormGroup;
    private subscriptions: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    constructor(
        private fb: FormBuilder,
        private modalService: NgbModal,
        public dealsService: DealsService,
        private router: Router
    ) { }
    

    ngOnInit(): void {
        this.filterForm();
        this.searchForm();
        this.dealsService.fetch();
        
        this.grouping = this.dealsService.grouping;
        this.paginator = this.dealsService.paginator;
        this.sorting = this.dealsService.sorting;
        const sb = this.dealsService.isLoading$.subscribe(res => this.isLoading = res);
        this.subscriptions.push(sb);
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sb) => sb.unsubscribe());
    }

    // filtration
    filterForm() {
        this.filterGroup = this.fb.group({
            status: [''],
            type: [''],
            searchTerm: [''],
        });
        this.subscriptions.push(
            this.filterGroup.controls.status.valueChanges.subscribe(() =>
                this.filter()
            )
        );
        this.subscriptions.push(
            this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter())
        );
    }

    filter() {
        const filter = {};
        const status = this.filterGroup.get('status').value;
        if (status) {
            filter['status'] = status;
        }

        const type = this.filterGroup.get('type').value;
        if (type) {
            filter['type'] = type;
        }
        this.dealsService.patchState({ filter });
    }

    // search
    searchForm() {
        this.searchGroup = this.fb.group({
            searchTerm: [''],
        });
        const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
            .pipe(
                /*
              The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
              we are limiting the amount of server requests emitted to a maximum of one every 150ms
              */
                debounceTime(150),
                distinctUntilChanged()
            )
            .subscribe((val) => this.search(val));
        this.subscriptions.push(searchEvent);
    }

    search(searchTerm: string) {
        console.log(searchTerm);
        this.dealsService.patchState({ searchTerm: searchTerm.toLowerCase() });
    }

    // sorting
    sort(column: string) {
        const sorting = this.sorting;
        const isActiveColumn = sorting.column === column;
        if (!isActiveColumn) {
            sorting.column = column;
            sorting.direction = 'asc';
        } else {
            sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
        }
        this.dealsService.patchState({ sorting });
    }

    // pagination
    paginate(paginator: PaginatorState) {
        this.dealsService.patchState({ paginator });
    }

    updateStatusForSelected() { }

    delete(id: number) { }
    edit(id: number) { }

    create() {}
    deleteSelected() { }
    fetchSelected() { }

    navigateToReviewPage(dealId) {
        this.router.navigate(['asset/reviewDealInfo/' + dealId]);
    }
}
