
const searchBar = document.querySelector('.searchbar--input');
const galleryThumbs = document.querySelectorAll('.gallery--thumbs');
const galleryImages = document.querySelectorAll('.gallery--images')

searchBar.addEventListener('keyup', () => {
  const searchBarValue = searchBar.value.toLowerCase();
  console.log(searchBarValue);

  for (let i = 0; i < galleryThumbs.length; i += 1) {
    const galleryCaption = galleryThumbs[i].getAttribute('data-title');
    // Looks to see if caption contains the string saved to searchBarValue
    if (galleryCaption.toLowerCase().includes(searchBarValue)) {
      // If true, the element thumbnail is displayed and the linked image is visible in the lightbox
      galleryThumbs[i].style.display = '';
      galleryThumbs[i].setAttribute('data-lightbox', 'gallery--images');
    } else {
      // Else, look to see if the image alt attr contains the string saved to searchBarValue
      if (galleryImages[i].getAttribute('alt').toLowerCase().includes(searchBarValue)) {
        // If true, the element thumbnail is displayed and the linked image is visible in the lightbox
        galleryThumbs[i].style.display = '';
        galleryThumbs[i].setAttribute('data-lightbox', 'gallery--images');
      } else {
        // Else, hide the thumbnail and hide the image from displaying in the lightbox
        galleryThumbs[i].style.display = 'none';
        galleryThumbs[i].removeAttribute('data-lightbox');
      }
    }
  }

});

// lightbox options
lightbox.option({
  'disableScrolling': true,
  'wrapAround': true
});
