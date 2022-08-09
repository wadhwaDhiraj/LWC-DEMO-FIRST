import { LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/AccountController.getAccountsList'
export default class ApexWireDemo extends LightningElement {
    @wire(getAccountsList)
    accounts

    accountList

    @wire(getAccountsList)
    accountsHandler({data, error}){
        if(data){
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                item.Type === 'Customer - Direct' ? 'Direct' : '-----'

                return {...item, newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}