let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let home = 0;
let guest = 0;

homeScore.textContent = home;
guestScore.textContent = guest;

function increment(team, teamElement){
    if(team==="home") {
        home++;
        checkWinner();
        teamElement.textContent = home;
    }
    else {
        guest++;
        checkWinner();
        teamElement.textContent = guest;
    }
}

function increaseBy2(team, teamElement){
    if(team==="home") {
        home += 2;
        checkWinner();
        teamElement.textContent = home;
    }
    else {
        guest += 2;
        checkWinner();
        teamElement.textContent = guest;
    }
}

function increaseBy3(team, teamElement){
    if(team==="home") {
        home += 3;
        checkWinner();
        teamElement.textContent = home;
    }
    else {
        guest += 3;
        checkWinner();
        teamElement.textContent = guest;
    }
}

function checkWinner(){
    if(guest >= 100 || home >= 100){
        alert("Game over");
        guest = 0;
        home = 0;
    }
}