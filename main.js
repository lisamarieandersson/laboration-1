window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLParagraphElement} h-tag för att ändra rubriken i varje scen */
let headline;
/** @type {HTMLParagraphElement} p-tag för att ändra texten i varje scen */
let text;
/** @type {HTMLButtonElement} val 1 i alla scener */
let button1; 
/** @type {HTMLButtonElement} val 2 i alla scener utom slutscen 2 */
let button2; 

/**
 * Här startar programmet
 */
function main() {
  loadHtmlElements();
  loadStartScene();
}
/**
 * Här laddas alla html-element
 */
function loadHtmlElements() {
  headline = document.getElementById('headline');
  text = document.getElementById('text');
  button1 = document.getElementById('opt-1');
  button2 = document.getElementById('opt-2');
}

/**
 * Funktionen ska... Syfte... 
 */
function loadStartScene() {
  headline.textContent = `Hello and welcome!`;
  text.textContent = `In this world you are faced with different scenarios
    in the novel Station Eleven by Emily St. John Mandel.
    Where do you want to go? And what choices do you want to make?`;
  
  button1.textContent = "Go to the theater";
  button1.onclick = loadTheaterScene;
  
  button2.textContent = "Go to Severn City Airport";
  button2.onclick = loadSevernCityAirportScene;
  button2.classList.remove('hidden');
}

/**
 * Funktionen ska... Syfte...
 */
function loadTheaterScene() {
  document.body.style.backgroundImage = "url(./images/doctoreleven.jpeg)";

  headline.textContent = `Hello and welcome!`;

  text.textContent = `You've now entered the theater to watch King Lear. 
    During the play your sister Siya texts you that a deadly flu is coming to your town. 
    Where do you want to move next?`;

  button1.textContent = "Go to the grocery store";
  button1.onclick = loadGroceryStoreScene;
  
  button2.textContent = "Go to your brother Frank's apartment";
  button2.onclick = loadEndSceneTwo;
}

/**
 * Funktionen ska... Syfte... 
 */
function loadGroceryStoreScene() {
  document.body.style.backgroundImage = "url('./images/galaxystationeleven.jpeg')";

  headline.textContent = `Hello!`;

  text.textContent = `You've now gone to the grocery store. 
    You decide to fill 10 carts with groceries. 
    Where do you want to move next?`;
  
  button1.textContent = "Go to your brother Frank's apartment";
  button1.onclick = loadEndSceneTwo;
  
  button2.textContent = "Take the subway alone to your apartment";
  button2.onclick = loadEndSceneOne;
}

function loadSevernCityAirportScene() {
  //document.body.style.backgroundImage = null;

  headline.textContent = `Welcome to Severn City Airport!`;

  text.textContent = ` In the terminal you watch the news report about a deadly flu coming your way. 
    What's your next move?`;
  
  button1.textContent = "Stay at the airport";
  button1.onclick = loadEndSceneTwo;
  
  button2.textContent = "Try to leave";
  button2.onclick = loadEndSceneThree;
}

function loadEndSceneOne() {

  headline.textContent = `:(`;

  text.textContent = `Oh no, you won't make this on your own!`;

  button1.textContent = "Start over";
  button1.onclick = loadStartScene;
  
  button2.textContent = "Go back";
  button2.onclick = loadGroceryStoreScene;
  
}

function loadEndSceneTwo() {
  document.body.style.backgroundImage  = "url(./images/stationeleven.jpeg)";

  headline.textContent = `Yes!`;

  text.textContent = `You survived, you are now safe!`;

  button1.textContent = "Start over";
  button1.onclick = loadStartScene;

  button2.classList.add('hidden');
}

function loadEndSceneThree() {

  headline.textContent = `:(`;

  text.textContent = `Oh no, you won't make this on your own!`;

  button1.textContent = "Start over";
  button1.onclick = loadStartScene;

  button2.textContent = "Go back";
  button2.onclick = loadSevernCityAirportScene;
}
  
