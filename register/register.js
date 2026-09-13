const nama = document.getElementById("nama");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

const namemsg = document.getElementById("namemsg");
const usermsg = document.getElementById("usermsg");
const pwdmsg = document.getElementById("pwdmsg");

let name_flag = false;
let username_flag = false;
let password_flag = false;
let email_flag = false;

//Validasi nama lengkap
nama.addEventListener('input', () => {
    if(nama.value.length === 0){
        namemsg.innerHTML = "Full Name can't be empty";
        name_flag = false;
    } else if (nama.value.length < 8){
        namemsg.innerHTML = "Full Name must be at least 8 characters";
        name_flag = false;
    } else {
        namemsg.innerHTML = "";
        name_flag = true;
    }
});

//Validasi username
username.addEventListener('input', () => {
    if(username.value.length === 0){
        usermsg.innerHTML = "Username can't be empty";
        username_flag = false;
    } else if (username.value.length < 8){
        usermsg.innerHTML = "Username must be at least 8 characters";
        username_flag = false;
    } else {
        usermsg.innerHTML = "";
        username_flag = true;
    }
});

//Validasi Password
password.addEventListener('input', () => {
    if(password.value.length === 0){
        pwdmsg.innerHTML = "Password can't be empty";
        password_flag = false;
    } else if (password.value.length < 8){
        pwdmsg.innerHTML = "Password must be at least 8 characters";
        password_flag = false;
    } else {
        pwdmsg.innerHTML = "";
        password_flag = true;
    }
});

//Validasi Email
email.addEventListener('input', () => {
    const value = email.value;
    const parts = value.split("@");

    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length < 3 || !parts[1].includes(".")) {
        email_flag = false;
    } else {
        const domainParts = parts[1].split(".");
        if (domainParts.length < 2 || domainParts.some(part => part.length === 0)) {
            email_flag = false;
        } else {
            email_flag = true;
        }
    }
});

//tombol submit
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if(password.value !== confirm.value){
        alert("Password confirmation does not match.");
        return;
    }

    if(name_flag && username_flag && password_flag && email_flag){
        alert("Registration successful!");
    } else {
        alert("Registration failed. Please check your inputs.");
    }
});
