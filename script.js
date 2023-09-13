const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return (`${title} by ${author}, ${pages} pages, read: ${read}`)
  }
}

function addBook() {
  const title = document.getElementById("title")
  const author = document.getElementById("author")
  const pages = document.getElementById("pages")
  const readYes = document.getElementById("read-yes")
  const readNo = document.getElementById("read-no")

  let read
  if (readYes.checked) {
    read = readYes.value
  } else if (readNo.checked) {
    read = readNo.value
  } else {
    read = ""
  }

  let book = new Book(title.value, author.value, pages.value, read)

  myLibrary.push(book)
}

function displayBooks() {
  const container = document.querySelector(".container")

  for (let book of myLibrary) {
    const newCard = document.createElement("div")
    newCard.setAttribute("class", "card")
    container.appendChild(newCard)

    function createPara(text) {
      const para = document.createElement("p");
      para.textContent = text
      newCard.appendChild(para)
    }
    createPara(`Title: ${book.title}`)
    createPara(`Author: ${book.author}`)
    createPara(`Pages: ${book.pages}`)
    createPara(`Read: ${book.read}`)
  }
}

function displayBook() {
  let book = myLibrary[myLibrary.length - 1]
  console.log(book)

  const container = document.querySelector(".container")

  const newCard = document.createElement("div")
  newCard.setAttribute("class", "card")
  container.appendChild(newCard)

  function createPara(text) {
    const para = document.createElement("p");
    para.textContent = text
    newCard.appendChild(para)
  }
  createPara(`Title: ${book.title}`)
  createPara(`Author: ${book.author}`)
  createPara(`Pages: ${book.pages}`)
  createPara(`Read: ${book.read}`)
}

const showDialogBtn = document.getElementById("showDialog")
const newBookDialog = document.getElementById("newBookDialog")
showDialogBtn.addEventListener("click", () => {
  newBookDialog.showModal();
})

const cancelBtn = document.getElementById("cancelBtn")
cancelBtn.addEventListener("click", () => {
  newBookDialog.close()
})

const confirmBtn = document.getElementById("confirmBtn")
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault()
  addBook()
  newBookDialog.close()
  document.querySelector("form").reset()
  displayBook()
})
