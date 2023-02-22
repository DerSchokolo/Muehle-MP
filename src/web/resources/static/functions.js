function detectinput() {
    console.log('input detectet field: ' + this.id);
};

// checks if the building phase of the game has finished
function gamephase() {
    counter = 0;
    for (i=0; i<24; i++) {
        if (boardarray[i].color == 'empty') {
            counter++;
        };    
    };
    if (counter == 6){
        document.getElementById('phase').innerHTML = "Zugphase";
    };
};

// constructur for boardfields object
function board(field, color) {
    this.field = field;
    this.color = color; // White, black, empty
};

// creates var vor every fieled on the board
let boardarray = [];
for (i=0; i<24; i++) {
    boardarray[i] = new board(i, 'empty');
};

// checks if muehle was detectet
function detectmuehle(boardarray) {

    // horizontal muehle
    let color = "white";
    for (i=0; i<2; i++) {
        let counter = 0;
        for (j=0; j<8; j++) {
            if (boardarray[counter].color == color && boardarray[counter+1].color == color && boardarray[counter+2].color == color) {
                console.log('mühle detectet');
                return;
            };
            counter = counter + 3;
        };
        color = "black";
    }; 

    // vertical muehle
    color = "white";
    for (i=0; i<2; i++) {
        if (//TODO Statements) {
            console.log('mühle detectet');
            return;
        };
        color = "black";
    };
    console.log('no mühle detectet'); 
};