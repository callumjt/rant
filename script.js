var rants;

async function start() {
    rants = await (await fetch('./rants.json')).json()

    for (const rant of rants) {
        const div = document.createElement('div')
        div.classList = "rant"
        document.body.appendChild(div)

        const date = document.createElement('h6')
        date.innerText = rant.date
        div.appendChild(date)

        const title = document.createElement('h1')
        title.innerText = rant.title
        div.appendChild(title)

        const text = document.createElement('p')
        text.innerText = rant.text
        div.appendChild(text)

    }
}

await start()
console.log(rants)