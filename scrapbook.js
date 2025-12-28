const openBtn = document.getElementById("openBook");
const cover = document.getElementById("cover");
const currentPage = document.getElementById("currentPage");
const turningPage = document.getElementById("turningPage");

const content = currentPage.querySelector(".content");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const flipSound = new Audio("sounds/page-flip.mp3");
flipSound.volume = 0.6;
const pages = [
  { title: "How It All Began 💕", text: "This was the moment everything changed." },
  { title: "Our First Laugh", text: "That laugh I still remember." },
  { title: "Little Things", text: "The things we never planned." },
  { title: "The First Hello", text: "It sounded ordinary, but it wasn’t." },
  { title: "That One Smile", text: "The one that stayed in my mind all day." },
  { title: "Our Long Talks", text: "Time forgot to move when we talked." },
  { title: "The Awkward Moments", text: "Even awkward felt perfect with you." },
  { title: "Late Night Chats", text: "When sleep lost to us." },
  { title: "Your Voice", text: "Comfort in its purest form." },
  { title: "Unplanned Memories", text: "The best ones never had a plan." },
  { title: "The First Miss", text: "That strange feeling when you weren’t around." },
  { title: "Your Habits", text: "The little things only I notice." },
  { title: "My Favorite Person", text: "You, always you." },
  { title: "The Way You Care", text: "Quiet, gentle, real." },
  { title: "Our Silences", text: "Even silence felt full." },
  { title: "That One Day", text: "The day everything felt right." },
  { title: "Your Happiness", text: "Something I want to protect." },
  { title: "Our Inside Jokes", text: "No one else would understand." },
  { title: "The Comfort", text: "Being myself without trying." },
  { title: "Small Fights", text: "Even disagreements taught us something." },
  { title: "Missing You", text: "A feeling that never needed words." },
  { title: "Your Strength", text: "Something I admire deeply." },
  { title: "Random Smiles", text: "Caused by thoughts of you." },
  { title: "Our Growth", text: "Learning together, slowly." },
  { title: "That Look", text: "The one that says everything." },
  { title: "Being Understood", text: "A rare and beautiful thing." },
  { title: "Your Kindness", text: "It shows in the smallest ways." },
  { title: "Moments of Calm", text: "Where the world felt lighter." },
  { title: "Shared Dreams", text: "Dreams feel closer with you." },
  { title: "Laughing Too Much", text: "Until our stomachs hurt." },
  { title: "That Safe Feeling", text: "Like coming home." },
  { title: "Your Presence", text: "Enough, always." },
  { title: "The Little Surprises", text: "They meant more than you knew." },
  { title: "Our Memories", text: "Each one precious." },
  { title: "Hard Days", text: "Made easier by you." },
  { title: "Growing Closer", text: "Without even noticing." },
  { title: "Your Patience", text: "Something I’m grateful for." },
  { title: "Being Honest", text: "Without fear." },
  { title: "The Way We Changed", text: "For the better." },
  { title: "Simple Happiness", text: "Nothing fancy, just us." },
  { title: "That Warm Feeling", text: "You give me." },
  { title: "Unspoken Support", text: "Always felt." },
  { title: "Our Bond", text: "Stronger than words." },
  { title: "Everyday Love", text: "Quiet, steady, real." },
  { title: "Time Together", text: "Never wasted." },
  { title: "Still Choosing You", text: "Every single day." },
  { title: "What We Have 💗", text: "Something truly special." },
  { title: "Forever Feeling", text: "This is only the beginning." }
];


let index = 0;

/* Hide page initially */
currentPage.classList.remove("visible");
currentPage.style.display = "none";

/* Render page */
function render(i) {
  content.innerHTML = `
    <h2>${pages[i].title}</h2>
    <p>${pages[i].text}</p>
  `;
  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === pages.length - 1;
}

/* OPEN SCRAPBOOK */
openBtn.addEventListener("click", () => {
  flipSound.currentTime = 0;
  flipSound.play();

  cover.style.transform = "rotateY(-160deg)";

  setTimeout(() => {
    cover.style.display = "none";
    currentPage.style.display = "block";
    render(index);
    requestAnimationFrame(() => {
      currentPage.classList.add("visible");
    });
  }, 900);
});

/* NEXT */
nextBtn.addEventListener("click", () => {
  if (index >= pages.length - 1) return;

  flipSound.currentTime = 0;
  flipSound.play();

  turningPage.innerHTML = `<div class="content">${content.innerHTML}</div>`;
  turningPage.className = "page turning turn-forward";

  currentPage.classList.remove("visible");

  index++;
  render(index);

  requestAnimationFrame(() => {
    currentPage.classList.add("visible");
  });

  setTimeout(() => {
    turningPage.className = "page turning hidden";
    turningPage.innerHTML = "";
  }, 900);
});

/* PREVIOUS */
prevBtn.addEventListener("click", () => {
  if (index <= 0) return;

  flipSound.currentTime = 0;
  flipSound.play();

  turningPage.innerHTML = `<div class="content">${content.innerHTML}</div>`;
  turningPage.className = "page turning turn-backward";

  currentPage.classList.remove("visible");

  index--;
  render(index);

  requestAnimationFrame(() => {
    currentPage.classList.add("visible");
  });

  setTimeout(() => {
    turningPage.className = "page turning hidden";
    turningPage.innerHTML = "";
  }, 900);
});
