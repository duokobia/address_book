// Button Id
let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');

// Retains previous information if error is found
let form = document.getElementById('form');

form.addEventListener('submit', function(addToBook){
    addToBook.preventDefault();
})


// Id for each input
let image = document.getElementById('img');
let fullname = document.getElementById('fname');
let city = document.getElementById('city');
let country = document.getElementById('country');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let bootcampBatch = document.getElementById('bootcampBatch');

// To upload image still not working 
var loadFile = function(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
};

// Reset to blank form
resetButton.addEventListener('click', function(){
    img.value = '';
    fname.value = '';
    city.value = '';
    country.value = '';
    phone.value = '';
    email.value = '';
    bootcampBatch.value = '';
})

//Submission validation and localStorage
submitButton.addEventListener('click', validate)

function validate(){

if  
    ((document.getElementById('img').value!== "") &&
    (document.getElementById('fname').value!== "") &&
    (document.getElementById('city').value!== "") &&
    (document.getElementById('country').value!== "") &&
    (document.getElementById('phone').value!== "") &&
    (document.getElementById('email').value!== "") &&
    (document.getElementById('bootcampBatch').value!== ""))

    { addToBook(); } // If above is valid, clicking submit calls this function, else
            
else{
    alert("Please fill the blank space(s)");
    }

function addToBook(){

    let person = {'img': img.value, 'fullname':fname.value, 'city':city.value, 'country':country.value, 'phone':phone.value, 'email': email.value, 'bootcampBatch':bootcampBatch.value};
                       
    localStorage.setItem('person', JSON.stringify(person));
    console.log(localStorage);
                     
}}