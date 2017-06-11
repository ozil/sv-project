var map;
var panorama;
var mapElement;
// var classes = [231, 232, 233, 234, 201, 202, 203, 204, 205, 206, 207, 208, 209];
var markers = [];

var markerRock;
var markerpodworko;
var markerCrossWalk;


var budynekA = new google.maps.LatLng(50.259268, 19.044170);
var budynekAMarker = new google.maps.LatLng(50.259268, 19.044170);
var crossWalkLatLon = new google.maps.LatLng(44.939946, -93.167842);
var rockLatLon = new google.maps.LatLng(44.938944, -93.168494);
//var sprite = 'http://maps.gstatic.com/intl/en_us/mapfiles/markers/marker_sprite.png';
var sprite = 'markerRed.png';


var entryPanoId = '6';

function initialize() {

    startApplication();

    var panoSearchRadius = 50;

    // Create a StreetViewService object.
    var client = new google.maps.StreetViewService();

}

google.maps.event.addDomListener(window, 'load', initialize);
// google.maps.event.addDomListener(window, 'resize', function() {
// map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
// });


function startApplication() {


    // options for the map
    var mapOverview = {
        center: budynekA,
        mapTypeId: 'satellite',
        zoom: 20,
        streetViewControl: false,
        heading: 90,
        tilt: 45,
    };
    // create a new map object to be shown in the map_canvas1 div elements and with the options that were set
    map = new google.maps.Map(document.getElementById("map"), mapOverview);

    createMarkers(classes, map);
    // Set up the map and enable the Street View control.
    var mapOptions = {
        center: budynekA,
        zoom: 12,
        mapTypeId: 'satellite',
        centerHeading: 0,
    };
    mapStreetView = new google.maps.Map(document.getElementById("map-streetview"), mapOptions);

    panorama = mapStreetView.getStreetView();

    var panoOptions = {
        pano: '6',
        visible: true,
        zoom: 0,
        enableCloseButton: false,
        panoProvider: getCustomPanorama,
        pov: {
            heading: 280,
            pitch: -10,
            // zoom: 1
        }
    }
    panorama.setOptions(panoOptions);


    // We'll monitor the links_changed event to check if the current pano is either
    // a custom pano or our entry pano.        
    google.maps.event.addListener(panorama, 'links_changed', createCustomLinks);
    google.maps.event.addListener(panorama, 'load', createCustomLinks);
    //createCustomLinks();


    markerpodworko = new google.maps.Marker({
        position: budynekAMarker,
        map: map,
        title: "Paris visit starts here!"
    });
    google.maps.event.addListener(budynekAMarker, 'click', function () {
        panorama.setPano('ppp');
        panorama.setPov({heading: 97, pitch: +10, zoom: 1});
        setBlueIcon(this);
    });
    // on panorama
    var markerpodworkoPano = new google.maps.Marker({
        position: budynekAMarker,
        map: mapStreetView,
        title: 'Budynek A'
    });


    // add cross walk marker on map
    markerCrossWalk = new google.maps.Marker({
        position: crossWalkLatLon,
        map: map,
        title: "Cross Walk"
    });
    // add listener to change panorama options when the marker is clicked
    google.maps.event.addListener(markerCrossWalk, 'click', function () {
        panorama.setPano('crossWalk');
        panorama.setPov({heading: 140, pitch: +10, zoom: 1});
        setBlueIcon(this);
    });
    // on panorama
    var markerCrossWalkPano = new google.maps.Marker({
        position: crossWalkLatLon,
        map: map,
        title: 'Cross Walk'
    });

    // add ROCK marker on map
    markerRock = new google.maps.Marker({
        position: rockLatLon,
        map: map,
        title: "Rock"
    });
    // add listener to change panorama options when the marker is clicked
    google.maps.event.addListener(markerRock, 'click', function () {
        panorama.setPano('rock');
        panorama.setPov({heading: 0, pitch: +5, zoom: 1});
        setBlueIcon(this);
    });
    // on panorama
    var markerRockPano = new google.maps.Marker({
        position: rockLatLon,
        map: mapStreetView,
        title: 'Notre Dame Cathedral'
    });

}

function setBlueIcon(marker) {
    /* */
    var image = new google.maps.MarkerImage(sprite,
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(35, 32),
        // The origin for this image is 0,0.
        new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at 0,32.
        new google.maps.Point(11, 32));
    var shadow = new google.maps.MarkerImage(sprite,
        new google.maps.Size(40, 32),
        new google.maps.Point(20, 0),
        new google.maps.Point(11, 32));
    var blueImage = new google.maps.MarkerImage('markerBlue.png',
        new google.maps.Size(40, 32),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 32));
    /* */
    markerRock.setIcon(image);
    markerpodworko.setIcon(image);
    markerCrossWalk.setIcon(image);
    marker.setIcon(blueImage);


}

// Return a pano image given the panoID.
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    // return "images/"+pano+"/"+ (tileY + 1) + "_" + (tileX + 1)+ '.jpg';
    return "images/" + pano + ".jpg";
}

function createMarkers(classes, map) {
    for (i =0; i<classes.length;i++) {
        var marker = new google.maps.Marker({
            position: {lat: 40.730031, lng: -73.991428},
            map: map,
            icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00',
            title: classes[i].toString(),
            id: classes[i]
        })
        markers.push(marker);
    }
}

function getClassView(heading, panoId) {
    // panorama.setPano(panoId);
    panorama.setPano(panoId)
    panorama.setPov({heading: heading, pitch: -10, zoom: 0});

}

 
