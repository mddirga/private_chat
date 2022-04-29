const form = document.querySelector(".signup form"),
  continueBtn = form.querySelector(".button input"),
  errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
  e.preventDefault(); //PREVENTING FORM FROM SUBMITTING
};

continueBtn.onclick = () => {
  let xhr = new XMLHttpRequest(); //CREATING XML OBJECT
  xhr.open("POST", "php/signup.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        if (data == "success") {
          location.href = "users.php";
        } else {
          errorText.textContent = data;
          errorText.style.display = "block";
        }
      }
    }
  };
  let formData = new FormData(form); //CREATING NEW FORMDATA OBJECT
  xhr.send(formData); //SENDING FORM DATA TO PHP
};
