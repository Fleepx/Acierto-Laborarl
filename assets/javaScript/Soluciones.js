
function updateActiveImage(activeImageId, descriptionText) {
    const img1 = document.getElementById('Psicolaborales');
    const img2 = document.getElementById('Empleabilidad');
    
    img1.classList.remove('active');
    img2.classList.remove('active');
    
    document.getElementById(activeImageId).classList.add('active');
    
    document.getElementById('description').innerText = descriptionText;
  }
  
  document.getElementById('Psicolaborales').addEventListener('click', function() {
    updateActiveImage('Psicolaborales', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam molestiae libero sed amet sunt accusamus eum eos at maiores esse perferendis, neque deserunt eveniet. Tenetur, facilis eveniet! Doloribus, impedit. Nisi praesentium voluptates cum! Perspiciatis, autem aperiam labore, et quisquam architecto est hic accusamus voluptas maxime velit non rerum voluptates! Aperiam quaerat doloribus eligendi obcaecati ullam consectetur voluptatibus eaque explicabo!');
  });
  
  document.getElementById('Empleabilidad').addEventListener('click', function() {
    updateActiveImage('Empleabilidad', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate atque doloribus deleniti error eius, ipsam eveniet ducimus corrupti nesciunt nam, possimus corporis dicta tempora vitae libero dolor vel in!');
  });
  
  // Al cargar la página, la primera imagen se establece como activa
  document.addEventListener('DOMContentLoaded', function() {
    // Activar la primera imagen y su respectiva descripción
    updateActiveImage('Psicolaborales', '1- Ofrecemos asesorías personalizadas, adaptadas a tu perfil, experiencia y objetivos profesionales, diseñando un plan estratégico que te permita destacarte en el mercado laboral y alcanzar tu cargo objetivo.');
  });
  