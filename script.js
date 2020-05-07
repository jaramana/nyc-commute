// Fetch lanes data from our Glitch project
var vzv_tcst = fetch('https://data.cityofnewyork.us/resource/hiik-hmf3.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  });



// Once both have loaded, do some work with them
Promise.all([vzv_tcst])
  .then(function (fetchedData) {
    console.log('Both datasets have loaded');
    // Unpack the data from the Promise
	var vzv_tcst = fetchedData[1];

  
  

// get color depending on population density value
function getColor(d) {
return d > 80  ? '#084594' :
	   d > 40  ? '#2171b5' :
	   d > 20  ? '#4292c6' :
	   d > 10  ? '#6baed6' :
	   d > 5  ? '#9ecae1' :
	   d > 2.5   ? '#c6dbef' :
	   d > 0   ? '#deebf7' :
				  '#ffffff';
}



function getColor_maj(d) {
        return d === 'Car, truck, or van'  ? "#fca697" :
		       d === 'Walked'  ? '#c9e8a8' :
			   d === 'Public transportation'  ? '#a6c8db' :
			   d === 'Work at Home'  ? '#fbfcb5' :
                            "#ffffff";
    }



function getColor_time(d) {
return d > 60  ? '#cb181d' :
	   d > 50  ? '#ef3b2c' :
	   d > 45  ? '#fb6a4a' :
	   d > 35  ? '#fc9272' :
	   d > 15  ? '#fcbba1' :
	   d > 0   ? '#fee5d9' :
				  '#ffffff';
}




function getColor_Subway_Lines(d) {
return  d === 'A'  ? '#0039A6' :
		d === 'C'  ? '#0039A7' :
		d === 'E'  ? '#0039A8' :
		d === 'B'  ? '#FF6319' :
		d === 'D'  ? '#FF6320' :
		d === 'F'  ? '#FF6321' :
		d === 'M'  ? '#FF6322' :
		d === 'G'  ? '#6CBE45' :
		d === 'J'  ? '#996633' :
		d === 'Z'  ? '#996634' :
		d === 'L'  ? '#A7A9AC' :
		d === 'N'  ? '#FCCC0A' :
		d === 'Q'  ? '#FCCC0A' :
		d === 'R'  ? '#FCCC0A' :
		d === 'S'  ? '#808183' :
		d === '1'  ? '#EE352E' :
		d === '2'  ? '#EE352E' :
		d === '3'  ? '#EE352E' :
		d === '4'  ? '#00933C' :
		d === '5'  ? '#00933C' :
		d === '6'  ? '#00933C' :
		d === '7'  ? '#B933AD' :
					'#ffffff';
}




///////////////////////////////////////////////////////////////////////////////////
var Majority;   
   function style_Majority(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_maj(feature.properties.ACS_17_5YR_S0801_Majority),
		fillOpacity: .7,
 		fillColor: getColor_maj(feature.properties.ACS_17_5YR_S0801_Majority),
      };
    }
    Majority = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Majority,
    });
// Add popups to the layer
Majority.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Majority, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
var Car_Alone;

    function style_Car_Alone(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC04),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC04),
      };
    }
    Car_Alone = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Car_Alone,
	  interactive: false,
    });
// Add popups to the layer
Car_Alone.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_English, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Carpool;

    function style_Carpool(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC05),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC05),
      };
    }
    Carpool = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Carpool,
	  interactive: false,
    });
// Add popups to the layer
Carpool.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Spanish, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Public;

    function style_Public(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC10),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC10),
      };
    }
    Public = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Public,
	  interactive: false,
    });
// Add popups to the layer
Public.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_French, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Walked;

    function style_Walked(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC11),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC11),
      };
    }
    Walked = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Walked,
	  interactive: false,
    });
// Add popups to the layer
Walked.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_French_C, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
var Bicycle;

    function style_Bicycle(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC12),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC12),
      };
    }
    Bicycle = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Bicycle,
	  interactive: false,
    });
// Add popups to the layer
Bicycle.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Native, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Taxi_other;

    function style_Taxi_other(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC13),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC13),
      };
    }
    Taxi_other = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Taxi_other,
	  interactive: false,
    });
// Add popups to the layer
Taxi_other.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hungarian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
var Home;

    function style_Home(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC14),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC14),
      };
    }
    Home = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Home,
	  interactive: false,
    });
// Add popups to the layer
Home.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Arabic, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Time;

    function style_Time(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_time(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC55),
        fillOpacity: .7,
 		fillColor: getColor_time(feature.properties.ACS_17_5YR_S0801_HC01_EST_VC55),
      };
    }
    Time = L.geoJson(ACS_17_5YR_S0801_MT, {
      style: style_Time,
	  interactive: false,
    });
// Add popups to the layer
Time.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hebrew, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Subway_Lines;

    function style_Subway_Lines(feature) {
      return {
        weight: 2.2,
        opacity: 1,
        color: getColor_Subway_Lines(feature.properties.rt_symbol),
      };
    }
    Subway_Lines = L.geoJson(Subway_Lines_Geo, {
      style: style_Subway_Lines,
	  interactive: false,
    });
// Add popups to the layer
Subway_Lines.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Subway_Lines, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Bus_Routes;

    function style_Bus_Routes(feature) {
      return {
        weight: 1.7,
        opacity: .7,
        color: "#1d59b3",
      };
    }
    Bus_Routes = L.geoJson(Bus_Routes_Geo, {
      style: style_Bus_Routes,
	  interactive: false,
    });
// Add popups to the layer
Bus_Routes.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Bus_Routes, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Ferry_Routes;

    function style_Ferry_Routes(feature) {
      return {
        weight: 1.5,
        opacity: 1,
        color: "#90ee90",
      };
    }
    Ferry_Routes = L.geoJson(Ferry_Routes_Geo, {
      style: style_Ferry_Routes,
	  interactive: false,
    });
// Add popups to the layer
Ferry_Routes.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Ferry_Routes, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Bicycle_Lanes;

    function style_Bicycle_Lanes(feature) {
      return {
        weight: 1,
        opacity: .8,
        color: "#FFC0CB",
      };
    }
    Bicycle_Lanes = L.geoJson(Bicycle_Lanes_Geo, {
      style: style_Bicycle_Lanes,
	  interactive: false,
    });
// Add popups to the layer
Bicycle_Lanes.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Bicycle_Lanes, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [40.715, -74.1],
	zoom: 11,
	minZoom: 10,
	maxZoom: 19,
};


var map = L.map('map', mapOptions);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

Majority.addTo(map);

L.control.zoom({
     position:'topright'
}).addTo(map);



var legend = L.control({ position: "bottomright" });
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Percent</h6>'],
		grades = [100, 80, 40, 20, 10, 5, 2.5, 0],
        labels = ["80% +", "40% - 80%", "20% - 40%", "10% - 20%", "5% - 10%", "2.5% - 5%", ".01% - 2.5%", "0%"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};



var legend_maj = L.control({position: 'bottomright'});
    legend_maj.onAdd = function (map) {

var div_maj = L.DomUtil.create('div', 'info legend');
    labels_fac = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Majority</h6>'],
    categories_maj = ['Car, truck, or van',
					  'Public transportation',
					  'Walked',
					  'Work at Home'
					  ]
	,
    labels_maj = ['Car, truck, or van',
					  'Public transportation',
					  'Walked',
					  'Work at Home'
					  ];
    for (var i = 0; i < categories_maj.length; i++) {
            div_maj.innerHTML += 
            labels_fac.push(
                '<i style="background:' + getColor_maj(categories_maj[i]) + '"></i> ' +
                (labels_maj[i] ? labels_maj[i] + '<br>' : '+'));
        }
        div_maj.innerHTML = labels_fac.join('');
    return div_maj;
};legend_maj.addTo(map);



var legend_time = L.control({ position: "bottomright" });
legend_time.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Minutes</h6>'],
		grades = [99999, 60, 50, 45, 35, 15, 0],
        labels = ["60 +", "50 - 60", "45 - 50", "35 - 45", "15 - 35", "1 - 15", "0"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor_time(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};



legend_maj.addTo(map);
currentLegend = legend_maj;


map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === 'Majority Means of Transportation') {
        map.removeControl(currentLegend );
        currentLegend = legend_maj;
        legend_maj.addTo(map);
		Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();
		Bicycle_Lanes.bringToFront();
    }
    else if  (eventLayer.name === 'Car, Truck, or Van - Alone') {
        map.removeControl(currentLegend );
        currentLegend = legend;
        legend.addTo(map);
		Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();	
		Bicycle_Lanes.bringToFront();		
    }
    else if  (eventLayer.name === 'Car, Truck, or Van - Carpool') {
       map.removeControl(currentLegend );
        currentLegend = legend;
        legend.addTo(map);
		Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();	
		Bicycle_Lanes.bringToFront();		
    }
    else if  (eventLayer.name === 'Public transportation') {
       map.removeControl(currentLegend );
        currentLegend = legend;
        legend.addTo(map);
	    Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();	
		Bicycle_Lanes.bringToFront();		
    }
    else if  (eventLayer.name === 'Walked') {
       map.removeControl(currentLegend );
        currentLegend = legend;
       legend.addTo(map);
	   Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();	  
		Bicycle_Lanes.bringToFront();		
    }
    else if  (eventLayer.name === 'Bicycle') {
       map.removeControl(currentLegend );
        currentLegend = legend;
       legend.addTo(map);
	   Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();
		Bicycle_Lanes.bringToFront();
    }
    else if  (eventLayer.name === 'Taxi, Motorcycle, or Other means') {
       map.removeControl(currentLegend );
        currentLegend = legend;
       legend.addTo(map);
	   Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();
		Bicycle_Lanes.bringToFront();
    }
    else if  (eventLayer.name === 'Worked at Home') {
       map.removeControl(currentLegend );
        currentLegend = legend;
       legend.addTo(map);
	   Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();
		Bicycle_Lanes.bringToFront();
    }
    else if  (eventLayer.name === 'Average Travel Time') {
       map.removeControl(currentLegend );
        currentLegend = legend_time;
       legend_time.addTo(map);
	   Subway_Lines.bringToFront();
		Bus_Routes.bringToFront();
		Bicycle_Lanes.bringToFront();
    }
  })
  



var underlays = {
	"Majority Means of Transportation": Majority,
	"Car, Truck, or Van - Alone": Car_Alone,
	"Car, Truck, or Van - Carpool": Carpool,
	"Public transportation": Public,
	"Walked": Walked,
	"Bicycle": Bicycle,
	"Taxi, Motorcycle, or Other means": Taxi_other,
	"Worked at Home": Home,
	"Average Travel Time": Time
};



var overlays = {
	"Subway Lines": Subway_Lines,
	"Bus Routes": Bus_Routes,
	"Ferry Routes": Ferry_Routes,
	"Bicycle Lanes": Bicycle_Lanes
};






 var sidebar = L.control.sidebar({
    autopan: false,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map).open('home');

  

  
  
//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(underlays, overlays, {position: "topright",collapsed: false}).addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
//$(".leaflet-control-layers-list").before("<h6>Languages Spoken at Home</h6>");
  });



var popupTemplate_Majority = document.querySelector('.popupTemplate_Majority').innerHTML;
var popupTemplate_Majority_woE = document.querySelector('.popupTemplate_Majority_woE').innerHTML;
var popupTemplate_Majority_woES = document.querySelector('.popupTemplate_Majority_woES').innerHTML;