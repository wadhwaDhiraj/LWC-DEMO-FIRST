import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    // Video 50 - Mounting components lifecycle hooks

    constructor() {
        super()
        console.log("child constructor called")
    }

    interval     // Video 51 - Unmounting components lifecycle hooks

    throwError = false  // Video 52 - Error callback lifecycle hooks - just make this false if you don't want 
                       // the error to occur

    connectedCallback() {
        console.log("child connectedCallback called")

        // things like this (below interval) that are created as Window properties should be disconnected\removed
        // when they are not required or at least when the component is removed from the DOM
        // so that's what we are doing now in the disconnectedCallback() method

        // this.interval = window.setInterval() 

         // Video 52 - Error callback lifecycle hooks

        if(this.throwError == true)
            throw new Error('Loading of Child Component failed');

    }

    renderedCallback() {
        console.log("child renderedCallback called")
    }

    // Video 51 - Unmounting components lifecycle hooks

    disconnectedCallback() {
        alert('Child disconnectedCallback called!!!');
        console.log('Child disconnectedCallback called!!!')

        // below line is giving error for some reason :|
        // window.clearInterval(this.interval)
    }
}