

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
        if (this.children.length >=1){
            var childrenNames = this.children[0].name;
            for (let i = 1; i < this.children.length; i++){
                childrenNames = childrenNames +","+ this.children[i].name;
                // console.log(this.children[i].name);
            }
            
            return `Name: ${this.name}, Children: [${childrenNames}]`
        }
        else{
            return `Name: ${this.name}, Children: [None]`
        }

        
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

    for (i in objectMoves[0].children){

        create_move_blocks(myDiv, objectMoves[0].children[i]);
    }

    pressed_button.closest('.list-item').remove();
}

function generate_move_options(pressed_button, move){

    let myDiv = document.getElementById("options"); // options is the name of the div that holds the buttons
    myDiv.replaceChildren(); // remove any buttons that exist in this div (these are the buttons that were not chosen)
    let routineDiv = document.getElementById("routine"); // the div that holds the current routine as text

    // iterate over the children of the move
    for (i in move.children){

        create_move_blocks(myDiv, move.children[i]);

    }

    // Add the seelcted move to the active routine
    let list_item = document.createElement('li')
    let text = document.createTextNode(move.name);
    list_item.appendChild(text)
    routineDiv.appendChild(list_item)

    pressed_button.closest('.list-item').remove();

}

function create_move_blocks(div_to_append_to, child){

    // Create the continer for the button and info
    let listItem = document.createElement('div'); // grab the div that holds all the moves and their details
    listItem.className = "list-item";

    // Create the button with the correct move name
    let button = document.createElement('button', is = 'silks-move'); // create the new button as a silks move holder
    button.className = 'move'
    button.move = child // assign the correct move to the buttom object
    button.onclick = function(){
        generate_move_options(button, button.move);
    }
    let text = document.createTextNode(button.move.name); // make the text of the button the name of the move it represents
    button.appendChild(text); // appending text to button

    // Create the info icon
    let infoIcon = document.createElement('span');
    infoIcon.className = 'info-icon';
    infoIcon.textContent = '🔍';
    infoIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleInfo(infoIcon);
    });

    // Create the info dialauge
    let infoDialog = document.createElement('div');
    infoDialog.className = 'info-dialog';
    infoDialog.textContent = "infoText";

    button.appendChild(infoIcon);
    listItem.appendChild(button);
    listItem.appendChild(infoDialog);
    div_to_append_to.appendChild(listItem); // appending button to div

}

function toggleInfo(iconElement) {
    let listItem = iconElement.closest('.list-item');
    // if (!listItem) return;
    console.log(listItem);
    let dialog = listItem.querySelector('.info-dialog');
    let button = listItem.querySelector('.move');
    // if (!dialog || !button) return;

    let isActive = dialog.classList.contains('active');

    document.querySelectorAll('.info-dialog').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.move').forEach(b => b.classList.remove('open'));

    if (!isActive) {
        dialog.classList.add('active');
        button.classList.add('open');
    }
}

function init_moves(){

    objectMoves = [];

    for (let i = 0; i< loaded_silks_moves.length; i++){
        var moveName = loaded_silks_moves[i][0];

        // console.log(moveName)

        //need to initilize all the moves before initilizing any children since it will throw an error if you try to add a child that does not exist
        objectMoves.push(new SilksMove(moveName));
    }

    for (let i = 0; i< loaded_silks_moves.length; i++){
        var moveName = loaded_silks_moves[i][0];
        var moveChildren = loaded_silks_moves[i][1]; // Array of strings with the names of the children

        // console.log(moveChildren);

        //initilize the children array
        children = []
        // find the children in the moves array
        for (k in moveChildren){
            for (let j = 0; j< objectMoves.length; j++){
                if (objectMoves[j].name == moveChildren[k]){
                    // append the child to the children array
                    children.push(objectMoves[j]);
                }
            }
        }
        console.log(children);
        // append the children array to the move
        objectMoves[i].add_children(children);
    }

    console.log(objectMoves);

}

init_moves()

customElements.define("silks-move", MoveButton, {extends: "button"});

const myButton = document.getElementById('test_stuff'); // not sure we actually need this anymore

// code to handle the checkboxs that control easy medium and hard
const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('checked');
    });
});

// code to handle the moves buttons and when they are opened and closed to reveal the extra info
// function handleMainClick(option) {
//     alert('Main button clicked: ' + option);
// }



