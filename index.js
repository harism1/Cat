let catButton = document.getElementById('cat-btn')



catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-div')

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<img src="${cat.url}" alt="kitty" width=300px>`
        });
    })
    fetch();
})