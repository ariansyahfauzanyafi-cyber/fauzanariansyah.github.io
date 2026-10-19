// Hamburger Menu Toggle Logic
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    // Toggles the menu visibility
    navMenu.classList.toggle('active');
});

// Optional: Close the menu automatically when a link is clicked
const menuLinks = document.querySelectorAll('.menu-button');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


const track = document.getElementById('photoTrack');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  // Calculates the distance to scroll (image width + 24px gap)
  function getScrollAmount() {
    const slideWidth = document.querySelector('.carousel-slide').clientWidth;
    return slideWidth + 24; 
  }

if (nextBtn && prevBtn && track) {
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
}


function openTab(evt, tabName) {
    // 1. Hide all content boxes
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Remove the underline from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Show the specific content box and underline the clicked button
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


