let input2 = ""
let 背景: Image = null
let obj1: Sprite = null
let color = 0
// input
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        input2 = "" + input2 + "A"
    } else if (controller.B.isPressed()) {
        input2 = "" + input2 + "B"
    } else if (controller.up.isPressed()) {
        input2 = "" + input2 + "^"
    } else if (controller.down.isPressed()) {
        input2 = "" + input2 + "V"
    } else if (controller.left.isPressed()) {
        input2 = "" + input2 + "<"
    } else if (controller.right.isPressed()) {
        input2 = "" + input2 + ">"
    }
})
game.onUpdate(function () {
    scene.setBackgroundImage(背景)
    console.log("newf")
})
forever(function () {
    obj1 = sprites.create(img`
        . . f f f f f f f f f f . . . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 2 2 1 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 1 d d 1 1 1 f . . 
        . . f 1 1 1 1 2 2 1 1 1 1 f . . 
        . . f 1 1 1 1 2 2 d 1 1 1 f . . 
        . . f 1 1 1 1 1 d d 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    背景 = image.create(scene.screenWidth(), scene.screenHeight())
    input2 = ""
    scene.setBackgroundImage(背景)
    while (true) {
        color = color + 1
        背景.fill(color)
        pause(1000)
        if (input2.includes("^^VV<<>>")) {
            break;
        }
    }
    背景.fill(15)
    obj1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(36000000)
    game.reset()
})
