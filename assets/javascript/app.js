var series = ["Friends", "That 70's Show", "How I Met Your Mother", "Last Man on Earth"];

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

    // if ($("#inputSeries").lenght > 0){
    var movie = $("#inputSeries").val().trim();

    series.push(movie);

    renderButtons();
// }
});

$(document).on("click", ".series", alertMovieName);

renderButtons();