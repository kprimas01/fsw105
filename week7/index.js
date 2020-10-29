var readlineSync = require('readline-sync');

const playerName = readlineSync.guestion("Can I Have Your name?");

const introMessage = `${playerName},Welcome to the escape room kristin!`;
console.log(introMessage);
// 
let playerAlive = true; 
let doesplayerHaveKey = false;

 while (playerAlive == true){
     const menuOptionsID = readlineSync.keyIn(` Press 1 put hand in hole\n Press 2 to Find the key, or\n press 3 to Open the door:`,{limit:'$<1-3>'});
     if(menuOptionsID == 1){
        //  put hand in hole
        playerAlive = false;
        console.log(`Oh no, ${kristin}, you are dead. Game is over.`);

     } else if (menuOptionsID == 2 && doesPlayerHaveKey == false){
        doesplayerHaveKey = true;
    
    } else if (menuOptionsID == 2 && doesplayerHaveKey == true){
        //  player already has found the key before

     } else if (menuOptionsID == 3 && doesplayerHaveKey == false){
        //  Open the door 
        // Since the player has not found the key, display that he/she has to locate the key first
     
    } else if (menuOptionsID == 3 && doesplayerHaveKey == true){
        playerAlive = false;


    }
    
        

     
}
