const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const container = document.querySelector(".container");

// 🔥 EDIT THESE PHRASES HOWEVER YOU WANT
const noPhrases = [
  "no",
  "are you sure?",
  "really sure?",
  "think again 😢",
  "last chance...",
  "pretty please?",
  "don't do this 💔",
  "wrong answer",
  "try again 😌"
];

let phraseIndex = 0;

// YES BUTTON CLICK
yesBtn.addEventListener("click", () => {
  // Remove everything inside container
  container.innerHTML = `
    <h1>YIPPEEEEEEE ❤️</h1>
    <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="celebration gif" style="width:300px; margin-top:20px;">
  `;
});

// NO BUTTON MOVE + CHANGE TEXT
noBtn.addEventListener("mouseover", () => {
  // Move button
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Change text
  phraseIndex = (phraseIndex + 1) % noPhrases.length;
  noBtn.textContent = noPhrases[phraseIndex];
});
