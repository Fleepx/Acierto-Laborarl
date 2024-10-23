window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navBar');
    const scrollY = window.scrollY;
  

    if (scrollY > 60) { 
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });