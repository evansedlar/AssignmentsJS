
const newsLayout = document.getElementById('newsLayout')
const sourceSelect = document.getElementById('sourceSelect')
const dropDown = document.getElementById('sourceSelect')

const articles = news.articles



//filter the news list with the drop down menu
function filterSources() {
    if(this.value == 'All Sources') {
        return generateInfo(articles)
    }
    const filteredArticles = articles.filter((article) => { 
        return article.source.name === this.value
    })
    generateInfo(filteredArticles)
}



//Dropdown
const actualSources = sources.sources
const sourceNames = actualSources.map((source) => {
    return `
    <option>${source.name}</option>`
})
dropDown.innerHTML += sourceNames



function generateInfo(filteredArticles) {
    newsLayout.innerHTML =""

    const information = filteredArticles.map((article) => { 
        return `
        <h1>${article.title}</h1>
        <div>${article.author}</div>
        <img src="${article.urlToImage}" width = "300px" />
        <div>${article.description}</div>
        <div>${article.url}</div>
        <div>${article.publishedAt}</div>
        `
    })
    newsLayout.innerHTML += information.join(" ")
}

generateInfo(articles)

dropDown.addEventListener('change', filterSources)


