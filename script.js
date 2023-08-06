

// import '/moves.js'

class SilksMove{
    constructor(name){
        this.children = [];
        this.name = name;
    }
    add_children(more_children){
        for (var i in more_children){
            this.children.push(more_children[i])
        }
    }
    toString(){
        return this.name
    }
    get_children(){
        return this.children
    }
}

class MoveButton extends HTMLButtonElement{
    constructor(){
        super();
        this.move = new SilksMove('',[]) // initialize with an empty move
    }
}

// class ClickAndHold{
//     constructor(target, callback_function){
//         this.target = target;
//         this.callback_function = callback_function;
//         this.isHeld = false;
//         this.activeHoldTimeoutId = null;

//         ['mousedown', 'touchstart'].forEach(type => {
//             this.target.addEventListener(type, this._onHoldStart.bind(this));
//         })

//         ['mouseup','mouseleave','mouseout'].forEach(type => {
//             this.target.addEventListener(type, this._onHoldEnd.bind(this));
//         })
//     }
//     _onHoldStart(){
//         console.log('holding')
//         this.isHeld = true;
//         this.activeHoldTimeoutId = setTimeout(() => {
//             if (this.isHeld){
//                 this.callback_function();
//             }
//         }, 1000);
//     }

//     _onHoldEnd(){
//         this.isHeld = false;
//         clearTimeout(this.activeHoldTimeoutId);
//     }
// }

// funtion to create the first set of moves from initialization
function generate_start_button(pressed_button) {

    let myDiv = document.getElementById("options"); // options is the name of the div that holds the buttons

    for (i in start.children){

        let button = document.createElement('button', is = 'silks-move'); // create the new button as a silks move holder

        button.className = 'move'
        button.move = start.children[i] // assign the correct move to the buttom object
        button.onclick = function(){
            generate_move_options(button, button.move);
        }
    
        let text = document.createTextNode(button.move.name); // make the text of the button the name of the move it represents
        
        button.appendChild(text); // appending text to button
        myDiv.appendChild(button); // appending button to div
    }

    pressed_button.remove()
}

function generate_move_options(pressed_button, move){

    let myDiv = document.getElementById("options"); // options is the name of the div that holds the buttons
    myDiv.replaceChildren(); // remove any buttons that exist in this div (these are the buttons that were not chosen)
    let routineDiv = document.getElementById("routine"); // the dive that holds the current routine as text

    // iterate over the children of the move
    for (i in move.children){

        let button = document.createElement('button', is = 'silks-move'); // create the new button as a silks move holder

        button.className = 'move'
        button.move = move.children[i] // assign the correct move to the buttom object
        button.onclick = function(){
            generate_move_options(button, button.move);
        }
    
        let text = document.createTextNode(button.move.name); // make the text of the button the name of the move it represents
        let view = document.createTextNode('view'); // make the text of the button the name of the move it represents
        
        button.appendChild(text); // appending text to button
        myDiv.appendChild(button); // appending button to div
        // myDiv.appendChild(view); // appending button to div

    }

    let list_item = document.createElement('li')
    let text = document.createTextNode(move.name);
    list_item.appendChild(text)
    routineDiv.appendChild(list_item)

    pressed_button.remove()

}


function init_moves(){

    start = new SilksMove("Start")
    end = new SilksMove("End")

    cats = new SilksMove('Catscraddle')
    belay = new SilksMove("Belay")
    cats_knee = new SilksMove('Catscraddle kneehook')
    flamingo = new SilksMove('Flamingo')
    hangman = new SilksMove('Hangman')
    basket = new SilksMove('Basket')
    fs11 = new SilksMove('1 Footlock 1 Silk')
    loose_silks = new SilksMove('Loose Silk')

    start.add_children([fs11])
    fs11.add_children([belay,basket,end])
    belay.add_children([end])
    basket.add_children([cats_knee,flamingo,fs11])
    cats.add_children([end])
    cats_knee.add_children([belay,loose_silks])
    flamingo.add_children([hangman,basket])
    hangman.add_children([basket, fs11])

    // start.add_children([belay, cats])
    // belay.add_children([cats])
    // console.log(start.children)
}

function press_and_hold() {

    var mouseTimer;
    function mouseDown() { 
        mouseUp(); // clear the timout to resart it agaisn so spamming does not trigger
        mouseTimer = window.setTimeout(execMouseDown,1000); //set timeout to fire in 2 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
        div.style.backgroundColor = "#FFFFFF";
    }
  
    function execMouseDown() { 
        div.style.backgroundColor = "#CFCF00";
    }
  
    var div = document.getElementById("test_stuff");
    div.addEventListener("mousedown", mouseDown);
    div.addEventListener('touchstart', mouseDown)
    document.body.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on
    document.body.addEventListener("touchend", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on
    
};

// press_and_hold()

init_moves()




customElements.define("silks-move", MoveButton, {extends: "button"});


const myButton = document.getElementById('test_stuff')

// new ClickAndHold(myButton, () => {
//     alert('Click and Hold');
// })


