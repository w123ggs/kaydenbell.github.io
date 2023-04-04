var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 10}, //draws a sawblade
                { "type": "sawblade", "x": 600, "y": groundY - 125}, //draws a sawblade
                { "type": "sawblade", "x": 900, "y": groundY }, //draws a sawblade
                { "type": "sawblade", "x": 1900, "y": groundY - 125}, //draws a sawblade
                { "type": "sawblade", "x": 1150, "y": groundY }, //draws a sawblade
                { "type": "sawblade", "x": 2150, "y": groundY }, //draws a sawblade
                { "type": "sawblade", "x": 2300, "y": groundY - 125}, //draws a sawblade
                { "type": "sawblade", "x": 3000, "y": groundY }, //draws a sawblade
                { "type": "sawblade", "x": 3675, "y": groundY - 125}, //draws a sawblade
                { "type": "sawblade", "x": 675, "y": groundY - 125}, //draws a sawblade
                { "type": "sawblade", "x": 4000, "y": groundY }, //draws a sawblade
                { "type": "alien", "x": 400, "y": groundY - 50 }, //draws a alien
                { "type": "alien", "x": 750, "y": groundY - 50 }, //draws a alien
                { "type": "alien", "x": 1200, "y": groundY - 50 }, //draws a alien
                { "type": "alien", "x": 3000, "y": groundY - 50 }, //draws a alien
                { "type": "reward", "x": 900, "y": groundY - 125 }, //draws a reward
                { "type": "reward", "x": 2200, "y": groundY - 125 }, //draws a reward
                { "type": "reward", "x": 3400, "y": groundY - 125 }, //draws a reward
                { "type": "reward2", "x": 2900, "y": groundY - 125 }, //draws a reward
                { "type": "reward2", "x": 3900, "y": groundY - 125 }, //draws a reward
                { "type": "reward2", "x": 4200, "y": groundY - 125 }, //draws a reward
                { "type": "spike", "x": 1500, "y": groundY - 10 }, //draws a spike
                { "type": "spike", "x": 1750, "y": groundY - 10 }, //draws a spike
                { "type": "spike", "x": 2500, "y": groundY - 10 }, //draws a spike
                { "type": "spike", "x": 3500, "y": groundY - 10 }, //draws a spike
                { "type": "spike", "x": 3300, "y": groundY - 10 }, //draws a spike
                { "type": "spike", "x": 4300, "y": groundY - 10 }, //draws a spike
                { "type": "alien2", "x": 2000, "y": groundY - 50 }, //draws the second alien
                { "type": "alien2", "x": 2700, "y": groundY - 50 }, //draws the second alien
                { "type": "alien2", "x": 3400, "y": groundY - 50 }, //draws the second alien
                { "type": "alien2", "x": 4100, "y": groundY - 50 }, //draws the second alien
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y){
            var hitZoneSize = 25; //assigns the value of 25 as the size of hitzone
            var damageFromObstacle = 10; //assigns a value as the damage from the opstical
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstical and stores it in the variable sawBladeHitZone
            sawBladeHitZone.x = x; //stores a value as the x position for the hit zone
            sawBladeHitZone.y = y; //stores a value as the y position for the hit zone
            game.addGameItem(sawBladeHitZone); //adds the hitzone as a game item
    
            var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the image, and stores it in obsticalImage
            sawBladeHitZone.addChild(obstacleImage); // adds obstical image as a child of saw blade hit zone
            obstacleImage.x = - 25; //assigns a value to the x position of obsticalImage
            obstacleImage.y = - 25; //assigns a value to the y position of obsticalImage
        }

        

        function createSpike(x, y){
            var hitZoneSize = 25; //assigns the value of 25 as the size of hitzone
            var damageFromObstacle = 50; //assigns a value as the damage from the opstical
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstical and stores it in the variable sawBladeHitZone
            spikeHitZone.x = x; //stores a value as the x position for the hit zone
            spikeHitZone.y = y; //stores a value as the y position for the hit zone
            game.addGameItem(spikeHitZone); //adds the hitzone as a game item
    
            var obstacleImage = draw.bitmap("img/spike.png"); //draws the image, and stores it in obsticalImage
            spikeHitZone.addChild(obstacleImage); // adds obstical image as a child of saw blade hit zone
            obstacleImage.x = - 25; //assigns a value to the x position of obsticalImage
            obstacleImage.y = - 25; //assigns a value to the y position of obsticalImage
            obstacleImage.scaleX //assigns a size to obsticaleImage
        }

       function createAlien(x, y){
        var enemy = game.createGameItem("enemy", 25); //creates the enemy
        var gameItem = draw.bitmap("img/alien.png"); //draws the image, and stores it in gameItem
        gameItem.x = -25; //assigns a value to the x position of gameItem
        gameItem.y = -45; //assigns a value to the y position of gameItem
        enemy.addChild(gameItem); //adds gameItem as a child of enemy
        enemy.x = x; //stores a value as the x position for the enemy
        enemy.y = y; //stores a value as the y position for the enemy
        game.addGameItem(enemy); //adds enemy as a game item
        enemy.velocityX = - 1.5; //makes the enemy move at a velocity of 1.5

        //function that allows the change in integrity
        enemy.onPlayerCollision = function () {
             game.changeIntegrity(- 10); //takes 10 health away from the player on impact
        };

        //function that allows the increase in score
        enemy.onProjectileCollision = function () {
            game.increaseScore(100); //increases score by 100
            enemy.fadeOut(); //when hit it fades away
       };
       }

       function createAlien2(x, y){
        var enemy = game.createGameItem("enemy", 25); //creates the enemy
        var gameItem = draw.bitmap("img/alien2.0.png"); //draws the image, and stores it in gameItem
        gameItem.x = -60; //assigns a value to the x position of gameItem
        gameItem.y = -130; //assigns a value to the y position of gameItem
        enemy.addChild(gameItem); //adds gameItem as a child of enemy
        enemy.x = x; //stores a value as the x position for the enemy
        enemy.y = y; //stores a value as the y position for the enemy
        game.addGameItem(enemy); //adds enemy as a game item
        enemy.velocityX = - 1.5; //makes the enemy move at a velocity of 1.5
        gameItem.scaleX = 0.75; //changes the x value size of enemy
        gameItem.scaleY = 0.75; //changes the y value size of enemy

        //function that allows the change in integrity
        enemy.onPlayerCollision = function () {
             game.changeIntegrity(- 15); //takes 15 health away from the player on impact
        };

        enemy.onProjectileCollision = function () {
            game.increaseScore(150); //increases score by 150
            enemy.fadeOut(); //when hit it fades away
       };
       }


       function createReward(x, y){
        var reward = game.createGameItem("reward", 25); //creates the reward 
        var gameItem = draw.bitmap("img/star.png"); //draws the image, and stores it in gameItem
        gameItem.x = -25; //assigns a value to the x position of gameItem
        gameItem.y = -25; //assigns a value to the y position of gameItem
        reward.addChild(gameItem); //adds gameItem as a child of reward
        reward.x = x; //stores a value as the x position for the reward
        reward.y = y; //stores a value as the y position for the reward
        game.addGameItem(reward); //adds reward as a game item
        reward.velocityX = - 1.5; //makes the reward move at a velocity of 1.5
        gameItem.scaleX = 0.25; //changes the x value size of reward
        gameItem.scaleY = 0.25; //changes the y value size of reward

        //function that allows the change in integrity
        reward.onPlayerCollision = function () {
             game.changeIntegrity(10); //adds 10 helth to the player on impact
             reward.fadeOut(); //when hit it fades away
        };
       }

       function createReward2(x, y){
        var reward = game.createGameItem("reward", 25); //creates the reward 
        var gameItem = draw.bitmap("img/planet.png"); //draws the image, and stores it in gameItem
        gameItem.x = -25; //assigns a value to the x position of gameItem
        gameItem.y = -25; //assigns a value to the y position of gameItem
        reward.addChild(gameItem); //adds gameItem as a child of reward
        reward.x = x; //stores a value as the x position for the reward
        reward.y = y; //stores a value as the y position for the reward
        game.addGameItem(reward); //adds reward as a game item
        reward.velocityX = - 1.5; //makes the reward move at a velocity of 1.5
        gameItem.scaleX = 0.25; //changes the x value size of reward
        gameItem.scaleY = 0.25; //changes the y value size of reward

        //function that allows the change in integrity
        reward.onPlayerCollision = function () {
             game.changeIntegrity(50); //adds 50 helth to the player on impact
             game.increaseScore(300); //increases the score on impact by 300
             reward.fadeOut(); //when hit it fades away
        };
       }


       //creates a loop that makes the gameItem show
       for (var i = 0; i < levelData.gameItems.length; i++){
        var gameItem = levelData.gameItems[i];
        if (gameItem.type === "sawblade"){
            createSawBlade(gameItem.x, gameItem.y); //makes the sawbalde show up
        }else if (gameItem.type === "alien"){
            createAlien(gameItem.x, gameItem.y); //makes the first alien show up
        }else if (gameItem.type === "reward"){
            createReward(gameItem.x, gameItem.y); //makes first reward spike show up
        }else if (gameItem.type === "spike"){
            createSpike(gameItem.x, gameItem.y); //makes the spike show up
        }else if (gameItem.type === "alien2"){
            createAlien2(gameItem.x, gameItem.y); //makes the second alien show up
        }else if (gameItem.type === "reward2"){
            createReward2(gameItem.x, gameItem.y); //makes the second star show up.
        }
       }
       



        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
