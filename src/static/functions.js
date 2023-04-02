/////////////////////////////////////
// vars
////////////////////////////////////
let playerone = localStorage.getItem("playerone");
let playertwo = localStorage.getItem("playertwo");

let playerdata = JSON.parse(localStorage.getItem("playerdata"));
if (playerdata == null) {
    playerdata = []
}

let killwhite = false;
let killblack = false;

// main game phase index
// 'setzphase', 'zugphase', 'blackjump', 'whitejump'
let gamephase = "setzphase";

// creates var vor every fieled on the board
let boardarray = [];
for (i=0; i<24; i++) {
    boardarray[i] = new board(i, 'empty');
};


/////////////////////////////////////
// functions
////////////////////////////////////

// toggles the muehle event
function muehleevent() {
    var element = document.getElementById(this.id);
    // gets the color of the stone to check that you dont destroy your own colored stone
    var stonecolor = (element.childNodes[0].id).slice(0,10);
    // checks if stone is in a muehle and therefor cant be destroyed
    var muehlestatus = boardarray[element.id].stone.muehle;
    for (i=0; i<16; i++) {
        if (muehlestatus[i] == true){
            muehlestatus = true;
        };
    };

    //  kill white stone
    if (killwhite && stonecolor == 'whitestone' && muehlestatus != true) {
        element.removeChild(element.firstChild);
        killwhite = false;
        boardarray[this.id].stone = 'empty';
        document.getElementById('notification').innerHTML = playerone+ ' am Zug!';
    };

    //  kill black stone
    if (killblack && stonecolor == 'blackstone' && muehlestatus != true) {
        element.removeChild(element.firstChild);
        killblack = false;
        boardarray[this.id].stone = 'empty';
        document.getElementById('notification').innerHTML = playertwo + ' am Zug!';
    };

    // changes to the jumpphase directly after stone gets removed
    phasewatcher();
};

// checks if the movement of stones is correct
function move(oldfield, newfield) {

    if (oldfield == 0){
        if (newfield == 9 || newfield == 1){
            return true;
        }
    }

    if (oldfield == 1){
        if (newfield == 0 || newfield == 2 || newfield == 4){
            return true;
        }
    }

    if (oldfield == 2){
        if (newfield == 1 || newfield == 14){
            return true;
        }
    }

    if (oldfield == 3){
        if (newfield == 10 || newfield == 4){
            return true;
        }
    }

    if (oldfield == 4){
        if (newfield == 1 || newfield == 3 || newfield == 5 || newfield == 7){
            return true;
        }
    }

    if (oldfield == 5){
        if (newfield == 4 || newfield == 13){
            return true;
        }
    }

    if (oldfield == 6){
        if (newfield == 7 || newfield == 11){
            return true;
        }
    }

    if (oldfield == 7){
        if (newfield == 4 || newfield == 6 || newfield == 8){
            return true;
        }
    }

    if (oldfield == 8){
        if (newfield == 7 || newfield == 12){
            return true;
        }
    }

    if (oldfield == 9){
        if (newfield == 0 || newfield == 10 || newfield == 21){
            return true;
        }
    }

    if (oldfield == 10){
        if (newfield == 3 || newfield == 9 || newfield == 11 || newfield == 18){
            return true;
        }
    }

    if (oldfield == 11){
        if (newfield == 6 || newfield == 10 || newfield == 15){
            return true;
        }
    }

    if (oldfield == 12){
        if (newfield == 8 || newfield == 13 || newfield == 17){
            return true;
        }
    }

    if (oldfield == 13){
        if (newfield == 5 || newfield == 12 || newfield == 14 || newfield == 20){
            return true;
        }
    }

    if (oldfield == 14){
        if (newfield == 2 || newfield == 13 || newfield == 23){
            return true;
        }
    }

    if (oldfield == 15){
        if (newfield == 11 || newfield == 16){
            return true;
        }
    }

    if (oldfield == 16){
        if (newfield == 15 || newfield == 17 || newfield == 19){
            return true;
        }
    }

    if (oldfield == 17){
        if (newfield == 12 || newfield == 16){
            return true;
        }
    }

    if (oldfield == 18){
        if (newfield == 10 || newfield == 19){
            return true;
        }
    }

    if (oldfield == 19){
        if (newfield == 16 || newfield == 18 || newfield == 20 || newfield == 22){
            return true;
        }
    }

    if (oldfield == 20){
        if (newfield == 13 || newfield == 19){
            return true;
        }
    }

    if (oldfield == 21){
        if (newfield == 9 || newfield == 22){
            return true;
        }
    }

    if (oldfield == 22){
        if (newfield == 19 || newfield == 21 || newfield == 23){
            return true;
        }
    }

    if (oldfield == 23){
        if (newfield == 14 || newfield == 22){
            return true;
        }
    }
 

    else {
        return false;
    };
};

// when a stone gets moved out of a muehle every other stone in the muehle gets the muehle from his muehlearray removed (the muehle can now be attact)
// input:   boardarray for data
//          fieldid: the id of the field of the moved stone
// output:  removes the muehle from every detected stone in the muehlearray
function deletmuehle(boardarray, fieldid) {
    //delets the muehle status from all stones in the muehle of the deletet stone
    for (i=0; i<16; i++) {
        if (boardarray[fieldid].stone.muehle[i] == true) {
            for (j=0; j<24; j++) {
                if (boardarray[j].stone.muehle != undefined) {
                    boardarray[j].stone.muehle[i] = false;
                };
            };
        };
    };
};

// checks if the building phase of the game has finished
// checks if the zug phase of the game has finished 
function phasewatcher() {
    let counter = 0; 
    let addwin = false;
    let addlose = false;

    for (i=0; i < 18; i++) {
        if (stoneshelf[i] == 'empty') {
            counter++;
        };
    };  
    
    if (counter == 18) {
        document.getElementById('phase').innerHTML = "Zugphase";
        gamephase = 'zugphase'
    };

    //springphase

    // check black stones
    let counterwhite = 0;
    for (i=0; i<24; i++) {
        if (boardarray[i].stone.color == 'white') {
            counterwhite++;
        }; 
    };

    if (counterwhite < 4 && gamephase != 'setzphase') {
        document.getElementById('phase').innerHTML = "Springphase für " + playerone;
        gamephase = 'whitejump'
    };

    // check black stones
    let counterblack = 0;
    for (i=0; i<24; i++) {
        if (boardarray[i].stone.color == 'black') {
            counterblack++;
        }; 
    };

    if (counterblack < 4 && gamephase != 'setzphase') {
        document.getElementById('phase').innerHTML = "Springphase für " + playertwo;
        gamephase = 'blackjump'
    };


    //win condition

    // win for black
    // check white stones for less than 3
    let winblack = 0;
    for (i=0; i<24; i++) {
        if (boardarray[i].stone.color == 'white') {
            winblack++;
        }; 
    };

    if (winblack < 3 && gamephase != 'setzphase') {
        document.getElementById('phase').innerHTML = playertwo + " hat gewonnen";
        gamephase = 'win';

        // addes win to playerdata
        for (i=0; i < playerdata.length; i++) {
            if (playertwo == playerdata[i].name) {
                playerdata[i].addwin();
                addwin = true;
            };
        };

        if (addwin == false){
            winner = new player(playerone);
            winner.addwin();
            playerdata.push(winner);
        };

        // addes lose to playerdata
        for (i=0; i < playerdata.length; i++) {
            if (playerone == playerdata[i].name) {
                playerdata[i].addlose();
                addlose = truep;
            };
        };

        if (addlose == false){
            loser = new player(playertwo);
            loser.addlose();
            playerdata.push(loser);
        };

        localStorage.setItem("playerdata", JSON.stringify(playerdata));
    };

    // win for white
    // check black stones for less than 3
    let winwhite = 0;
    for (i=0; i<24; i++) {
        if (boardarray[i].stone.color == 'black') {
            winwhite++;
        }; 
    };

    if (winwhite < 3 && gamephase != 'setzphase') {
        document.getElementById('phase').innerHTML = playerone + " hat gewonnen";
        gamephase = 'win';

        console.log('test');

        // addes win to playerdata
        for (i=0; i < playerdata.length; i++) {
            if (playerone == playerdata[i].name) {
                playerdata[i].addwin();
                addwin = true;
                console.log(i);
            };
        };

        if (addwin == false){
            winner = new player(playerone);
            winner.addwin();
            playerdata.push(winner);
            console.log('push');
        };

        // addes lose to playerdata
        for (i=0; i < playerdata.length; i++) {
            if (playertwo == playerdata[i].name) {
                playerdata[i].addlose();
                addlose = true;
            };
        };

        if (addlose == false){
            loser = new player(playertwo);
            loser.addlose();
            playerdata.push(loser);
        };

        localStorage.setItem("playerdata", JSON.stringify(playerdata));
    };
};


// checks if muehle was detectet
//
// inputs   'color' of the stone
//          'boardarray' gets position of all stones
//
// returns  'white' for white muehle 
//          'black' for black muehle
//          'nomuehle' for no detectet muehle
function detectmuehle(boardarray, color) {

    // vertical muehle
    // muehle 0-7
    let counter = 0;
    for (j=0; j<8; j++) {
        if ((boardarray[counter].stone.color == color && boardarray[counter+1].stone.color == color && boardarray[counter+2].stone.color == color) && (boardarray[counter].stone.muehle[j] != true || boardarray[counter+1].stone.muehle[j] != true || boardarray[counter+2].stone.muehle[j] != true)) {
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
                // adds the current muehle to the stones
                boardarray[counter].stone.muehle[j] = true;
                boardarray[counter+1].stone.muehle[j] = true;
                boardarray[counter+2].stone.muehle[j] = true;
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
                // adds the current muehle to the stones
                boardarray[counter].stone.muehle[j] = true;
                boardarray[counter+1].stone.muehle[j] = true;
                boardarray[counter+2].stone.muehle[j] = true;
                killwhite = true;
            };
        };
        counter = counter + 3;
    };

    // horizontal muehle

    // horizontal 0-9-21
    // muehle 8
    if ((boardarray[0].stone.color == color && boardarray[9].stone.color == color && boardarray[21].stone.color == color) && (boardarray[0].stone.muehle[8] != true || boardarray[9].stone.muehle[8] != true || boardarray[21].stone.muehle[8] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[0].stone.muehle[8] = true;
            boardarray[9].stone.muehle[8] = true;
            boardarray[21].stone.muehle[8] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[0].stone.muehle[8] = true;
            boardarray[9].stone.muehle[8] = true;
            boardarray[21].stone.muehle[8] = true;
            killwhite = true;
        };
    };    

    // horizontal 3-10-18
    // muehle 9
    if ((boardarray[3].stone.color == color && boardarray[10].stone.color == color && boardarray[18].stone.color == color) && (boardarray[3].stone.muehle[9] != true || boardarray[10].stone.muehle[9] != true || boardarray[18].stone.muehle[9] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[3].stone.muehle[9] = true;
            boardarray[10].stone.muehle[9] = true;
            boardarray[18].stone.muehle[9] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[3].stone.muehle[9] = true;
            boardarray[10].stone.muehle[9] = true;
            boardarray[18].stone.muehle[9] = true;
            killwhite = true;
        };
    };

    // horizontal 6-11-15
    // muehle 10
    if ((boardarray[6].stone.color == color && boardarray[11].stone.color == color && boardarray[15].stone.color == color) && (boardarray[6].stone.muehle[10] != true || boardarray[11].stone.muehle[10] != true || boardarray[15].stone.muehle[10] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[6].stone.muehle[10] = true;
            boardarray[11].stone.muehle[10] = true;
            boardarray[15].stone.muehle[10] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[6].stone.muehle[10] = true;
            boardarray[11].stone.muehle[10] = true;
            boardarray[15].stone.muehle[10] = true;
            killwhite = true;
        };
    };

    // horizontal 1-4-7
    // muehle 11
    if ((boardarray[1].stone.color == color && boardarray[4].stone.color == color && boardarray[7].stone.color == color) && (boardarray[1].stone.muehle[11] != true || boardarray[4].stone.muehle[11] != true || boardarray[7].stone.muehle[11] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[1].stone.muehle[11] = true;
            boardarray[4].stone.muehle[11] = true;
            boardarray[7].stone.muehle[11] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[1].stone.muehle[11] = true;
            boardarray[4].stone.muehle[11] = true;
            boardarray[7].stone.muehle[11] = true;
            killwhite = true;
        };
    };

    // horizontal 16-19-22
    // muehle 12
    if ((boardarray[16].stone.color == color && boardarray[19].stone.color == color && boardarray[22].stone.color == color) && (boardarray[16].stone.muehle[12] != true || boardarray[19].stone.muehle[12] != true || boardarray[22].stone.muehle[12] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[16].stone.muehle[12] = true;
            boardarray[19].stone.muehle[12] = true;
            boardarray[22].stone.muehle[12] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[16].stone.muehle[12] = true;
            boardarray[19].stone.muehle[12] = true;
            boardarray[22].stone.muehle[12] = true;
            killwhite = true;
        };
    };


    // horizontal 8-12-17
    // muehle 13    
    if ((boardarray[8].stone.color == color && boardarray[12].stone.color == color && boardarray[17].stone.color == color) && (boardarray[8].stone.muehle[13] != true || boardarray[12].stone.muehle[13] != true || boardarray[17].stone.muehle[13] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[8].stone.muehle[13] = true;
            boardarray[12].stone.muehle[13] = true;
            boardarray[17].stone.muehle[13] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[8].stone.muehle[13] = true;
            boardarray[12].stone.muehle[13] = true;
            boardarray[17].stone.muehle[13] = true;
            killwhite = true;
        };
    };


    // horizontal 5-13-20
    // muehle 14
    if ((boardarray[5].stone.color == color && boardarray[13].stone.color == color && boardarray[20].stone.color == color) && (boardarray[5].stone.muehle[14] != true || boardarray[13].stone.muehle[14] != true || boardarray[20].stone.muehle[14] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[5].stone.muehle[14] = true;
            boardarray[13].stone.muehle[14] = true;
            boardarray[20].stone.muehle[14] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[5].stone.muehle[14] = true;
            boardarray[13].stone.muehle[14] = true;
            boardarray[20].stone.muehle[14] = true;
            killwhite = true;
        };
    };


    // horizontal 2-14-23
    // muehle 15
    if ((boardarray[2].stone.color == color && boardarray[14].stone.color == color && boardarray[23].stone.color == color) && (boardarray[2].stone.muehle[15] != true || boardarray[14].stone.muehle[15] != true || boardarray[23].stone.muehle[15] != true)) {
        
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playertwo;
            // adds the current muehle to the stones
            boardarray[2].stone.muehle[15] = true;
            boardarray[14].stone.muehle[15] = true;
            boardarray[23].stone.muehle[15] = true;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen Stein von ' + playerone;
            // adds the current muehle to the stones
            boardarray[2].stone.muehle[15] = true;
            boardarray[14].stone.muehle[15] = true;
            boardarray[23].stone.muehle[15] = true;
            killwhite = true;
        };
    };
};