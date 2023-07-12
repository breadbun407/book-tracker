const books = [];
  
function saveLocal(){
    localStorage.setItem('books', JSON.stringify(books));
  }

function loadLocal(){
    // Retrieve books array from localStorage
const storedBooks = JSON.parse(localStorage.getItem('books'));

// Check if storedBooks is not null (localStorage exists)
    if (storedBooks !== null) {
  // Use the retrieved array of books
  console.log(storedBooks);
} else {
  // Handle case where there are no stored books
  console.log('No books found in localStorage');
}

  }