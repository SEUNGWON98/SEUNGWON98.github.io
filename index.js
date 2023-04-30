function Clock() {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "short" });
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const minutes = minute < 10 ? "0" + minute : minute.toString();
  const clock = document.querySelector(".clock");

  clock.innerHTML = `${month} ${date} <br/> <strong class="hours"> ${hour}: ${minutes} <strong/> `;
}

setInterval(Clock, 1000);
