import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
export default class CreateRecordDemo extends LightningElement {
    
    formFields = {}

    changeHandler(event){
        const {name, value} = event.target

        // nice trick to continually update it as we get the values, don't how it works though
        this.formFields[name]=value
    }

    createContact(){
        console.log(this.formFields)
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result=>{
            this.showToast('Success',`Contact created with Id: ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error=>{
            this.showToast('Error creating record', error.body.message, 'error')
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        }))
    }

}