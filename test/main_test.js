const getFullNameGreeting = require('../src/main')
const expect = require('chai').expect;

describe('First Test', ()=>{

    it ('Greetings' , () =>{
        const saludo = getFullNameGreeting('pablo','calvo');
        expect(saludo).to.equal('Hello pablo calvo');
    })
});

