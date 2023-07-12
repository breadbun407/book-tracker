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