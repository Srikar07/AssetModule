import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
})
export class ProjectsDashboardComponent implements OnInit {

    doc = "/assets/attachments/test_1.pdf";
    constructor() { }


  ngOnInit(): void {
  }

}
