// constructur for boardfields object
function board(field, stone) {
    this.field = field;
    this.stone = stone;
};

// constructur for stones object
function stone(name, color, position) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.muehle = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

    this.move = function(oldposition, newposition) {
        oldposition = "empty";
        newposition = oldposition;
    };
};

function player(name) {
    this.name = name;
    this.wins = 0;
    this.loses = 0;
};