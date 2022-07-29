import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin(LightningElement){

    navToVfPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"/apex/navTargetVfPage"
            }
        })
    }

}