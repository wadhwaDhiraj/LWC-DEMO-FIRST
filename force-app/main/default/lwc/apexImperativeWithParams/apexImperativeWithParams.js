import findAccounts from '@salesforce/apex/AccountController.findAccounts';
import { LightningElement } from 'lwc';
export default class ApexImperativeWithParams extends LightningElement {

    searchKey = ''
    accounts
    timer

    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        this.timer = setTimeout(()=>{
            this.callApex()
        }, 2000)
    }

    callApex(){

            findAccounts({searchKey:this.searchKey}).then(result=>{
                console.log(result)
                this.accounts = result
            }).catch(error=>{
                console.error(error)
            })

    }
}