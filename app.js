let photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
  photo.addEventListener('click', () => {

    if (photo.classList.contains('photo-active')) {
      photo.classList.remove('photo-active');
      return; 
    }

    photos.forEach(p => p.classList.remove('photo-active'));
    photo.classList.add('photo-active');
  });
});