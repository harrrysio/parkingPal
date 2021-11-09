let myMap;
let canvas;
let latitude;
let parkingData;
let latlon;
let status;

const mappa = new Mappa('Leaflet');
const options = {
  lat: 37.75,
  lng: -122.42,
  zoom: 13,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


function setup() {
  canvas = createCanvas(428, 926);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)

  fill(200, 100, 100);

  // Only redraw the point when the map changes and not every frame.
  // myMap.onChange(drawPoint);

  loadJSON('https://data.sfgov.org/resource/8vzz-qzz9.json', gotData);


}

function gotData(data) {
  parkingData = data;

}




function draw() {

  clear();

  if (parkingData) {
    for (var i = 0; i < parkingData.length; i++) {
      let latlon = parkingData[i].shape.coordinates
      let status = parkingData[i].active_meter_flag
      console.log(latlon);
      console.log(status);
      const nigeria = myMap.latLngToPixel(latlon[1], latlon[0]);
      if (status === 'M'){
        fill(0,255,0);
      }
      else if (status === 'T'){
        fill(255,0,0);
      }

      else if (status === 'U'){
        fill(0,0,255);
      }

      ellipse(nigeria.x, nigeria.y, 5, 5);
    }

  }


}
