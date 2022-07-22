import { LightningElement, api } from 'lwc';

export default class P2cChildSliderComponent extends LightningElement {
    val = 20

    changeHandler(event){
        this.val = event.target.value
    }

    @api resetSlider(resetValue){
        this.val = resetValue
    }
}