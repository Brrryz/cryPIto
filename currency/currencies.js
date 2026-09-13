document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy");
  const tradeButtons = document.querySelectorAll(".trade");
  const convertButtons = document.querySelectorAll(".convert");

  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      return alert("You have successfully bought xx.x currency! Thank you for trusting us.");
    });
  });

  tradeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      return alert("You have successfully traded xx.x currency! Thank you for trusting us.");
    });
  });

  convertButtons.forEach((button) => {
    button.addEventListener("click", () => {
      return alert("You have successfully converted xx.x currency into xx.x currency! Thank you for trusting us.");
    });
  });
});