import { BaseModel } from '../../../_metronic/shared/crud-table';
import { PropertyModel } from './property.model';

export interface Deal extends BaseModel {
    id: number,
    name: string,
    type: string,
    statusId: number,
    statusName: string,
   
    
    investmentLead: string,
    legalLead: string,
    images: string[],
    properties: PropertyModel[]
}