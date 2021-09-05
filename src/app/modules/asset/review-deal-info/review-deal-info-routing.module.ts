import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealBasicInformationComponent } from './deal-basic-information/deal-basic-information.component';
import { DealDocumentsComponent } from './deal-documents/deal-documents.component';
import { DefaultReviewInfoPageComponent } from './default-review-info-page/default-review-info-page.component';
import { PropertiesInfoComponent } from './properties-info/properties-info.component';
import { ReviewDealInfoComponent } from './review-deal-info.component';

const routes: Routes = [
    {
        path: '',
        component: ReviewDealInfoComponent,
        children: [

            {
                path: '',
                component: DefaultReviewInfoPageComponent,
            }, {
                path: 'Default',
                component: DefaultReviewInfoPageComponent,
            }, {
                path: 'dealBasicInformation',
                component: DealBasicInformationComponent,
            },
            {
                path: 'dealDocuments',
                component: DealDocumentsComponent,
            },
            {
                path: 'properties',
                component: PropertiesInfoComponent,
            },
            
            { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
            { path: '**', redirectTo: 'profile-overview', pathMatch: 'full' },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewDealInfoRoutingModule { }
