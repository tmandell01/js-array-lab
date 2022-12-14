console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards

// 2. maybe we only show those that match the search query?

// 3. we update the result count and related summary info as we filter

const cont = document.getElementById("countRes");

function cardDisplay(item) {

    const card_temp = ` <div class="col">
                        <div class="card" style="width: 18rem;">
                        <h3 class="card-header">${item.title}</h3>
                        <div class="card-body">
                        <h5 class="card-title">${item.prefix}${item.number}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.prefix}</h6>
                        <p class="card-text">${item.desc}</p>
                        <a href="${item.url}" class="card-link">Class link</a>
                        <a href="#" class="card-link">Another link</a>
                        </div>
                        <div class="card-footer">${item.prereqs}</div>
                        </div>
                        </div>`

    // document.write(card_temp);

    const resultsContainer = document.getElementById("#filtered-results");
    
    resultsContainer.innerHTML += card_temp

}

data.items.forEach(element => cardDisplay(element));

const searchField = document.querySelector('input[name="query-text"]');

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", (ev) => {
    console.log(ev);
    ev.preventDefault();
    const queryText = searchField.value;

   var newArray = data.items.filter(x => x.title.includes(queryText));

   const clear = document.getElementById("#filtered-results");
   clear.replaceChildren();

   newArray.forEach(element => cardDisplay(element));

   cont.replaceChildren();
   cont.innerHTML += newArray.length.toString();
})
