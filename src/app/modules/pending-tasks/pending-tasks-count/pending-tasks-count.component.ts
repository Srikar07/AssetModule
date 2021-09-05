import { Component, OnInit } from '@angular/core';
import { PendingTasksTable } from '../../asset/_fake/fake-server/pending-tasks.table';

@Component({
  selector: 'app-pending-tasks-count',
  templateUrl: './pending-tasks-count.component.html',
  styleUrls: ['./pending-tasks-count.component.scss']
})
export class PendingTasksCountComponent implements OnInit {
    pendingTasks: any;

  constructor() { }

    ngOnInit(): void {
        this.pendingTasks = PendingTasksTable.pendingTasks[0].tasks;

        //console.log(this.pendingTasks)
    }
}
