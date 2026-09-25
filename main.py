mySprite = sprites.create(img("""
        . . . . 3 . . 3 3 3 . . . . . .
        . . . . . . 3 3 . 3 . . . . . .
        . . 3 3 . 3 . . . 3 . . . . . .
        . . . 3 3 3 . . . 3 3 . . . . .
        . . . . 3 3 3 . . 3 3 . . . . .
        . . . . 3 . . 3 3 3 . . . . . .
        . . . . 3 . . . 3 3 3 . . . . .
        . . . . 3 3 . 3 . . 3 . . . . .
        . . . . . 3 3 3 3 3 . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 . . . . . . . . . .
        . . . . 3 . . . . . . . . . . .
        . . . . 3 3 3 3 3 3 3 3 3 3 3 3
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
picture = image.screen_image()
picture.fill(0)
scene.set_background_image(picture)
index = 0
while index <= image.get_dimension(picture, image.Dimension.WIDTH):
    index2 = 0
    while index2 <= image.get_dimension(picture, image.Dimension.HEIGHT):
        picture.set_pixel(0, 0, 0)
        index2 += 1
    index += 1