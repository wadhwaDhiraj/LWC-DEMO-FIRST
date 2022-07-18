import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    
    name
    isVisible = false

    // Video 50 Mounting components lifecycle hooks

    constructor() {
        super()
        console.log("parent constructor called")
    }

    connectedCallback() {
        console.log("parent connectedCallback called")
    }

    renderedCallback() {
        console.log("parent renderedCallback called")
    }

    changeHandler(event){
        this.name = event.target.value;
    }

    handleClick() {
        this.isVisible = !this.isVisible;
    }


    // Video 52 - Error callback lifecycle hooks

    errorCallback(error, stack) {
        console.log('Error: ',error.message)
        console.log('Stack: ',stack)
        this.isVisible = false;
    }

}