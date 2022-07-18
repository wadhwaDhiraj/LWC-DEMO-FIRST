import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // Class Properties

    name // undefined
    age = 30;
    fullname = "Zero to Hero";
    showData = true

    details = {
        name : "demo",
        place : "Mumbai"
    }

    userList = ['a','b','c','d']

    // methods - Video 34

    // We use Class Methods  to achieve two data binding

    title = "aura"

    // there are two ways to call this method, one way is from html, 
    // other way is from this file only using lifecycle hook


    changeHandler(event) {

        this.title = event.target.value

        // whenever we want to access a property we have to call it using the this keyword

    }


    // @track properties - Video 35

    // LWC is able to keep track of the change in values in two way binding for the title variable
    // However LWC doesn't track changes when it comes to complex Data Type like Object and Array
    // So to solve that problem we decorate such objects\track with the @track annotation

    @track address = {
        city: "Mumbai",
        pincode: 421003,
        state: "Maharashtra"
    }

    addrChangeHandler(event) {

        
        console.log(event.target.value); // this is being printed always
        this.address.city = event.target.value // however this would not be possible if address obj wasn't tracked

        // whenever we want to access a property we have to call it using the this keyword

    }

    // JS generally recommends us to not mutate the data like we did above by making it trackable, instead
    // we should generate a new copy of the data
    // So there's actually a way to avoid using the track operator, with the help of the spread operator:

    chessHobby = {                   // We are not making this trackable

        favWebsite : "lichess",
        rating : 1400,
        favOpening : "Scandinavian"

    }


    chessChangeHandler(event) {

            this.chessHobby = {...this.chessHobby, "rating":event.target.value}   // spread operator

    }


    // family = {
    //     mother:"mom",
    //     father:"dad",
    //     brother:"bro"
    // }

    // familyChangeHandler(event) {

    //     family = ['a','b','c']  // If you are not using track, then the values are only tracked if the
    //                             // whole object is changed, ie the old object is not === new object
    //                             // not just change one value.
        
// }


    // GETTER METHODS IN LWC - Video 36

    users = ["john", "pawan", "kunal"]
    num1 = 10
    num2 = 20

    firstname = ''
    lastname = ''

    // In order to display values like users[0] on html, we cannot directly {users[0]} bcoz it is not allowed
    // Similary if we want to display the result of an expression like num1*num2, we cannot do this in html:
    // {num1*num2} , so to resolve this problem we can use Getter methods
    // Main Point: Getter methods automatically re-render the page whenever there's a change in the value

    get firstUser() {
        return this.users[0].toUpperCase() // you can optionally use string methods like toUpperCase as well before returning data
    }

    get multiply() {
        return this.num1 * this.num2
    }

    handlechange(event){
        const field = event.target.name;
        if(field === 'firstname')
            this.firstname = event.target.value
            else if(field === 'lastname')
                this.lastname = event.target.value
    }

    get uppercasedFullName() {
        return `${this.firstname} ${this.lastname}`.toUpperCase();
    }


}