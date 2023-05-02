const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form_id");
const greeting = document.querySelector("#greeting");

const empty = document.querySelector(".warning");

const HIDDEN_CLASSNAME = "hidden";
const ID_KEY = "loginId";

function onLoginSubmit(event) {
  event.preventDefault();
  const loginId = loginInput.value;
  // loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(loginId);
  localStorage.setItem(ID_KEY, loginId);

  greeting.innerHTML = `Hello ${loginId}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);

  if (savedUsername == "") {
    // loginForm.classList.remove(HIDDEN_CLASSNAME);

    empty.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    // greeting.innerHTML = `Hello ${savedUsername}`;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.classList.remove(HIDDEN_CLASSNAME);
    // function clock() {
    //   const today = new Date();
    //   const month = today.toLocaleString("en-US", { month: "short" });
    //   const date = today.getDate();
    //   const hour = today.getHours();
    //   const minute = today.getMinutes();
    //   const minutes = minute < 10 ? "0" + minute : minute.toString();
    //   const clock = document.querySelector(".clock");
    // }
    // clock.innerHTML = `${month} ${date} <br/> <strong class="hours"> ${hour}: ${minutes} <strong/> `;
    // clock.classList.remove(HIDDEN_CLASSNAME);
    // setInterval(Clock, 1000);
  }
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(ID_KEY);
console.log(savedUsername);
