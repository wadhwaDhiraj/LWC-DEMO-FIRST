import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title

    if(title){
        console.log("Message from Aura:",title)
    }

    callAura(){
        const event= new CustomEvent('sendmsg', {
                detail:{
                    "msg":"Hello From LWC"
                }
            })
        this.dispatchEvent(event)
    }
}