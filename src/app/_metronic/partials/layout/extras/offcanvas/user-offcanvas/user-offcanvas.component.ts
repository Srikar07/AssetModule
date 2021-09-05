import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../../modules/auth/_models/user.model';
import { AuthService } from '../../../../../../modules/auth/_services/auth.service';
import { PendingTasksTable } from '../../../../../../modules/asset/_fake/fake-server/pending-tasks.table';

@Component({
    selector: 'app-user-offcanvas',
    templateUrl: './user-offcanvas.component.html',
    styleUrls: ['./user-offcanvas.component.scss'],
})
export class UserOffcanvasComponent implements OnInit {
    extrasUserOffcanvasDirection = 'offcanvas-right';
    user$: Observable<UserModel>;
    pendingTasks: any;

    constructor(private layout: LayoutService, private auth: AuthService) { }

    ngOnInit(): void {
        this.pendingTasks = PendingTasksTable.pendingTasks[0].tasks;

        console.log(this.pendingTasks)
        this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
            'extras.user.offcanvas.direction'
        )}`;
        this.user$ = this.auth.currentUserSubject.asObservable();


    }

    logout() {
        this.auth.logout();
        document.location.reload();
    }
}
