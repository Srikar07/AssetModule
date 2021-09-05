import { Component, OnInit } from '@angular/core';
import { PendingTasksTable } from '../asset/_fake/fake-server/pending-tasks.table';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
})
export class PendingTasksComponent implements OnInit {
    pendingTasks: any;

    //loadPendingTasks(e) {
    //    console.log(e)
    //}
  
  constructor() { }

    ngOnInit(): void {
        this.pendingTasks = PendingTasksTable.pendingTasks[0].tasks;

        //console.log(this.pendingTasks)
  }

}
