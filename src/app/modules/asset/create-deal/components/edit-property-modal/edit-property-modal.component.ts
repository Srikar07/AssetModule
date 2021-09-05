import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CustomAdapter, CustomDateParserFormatter } from '../../../../../_metronic/core';
import { PropertyAddressModel, PropertyModel } from '../../../_models/property.model';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OwnershipsTable } from '../../../_fake/fake-server/ownerships.table';
import { UsersTable } from '../../../_fake/fake-server/users.table';

class EMPTY_Property {
    static get DEFAULT_PropertyModel() {
        return {
            id: undefined,
            propertyStatus: '',
            propertyStatusId: 0,

            propertyName: '',
            propertyTypeId: 0,
            propertyType: '',
            propertyManagerId: 0,
            propertyManager: '',
            assetManagerId: 0,
            assetManager: '',

            units: undefined,
            businessUnitId: 0,
            businessUnitName: '',

            mainPointOfContact: '',
            capexTeamLeadContact: '',

            nominees: [],
            propertyAddressString: '',
            propertyAddress: ({} as PropertyAddressModel),
        }
    }
}


@Component({
    selector: 'app-edit-property-modal',
    templateUrl: './edit-property-modal.component.html',
    styleUrls: ['./edit-property-modal.component.scss'],
    providers: [
        { provide: NgbDateAdapter, useClass: CustomAdapter },
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
    ]
})
export class EditPropertyModalComponent implements OnInit {
    @Input() id: number;
    @Input() propertyInput: any;
    @Input() newDealInfo: any;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();


    isLoading$;

    autocompleteInput: string;
    @ViewChild('addresstext')
    public searchElementRef: ElementRef;


    address: Object;

    formattedAddress: string;

    property: PropertyModel;
    formGroup: FormGroup;
    BusinessUnits = OwnershipsTable.ownerships;
    Users = UsersTable.users;

    private subscriptions: Subscription[] = [];

    PropertyTypes: any = [
        {
            id: 1,
            name: "Residential",

        }, {
            id: 2,
            name: "Commerical",

        }];

    constructor(

        private fb: FormBuilder, public modal: NgbActiveModal,
        public zone: NgZone,
    ) { }

    ngOnInit(): void {
        this.loadProperty();
        //this.getPlaceAutocomplete();
    }

    loadProperty() {
        if (!this.propertyInput) {
            this.property = EMPTY_Property.DEFAULT_PropertyModel;
            this.loadForm();
        } else {
            console.log(this.propertyInput);
            this.property = this.propertyInput;
            this.loadForm();
            //const sb = this.customersService.getItemById(this.id).pipe(
            //    first(),
            //    catchError((errorMessage) => {
            //        this.modal.dismiss(errorMessage);
            //        return of(EMPTY_CUSTOMER);
            //    })
            //).subscribe((customer: Customer) => {
            //    this.customer = customer;
            //    this.loadForm();
            //});
            //this.subscriptions.push(sb);
        }
    }


    loadForm() {
        this.formGroup = this.fb.group({
            //propertyStatus: [this.property.propertyStatus, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
            propertyName: [this.property.propertyName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
            //propertyManager: [this.property.propertyManager, Validators.compose([Validators.required, Validators.email])],
            //assetManager: [this.property.assetManager, Validators.compose([Validators.nullValidator])],
            //businessUnitName: [this.property.businessUnitName, Validators.compose([Validators.required])],
            units: [this.property.units, Validators.compose([Validators.required, Validators.min(1)])],
            propertyTypeId: [this.property.propertyTypeId, Validators.compose([Validators.required])],
            businessUnitId: [this.property.businessUnitId, Validators.compose([Validators.required])],
            assetManagerId: [this.property.assetManagerId, Validators.compose([Validators.required])],
            propertyManagerId: [this.property.propertyManagerId, Validators.compose([Validators.required])],
            //ipAddress: [this.property.ipAddress],
            //type: [this.property.type, Validators.compose([Validators.required])]
        });

        console.log(this.formGroup);
    }

    save() {
        this.prepareCustomer();
        //this.create();
        if (this.property.id) {
            //this.edit();
        } else {
            this.create();
        }
        this.passEntry.emit(this.newDealInfo.properties);

        this.modal.close(this.newDealInfo.properties);
    }

    edit() {

        this.property = this.newDealInfo.properties.find()
        //const sbUpdate = this.customersService.update(this.customer).pipe(
        //    tap(() => {
        //        this.modal.close();
        //    }),
        //    catchError((errorMessage) => {
        //        this.modal.dismiss(errorMessage);
        //        return of(this.customer);
        //    }),
        //).subscribe(res => this.customer = res);
        //this.subscriptions.push(sbUpdate);
    }

    create() {

        var maxId = 0;

        if (this.newDealInfo.properties.length > 0) {
            maxId = Math.max.apply(Math, this.newDealInfo.properties.map(function (o) { return o.id; }))
        }
        //alert(maxId);
        this.property.id = maxId + 1;

        this.newDealInfo.properties.push(this.property); // should be removed on edit

        //const sbCreate = this.customersService.create(this.customer).pipe(
        //    tap(() => {
        //        this.modal.close();
        //    }),
        //    catchError((errorMessage) => {
        //        this.modal.dismiss(errorMessage);
        //        return of(this.customer);
        //    }),
        //).subscribe((res: Customer) => this.customer = res);
        //this.subscriptions.push(sbCreate);
    }

    private prepareCustomer() {
        const formData = this.formGroup.value;


        //this.property.id = new Date(formData.dob);
        this.property.propertyName = formData.propertyName;
        this.property.propertyTypeId = formData.propertyTypeId;
        this.property.units = formData.units;

        this.property.propertyType = this.PropertyTypes.filter(x => x.id == this.property.propertyTypeId)[0].name;
        this.property.businessUnitId = formData.businessUnitId;
        this.property.businessUnitName = this.BusinessUnits.filter(x => x.id == this.property.businessUnitId)[0].name;
        this.property.assetManagerId = formData.assetManagerId;
        var selectedAssetManager = this.Users.find(x => x.id == this.property.assetManagerId);
        this.property.assetManager = selectedAssetManager.firstName;


        this.property.propertyManagerId = formData.propertyManagerId;
        var selectedPropertyManager = this.Users.find(x => x.id == this.property.propertyManagerId);
        this.property.propertyManager = selectedPropertyManager.firstName;

        //this.property.propertyManager = formData.propertyManager;
        //this.property.dateOfBbirth = formData.dob;
        //this.property.ipAddress = formData.ipAddress;
        //this.property.lastName = formData.lastName;
        //this.property.type = +formData.type;
        //this.property.userName = formData.userName;
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }

    // helpers for View
    isControlValid(controlName: string): boolean {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }

    controlHasError(validation, controlName): boolean {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }

    isControlTouched(controlName): boolean {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }

    getAddress(place: object) {
        this.address = place['formatted_address'];
        //this.phone = this.getPhone(place);
        //alert(this.address)
        this.formattedAddress = place['formatted_address'];
        this.property.propertyAddressString = this.formattedAddress;
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    getAddrComponent(place, componentTemplate) {
        let result;

        for (let i = 0; i < place.address_components.length; i++) {
            const addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    }

    getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' },
            streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    }

    getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' },
            street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    }

    getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' },
            city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    }

    getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
            state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }

    getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
            state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }

    getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' },
            countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    }

    getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' },
            country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    }

    getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
            postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    }

    getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
            phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    }


    ngAfterViewInit() {
        /*this.getPlaceAutocomplete();*/
    }

}
