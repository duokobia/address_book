
// Retains previous information if error is found
let form = document.getElementById('form');

form.addEventListener('submit', function(addContactToBook){
    addContactToBook.preventDefault();
})

// To upload image still not working 
var loadFile = function(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
};
// Button Id
let submitButton = document.getElementById('submit');

submitButton.addEventListener("click", addContactToBook)

function addContactToBook(){

    let contact = { 
                    image: document.getElementById('img').value,
                    fullname: document.getElementById('fullname').value,
                    city: document.getElementById('city').value,
                    country: document.getElementById('country').value,
                    phone: document.getElementById('phone').value,
                    email: document.getElementById('email').value,
                    bootcampBatch: document.getElementById('bootcampBatch').value
    };

    let isValid = validate(contact);
    if (!isValid){
        alert("Please fill the blank spaces");
        return;
    }

// Check if contact already exists in contact book
// If it does not exist, add to contact, else, display error message
    let contactExists = isContactInBook(contact);
    if (!contactExists) {
        saveContact(contact);
        alert("Saved successfully");
        location.reload();
    } else {
        alert("Contact already exists!");
    }
}


function isContactInBook(contact) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
       //Check if the new contact exists in localStorage
        return contacts.find(elem=> elem.phone === contact.phone || elem.email === contact.email);
}

function saveContact(contact) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

//All the placeholders must be filled. Uploading pics optional
function validate(contact) {
    return contact.fullname && contact.city && contact.country && contact.phone && contact.email && contact.bootcampBatch
};
