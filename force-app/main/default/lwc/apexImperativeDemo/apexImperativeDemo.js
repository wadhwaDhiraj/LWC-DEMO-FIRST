import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';
import { LightningElement } from 'lwc';
export default class ApexImperativeDemo extends LightningElement {

    accounts

    handleClick(){
        console.log('handle Clicked')
        getAccountsList().then(result=>{
            console.log(result)
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }

}