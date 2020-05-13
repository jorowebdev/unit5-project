
const searchBar = document.querySelector('.searchbar--input')

searchBar.addEventListener('keyup', () => {
  const searchBarValue = searchBar.value.toLowerCase();
});

// lightbox options
lightbox.option({
  'disableScrolling': true,
  'wrapAround': true
})
