import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    msg

    handleClick(){
        this.showModal = true;
    }

    closeHandler(event){
        console.log("I'm a Close Handler, this is what we do: ");
        this.msg = event.detail.msg;  // this is given to a h1 tag on the parent html file
        this.showModal = false;
    }

    bubbleHandler(event){
        console.log("I'm a Bubble Handler, this is what we do: ",event.detail.msg);
    }
}