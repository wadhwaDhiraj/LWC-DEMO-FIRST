import { getListUi } from 'lightning/uiListApi';
import { LightningElement, wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
export default class GetListUiDemo extends LightningElement {

    contacts = []
    pageToken = null
    previousPageToken = null
    nextPageToken = null

    @wire(getListUi, {objectApiName:CONTACT_OBJECT,
                      listViewApiName:'AllContacts',
                      pageSize:5,
                      sortBy:TITLE_FIELD,
                      pageToken:'$pageToken'})

    listViewHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
        }
        if(error){
            console.error(error)
        }
    }

    previousHandler(){
        this.pageToken = this.previousPageToken
    }
    nextHandler(){
        this.pageToken = this.nextPageToken
    }


}