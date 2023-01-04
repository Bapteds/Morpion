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
let grid = [ ["", "", ""], ["", "", ""], ["", "", ""]];

// STARTER ###############################################################################################################################

// DOM
let td = document.querySelectorAll('td'); // Tous les éléments qui portent le nom du paramètre
const btnStart = document.querySelector('#btn-start'); // Un seuk élément qui porte le nom du paramètre
const btnReset = document.querySelector('#btn-reset');
// let compteur = document.querySelector(score);

// isAvailable = Permite to verificate the value of the player. If it's lower or bigger than 1 and 2, the function return an error
// Otherwise the game can start
function isAvailable(){
    console.clear();
    parseInt (choix = prompt('Choisir en la Croix (1), le Cercle(2) ou Stop (3)'));
    if (choix == 1 || choix == 2 || choix == 3){
        if (choix==1){
            console.log('Vous avez choisi : ' + choices[0]);
            return playerselection=choices[0],computreselection=choices[1], randomStart();
        }    
        else if (choix==2){
            console.log('Vous avez choisi : ' + choices[1]);
            return playerselection=choices[1],computreselection=choices[0], randomStart();
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
function randomStart(){
    value=randomInt(2);
    if (value == 2){
        alert ("L'ordinateur commence");
        computerStart(1);
    }
    else {
        alert ("Le joueur commence")
        playerStart(1);
    }
}


function grillReset(){
    if (grid !==null){
        alert ("Grille réinitialisée");
        return grid=[ ["", "", ""], ["", "", ""], ["", "", ""]],isAvailable();   
    }
}

// ########################################################################################################################################


function playerStart(compt){
    playercount=playercount+compt

}


function computerStart(compt){
    computercount=computercount+compt
}

// OVERLAY 
const overlay = document.getElementById('overlay');

btnStart.addEventListener('click', () => {
    overlay.style.display = 'block';
})

overlay.addEventListener('click', (event) => {
    if (!event.target.closest('#content')) {
        overlay.style.display = 'none';
    }
})



function testmat(x){
    grid.splice(x,1,['rond',null,null]);  // splice(Entre la 1er et 3em liste ,Entre la 1er et 3em place , ['objet',objet,objet])
    console.log(grid);
}


let testB1= document.getElementById("1");
    testB1.onclick=function () {
    console.log(1);
    return testmat(2);}


    

