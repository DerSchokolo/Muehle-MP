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
boardarray = [];
for (i=0; i<24; i++) {
    boardarray[i] = new board(i, 'empty');
};