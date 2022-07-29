import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLWC extends NavigationMixin(LightningElement) {

    navigateToLWC(){
        var defination = {
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:98989898989
            }
        }

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

}