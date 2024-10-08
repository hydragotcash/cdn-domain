const pickupLines = {
  1: [
    "Are you a Wi-Fi signal? Because I'm feeling a connection.",
    "Do you have a map? I just got lost in your eyes.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Is your name Chapstick? Because you're da balm.",
    "If we were at home, I’d be next to you right now.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "You must be a magician because every time I look at you, everyone else disappears.",
    "Are you French? Because Eiffel for you.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you like Star Wars? Because Yoda one for me."
  ],
  2: [
    "Are you a campfire? Because you're hot and I want s'more.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you a bank loan? Because you have my interest.",
    "Do you have a mirror in your pocket? Because I can see myself in your pants.",
    "If I were a cat, I'd spend all 9 lives with you.",
    "Are you an alien? Because you’ve abducted my heart.",
    "Are we at the airport? Because my heart is taking off.",
    "Are you cake? Because I want a piece of that.",
    "You must be tired, because you’ve been running through my mind all day."
  ],
  3: [
    "Are you a volcano? Because I lava you.",
    "Do you have a name, or can I call you mine?",
    "Do you believe in love at first swipe?",
    "Are you a parking ticket? Because you’ve got FINE written all over you.",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Do you have a license? Because you’re driving me crazy.",
    "Is it hot in here or is it just you?",
    "Do you believe in love at first sight—or should I walk by again?",
    "Are you a magician? Because when I look at you, everything else disappears.",
    "You must be a campfire because you’re making me hot and bothered."
  ]
};

const spicinessSlider = document.getElementById("spiciness-slider");
const spicinessLevel = document.getElementById("spiciness-level");
const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");
const pickupLineDisplay = document.getElementById("pickup-line-display");

spicinessSlider.addEventListener("input", () => {
  const spiciness = parseInt(spicinessSlider.value);
  spicinessLevel.textContent = getSpicinessText(spiciness);
});

generateButton.addEventListener("click", () => {
  const spiciness = parseInt(spicinessSlider.value);
  const randomIndex = Math.floor(Math.random() * pickupLines[spiciness].length);
  const randomPickupLine = pickupLines[spiciness][randomIndex];
  pickupLineDisplay.textContent = randomPickupLine;
  copyButton.removeAttribute("disabled");
});

copyButton.addEventListener("click", () => {
  const textToCopy = pickupLineDisplay.textContent;
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
});

function getSpicinessText(spiciness) {
  switch (spiciness) {
    case 1:
      return "Mild";
    case 2:
      return "Medium";
    case 3:
      return "Spicy";
    default:
      return "Mild";
  }
}