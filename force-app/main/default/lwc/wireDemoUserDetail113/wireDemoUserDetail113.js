import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail113 extends LightningElement {

    userId = Id;
    userDetail
    userDetail2   // was trying this on my own to test if wire is really reactive

    @wire(getRecord, {recordId:'0055i000004dVJiAAM', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
            console.log(this.userDetail)
        }

        if(error) {
            console.error(error);
        }

    }

    @wire(getRecord, {recordId:'0055i000004dVJiAAM', fields})
    userDetailProperty;

    @wire(getRecord, {recordId:'$userId', fields})  // this doesn't work if userId is not preceded with '$'
    userDetailHandler2({data, error}){
        if(data){
            this.userDetail2 = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    
}