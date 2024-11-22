// Filter Categories
function filterCategory(category) {
    const cards = document.querySelectorAll('.place-card');
    cards.forEach(card => {
      if (card.classList.contains(category) || category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Search Functionality
  function searchPlaces() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.place-card');
    cards.forEach(card => {
      if (card.innerText.toLowerCase().includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

  