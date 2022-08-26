import {createElement} from 'lwc'
import HelloWorld from 'c/helloWorld'

describe('c-hello-world test suite', ()=>{

    beforeEach(()=>{
        console.log('Before each test unit:')
    })

    test('display Hello World', ()=>{
        const element = createElement('c-hello-world',{
            is:HelloWorld
        })
        document.body.appendChild(element)
        const firstDiv = element.shadowRoot.querySelector('div.firstDiv')
        expect(firstDiv.textContent).toBe("Zero to Hero I'm from Mumbai")
    })

    test('add 1+2 to equal 3',()=>{
        const num = 1+2
        expect(num).toBe(3)
    })

    afterEach(()=>{
        console.log('After each test unit:')
    })
})

