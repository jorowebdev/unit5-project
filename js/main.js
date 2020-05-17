const searchBarCancelIcon = document.querySelector('.searchbar--cancel-icon');
const searchBar = document.querySelector('.searchbar--input');
const galleryThumbsContainer = document.querySelectorAll('.gallery--thumbs-container');
const galleryThumbs = document.querySelectorAll('.gallery--thumbs')
const galleryImages = document.querySelectorAll('.gallery--images')

// Listens for text typed into the searchBar input
searchBar.addEventListener('keyup', () => {
  // Checks if text has been typed in searchbar
  if (searchBar.value) {
    // If true, sets clear icon to visible
    searchBarCancelIcon.style.visibility = "visible";
  } else if (!searchBar.value) {
    // If false, sets clear icon to hidden
    searchBarCancelIcon.style.visibility = "hidden";
  }
});

// Listens for click on icon
searchBarCancelIcon.addEventListener('click', () => {
  // Clears searchbar text
  searchBar.value = ' ';
  // Hides cancel icon
  searchBarCancelIcon.style.visibility = 'hidden';
  // Resets thumbnails and images to be visible
  for (let i = 0; i < galleryThumbs.length; i += 1) {
    galleryThumbsContainer[i].style.display = '';
    galleryThumbs[i].setAttribute('data-lightbox', 'gallery--landscape-set');
  }
})

// Listens for text typed into the searchBar input
searchBar.addEventListener('keyup', () => {
  // Saves input
  const searchBarValue = searchBar.value.toLowerCase();
  // Loops thru thumbnails
  for (let i = 0; i < galleryThumbs.length; i += 1) {
    const galleryCaption = galleryThumbs[i].getAttribute('data-title');
    // Looks to see if caption contains the string saved to searchBarValue
    if (galleryCaption.toLowerCase().includes(searchBarValue)) {
      // If true, the element thumbnail is displayed and the linked image is visible in the lightbox
      galleryThumbsContainer[i].style.display = '';
      galleryThumbs[i].setAttribute('data-lightbox', 'gallery--landscape-set');
    } else {
      // Else, look to see if the image alt attr contains the string saved to searchBarValue
      if (galleryImages[i].getAttribute('alt').toLowerCase().includes(searchBarValue)) {
        // If true, the element thumbnail is displayed and the linked image is visible in the lightbox
        galleryThumbsContainer[i].style.display = '';
        galleryThumbs[i].setAttribute('data-lightbox', 'gallery--landscape-set');
      } else {
        // Else, hide the thumbnail and hide the image from displaying in the lightbox
        galleryThumbsContainer[i].style.display = 'none';
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
