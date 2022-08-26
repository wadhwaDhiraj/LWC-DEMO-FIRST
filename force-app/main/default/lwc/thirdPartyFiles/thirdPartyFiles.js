import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {

    currentDate = ''
    isLibraryLoaded = false    

    // We want our moment library to work only once the html has been rendered
    // so we will execute our library within the renderedCallBack
    // renderedCallback reloads the html every time there's any change,
    // and we don't want our library to loaded every time so we will use 
    // a variable isLibraryLoaded to prevent that

    renderedCallback(){
        if(this.isLibraryLoaded){
            console.log('check this code again')
            this.isLibraryLoaded = true
        }
        else{
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen()
            }).catch(error=>{
                console.error(error)
            })
            this.isLibraryLoaded = true
        }

    }

    reload(){
        const footerElem = this.template.querySelector('.hingy')
       if(footerElem.classList.contains('animate__swing')){
            footerElem.classList.remove('animate__swing')
            console.log('hinge removed')
       }
       else{
            footerElem.classList.add('animate__swing')
            console.log('hinge added')
       }
    }

    setDateOnScreen(){
        this.currentDate = moment().format('llll')  // Fri, Aug 12, 2022 2:30 PM
    }

}