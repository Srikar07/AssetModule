import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { ExisitingDealsComponent } from './exisiting-deals/exisiting-deals.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DealsDashboardComponent } from './deals-dashboard/deals-dashboard.component';
import { ProjectsDashboardComponent } from './projects-dashboard/projects-dashboard.component';
import { WidgetsModule } from './../../_metronic/partials/content/widgets/widgets.module';
import { ShowRemainingDealsComponent } from './show-remaining-deals/show-remaining-deals.component';
import { CreateDealComponent } from './create-deal/create-deal.component'
import { NgxDropzoneModule } from 'ngx-dropzone';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReviewDealInfoComponent } from './review-deal-info/review-deal-info.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleAutoCompleteComponent } from './google-auto-complete/google-auto-complete.component';
import { EditPropertyModalComponent } from './create-deal/components/edit-property-modal/edit-property-modal.component';



@NgModule({
    declarations: [
        ExisitingDealsComponent,
        DealsDashboardComponent,
        ProjectsDashboardComponent,
        ShowRemainingDealsComponent,
        CreateDealComponent,
        ReviewDealInfoComponent,
        GoogleAutoCompleteComponent,
        EditPropertyModalComponent],
    imports: [
        CommonModule,
        AssetRoutingModule,
        CRUDTableModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        InlineSVGModule,
        NgbModalModule,
        NgbDatepickerModule,
        WidgetsModule,
        NgxDropzoneModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        PdfViewerModule,
        NgbModule,       
    ]
})
export class AssetModule { }
