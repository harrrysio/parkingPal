


function preload(){

loadJSON('https://data.sfgov.org/resource/8vzz-qzz9.json', gotData);
function gotData(data) {
  parkingData = data;

  parkingList = loadImage('assets/parkingList.png');
}




}



function setup() {

  createCanvas(428, 926);

  image(parkingList,0,0);

  let yx=206;
  let yy=200;
    for (var i = 0; i <= 100; i++) {
      // let latlon = parkingData[i].shape.coordinates
      status = parkingData[i].active_meter_flag



      if (status === 'M'){
         fill('#FFFFFF');
         noStroke();
         rect(50, yx-35, 340, 55, 5);
         fill(0);

         textSize(20);
         text(parkingData[i].street_name, 57, yx);



        fill(0,255,0);

        ellipse(339, yy, 37, 37);
        yy+=70;
        yx+=70;

    }

}

fill(255);
noStroke();
rect(0,862,428,64);

homeButton = createImg('assets/home.png', 'home');
homeButton.position(32,871);
homeButton.mousePressed(openMap);

searchButton = createImg('assets/search.png', 'search');
searchButton.position(138,871);
searchButton.mousePressed(openSearch);


listButton = createImg('assets/list_S.png', 'list');
listButton.position(244,871);
listButton.mousePressed(openList);

profileButton = createImg('assets/profile.png', 'profile');
profileButton.position(350,871);
profileButton.mousePressed(openProfile);

}


function draw() {
}

function openMap() {


    window.open("map.html","_self")


}

function openList() {


    window.open("map.html","_self")


}

function openProfile() {


    window.open("profile.html","_self")


}

function openSearch() {


    window.open("search.html","_self")


}
