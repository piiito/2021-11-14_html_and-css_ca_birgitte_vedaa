const mensJackets = document.querySelector(".men_jacket_section");
const mainUrl = "http://localhost/flower-power/wp-json/wc/store/products";

const detailPage = document.querySelector(".bodøraincoat");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + id;
console.log(detailPageUrl);
mensJackets.innerHTML="Loading..";

async function getProducts(url){
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    
    mensJackets.innerHTML ="";
    results.forEach(function(product){
        mensJackets.innerHTML += `<div class="men_jacket_list">
                                    <a href="specificmen.html?id=${product.id}">
                                    <img src="${product.images[0].src}" alt${product.name}>
                                    <h2>${product.name}</h2>
                                    <h3>${product.prices.price} ${product.prices.currency_symbol}
                                    </a>
                                    </div>`;
    })
}

getProducts(mainUrl);


/* const detailPage = document.querySelector(".bodøraincoat");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + id;
console.log(detailPageUrl); */

async function productDetails(){
    try{
        const fetchDetails = await fetch(detailPageUrl);
        const details = await fetchDetails.json();
        console.log(details);

        createHtml(details);
    }
    catch(error){
        console.log(error);
    }
}

productDetails();

function createHtml(details){
    detailPage.innerHTML += `<h1>${details.name}</h1>`;
}


 
 
 console.log("hello");
const addCart = document.querySelector(".add_cart");

addCart.onclick = function(){
   addCart.innerHTML += `<p class="added_cart">Added to cart <i class="fas fa-shopping-bag"></i></p>`;
} 



/* const colorOfJacket = document.querySelector(".radio");
const sizeOfJacket = document.querySelector("#sizes");

addToCart.onclick = function(){
sizeOfJacket.onchange = function (){
    console.log(this.value);
    let jacketSize = this.value;
}

colorOfJacket.onchange = function (){
    console.log(event.target.value);
    let jacketColor = this.value;
}

addToCart.innerHTML = `<p>${jacketColor} + ${jacketSize}</p>`
}
 */ 
 



//form validation function //


const form = document.querySelector("#customer_form");
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#firstnameerror");
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector("#lastnameerror");
const emailAddress = document.querySelector("#emailaddress");
const emailAddressError = document.querySelector("#emailaddresserror");
const number = document.querySelector("#number");
const numberError = document.querySelector("#numbererror");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addresserror");
const postNumber = document.querySelector("#postnumber");
const postNumberError = document.querySelector("#postnumbererror");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passworderror");
const confirmPassword = document.querySelector("#confirmpassword");
const confirmPasswordError = document.querySelector("#confirmpassworderror");

function validateForm(event){
    event.preventDefault();

    if(validateLength(firstName.value, 0)){
        firstNameError.style.display = "none";
    }
    else{
        firstNameError.style.display = "block";
    }

    if(validateLength(lastName.value, 0)){
        lastNameError.style.display = "none";
    }
    else{
        lastNameError.style.display ="block";
    }

    if(emailValidation(emailAddress.value)){
        emailAddressError.style.display = "none";
    }
    else{
        emailAddressError.style.display = "block";
    }

    if(validateLength(number.value, 7)){
        numberError.style.display = "none";
    }
    else{
        numberError.style.display = "block";
    }

    if(validateLength(address.value, 9)){
        addressError.style.display = "none";
    }
    else{
        addressError.style.display = "block";
    }

    if(validateLength(postNumber.value,  3)){
        postNumberError.style.display = "none";
    }
    else{
        postNumberError.style.display = "block";
    }

    if(validatePassword(password.value)){
        passwordError.style.display = "none";
    }
    else{
        passwordError.style.display = "block";
    }

    if(confirmPassword.value === password.value){
        confirmPasswordError.style.display = "none";
    }
    else{
        confirmPasswordError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);



function validateLength(value, len){
    if(value.trim().length > len){
        return true;
    }
    else{
        return false;
    }
};

function validatePassword(password){
    const passwordTest = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    const passwordMatch = passwordTest.test(password);
    return passwordMatch;


}
function emailValidation(email){
    const emailTest = /\S+@\S+\.\S+/;
    const emailMatch = emailTest.test(email);
    return emailMatch;
}



