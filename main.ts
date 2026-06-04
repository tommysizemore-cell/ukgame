namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    info.changeScoreBy(1)
})
let coinImg = img`
    . . . . . . . . . . . . . . .
    . . . . . . . c c . . . . . .
    . . . . . . c 5 5 c . . . . .
    . . . . . c 5 5 5 5 c . . . .
    . . . . . c 5 5 5 5 c . . . .
    . . . . . . c 5 5 c . . . . .
    . . . . . . . c c . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . .
    `
for (let col = 0; col < tiles.tilemapColumns(); col++) {
    let topCoin = sprites.create(coinImg, SpriteKind.Coin)
    tiles.placeOnTile(topCoin, tiles.getTileLocation(col, 0))
    topCoin.setFlag(SpriteFlag.Ghost, true)
    let bottomCoin = sprites.create(coinImg, SpriteKind.Coin)
    tiles.placeOnTile(bottomCoin, tiles.getTileLocation(col, tiles.tilemapRows() - 1))
    bottomCoin.setFlag(SpriteFlag.Ghost, true)
}
for (let row = 1; row < tiles.tilemapRows() - 1; row++) {
    let leftCoin = sprites.create(coinImg, SpriteKind.Coin)
    tiles.placeOnTile(leftCoin, tiles.getTileLocation(0, row))
    leftCoin.setFlag(SpriteFlag.Ghost, true)
    let rightCoin = sprites.create(coinImg, SpriteKind.Coin)
    tiles.placeOnTile(rightCoin, tiles.getTileLocation(tiles.tilemapColumns() - 1, row))
    rightCoin.setFlag(SpriteFlag.Ghost, true)
}
let goal2 = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 8 4 4 8 4 f b b f . 
    . . f 4 4 8 e d d d 8 f e f . . 
    . . f e 4 4 8 d d 8 d c 4 e . . 
    . . . f e 8 d d b d 8 b f e . . 
    . . . f f 1 8 1 d 8 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `, SpriteKind.goal)
goal2.setPosition(752, 80)
let mySprite2 = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555522155555c
    ......cb555555552255d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Enemy)
mySprite2.setPosition(208, 80)
mySprite2.vx = 50
mySprite2.setBounceOnWall(true)
mySprite2.vx = 50
let mySprite3 = sprites.create(img`
    ........................
    ........................
    ..........ccccccc.......
    .........c7777777c......
    ........c777777777c.....
    .......c7777777777c.....
    ......c777777777777c....
    .....c7777777777777c....
    ....c777777777777777c...
    ....c777777777777777c...
    ....c777777777777777c...
    ....c777777777777777c...
    .....c7777777777777c....
    ......c777777777777c....
    .......c7777777777c.....
    ........c77777777c......
    .........c777777c.......
    ..........cccccc........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite3.setPosition(432, 56)
mySprite3.vx = -40
mySprite3.setBounceOnWall(true)
