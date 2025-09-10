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

document.getElementById("fortune-btn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const selectedFortune = fortunes[randomIndex];
  typeFortune(selectedFortune);
});

function typeFortune(text) {
  const fortuneEl = document.getElementById("fortune");
  fortuneEl.textContent = "";
  fortuneEl.style.opacity = 1;

  let i = 0;
  const interval = setInterval(() => {
    fortuneEl.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}
