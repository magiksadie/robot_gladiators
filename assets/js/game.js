var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Dr Doofenschmirtz", "Roborto", "Kanine Unit"];
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

//this creates a function named "fight"
var fight = function(enemyName) {
    window.alert("Welcome to the Robot Gladiators!");
    //prompt player to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player choses to fight
    if (promptFight === "fight"|| promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "attacked " + enemyName + ". " + enemyNames + " now has " + enemyHealth + " health left.");
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyHealth + " has died!");
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.")
        }
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Hasta la vista!");
                playerMoney = playerMoney - 2;
            } else {
                fight();
            } 
        } else {
        window.alert("You need to choose a valid option. Try again!");
        }
};
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}