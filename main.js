window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLHeadingElement} h3-tag för att ändra rubriken i varje scen */
let headline;
/** @type {HTMLParagraphElement} p-tag för att ändra texten i varje scen */
let text;
/** @type {HTMLButtonElement} val 1 i alla scener */
let button1; 
/** @type {HTMLButtonElement} val 2 i alla scener utom förstasidan, Dr. Eleven-sidan och slutscen 2 */
let button2; 

/**
* Här startar programmet 
*/
function main() {
  loadHtmlElements();
  loadFirstPage();
}
/**
 * I denna funktion laddas alla html-element som används på sidan
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
function loadFirstPage() {
  headline.textContent = `Hello and welcome!`;
  text.textContent = `In this world you are faced with some different scenarios in the beginning of the novel Station Eleven by Emily St. John Mandel. 
    
    In Station Eleven the world as we know it begins to dissolve, as a devastating flu takes over the world.`; 
  
  button1.textContent = "Continue";
  button1.onclick = loadDrEleven; 

  button2.classList.add('hidden');
}

function loadDrEleven() {
  headline.textContent = `Dr. Eleven`;
  text.textContent = `Within the main story, one of the remains from the collapsed world is a graphic novel titled Station Eleven.
  
    It tells the story of the spaceman Dr. Eleven who lives on a space station that resembles earth with all it's challenges and dangers in life.`; 
  
  button1.textContent = "Ok, Start!";
  button1.onclick = loadStartScene; 

  button2.classList.add('hidden');
}

/**
 * Funktionen ska... Syfte... 
 */
 function loadStartScene() {
  headline.textContent = `Hello, you are now entering Station Eleven!`;
  text.textContent = `Where do you want to go? 
  
  And what choices do you want to make?`;
  
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

  headline.textContent = `The Theater`;

  text.textContent = `You've entered the theater this evening to watch a performance of Shakespeare's King Lear. 

    During the performance the leading actor Arthur has a heart attack. You run up on the stage and try to help. Unfortunately you can't save him.
    
    Afterwards everything is in chaos. You go outside and you see one of the actors standing alone, looking shocked. 
    
    What's your next move?`;

  button1.textContent = "Take the subway home";
  button1.onclick = loadTheSubwayScene;
  
  button2.textContent = "Talk to the actor";
  button2.onclick = loadTheActorScene;
  button2.classList.remove('hidden');
}

/**
 * Funktionen ska... Syfte... 
 */
 function loadTheSubwayScene() {
  document.body.style.backgroundImage = "url('./images/galaxystationeleven.jpeg')";

  headline.textContent = `The Subway`;

  text.textContent = `You're now on the subway ride home. 
  
    During the trip your sister Siya, who works as a doctor at the hospital, calls to tell you that a deadly flu has reached the city.
 
    What's your next move?`;
  
  button1.textContent = "Go to your brother Frank's apartment";
  button1.onclick = loadEndSceneTwo;
  
  button2.textContent = "Continue the subway ride home";
  button2.onclick = loadEndSceneOne;
}

function loadTheActorScene() {
  //document.body.style.backgroundImage = null;

  headline.textContent = `The Actor - Kirsten`;

  text.textContent = `The actor who looks shocked is only a child, her name is Kirsten. You ask her where her parents are. 
  
    She tells you that a woman named Tanya takes care of her and follows her home when she's performing at the theater. Tanya has left the theater in an ambulance with the actor Arthur, who died from a heart attack. 
  
    Kirsten is left alone.
  
    What's your next move?`;
  
  button1.textContent = "Leave, and take the subway home";
  button1.onclick = loadTheSubwayScene;
  
  button2.textContent = "Ask to follow Kirsten so she gets home safe";
  button2.onclick = loadTheSubwaySceneTwo;
}

function loadTheSubwaySceneTwo() {

  headline.textContent = `The Subway - with Kirsten`;

  text.textContent = `You're now on the subway ride with Kirsten. You notice that she has a graphic novel in her backpack, titled Station Eleven.
  
    During the trip your sister Siya, who works as a doctor at the hospital, calls to tell you that a deadly flu has reached the city. 
  
    Siya urges you to get to your brother Frank's apartment right away to look yourself in and build a barricade.
  
    What's your next move?`;
  
  button1.textContent = "Leave Kirsten on the subway";
  button1.onclick = loadLeaveKirstenScene;
  
  button2.textContent = "Follow Kirsten home";
  button2.onclick = loadFollowKirstenHome;
}

function loadLeaveKirstenScene() {

  headline.textContent = `:(`;

  text.textContent = `Oh no, you won't be able to live with yourself if you make this choice!`;
  
  button1.textContent = "Start over";
  button1.onclick = loadFirstPage;
  
  button2.textContent = "Go back";
  button2.onclick = loadTheSubwaySceneTwo;
} 

function loadFollowKirstenHome() {

  headline.textContent = `Follow Kirsten home`;

  text.textContent = `You get off at a subway stop and walk Kirsten to her house. You stay outside the gate and wait for her to enter the door safely.
    
    Kirsten knocks at the door but noone opens. Her phone has died, and she doesn't know her parents number by heart.
    
    Kirsten says "Tanya has the key to the house". 
    You ask: "Is there's anyone else I can leave you with?". She replies "Arthur".
    
    You sigh. And then reply that you can't leave her there alone, so you ask her to follow you along to the grocery store.`;
  
  button1.textContent = "Continue";
  button1.onclick = loadGroceryStoreScene;
  
  button2.classList.add('hidden');
} 

/**
 * Funktionen ska... Syfte... 
 */
function loadGroceryStoreScene() {
  document.body.style.backgroundImage = "url('./images/galaxystationeleven.jpeg')";

  headline.textContent = `The grocery store`;

  text.textContent = `You've now entered the grocery store. 
    
    You decide to fill 10 carts with groceries. 

    Outside in the parking lot Kirsten says that she wants to go home. 
    
    Since the world is about to collapse, you know she won't make it on her own.

    What's your next move?`;
  
  button1.textContent = "Let her go";
  button1.onclick = loadEndSceneThree;
  
  button2.textContent = "Ask her to go with you to Frank's apartment";
  button2.onclick = loadEndSceneTwo;
  button2.classList.remove('hidden');
}

function loadSevernCityAirportScene() {

  headline.textContent = `Welcome to Severn City Airport!`;

  text.textContent = ` In the terminal you watch the news report about a deadly flu coming your way. 
    What's your next move?`;
  
  button1.textContent = "Stay at the airport";
  button1.onclick = loadEndSceneTwo;
  
  button2.textContent = "Try to leave";
  button2.onclick = loadEndSceneFour;
}


function loadEndSceneOne() {
  document.body.style.backgroundImage  = "url(./images/stationeleven.jpeg)";

  headline.textContent = `:(`;

  text.textContent = `Oh no, you won't make this on your own!`;

  button1.textContent = "Start over";
  button1.onclick = loadFirstPage;
  
  button2.textContent = "Go back";
  button2.onclick = loadTheSubwayScene;
}

function loadEndSceneTwo() {
  document.body.style.backgroundImage  = "url(./images/stationeleven.jpeg)";

  headline.textContent = `Yes!`;

  text.textContent = `This means you survived, you are safe for now!`;

  button1.textContent = "Start over";
  button1.onclick = loadFirstPage;

  button2.classList.add('hidden');
}

function loadEndSceneThree() {
  document.body.style.backgroundImage  = "url(./images/stationeleven.jpeg)";

  headline.textContent = `:(`;

  text.textContent = `Oh no, you have to convince her to go with you.
    She won't survive on her own!`;

  button1.textContent = "Start over";
  button1.onclick = loadFirstPage;
  
  button2.textContent = "Go back";
  button2.onclick = loadGroceryStoreScene;
}

function loadEndSceneFour() {
  document.body.style.backgroundImage  = "url(./images/stationeleven.jpeg)";

  headline.textContent = `:(`;

  text.textContent = `Oh no, you won't make this on your own!`;

  button1.textContent = "Start over";
  button1.onclick = loadFirstPage;

  button2.textContent = "Go back";
  button2.onclick = loadSevernCityAirportScene;
}
  
