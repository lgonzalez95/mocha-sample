const getNodeVersion = require('../src/version')
const expect = require('chai').expect;

describe('Verify compatibility', ()=> {

    it ('Correctly works' , () =>{
        const success = getNodeVersion();
        expect(success).to.be.true;
    })

});

