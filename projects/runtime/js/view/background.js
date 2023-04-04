var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        var ufo;
        
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'midnightpurple');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            // loop that draws 100 stars 
            for (var i = 0; i < 250; i++){
                var circle = draw.circle(4.5, "white", "LightGray", 2); //draws a circle and stores it in the variable circle
                circle.x = canvasWidth * Math.random(); //multiuplys a random decimal times the width of the canvas and stores it as the x for the circle
                circle.y = groundY * Math.random(); //multiuplys a random decimal times the groundY of the canvas and stores it as the y for the circle
                background.addChild(circle); // adds circle as a child to background 
            }

            var moon = draw.bitmap("img/moon.png"); // draws the moon usind .bitmap and stores it in the moon variable
            moon.x = canvasWidth - 300; //adds an x valuse to the moon of 300 pixels
            moon.y = groundY - 450; //adds an y valuse to the moon of 200 pixels
            moon.scaleX = 0.5; //scales the moons x value
            moon.scaleY = 0.5; //scales the moons y value
            background.addChild(moon); // add the moon as a child of background
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; ++i) {
                var buildingHeights = [150, 205, 89, 100, 290];
                var buildingColors = ['white', 'red', 'purple', 'pink', 'yellow']
                var building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeights[i];
                background.addChild(building);
                buildings.push(building);
              }
            */
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/RocketShip.png"); //bitmap draws this image and stores it in the variable tree
            tree.x = canvasWidth - 200; //assigns an x value to tree
            tree.y = groundY - 250; //assigns an y value to tree
            background.addChild(tree); //adds tree as a child to background to make it visable

            ufo = draw.bitmap("img/ufo.png"); //bitmap draws this image and stores it in the variable ufo
            ufo.x = canvasWidth - 200; //assigns an x value to ufo
            ufo.y = groundY - 500; //assigns an y value to ufo
            ufo.scaleX = 0.5; //changes the size of the ufo x value
            ufo.scaleY = 0.5;//changes the size of the ufo y value
            background.addChild(ufo); //adds ufo as a child to background to make it visable
            
        } // end of render function - DO NOT DELETE
        
        //gives a number between min and max including min and max
        function getRandomInt(min, max) {
            min = Math.ceil(min); //gives the min valuse a stoppig point
            max = Math.floor(max); //gives the max valuse a stoppig point
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
          }

        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1; //makes the tree move

            //if statement that tells the tree what to do
            if (tree.x < -210){
                tree.x = canvasWidth
            }

            ufo.x = ufo.x - 2.5; //makes the ufo move

            //if statement that tells the ufo what to do
            if (ufo.x < -210){
                ufo.x = canvasWidth
                ufo.y = getRandomInt(0, groundY - 175);
            }
            
            // TODO 5: Part 2 - Parallax

            //moves the buildings and resets the x value to the right side of the canvas if they go off the left
            /*for (var i = 0; i < buildings.length; i++){
                var building = buildings[i]; //stores the index of the array in the variable building
                building.x = building.x - 2; //subtracts from the x value of the building to make it move to the left

            if (building.x < -210){ //checks to see if the buildngs x value goes off the left side of the canvas 
                building.x = canvasWidth //resets the x value to canvasWidth which is the right side of the canvas
            }
            }
            */
            
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
