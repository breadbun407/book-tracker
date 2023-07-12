const bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get input values from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const datePublished = document.getElementById('datePublished').value;
  const summary = document.getElementById('summary').value;
  const rating = parseFloat(document.getElementById('rating').value);
  const lastRead = document.getElementById('lastRead').value;
  const review = document.getElementById('review').value;

  // Create a new book object
  const newBook = {
    title: title,
    author: author,
    datePublished: datePublished,
    summary: summary,
    rating: rating,
    lastRead: lastRead,
    review: review
  };

  // Add the new book to the books array
  books.push(newBook);

  // Save the updated books array to localStorage
  localStorage.setItem('books', JSON.stringify(books));

  // Optionally, clear the form fields after adding a book
  bookForm.reset();
});
