const searchForm = document.getElementById('searchForm');
const searchResultsContainer = document.getElementById('searchResultsContainer');

searchForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get search query from input field
  const searchQuery = document.getElementById('searchInput').value;

  // Perform the search operation (example: filtering books array)
  const searchResults = books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Display the search results
  displaySearchResults(searchResults);

  // Optionally, reset the form after search
  searchForm.reset();
});

function displaySearchResults(results) {
  // Clear previous search results
  searchResultsContainer.innerHTML = '';

  if (results.length === 0) {
    // No results found
    searchResultsContainer.innerHTML = 'No results found.';
  } else {
    // Display each search result
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `
        <h3>${result.title}</h3>
        <p>Author: ${result.author}</p>
        <p>${result.summary}</p>
        <hr>
      `;
      searchResultsContainer.appendChild(resultElement);
    });
  }
}
