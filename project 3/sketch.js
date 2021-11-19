let myMap;
let canvas;
let latitude;
let parkingData;
let latlon;
let status;
var mapx = 0, mapy = 0, mx = 0, my = 0;
var strName = "";
var showText = false;
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
      let streetName = parkingData[i].street_name
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
      ellipse(nigeria.x, nigeria.y, 15, 15);
        if(showText){
          textSize(35);
    text(strName, mx, my);
  }
          if(mouseX >= nigeria.x && mouseX <= nigeria.x + 15  && mouseY >= nigeria.y && mouseY <= nigeria.y + 15 && !showText){
  // fill('black');
            // textSize(35);
            // print(streetName);
            mapx = nigeria.x
            mapy = nigeria.y
            strName = streetName;
}
    }
  }
}
function mousePressed() {
            if(mouseX >= mapx && mouseX <= mapx + 15  && mouseY >= mapy && mouseY <= mapy + 15){
              mx = mapx;
              my = mapy;
              showText = !showText
            }
}
