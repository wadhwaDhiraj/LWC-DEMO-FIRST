import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType'
export default class WireApexWithParams extends LightningElement {
    
    selectedType = ''
    @wire(getAccountsByType, {type:'$selectedType'})
    filteredAccounts

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"},
            {label:"Installation Partner", value:"Installation Partner"},
            {label:"No Type", value:""}
        ]
    }

    typeChangeHandler(event){
        this.selectedType = event.target.value
    }

}