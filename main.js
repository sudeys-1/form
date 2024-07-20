let registerForm = document.querySelector("#registerForm")
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let fullNameInput = document.querySelector("#fullName");
    let  emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let  h1 = document.querySelector("#h1");
    let  h2 = document.querySelector("#h2");
    let fullNameError = document.querySelector("#fullNameError")
    let emailError =document.querySelector("#emailError")
    let passwordError = document.querySelector("#passwordError")

    let fullNameValue = fullNameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    let valid = true;

    // Full Name validation
    if (fullNameValue === '') {
        fullNameError.classList.remove('hidden');
        valid = false;
    } else {
        fullNameError.classList.add('hidden');
    }

    // Email validation
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.classList.remove('hidden');
        valid = false;
    } else {
        emailError.classList.add('hidden');
    }

    // Password validation
    if (passwordValue === '') {
        passwordError.classList.remove('hidden');
        valid = false;
    } else {
        passwordError.classList.add('hidden');
    }

    if (valid) {
        h2.classList.remove("hidden")
        h1.classList.add("hidden")
        registerForm.classList.add("hidden");
        
    }
});
