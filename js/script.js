const phone = document.getElementById("user__phone");

const pass = document.getElementById("user__password");
const conPass = document.getElementById("user__confirmPassword");
const error = document.getElementById("passwordError");

const form = document.getElementById("form__inputs");

phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
});


function validatePassword() {
    if (conPass.value === "") {
        error.style.display = "none";
        return;
    }

    if (pass.value === conPass.value) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}

pass.addEventListener("input", validatePassword);
conPass.addEventListener("input", validatePassword);

form.addEventListener("submit", (e) => {
    if (pass.value !== conPass.value) {
        e.preventDefault();
        alert("Passwords must be the same");
    }
});
