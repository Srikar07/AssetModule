import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingTasksRoutingModule } from './pending-tasks-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { DealApprovalComponent } from './deal-approval/deal-approval.component';
import { PendingTasksCountComponent } from './pending-tasks-count/pending-tasks-count.component';


@NgModule({
    declarations: [DealApprovalComponent, PendingTasksCountComponent],
    imports: [
        CommonModule,
        PendingTasksRoutingModule,
        MatChipsModule
    ], exports: [
        PendingTasksCountComponent],
})
export class PendingTasksModule { }
