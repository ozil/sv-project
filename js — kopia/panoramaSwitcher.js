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