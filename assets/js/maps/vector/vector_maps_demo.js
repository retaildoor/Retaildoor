/* ------------------------------------------------------------------------------
*
*  # Vector maps
*
*  Specific JS code additions for maps_vector.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    // World map
    $('.map-world').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#93D389'
            }
        }
    });


    // Custom markers
    $('.map-world-markers').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        regionStyle: {
            initial: {
                fill: '#D6E1ED'
            }
        },
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
            initial: {
                r: 7,
                'fill': '#336BB5',
                'fill-opacity': 0.8,
                'stroke': '#fff',
                'stroke-width' : 1.5,
                'stroke-opacity': 0.9
            },
            hover: {
                'stroke': '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5
            }
        },
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 2
        },
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [40.726, -111.778], name: 'Salt Lake City'},
            {latLng: [39.092, -94.575], name: 'Kansas City'},
            {latLng: [25.782, -80.231], name: 'Miami'},
            {latLng: [8.967, -79.458], name: 'Panama City'},
            {latLng: [19.400, -99.124], name: 'Mexico City'},
            {latLng: [40.705, -73.978], name: 'New York'},
            {latLng: [33.98, -118.132], name: 'Los Angeles'},
            {latLng: [47.614, -122.335], name: 'Seattle'},
            {latLng: [44.97, -93.261], name: 'Minneapolis'},
            {latLng: [39.73, -105.015], name: 'Denver'},
            {latLng: [41.833, -87.732], name: 'Chicago'},
            {latLng: [29.741, -95.395], name: 'Houston'},
            {latLng: [23.05, -82.33], name: 'Havana'},
            {latLng: [45.41, -75.70], name: 'Ottawa'},
            {latLng: [53.555, -113.493], name: 'Edmonton'},
            {latLng: [-0.23, -78.52], name: 'Quito'},
            {latLng: [18.50, -69.99], name: 'Santo Domingo'},
            {latLng: [4.61, -74.08], name: 'Bogotá'},
            {latLng: [14.08, -87.21], name: 'Tegucigalpa'},
            {latLng: [17.25, -88.77], name: 'Belmopan'},
            {latLng: [14.64, -90.51], name: 'New Guatemala'},
            {latLng: [-15.775, -47.797], name: 'Brasilia'},
            {latLng: [-3.790, -38.518], name: 'Fortaleza'},
            {latLng: [50.402, 30.532], name: 'Kiev'},
            {latLng: [53.883, 27.594], name: 'Minsk'},
            {latLng: [52.232, 21.061], name: 'Warsaw'},
            {latLng: [52.507, 13.426], name: 'Berlin'},
            {latLng: [50.059, 14.465], name: 'Prague'},
            {latLng: [47.481, 19.130], name: 'Budapest'},
            {latLng: [52.374, 4.898], name: 'Amsterdam'},
            {latLng: [48.858, 2.347], name: 'Paris'},
            {latLng: [40.437, -3.679], name: 'Madrid'},
            {latLng: [39.938, 116.397], name: 'Beijing'},
            {latLng: [28.646, 77.093], name: 'Delhi'},
            {latLng: [25.073, 55.229], name: 'Dubai'},
            {latLng: [35.701, 51.349], name: 'Tehran'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
    });


    // Country choropleth map
    $.getJSON('assets/demo_data/maps/vector/unemployment.json', function (data) {

        // Year
        var val = 2009;

        // Values
        statesValues = jvm.values.apply({}, jvm.values(data.states)),
        metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
        metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

        // Configuration
        $('.map-unemployment').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'transparent',
            markers: data.metro.coords,
            markerStyle: {
                initial: {
                    r: 6,
                    'fill-opacity': 0.9,
                    'stroke': '#fff',
                    'stroke-width' : 1.5,
                    'stroke-opacity': 0.95
                },
                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1.5
                }
            },
            series: {
                markers: [
                    {
                        attribute: 'fill',
                        scale: ['#e67d64', '#e0330b'],
                        values: data.metro.unemployment[val],
                        min: jvm.min(metroUnemplValues),
                        max: jvm.max(metroUnemplValues)
                    },
                    {
                        attribute: 'r',
                        scale: [5, 20],
                        values: data.metro.population[val],
                        min: jvm.min(metroPopValues),
                        max: jvm.max(metroPopValues)
                    }
                ],
                regions: [{
                    scale: ['#DEEBF7', '#08519C'],
                    attribute: 'fill',
                    values: data.states[val],
                    min: jvm.min(statesValues),
                    max: jvm.max(statesValues)
                }]
            },

            onMarkerLabelShow: function(event, label, index) {
                label.html(
                    ''+data.metro.names[index]+'<br>'+
                    'Population: '+data.metro.population[val][index]+'<br>'+
                    'Unemployment rate: '+data.metro.unemployment[val][index]+'%'
                );
            },

            onRegionLabelShow: function(event, label, code) {
                label.html(
                    ''+label.html()+'<br>'+
                    'Unemployment rate: '+data.states[val][code]+'%'
                );
            }
        });

        // Draw map
        var mapObject = $('.map-unemployment').vectorMap('get', 'mapObject');
    });


    // Choropleth map
    $('.map-choropleth').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        series: {
            regions: [{
                values: gdpData,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function(e, el, code){
            el.html(el.html()+'<br>'+'GDP - '+gdpData[code]);
        }
    });


    //
    // Regions selection
    //
                                                      

    // Set data
    markers = [
        {latLng: [41.597782, -72.755371], name: 'Connecticut'},
        {latLng: [41.680893, -71.51178], name: 'Rhode Island'},
        {latLng: [42.230171, -71.530106], name: 'Massachusetts'},
        {latLng: [42.165726, -74.948051], name: 'New York'},
        {latLng: [36.116203, -119.681564], name: 'California'},  
        {latLng: [40.298904, -74.521011], name: 'New Jersey'},
        {latLng: [40.590752, -77.209755], name: 'Pennsylvania'}, 
        {latLng: [37.769337, -78.169968], name: 'Virginia'},
        {latLng: [40.150032, -111.862434], name: 'Utah'},
        {latLng: [31.054487, -97.563461], name: 'Texas'},
        {latLng: [35.747845, -86.692345], name: 'Tennessee'},
        {latLng: [32.806671, -86.79113], name: 'Alabama'},
        {latLng: [33.040619, -83.643074], name: 'Georgia'},
        {latLng: [35.630066, -79.806419], name: 'North Carolina'},
        {latLng: [40.388783, -82.764915], name: 'Ohio'},
        {latLng: [27.766279, -81.686783], name: 'Florida'}
    ],
    cityAreaData = [
        12454,
        13407,
        13295,
        12928,
        35049,
        12008,
        23561,
        10818,
        12907,
        11743,
        8846,
        11541,
        10675,
        13639,
        11458,
        24936
    ]

    markers1 = [
        {latLng: [41.597782, -72.755371], name: 'Connecticut'},
        {latLng: [41.680893, -71.51178], name: 'Rhode Island'},
        {latLng: [42.230171, -71.530106], name: 'Massachusetts'},
        {latLng: [42.165726, -74.948051], name: 'New York'},
        {latLng: [36.116203, -119.681564], name: 'California'},  
        {latLng: [40.298904, -74.521011], name: 'New Jersey'},
        {latLng: [40.590752, -77.209755], name: 'Pennsylvania'}, 
        {latLng: [37.769337, -78.169968], name: 'Virginia'},
        {latLng: [40.150032, -111.862434], name: 'Utah'},
        {latLng: [31.054487, -97.563461], name: 'Texas'},
        {latLng: [35.747845, -86.692345], name: 'Tennessee'},
        {latLng: [32.806671, -86.79113], name: 'Alabama'},
        {latLng: [33.040619, -83.643074], name: 'Georgia'},
        {latLng: [35.630066, -79.806419], name: 'North Carolina'},
        {latLng: [40.388783, -82.764915], name: 'Ohio'},
        {latLng: [27.766279, -81.686783], name: 'Florida'}
    ],
    cityAreaData1 = [
        17894184,
        18092790,
        18005774,
        17548356,
        54351736,
        17843407,
        37228079,
        17496271,
        17790919,
        18219491,
        18020757,
        18533046,
        17987043,
        18614665,
        18265172,
        35826232
    ]

    // Configuration
    var map = new jvm.WorldMap({
        container: $('.map-regions'),
        map: 'us_aea_en',
        backgroundColor: 'transparent',
        regionsSelectable: true,
        markersSelectable: true,
        markers: markers,
        markerStyle: {
            initial: {
                'fill': '#E77644',
                'stroke': '#fff',
                'stroke-width' : 1.5,
                'stroke-opacity': 0.9
            },
            hover: {
                'stroke': '#fff',
                'fill-opacity': 1,
                'stroke-width': 1
            },
            selected: {
                'fill': '#CA0020'
            }
        },
        regionStyle: {
            initial: {
                "stroke-width": 1.5,
                'stroke': '#fff',
                'fill': '#00a2ca'
            },
            selected: {
                'fill': '#00a2ca'
            }
        },
        series: {
            markers: [{
                attribute: 'r',
                scale: [5, 15],
                values: cityAreaData
            }]
        },
        onMarkerLabelShow: function(event, label, index) {
                label.html(
                    ''+label.html()+'<br>'+
                    'Traffic: ' + cityAreaData[index]
                );
            },
        onRegionSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map.getSelectedRegions())
                );
            }
        },
        onMarkerSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map.getSelectedMarkers())
                );
            }
        }
    });

    var map1 = new jvm.WorldMap({
        container: $('.map-regions1'),
        map: 'us_aea_en',
        backgroundColor: 'transparent',
        regionsSelectable: true,
        markersSelectable: true,
        markers: markers1,
        markerStyle: {
            initial: {
                'fill': '#E77644',
                'stroke': '#fff',
                'stroke-width' : 1.5,
                'stroke-opacity': 0.9
            },
            hover: {
                'stroke': '#fff',
                'fill-opacity': 1,
                'stroke-width': 1
            },
            selected: {
                'fill': '#CA0020'
            }
        },
        regionStyle: {
            initial: {
                "stroke-width": 1.5,
                'stroke': '#fff',
                'fill': '#00a2ca'
            },
            selected: {
                'fill': '#00a2ca'
            }
        },
        series: {
            markers: [{
                attribute: 'r',
                scale: [5, 15],
                values: cityAreaData1
            }]
        },
        onMarkerLabelShow: function(event, label, index) {
                label.html(
                    ''+label.html()+'<br>'+
                    'Sales: $' + cityAreaData1[index]
                );
            },
        onRegionSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map1.getSelectedRegions())
                );
            }
        },
        onMarkerSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map1.getSelectedMarkers())
                );
            }
        }
    });

    // Set regions
    map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
    map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );
    map1.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
    map1.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );

});
