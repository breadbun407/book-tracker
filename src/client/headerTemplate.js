const header = document.createElement("header");

header.innerHTML = `
  <h1>Golden Book Trove</h1>

  <div class="navbar-toggle">
  <div class="toggle-icon" id="navbarToggle">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</div>
</div>
  <nav class="navbar">
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="books.html">Books</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="search.html">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="addABook.html">Add a book</a>
      </li>
    </ul>
  </nav>
`;

document.querySelector(".header").appendChild(header);

const toggleIcon = document.getElementById("navbarToggle");
const navbarNav = document.querySelector(".navbar-nav");

window.addEventListener("DOMContentLoaded", function () {
  toggleIcon.addEventListener("click", function () {
    toggleIcon.classList.toggle("active");
    navbarNav.classList.toggle("active");
  });
});
