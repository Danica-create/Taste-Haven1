const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");

const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");

const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const emailError = document.getElementById("emailError");

const addressError = document.getElementById("addressError");
const cityError = document.getElementById("cityError");
const stateError = document.getElementById("stateError");

const deliveryError = document.getElementById("deliveryError");
// const paymentError = document.getElementById("paymentError");

// const deliveryError = document.getElementById("deliveryError");
// const paymentError = document.getElementById("paymentError");

form.addEventListener("submit", function(event){

event.preventDefault();

nameError.textContent="";
numberError.textContent="";
emailError.textContent="";
addressError.textContent="";
cityError.textContent="";
stateError.textContent="";
deliveryError.textContent="";
// paymentError.textContent="";

let valid=true;


// Name

if(nameInput.value.trim()==""){
nameError.textContent="First name is required";
valid=false;
}


// Phone

if(numberInput.value.trim()==""){
numberError.textContent="Phone number is required";
valid=false;
}

else if(!/^\d{11}$/.test(numberInput.value)){
numberError.textContent="Phone number must be 11 digits";
valid=false;
}


// Email

if(emailInput.value.trim()!=""){

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(emailInput.value)){
emailError.textContent="Enter a valid email";
valid=false;
}

}


// Address

if(addressInput.value.trim()==""){
addressError.textContent="Address is required";
valid=false;
}


// City

if(cityInput.value.trim()==""){
cityError.textContent="City is required";
valid=false;
}


// State

if(stateInput.value.trim()==""){
stateError.textContent="State is required";
valid=false;
}


// Delivery Method

const deliveryMethod = document.querySelector(
    'input[name="deliveryMethod"]:checked'
);

if (!deliveryMethod) {
    deliveryError.textContent = "Please select a delivery method.";
    valid = false;
}

// Payment Method

// const paymentMethod = document.querySelector(
//     'input[name="paymentMethod"]:checked'
// );

// if (!paymentMethod) {
//     paymentError.textContent = "Please select a payment method.";
//     valid = false;
// }
// Delivery Method

// const delivery=document.querySelector('input[name="deliveryMethod"]:checked');

// if(!delivery){
// deliveryError.textContent="Select a delivery method";
// valid=false;
// }


// Payment Method

// const payment=document.querySelector('input[name="payment"]:checked');

// if(!payment){
// paymentError.textContent="Select a payment method";
// valid=false;
// }


// Success

// if(valid){

//     const phone = "2348070577036"; // Replace with your WhatsApp business number

//     const message =
// `Hello Taste Haven!

// I would like to place an order.

// Customer Name: ${nameInput.value}
// Phone Number: ${numberInput.value}
// Email: ${emailInput.value}

// Address: ${addressInput.value}
// City: ${cityInput.value}
// State: ${stateInput.value}
// Landmark: ${document.getElementById("landmark").value}

// Delivery Method: ${document.querySelector('input[name="deliveryMethod"]:checked').value}

// Payment Method: ${document.querySelector('input[name="paymentMethod"]:checked').value}

// `;

//     const whatsappURL =
// `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

//     window.open(whatsappURL, "_blank");

//     form.reset();

// }
//  if(valid){

//  alert("Order submitted successfully!");

//  form.reset();

//  }

});