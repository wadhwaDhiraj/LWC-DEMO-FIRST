describe('SUM Functionality', ()=>{

    beforeEach(()=>{
        console.log('Before each test unit:')
    })

    test('add 1+2 to equal 3',()=>{
        const num = 1+2
        expect(num).toBe(3)
    })

    afterEach(()=>{
        console.log('After each test unit:')
    })
})

