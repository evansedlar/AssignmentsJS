const postsUL = document.getElementById('postsUL')

for (let i = 0; i < posts.length; i++) {
    const li = document.createElement('li')

    postsUL.appendChild(li)
    
    const titleDiv = document.createElement('div')
    titleDiv.innerHTML = posts[i].title
    li.appendChild(titleDiv)

    const descBody = document.createElement('div')
    descBody.innerHTML = posts[i].body
    li.appendChild(descBody)
}