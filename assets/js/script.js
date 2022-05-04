var apiKey = '92c502e459c9c620a303073cdca1176311116a12';
var apiURL = 'https://www.giantbomb.com/api/search/?api_key=';

$('#submit-btn').click(function (event) {
    event.preventDefault();

    var gameTitle = event.target.parentElement[0].value;

    // apiCall(gameTitle);
});