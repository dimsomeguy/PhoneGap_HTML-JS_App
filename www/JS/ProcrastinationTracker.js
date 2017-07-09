// use when testing phone gap as will not get fired in browser
document.addEventListener("deviceready", function () {
    setup();

});

// use when  in browser
$(document).ready(function () {
    setup();

});
var tempPoints;
function setup() {
    var ProActivity_id = '';
    var Proactivity_points = '';
    var watch_id = null; // ID of the geolocation
    var tracking_data = [];
    var dailyPoints;
    var weeklyPoints;
    var monthlyPoints;
    var strDate;
    var DateStampe
    var activityname;





    $("#dropdownmenu").on('click', function ()
    {
        document.getElementById("myDropdown").classList.toggle("ShowScore");
        console.log("buttons appear");
        
    });


    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('ShowScore')) {
                    openDropdown.classList.remove('ShowScore');
                }
            }
        }
    }


    $("#Add5Points").on('click',function()
    {
        //var input = document.getElementById("dropdownmenu");
        //input.value = "5 points";
        console.log("only 5 right");
        tempPoints = 5;
         
    });
    $("#Add10Points").on('click', function () {
        //var input = document.getElementById("dropdownmenu");
        //input.value = "5 points";
        console.log("only 10 right");
        tempPoints = 10;

    });
    $("#Add15Points").on('click', function () {
        //var input = document.getElementById("dropdownmenu");
        //input.value = "5 points";
        console.log("only 15 right");
        tempPoints = 15;

    });
    $("#Add25Points").on('click', function () {
        //var input = document.getElementById("dropdownmenu");
        //input.value = "5 points";
        console.log("only 25 right");
        tempPoints = 25;

    });

    $("#Add50Points").on('click', function () {
        //var input = document.getElementById("dropdownmenu");
        //input.value = "5 points";
        console.log("only 50 right");
        tempPoints = 50;

    });


    $("#startTracking_stop").on('click', function () {

        // Stop tracking the user
        navigator.geolocation.clearWatch(watch_id);
        console.log('stop tracking', tracking_data, tracking_data.length, JSON.stringify(tracking_data));
        // Save the tracking data
        //if(track_id==''){track_id='No Name'+DATE()}
		if (track_id == '') 
		{
		track_id = 'No Name' + DATE()
		}                                                                                                                                         
        window.localStorage.setItem(track_id, JSON.stringify(tracking_data));
        // Reset watch_id and tracking_data 
        watch_id = null;
        tracking_data = null;
        console.log('removed');

        // Tidy up the UI
        $("#New_Activity_id").val("").show();

        $("#startTracking_status").html("Stopped tracking workout: <strong>" + track_id + "</strong>");

    });



    $("#home_seedgps_button").on('click', function () {

        window.localStorage.setItem('Sample block', '[{"timestamp":1335700802000,"coords":{"heading":null,"altitude":null,"longitude":170.33488333333335,"accuracy":0,"latitude":-45.87475166666666,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700803000,"coords":{"heading":null,"altitude":null,"longitude":170.33481666666665,"accuracy":0,"latitude":-45.87465,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700804000,"coords":{"heading":null,"altitude":null,"longitude":170.33426999999998,"accuracy":0,"latitude":-45.873708333333326,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700805000,"coords":{"heading":null,"altitude":null,"longitude":170.33318333333335,"accuracy":0,"latitude":-45.87178333333333,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700806000,"coords":{"heading":null,"altitude":null,"longitude":170.33416166666666,"accuracy":0,"latitude":-45.871478333333336,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700807000,"coords":{"heading":null,"altitude":null,"longitude":170.33526833333332,"accuracy":0,"latitude":-45.873394999999995,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700808000,"coords":{"heading":null,"altitude":null,"longitude":170.33427333333336,"accuracy":0,"latitude":-45.873711666666665,"speed":null,"altitudeAccuracy":null}},{"timestamp":1335700809000,"coords":{"heading":null,"altitude":null,"longitude":170.33488333333335,"accuracy":0,"latitude":-45.87475166666666,"speed":null,"altitudeAccuracy":null}}]');

    });

}
function ResetList()
{
    window.localStorage.clear();
    console.log("clear list");
    UpdateActivityList();
}
function Add5Points()
{
    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    console.log("HERE     " + test);
    console.log("HERE     " + test2);


    tempPoints = 5;
    var Datestamp =
    {
        points: tempPoints,
        CurrentDate: test2,
        CurrentMonth: test
    }
    
    UpdateStorageitem(Datestamp);
}
function Add10Points()
{
    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    tempPoints = 10;
    var Datestamp =
{
    points: tempPoints,
    CurrentDate: test2,
    CurrentMonth: test
}
    
    UpdateStorageitem(Datestamp);
}
function Add15Points()
{
    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    tempPoints = 15;
    var Datestamp =
{
    points: tempPoints,
    CurrentDate: test2,
    CurrentMonth: test

}
   
    UpdateStorageitem(Datestamp);
}
function Add25Points()
{

    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    tempPoints = 25;
    var Datestamp =
 {
     points: tempPoints,
     CurrentDate: test2,
     CurrentMonth: test
 }
    
    UpdateStorageitem(Datestamp);
}
function Add50Points()
{
    
    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    tempPoints = 50;
    var Datestamp =
 {
     points: tempPoints,
     CurrentDate: test2,
     CurrentMonth: test
 }
 
    UpdateStorageitem(Datestamp);
}
function AddToList() {
    var LogN = window.localStorage.length + 1;
    activityname = $("#NewActivity_id").val();
    var date = new Date();
    var test = date.getMonth() + 1;
    var test2 = date.getDate();

    dailyPoints = +tempPoints;
    var listAdition =
        {
            title: activityname,
            points: tempPoints
        }
    var Datestamp =
        {
            points: dailyPoints,
            CurrentDate: test2,
            CurrentMonth: test

        }
    window.localStorage['Log:' + LogN] = JSON.stringify(listAdition);
    UpdateStorageitem(Datestamp);

        UpdateActivityList();
        activityname = $("#NewActivity_id").val('');
        tempPoints = 0;
        console.log(activityname);

    
}

function UpdateStorageitem(DateStamper)
{

    var StrDate = JSON.stringify(DateStamper.CurrentDate);

    console.log("this is the value i am passing in" + StrDate);
    console.log(" the current length of the local storage is: " + window.localStorage.length);
    if (window.localStorage.length <= 1) {
        window.localStorage['Date:1'] = JSON.stringify(DateStamper);
        window.localStorage['Date:2'] = JSON.stringify(DateStamper);
    }
    else
    {
        for (i = 0; i < window.localStorage.length; i++) {

            if (window.localStorage.key(i) == 'Date:1') {
                console.log("Date value found");
                var dateOne = JSON.parse(window.localStorage['Date:1']);
                var StroageDate = JSON.stringify(dateOne.CurrentDate);
                var StoredMonth = JSON.stringify(dateOne.CurrentMonth);

               
                //console.log("this is my current date:" + StrDate + " end this is my current date" + StroageDate);
                console.log("StroageDate ==  " + StroageDate + "stored month == " + StoredMonth);

                if (StroageDate == StrDate) {
                    console.log("dates are the same");
                    dateOne.points = (dateOne.points + DateStamper.points);

                    var tempdump =
                    {
                            points: dateOne.points,
                            CurrentDate: dateOne.CurrentDate,
                            CurrentMonth: dateOne.CurrentMonth
                    }

                    window.localStorage['Date:1'] = JSON.stringify(tempdump);


                }
                else if (StroageDate != StrDate) {


                    StroageDate = DateStamper;
                    var tempdump =
                    {
                    points: DateStamper.points,
                    CurrentDate: dateOne.CurrentDate,
                    CurrentMonth: dateOne.CurrentMonth
                    }
                    window.localStorage['Date:1'] = JSON.stringify(tempdump);

                    console.log("Date was : " + StroageDate + "Dates did not match daily points have been reset:" + dateOne.points + "the date is now " + JSON.stringify(dateOne.CurrentDate));
                }    
            }

            if (window.localStorage.key(i) == 'Date:2')
            {



                var dateTwo = JSON.parse(window.localStorage['Date:2']);
                var StroageD = JSON.stringify(dateTwo.CurrentDate);
                var StoredM = JSON.stringify(dateTwo.CurrentMonth);

               // var test = new Date(dateStorageTwo);
                console.log(dateTwo.CurrentMonth + StoredM)
                if (DateStamper.CurrentMonth == StoredM)
                {
                    console.log("the months are the same ");
                    dateTwo.points += DateStamper.points;
                    var tempdump =
                    {
                        points: dateTwo.points,
                        CurrentDate: dateTwo.CurrentDate,
                        CurrentMonth: dateTwo.CurrentMonth
                    }
                    window.localStorage['Date:2'] = JSON.stringify(tempdump);

                }
                else if (DateStamper.CurrentMonth != StoredM)
                {
                    var tempdump =
                    {
                        points: DateStamper.points,
                        CurrentDate: dateTwo.CurrentDate,
                        CurrentMonth: dateTwo.CurrentMonth
                    }
                    window.localStorage['Date:2'] = JSON.stringify(tempdump);
                }
                //console.log("George Test: " + dateStorageTwo);


                dateTwo.points = (dateTwo.points + DateStamper.points);



            }

        }

    }

}
function homepageCheck()
{
    var weatherToday = new XMLHttpRequest();
    weatherToday.open("GET", "http://api.wunderground.com/api/549dcfb851363dd8/conditions/q/GB/Lincoln.json", false);
    weatherToday.send(null);
    var r = JSON.parse(weatherToday.response);
    var getCity = r.current_observation.display_location.full;
    var getWeather = r.current_observation.weather;
    var getTempriture = r.current_observation.temperature_string;
    var getWindSpeed = r.current_observation.wind_mph;
    var getGust = r.current_observation.wind_gust_mph;
    var GetElemnt = document.getElementById("reassure box");
    var relhue = r.current_observation.relative_humidity;
    console.log(weatherToday.response);
    //var GetWeather = JSON.parse(weather.response.estimated);
    console.log(getWindSpeed);
    //consoe.log(wearthcurrently);
    console.log(getCity)
    if (getCity != 'Lincoln, United Kingdom')
    {
        GetElemnt.innerHTML = "out of town I see! best to take a long rest, recharge, you deserve it."
    }
    else if (getCity == 'Lincoln, United Kingdom' && getWeather == 'Mostly Cloudy') {
        GetElemnt.innerHTML = "when it's this cloudy like this you can't be expected to go to work, that's a lot of effort when it's it could rain any second"
    }
    else
    {
        var x = Math.floor((Math.random() * 5) + 1);
        //document.getElementById("demo").innerHTML = x;

        switch(x) {
            case 1:
                GetElemnt.innerHTML = "it's: " + getWeather + " with weather like that how are you meant to work, kick your feet up."
                break;
            case 2:
                GetElemnt.innerHTML = "it's: " + getTempriture + " not the best for consentrating, I'd say better to just chill"
                break;
            case 3:
                if (getWindSpeed > 5) {
                    GetElemnt.innerHTML = "the wind speed is: (" + getWindSpeed + "mph), that's pretty quick dude, I wouldn't go out there if I were you. should probably just play video games instead"
                }
                else
                {
                    GetElemnt.innerHTML = "the wind speed is: (" + getWindSpeed + "mph), that's pretty slow but I still wouldn't advise going out there considering it's. " + getTempriture;
                }
                break;
            case 4:
                if (getGust > 7) {
                    GetElemnt.innerHTML = "I don't know man the wind is gusting hard: (" + getGust + "mph), wanna reconsider going to work today and just wanna drink instead";
                }
                else
                {
                    GetElemnt.innerHTML = "The winds basically not even gusting look: (" + getGust + "mph), if even the world is this chill today why shouldn't you be";
                }
                break;
            case 5:
                GetElemnt.innerHTML = " it's humid today:(" + relhue + "), I'm supprised you can see your phone you defo shouldn't be working in air this think";
                break;
            default:
                GetElemnt.innerHTML = "somehow i ended up out of I don't knw why but you should make sure your doing nothing while i fix it";
        }
    }

		//catch(err)
        //{
		//    getCity = "Unavailable (No internet)";
		//    console.log("test");	
		//}

}
function moveBar() {
   
    var Dayelem = document.getElementById("DayBar");
    var Monthelem = document.getElementById("MonthBar");
    var MonthScrElm = document.getElementById("MonthlyScore");
    var DayScrElm = document.getElementById("DailyScore");
    var DWidth = 0;
    var Mwidth = 0;
    var id = setInterval(frame, 10);
    var Monthid = setInterval(framers, 3);
   
;    if (window.localStorage.length >= 2 ) {
        var curDWidth = JSON.parse(window.localStorage['Date:1']);
        var curMWidth = JSON.parse(window.localStorage['Date:2']);
        console.log("values assined:" + window.localStorage.length);

    }
    else
    {
    var curDWidth = 
    {
        points: 0
    };
    var curMWidth =
    {   
        points: 0
    };
    }

    MonthScrElm.innerHTML = "monthly score is: " + curMWidth.points;
    DayScrElm.innerHTML = "daily score is: " + curDWidth.points;

    //console.log("are we getting in here fam cus i honestly don't know" + curDWidth.points);

        console.log("points assined " + curDWidth.points);
        function frame() {
         if (curDWidth.points > 0) {
            var dailyGoal = 200;
            console.log("points assined " + curDWidth.points);
            if (DWidth >= dailyGoal) {
                clearInterval(id);
            }
            else if (DWidth < curDWidth.points) {
                DWidth++;
                console.log(DWidth);
                Dayelem.style.width = DWidth * 0.5 + '%';
                Dayelem.innerHTML = DWidth * 0.5 + '%';
            }
            else {
                clearInterval(id);
            }
         }
         else if (curDWidth.points == 0)
         {
             console.log("this should now be empty")
             Dayelem.style.width = 0 + '%';
             Dayelem.innerHTML = 0 + '%';
             clearInterval(id);
         }
    }

        function framers() {
            if (curMWidth.points > 0) {
            var monthlyGoal = 5000;
            if (Mwidth >= monthlyGoal) {
                clearInterval(Monthid);
            }
            else if (Mwidth < curDWidth.points) {
                Mwidth++;
                console.log(Mwidth);
                Monthelem.style.width = Mwidth / 50 + '%';
                Monthelem.innerHTML = Mwidth / 50 + '%';
            }
            else {
                clearInterval(Monthid);
            }
            }
            else if (curMWidth.points == 0)
            {

                console.log("this is now open for business")
                Monthelem.style.width = 0 + '%';
                Monthelem.innerHTML = 0 + '%';
                clearInterval(Monthid);
            }
    }
}

window.onload = function() {

    var Droplocation = document.getElementById('ActivityButtons');

    Droplocation.innerHTML = "";

    if (window.localStorage.length <= 1)
    {

    }
    else
    {
        for (i = 0; i < window.localStorage.length; i++) {
            console.log(window.localStorage.key(i));
            if (window.localStorage.key(i) != ("Date:1") || window.localStorage.key(i) == "Log:2") {
                if (window.localStorage.key(i) != "Date:2") {
                    //if (window.localStorage.key(i) == "Log:" + JSON.stringify(i)) {
                    console.log(window.localStorage.key(i) + "are we showing now ");
                    var key = window.localStorage.key(i);
                    var value = JSON.parse(window.localStorage[key]);
                    var Div = document.createElement("button");
                    var linkText = document.createTextNode(value.title + ": " + value.points);
                    Div.appendChild(linkText);
                    Div.className = "ui-btn ui-shadow ui-corner-all";
                    Div.href = "#"
                    if (value.points == 5) {
                        //setAttribute('onclick', "Add5Points();");
                        //Div.onclick = Add5Points;
                        //Div.appendChild("this is your place to put stuff");
                        // Div.onclick = Add5Points();

                        Div.setAttribute('onclick', 'Add5Points()');

                    }
                    else if (value.points == 10) {
                        //Div.onclick = Add10Points;
                        Div.setAttribute('onclick', 'Add10Points()');


                    }
                    else if (value.points == 15) {
                        //Div.onclick = Add15Points;
                        Div.setAttribute('onclick', 'Add15Points()');

                    }
                    else if (value.points == 25) {
                        Div.setAttribute('onclick', 'Add25Points()');

                    }
                    else if (value.points == 50) {
                        Div.setAttribute('onclick', 'Add50Points()');

                    }


                    Droplocation.appendChild(Div);
                }

            }

        }
    }
}
function UpdateActivityList()
{
    var Droplocation = document.getElementById('ActivityButtons');

    Droplocation.innerHTML = "";

    if (window.localStorage.length > 2) {
        for (i = 0; i < window.localStorage.length; i++) {
            if (window.localStorage.key(i) != ("Date:1") || window.localStorage.key(i) == "Log:2") {
                if (window.localStorage.key(i) != "Date:2") {
                    var key = window.localStorage.key(i);
                    var value = JSON.parse(window.localStorage[key]);
                    var Div = document.createElement("button");
                    var linkText = document.createTextNode(value.title + ": " + value.points);
                    Div.appendChild(linkText);
                    Div.className = "ui-btn ui-shadow ui-corner-all";
                    Div.href = "#"
                    if (value.title == '' || value.points == '')
                    {
                        //console.log("information was not filled in");
                    }
                    else {
                        if (window.localStorage.key(i) != "Date:1") {
                            if (value.points == 5) {

                                Div.setAttribute('onclick', 'Add5Points()');

                            }
                            else if (value.points == 10) {
                                Div.setAttribute('onclick', 'Add10Points()');
                            }
                            else if (value.points == 15) {
                                //Div.onclick = Add15Points;
                                Div.setAttribute('onclick', 'Add15Points()');

                            }
                            else if (value.points == 25) {
                                Div.setAttribute('onclick', 'Add25Points()');

                            }
                            else if (value.points == 50) {
                                Div.setAttribute('onclick', 'Add50Points()');

                            }
                            Droplocation.appendChild(Div);
                        }
                    }
                
                }
            }
        }
    }
    else
    {
        
        Droplocation.innerHTML = "";
    }
}
// When the user views the history page
$(document).on('pagecreate', '#Progress', function () {
    console.log('Progress page');

    // Count the number of entries in localStorage and display this information to the user
    tracks_recorded = window.localStorage.length;
    $("#tracks_recorded").html("<strong>" + tracks_recorded + "</strong> workout(s) recorded");

    // Empty the list of recorded tracks
    $("#history_tracklist").empty();

    // Iterate over all of the recorded tracks, populating the list
    for (i = 0; i < tracks_recorded; i++) {
        $("#history_tracklist").append("<li><a href='#track_info' data-ajax='false'>" + window.localStorage.key(i) + "</a></li>");
    }

    // Tell jQueryMobile to refresh the list
    $("#history_tracklist").listview('refresh');

    // When the user clicks a link to view track info, set/change the AddPoints attribute on the track_info page.
    $("#history_tracklist li a").on('click', function () {
        console.log('click track');
        $("#track_info").attr("AddPoints", $(this).text());

    });

});




// When the user views the Track Info page
$(document).on('pagecreate', '#track_info', function () {

    // Find the AddPoints of the workout they are viewing
    var key = $(this).attr("AddPoints");
    console.log('track info', key);
    // Update the Track Info page header to the AddPoints
    $("#track_info div[data-role=header] h1").text(key);

    // Get all the GPS data for the specific workout
    var data = window.localStorage.getItem(key);

    // Turn the stringified GPS data back into a JS object
    data = JSON.parse(data);

    // Calculate the total distance travelled
    total_km = 0;

    for (i = 0; i < data.length; i++) {

        if (i == (data.length - 1)) {
            break;
        }

        total_km += gps_distance(data[i].coords.latitude, data[i].coords.longitude, data[i + 1].coords.latitude, data[i + 1].coords.longitude);
    }

    total_km_rounded = total_km.toFixed(2);

    // Calculate the total time taken for the track
    start_time = new Date(data[0].timestamp).getTime();
    end_time = new Date(data[data.length - 1].timestamp).getTime();

    total_time_ms = end_time - start_time;
    total_time_s = total_time_ms / 1000;

    final_time_m = Math.floor(total_time_s / 60);
    final_time_s = total_time_s - (final_time_m * 60);

    // Display total distance and time
    $("#track_info_info").html('Travelled <strong>' + total_km_rounded + '</strong> km in <strong>' + final_time_m + 'm</strong> and <strong>' + final_time_s + 's</strong>');

    // Set the initial Lat and Long of the Google Map
    var myLatLng = new google.maps.LatLng(data[0].coords.latitude, data[0].coords.longitude);

    // Google Map options
    var myOptions = {
        zoom: 15,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create the Google Map, set options
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var trackCoords = [];

    // Add each GPS entry to an array
    for (i = 0; i < data.length; i++) {
        trackCoords.push(new google.maps.LatLng(data[i].coords.latitude, data[i].coords.longitude));
    }

    // Plot the GPS entries as a line on the Google Map
    var trackPath = new google.maps.Polyline({
        path: trackCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    // Apply the line to the map
    trackPath.setMap(map);


});

function gps_distance(lat1, lon1, lat2, lon2) {

// Array containing GPS position objects     // Name/ID of the exercise
    // http://www.movable-type.co.uk/scripts/latlong.html
    var R = 6371; // km
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    var lat1 = lat1 * (Math.PI / 180);
    var lat2 = lat2 * (Math.PI / 180);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
}