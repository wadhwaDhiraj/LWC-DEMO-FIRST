import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetail

    @api 
    get detail(){
        return this.userDetail
    }
    set detail(data){ 
        // data.age = data.age*2   // this will runtime error because we cannot mutate
                                  // the original data that is coming, we need to create
                                  // a shallow copy of the data and then mutate the copy
        
        let newAge = data.age*2                          

         // shallow copy is created through the spread operator
         // and we are able to add data in this child component, to the data that
         // was sent by the parent
         
        this.userDetail = {...data, age:newAge, "location":"Mumbai!"} 
        
    }
}