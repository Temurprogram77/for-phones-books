let booksRow = document.querySelector(".books");
let filters = document.querySelector(".filters");
let library_modal__list = document.querySelector(".library-modal__list");

// let search = filters.search;
// let sort = filters.filter;
// let language_filter = filters.language_filter;
// let country_filter = filters.country_filter;
// let from_year = filters.from_year;
// let to_year = filters.to_year;

// Modal ul, p, btn


// Card create element

function render(book) {
  let local = JSON.parse(localStorage.getItem("data")) || [];
  booksRow.innerHTML = null;

  for (let i = 0; i < book.length; i++) {
    let books_item = document.createElement("div");
    books_item.setAttribute("class", "col-md-6 col-lg-4 mb-3");
    books_item.innerHTML = `
        
         <div class="book">
          <img class="book__poster" src="${
            book[i].imageLink
          }" alt="img">
          <div class="card-body">
            <h3 class="book__title">${
              book[i].title
            }</h3>
            <h4 class="book__author">${
              book[i].author
            }</h4>

            <ul class="book__info-list">
              <li class="book__info-item">${
                book[i].year
              }</li>
              <li class="book__info-item">${
                book[i].language
              }</li>
              <li class="book__info-item">${
                book[i].country
              }</li>
              <li class="book__info-item">${
                book[i].pages
              }</li>
            </ul>

            <div class="book__bottom">
              <a class="book__more-link" target="_blank"
                href="#">
                <img class="me-1" src="./img/icon-info.svg" alt="">
                <span>More info</span>
              </a>

              <button onclick="(addLocalStorage('${
                book[i].uniqueId
              }'))" class="book__add-library btn btn-primary d-inline-flex align-items-center" type="button"
                data-unique-id="Things_Fall_Apart">
                <img class="me-1" style="pointer-events: none;" src="./img/icon-bookmark-add.svg" width="24" height="24"
                  alt="" aria-hidden="true">
                <span style="pointer-events: none;">${
                  local.includes(book[i].uniqueId)
                    ? "Remove from library"
                    : "Add to library"
                }</span>
              </button>
            </div>
          </div>
        </div>

        `;

    booksRow.append(books_item);
  }
}

render(booksData);
localRender();

