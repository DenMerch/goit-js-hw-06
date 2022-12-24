const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
input.addEventListener("blur", (event) => {
    if (input.value.length <= dataLength) {
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid")
    }
})