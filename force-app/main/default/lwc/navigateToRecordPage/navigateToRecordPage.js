import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    navToRecordView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0036D00000Sv6ICQAZ',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

    navToRecordEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0036D00000Sv6ICQAZ',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }

}