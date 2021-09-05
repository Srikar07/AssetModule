import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealApprovalComponent } from './deal-approval/deal-approval.component';
import { PendingTasksComponent } from './pending-tasks.component';

const routes: Routes = [{
    path: '',
    component: PendingTasksComponent,
    children: [
        {
            path: 'dealApproval',
            component: DealApprovalComponent,
        },
        //{
        //    path: 'dealsDashboard',
        //    component: DealsDashboardComponent,
        //},
        //{
        //    path: 'projectsDashboard',
        //    component: ProjectsDashboardComponent
        //},
        //{
        //    path: 'createNewDeal',
        //    component: CreateDealComponent
        //},
        //{
        //    path: 'reviewDealInfo/:id',
        //    loadChildren: () =>
        //        import('../../modules/asset/review-deal-info/review-deal-info.module').then(
        //            (m) => m.ReviewDealInfoModule
        //        ),
        //},
        
    ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingTasksRoutingModule { }
