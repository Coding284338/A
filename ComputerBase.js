class ComputerBase
{
    constructor(a,b,c,d)
{
    var CB_options = {
        isStatic : true
    }
this.x = a;
this.y = b;
this.width = c;
this.height = d;


this.body = Bodies.rectangle(a,b,c,d,CB_options);
this.image = loadImage("assets/base1.png");
// adding the object inside the world
World.add(world,this.body);

}

    display()
    {   
// creating a variable to store the position of the ground
var CB_position = this.body.position;
push ();
// taking the values of X and Y from the player
translate(CB_position.x,CB_position.y);
// bringing the objects by default in center
imageMode(CENTER);

// Maintaning the order of the natural properties while creating the object in the sketch.js file.
image(this.image,0,0,this.width,this.height);

pop();
    }
}