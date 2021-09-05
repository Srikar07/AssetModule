import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-deal-documents',
    templateUrl: './deal-documents.component.html',
    styleUrls: ['./deal-documents.component.scss']
})
export class DealDocumentsComponent implements OnInit {


    constructor(private route: ActivatedRoute, private modalService: NgbModal) { }
    doc = "/assets/attachments/test_2.pdf";
    closeResult: string;
    allDocuments : any=[
        {
            fileName:"Test 1",
           location: "/assets/attachments/test_1.pdf"
        }, {
            fileName: "Test 2",
            location: "/assets/attachments/test_2.pdf"
            },
    ]
    ngOnInit(): void {
        var dealId = this.route.snapshot.paramMap.get('id');

        console.log(dealId);

    }
    open(content, data) {
        this.doc = data
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    reloadDocument(data) {
        console.log(data);
        this.doc = data;
    }

}
