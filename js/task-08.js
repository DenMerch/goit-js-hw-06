import save from "./localStorage.js";
const form = document.querySelector(".login-form");
form.addEventListener("submit", handSubmit);
function handSubmit(event) {
    event.preventDefault();
    const {
        elements: {
            email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const user = {
        email: email.value,
        password: password.value,
    }
    save("new", user);

    console.log(user);
    event.currentTarget.reset();
}

