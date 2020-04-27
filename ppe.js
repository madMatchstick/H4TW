//jlgred88 account
mapboxgl.accessToken = 'pk.eyJ1IjoiamxncmVkODgiLCJhIjoiY2l0a2ZlZ3RhMGFyaTJubzNhaGF2emR4diJ9.H-hgfgmsmIoJoPNaWF5LKw';

//Light Canvas
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jlgred88/cjaw9t1bs9ca42spvoe4jjloj', 

    zoom: 4.36,
    //minZoom:11,
   // maxZoom:19.5, 
    hash: true,
    center: [-455.870,34.476],
});



//Create vectors for menu items
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input'); 


//BaseMap Switch
function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/jlgred88/' + layerId);
    $('.layer-off').prop('checked', false);
    $('.layer-on').prop('checked', true);
}
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
} 

map.on('style.load', function () {



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD SOURCE----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

     
     map.addSource('ppe_usa', {
        type: 'vector',
        url: 'mapbox://jlgred88.a8s2fsrs'    //H4TW_PPE_USA-2sys14  -122.3,29.7,-72.7,41.6
    });
    
     map.addSource('ppe_asia', {
        type: 'vector',
        url: 'mapbox://jlgred88.1nrm5j5w'    //H4TW_PPE_ASIA2-04m6bw  79.0,-33.7,151.0,35.8
    });

     map.addSource('ppe_africa', {
        type: 'vector',
        url: 'mapbox://jlgred88.2hmwio7l'    //H4TW_PPE_AFRICA-8qx4id   -1.8,-26.0,38.8,9.0
    });

     map.addSource('ppe_samerica', {
        type: 'vector',
        url: 'mapbox://jlgred88.1fesw15b'    //H4TW_PPE_SOUTHAMERICA-8jity2   -102.6,-38.4,-63.6,23.6
    });

/*
    
     map.addSource('nVal', {
      type: 'geojson',
      "data": 'nval.geojson'

        //type: 'vector',
        //url: 'mapbox://jlgred88.66gn81xe'   //flo2d_Nval-8p5ttb   
    });
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD MAP LAYER------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    map.addLayer({
      'id': 'ppe_usa',
      'source': 'ppe_usa',
      'source-layer': 'H4TW_PPE_USA-2sys14',
      //'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Colfax Central']],
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 4], [15, 8], [17, 14]]
               }, 
            "circle-color": "#FF0000",
            'circle-stroke-color': '#eee',
            'circle-stroke-width': {
               "stops": [[12, 2], [15, 4], [17, 8]]
               }, 
      }
  }, 'road-label-small');

    map.addLayer({
      'id': 'ppe_asia',
      'source': 'ppe_asia',
      'source-layer': 'H4TW_PPE_ASIA2-04m6bw',
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 4], [15, 8], [17, 14]]
               }, 
            "circle-color": "#FF0000",
            'circle-stroke-color': '#eee',
            'circle-stroke-width': {
               "stops": [[12, 2], [15, 4], [17, 8]]
               }, 
      }
  }, 'road-label-small');

    map.addLayer({
      'id': 'ppe_africa',
      'source': 'ppe_africa',
      'source-layer': 'H4TW_PPE_AFRICA-8qx4id',
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 4], [15, 8], [17, 14]]
               }, 
            "circle-color": "#FF0000",
            'circle-stroke-color': '#eee',
            'circle-stroke-width': {
               "stops": [[12, 2], [15, 4], [17, 8]]
               }, 
      }
  }, 'road-label-small');

    map.addLayer({
      'id': 'ppe_samerica',
      'source': 'ppe_samerica',
      'source-layer': 'H4TW_PPE_SOUTHAMERICA-8jity2',
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 4], [15, 8], [17, 14]]
               }, 
            "circle-color": "#FF0000",
            'circle-stroke-color': '#eee',
            'circle-stroke-width': {
               "stops": [[12, 2], [15, 4], [17, 8]]
               }, 
      }
  }, 'road-label-small');

});






    map.on('click', function(e) {
        
       var featureList = map.queryRenderedFeatures(e.point, { layers: ['ppe_samerica', 'ppe_usa', 'ppe_africa', 'ppe_asia'] });
          if (!featureList.length) {
          return;
          }

      var feature = featureList[0];
      var id = feature.layer.id;


/*      if (id == 'ppe_samerica'){
        var popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              '<b>' + feature.properties.Company Name + '</b> <br/>' +
              '<b>'+ 'Email: ' + '</b>' + feature.properties.Email + '</b> <br/>' +
              '<b>'+ 'Ph: ' + '</b>' + feature.properties.Phone number + '</b> <br/>' +
              '<b>'+ 'PoC: ' + '</b>' + feature.properties.Person of contact )
            .addTo(map);
      }*/

      if (id == 'ppe_africa'){
        var popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<b>'+'Email: ' + '</b>' + feature.properties.Email)
            .addTo(map);
      }
/*
      if (id == 'ppe_asia'){
        var popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<b>'+'Company: ' + '</b>' + feature.properties.What company do you represent? )
            .addTo(map);
      }

      if (id == 'ppe_usa'){
        var popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<b>'+'Company: ' + '</b>' + feature.properties.Company Name )
            .addTo(map);
      }*/
          });


    map.on('mousemove', function (e) {
    var featureList = map.queryRenderedFeatures(e.point, { layers: ['ppe_samerica', 'ppe_usa', 'ppe_africa', 'ppe_asia'] });
    map.getCanvas().style.cursor = (featureList.length) ? 'pointer' : '';
    });

        


//define clear button layers
$(document).ready(function() {
    $("#clear").click(function() {
        var checkBoxes = $("input[type=checkbox]");
        checkBoxes.prop("checked", false);
        map.setLayoutProperty('ppe_africa','visibility', 'none');
        map.setLayoutProperty('ppe_asia','visibility', 'none');
        map.setLayoutProperty('ppe_samerica','visibility', 'none');
        map.setLayoutProperty('ppe_usa','visibility', 'none');
       });
});






document.getElementById('zoom_asia').addEventListener('click', function() {

  var bbox = [[79.0,-33.7], [151.0,35.8]];
  map.fitBounds(bbox, { padding:2 }); 

});

document.getElementById('zoom_usa').addEventListener('click', function() {

  var bbox = [[-122.3,29.7], [-72.7,41.6]];
  map.fitBounds(bbox, { padding:2 });

});

document.getElementById('zoom_africa').addEventListener('click', function() {

  var bbox = [[-1.8,-26.0], [38.8,9.0]];
  map.fitBounds(bbox, { padding:2 }); 

});

document.getElementById('zoom_samerica').addEventListener('click', function() {

  var bbox = [[-102.6,-38.4], [-63.6,23.6]];
  map.fitBounds(bbox, { padding:2 });

});


map.addControl(new mapboxgl.NavigationControl(), 'top-right');
