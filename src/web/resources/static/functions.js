// vars

let killwhite = false;
let killblack = false;

// main game phase index
// 'setzphase', 'zugphase', 'springphase'
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

    //  kill white stone
    if (killwhite && stonecolor == 'whitestone') {
        element.removeChild(element.firstChild);
        killwhite = false;
        boardarray[this.id].stone = 'empty';
        document.getElementById('notification').innerHTML = 'Schwarz am Zug!';
    };

    //  kill black stone
    if (killblack && stonecolor == 'blackstone') {
        element.removeChild(element.firstChild);
        killblack = false;
        boardarray[this.id].stone = 'empty';
        document.getElementById('notification').innerHTML = 'Schwarz am Zug!';
    };
};

// checks if the building phase of the game has finished
function phasewatcher() {
    let counter = 0; 

    for (i=0; i < 18; i++) {
        if (stoneshelf[i] == 'empty') {
            counter++;
        };
    };  
    
    if (counter == 18) {
        document.getElementById('phase').innerHTML = "Zugphase";
    };
};


// checks if muehle was detectet

// inputs   'color' of the stone
//          'boardarray' gets position of all stones

// returns  'white' for white muehle 
//          'black' for black muehle
//          'nomuehle' for no detectet muehle
function detectmuehle(boardarray, color) {

    console.log(color);

    // vertical muehle
    // muehle 0-7
    let counter = 0;
    for (j=0; j<8; j++) {
        if (boardarray[counter].stone.color == color && boardarray[counter+1].stone.color == color && boardarray[counter+2].stone.color == color && boardarray[counter].stone.muehle != j) {
            console.log('mühle detectet')
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein!';
                // adds the current muehle to the stones
                boardarray[counter].stone.muehle = j;
                boardarray[counter+1].stone.muehle = j;
                boardarray[counter+2].stone.muehle = j;
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                // adds the current muehle to the stones
                boardarray[counter].stone.muehle = j;
                boardarray[counter+1].stone.muehle = j;
                boardarray[counter+2].stone.muehle = j;
                killwhite = true;
            };
        }
        else {
            boardarray[counter].stone.muehle = 'no';
            boardarray[counter+1].stone.muehle = 'no';
            boardarray[counter+2].stone.muehle = 'no';
        };
        counter = counter + 3;
    };

    // horizontal muehle

    // horizontal 0-9-21
    // muehle 8
    if (boardarray[0].stone.color == color && boardarray[9].stone.color == color && boardarray[21].stone.color == color && boardarray[0].stone.muehle != 8) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[0].stone.muehle = 8;
            boardarray[9].stone.muehle = 8;
            boardarray[21].stone.muehle = 8;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[0].stone.muehle = 8;
            boardarray[9].stone.muehle = 8;
            boardarray[21].stone.muehle = 8;
            killwhite = true;
        };
    }
    else {
        boardarray[0].stone.muehle = 'no';
        boardarray[9].stone.muehle = 'no';
        boardarray[21].stone.muehle = 'no';
    };

    // horizontal 3-10-18
    // muehle 9
    if (boardarray[3].stone.color == color && boardarray[10].stone.color == color && boardarray[18].stone.color == color && boardarray[3].stone.muehle != 9) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[3].stone.muehle = 9;
            boardarray[10].stone.muehle = 9;
            boardarray[18].stone.muehle = 9;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[3].stone.muehle = 9;
            boardarray[10].stone.muehle = 9;
            boardarray[18].stone.muehle = 9;
            killwhite = true;
        };
    }
    else {
        boardarray[3].stone.muehle = 'no';
        boardarray[10].stone.muehle = 'no';
        boardarray[18].stone.muehle = 'no';
    };

    // horizontal 6-11-15
    // muehle 10
    if (boardarray[6].stone.color == color && boardarray[11].stone.color == color && boardarray[15].stone.color == color && boardarray[6].stone.muehle != 10) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[6].stone.muehle = 10;
            boardarray[11].stone.muehle = 10;
            boardarray[15].stone.muehle = 10;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[6].stone.muehle = 10;
            boardarray[11].stone.muehle = 10;
            boardarray[15].stone.muehle = 10;
            killwhite = true;
        };
    }
    else {
        boardarray[6].stone.muehle = 'no';
        boardarray[11].stone.muehle = 'no';
        boardarray[15].stone.muehle = 'no';
    };

    // horizontal 1-4-7
    // muehle 11
    if (boardarray[1].stone.color == color && boardarray[4].stone.color == color && boardarray[7].stone.color == color && boardarray[1].stone.muehle != 11) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[1].stone.muehle = 11;
            boardarray[4].stone.muehle = 11;
            boardarray[7].stone.muehle = 11;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[1].stone.muehle = 11;
            boardarray[4].stone.muehle = 11;
            boardarray[7].stone.muehle = 11;
            killwhite = true;
        };
    }
    else {
        boardarray[1].stone.muehle = 'no';
        boardarray[4].stone.muehle = 'no';
        boardarray[7].stone.muehle = 'no';
    };

    // horizontal 16-19-22
    // muehle 12
    if (boardarray[16].stone.color == color && boardarray[19].stone.color == color && boardarray[22].stone.color == color && boardarray[16].stone.muehle != 12) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[16].stone.muehle = 12;
            boardarray[19].stone.muehle = 12;
            boardarray[22].stone.muehle = 12;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[16].stone.muehle = 12;
            boardarray[19].stone.muehle = 12;
            boardarray[22].stone.muehle = 12;
            killwhite = true;
        };
    }
    else {
        boardarray[16].stone.muehle = 'no';
        boardarray[19].stone.muehle = 'no';
        boardarray[22].stone.muehle = 'no';
    };

    // horizontal 8-12-17
    // muehle 13    
    if (boardarray[8].stone.color == color && boardarray[12].stone.color == color && boardarray[17].stone.color == color && boardarray[8].stone.muehle != 13) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[8].stone.muehle = 13;
            boardarray[12].stone.muehle = 13;
            boardarray[17].stone.muehle = 13;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[8].stone.muehle = 13;
            boardarray[12].stone.muehle = 13;
            boardarray[17].stone.muehle = 13;
            killwhite = true;
        };
    }
    else {
        boardarray[8].stone.muehle = 'no';
        boardarray[12].stone.muehle = 'no';
        boardarray[17].stone.muehle = 'no';
    };

    // horizontal 5-13-20
    // muehle 14
    if (boardarray[5].stone.color == color && boardarray[13].stone.color == color && boardarray[20].stone.color == color && boardarray[5].stone.muehle != 14) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[5].stone.muehle = 14;
            boardarray[13].stone.muehle = 14;
            boardarray[20].stone.muehle = 14;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[5].stone.muehle = 14;
            boardarray[13].stone.muehle = 14;
            boardarray[20].stone.muehle = 14;
            killwhite = true;
        };
    }
    else {
        boardarray[5].stone.muehle = 'no';
        boardarray[13].stone.muehle = 'no';
        boardarray[20].stone.muehle = 'no';
    };

    // horizontal 2-14-23
    // muehle 15
    if (boardarray[2].stone.color == color && boardarray[13].stone.color == color && boardarray[23].stone.color == color && boardarray[2].stone.muehle != 15) {
        console.log('mühle detectet');
        if (color == 'white') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
            // adds the current muehle to the stones
            boardarray[2].stone.muehle = 15;
            boardarray[14].stone.muehle = 15;
            boardarray[23].stone.muehle = 15;
            killblack = true;
        };

        if (color == 'black') {
            document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
            // adds the current muehle to the stones
            boardarray[2].stone.muehle = 15;
            boardarray[14].stone.muehle = 15;
            boardarray[23].stone.muehle = 15;
            killwhite = true;
        };
    }
    else {
        boardarray[2].stone.muehle = 'no';
        boardarray[14].stone.muehle = 'no';
        boardarray[23].stone.muehle = 'no';
    };
};