
const { expect } = require('chai');
const AddressBook = require('../../src/js/AddressBook')

describe('AddressBook', () => {
    subject(() => new AddressBook())
    

// it('is expected to be an Object', () => {
//     expect($subject).to.be.a('object')
// })

// bdd-lazy-var extends mocha in a neat way
it(() => is.expected.to.be.an('object'))

// it('is expected to be an instance of AddressBook', () => {
//     expect($subject).to.be.instanceof(AddressBook)
// })

it(() => is.expected.to.be.an.instanceof(AddressBook))

describe('#create', () => {
    it(() => is.expected.to.respondTo('create'));
    let setItemSpy
    def('validData', {
        name: 'Thomas', 
        email: 'thomas@whatever.com', 
        phone:'031-111111'
    });
    before(() => {
        setItemSpy = sinon.spy(window.localStorage, 'setItem')
    });

    context.only('with valid data/attritubes', () => {
       
        def('response', () => $subject.create($validData));
        def(
            'contactsInStorage',
             () => JSON.parse(window.localStorage.getItem('contacts'))
             );
// before each test, invoke response
        beforeEach(() => {
            $response
        });

    it('is expected to make use of localStorage.setItem', () => {
        expect(setItemSpy).to.have.been.calledOnce  
    });

    it('is expected to store a contact', () => {
        $contactsInStorage
        expect($contactsInStorage).to.have.length(1)
    });
    });
})



});