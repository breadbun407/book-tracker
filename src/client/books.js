/* temp books array */

const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    datePublished: '2022-01-01',
    summary: 'Summary of Book 1',
    rating: 4.5,
    lastRead: '2022-07-01',
    review: 'Review of Book 1'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    datePublished: '2022-02-01',
    summary: 'Summary of Book 2',
    rating: 3.8,
    lastRead: '2022-06-15',
    review: 'Review of Book 2'
  },
  // Add more book objects as needed
];


const booksPerPage = 5; // Number of books to display per page
let currentPage = 1; // Current page

// Function to render books for the current page
function renderBooks() {
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  const bookListContainer = document.getElementById('bookList');
  bookListContainer.innerHTML = '';

  if (paginatedBooks.length === 0) {
    bookListContainer.innerHTML = 'No books found.';
  } else {
    paginatedBooks.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>${book.summary}</p>
        <hr>
      `;
      bookListContainer.appendChild(bookElement);
    });
  }
}

// Function to render pagination buttons
function renderPagination() {
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('page-button');

    if (i === currentPage) {
      pageButton.classList.add('active');
    }

    pageButton.addEventListener('click', function() {
      currentPage = i;
      renderBooks();
      renderPagination();
    });

    paginationContainer.appendChild(pageButton);
  }
}

// Initial rendering
renderBooks();
renderPagination();
