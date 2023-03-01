var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; //variable for a circle
        var circles = []; //varible for circles 

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //makes the circle go randomly
            physikz.addRandomVelocity(circle, canvas); //makes the circle move randomly
            view.addChild(circle); // Lets us see the circles by adding it as a child to veiw.
            circles.push(circle); //Pushes it to the array
        } //Draws the circle

        // TODO 3 / 7 : Call the drawCircle() function 
        /*drawCircle(); //Calls the function
        drawCircle(); //Calls the function
        drawCircle(); //Calls the function
        drawCircle(); //Calls the function
        drawCircle(); //Calls the function*/
        for (var i = 0; i < 100; i++){
            drawCircle(); //draws the circle
        } //creates a loop that draws 100 circles

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
                //They are deleted because of the new calls i gave to them.
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
                //They are deleted because of the new calls i gave to them.

            // TODO 9 : Iterate over the array
            for (var i = 0; i < circles.length; i++){
                var eachCircle = circles[i]; //Code to repeat using eachCircle
                physikz.updatePosition(eachCircle); //Updates where each circle is
                game.checkCirclePosition(eachCircle); //Checks where each circle is
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0){
                circle.x = canvas.width;
            } //Makes the circles keep going on the screen from left and right.
            if (circle.y > canvas.height){
                circle.y = 0;
            } //Makes the circles keep going on the screen from up and down.
            if (circle.y < 0){
                circle.y = canvas.height;
            } //Makes the circles keep going on the screen from up and down.

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
