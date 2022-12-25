const form = document.querySelector(".login-form");
form.addEventListener("submit", handSubmit);
function handSubmit(event) {
    event.preventDefault();
    const { elements: { email, password

    } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
