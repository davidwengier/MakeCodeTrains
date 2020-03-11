namespace SpriteKind {
    export const Track = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    y = 16 - y
    updatePointer()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 16 + x
    updatePointer()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Track)
    mySprite.setPosition(y, x)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    y = 16 + y
    updatePointer()
})
function updatePointer () {
    mySprite2.setPosition(y, x)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    x += -16
    updatePointer()
})
let mySprite: Sprite = null
let x = 0
let y = 0
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, SpriteKind.Player)
updatePointer()
