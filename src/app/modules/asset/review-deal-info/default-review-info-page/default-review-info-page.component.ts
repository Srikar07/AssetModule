import { Component, OnInit } from '@angular/core';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-default-review-info-page',
    templateUrl: './default-review-info-page.component.html',
    styleUrls: ['./default-review-info-page.component.scss'],

})
export class DefaultReviewInfoPageComponent implements OnInit {
    images: any = [
        {
            description: "15 Dundonal",
            image: "./assets/media/propertyImages/15_Dundonald.jpg",
        },{
            description: "25 Fisherville",
            image: "./assets/media/propertyImages/25Fisherville_Slide1.jpg",
        },{
            description: "25 Cougar",
            image: "./assets/media/propertyImages/25-cougar.jpg",
        }
    ];

    exampleCarousel: any;
    constructor(private _http: HttpClient) { }

    ngOnInit(): void {

        //this._http.get('https://picsum.photos/list')
        //    .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
        //    .subscribe(images => this.images = images);
        console.log(this.images);

    }
    private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
        console.log(this.images);
        return [1, 2, 3].map(() => {
            const randomId = images[Math.floor(Math.random() * images.length)].id;
            return `https://picsum.photos/900/500?image=${randomId}`;
        });
    }

}
