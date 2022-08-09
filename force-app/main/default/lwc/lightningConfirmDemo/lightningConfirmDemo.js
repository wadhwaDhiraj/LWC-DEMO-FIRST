import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';
export default class LightningConfirmDemo extends LightningElement {

    confirmHandler(){
        const result = LightningConfirm.open({
            message:'Would you like to refresh the page?',
            label:'Are you sure?',
            theme:'warning' // success->green, warning->orange, error->red, info ->grey
        }).then(result=>{
            if(result)      // on click of "Ok" button, result is true, otherwise it's false
             location.reload();
        })

    }

}