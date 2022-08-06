import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
    recordId

    changeHandler(event){
        this.recordId = event.target.value
    }

    deleteHandler(){
        deleteRecord(this.recordId).then(result=>{
            this.showToast("Success!!","Deleted Successfully!!",'success')
        }).catch(error=>{
            console.error(error)
            this.showToast("Error!!!","Error Occurred!",'error')
        })
    }

    showToast(title, messsage, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            messsage,
            variant
        }))
    }
}