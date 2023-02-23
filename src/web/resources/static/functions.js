// vars

let killwhite = false;
let killblack = false;

// main game phase index
// 'setzphase', 'zugphase', 'springphase'
let gamephase = "setzphase";

// constructur for boardfields object
function board(field, color, original) {
    this.field = field;
    this.color = color; // White, black, empty
    this.original = original; // saves original position of stone (provides data to prevent moving a stone two times in buildingphase)
};

// creates var vor every fieled on the board
let boardarray = [];
for (i=0; i<24; i++) {
    boardarray[i] = new board(i, 'empty');
};

let stonesInGame = 0;



/////////////////////////////////////
// functions
////////////////////////////////////




// print input from grid in console
function muehleevent() {
    var selection = this.id;
    selection = Number(selection);
    console.log(selection);
    if (killwhite == true && boardarray[selection].color == 'white' && gamephase == 'zugphase' || gamephase == 'springphase') {
        console.log('killwhite')
        var element = document.getElementById(selection);
        element.parentNode.removeChild(element);
        killwhite = false;
        return;
    };
    
    if (killblack == true && boardarray[selection].color == 'black' && gamephase == 'zugphase' || gamephase == 'springphase') {
        console.log('killblack')
        var element = document.getElementById(selection);
        element.parentNode.removeChild(element);
        killblack = false;
        return;
    }; 

    // !!!! TODO finish function
};

// checks if the building phase of the game has finished
function phasewatcher() {
    if (stonesInGame == 18) {
        document.getElementById('phase').innerHTML = "Zugphase";
        return 'turnphase';
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
            if (boardarray[counter].color == color && boardarray[counter+1].color == color && boardarray[counter+2].color == color) {
                console.log('mühle detectet')
                if (color == 'white') {
                    killblack = true;
                    return 'white';
                };
    
                if (color == 'black') {
                    killwhite = true;
                    return 'black';
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
        if (boardarray[0].color == color && boardarray[9].color == color && boardarray[21].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 3-10-18
        if (boardarray[3].color == color && boardarray[10].color == color && boardarray[18].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 6-11-15
        if (boardarray[6].color == color && boardarray[11].color == color && boardarray[15].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 1-4-7
        if (boardarray[1].color == color && boardarray[4].color == color && boardarray[7].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 16-19-22
        if (boardarray[16].color == color && boardarray[19].color == color && boardarray[22].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 8-12-17
        if (boardarray[8].color == color && boardarray[12].color == color && boardarray[17].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 5-13-20
        if (boardarray[5].color == color && boardarray[13].color == color && boardarray[20].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };

        // horizontal 2-14-23
        if (boardarray[2].color == color && boardarray[13].color == color && boardarray[23].color == color) {
            console.log('mühle detectet');
            if (color == 'white') {
                killblack = true;
                return 'white';
            };

            if (color == 'black') {
                killwhite = true;
                return 'black';
            };
        };
        color = "black";
    };
    console.log('keine mühle detectet')
    return 'nomuehle';
};