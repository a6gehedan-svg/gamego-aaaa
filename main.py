mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
picture = image.create(scene.screen_width(), scene.screen_height())
picture.fill(2)
scene.set_background_image(picture)
i = 0
while i <= image.get_dimension(picture, image.Dimension.WIDTH):
    j = 0
    while j <= image.get_dimension(picture, image.Dimension.HEIGHT):
        picture.set_pixel(i, j, (i + j) / 3)
        scene.set_background_image(picture)
        print(picture)
        j += 1
    pause(0)
    i += 1