const apiKey = "&api-key=MQUC3tIqWzVkaJjAjzheQwxZ7ddAx9B0";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";



$('#news-search').on("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
    
    const searchTerm = $('#search-term').val();

    $.ajax({
        url: queryURL+searchTerm+apiKey,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        
      })
    
})