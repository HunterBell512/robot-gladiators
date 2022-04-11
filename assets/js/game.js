// Player Stats

var fight = function() {
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    
    // Debug info
    console.log(playerName, playerHealth, playerAttack);
    
    // Enemy Stats
    var enemyName = "Roborto";
    var enemyHealth = 50;
    var enemyAttack = 12;

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Alert players they are starting the round
    if (promptFight === "fight" || promptFight === "FIGHT") {
        window.alert("Welcome to Robot Gladiators!");
    
        // Calculate damage
        enemyHealth -= playerAttack;
        playerHealth -= enemyAttack;
    
        // Log damage for debug
        console.log(playerName + " attacked " + enemyName + ", " + enemyName + " now has " + enemyHealth + " health remaining.")
    
        // Check for enemy defeat
        if (enemyHealth <= 0) {
            console.log(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // Log damage for debug
        console.log(enemyName + " attacked " + playerName + ", " + playerName + " now has " + playerHealth + " health remaining.");
    
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

fight();