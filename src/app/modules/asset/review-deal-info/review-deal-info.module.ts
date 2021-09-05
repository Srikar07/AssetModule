import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewDealInfoRoutingModule } from './review-deal-info-routing.module';
import { DealDocumentsComponent } from './deal-documents/deal-documents.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DealBasicInformationComponent } from './deal-basic-information/deal-basic-information.component';
import { DefaultReviewInfoPageComponent } from './default-review-info-page/default-review-info-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PropertiesInfoComponent } from './properties-info/properties-info.component';


@NgModule({
    declarations: [DealDocumentsComponent, DealBasicInformationComponent, DefaultReviewInfoPageComponent, PropertiesInfoComponent],
    imports: [
        CommonModule,
        ReviewDealInfoRoutingModule,
        PdfViewerModule,
        NgbModule,
        HttpClientModule
    ]
})
export class ReviewDealInfoModule { }
