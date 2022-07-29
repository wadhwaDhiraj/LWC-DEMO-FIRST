import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigationLwcTarget extends NavigationMixin(LightningElement) {
    @api recordId

    navToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Navigations'
            }
        })
    }
}