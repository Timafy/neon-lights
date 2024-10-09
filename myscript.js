let pwd = document.getElementById("pwd");
let pwd_confirm = document.getElementById("pwd-confirm");

// sets invalid state if passwords are not the same 
pwd_confirm.addEventListener("input", () => {
    if (pwd_confirm.value != pwd.value) {
        pwd_confirm.setCustomValidity("Passwords do not match!");
    }
    else {
        pwd_confirm.setCustomValidity("");
    }
});




