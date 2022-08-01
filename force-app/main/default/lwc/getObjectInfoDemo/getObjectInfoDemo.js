import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId
    objectApiName

    listOfObjects = [ACCOUNT_OBJECT, OPP_OBJECT]

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data, error}){
        if(data)
        {
            this.defaultRecordTypeId = data.defaultRecordTypeId
            this.objectApiName = data.apiName
            console.log("Data: ", data)
        }
        if(error)
        {
            console.error(error)
        }
    }

    objectInfos

    @wire(getObjectInfos, {objectApiNames: '$listOfObjects'})
    objectInfosHandler({data, error}){
        if(data)
        {
            this.objectInfos = data
            console.log('Objects: ', data)
        }
        if(error){
            console.error('Error bro: ', error)
        }
    }

}