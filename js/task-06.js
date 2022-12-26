const input = document.querySelector("#validation-input");
const dataLength = +input.dataset.length;

input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === dataLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid")
    }
})
// чого в мене зеленіє?
