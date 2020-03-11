namespace SpriteKind {
    export const Track = SpriteKind.create()
}
function updateCursor () {
    cursor.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    x += -16
    updateCursor()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    y = 16 + y
    updateCursor()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    trackPiece = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . f f . . . f f . . . f f . . 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
. . f f . . . f f . . . f f . . 
. . f f . . . f f . . . f f . . 
. . f f . . . f f . . . f f . . 
. . f f . . . f f . . . f f . . 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
. . f f . . . f f . . . f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Track)
    trackPiece.setPosition(x, y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 16 + x
    updateCursor()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    y += -16
    updateCursor()
})
let trackPiece: Sprite = null
let y = 0
let x = 0
let cursor: Sprite = null
scene.setBackgroundColor(1)
cursor = sprites.create(img`
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
x = 8
y = 8
updateCursor()
