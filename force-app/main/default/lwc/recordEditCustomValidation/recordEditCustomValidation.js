import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { NavigationMixin } from 'lightning/navigation';

export default class RecordEditCustomValidation extends NavigationMixin(LightningElement)  {

    objectName = ACCOUNT_OBJECT
    inputValue = ''

    changeHandler(event){
        this.inputValue = event.target.value
    }

    submitHandler(event){
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value

        if(!value.includes('Corp')){
            inputCmp.setCustomValidity("The account name must include 'Corp'")
        }
        else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields  // what is this????
            fields.Name = value;   // why?????
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }

        inputCmp.reportValidity()

    }

    successHandler(event){
        const toastEvent = new ShowToastEvent({
            title:"Account Created!",
            message:"Record ID: "+event.detail.id,
            variant:"Success"
        })
        this.dispatchEvent(toastEvent);
        this.navToRecord(event);
    }

    navToRecord(event){  // added this myself for practice
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:event.detail.id,
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

}