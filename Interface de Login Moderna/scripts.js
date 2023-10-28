const container = document.getElementById("container");
const registerBtn = document.gerElementById("register");
const logintBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});
