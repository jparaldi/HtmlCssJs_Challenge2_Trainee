const cardNumber = document.getElementById('card_number');
const cardholderName = document.getElementById('cardholder_name');
const expMonth = document.getElementById('exp_month');
const expYear = document.getElementById('exp_year');
const cvc = document.getElementById('cvc');
const confirmButton = document.getElementById('confirm_button');
const placeholderNumber = document.getElementById('placeholder_number');
const placeholderName = document.getElementById('placeholder_name');
const placeholderMonth = document.getElementById('placeholder_month');
const placeholderYear = document.getElementById('placeholder_year');
const placeholderCvc = document.getElementById('placeholder_cvc');
const form = document.querySelector('form');
const ok = document.querySelector('.continue');


function validateInput() {
    let maxLength;

    switch (this.id) {
        case "card_number":
            maxLength = 16;
            minLength = 16;
            break;
        case "exp_month":
        case "exp_year":
            maxLength = 2;
            break;
        case "cvc":
            maxLength = 3;
            minLength = 3;
            break;
        default:
            return;
    }
    
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
    if(expMonth.value < 1 || expMonth.value > 12){
        expMonth.value = '';
    }
}
function format(s) {
    return s.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
}

function set_card_number(e) {
    placeholderNumber.innerText = format(e.target.value);
}
function set_card_name(e) {
    placeholderName.innerText = e.target.value;
}
function set_card_month(e) {
    placeholderMonth.innerText = format(e.target.value);
}
function set_card_year(e) {
    placeholderYear.innerText = format(e.target.value);
}
function set_card_cvc(e) {
    placeholderCvc.innerText = format(e.target.value);
}
cardNumber.addEventListener("keyup", set_card_number);
cardholderName.addEventListener("keyup", set_card_name);
expMonth.addEventListener("keyup", set_card_month);
expYear.addEventListener("keyup", set_card_year);
cvc.addEventListener("keyup", set_card_cvc);

function Confirmer(e){
    e.preventDefault();
    if (cardNumber.value.length < 16) {
        cardNumber.classList.add('invalid');
        document.getElementById('card_number_error').style.display = 'block';
    }
    if (cardholderName.value === '') {
        cardholderName.classList.add('invalid');
    }
    if (expMonth.value === '') {
        expMonth.classList.add('invalid');
    }
    if (expYear.value === '') {
        expYear.classList.add('invalid');
    }
    if (cvc.value.length < 3) {
        cvc.classList.add('invalid');
        document.getElementById('cvc_error').style.display = 'block';
    }
    if (cardNumber.value.length === 16 && cardholderName.value !== '' && expMonth.value !== '' && expYear.value !== '' && cvc.value.length === 3) {
        document.querySelector('.form_area form').style.display = 'none';
        document.querySelector('.after_completed').style.display = 'flex';
    }
}

function resetForm() {
    form.reset();
    document.querySelector('.form_area form').style.display = 'flex';
    document.querySelector('.after_completed').style.display = 'none';
    cardNumber.classList.remove('invalid');
    document.getElementById('card_number_error').style.display = 'none';
    cardholderName.classList.remove('invalid');
    expMonth.classList.remove('invalid');
    expYear.classList.remove('invalid');
    cvc.classList.remove('invalid');
    document.getElementById('cvc_error').style.display = 'none';
    placeholderNumber.innerText = '0000 0000 0000 0000';
    placeholderName.innerText = '--------';
    placeholderMonth.innerText = '00';
    placeholderYear.innerText = '00';
    placeholderCvc.innerText = '000';
}