let mySprite = sprites.create(img`
    2 . . . . . . . . . . . . . . 2 
    . 2 . . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . 2 . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . 2 . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . . 2 . 
    2 . . . . . . . . . . . . . . 2 
    `, SpriteKind.Player)
let picture = image.create(scene.screenWidth(), scene.screenHeight())
picture.fill(2)
scene.setBackgroundImage(picture)
for (let i = 0; i <= image.getDimension(picture, image.Dimension.Width); i++) {
    for (let j = 0; j <= image.getDimension(picture, image.Dimension.Height); j++) {
        picture.setPixel(i, j, (i + j) / 3)
        scene.setBackgroundImage(picture)
        console.log(picture)
    }
    pause(0)
}
