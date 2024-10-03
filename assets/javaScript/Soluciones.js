// Función para actualizar la descripción y las imágenes activas
function updateActiveImage(activeImageId, descriptionText) {
    // Obtener ambas imágenes
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    // Resetear ambas imágenes a su estado inicial
    img1.classList.remove('active');
    img2.classList.remove('active');
    
    // Agregar la clase 'active' a la imagen seleccionada
    document.getElementById(activeImageId).classList.add('active');
    
    // Actualizar el texto de la descripción
    document.getElementById('description').innerText = descriptionText;
  }
  
  // Asignar eventos de clic para ambas imágenes
  document.getElementById('img1').addEventListener('click', function() {
    updateActiveImage('img1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam molestiae libero sed amet sunt accusamus eum eos at maiores esse perferendis, neque deserunt eveniet. Tenetur, facilis eveniet! Doloribus, impedit. Nisi praesentium voluptates cum! Perspiciatis, autem aperiam labore, et quisquam architecto est hic accusamus voluptas maxime velit non rerum voluptates! Aperiam quaerat doloribus eligendi obcaecati ullam consectetur voluptatibus eaque explicabo!');
  });
  
  document.getElementById('img2').addEventListener('click', function() {
    updateActiveImage('img2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate atque doloribus deleniti error eius, ipsam eveniet ducimus corrupti nesciunt nam, possimus corporis dicta tempora vitae libero dolor vel in!');
  });
  
  // Al cargar la página, la primera imagen se establece como activa
  document.addEventListener('DOMContentLoaded', function() {
    // Activar la primera imagen y su respectiva descripción
    updateActiveImage('img1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam molestiae libero sed amet sunt accusamus eum eos at maiores esse perferendis, neque deserunt eveniet. Tenetur, facilis eveniet! Doloribus, impedit.');
  });
  