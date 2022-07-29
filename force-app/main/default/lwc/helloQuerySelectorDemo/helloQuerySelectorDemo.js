import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    usernames = ["John", "Smith", "Nick", "Mike"]

    fetchDetailsHandler() {
        const elem = this.template.querySelector('h1');
        elem.style.border = "1px solid red";
        console.log(elem.innerText)

        const userElements = this.template.querySelectorAll('.name')

        // querySelAll gives us a node (list) of elements, and we need to convert into an Array
        // and so we use Array.(from) to automatically convert node into array

        Array.from(userElements).forEach(item => {
            console.log(item.innerText)

            // setAttribute is a function specifically used to assign attributes dynamically like this
            // item.setAttribute("title", item.innerText) 
            // I tried the below on my own, after looking at the above element being styled with a border
            // and it works... 
            item.title = item.innerText;
        });

        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey I am a Child Element</p>'
    }
}