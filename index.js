
let newsAccordion = document.getElementById('newsAccordion');

let apiKey = '16ffac286c7c4286850179c2075e5c0f';
let country = 'in';

// Instantiate an xhr Object
const xhr = new XMLHttpRequest();

// Open the object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=16ffac286c7c4286850179c2075e5c0f`, true );


xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);


        let newsHtml = "";

        articles.forEach(function (element, index) {


            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <strong>News ${index + 1}: </strong>\u00A0${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">
                                    ${element["description"]} 
                                    <a href="${element["url"]}" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>`

            newsHtml += news;



        });

        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error("Some error occured");
    }

}

xhr.send();



