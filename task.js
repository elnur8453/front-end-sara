const card = document.getElementById("card");

const inputName = document.getElementById("name");
const inputNumber = document.getElementById("number");
const inputExp = document.getElementById("exp");
const inputCvv = document.getElementById("cvv");

const displayName = document.getElementById("display-name");
const displayNumber = document.getElementById("display-number");
const displayExp = document.getElementById("display-exp");
const displayCvv = document.getElementById("display-cvv");

card.addEventListener("click", () => {
    card.classList.toggle("flip");
});

inputName.addEventListener("input", () => {
    displayName.textContent = inputName.value || "Name";
});

inputNumber.addEventListener("input", () => {
    let value = inputNumber.value.replace(/\D/g,"").substring(0, 16);

    value = value.replace(/(.{4})/g, "$1 ").trim();

    inputNumber.value = value;
    displayNumber.textContent = value || "0000 0000 0000 0000";
});

inputExp.addEventListener("input", () => {
    let v = inputExp.value.replace(/\D/g,"").substring(0, 4);

    if (v.length >= 3) {
        v = v.substring(0,2) + "/" + v.substring(2,4);
    }

    inputExp.value = v;
    displayExp.textContent = v || "00/00";
});

inputCvv.addEventListener("input", () => {
    inputCvv.value = inputCvv.value.replace(/\D/g, "").substring(0, 3);
    displayCvv.textContent = inputCvv.value || "000";
});