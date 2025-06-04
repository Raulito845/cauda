document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Cambiar la imagen principal
        mainImage.src = this.src;
        
        // Quitar la clase 'active' de todas las miniaturas
        thumbnails.forEach(thumb => {
          thumb.classList.remove('active');
        });
        
        // Añadir la clase 'active' a la miniatura clickeada
        this.classList.add('active');
      });
    });
  });