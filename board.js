
var blueGamePiece, orangeGamePiece;
var pos = '';
var giocatori = '';
function startGame(players) {

     document.getElementById("section_one").style.display = "block";
     document.getElementById("section_one/slide_one").style.display = "block";
    document.getElementById("btn-home").style.display = "block";
    document.getElementById("btn-restart").style.display = "block";
    blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
    orangeGamePiece = new component(10, 5, "orange", 280, 130);
    giocatori = players;
    myGameArea.start(players);
    
}


var myGameArea = {

    canvas: document.createElement("canvas"),
    start: function (players) {
	document.getElementById("section_one").style.display = "block";
	document.getElementById("header").style.display = "none";
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[6]);
        this.interval = setInterval(updateGameArea, 20);
        if (players == '2') {
            document.getElementById("player").style.display = "block";
            document.getElementById("blue").style.display = "inline-flex";
            document.getElementById("orange").style.display = "inline-flex";
            document.getElementById("player2").style.display = "inline-flex";

            window.addEventListener('keydown', function (e) {
                myGameArea.key = e.keyCode;
            })
            window.addEventListener('keyup', function (e) {
                myGameArea.key = false;
            })
        }
        else {
            document.getElementById("blue").style.display = "inline-flex";
            document.getElementById("com").style.display = "inline-flex";
            myGameArea.key = 'Null';
            if (myGameArea.key == 'Null') {
                this.interval = setInterval(randompos, 200);

            }
        }
      
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
	stop : function() {
        clearInterval(this.interval);
    } 
}

var arrblue = Array.from(Array(2), () => new Array(4));
var arrorange = Array.from(Array(2), () => new Array(4));
var i = 0;
var j = 0;

function updateGameArea() {
    if (blueGamePiece.crashWithR(orangeGamePiece) /*&& orangeGamePiece.x != 280 && orangeGamePiece.y != 130*/) {
        i++;
        blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
        orangeGamePiece = new component(10, 5, "orange", 280, 130);
        myGameArea.stop();
        myGameArea.clear();

        document.getElementById("result2").style.display = "block";
        $("#joystick").addClass("disabledbutton");


            if (typeof (Storage) !== "undefined") {
                // Store
                sessionStorage.setItem("result", i);
                // Retrieve
                document.getElementById("highscoresblue").innerHTML = sessionStorage.getItem("result");
            } else {
                i = 0;
                sessionStorage.setItem("result", i);

                document.getElementById("highscoresblue").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        

    }
    else if (orangeGamePiece.crashWithY(blueGamePiece)/* && blueGamePiece.x != 10 && blueGamePiece.y != 10*/) {

        j++;
        blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
        orangeGamePiece = new component(10, 5, "orange", 280, 130);
        myGameArea.stop();
        myGameArea.clear();

        document.getElementById("result1").style.display = "block";
        $("#joystick").addClass("disabledbutton");

        if (typeof (Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("result", j);
            // Retrieve
            document.getElementById("highscoresorange").innerHTML = sessionStorage.getItem("result");
        } else {
            j = 0;
            sessionStorage.setItem("result", j);

            document.getElementById("highscoresorange").innerHTML = "Sorry, your browser does not support Web Storage...";
        }

    }                   
    else if (blueGamePiece.crashWithRR(blueGamePiece) /*&& orangeGamePiece.x != 280 && orangeGamePiece.y != 130*/) {

        i++;
        blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
        orangeGamePiece = new component(10, 5, "orange", 280, 130);
        myGameArea.stop();
        myGameArea.clear();
        document.getElementById("result1").style.display = "block";
        $("#joystick").addClass("disabledbutton");

        if (typeof (Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("result", i);
            // Retrieve
            document.getElementById("highscoresblue").innerHTML = sessionStorage.getItem("result");
        } else {
            i = 0;
            sessionStorage.setItem("result", i);

            document.getElementById("highscoresblue").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
    else if (orangeGamePiece.crashWithYY(orangeGamePiece)/* && blueGamePiece.x != 10 && blueGamePiece.y != 10*/) {

        i++;
        blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
        orangeGamePiece = new component(10, 5, "orange", 280, 130);
        myGameArea.stop();
        myGameArea.clear();
        document.getElementById("result2").style.display = "block";
        $("#joystick").addClass("disabledbutton");

    


        if (typeof (Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("result", i);
            // Retrieve
            document.getElementById("highscoresblue").innerHTML = sessionStorage.getItem("result");
        } else {
            i = 0;
            sessionStorage.setItem("result", i);

            document.getElementById("highscoresblue").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
	else{
    //myGameArea.clear();
    //blueGamePiece.x += 1;
    if (myGameArea.key && myGameArea.key == 37) {
        if (pos == "" || pos != 'R') {
            moveleft('Y');
            pos = 'L';
        }}
         if (myGameArea.key && myGameArea.key == 39) {
             if (pos == "" || pos != 'L') {

                 moveright('Y');
                 pos = 'R';
             }         }

         if (myGameArea.key && myGameArea.key == 38) {
             if (pos == "" || pos != 'D') {

                 moveup('Y');
                 pos = 'U';
             }         }
         if (myGameArea.key && myGameArea.key == 40) {
             if (pos == "" || pos != 'U') {

                 movedown('Y');
                 pos = 'D';
             }         }

    orangeGamePiece.newPos();
    //orangeGamePiece.x -= 1;
    //orangeGamePiece.y += 1;
         blueGamePiece.newPos();

         blueGamePiece.update();
         arrblue.push([blueGamePiece.x, blueGamePiece.y]);
         orangeGamePiece.update();
         arrorange.push([orangeGamePiece.x, orangeGamePiece.y]);

    }


}

function home() {
    document.getElementById("header").style.display = "block";
    document.getElementById("section_one").style.display = "none";
    document.getElementById("section_one/slide_one").style.display = "none";
    i = 0;
    $("#joystick").removeClass("disabledbutton");

}


function restart() {
    document.getElementById("results").style.display = "none";
    myGameArea.stop();
    blueGamePiece = new component(10, 5, "#005bd1", 10, 10);
    orangeGamePiece = new component(10, 5, "orange", 280, 130);
    myGameArea.clear();
    document.getElementById("results").style.display = "block";
    document.getElementById("result1").style.display = "none";
    document.getElementById("result2").style.display = "none";
    myGameArea.start(giocatori);
    $("#joystick").removeClass("disabledbutton");

}
function randompos() {
    var keys = ['37', '39', '38', '40'];
    var rnd = keys[Math.floor(Math.random() * keys.length)];
    switch (rnd) {
        case '37':
            if (pos == "" || pos != 'R') {
                moveleft('Y');
                pos = 'L';
            }

            break;
        case '39':
            if (pos == "" || pos != 'L') {

                moveright('Y');
                pos = 'R';
            }
            break;
        case '38':
            if (pos == "" || pos != 'D') {

                moveup('Y');
                pos = 'U';
            }
            break;
        case '40':
            if (pos == "" || pos != 'U') {

                movedown('Y');
                pos = 'D';
            }
            break;
        default:
    }
}