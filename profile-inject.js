window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".md-header__inner");

  if (header) {
    const img = document.createElement("img");
    img.src = "/assets/images/profile.jpg"; // adjust path if needed
    img.alt = "Profile";
    img.classList.add("nav-profile-image");
    header.appendChild(img);
  }
});

