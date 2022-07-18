import { LightningElement } from 'lwc';
import signintemplate from './signInTemplate.html'
import signuptemplate from './signUpTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {

    selectdBtn = '';

    // render() method helps you render various templates based on conditions
    // it's not used that much in real life scenarios
    // here the render method is being called bcoz it is referring to a property which is reactive by default

    render(){
        return this.selectdBtn === 'Sign Up Bro' ? signuptemplate :
               this.selectdBtn === 'Sign In Bro' ? signintemplate :
               renderTemplate
    }


    handleClick(event){
        this.selectdBtn = event.target.label;
    }

    handleBackClick(){
        this.selectdBtn = ''
    }

    handleSuccessClick(event){
        console.log(`${event.target.label} Successful...`)
    }


}