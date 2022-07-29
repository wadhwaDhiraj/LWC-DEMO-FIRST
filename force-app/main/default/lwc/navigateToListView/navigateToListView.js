import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToListView extends NavigationMixin(LightningElement) {

    navigateToListView() { 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{ 
                filterName:'VP_Contacts'  // any list view can be included here with their Api name, 
                                          // a standard list view is 'Recent'
            }
        })
    }

}