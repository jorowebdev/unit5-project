
const searchBar = document.querySelector('.searchbar--input');
const galleryThumbs = document.querySelectorAll('.gallery--thumbs');
const galleryImages = document.querySelectorAll('.gallery--images')

searchBar.addEventListener('keyup', () => {
  const searchBarValue = searchBar.value.toLowerCase();
  console.log(searchBarValue);

  for (let i = 0; i < galleryThumbs.length; i += 1) {
    const galleryCaption = galleryThumbs[i].getAttribute('data-title');

    if (galleryCaption.includes(searchBarValue)) {
      galleryThumbs[i].style.display = '';
      galleryThumbs[i].setAttribute('data-lightbox', 'gallery--images');
    } else {
      galleryThumbs[i].style.display = 'none';
      galleryThumbs[i].removeAttribute('data-lightbox');
    }
  }

});

// lightbox options
lightbox.option({
  'disableScrolling': true,
  'wrapAround': true
});
