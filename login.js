const loginBtn = document.getElementById("loginBtn");
const errorText = document.getElementById("error");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // CHANGE THESE VALUES
  const correctUsername = "kissmiss";
  const correctPassword = "0805";

  //sessionStorage is a browser provided, client side storage mechanism used to store
  //small piece of data for a single session.

  if (username === correctUsername && password === correctPassword) {
    sessionStorage.setItem("isLoggedIn", "true");

    // Fade page
    document.body.style.opacity = "0";

    // Show loader after fade starts
    setTimeout(() => {
      document.getElementById("loader").classList.remove("hidden");
    }, 600);

    // Redirect after loader is visible
    setTimeout(() => {
      window.location.href = "scrapbook.html";
    }, 1200);

  } else {
    errorText.textContent = "Hmm… that doesn’t feel right 💭";
  }
});
