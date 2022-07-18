 import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false;
    name // undefined value
    areDetailsVisible = false;

    handleClick() {

    if(this.isVisible == false)
        this.isVisible = true
    else
        this.isVisible = false

    }

    changeHandler(event) {
        this.name = event.target.value
    }


    get helloGetMethod() {
        return this.name === "hello"
    }

    handleChange(event) {
        if(event.target.checked == true)
            this.areDetailsVisible = true;
        else
            this.areDetailsVisible = false;
    }

    // there are 7-8 false values in JS

    // x = 0 , false, undefinied, null, ""

    // so if these values are checked in if:true it will be false


}