      function password_show_hide() {
let password = document.getElementById("password");
let show_eye = document.getElementById("show_eye");
  let hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (password.type === "password") {
    password.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    password.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}