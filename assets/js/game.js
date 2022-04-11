// Game States
/* 
    WIN - Player robot has defeated all enemy-robots
    * Fight all enemy-robots
    * Defeat each enemy robot
*/

// LOSE - Player robot's health is zero or less

// Player Stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemy Stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Alert players they are starting the round
    if (promptFight === "fight" || promptFight === "FIGHT") {
        window.alert("Welcome to Robot Gladiators!");
        
        // Calculate damage
        enemyHealth -= playerAttack;
        playerHealth -= enemyAttack;
        
        // Check for enemy defeat
        if (enemyHealth <= 0) {
            console.log(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        
        //if true, leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight.");
            playerMoney -= 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// fight();