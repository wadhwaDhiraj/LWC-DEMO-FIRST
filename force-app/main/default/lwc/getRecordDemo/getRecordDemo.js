import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';

import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

export default class GetRecordDemo extends LightningElement {
    name
    owner 
    AnnualRevenue 

    name2
    owner2
    AnnualRevenue2
    @api recordId 

    @wire(getRecord, {recordId:'$recordId',
        // fields:[ACCOUNT_NAME, ANNUAL_REVENUE, OWNER_NAME_FIELD]})
        layoutTypes:['Full'], modes:['Edit']})
    accountHandler({data}){
        if(data){

            console.log(data)
            
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : 
            data.fields.Name.value

            // We are using displayValue particularly for fields like AnnualRevenue
            // as it has the currency symbol and comma separated value when shown in the UI
            this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : 
            data.fields.AnnualRevenue.value
            
            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : 
            data.fields.owner.value
        }
    }

    // Video 120 getFieldValue, getFieldDisplayValue functions

    @wire(getRecord, {recordId: '$recordId',
    fields:[ACCOUNT_NAME, OWNER_NAME_FIELD, ANNUAL_REVENUE]})
    accountHandler2({data}){
        if(data){
            console.log(data)
            this.name2 = getFieldValue(data, ACCOUNT_NAME)
            this.AnnualRevenue2 = getFieldDisplayValue(data, ANNUAL_REVENUE)
            this.owner2 = getFieldValue(data, OWNER_NAME_FIELD)
        }
    }
}