
const newsLayout = document.getElementById('newsLayout')

const articles = news.articles

const information = articles.map((article) => { 
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
