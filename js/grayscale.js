/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}


function addClassesList(building_id) {
    $.ajax({
        type: "GET", /*Informacja o tym, że dane będą pobierane*/
        url: "/db/get.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
        contentType: "application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
        dataType: 'json', /*Informacja o formacie transferu danych*/
        data: {floor_id: 1, building_id: building_id, action:"get_all_classes"},

        success: function (json) { /*Funkcja zawiera parametr*/
            /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
            var classList = $("#class-list");
            classList[0].innerHTML = "";
            for (var key in json) {
                var row = json[key];
                /*Kolejne przebiegi pętli wstawiają nowy klucz*/
                var classId = row[0];
                var link;
                link = '<h1><a class="h1 classBtn" href="#map-section">' + classId + '</a></h1>';
                classList[0].innerHTML += link;

            }
            addClassButtonsEvent();
        },

        error: function (error) {
            console.log(error);
        }
    })
}

function addBuildingList() {
    $.ajax({
        type: "GET", /*Informacja o tym, że dane będą pobierane*/
        url: "/db/get.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
        contentType: "application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
        dataType: 'json', /*Informacja o formacie transferu danych*/
        data: {action:"get_all_buildings"},

        success: function (json) { /*Funkcja zawiera parametr*/
            /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
            var buildingList = $("#building-list");
            for (var key in json) {
                var row = json[key];
                /*Kolejne przebiegi pętli wstawiają nowy klucz*/
                var buildingId = row[0];
                var link = '<h1><a class="h1 buildingsBtn">' + buildingId + '</a></h1>';
                buildingList[0].innerHTML += link;

            }
            addBuildingsButtonsEvent();
        },
        error: function (error) {
            console.log(error);
        }
    })

}

$(window).scroll(collapseNavbar);
$(document).ready(function () {
    collapseNavbar();
    $(".nano").nanoScroller({preventPageScrolling: true});
    addClassesList("A");
    addBuildingList();
    // addClassButtonsEvent();
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $(this).closest('.collapse').collapse('toggle');
});

function addClassButtonsEvent() {
    var classBtns = $('.classBtn');
    classBtns.each(function () {
        var button = $(this);
        var className = button[0].innerText.toString();
        button.on("click", function () {
            $.ajax({
                type: "GET", /*Informacja o tym, że dane będą pobierane*/
                url: "/db/get.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
                contentType: "application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
                dataType: 'json', /*Informacja o formacie transferu danych*/
                data: {class_id: className, action: "get_class_view"},


                /*Działania wykonywane w przypadku sukcesu*/
                success: function (json) { /*Funkcja zawiera parametr*/
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                    var classId, heading, panoId;
                    for (var key in json) {
                        var row = json[key];
                        /*Kolejne przebiegi pętli wstawiają nowy klucz*/
                        classId = row[0];
                        heading= parseInt(row[1]);
                        panoId = row[2]
                    }
                    getClassView(heading,panoId);
                },


                /*Działania wykonywane w przypadku błędu*/
                error: function (blad) {
                    console.log(blad);
                    /*Funkcja wyświetlająca informacje
                     o ewentualnym błędzie w konsoli przeglądarki*/
                }
            });
        });
    })
}

function addBuildingsButtonsEvent() {
    var buildingBtns = $('.buildingsBtn');
    buildingBtns.each(function () {
        var button = $(this);
        var buildingId = button[0].innerText.toString();
        button.on("click", function () {
            $.ajax({
                type: "GET", /*Informacja o tym, że dane będą pobierane*/
                url: "/db/get.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
                contentType: "application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
                dataType: 'json', /*Informacja o formacie transferu danych*/
                data: {building_id: buildingId, action: "get_building_view"},


                /*Działania wykonywane w przypadku sukcesu*/
                success: function (json) { /*Funkcja zawiera parametr*/
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                    var heading, panoId;
                    for (var key in json) {
                        var row = json[key];
                        /*Kolejne przebiegi pętli wstawiają nowy klucz*/
                        heading= parseInt(row.heading);
                        panoId = row.pano_id;
                    }
                    getClassView(heading,panoId);
                    addClassesList(buildingId);
                },

                /*Działania wykonywane w przypadku błędu*/
                error: function (blad) {
                    console.log(blad);
                    /*Funkcja wyświetlająca informacje
                     o ewentualnym błędzie w konsoli przeglądarki*/
                }
            });
        });
    })
}


// Google Mapss Scripts
// var map = null;
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
// map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
// });


