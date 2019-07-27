var series = ["Friends", "That 70's Show", "How I Met Your Mother", "Last Man on Earth"];

function displayGiphyinfo() {
    var gif = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uFwwzNchSZ6TyeldPwQzB79HgmZKgRhU&q=" + gif + "&limit=10&offset=0&lang=en"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#gifDiv").empty()
        for (i = 0; i < response.data.length; i++){
        

        gifImage = $("<img>")

        gifImage.attr('src',response.data[i].images.fixed_width_still.url);
        gifImage.attr('data-still',response.data[i].images.fixed_width_still.url);
        gifImage.attr('data-animate',response.data[i].images.fixed_width.url);
        gifImage.attr("data-state", "still");
        gifImage.attr("class", "gifs")
        gifImage.append("<p>Rating : "+response.data[i].rating+"</p>")
        
        $("#gifDiv").append(gifImage);
        $("#gifDiv").append("<p>Rating : "+response.data[i].rating+"</p>");
        }
        $(".gifs").on("click", function() {
            debugger;
            
            var state = $(this).attr("data-state");
            
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
          });
        

        
        


    });

}



function alertMovieName() {

    var seriesName = $(this).attr("data-name");

    alert(seriesName)
}

function renderButtons() {

    $("#buttonsDiv").empty();


    for (var i = 0; i < series.length; i++) {

        var a = $("<button>");

        a.addClass("series");

        a.attr("data-name", series[i]);

        a.text(series[i]);

        $("#buttonsDiv").append(a);
    }
}

$("#addSeries").on("click", function (event) {
    event.preventDefault();

    var movie = $("#inputSeries").val().trim();

    series.push(movie);

    renderButtons();
    $("#inputSeries").val("");

    // }
});

$(document).on("click", ".series", displayGiphyinfo);

renderButtons();



// https://api.giphy.com/v1/gifs/search?api_key=uFwwzNchSZ6TyeldPwQzB79HgmZKgRhU&q=bird&limit=25&offset=0&rating=G&lang=en
// API key : uFwwzNchSZ6TyeldPwQzB79HgmZKgRhU