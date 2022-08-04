import { getRecordUi } from 'lightning/uiRecordApi';
import { LightningElement, wire, api } from 'lwc';
export default class GetRecordUiDemo extends LightningElement {
    @api recordId

    formFields =  [
        {fieldName:"AccountNumber", "label":"Account Number"},
        {fieldName:"AnnualRevenue", "label":"Annual Revenue"},
        {fieldName:"Name", "label":"Name"},
        {fieldName:"Phone", "label":"Phone"}
    ]

    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'View'})
    accountRecordUiHandler({data, error}){
        if(data){
            console.log(data)
            this.formFields = this.formFields.map(item => {
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)
        }
    }
}