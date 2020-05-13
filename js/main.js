
const searchBar = document.querySelector('.searchbar--input');
const galleryThumbs = document.querySelectorAll('.gallery--thumbs');

searchBar.addEventListener('keyup', () => {
  const searchBarValue = searchBar.value.toLowerCase();
  console.log(searchBarValue);
});

for (let i = 0; i < galleryThumbs.length; i += 1) {
  const galleryCaption = galleryThumbs[i].getAttribute('data-title');
  console.log(galleryCaption);
}

// lightbox options
lightbox.option({
  'disableScrolling': true,
  'wrapAround': true
});
