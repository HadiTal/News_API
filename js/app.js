//class
const ui = new UI();
const apiNews = new News();

//Listners
listners();

function listners() {
    document.getElementById("submitBtn").addEventListener("click", search);
}

//function

function search(e) {
    e.preventDefault();

    const newsName = document.getElementById("news-name").value;
    const country = document.getElementById("country").value;
    const category = document.getElementById("category").value;

    //validation

    if (newsName !== "" || country !== "" || category !== "") {
        apiNews
            .queryApi(newsName, country, category)

        .then((news) => {
            const newsArray = news.news.articles;

            if (newsArray.length > 0) {
                //show news
                ui.showNews(newsArray);
            } else {
                ui.printMessage(
                    "there is no news with Your Filtering",
                    "alert alert-danger mt-4"
                );
            }
        });
    } else {
        ui.printMessage(
            "Print enter atleast one paramater",
            "alert alert-danger mt-4"
        );
    }
}