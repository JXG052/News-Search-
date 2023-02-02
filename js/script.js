const apiKey = "&api-key=MQUC3tIqWzVkaJjAjzheQwxZ7ddAx9B0";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";



$('#news-search').on("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
    
    const searchTerm = $('#search-term').val();
    const numArticles = $('#num-records').val();
    $.ajax({
        url: queryURL+searchTerm+apiKey,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        const results = response.response.docs;
        // console.log(results[0]);
        results.forEach(element => {
            console.log(element);
            const display = $('#display');
            const articleDiv = $('<div>');
            const artTitle = $('<h1>').text(element.headline.main);
            articleDiv.append(artTitle);
            display.append(articleDiv);
        });
        
      })
    
})