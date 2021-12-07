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
  lat: 37.77,
  lng: -122.405,
  zoom: 18,
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
rect(30, 20, 55, 55);

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
      const point = myMap.latLngToPixel(latlon[1], latlon[0]);
      if (status === 'M'){
        fill(0,255,0);
      }
      else if (status === 'T'){
        fill(255,0,0);
      }
      else if (status === 'U'){
        fill(0,0,255);
      }
      ellipse(point.x, point.y, 15, 15);
        if(showText){
          fill(0);
          textSize(35);
          text = createA('http://www.google.com/maps/place/' + latlon[1] + "," + latlon[0], strName);
    // text(strName, mx, my);
         text.position(mx, my);
  }
          if(mouseX >= point.x && mouseX <= point.x + 15  && mouseY >= point.y && mouseY <= point.y + 15 && !showText){
  // fill('black');
            // textSize(35);
            // print(streetName);
            mapx = point.x
            mapy = point.y
            strName = streetName;
}
    }
  }
}
function touchStarted() {
            if(mouseX >= mapx && mouseX <= mapx + 15  && mouseY >= mapy && mouseY <= mapy + 15){
              mx = mapx;
              my = mapy;
              showText = !showText
            }
}


// fill(0);
// textSize(35);
// let text = createA('http://p5js.org/', strName);
// text.position(mx, my);
