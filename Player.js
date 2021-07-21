class Player
{
    constructor(a,b,c,d)
{
    var player_options = {
        isStatic : true
    }
this.x = a;
this.y = b;
this.width = c;
this.height = d;


this.body = Bodies.rectangle(a,b,c,d,player_options);
this.image = loadImage("assets/player.png");
// adding the object inside the world
World.add(world,this.body);

}

    display()
    {   
// creating a variable to store the position of the ground
var player_position = this.body.position;
push ();
// taking the values of X and Y from the player
translate(player_position.x,player_position.y);
// bringing the objects by default in center
imageMode(CENTER);

// Maintaning the order of the natural properties while creating the object in the sketch.js file.
image(this.image,0,0,this.width,this.height);

pop();
    }
}