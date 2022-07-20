class UI {
    constructor() {
        this.result = document.querySelector("#result");
    }

    printMessage(message, classNameEl) {
        //Create Elment for show message
        const div = document.createElement("div");

        div.appendChild(document.createTextNode(message));

        div.className = classNameEl;

        //show ui
        document.getElementById("message").appendChild(div);

        //off  time showmessage

        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }

    //remove message
    removeMessage() {
        const alert = document.querySelector(".alert");

        if (alert) {
            alert.remove();
        }
    }

    //show news in HTML
    showNews(newsArray) {
        let htmlTemplate = "";

        newsArray.forEach((newsInfo) => {
            this.result.innerHTML += `

           <div class='col-md-4 mb-4'>

             <div class='card'>

             <img class="card-img-top" src="${
               newsInfo.urlToImage
             }" alt="Card image cap">

              <div class='card-body'>



                <h2 class='card-title text-center'>${newsInfo.title.split(
                  "-",
                  1
                )}</h2>

                <p class='card-text lead text-info'>

                News Information: 

                </p>

                <P>${newsInfo.description}</P>

                <span class='badge badge-primary'>Sourse: ${
                  newsInfo.source.name
                }</span>
                <span class='badge badge-danger'>Date & Time : ${
                  newsInfo.publishedAt
                }</span>
                <br/>
                <br/>
                <a href="${
                  newsInfo.url
                }" target='_blank' class='btn btn-warning btn-block'>Complate News</a>


              </div>

             </div>

           </div>
           `;
        });
    }
}