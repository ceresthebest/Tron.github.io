function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWithR = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        //confronta se il blue colpisce orange
        //for (var i = 0; i < arrblue.length; i++) {
        //    if (otherleft == arrblue[i][0] && othertop == arrblue[i][1]) {
        //        crash = true;
        //        myGameArea.stop();
        //    }
        //}

        var crash = false;
        for (var i = 0; i < arrblue.length; i++) {
            if (otherleft - 10 == arrblue[i][0] && othertop - 5 == arrblue[i][1] && blueGamePiece.x != 10 && blueGamePiece.y != 10) {
                crash = true;
                myGameArea.stop();
                return crash;

            }
        }


        if (otherleft == 0 || othertop == 0 || otherleft == 300 || othertop == 150) {
            crash = true;
            myGameArea.stop();
            return crash;

        }

       else if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;

        }
        else {

            crash = true;
            myGameArea.stop();

        }
        return crash;
    }


    this.crashWithY = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        //confronta se il blue colpisce orange
        //for (var i = 0; i < arrblue.length; i++) {
        //    if (otherleft == arrblue[i][0] && othertop == arrblue[i][1]) {
        //        crash = true;
        //        myGameArea.stop();
        //    }
        //}

        var crash = false;
        for (var i = 0; i < arrorange.length; i++) {
            if (otherleft - 10 == arrorange[i][0] && othertop - 5 == arrorange[i][1] && orangeGamePiece.x != 280 && orangeGamePiece.y != 130) {
                crash = true;
                myGameArea.stop();
                return crash;

            }
        }


        if (otherleft == 0 || othertop == 0 || otherleft == 300 || othertop == 150) {
            crash = true;
            myGameArea.stop();
            return crash;
        }

       else if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
            
        }
        else {
            crash = true;
            myGameArea.stop();

        }
        return crash;
    }

    this.crashWithRR = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        //confronta se il blue colpisce orange
        //for (var i = 0; i < arrblue.length; i++) {
        //    if (otherleft == arrblue[i][0] && othertop == arrblue[i][1]) {
        //        crash = true;
        //        myGameArea.stop();
        //    }
        //}

        var crash = false;
        for (var i = 0; i < arrblue.length-1; i++) {
            if (myleft == arrblue[i][0] && mytop == arrblue[i][1] && blueGamePiece.x != 10 && blueGamePiece.y != 10) {
               
                crash = true;
                myGameArea.stop();
                return crash;

            }
        }


        return crash;
    }


    this.crashWithYY = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        //confronta se il blue colpisce orange
        //for (var i = 0; i < arrblue.length; i++) {
        //    if (otherleft == arrblue[i][0] && othertop == arrblue[i][1]) {
        //        crash = true;
        //        myGameArea.stop();
        //    }
        //}

        var crash = false;
        for (var i = 0; i < arrorange.length-1; i++) {
            if (myleft == arrorange[i][0] && mytop == arrorange[i][1] && orangeGamePiece.x != 280 && orangeGamePiece.y != 130) {
         
                crash = true;
                myGameArea.stop();
                return crash;

            }
        }


        return crash;
    }


}


function moveright(type) {

    //blueGamePiece.x += 1;
    if (type == 'R') {

        document.getElementById("left").disabled = true;
        document.getElementById("up").disabled = false;
        document.getElementById("down").disabled = false;
        document.getElementById("right").disabled = false;

        blueGamePiece.speedY = 0;

        blueGamePiece.speedX = 1;
        
 
    }
    else {

        orangeGamePiece.speedY = 0;

        orangeGamePiece.speedX = 1;
    }
 
}
function moveup(type) {
    
    //blueGamePiece.y = -1;
    if (type == 'R') {
        document.getElementById("down").disabled = true;
        document.getElementById("up").disabled = false;
        document.getElementById("left").disabled = false;
        document.getElementById("right").disabled = false;

        blueGamePiece.speedX = 0;
        blueGamePiece.speedY = -1;

    }
    else {
        orangeGamePiece.speedX = 0;
        orangeGamePiece.speedY = -1;
    }

}
function moveleft(type) {

    if (type == 'R') {
        document.getElementById("right").disabled = true;
        document.getElementById("up").disabled = false;
        document.getElementById("left").disabled = false;
        document.getElementById("down").disabled = false;
        blueGamePiece.speedY = 0;
        blueGamePiece.speedX = -1;

    }
    else {
 
                orangeGamePiece.speedY = 0;
                orangeGamePiece.speedX = -1;
      
           

    }
    //blueGamePiece.x -= 1;

}
function movedown(type) {

    if (type == 'R') {
        document.getElementById("up").disabled = true;
        document.getElementById("down").disabled = false;
        document.getElementById("left").disabled = false;
        document.getElementById("right").disabled = false;
        blueGamePiece.speedX = 0;
        blueGamePiece.speedY = 1;

    }
    else {
        orangeGamePiece.speedX = 0;
        orangeGamePiece.speedY = 1;
    }
    //blueGamePiece.y -= 1;
    //blueGamePiece.x -= 2;

}


