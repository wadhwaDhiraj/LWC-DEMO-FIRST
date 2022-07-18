import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {

    percent = 10

    changeHandler(event){
        this.percent = event.target.value;
    }

    get widthPercentage() {
        return `width:${this.percent}%`
    }

}