import { Component, OnInit } from '@angular/core';
import { PendingTasksTable } from '../../asset/_fake/fake-server/pending-tasks.table';

@Component({
  selector: 'app-deal-approval',
  templateUrl: './deal-approval.component.html',
  styleUrls: ['./deal-approval.component.scss']
})
export class DealApprovalComponent implements OnInit {

    constructor() { }

    pendingTasks: any;

    ngOnInit(): void {

        this.pendingTasks = PendingTasksTable.pendingTasks[0].tasks.filter(x => x.taskName == "dealApproval")[0].tasksList;
        //console.log(this.pendingTasks);
    }

    approve(task) {
        const index: number = this.pendingTasks.indexOf(task);
        if (index !== -1) {
            this.pendingTasks.splice(index, 1);
        }
        PendingTasksTable.pendingTasks[0].tasks.filter(x => x.taskName == "dealApproval")[0].count--;

        //this.pendingTasks.pop
    }
}
