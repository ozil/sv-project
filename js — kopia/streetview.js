 var map;
  var panorama;
  var mapElement;
  
  var markerRock;
  var markerpodworko;
  var markerCrossWalk;
	
  
  
  var budynekA = new google.maps.LatLng(50.259268, 19.044170);
  var budynekAMarker = new google.maps.LatLng(50.259268, 19.044170);
  var crossWalkLatLon = new google.maps.LatLng(44.939946,-93.167842);
  var rockLatLon = new google.maps.LatLng(44.938944,-93.168494);
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
 
 
   var mapCenter = new google.maps.LatLng(48.85893528,2.2933412);
   // options for the map
   var mapOptions1 = {
      center: budynekA,
      zoom: 17,
      mapTypeId: 'satellite',
      streetViewControl: false,
	  heading: 240,
	  tilt: 45,
   };
   // create a new map object to be shown in the map_canvas1 div elements and with the options that were set
   map = new google.maps.Map(document.getElementById("map"), mapOptions1);
 
 
    // Set up the map and enable the Street View control.
    var mapOptions = {
      center: budynekA,
      zoom: 12,
      mapTypeId: 'satellite',
	  centerHeading: 0,
    };
    mapStreetView = new google.maps.Map(document.getElementById("map-streetview"), mapOptions);
 
    panorama = mapStreetView.getStreetView();
    // Set up Street View and initially set it visible. Register the
    // custom panorama provider function.
    var panoOptions = {
      pano: '6',
      visible: true,
	  enableCloseButton: false, 
      panoProvider:  getCustomPanorama,
      pov: {
         heading: 280,
         pitch: -10,
         zoom: -1
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
      title:"Paris visit starts here!"
   });
   google.maps.event.addListener(budynekAMarker, 'click', function() {
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
      title:"Cross Walk"
   });
   // add listener to change panorama options when the marker is clicked
   google.maps.event.addListener(markerCrossWalk, 'click', function() {
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
      title:"Rock"
   });
   // add listener to change panorama options when the marker is clicked
   google.maps.event.addListener(markerRock, 'click', function() {
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
	  new google.maps.Point(0,0),
	  // The anchor for this image is the base of the flagpole at 0,32.
	  new google.maps.Point(11, 32));
    var shadow = new google.maps.MarkerImage(sprite,
	  new google.maps.Size(40, 32),
	  new google.maps.Point(20,0),
	  new google.maps.Point(11, 32));
    var blueImage = new google.maps.MarkerImage('markerBlue.png',
	  new google.maps.Size(40, 32),
	  new google.maps.Point(0,0),
	  new google.maps.Point(10, 32));
	/* */
	markerRock.setIcon(image);
	markerpodworko.setIcon(image);
	markerCrossWalk.setIcon(image);
	marker.setIcon(blueImage);
	
  
  }
 
  // Return a pano image given the panoID.
  function getCustomPanoramaTileUrl(pano,zoom,tileX,tileY) {
    //return 'photo.jpg';
	return "images/" +pano + '.jpg';
    //return 'images/panoReception1024-' + zoom + '-' + tileX + '-' +tileY + '.jpg';
  }
 
  function getCustomPanorama(pano,zoom,tileX,tileY) {
 
    var center;
 
    switch(pano) {
   
	  case '6':
        center = new google.maps.LatLng(44.939946,-93.167842);
        return {
          location: {
            pano: '6',
            description: "Budynek A - wejście",
            latLng: center
          },
          links: [],
          // The text for the copyright control.
          copyright: '',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4323, 1712),
            worldSize: new google.maps.Size(4323, 1712),
             
            centerHeading: 80,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
	  case '7':
        center = podworko;
        return {
          location: {
            pano: '7',
            description: "Budynek A - parter",
            latLng: center
          },
          links: [ ],
          // The text for the copyright control.
          copyright: '',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 90,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
	  case '5':
        center = rockLatLon;
        return {
          location: {
            pano: '5',
            description: "Budynek A",
            latLng: center
          },
          links: [
            ],          
          copyright: '',          
          tiles: {
            tileSize: new google.maps.Size(4419, 1524),
            worldSize: new google.maps.Size(4419, 1524),
             
            centerHeading: 105,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
		case '8':         
        return {
          location: {
            pano: '8',
            description: "Półpiętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 50,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
		case '9':         
        return {
          location: {
            pano: '9',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 20,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '10':
         
        return {
          location: {
            pano: '10',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '11':         
        return {
          location: {
            pano: '11',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '12':
         
        return {
          location: {
            pano: '12',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '13':
         
        return {
          location: {
            pano: '13',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '14':
         
        return {
          location: {
            pano: '14',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '15':         
        return {
          location: {
            pano: '15',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '16':
         
        return {
          location: {
            pano: '16',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '17':         
        return {
          location: {
            pano: '17',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '18':         
        return {
          location: {
            pano: '18',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '19':         
        return {
          location: {
            pano: '19',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '20':         
        return {
          location: {
            pano: '20',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '21':         
        return {
          location: {
            pano: '21',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '22':
         
        return {
          location: {
            pano: '22',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '23':
         
        return {
          location: {
            pano: '23',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '24':
         
        return {
          location: {
            pano: '24',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '25':
         
        return {
          location: {
            pano: '25',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '26':
         
        return {
          location: {
            pano: '26',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '27':
         
        return {
          location: {
            pano: '27',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '28':
         
        return {
          location: {
            pano: '28',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '29':
         
        return {
          location: {
            pano: '29',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '30':
         
        return {
          location: {
            pano: '30',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '31':
         
        return {
          location: {
            pano: '31',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;
		case '32':
         
        return {
          location: {
            pano: '32',
            description: "I piętro",
            latLng: center
          },    
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
             
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        }; 
        break;		
      default:
        return null;
    }
  }
   
  function createCustomLinks() {
 
    var links = panorama.getLinks();
    var panoId = panorama.getPano();
 
    switch(panoId) { 
        case '6':
          // Adding a link in the view from the entrance of the building to
          // reception.
          links.push({ 
		   'heading': 280,
            'description' : 'Budynek A - parter',
            'pano' : '7'
          },{
            'heading': 190,
            'description' : 'Budynek A',
            'pano' : '5'
          });
          break;
        case '7':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 180,
            'description' : 'Połpiętro',
            'pano' : 8
          });
          links.push({
            'heading': 90,
            'description' : 'Budynek A - wejście',
            'pano' : '6'
          });
          break;
        case '8':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 340,
            'description' : 'Budynek A - parter',
            'pano' : '7'
          });
          links.push({
            'heading': 240,
            'description' : 'I piętro',
            'pano' : '9'
          });
          break;
        case '9':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 150,
            'description' : 'I piętro',
            'pano' : '10'
          });
		  links.push({
			'heading': 90,
            'description' : 'Półpiętro',
            'pano' : '8'
		  });
		  links.push({
			'heading': 360,
            'description' : 'Półpiętro',
            'pano' : '24'
		  });
          break;
		  case '10':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '9'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '11'
          });
          break;
		   case '11':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '10'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '12'
          });
          break;
		  break;
		   case '12':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
           links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '13'
          });
		  links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '11'
          });
		 
          break;
		  break;
		   case '13':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '12'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '14'
          });
          break;
		  break;
		   case '14':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '13'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '15'
          });
          break;
		  break;
		   case '15':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '14'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '16'
          });
          break;
		  break;
		   case '16':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '15'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '17'
          });
          break;
		  break;
		   case '17':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '16'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '18'
          });
          break;
		  break;
		   case '18':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '17'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '19'
          });
          break;
		  break;
		   case '19':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '18'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '20'
          });
          break;
		  break;
		   case '20':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '19'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '21'
          });
          break;
		  break;
		   case '21':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '20'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '22'
          });
          break;
		  break;
		   case '22':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '21'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '23'
          });
          break;
		  break;
		   case '23':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'I piętro',
            'pano' : '22'
          });
		  links.push({
            'heading': 180,
            'description' : 'I piętro',
            'pano' : '9'
          });
          break;
        default:
          return;
    }
}
  