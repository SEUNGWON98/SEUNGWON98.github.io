const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form_id");
const greeting = document.querySelector("#greeting");
const main = document.querySelector(".main");

const empty = document.querySelector(".warning");

const HIDDEN_CLASSNAME = "hidden";
const ID_KEY = "loginId";
// const loginId = loginInput.value;

const savedUsername = localStorage.getItem(ID_KEY);

const clock = document.querySelector(".clock");

main.classList.add(HIDDEN_CLASSNAME);

function Clock() {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "short" });
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const minutes = minute < 10 ? "0" + minute : minute.toString();

  clock.innerHTML = `${month} ${date} <br/> <strong class="hours"> ${hour}: ${minutes} <strong/> `;
  // clock.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  const loginId = loginInput.value;
  localStorage.setItem(ID_KEY, loginId);
  if (loginInput.value == "") {
    event.preventDefault();

    empty.classList.remove(HIDDEN_CLASSNAME);
  } else {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.innerHTML = `환영합니다! ${loginId} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    Clock();
    clock.classList.remove(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
  }
}

console.log(savedUsername);

// loginForm.addEventListener("submit", Clock);
loginForm.addEventListener("submit", onLoginSubmit);

setInterval(Clock, 1000);
