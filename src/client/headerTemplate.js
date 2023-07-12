const header = document.createElement("header");

header.innerHTML = `
  <h1> Golden Book Trove</h1>
    <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="search.html">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="addABook.html">Add a book</a>
          </li>
        </ul>
        <div class="navbar-toggle">
    <span class="toggle-icon" id="navbarToggle"></span>
  </div>
      </nav>
`;

document.querySelector("body > div.header").appendChild(header);
