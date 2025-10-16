/* PAST FORTUNES
const fortunes = [
  "The shadow you chase will reveal its own light.",
  "Whispers in silence carry the answer you seek.",
  "A path closes only to guide you to a hidden gate.",
  "What is lost waits patiently to be found again.",
  "The next turn of the moon will alter your course.",
  "The stars hold a secret only you can unlock.",
  "A chance encounter will echo in your future.",
  "The silence between words hides the true message.",
  "Your steps are guided by a rhythm older than time.",
  "An invisible ally awaits you in the shadows.",
  "Your Wi-Fi will connect on the first try today.",
  "You will finally remember why you entered that room.",
  "Beware: free samples may lead to lifelong commitments.",
  "Someone will like your meme more than you do.",
  "Your socks will vanish, but only the left ones.",
  "Today you will defeat the printer in battle.",
  "Beware the autocorrect: it knows too much.",
  "An unplanned nap will change your destiny.",
  "Your future looks bright… once you recharge your phone.",
  "You will open the fridge and find exactly what you forgot you wanted.",
  "An unexpected snack will bring unexpected joy.",
  "The spilled coffee will be a sign of greatness.",
  "Your cat/dog will judge your life choices today.",
  "You will find a sock... but only when it’s too late.",
  "Your message will eventually reach the right person.",
  "A song stuck in your head contains the answers you need.",
  "The ice cream aisle holds the key to happiness.",
  "Your password will work on the first try.",
  "Someone will compliment you today, for no reason.",
  "Your online order will arrive faster than expected.",
  "Today you master the art of not tripping over anything."
];
*/

// --- Multilanguage Fortunes ---
const fortunes = {
  EN: [
    "The shadow you chase will reveal its own light.",
    "Whispers in silence carry the answer you seek.",
    "Your Wi-Fi will connect on the first try today.",
    "You will finally remember why you entered that room.",
  ],
  ES: [
    "La sombra que tanto perseguís va a revelar su propia luz.",
    "Los susurros del silencio traen la respuesta que buscás.",
    "Tu Wi-Fi se conectará al primer intento hoy.",
    "Por fin te vas a acordar de por qué entraste a esa habitación.",
  ],
  NO: [
    "Skyggen du jager vil avsløre sitt eget lys.",
    "Hvisking i stillhet bærer svaret du søker.",
    "Din Wi-Fi vil koble til på første forsøk i dag.",
    "Du vil endelig huske hvorfor du gikk inn i det rommet.",
  ]
};

// --- Button text by language ---
const buttonLabels = {
  EN: "Reveal Fortune",
  ES: "Revelá tu destino",
  NO: "Avslør skjebnen"
};

// --- Select elements ---
const fortuneBtn = document.getElementById("fortune-btn");
const fortuneEl = document.getElementById("fortune");

// --- Typing control (store interval id so we can clear it) ---
let typingIntervalId = null;

// --- Set current language (detect or load saved) ---
let currentLang = "EN";
const savedLang = localStorage.getItem("fortuneLang");
if (savedLang && fortunes[savedLang]) {
  currentLang = savedLang;
} else {
  // auto-detect small heuristic (first two letters)
  const detected = (navigator.language || navigator.userLanguage || "en").slice(0,2).toUpperCase();
  if (fortunes[detected]) currentLang = detected;
  // save detected for next time
  localStorage.setItem("fortuneLang", currentLang);
}

// --- Update UI for language initially ---
fortuneBtn.textContent = buttonLabels[currentLang];
document.querySelectorAll(".lang-switcher button").forEach((b) => {
  b.classList.toggle("active", b.dataset.lang === currentLang);
});

// --- Reveal Fortune ---
fortuneBtn.addEventListener("click", () => {
  const langFortunes = fortunes[currentLang];
  const randomIndex = Math.floor(Math.random() * langFortunes.length);
  const selectedFortune = langFortunes[randomIndex];
  typeFortune(selectedFortune);
});

// --- Typing Animation (clears previous interval) ---
function typeFortune(text) {
  // clear previous typing if any
  if (typingIntervalId) {
    clearInterval(typingIntervalId);
    typingIntervalId = null;
  }

  fortuneEl.textContent = "";
  fortuneEl.style.opacity = 1;

  let i = 0;
  typingIntervalId = setInterval(() => {
    fortuneEl.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingIntervalId);
      typingIntervalId = null;
    }
  }, 50);
}

// --- Helper: find index of a fortune across all languages ---
// returns index (0..n-1) or -1 if not found
function findFortuneIndex(text) {
  for (const lang of Object.keys(fortunes)) {
    const idx = fortunes[lang].indexOf(text);
    if (idx > -1) return idx;
  }
  return -1;
}

// --- Language Switching ---
document.querySelectorAll(".lang-switcher button").forEach((btn) => {
  btn.addEventListener("click", () => {
    // visuals
    document.querySelectorAll(".lang-switcher button").forEach((b) =>
      b.classList.remove("active")
    );
    btn.classList.add("active");

    // set language, update button label and save
    currentLang = btn.dataset.lang;
    fortuneBtn.textContent = buttonLabels[currentLang];
    localStorage.setItem("fortuneLang", currentLang);

    // translate currently displayed fortune immediately (if present)
    const currentText = fortuneEl.textContent.trim();
    if (currentText) {
      const index = findFortuneIndex(currentText);
      if (index > -1) {
        const translated = fortunes[currentLang][index];
        typeFortune(translated);
      } else {
        // if current shown fortune isn't in our lists, just clear it
        // or optionally keep it as-is. Here we keep it.
      }
    }
  });
});
