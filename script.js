document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded");

  const signUpBtn = document.getElementById("signUpBtn");
  console.log("Sign Up button found:", signUpBtn);

  signUpBtn.addEventListener("click", () => {
    console.log("Sign Up button clicked!");

    // Capture form values
    const ownerName = document.getElementById("ownerName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const petName = document.getElementById("petName").value;
    const petType = document.getElementById("petType").value;

    // Log captured values
    console.log({
      ownerName,
      email,
      phone,
      city,
      zip,
      petName,
      petType
    });
  });
});



