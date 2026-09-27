color = 0
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
背景 = image.create(scene.screen_width(), scene.screen_height())
背景.fill(15)
while False:
    color = color+1
    背景.fill(color)