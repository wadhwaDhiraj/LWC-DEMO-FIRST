import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordViewFormDemo extends NavigationMixin(LightningElement) {
    
    navToRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0016D00000dQ7LWQA0',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

}