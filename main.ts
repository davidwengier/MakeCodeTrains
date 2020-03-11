namespace SpriteKind {
    export const Track = SpriteKind.create()
}
function updateCursor () {
    cursor.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (8 < x) {
        x += -16
        updateCursor()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    y = 16 + y
    updateCursor()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentTrack == horizTrack) {
        currentTrack = vertTrack
    } else {
        currentTrack = horizTrack
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    trackPiece = sprites.create(currentTrack, SpriteKind.Track)
    trackPiece.setPosition(x, y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 16 + x
    updateCursor()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (8 < y) {
        y += -16
        updateCursor()
    }
})
let trackPiece: Sprite = null
let y = 0
let x = 0
let cursor: Sprite = null
let currentTrack: Image = null
let vertTrack: Image = null
let horizTrack: Image = null
scene.setBackgroundColor(1)
horizTrack = img`
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
`
vertTrack = img`
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
. . f f 1 f f f f f f 1 f f . . 
. . f f 1 f f f f f f 1 f f . . 
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
. . f f 1 f f f f f f 1 f f . . 
. . f f 1 f f f f f f 1 f f . . 
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
. . f f 1 f f f f f f 1 f f . . 
. . f f 1 f f f f f f 1 f f . . 
. . . f 1 f . . . . f 1 f . . . 
. . . f 1 f . . . . f 1 f . . . 
`
currentTrack = horizTrack
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
