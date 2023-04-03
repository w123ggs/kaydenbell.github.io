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
                { "type": "sawblade", "x": 400, "y": groundY - 10},
                { "type": "sawblade", "x": 600, "y": groundY - 125},
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "sawblade", "x": 1900, "y": groundY - 125},
                { "type": "sawblade", "x": 1150, "y": groundY },
                { "type": "sawblade", "x": 2150, "y": groundY },
                { "type": "sawblade", "x": 2300, "y": groundY - 125},
                { "type": "sawblade", "x": 3000, "y": groundY },
                { "type": "sawblade", "x": 3675, "y": groundY - 125},
                { "type": "sawblade", "x": 675, "y": groundY - 125},
                { "type": "sawblade", "x": 4000, "y": groundY },
                { "type": "alien", "x": 400, "y": groundY - 50 },
                { "type": "alien", "x": 750, "y": groundY - 50 },
                { "type": "alien", "x": 1200, "y": groundY - 50 },
                { "type": "alien", "x": 3000, "y": groundY - 50 },
                { "type": "reward", "x": 900, "y": groundY - 125 },
                { "type": "reward", "x": 2200, "y": groundY - 125 },
                { "type": "reward", "x": 3400, "y": groundY - 125 },
                { "type": "reward2", "x": 2900, "y": groundY - 125 },
                { "type": "reward2", "x": 3900, "y": groundY - 125 },
                { "type": "reward2", "x": 4200, "y": groundY - 125 },
                { "type": "spike", "x": 1500, "y": groundY - 10 },
                { "type": "spike", "x": 1750, "y": groundY - 10 },
                { "type": "spike", "x": 2500, "y": groundY - 10 },
                { "type": "spike", "x": 3500, "y": groundY - 10 },
                { "type": "spike", "x": 3300, "y": groundY - 10 },
                { "type": "spike", "x": 4300, "y": groundY - 10 },
                { "type": "alien2", "x": 2000, "y": groundY - 50 },
                { "type": "alien2", "x": 2700, "y": groundY - 50 },
                { "type": "alien2", "x": 3400, "y": groundY - 50 },
                { "type": "alien2", "x": 4100, "y": groundY - 50 },
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
            obstacleImage.scaleX
        }

       function createAlien(x, y){
        var enemy = game.createGameItem("enemy", 25);
        var gameItem = draw.bitmap("img/alien.png");
        gameItem.x = -25;
        gameItem.y = -45;
        enemy.addChild(gameItem);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = - 1.5;

        enemy.onPlayerCollision = function () {
             game.changeIntegrity(- 10);
        };

        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.fadeOut();
       };
       }

       function createAlien2(x, y){
        var enemy = game.createGameItem("enemy", 25);
        var gameItem = draw.bitmap("img/alien2.0.png");
        gameItem.x = -60;
        gameItem.y = -130;
        enemy.addChild(gameItem);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = - 1.5;
        gameItem.scaleX = 0.75;
        gameItem.scaleY = 0.75;
        enemy.onPlayerCollision = function () {
             game.changeIntegrity(- 15);
        };

        enemy.onProjectileCollision = function () {
            game.increaseScore(150);
            enemy.fadeOut();
       };
       }


       function createReward(x, y){
        var reward = game.createGameItem("reward", 25);
        var gameItem = draw.bitmap("img/star.png");
        gameItem.x = -25;
        gameItem.y = -25;
        reward.addChild(gameItem);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = - 1.5;
        gameItem.scaleX = 0.25;
        gameItem.scaleY = 0.25;

        reward.onPlayerCollision = function () {
             game.changeIntegrity(10);
             reward.fadeOut();
        };
       }

       function createReward2(x, y){
        var reward = game.createGameItem("reward", 25);
        var gameItem = draw.bitmap("img/planet.png");
        gameItem.x = -25;
        gameItem.y = -25;
        reward.addChild(gameItem);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = - 1.5;
        gameItem.scaleX = 0.25;
        gameItem.scaleY = 0.25;

        reward.onPlayerCollision = function () {
             game.changeIntegrity(50);
             game.increaseScore(300);
             reward.fadeOut();
        };
       }


       
       for (var i = 0; i < levelData.gameItems.length; i++){
        var gameItem = levelData.gameItems[i];
        if (gameItem.type === "sawblade"){
            createSawBlade(gameItem.x, gameItem.y);
        }else if (gameItem.type === "alien"){
            createAlien(gameItem.x, gameItem.y);
        }else if (gameItem.type === "reward"){
            createReward(gameItem.x, gameItem.y);
        }else if (gameItem.type === "spike"){
            createSpike(gameItem.x, gameItem.y);
        }else if (gameItem.type === "alien2"){
            createAlien2(gameItem.x, gameItem.y);
        }else if (gameItem.type === "reward2"){
            createReward2(gameItem.x, gameItem.y);
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
