import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class LightningAlertDemo extends LightningElement {

    alertHandler(event){
        const {name} = event.target

        LightningAlert.open({
            message:'This is the Alert Message :0',
            label:`I am ${name} Alert Header`,
            theme:name // success ->green, warning -> orange, error --> red, info -->grey
        })
    }

}