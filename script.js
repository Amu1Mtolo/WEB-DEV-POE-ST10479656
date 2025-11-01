

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
      accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            header.classList.toggle('active');

            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.maxHeight = null; 
            } else {
                content.classList.add('show');
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
        });
        });
    });
    

document.addEventListener('DOMContentLoaded', () => {
    
  
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');


    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImage.src = this.src;
            lightboxCaption.innerHTML = this.alt; 
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

   
    lightbox.addEventListener('click', function(e) {
        
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });


    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

});
               

       