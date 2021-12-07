let stage = 0;
let input;

function preload(){
  signUp = loadImage('assets/signUp.png');
  registered = loadImage('assets/registered.png');
}

function setup() {

  // create canvas
  canvas = createCanvas(428, 926);
  // image(signUp, 0, 0);


 //  input = createInput();
 // input.position(20, 65);
 //
 // button = createButton('submit');
 // button.position(input.x + input.width, 65);
 // button.mousePressed(greet);
 image(signUp, 0, 0);
 input1 = createInput().attribute('placeholder', 'Full name');
 input1.position(131, 483);
 input1.size(255,45);
 input1.style('font-size', '20px');



 input2 = createInput().attribute('placeholder', 'Add work place');
 input2.position(131, 558);
 input2.size(255,45);
 input2.style('font-size', '20px');

 input3 = createInput().attribute('placeholder', 'Add saved places');
 input3.position(131, 633);
 input3.size(255,45);
 input3.style('font-size', '20px');

 input4 = createInput().attribute('placeholder', 'Email');
 input4.position(131, 708);
 input4.size(255,45);
 input4.style('font-size', '20px');





 button = createButton('Sign up');
 button.position(41, 774);
 button.size(345, 62);
 button.style('border', 'none');
 button.style('border-radius', '5px');
 button.style('font-size', '25px');
 button.style('background-color', '#4275A9');
 button.style('color', 'white');

 button.mouseClicked(goaway)

 fill(255);
 noStroke();
 rect(0,862,428,64);

 homeButton = createImg('assets/home.png', 'home');
 homeButton.position(32,871);
 homeButton.mousePressed(openMap);

 searchButton = createImg('assets/search.png', 'search');
 searchButton.position(138,871);
 searchButton.mousePressed(openSearch);


 listButton = createImg('assets/list.png', 'list');
 listButton.position(244,871);
 listButton.mousePressed(openList);

 profileButton = createImg('assets/profile_S.png', 'profile');
 profileButton.position(350,871);
 profileButton.mousePressed(openProfile);



}

function draw(){


}

function goaway(){

  button.hide();
  input1.hide();
  input2.hide();
  input3.hide();
  input4.hide();
  const name = input1.value();
  const workplace = input2.value();
  const savedplace = input3.value();
  const email = input4.value();

  fullName = createElement('h2', name);
  fullName.style('color', '#4275A9');
  fullName.position(140, 470);




  workPlace = createElement('h2', workplace);
  workPlace.style('color', '#4275A9');
  workPlace.position(140, 550);

  savedPlace = createElement('h2', savedplace);
  savedPlace.style('color', '#4275A9');
  savedPlace.position(140, 630);

  emailID = createElement('h2', email);
  emailID.style('color', '#4275A9');
  emailID.position(140, 700);

  button = createButton('Edit profile');
  button.position(41, 774);
  button.size(345, 62);
  button.style('border', 'none');
  button.style('border-radius', '5px');
  button.style('font-size', '25px');
  button.style('background-color', '#4275A9');
  button.style('color', 'white');


  fullNameTop = createElement('h2', name);
  fullNameTop.style('color', '#FFFFFF');
  fullNameTop.position(160, 101);


}
















function mousePressed(){
  stage = stage + 0.5;
}

// function openSearch() {
//
//   if (input.value()==='8th street'){
//     window.open("8thstreet.html","_self")
//   }
//
// }

function openMap() {


    // window.open("map.html","_self")


}

function openList() {


    window.open("textMap.html","_self")


}

function openProfile() {


    window.open("profile.html","_self")


}

function openSearch() {


    // window.open("search.html","_self")


}

// function greeting(){
//   greeting = createElement('h2', 'what is your name?');
//   greeting.position(20, 5);
// }
