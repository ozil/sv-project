// function getCustomClassPanorama(classId, heading, panoId) {
//     center = new google.maps.LatLng(44.939946, -93.167842);
//     return {
//         location: {
//             pano: panoId,
//             description: "Sala " + classId,
//             latLng: center
//         },
//         links: [],
//         // The text for the copyright control.
//         copyright: '',
//         // panoProvider: getCustomClassPanorama(classId,heading,panoId),
//         // The definition of the tiles for this panorama.
//         tiles: {
//             tileSize: new google.maps.Size(4323, 1712),
//             worldSize: new google.maps.Size(4323, 1712),
//
//             centerHeading: heading,
//             getTileUrl: getCustomPanoramaTileUrl
//         }
//     };
// }

function getCustomPanorama(pano) {

    var center;

    switch (pano) {
        case '6':
            center = new google.maps.LatLng(44.939946, -93.167842);
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
                    // tileSize: new google.maps.Size(566, 566),
                    // worldSize: new google.maps.Size(5660, 2830),

                    centerHeading: 80,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '7':
            return {
                location: {
                    pano: '7',
                    description: "Budynek A - parter",
                    latLng: center
                },
                links: [],
                // The text for the copyright control.
                copyright: '',
                // The definition of the tiles for this panorama.
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    // tileSize: new google.maps.Size(566, 566),
                    // worldSize: new google.maps.Size(5660, 2830),

                    centerHeading: 90,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '5':
            return {
                location: {
                    pano: '5',
                    description: "Budynek A",
                    latLng: center
                },
                links: [],
                copyright: '',
                tiles: {
                    tileSize: new google.maps.Size(4419, 1524),
                    worldSize: new google.maps.Size(4419, 1524),

                    centerHeading: 180,
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
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 70,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '11':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),
                    centerHeading: 50,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '12':

            return {
                location: {
                    pano: pano,
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
        case '13':

            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 300,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '14':

            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 250,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        // case '15':
        //     return {
        //         location: {
        //             pano: pano,
        //             description: "I piętro",
        //             latLng: center
        //         },
        //         tiles: {
        //             tileSize: new google.maps.Size(4140, 1463),
        //             worldSize: new google.maps.Size(4140, 1463),
        //
        //             centerHeading: 210,
        //             getTileUrl: getCustomPanoramaTileUrl
        //         }
        //     };
        //     break;
        case '16':

            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 290,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '17':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 290,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '18':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 220,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '19':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 230,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '20':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 250,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '21':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 280,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '22':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 280,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '23':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 260,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '24':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 290,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '25':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 310,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '26':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 330,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '27':
            return {
                location: {
                    pano: pano,
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
                    pano: pano,
                    description: "Budynek B",
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
                    pano: pano,
                    description: "Budynek B",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading:325,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '30':
            return {
                location: {
                    pano: pano,
                    description: "Budynek B - parter",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 325,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '31':
            return {
                location: {
                    pano: pano,
                    description: "Budynek B - parter",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 290,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '32':
            return {
                location: {
                    pano: pano,
                    description: "Budynek B - parter",
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
        case '33':
            return {
                location: {
                    pano: pano,
                    description: "Budynek B - parter",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 210,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '34':
            return {
                location: {
                    pano: pano,
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
        case '35':
            return {
                location: {
                    pano: pano,
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
        case '36':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 15,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '37':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 360,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '38':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 250,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '39':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 300,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '40':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 300,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '41':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 300,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '3':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 225,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '4':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 200,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '2':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading: 180,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '1':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;
        case '5':
            return {
                location: {
                    pano: pano,
                    description: "I piętro",
                    latLng: center
                },
                tiles: {
                    tileSize: new google.maps.Size(4140, 1463),
                    worldSize: new google.maps.Size(4140, 1463),

                    centerHeading:240,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
            break;


        default:
            return null;
    }
}
