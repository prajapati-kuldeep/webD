const newsArticles = [
    {
      title: "Reodar Fair",
      image: "../../img/NEWS/Reodar-mela.jpg",
      description: "The Reodar Fair in Sirohi district celebrates traditional Rajasthani culture with vibrant folk dances, music, and religious rituals, drawing both locals and tourists for a unique cultural experience.",
    },
    {
      title: "Goutam Rishi Fair",
      image: "../../img/NEWS/Goutam-rishi-mela.jpg",
      description: "The Gautam Rishi Fair in Sirohi celebrates the life and teachings of Gautam Rishi, drawing the Meena community together for religious rituals, folk performances, and cultural festivities.",
    },
    {
      title: "Ram Navmi Celebretion in Sirohi",
      image: "../../img/NEWS/Ram-navmi.jpg",
      description: "The Ram Navami celebration in Sirohi is marked by grand processions, devotional prayers, and vibrant cultural events, honoring the birth of Lord Rama with fervor and community participation​.",
    },
    {
      title: "Grand Opening of The Statue of Maharana Pratap",
      image: "../../img/NEWS/Mahaaranapratam-statue.jpg",
      description: "The Grand Opening of the Statue of Maharana Pratap in Sirohi was a historic event, commemorating the valor and legacy of the great Rajput warrior with a grand ceremony and cultural celebrations.",
    },
    {
      title: "Opening of Nagani Nagdevta Temple",
      image: "../../img/NEWS/Nagani-mela.jpg",
      description: "The Opening of the Nagani Nagdevta Temple in Sirohi was a significant religious event, with locals gathering to celebrate and seek blessings from Nagdevta, the serpent deity, through rituals and cultural performances.",
    },
    {
      title: "The Sirohi Foundation Day",
      image: "../../img/NEWS/Sirohi-sthapna.jpg",
      description: "Sirohi Foundation Day is celebrated annually to mark the establishment of Sirohi district, with events showcasing the region's rich cultural heritage, local traditions, and community pride.",
    },
    {
      title: "Summer Festivel of Mount Abu",
      image: "../../img/NEWS/Summer-fest-mount.jpg",
      description: "The Summer Festival of Mount Abu is a vibrant celebration of Rajasthani culture, featuring folk music, dance performances, and traditional competitions amidst the scenic beauty of the hill station.",
    },
    {
      title: "Fun Filled Fair in Mount Abu",
      image: "../../img/NEWS/Fun-filled-fair.jpg",
      description: "The Fun Filled Fair in Mount Abu is a lively event featuring traditional Rajasthani music, dance, and games, attracting visitors for a joyous cultural experience.",
    },
    {
      title: "Delwara Temple Completed it's 1000 Yeas",
      image: "../../img/NEWS/Delwara-temple.jpg",
      description: "The Delwara Temple in Mount Abu recently celebrated its 1000th anniversary, honoring its rich history as a stunning example of Jain architecture and devotion.",
    },
  ];
  
  const newsList = document.getElementById("news-list");
  const searchBar = document.getElementById("search-bar");
  
  // Render News Articles
  function renderNews(articles) {
    newsList.innerHTML = "";
    articles.forEach((article) => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      `;
      newsList.appendChild(card);
    });
  }
  
  // Filter News
  searchBar.addEventListener("input", (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredArticles = newsArticles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );
    renderNews(filteredArticles);
  });
  
  // Initial Render
  renderNews(newsArticles);
  
  // Handle News Form Submission
const newsForm = document.getElementById("news-form");
const formMessage = document.getElementById("form-message");

newsForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const newsContent = document.getElementById("news").value;

  // Simulate sending data to the server (you can replace this with an actual API call)
  console.log("News Submitted:", { name, email, newsContent });

  // Show confirmation message
  formMessage.textContent = "Thank you for submitting your news! We will review it soon.";
  formMessage.style.color = "#a4bfd6";

  // Clear form fields
  newsForm.reset();
});