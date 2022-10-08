// disabling the button
const button = document.forms["contact"]["submit"];
button.disabled = true;

// checking if any field is empty
function enableSubmit() {
    const nameField = document.forms["contact"]["first_name"];
    const emailField = document.forms["contact"]["email"];
    const commentField = document.forms["contact"]["comment"];

    if (nameField.value === "" || emailField.value === "" || commentField.value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
};