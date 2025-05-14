
// import '/script.js'
// import SilksMove from '/script.js'

// let start = new SilksMove('Start')
// let belay = new SilksMove('Belay')
// let cats = new SilksMove('Cats')

// start.add_children([belay, cats])
// belay.add_children([cats])
// console.log(start.children)

var loaded_silks_moves = [["Start",["Loose Silks"]],
            ["End",["Start"]],

            // From the entiries
            ["Loose Silks",["1 Footlock 1 Silk", "Hip Key", "Crochet Legs", "Hip Hitch", "Catchers"]],
            
            
            // Moves from 1 footlock 1 silk
            ["1 Footlock 1 Silk",["Belay", "Basket", "End"]],
            ["Belay",["End"]],
            ["Basket",["Cats Craddle Knee Hook", "Flamingo", "Cats Craddle"]],
            ["Cats Craddle Knee Hook",["Belay", "Loose Silks"]],
            ["Cats Craddle",["End"]],
            ["Flamingo",["Hangman", "Basket"]],
            ["Hangman",["Basket", "1 Footlock 1 Silk"]],

            // Moves from hip key
            ["Hip Key",["Lady in the Moon", "Gazelle"]],
            ["Gazelle",["Gazelle Salto", "Hip Key"]],
            ["Gazelle Salto",["Hip Key", "Loose Silks"]],
            ["Lady in the Moon",["Hip Key", "Crochet Legs"]],

            // Moves from Crochet Legs
            ["Crochet Legs",["Flip Seat"]],
            ["Flip Seat",["Cleopatra", "360", "Airplane Variation", "Bullet Drop"]],
            ["Cleopatra",["360", "Loose Silks"]],
            ["360",["Loose Silks"]],
            ["Airplane Variation",["Loose Silks"]],
            ["Bullet Drop",["Loose Silks"]],

            ["Hip Hitch",["Archer", "Hip Key"]],
            ["Archer",["Hip Hitch"]],

            ["Catchers",["Nah who wants to do catchers anyway"]],
            ["Nah who wants to do catchers anyway",["Loose Silks"]],
            

            ]