document.querySelectorAll(".dropdown-container").forEach((container) => {
  const menu = container.querySelector(".dropdown-menu");
  const arrow = container.querySelector(".arrow-icon");

  // Trigger when the mouse enters the container
  container.addEventListener("mouseenter", () => {
    menu.classList.add("show-dropdown");
    if (arrow) arrow.classList.add("rotate-arrow");
  });

  // Trigger when the mouse leaves the container
  container.addEventListener("mouseleave", () => {
    menu.classList.remove("show-dropdown");
    if (arrow) arrow.classList.remove("rotate-arrow");
  });
});

//Card hover sound
const sound = document.getElementById("hoverAudio");
function playHoverSound() {
  sound.currentTime = 0;

  //Background music
  sound.play().catch((error) => {
    console.log("Autoplay blocked! Interact with the page first.");
  });
}

//Music volume
let audio = document.getElementById("valorantmusic");
audio.volume = 0.5;

//Transition when it shows in  the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
  
