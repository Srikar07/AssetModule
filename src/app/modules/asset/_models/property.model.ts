export interface PropertyModel {
    id: number,
    propertyStatus: string,
    propertyStatusId: number,

    propertyName: string,
    propertyTypeId: number,
    propertyType: string,

    propertyManagerId: number,
    propertyManager: string,
    assetManagerId: number,
    assetManager: string,

    units:number,
    businessUnitId: number,
    businessUnitName: string,

    mainPointOfContact: string,
    capexTeamLeadContact: string,

    nominees: string[],
    propertyAddressString:string,
    propertyAddress: PropertyAddressModel,

}

export interface PropertyAddressModel {

    addressLine1: string,
    addressLine2: string,
    postalCode: string,
    city: string,
    Province: string,
    country: string,


}