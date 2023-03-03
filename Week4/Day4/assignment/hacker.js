const displayNews = document.getElementById("displayNews")


async function getID() {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    const idArray = await response.json()
    idArray.map((id) => fetchStories(id))
}


async function fetchStories (storyID) {
    
    const id = storyID
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const stories = await response.json()

    const date = new Date(stories.time * 1000)
    const story = `
        <h1>${stories.title}</h1>
        <a href="${stories.url}">${stories.url}</a>
        <li>By: ${stories.by}</li>
        <li>Published: ${date.toLocaleDateString("en-US")}</li>
    `
    displayNews.innerHTML += story 

}

getID()







