const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    // More books...
  ];

  const searchInput = document.getElementById('searchInput');
  const booksList = document.getElementById('booksList');
  const noResults = document.getElementById('noResults');

  // Event listener for search input
  searchInput.addEventListener('input', updateSearchResults);

  function updateSearchResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
  }

  function displayBooks(booksToDisplay) {
    // Clear previous results
    booksList.innerHTML = '';

    if (booksToDisplay.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';

      // Display matching books
      booksToDisplay.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Title:</strong> ${highlightMatches(book.title)}<br><strong>Author:</strong> ${highlightMatches(book.author)}`;
        booksList.appendChild(li);
      });
    }
  }

  function highlightMatches(text) {
    const searchTerm = searchInput.value.toLowerCase();
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

  // Initial display of all books
function display(){
    displayBooks(books)
    
}