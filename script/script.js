window.onload = function () {
    let email = document.querySelector('input[name="email"]');
    const btn = document.querySelector("button");
    let infoEmail = document.querySelector(".no-active");
  
    btn.addEventListener("click", () => {
      if (!ValidateEmail(email)) {
        infoEmail.classList.add("active");
        email.classList.add("error");
      } else {
        infoEmail.classList.remove("active");
        email.classList.remove("error");
      }
    });
    function ValidateEmail(inputText) {
      let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (inputText.value.match(mailformat)) {
        return true;
      } else {
        return false;
      }
    }
  };