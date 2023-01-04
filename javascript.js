//###--ANOTATIONS--###\\

//JAVA for (initialisation; terminaison; increment) 
//JAVA SCRIPT for ([expressionInitiale]; [condition]; [expressionIncrément])
//let declaration d'une variable en local. Si x= 1 dans une fonction, la méthode main peut avoir un x=2, il ne rentre pas en conflit avec x=1
//Forme en JS https://www.youtube.com/watch?v=uq66IuqYdWg

// Morpion, Il faut aligner trois symboles du même type pour pouvoir gagner la partie. Le tableau fait 3x3
// l'ordinateur doit avoir 2 choix max : la croix ou le cercle (pareil pour le joueur)
// les marques peuvent être disposées en diagonale, en longeur et en hauteur
// Chacun joue a son tour, tant que l'un n'a pas posé son symbole, l'autre ne joue pas 
// 2 variables : une attribuer au joueur et une autre attribuer au bot
// Premier joueur = 5 fois
// Second joueur = 4 fois


// if croix utilisé, cercle pour l'autre

//###--CODE--###\\


// VARIABLES
const choices = ['Croix', 'Cercle'];
let grid = [ [null, null, null], [null, null, null], [null, null, null]];

// STARTER ###############################################################################################################################

// DOM
let td = document.querySelectorAll('td'); // Tous les éléments qui portent le nom du paramètre
const btnStart = document.querySelector('#btn-start'); // Un seuk élément qui porte le nom du paramètre
const btnReset = document.querySelector('#btn-reset');
// let compteur = document.querySelector(score);

function grillReset(){
    if (grid !==null){
        alert ("Grille réinitialisée");
        return grid=[ [null, null, null], [null, null, null], [null, null, null]],isAvailable();   
    }
}

// ########################################################################################################################################


// OVERLAY 
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

btnStart.addEventListener('click', () => {
    overlay.style.display = 'block';
})

overlay.addEventListener('click', (event) => {
    if (!event.target.closest('#container')) {
        overlay.style.display = 'none';
    }
})





// FUNCTION MORPION ######################################################################################################################
let playercounter=0
let computercount=0


// isAvailable = Permite to verificate the value of the player. If it's lower or bigger than 1 and 2, the function return an error
// Otherwise the game can start
function isAvailable(){
    console.clear();
    parseInt (choix = prompt('Choisir en la Croix (1), le Cercle(2) ou Stop (3)'));
    if (choix == 1 || choix == 2 || choix == 3){
        if (choix==1){
            console.log('Vous avez choisi : ' + choices[0]);
            return  randomStart(choices[0],computreselection=choices[1]);
        }    
        else if (choix==2){
            console.log('Vous avez choisi : ' + choices[1]);
            return randomStart(choices[1],computerselection=choices[0]);
        }
        else if (choix==3){
            return 0 ;
        }
    }   
    else {
        alert ("Valeur incorrect");
        return isAvailable();
    }
}

// variables that determines the case of the computerselection
const getComputerCase = Math.floor(Math.random() * 9);

//This two functions are used to determine with players start the game. 
function randomInt(){
     return Math.floor(Math.random() * 9);
}
function randomStart(choix,computer){
    value=randomInt(9);
    if (value == 2){
        alert ("L'ordinateur commence");
        return computerStart(choix,computer);
    }
    else { // A modifier
        alert ("Le joueur commence")
        return playerStart(choix),computer;
    }
}


function playerStart(choix){
    playercounter=playercounter+1
    return boutonTableau(choix);
}


function computerStart(computer){
    computercount=computercount+1
    return boutonTableau(computer);
}

function testmat(x,y,choix,computer){ // x => La hauteur dans mon tableau.
    if (grid[x][y]!==null){
        alert('Déja utilisé');
    }
    else
        grid[x][y]=choix;
    console.log(grid);
    console.log(computercount);
    console.log(playercounter);
    if (computercount>=playercounter){
        playerStart(choix);
    }
    else if (playercounter>computercount){
        computerStart(computer);
    }
}

function boutonTableau(choix){
let G1= document.getElementById("1");
G1.onclick=function () {
    console.log(1);
    G1.style.background="red";
    return testmat(0,0,choix);}

let M1= document.getElementById("2");
    M1.onclick=function () {
        console.log(1);
        return testmat(0,1,choix);}

let D1= document.getElementById("3");
    D1.onclick=function () {
        console.log(1);
        return testmat(0,2,choix);}

let G2= document.getElementById("4");
    G2.onclick=function () {
    console.log(1);
    return testmat(1,0,choix);}

let M2= document.getElementById("5");
    M2.onclick=function () {
        console.log(1);
        return testmat(1,1,choix);}

let D2= document.getElementById("6");
    D2.onclick=function () {
        console.log(1);
        return testmat(1,2,choix);}

let G3= document.getElementById("7");
    G3.onclick=function () {
    console.log(1);
    return testmat(2,0,choix);}

let M3= document.getElementById("8");
    M3.onclick=function () {
        console.log(1);
        return testmat(2,1);}

let D3= document.getElementById("9");
    D3.onclick=function () {
        console.log(1);
        return testmat(2,2);}
}






        