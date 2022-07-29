import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToNewRecordWithValues extends NavigationMixin(LightningElement) {

    navToNewRecordWithValues(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName : 'John',
            LastName : 'Doe',
            Phone : 9898989898
        })

        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes:{
                objectApiName :'Contact',
                actionName : 'new'
            },
            state:{
                defaultFieldValues : defaultValue
            }
        })
    }

}