let book = []

function loadBook(title, author, yearPublished, readStatus){
    book.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
        readStatus: readStatus,

        getSummary: function(){
            return this.title + " written by " + this.author + " was published in the year " + this.yearPublished;
        },
        toggleReadStatus: function(){
        }
    })
}

function presentBooks(){
    loadBook("Harry Potter and the Philosopher's Stone", "J K Rowling", 1997, true)
    loadBook("Harry Potter and the Chamber of Secrets", "J K Rowling", 1998, true)
    loadBook("Harry Potter and the Prisioner of Azkaban", "J K Rowling", 1999, true)
    loadBook("Harry Potter and the Goblet of Fire", "J K Rowling", 2000, true)
    loadBook("Harry Potter and the Order of the Phoenix", "J K Rowling", 2003, true)
    loadBook("Harry Potter and the Half Blood Prince", "J K Rowling", 2005, true)
    loadBook("Harry Potter and the Deathly Hallows", "J K Rowling", 2007, true)
    loadBook("Percy Jackson: The Lightning Thief", "Rick Riordan", 2005, true)
    loadBook("Percy Jackson: The Sea of Monsters", "Rick Riordan", 2006, true)
    loadBook("Percy Jackson: The Titan's Curse", "Rick Riordan", 2007, true)
    loadBook("Percy Jackson: The Battle of the Labryinth", "Rick Riordan", 2008, false)
    loadBook("Percy Jackson: The Last Olympian", "Rick Riordan", 2009, false)
    loadBook("Sherlock Holmes", "Arthur Conan Doyle", 1892, false)
}

presentBooks()

function getInput(){
    let input = []
    title = document.getElementById("title")
    author = document.getElementById("author")
    year = document.getElementById("year")
    read = document.getElementById("status")
    input.push(title.value)
    input.push(author.value)
    input.push(year.value)
    input.push(read.checked)
    title.value = ""
    author.value = ""
    year.value = ""
    read.checked = false
    console.log(title.value)
    return input
}

function getInputFront(){
    let input = []
    title = document.getElementById("title-f")
    author = document.getElementById("author-f")
    year = document.getElementById("year-f")
    read = document.getElementById("status-f")
    input.push(title.value)
    input.push(author.value)
    input.push(year.value)
    input.push(read.checked)
    title.value = ""
    author.value = ""
    year.value = ""
    read.checked = false
    console.log("Front return: " + input)
    return input
}

function getTitles(book){
    return book.title;
}

function addBook(){
    let input = getInput()
    loadBook(input[0], input[1], input[2], input[3])
    console.log(book)
}

function removeLastBook(){
    document.getElementById("remove-last-book-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
    book.pop();
}

function addBookToFront(){
    let input = getInputFront()
    book.unshift({
        title: input[0],
        author: input[1],
        yearPublished: input[2],
        readStatus: input[3],
        getSummary: function(){
            return this.title + " written by " + this.author + " was published in the year " + this.yearPublished;
        },
        toggleReadStatus: function(){
        }
    })
    console.log(input)
}

function removeFirstBook(){
    document.getElementById("remove-first-book-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
    book.shift()
}

function getAllTitles(){
    let titles = book.map(getTitles);
    for(i in titles){
        element = document.createElement("h3")
        console.log(titles[i])
        element.innerHTML = titles[i]
        element.id = "title-element"
        element.className = "title-element"
        div = document.getElementById("titles")
        div.appendChild(element)
    }
    console.log(titles)
    return titles
}

function getBooksByAuthor(){
    authorName = document.getElementById("author-get")
    author = authorName.value
    let books = book.filter(books => books.author == author)
    authorName.value = ""
    getBookByAuthorDisplayContainer(books)
    console.log(books)
}

function getTotalBooksPublishedBefore(){
    yearGet = document.getElementById("year-get")
    year = yearGet.value
    let books = book.filter(books => books.yearPublished < year)
    console.log(books.length)
    year.value = ""
    getTotalBooksPublishedBeforeDisplayContainer(books)
    console.log(books)
}

function removeBookByTitle(){
    titleGet = document.getElementById("title-get")
    let title = titleGet.value
    let titles = getAllTitles()
    let index = titles.findIndex(name => name == title)
    book.splice(index, 1)
    console.log(title)
    title.value = ""
    removeBookByTitleDisplayContainer(index)
}

function removeBookByTitleDisplayContainer(index){
    document.getElementById("remove-book-by-title-display-container").style = "display: flex"
    document.getElementById("remove-book-by-title-container").style = "display: none"
    console.log(document.getElementById("authors-display"))
}

function getBooksByReadStatus(){
    let statusGet = document.getElementById("status-get")
    statusCheck = statusGet.checked
    let books = book.filter(books => books.readStatus == statusCheck)
    console.log(books)
    getBookByReadStatusDisplayContainer(books)

    // yearGet = document.getElementById("year-get")
    // year = yearGet.value
    // let books = book.filter(books => books.yearPublished < year)
    // console.log(books.length)
    // year.value = ""
    // getTotalBooksPublishedBeforeDisplayContainer(books)
    // console.log(books)
}

function addBookContainer(){
    document.getElementById("add-book-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function mainContainer(container){
    container = String(container)
    document.getElementById(container).style = "display: none"
    document.getElementById("main-container").style = "display: flex"
}

function clear(clearId, buttonId, containerId){
    document.getElementById(clearId).remove()
    document.getElementById(buttonId).remove()
    let container = document.getElementById(containerId)
    div = document.createElement("div")
    div.className = clearId
    div.id =  clearId
    container.appendChild(div)
    let button = document.createElement("button")
    button.id = buttonId
    button.setAttribute("onclick", "mainContainer('" + containerId + "')")
    button.innerHTML = "Back to Main Page"
    container.appendChild(button)
}

function getAllTitlesContainer(){
    document.getElementById("get-all-titles-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
    clear("titles", "return-from-title", "get-all-titles-container")
    getAllTitles()
}

function addBookToFrontContainer(){
    document.getElementById("add-book-to-front-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function getBookByAuthorContainer(){
    document.getElementById("get-book-by-author-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function addAuthors(books){
    for(i in books){
        element = document.createElement("h3")
        console.log(books[i])
        element.innerHTML = books[i].getSummary()
        element.id = "author-element"
        element.className = "author-element"
        div = document.getElementById("authors-display")
        div.appendChild(element)
    }
}

function addYear(books){
    for(i in books){
        element = document.createElement("h3")
        console.log(books[i])
        element.innerHTML = books[i].getSummary()
        element.id = "year-element"
        element.className = "year-element"
        div = document.getElementById("year-display")
        div.appendChild(element)
    }

}

function getBookByAuthorDisplayContainer(books){
    document.getElementById("get-book-by-author-display-container").style = "display: flex"
    document.getElementById("get-book-by-author-container").style = "display: none"
    clear("authors-display", "return-from-authors", "get-book-by-author-display-container")
    addAuthors(books)
    console.log(document.getElementById("authors-display"))
}

function getTotalBooksPublishedBeforeDisplayContainer(books){
    document.getElementById("get-total-books-published-before-display-container").style = "display: flex"
    document.getElementById("get-total-books-published-before-container").style = "display: none"
    clear("year-display", "return-from-year", "get-total-books-published-before-display-container")
    addYear(books)
    console.log(document.getElementById("authors-display"))
}

function getTotalBooksPublishedBeforeContainer(){
    document.getElementById("get-total-books-published-before-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function removeBookByTitleContainer(){
    document.getElementById("remove-book-by-title-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function getBookByReadStatusContainer(){
    document.getElementById("get-book-by-read-status-container").style = "display: flex"
    document.getElementById("main-container").style = "display: none"
}

function addStatus(books){
    for(i in books){
        element = document.createElement("h3")
        console.log(books[i])
        element.innerHTML = books[i].getSummary()
        element.id = "status-element"
        element.className = "status-element"
        div = document.getElementById("status-display")
        div.appendChild(element)
    }
}

function getBookByReadStatusDisplayContainer(books){
    document.getElementById("get-book-by-read-status-display-container").style = "display: flex"
    document.getElementById("get-book-by-read-status-container").style = "display: none"
    clear("status-display", "return-from-status", "get-book-by-read-status-display-container")
    addStatus(books)
    console.log(document.getElementById("authors-display"))
}