document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Connected");

    const formSubmit = document.querySelector("form");
    const dataContent = document.querySelector(".dataContent");

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const address = document.getElementById("address");

    formSubmit.addEventListener("submit", function(event) {
        event.preventDefault(); 

      dataContent.innerHTML = `
    <h3 style="color: orange;">Submitted Information:</h3>
    <p><strong>Name:</strong> ${name.value}</p>
    <p><strong>Age:</strong> ${age.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Address:</strong> ${address.value}</p>
`;

        name.value = "";
        age.value = "";
        email.value = "";
        address.value = "";
    });
});