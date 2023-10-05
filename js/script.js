const PAGE_SIZE = 10
const data = users

function loadPaginator() {

    console.log("Loading paginator...")
    const totalPages = Math.ceil(data.length / 10)

    // Updating total contacts
    const pageHeader = document.getElementById("pageHeader")
    const h3 = pageHeader.children[1]
    h3.innerHTML = "Total: " + data.length

    // Setting paginator based on total elements
    const paginator = document.getElementById("paginator")
    for (let i = 0; i < totalPages; ++i) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.setAttribute("href", "#")
        a.addEventListener("click", () => {
            changePage(i)
        })
        const text = document.createTextNode((i + 1))

        a.appendChild(text)
        li.appendChild(a)
        paginator.appendChild(li)
    }

}

function loadUsers(page) {
    const ul = document.getElementById("contactList")
    ul.innerHTML = '' //Remove elements

    for (let i = 0; i < page.length; ++i) {

        const user = page[i]

        // General info
        const li = document.createElement("li")
        li.classList.add("contact-item")
        li.classList.add("cf")

        const div = document.createElement("div")
        div.classList.add("contact-details")

        const img = document.createElement("img")
        img.classList.add("avatar")
        img.setAttribute("src", user.image)

        const h3 = document.createElement("h3")
        h3.innerHTML = user.name

        const span = document.createElement("span")
        span.classList.add("email")
        span.innerHTML = user.email

        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(span)
        li.appendChild(div)
        
        //Joined info
        const joinedDetails = document.createElement("span")
        joinedDetails.classList.add("joined-details")

        const joinedDetailsDate = document.createElement("span")
        joinedDetailsDate.classList.add("date")
        joinedDetailsDate.innerHTML = "Joined "+user.joined

        joinedDetails.appendChild(joinedDetailsDate)
        li.appendChild(joinedDetails)

        ul.appendChild(li)
    }
}

function changePage(pageNumber) {
    const index = pageNumber * PAGE_SIZE;
    const copy = [...users] //To avoid mess up the reference
    const page = copy.slice(index, index + PAGE_SIZE)
    loadUsers(page)
    return page
}

document.body.onload = function () {
    changePage(0)
    loadPaginator();
}

