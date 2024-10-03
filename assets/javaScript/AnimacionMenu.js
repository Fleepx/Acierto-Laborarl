window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;
  

    if (scrollY > 60) { 
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });