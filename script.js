

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
        
        button.appendChild(text); // appending text to button
        myDiv.appendChild(button); // appending button to div

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
init_moves()


customElements.define("silks-move", MoveButton, {extends: "button"});




