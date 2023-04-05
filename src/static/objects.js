// constructur for board object
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
};

// constructur for player object
function player(name) {
    this.name = name;
    this.wins = 0;
    this.loses = 0;
};