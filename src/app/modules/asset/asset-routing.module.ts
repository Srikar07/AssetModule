import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset.component'
import { ExisitingDealsComponent } from './exisiting-deals/exisiting-deals.component'
import { DealsDashboardComponent } from './deals-dashboard/deals-dashboard.component'
import { ProjectsDashboardComponent } from './projects-dashboard/projects-dashboard.component'
import { CreateDealComponent } from './create-deal/create-deal.component'
import { ReviewDealInfoComponent } from './review-deal-info/review-deal-info.component'

const routes: Routes = [{
    path: '',
    component: AssetComponent,
    children: [
        {
            path: 'existingDeals',
            component: ExisitingDealsComponent,
        },
        {
            path: 'dealsDashboard',
            component: DealsDashboardComponent,
        },
        {
            path: 'projectsDashboard',
            component: ProjectsDashboardComponent
        },
        {
            path: 'createNewDeal',
            component: CreateDealComponent
        },
        {
            path: 'reviewDealInfo/:id',
            loadChildren: () =>
                import('../../modules/asset/review-deal-info/review-deal-info.module').then(
                    (m) => m.ReviewDealInfoModule
                ),
        },
        //{
        //    path: 'reviewDealInfo',
        //    loadChildren: () =>
        //        import('../../modules/asset/review-deal-info/review-deal-info.module').then(
        //            (m) => m.ReviewDealInfoModule
        //        ),
        //},
        //{
        //    path: 'product/edit',
        //    component: ProductEditComponent
        //},
        //{
        //    path: 'product/edit/:id',
        //    component: ProductEditComponent
        //},
        { path: '', redirectTo: 'customers', pathMatch: 'full' },
        { path: '**', redirectTo: 'customers', pathMatch: 'full' },
    ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
