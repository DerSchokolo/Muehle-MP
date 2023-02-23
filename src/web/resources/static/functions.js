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
// returns  'white' for white muehle 
//          'black' for black muehle
//          'nomuehle' for no detectet muehle
function detectmuehle(boardarray) {

    // vertical muehle
    let color = "white";
    for (i=0; i<2; i++) {
        let counter = 0;
        for (j=0; j<8; j++) {
            if (boardarray[counter].stone.color == color && boardarray[counter+1].stone.color == color && boardarray[counter+2].stone.color == color) {
                console.log('mühle detectet')
                if (color == 'white') {
                    document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein!';
                    killblack = true;
                };
    
                if (color == 'black') {
                    document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                    killwhite = true;
                };
            };
            counter = counter + 3;
        };
        color = "black";
    }; 

    // horizontal muehle
    color = "white";
    for (i=0; i<2; i++) {
        // vertical 0-9-21
        if (boardarray[0].stone.color == color && boardarray[9].stone.color == color && boardarray[21].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 3-10-18
        if (boardarray[3].stone.color == color && boardarray[10].stone.color == color && boardarray[18].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 6-11-15
        if (boardarray[6].stone.color == color && boardarray[11].stone.color == color && boardarray[15].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 1-4-7
        if (boardarray[1].stone.color == color && boardarray[4].stone.color == color && boardarray[7].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 16-19-22
        if (boardarray[16].stone.color == color && boardarray[19].stone.color == color && boardarray[22].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 8-12-17
        if (boardarray[8].stone.color == color && boardarray[12].stone.color == color && boardarray[17].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 5-13-20
        if (boardarray[5].stone.color == color && boardarray[13].stone.color == color && boardarray[20].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };

        // horizontal 2-14-23
        if (boardarray[2].stone.color == color && boardarray[13].stone.color == color && boardarray[23].stone.color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen schwarzen Stein';
                killblack = true;
            };

            if (color == 'black') {
                document.getElementById('notification').innerHTML = 'Mühle! Nimm einen weißen Stein!';
                killwhite = true;
            };
        };
        color = "black";
    };
    console.log('keine mühle detectet')
};