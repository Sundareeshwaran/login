const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const uname = document.getElementById("uname").value;
  const pwd = document.getElementById("pwd").value;

  if (uname === "" || pwd === "") {
      showMessage("Invalid username or password");
  } else if (uname == "admin" && pwd == "admin") {
      showMessage("Login successful!");
      window.location.href = " https://github.com/Sundareeshwaran/login/";
  } else {
    showMessage("Invalid username or password");
  }
});

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerText = message;
}
