const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("change", () => {
    let inputValue = input.value;
    output.style.fontSize = `${inputValue}px`;

})
