import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt'
import LightningAlert from 'lightning/alert'
export default class LightningPromptDemo extends LightningElement {

    async promptHandler(){
        const result = await LightningPrompt.open({
            message:"Please Enter Your Age:",
            label:"Check your voting eligibility:",
            theme:"success",
            defaultValue:30
        })

        if(result && Number(result)>18){
            this.alertHandler("Hurray! You are eligible", "Success!!", "success")
        }
        else{
            this.alertHandler("Sorry you must be over 18 to be eligible", "Error!", "error")
        }
    }

    alertHandler(message, label, theme){

        LightningAlert.open({
            message,
            label,
            theme
        })

    }

}