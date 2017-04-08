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