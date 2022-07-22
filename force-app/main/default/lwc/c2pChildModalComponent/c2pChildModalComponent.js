import { LightningElement } from 'lwc';

export default class C2pChildModalComponent extends LightningElement {
    okHandler(){
        const myEvent = new CustomEvent('close',{    // "close" is the event name, rest are attributes\options of the custom event, options such as bubbles and details
            bubbles:true,
            detail:{
                msg:"Modal Closed Successfully!!!"
            }
        });
        this.dispatchEvent(myEvent)
    }

    footerHandler(event){                    // will be called due to event bubbling
        console.log("This is Footer log", event.detail.msg)  // for some reaon it's not printing the event data here, it prints the data when printed in the parent component 
    }

    divHandler(){                       // will be called due to event bubbling
        console.log("This is Div log")
    }
}