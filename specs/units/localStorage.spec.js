/* remove expect statement. It had already been defined in the specHelper. IDE adds it automatically
const { expect } = require("chai");*/

const { before, describe, context } = require("window-or-global");

// To setup localStorage in node environment

describe('localStorage', () => {

    subject(() => window.localStorage);

    it(() => is.expected.to.respondTo('setItem'));
    it(() => is.expected.to.respondTo('getItem'));
    it(() => is.expected.to.respondTo('removeItem'));
    it(() => is.expected.to.respondTo('clear'));

    describe('#setItem', () => { 

        before(() => { 
            $subject.setItem('foo', 'bar');
        });
// Assertions or tests

it('is expected to add the value in the chosen key', () => {
    expect($subject.data).to.haveOwnProperty('foo')
});

it('is expected to store the value in the chosen key', () => {
expect($subject.data.foo).to.eql('bar')
});

});

// Two paths:An item that exists, and an item that doesnot exist, which returns : Nil
describe('#getItem', () => {
   context('existing key', () => {
    // Using the bdd-lazy-var
        def('response', () => $subject.getItem('foo'))
        before(() => { 
            $subject.setItem('foo', 'baz')
        });

        it('is expected to return the value', () => {
        expect($response).to.eql('baz')
        }); 

        it('is expected to return a string', () =>  {
        expect(typeof $response).to.eql('string')
        });

    });

    context('non existing key', () => {
    def('response', () => $subject.getItem('nonExistingKey'))

    // No before block here because we aren't defining any item
    it('is expected to return null',() => {
        expect($response).to.eql(null)

    });
   });
});

describe('#removeItem', () => {
    before(() => {
        $subject.setItem('foo', 'bar')
        $subject.setItem('keyToRemove', 'some value')
    });
// we can also excute code inside the assertion block not only in the before block
    it('is expected to remove the Item', ()  => { 
        $subject.removeItem('KeyToRemove')
        expect($subject.data).to.not.haveOwnProperty('KeyToRemove')
    });
})
// set data in the before block and clear it in the it block
describe('#clear', () => {
    before(() => {
        $subject.setItem('key1', 'bar')
        
    });

    it('is expected to clear all data', () => {
        $subject.clear()
        expect($subject.data).to.not.haveOwnProperty('key1')
    });
})
});