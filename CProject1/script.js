/*eslint-env es6*/
/*eslint-env browser*/
/* eslint no-console: 0*/

document.getElementById("fighterSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    var value = document.getElementById("fighterInput").value;
    let x = 0;
    let src = "";
    if (value === "TIE-Advanced x1") {
        x = 13;
        src = '../images/TIEAdvanced.jpg';
    }
    else if (value === "Imperial Shuttle") {
        x = 22;
        src = '../images/shuttle.png';
    }
    else if (value === "Millennium Falcon") {
        x = 10;
        src = '../images/falcon.jpg';
    }
    else if (value === "Slave 1") {
        x = 21;
        src = '../images/slave1.png';
    }
    else if (value === "X-Wing") {
        x = 12;
        src = '../images/xWing2.jpg';
    }
    else if (value === "Y-Wing") {
        x = 11;
        src = '../images/yWing.jpeg';
    }
    else if (value === "A-Wing") {
        x = 28;
        src = '../images/aWing.png';
    }
    else if (value === "B-Wing") {
        x = 29;
        src = '../images/bWing.jpg';
    }
    else {
        let error = "<p id='errorMsg'>Make sure the input matches a starfighter from the list on the left. </p>";
        document.getElementById("error").innerHTML = error;
        return;
    }
    console.log(value);
    var url = "http://swapi.dev/api/starships/" + x + "/";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            document.getElementById("error").innerHTML = "";
            let results = "";
            if (x != 21) {
                results += '<h3>The ' + json.name + "</h3> <hr id='hr2'>";
            } else {
                results += '<h3>' + json.name + "</h3> <hr id='hr2'>";
            }
            results += '<h4 id="manufacturer">' + json.manufacturer + '</h4>';
            results += '<div class="container"><div class="row"><div class="col">';
            results += '<img src="' + src + '" height="250px"></div>';
            results += '<div class="col">';
            if (x != 21) {
                results += '<p>The ' + json.name;
            } else {
                results += '<p>' + json.name;
            }
            results += " is a " + json.starship_class.toLowerCase() + ".  It has a crew of " + json.crew;
            if (json.crew > 1) {
                results += " people";
            }
            if (json.passengers > 0) {
                results += ' and is able to carry ' + json.passengers;
                if (json.passengers > 1) {
                    results += ' passengers.';
                } else {
                    results += ' passenger.';
                }
            }
            else {
                results += '.';
            }
            results += '  It is able to carry ' + json.cargo_capacity + 'kg of cargo and can carry enough food for ' + json.consumables + ".";
            results += '  It could reach a top speed of ' + json.max_atmosphering_speed;
            if (x == 11) {
                results += '/h in the atmosphere.  ';
            } else {
                results += 'km/h in the atmosphere.  ';
            }
            if (x != 21) {
                results += 'The ' + json.name;
            } else {
                results += json.name;
            }
            results += ' cost ' + json.cost_in_credits + ' credits to produce, and was ' + json.length + ' meters long.'
            results += "</p></div></div></div>";
            document.getElementById("starship").innerHTML = results;
        });
});
