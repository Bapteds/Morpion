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

// if croix utilisé, cercle pour l'autre

//###--CODE--###\\

const choices = ['Croix', 'Cercle'];
const grid = [ ["", "", ""], ["", "", ""], ["", "", ""]];

// STARTER ###############################################################################################################################

// isAvailable = Permite to verificate the value of the player. If it's lower or bigger than 1 and 2, the function return an error
// Otherwise the game can start
function isAvailable(){
    console.clear();
    parseInt (choix = prompt('Choisir en la Croix (1) et le Cercle(2)'));
    if (choix == 1 || choix == 2){
        if (choix==1){
            console.log('Vous avez choisi : ' + choices[0]);
            return playerselection=choices[0],computreselection=choices[1], randomStart();
        }    
        else
            console.log('Vous avez choisi : ' + choices[1]);
            return playerselection=choices[1],computreselection=choices[0], randomStart();
    }   
    else 
        console.log('Error');
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
        computerStart();
    }
    else {
        alert ("Le joueur commence")
        playerStart();
    }
}

// ########################################################################################################################################


function playerStart(){

}


function computerStart(){

}


let displayGrid = () => {

}

const playturn = () => {
    // Demande à l'utilisateur où il souhaite jouer et met à jour la grille en conséquence
    // Vérifie si le jeu est terminé
}
