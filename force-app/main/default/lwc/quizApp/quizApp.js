import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}   // for storing answers
    correctAnswers = 0  // we will use this to show the number of correct answers
    isSubmitted = false // used to show the result

    myQuestions = [

        {
            id: "Q1",
            q: "Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        } ,
        {
            id: "Q2",
            q: "Which one of the following file is invalid in LWC Component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        } ,
        {
            id: "Q3",
            q: "Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }    



    ]

    get notSelected(){
        return !(Object.keys(this.selected).length == this.myQuestions.length)
    }

    get isScoredFull(){
        return `slds-text-heading_large slds-m-around_medium ${this.myQuestions.length === this.correctAnswers ?
        'slds-text-color_success':'slds-text-color_error'}`
    }


    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)

        const{name, value} = event.target

        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event){
        
        event.preventDefault()  // by default the Form always refreshes the page when submitted, and so to prevent that we do this.
        
        let correct = this.myQuestions.filter(item => this.selected[item.id] == item.correctAnswer)
    
        this.correctAnswers = correct.length;

        this.isSubmitted = true;

        console.log("Correct answers", this.correctAnswers);
    }

    resetHandler(){

        this.isSubmitted = false
        this.selected = {}
        this.correctAnswers = 0

    }



}