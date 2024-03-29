import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {

    ratingOptions
    industryOptions
    selectedRating
    selectedIndustry

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT,
    recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}){
        if(data)
        {
            console.log('Data of Picklist Values by Record Type: ', data)
            this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
            this.industryOptions = this.picklistGenerator(data.picklistFieldValues.SLA__c)
        }
        if(error)
        {
            console.error(error)
        }
    }

    picklistGenerator(data){
        return data.values.map(item=>({label:item.label, value:item.value}))
    }

    handleChange(event){
        const{name, value} = event.target  // this is a nice trick to remember :)

        if(name == 'industry'){
            this.selectedIndustry = value
        }
        if(name == 'rating'){
            this.selectedRating = value
        }
    }
    
}