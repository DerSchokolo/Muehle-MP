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
};