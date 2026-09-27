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
let color = 0
let input2 = ""
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
let 背景 = image.create(scene.screenWidth(), scene.screenHeight())
scene.setBackgroundImage(背景)
forever(function () {
    color = color + 1
    背景.fill(color)
    pause(1000)
})
game.onUpdateInterval(500, function () {
    scene.setBackgroundImage(背景)
    console.log("bbb")
})
