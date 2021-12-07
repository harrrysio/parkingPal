

let input, button, greeting, button2;
let startPage;
let intro1, intro2, intro3;
let stage = 0;

function preload(){
  startPage = loadImage('assets/startPage.png');
  intro1 = loadImage('assets/intro1.png');
  intro2 = loadImage('assets/intro2.png');
  intro3 = loadImage('assets/intro3.png');
  searchPage = loadImage('assets/searchPage.png');
  // home = loadImage('assets/home.png');
  // search = loadImage('assets/search.png');
  // list = loadImage('assets/list.png');
  // profile = loadImage('assets/profile.png');
}

function setup() {

  // create canvas
  canvas = createCanvas(428, 926);
  image(startPage, 0, 0);

}

function draw(){

  if (stage==1){
    image(intro1, 0, 0);

  }
  if (stage==2){
    image(intro2, 0, 0);
  }
  if (stage==3){
    image(intro3, 0, 0);
  }
  if (stage==4){
    image(searchPage, 0, 0);
    input = createInput().attribute('placeholder', 'Search for places');
    input.position(23, 486);
    input.size(376,60);
    input.style('font-size', '20px');

    button = createButton('submit');
    button.position(142, 573);
    button.size(143, 35);
    button.style('font-size', '15px');
    button.mousePressed(openSearchResult);
    button.style('border', 'none');
    button.style('border-radius', '5px');
    button.style('background-color', '#4275A9');
    button.style('color', 'white');



    fill(255);
    noStroke();
    rect(0,862,428,64);
    homeButton = createImg('assets/home_S.png', 'home');
    homeButton.position(32,871);
    homeButton.mousePressed(openMap);

    searchButton = createImg('assets/search.png', 'search');
    searchButton.position(138,871);
    searchButton.mousePressed(openMap);


    listButton = createImg('assets/list.png', 'list');
    listButton.position(244,871);
    listButton.mousePressed(openList);

    profileButton = createImg('assets/profile.png', 'profile');
    profileButton.position(350,871);
    profileButton.mousePressed(openProfile);






  }

}


function mousePressed(){
  stage = stage + 0.5;
}


function openSearchResult() {

  if (input.value()==='8th street'){
    window.open("8thstreet.html","_self")
  }

}

function openMap() {


    // window.open("map.html","_self")


}

function openProfile() {


    window.open("profile.html","_self")
  }


  function openList() {


      window.open("textMap.html","_self")


  }
