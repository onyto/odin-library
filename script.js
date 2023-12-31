const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return (`${this.title} by ${this.author}, ${this.pages} page(s), read: ${this.read}`)
  }
  this.changeRead = () => {
    if (this.read === "yes") {
      this.read = "no"
    } else if (this.read === "no") {
      this.read = "yes"
    }
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

// Display the book that was last added to the array, on the webpage
function displayBook() {
  let book = myLibrary[myLibrary.length - 1]

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

  const readStatus = document.createElement("div")
  readStatus.setAttribute("class", "readStatus")
  newCard.appendChild(readStatus)

  const readPara = document.createElement("p");
  readPara.textContent = "Read: "
  readStatus.appendChild(readPara)

  const readCheckbox = document.createElement("input")
  readCheckbox.setAttribute("class", "readCheckbox")
  readCheckbox.setAttribute("type", "checkbox")
  if (book.read === "yes") readCheckbox.setAttribute("checked", "")
  readStatus.appendChild(readCheckbox)

  readCheckbox.addEventListener("click", () => {
    book.changeRead()
  })

  const removeBtn = document.createElement("button")
  removeBtn.setAttribute("class", "removeBtn")
  removeBtn.textContent = "Remove"
  newCard.appendChild(removeBtn)

  removeBtn.addEventListener("click", () => {
    container.removeChild(newCard)
  })
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
  // document.querySelector("form").reset()
  displayBook()
})
