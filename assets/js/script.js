var apiKey = '92c502e459c9c620a303073cdca1176311116a12';
var apiURL = 'https://www.giantbomb.com/api/search/?api_key=';
var playerEl = document.querySelector('#player');
var teamEl = document.querySelector('#team');
var heightEl = document.querySelector('#height');
var weightEl = document.querySelector('#weight');
var birthdayEl = document.querySelector('#birthdate');
var youtubeEl = document.querySelector('#youtube-vids');
// var jerseryNumEl = document.querySelector('#jersey-number');

$('#submit-btn').click(function (event) {
    event.preventDefault();

    var playerName = event.target.parentElement[0].value;
    playerName = encodeURIComponent(playerName.trim());

    apiCall(playerName);
});

function apiCall(playerName) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='" + playerName + "'&sport_code='mlb'&active_sw='Y'",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
            "X-RapidAPI-Key": "7d3981e8bemsh702d01ad1635c18p10dd1fjsn83e5763a1078"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        var player = response.search_player_all.queryResults.row.name_display_first_last;
        var teamName = response.search_player_all.queryResults.row.team_full;
        var height = response.search_player_all.queryResults.row.height_feet + "' " + response.search_player_all.queryResults.row.height_inches;
        var weight = response.search_player_all.queryResults.row.weight;
        var birthday = response.search_player_all.queryResults.row.birth_date;
        // var jerseyNum = response.

        playerEl.textContent = player;
        teamEl.textContent = teamName;
        heightEl.textContent = height;
        weightEl.textContent = weight;
        birthdayEl.textContent = birthday;

        teamName = encodeURIComponent(teamName.trim());
        youtubeSearch(teamName);
    });
}

function youtubeSearch(teamName) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://youtube-search6.p.rapidapi.com/search/?query=" + teamName + "'s&number=20&country=us&lang=en",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "youtube-search6.p.rapidapi.com",
            "X-RapidAPI-Key": "7d3981e8bemsh702d01ad1635c18p10dd1fjsn83e5763a1078"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        for (var i = 0; i < response.videos.length; i++) {
            var liEl = document.createElement('li');
            var thumbnailEl = document.createElement('img');
            var titleEl = document.createElement('a');
            var descEl = document.createElement('p');
            var lengthEl = document.createElement('p');

            var src = response.videos[i].thumbnails[0].url;
            thumbnailEl.setAttribute('src', src);

            var title = response.videos[i].title;
            titleEl.textContent = title;
            titleEl.classList.add('uk-button', 'uk-button-default');
            var url = response.videos[i].video_id;
            titleEl.setAttribute('href', url);


            var desc = response.videos[i].description;
            descEl.textContent = desc;
            thumbnailEl.setAttribute('alt', desc)

            var leng = response.videos[i].video_length;
            lengthEl.textContent = leng;

            liEl.appendChild(thumbnailEl);
            liEl.appendChild(titleEl);
            liEl.appendChild(descEl);
            liEl.appendChild(lengthEl);

            youtubeEl.appendChild(liEl);
        }
    });
}