// цитаты

let quotes = [];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// загрузка
function loadQuotes() {
  const saved = localStorage.getItem("quotes");
  if (saved) {
    quotes = JSON.parse(saved);
  }
}

function addQuote() {
  // получит все жоементы для работы
  const text = document.getElementById("quoteText");
  const author = document.getElementById("quoteAuthor");

  const textInput = text.value;
  const authorInput = text.value;

  console.log(textInput);
  console.log(authorInput);

  // сохранения
  quotes.push({ textInput, authorInput });
  saveQuotes(quotes);
  console.log(quotes.length);
}

function renderQuotes() {
  // получить элементы
  let list = document.getElementById("quotesList");
  let html = "";
  quotes.forEach((quotes) => {
    html += `
    <div class = ""> ${quotes.textInput}</div>
    <div class =""> ${quotes.authorInput}</div>
    <button class="" data-index="${index}">Удалить</button>
    `;
  });
  list.innerHTML = html;

  document.querySelectorAll("delete-btn").addEventListener(btn => {btn.addEventListener('click', addQuote)});


}

document.getElementById("addBtn").addEventListener("click", addQuote);

loadQuotes();
