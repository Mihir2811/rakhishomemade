// Toggle navigation on small screens
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
  });
  
  // Smooth scrolling
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      document.getElementById('nav-menu').classList.remove('active'); // close menu on click
    });
  });
  
  // Contact form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    if (!name.value || !email.value || !message.value) {
      alert('Please complete all fields!');
      e.preventDefault();
    }
  });
  