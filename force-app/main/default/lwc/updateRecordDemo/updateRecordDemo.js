import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

const COLS = [
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name'},
    {label:'Title', fieldName:'Title'},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Email', fieldName:'Email', type:'email', editable:true}
]

export default class UpdateRecordDemo extends LightningElement {

    contacts = []

    columns = COLS

    draftValues = []

    getValue(data, field)
    {
        return data.fields[field].value;
    }

    @wire(getListUi,{
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })

    listViewHandler({data,error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records.map(item=>{
                return {
                    "Id": this.getValue(item, 'Id'),
                    "Name": this.getValue(item, 'Name'),
                    "Title": this.getValue(item, 'Title'),
                    "Phone": this.getValue(item, 'Phone'),
                    "Email": this.getValue(item, 'Email')
                }
            })
        }
        if(error){
            console.error(error)
        }


    }

    handleSave(event){
        // console.log(JSON.stringify(event.detail.draftValues))

        const recordInputs = event.detail.draftValues.map(draft=>{
            const fields = {...draft}
            console.log('fields:',fields)
            return {fields:fields}
        })

        console.log('recordInputs:',recordInputs)

        const promises = recordInputs.map(recordInput=> {
            updateRecord(recordInput)
        })

        Promise.all(promises).then(()=>{
            console.log('Contacts Updated Successfully')
            this.draftValues = []   // make the yellow marked boxes normal again
        }).catch(error=>{
            console.error('Error updating the records:',error)
        })

    }

}