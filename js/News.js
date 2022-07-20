class News {
    constructor() {
        this.apiKey = "3b89a07e07684c44b6116bdb0df50be1";
    }

    //send URL The Api
    async queryApi(newsName, country, category) {
        //Build URL

        let url = "https://newsapi.org/v2/";

        //Check url Value
        if (country === "" && category === "") {
            url += "everything?";
        } else {
            url += "top-headlines?";
        }

        //if newsName exist
        if (newsName !== "") {
            url += `q=${newsName}&`;
        }

        //if country exsist
        if (country !== '') {

            url += `country=${country}&`

        }

        //if catagory exsist
        if (category !== '') {
            url += `category=${category}&`
        }

        //complate url
        url += `apiKey=${this.apiKey}`;


        const newsResponse = await fetch(url);

        const news = await newsResponse.json();


        return {
            news
        }

    }
}