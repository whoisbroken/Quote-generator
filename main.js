
document.addEventListener("DOMContentLoaded", () => {
//vars
const URL = "https://stormy-waters-81463.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
const ICON = `<svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.7523 0V5.32583H16.4508C13.9185 5.32583 11.8351 5.93546 10.2005 7.15471C8.5793 8.36055 7.58112 10.042 7.20597 12.1992C8.73338 10.6986 10.6627 9.94826 12.994 9.94826C15.5263 9.94826 17.5428 10.8727 19.0434 12.7217C20.544 14.5707 21.2943 16.9958 21.2943 19.997C21.2943 21.8594 20.8522 23.5677 19.9679 25.1219C19.097 26.6761 17.871 27.8953 16.29 28.7796C14.7224 29.6505 12.9806 30.0859 11.0647 30.0859C8.98795 30.0859 7.13228 29.617 5.49769 28.6791C3.86309 27.7278 2.59025 26.3746 1.67916 24.6194C0.768077 22.8642 0.299136 20.8411 0.272339 18.55V15.8368C0.272339 12.8222 0.915458 10.1157 2.2017 7.71743C3.50133 5.30574 5.3503 3.41657 7.7486 2.04994C10.1469 0.683315 12.8065 0 15.7273 0H16.7523Z"
                  fill="#2E2E2E" />
              </svg>`;

const main = document.querySelector('.main'),
  quoteTitle = document.querySelector('.quote__title'),
  quoteAuthor = document.querySelector('.quote__author'),
  twitterBtn = document.querySelector('.twitter-btn'),
  newQuoteBtn = document.querySelector('.newQuote-btn');

const loading = document.createElement("div");
loading.className = "loading";

const getData = () => {
  main.append(loading)

  fetch(URL).then(res => res.json()).then((result) => {
      loading.remove();
      quoteTitle.innerHTML = `${ICON}${ICON} ${result.quoteText}`;
      quoteAuthor.innerText = result.quoteAuthor.length ? result.quoteAuthor : "Unknown author";
    })
    .catch(err => {
                console.log("Error" + err);
                setTimeout(getData, 100);
            })
}

  newQuoteBtn.addEventListener('click', getData);

  getData();

  twitterBtn.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text="${quoteTitle.innerText}" ${quoteAuthor.innerText}`)
  })
});