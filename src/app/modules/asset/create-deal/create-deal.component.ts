import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KTWizard from '../../../../assets/js/components/wizard';
import { KTUtil } from '../../../../assets/js/components/util';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//import { map } from 'rxjs/operators/map';

import { Router } from '@angular/router';
import { DealsTable } from '../_fake/fake-server/deals.table';
import { PropertyAddressModel, PropertyModel } from '../_models/property.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPropertyModalComponent } from './components/edit-property-modal/edit-property-modal.component';
import { OwnershipsTable } from '../_fake/fake-server/ownerships.table';

export class User {
    constructor(public name: string) { }
}

@Component({
    selector: 'app-create-deal',
    templateUrl: './create-deal.component.html',
    styleUrls: ['./create-deal.component.scss']
})
export class CreateDealComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('wizard', { static: true }) el: ElementRef;
    registerForm: FormGroup;
    myControl: FormControl = new FormControl();

    filteredOptions: Observable<User[]>;
    basicInfoForm: FormGroup;
    submitted = false;
    options = [
        new User('Mary'),
        new User('Shelley'),
        new User('Igor'),
        new User('Srikar'),
        new User('Aman'),
        new User('Palwinder'),
        new User('Anthony'),
        new User('Sunaiana'),
        new User('Ali'),
        new User('Saniya'),
        new User('Sarah'),
        new User('Vineeth'),
        new User('Mohammad'),
        new User('Jermain'),
    ];
    model: any = {
        fname: 'John',
        lname: 'Wick',
        phone: '+61412345678',
        email: 'john.wick@reeves.com',
        address1: 'Address Line 1',
        address2: 'Address Line 2',
        postcode: '3000',
        city: 'Melbourne',
        state: 'VIC',
        country: 'AU',
        delivery: 'overnight',
        packaging: 'regular',
        preferreddelivery: 'morning',
        locaddress1: 'Address Line 1',
        locaddress2: 'Address Line 2',
        locpostcode: '3072',
        loccity: 'Preston',
        locstate: 'VIC',
        loccountry: 'AU',
        ccname: 'John Wick',
        ccnumber: '4444 3333 2222 1111',
        ccmonth: '01',
        ccyear: '21',
        cccvv: '123',
    };
    wizard: any;

    newDealInfo: any = {
        name: '',
        dealType: '',
        //ownership: '',
        //assetManager: '',
        investmentLead: '',
        legalLead: '',
        propertyManager: '',
        properties: [],
    }
    files: File[] = [];
    property = {} as PropertyModel;

    address: Object;
    establishmentAddress: Object;

    formattedAddress: string;
    formattedEstablishmentAddress: string;

    phone: string;


    onSelect(event) {
        //console.log(event);
        this.files.push(...event.addedFiles);
    }

    onRemove(event) {
        //console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    drpOwnership: any[] = OwnershipsTable.ownerships;

    drpDealTypes: any[] = [{
        id: 1,
        name: 'Acquisition'
    },
    {
        id: 2,
        name: 'Disposition'
    },
    {
        id: 3,
        name: 'Development'
    }]

    constructor(private formBuilder: FormBuilder, private router: Router, public zone: NgZone,
        private modalService: NgbModal) {
    }
    title = 'reactive-form-validation-in-angular8';
    /*########### Form ###########*/
    //basicInfoForm = this.formBuilder.group({
    //    dealType: ['', [Validators.required]]
    //})



    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            tnc: ['', Validators.required]
        });

        this.basicInfoForm = this.formBuilder.group({
            name: ['', Validators.required],
            dealType: ['', [Validators.required]],
            //email: ['', [Validators.required, Validators.email]],
            //phone: ['', Validators.required],
            //password: ['', [Validators.required, Validators.minLength(6)]],
            //confirmPassword: ['', Validators.required],
            //tnc: ['', Validators.required]
        });

        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith<string | User>(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(name => name ? this.filter(name) : this.options.slice())
            );

    }
    filter(name: string): User[] {
        return this.options.filter(option =>
            option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
    }
    // Choose city using select dropdown
    changeDealType(e) {
        //console.log(e.value)
        this.newDealInfo.dealType.get('skilltwo').setValue(e.target.value, {
            onlySelf: true
        })
    }

    get basicInfoFormval() {
        return this.basicInfoForm.controls;
    }

    get basicInfoDealTypeval() {
        return this.basicInfoForm.get('dealType');
    }
    //this.user.fullName='';
    signup() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        alert('form fields are validated successfully!');
    }



    ngAfterViewInit(): void {
        // Initialize form wizard
        this.wizard = new KTWizard(this.el.nativeElement, {
            startStep: 1
        });

        // Validation before going to next page
        //this.wizard.on('beforeNext', (wizardObj) => {
        //    // https://angular.io/guide/forms
        //    // https://angular.io/guide/form-validation

        //    // validate the form and use below function to stop the wizard's step
        //    //wizardObj.stop();
        //    wizardObj.stop();

        //    if (!this.basicInfoForm.valid) {
        //        alert('test -valid')
        //        wizardObj.stop();
        //        return false;
        //    } else {
        //        wizardObj.stop();
        //        alert(JSON.stringify(this.basicInfoForm.value))
        //    }
        //});
        // Validation before going to next page
        //this.wizard.on('beforeNext', (wizardObj) => {
        //    alert('test')
        //    // https://angular.io/guide/forms
        //    // https://angular.io/guide/form-validation

        //    // validate the form and use below function to stop the wizard's step
        //    //wizardObj.stop();
        //});
        // Change event
        this.wizard.on('change', (wizardObj) => {
            //console.log(JSON.stringify(this.newDealInfo))
            if (wizardObj.currentStep == 1) {
                //alert('form fields are validated successfully!');
                if (this.basicInfoForm.invalid) {
                    wizardObj.stop();
                }
            }

            setTimeout(() => {
                KTUtil.scrollTop();
            }, 500);
        });
    }

    onSubmit() {
        this.submitted = true;
        if (!this.basicInfoForm.invalid) {
            alert('Successfully Created a new Deal');


            this.newDealInfo.id = '101';
            DealsTable.deals.push(this.newDealInfo)

            this.router.navigate(['asset/reviewDealInfo/101']);
        }
        //alert(JSON.stringify(this.newDealInfo))

    }

    ngOnDestroy() {
        this.wizard = undefined;
    }

    getAddress(place: object) {
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    //getEstablishmentAddress(place: object) {
    //    this.establishmentAddress = place['formatted_address'];
    //    this.phone = this.getPhone(place);
    //    this.formattedEstablishmentAddress = place['formatted_address'];
    //    this.zone.run(() => {
    //        this.formattedEstablishmentAddress = place['formatted_address'];
    //        this.phone = place['formatted_phone_number'];
    //    });
    //}

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

    insertProperty() {
        this.property.propertyAddressString = this.formattedAddress;
        alert(this.formattedAddress)
        this.newDealInfo.properties.push(this.property);
        this.formattedAddress = "";
        this.property = ({} as PropertyModel);
    }

    deletePropertyRecord(property: any) {

        this.newDealInfo.properties.forEach((value, index) => {
            if (value.id == property.id) this.newDealInfo.properties.splice(index, 1);
        });
    }

    create() {
        this.edit(undefined);
    }

    edit(property: any) {
        const modalRef = this.modalService.open(EditPropertyModalComponent, { size: 'xl' });
        modalRef.componentInstance.propertyInput = property;
        modalRef.componentInstance.newDealInfo = this.newDealInfo;
        //modalRef.componentInstance.id = 10;
        //modalRef.componentInstance.propertyInput = {
        //    id: 10,
        //    propertyStatus: '',
        //    propertyStatusId: 0,

        //    propertyName: 'Exisiting property',
        //    propertyTypeId: 0,
        //    propertyType: '',
        //    propertyManager: '',
        //    assetManager: '',

        //    units: 0,
        //    businessUnitId: 0,
        //    businessUnitName: '',

        //    mainPointOfContact: '',
        //    capexTeamLeadContact: '',

        //    nominees: [],
        //    propertyAddressString: '',
        //    propertyAddress: ({} as PropertyAddressModel),
        //};
        //modalRef.result.then(() =>
        //    this.customerService.fetch(),
        //    () => { }
        //);

        modalRef.result.then(response => {
            console.log(response);
            this.newDealInfo.properties = response;


            //this.zone.run(() => {
            //    this.reloadData();

            //})
            console.log(this.newDealInfo);
            this.reloadData();

        })

        //this.reloadData()

    }


    reloadData() {
        this.newDealInfo.properties = [...this.newDealInfo.properties];
        this.newDealInfo.properties = [...this.newDealInfo.properties];
        this.newDealInfo.properties = [...this.newDealInfo.properties];
    }
}
