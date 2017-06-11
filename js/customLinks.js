function createCustomLinks() {
 
    var links = panorama.getLinks();
    var panoId = panorama.getPano();

    switch(panoId) {
        case '6':
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
          links.push({
            'heading': 180,
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
            'pano' : '23'
		  });
          break;
		  case '10':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '9'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '11'
          });
          break;
		   case '11':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '10'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '12'
          });
          break;
		  break;
		   case '12':

           links.push({
            'heading': 230,
            'description' : 'I piętro',
            'pano' : '13'
          });
		  links.push({
            'heading': 80,
            'description' : 'I piętro',
            'pano' : '11'
          });

          break;
		  break;
		   case '13':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '12'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '14'
          });
          break;
		  break;
		   case '14':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '13'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '16'
          });
          break;
		  break;
		  //  case '15':
          //
          // links.push({
           //  'heading': 10,
           //  'description' : 'I piętro',
           //  'pano' : '14'
          // });
		  // links.push({
           //  'heading': 180,
           //  'description' : 'I piętro',
           //  'pano' : '16'
          // });
          // break;
		  // break;
		   case '16':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '14'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '17'
          });
          break;
		  break;
		   case '17':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '16'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '18'
          });
          break;
		  break;
		   case '18':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '17'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '19'
          });
          break;
		  break;
		   case '19':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '18'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '20'
          });
          break;
		  break;
		   case '20':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '19'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '21'
          });
          break;
		  break;
		   case '21':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '20'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '22'
          });
          break;
		  break;
		   case '22':

          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '21'
          });
		  links.push({
            'heading': 270,
            'description' : 'I piętro',
            'pano' : '23'
          });
          break;
		  break;
		   case '23':
          links.push({
            'heading': 90,
            'description' : 'I piętro',
            'pano' : '22'
          });
		  links.push({
            'heading': 220,
            'description' : 'I piętro',
            'pano' : '9'
          });
		  break;
		  break;
        case '27':
            links.push({
                'heading': 300,
                'description' : 'I piętro',
                'pano' : '28'
            });
            links.push({
                'heading': 180,
                'description' : 'I piętro',
                'pano' : '36'
            });
            break;
            break;
        case '28':
            links.push({
                'heading': 120,
                'description' : 'I piętro',
                'pano' : '27'
            });
            links.push({
                'heading': 300,
                'description' : 'I piętro',
                'pano' : '29'
            });
          break;
          break;
        case '29':
            links.push({
                'heading': 120,
                'description' : 'Budynek B',
                'pano' : '28'
            });
            links.push({
                'heading': 300,
                'description' : 'Budynek B',
                'pano' : '30'
            });
            break;
            break;
        case '30':
            links.push({
                'heading': 110,
                'description' : 'Budynek B',
                'pano' : '29'
            });
            links.push({
                'heading': 290,
                'description' : 'Budynek B',
                'pano' : '31'
            });
            break;
            break;
        case '31':
            links.push({
                'heading': 105,
                'description' : 'Budynek B',
                'pano' : '30'
            });
            links.push({
                'heading': 220,
                'description' : 'Budynek B',
                'pano' : '32'
            });
            break;
            break;
        case '32':
            links.push({
                'heading': 120,
                'description' : 'I piętro',
                'pano' : '31'
            });
            links.push({
                'heading': 300,
                'description' : 'I piętro',
                'pano' : '33'
            });
            break;
            break;
        case '33':
            links.push({
                'heading': 120,
                'description' : 'I piętro',
                'pano' : '32'
            });
            break;
            break;
        case '35':
            links.push({
                'heading': 120,
                'description' : 'I piętro',
                'pano' : '32'
            });
            links.push({
                'heading': 300,
                'description' : 'I piętro',
                'pano' : '34'
            });
            break;
            break;
        case '36':
            links.push({
                'heading': 350,
                'description' : 'I piętro',
                'pano' : '27'
            });
            links.push({
                'heading': 170,
                'description' : 'I piętro',
                'pano' : '37'
            });
            break;
            break;
        case '37':
            links.push({
                'heading': 150,
                'description' : 'I piętro',
                'pano' : '38'
            });
            links.push({
                'heading': 20,
                'description' : 'I piętro',
                'pano' : '36'
            });
            break;
            break;
        case '38':
            links.push({
                'heading': 350,
                'description' : 'I piętro',
                'pano' : '37'
            });
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '39'
            });
            break;
            break;
        case '39':
            links.push({
                'heading': 350,
                'description' : 'I piętro',
                'pano' : '38'
            });
            links.push({
                'heading': 180,
                'description' : 'I piętro',
                'pano' : '40'
            });
            break;
            break;
        case '40':
            links.push({
                'heading': 350,
                'description' : 'I piętro',
                'pano' : '39'
            });
            links.push({
                'heading': 180,
                'description' : 'I piętro',
                'pano' : '41'
            });
            break;
            break;
        case '41':
            links.push({
                'heading': 350,
                'description' : 'I piętro',
                'pano' : '40'
            });
            links.push({
                'heading': 180,
                'description' : 'I piętro',
                'pano' : '3'
            });
            break;
            break;
        case '3':
            links.push({
                'heading': 280,
                'description' : 'I piętro',
                'pano' : '2'
            });
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '4'
            });
            links.push({
                'heading': 360,
                'description' : 'I piętro',
                'pano' : '41'
            });
            break;
            break;
        case '4':
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '5'
            });
            links.push({
                'heading': 0,
                'description' : 'I piętro',
                'pano' : '24'
            });
            links.push({
                'heading': 270,
                'description' : 'I piętro',
                'pano' : '3'
            });
            break;
            break;

        case '5':
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '6'
            });
            links.push({
                'heading': 270,
                'description' : 'I piętro',
                'pano' : '4'
            });

            break;
            break;
        case '24':
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '4'
            });
            links.push({
                'heading': 270,
                'description' : 'I piętro',
                'pano' : '25'
            });
            break;
            break;
        case '25':
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '24'
            });
            links.push({
                'heading': 270,
                'description' : 'I piętro',
                'pano' : '26'
            });
            break;
            break;
        case '26':
            links.push({
                'heading': 90,
                'description' : 'I piętro',
                'pano' : '26'
            });
            links.push({
                'heading': 290,
                'description' : 'I piętro',
                'pano' : '27'
            });
            break;
            break;
        case '2':
            links.push({
                'heading': 65,
                'description' : 'I piętro',
                'pano' : '3'
            });
            links.push({
                'heading': 180,
                'description' : 'I piętro',
                'pano' : '1'
            });
            break;
            break;
        case '1':
            links.push({
                'heading': 234,
                'description' : 'I piętro',
                'pano' : '2'
            });
            break;
            break;
        default:
          return;
    }
}