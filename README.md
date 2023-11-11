PseudoCode Slot Machine:
* slot machines have 5 symbols on each reel
*Use while loop - until each array match, player can keep spinning
*.forEach on arrays? 


HTML:
//create header with SLOT MACHINE between the tags
//<h2 saying - get three in a row to win! 
//<h3 Winner! 
//create a div container for the slot machine
//create three divs inside the container div with id's of reel1, reel2 and reel3
//create a spin again button


Javascript:

//declare state variables  
   //reel1 - set to an empty array
   //reel2 - set to an empty array
   //reel3 - set to an empty array
   //current or result  - stores each element of reel1, reel2, reel3 after every spin
   //win - set to a boolean are all three arrays matching 

//DOM Elements 
   //getelementbyid = reel1
  //getelementbyid = reel2
 //getelementbyid = reel3
//addeventlistener = button 


//declare functions
 
   //spinInit function
      //use math.random on each array to to generate
      //push each result into the result array
      //use a conditional to see if each array element matches
         //if each  element is the same update win var (h3)
         //else update h2 - to spin again
      //render


//render function