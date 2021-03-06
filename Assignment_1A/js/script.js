const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

const data = [];
var jsonData = [];

// console.log(name, email, phone);
name.addEventListener('blur', ()=>{

    let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(str);
    if(regex.test(str)){
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', ()=>{

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{

    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');

        $('#failure').hide();
        $('#success').show();

        const d = {
            Name:name.value,
            Email:email.value,
            Phone:phone.value,
            Msg :msg.value
        };
        console.log(d);
        data.push(d);
        jsonData = JSON.stringify(data);
        console.log(jsonData);
    }
    else{
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.classList.add('show');
        success.classList.remove('show');

        $('#success').hide();
        $('#failure').show();
    }

})
