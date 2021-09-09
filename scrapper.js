var marvelFacts = []

var marvel = document.querySelectorAll(".single-title-desc-wrap");

marvel.forEach(function (item) {
    var obj = {
        "title" : item.firstElementChild.innerText,
        "plot" : item.querySelector('p').innerText
    }

    marvelFacts.push(obj);
});

copy(marvelFacts);


url = "https://facts.net/lifestyle/entertainment/marvel-facts/";