const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
const hint = document.getElementById("hint");

function setOpen(open) {
  card.classList.toggle("is-open", open);
  card.setAttribute("aria-pressed", String(open));
  flipBtn.textContent = open ? "Front" : "Flip";
  if (hint) {
    hint.textContent = open ? "Tap again for front" : "Tap the card to open";
  }
}

function toggleCard() {
  setOpen(!card.classList.contains("is-open"));
}

card.addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  toggleCard();
});

card.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleCard();
  }
});

flipBtn.addEventListener("click", toggleCard);

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    toggleCard();
  }
});
