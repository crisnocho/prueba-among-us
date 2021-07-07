namespace SpriteKind {
    export const Asteroide = SpriteKind.create()
    export const intro = SpriteKind.create()
    export const INTRO1 = SpriteKind.create()
    export const INTRO2 = SpriteKind.create()
    export const BOTON_A = SpriteKind.create()
    export const intro3 = SpriteKind.create()
    export const intro4 = SpriteKind.create()
    export const intro5 = SpriteKind.create()
}
function inicio () {
    effects.starField.startScreenEffect()
    pause(2000)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f 7 7 7 7 f f f f . . . . . 
        . . f 7 7 7 f d d d d f . . . . 
        f f f 7 7 f d d d d d d f . . . 
        f 7 f 7 7 f d d d d d d f . . . 
        f 7 f 7 7 7 f d d d d f . . . . 
        f 7 f 7 7 7 7 f f f f f . . . . 
        f 7 f 7 7 7 7 7 7 7 7 f . . . . 
        f 7 f 7 7 7 7 7 7 7 7 f . . . . 
        f f f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 f f 7 7 7 f . . . . 
        . . f 7 7 7 f f 7 7 7 f . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
}
function introduccion () {
    effects.starField.startScreenEffect()
    pause(5000)
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 4 4 4 4 4 f . . . . . . 
        . . f 4 4 4 4 f f f f . . . . . 
        . . f 4 4 4 f d d d d f . . . . 
        f f f 4 4 f d d d d d d f . . . 
        f 4 f 4 4 f d d d d d d f . . . 
        f 4 f 4 4 4 f d d d d f . . . . 
        f 4 f 4 4 4 4 f f f f f . . . . 
        f 4 f 4 4 4 4 4 4 4 4 f . . . . 
        f 4 f 4 4 4 4 4 4 4 4 f . . . . 
        f f f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 4 4 4 f f 4 4 4 f . . . . 
        . . f 4 4 4 f f 4 4 4 f . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.intro5)
    animation.runImageAnimation(
    mySprite7,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f 4 4 4 4 4 f . . . . . . . 
        . . f 4 4 4 f f f f . . . . . . 
        . . f 4 4 f d d d d f . . . . . 
        f f f 4 f d d d d d d f . . . . 
        f 4 f 4 f d d d d d d f . . . . 
        f 4 f 4 4 f d d d d f . . . . . 
        f 4 f 4 4 4 f f f f f . . . . . 
        f 4 f 4 4 4 4 4 4 4 f . . . . . 
        f f f 4 4 4 4 4 4 4 f . . . . . 
        . . f 4 4 4 f f 4 4 f . . . . . 
        . . f 4 4 4 f f 4 4 f . . . . . 
        . . . f f f . . f f . . . . . . 
        `,img`
        . . . f f f f f f . . . . . . . 
        . . . f 4 4 4 4 f . . . . . . . 
        . f f f f f f f f f f f . . . . 
        f 4 4 4 4 4 4 4 4 4 4 4 f . . . 
        f 4 4 4 4 4 4 f f 4 4 4 f . . . 
        f 4 4 4 4 4 f d d f 4 4 f . . . 
        . f f 4 4 f d d d d f 4 f . . . 
        . f f 4 4 f d d d d f 4 f . . . 
        f 4 4 4 4 f d d d d f f . . . . 
        f 4 4 4 4 f d d d d f . . . . . 
        . f f f f f f d d f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f . . f f f . . . 
        . . . . . f 4 4 f f 4 4 4 f . . 
        . . . . . f 4 4 f f 4 4 4 f . . 
        . . . . . f 4 4 4 4 4 4 4 f f f 
        . . . . . f 4 4 4 4 4 4 4 f 4 f 
        . . . . . f f f f f 4 4 4 f 4 f 
        . . . . . f d d d d f 4 4 f 4 f 
        . . . . f d d d d d d f 4 f 4 f 
        . . . . f d d d d d d f 4 f f f 
        . . . . . f d d d d f 4 4 f . . 
        . . . . . . f f f f 4 4 4 f . . 
        . . . . . . . f 4 4 4 4 4 f . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f d d f f f f f f . 
        . . . . . f d d d d f 4 4 4 4 f 
        . . . . f f d d d d f 4 4 4 4 f 
        . . . f 4 f d d d d f 4 4 f f . 
        . . . f 4 f d d d d f 4 4 f f . 
        . . . f 4 4 f d d f 4 4 4 4 4 f 
        . . . f 4 4 4 f f 4 4 4 4 4 4 f 
        . . . f 4 4 4 4 4 4 4 4 4 4 4 f 
        . . . . f f f f f f f f f f f . 
        . . . . . . . f 4 4 4 4 f . . . 
        . . . . . . . f f f f f f . . . 
        `],
    200,
    true
    )
    mySprite7.setPosition(6, 101)
    mySprite7.setVelocity(20, -10)
    mySprite4 = sprites.create(img`
        ..........................................................................................
        ..........................................................................................
        ....1111......1.....1.....111...11.....1...111........1.....1...111.......................
        ...1....1....1.1...1.1...1...1..1.1....1..1...1.......1.....1..1...1......................
        ..1111...1...1.1...1.1..1.....1.1.1....1.1.....1......1.....1.1...........................
        .1....1..1..1...1.1...1.1.....1.1..1...1.1.....1......1.....1.1...........................
        .1....1..11.1...1.1...1.1.....1.1..1...1.1............1.....1.1...........................
        ..1111...11.1...1.1...1.1.....1.1..1...1.1.......111..1.....1..1..........................
        ...1.....11.1....1....1.1.....1.1..1...1.1..111..111..1.....1...1111......................
        ...1.....11.1.........1.1.....1.1...1..1.1.1...1......1.....1.......1.....................
        ...1.....11.1.........1.1.....1.1...1..1.1.....1......1.....1.......1.....................
        ...1.....11.1.........1.1.....1.1...11.1.1.....1......1.....1.......1.....................
        ...1.....1..1.........1.1.....1.1....1.1.1.....1......1.....1.1....1......................
        ...1..1..1..1.........1..1...1..1....111..1...1........1...1...1111.......................
        ....11.11...1.........1...111...1..........111..........111...............................
        ..........................................................................................
        `, SpriteKind.INTRO1)
    mySprite4.setPosition(90, -10)
    story.spriteMoveToLocation(mySprite4, 90, 40, 40)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . f 5 5 5 5 f f f f . . . . . 
        . . f 5 5 5 f d d d d f . . . . 
        f f f 5 5 f d d d d d d f . . . 
        f 5 f 5 5 f d d d d d d f . . . 
        f 5 f 5 5 5 f d d d d f . . . . 
        f 5 f 5 5 5 5 f f f f f . . . . 
        f 5 f 5 5 5 5 5 5 5 5 f . . . . 
        f 5 f 5 5 5 5 5 5 5 5 f . . . . 
        f f f 5 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 f f 5 5 5 f . . . . 
        . . f 5 5 5 f f 5 5 5 f . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.intro)
    mySprite2.setPosition(2, 60)
    story.spriteMoveToLocation(mySprite2, 70, 60, 20)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f 8 8 8 8 8 f . . . 
        . . . . . f f f f 8 8 8 8 f . . 
        . . . . f d d d d f 8 8 8 f . . 
        . . . f d d d d d d f 8 8 f f f 
        . . . f d d d d d d f 8 8 f 8 f 
        . . . . f d d d d f 8 8 8 f 8 f 
        . . . . f f f f f 8 8 8 8 f 8 f 
        . . . . f 8 8 8 8 8 8 8 8 f 8 f 
        . . . . f 8 8 8 8 8 8 8 8 f 8 f 
        . . . . f 8 8 8 8 8 8 8 8 f f f 
        . . . . f 8 8 8 f f 8 8 8 f . . 
        . . . . f 8 8 8 f f 8 8 8 f . . 
        . . . . . f f f . . f f f . . . 
        `, SpriteKind.INTRO2)
    mySprite3.setPosition(148, 60)
    story.spriteMoveToLocation(mySprite3, 90, 60, 20)
    pause(1000)
    mySprite5 = sprites.create(img`
        ..........................................................................................
        ......................................................................................2222
        .222222............................................................................2222222
        .2222222222.....................................................................2222222222
        .22222222222222..............................................................22222222222..
        .....22222222222222.......................................................22222222222.....
        .........222222222222222...............................................22222222222........
        .............22222222222222.........................................22222222222...........
        .................2222222222222...................................22222222222..............
        .....................22222222222222...........................22222222222.................
        .........................2222222222222.....................22222222222....................
        ............................222222222222222.............22222222222.......................
        ................................2222222222222........22222222222..........................
        ....................................22222222222...22222222222.............................
        .......................................2222222222222222222................................
        ..........................................2222222222222...................................
        ........................................222222222222222...................................
        .....................................222222222222222222222................................
        ..................................22222222222.....22222222222.............................
        ...............................22222222222...........22222222222..........................
        ............................22222222222.................222222222222......................
        .........................22222222222.......................2222222222222..................
        ......................22222222222.............................2222222222222...............
        ...................22222222222....................................22222222222.............
        ................22222222222...........................................222222222...........
        .............22222222222.................................................222222222........
        ..........22222222222.....................................................22222222222.....
        .......22222222222...........................................................22222222222..
        ....22222222222................................................................222222222..
        ..2222222222......................................................................222222..
        ..2222222............................................................................222..
        ..2222....................................................................................
        `, SpriteKind.intro3)
    mySprite5.setPosition(76, 45)
    mySprite6 = sprites.create(img`
        ...........................................................2..............................
        .......................................................22222..............................
        .........................................2......222.....2.22..............................
        ........................................222....22.2....22..2..............................
        .........................................2.....2.22....2...2..............................
        ...................................2222..22....2.22..2.22222..............................
        ..............................22...2......2....222..22....................................
        ........................2....2.22..2......2.....22..2.....................................
        ..................22.........222...22.....22.....2222.....................................
        .................22......22..22....22222...2222...........................................
        .................2........22..2222........................................................
        .................222......22..............................................................
        .................22....2...2..............................................................
        ..................22.222...2..............................................................
        ...................222.....2..............................................................
        ..........................22..............................................................
        `, SpriteKind.intro4)
    mySprite6.setPosition(65, 25)
    pause(3000)
    game.showLongText("PRESIONA A", DialogLayout.Bottom)
    effects.starField.startScreenEffect()
    tiles.destroySpritesOfKind(SpriteKind.INTRO1)
    tiles.destroySpritesOfKind(SpriteKind.INTRO2)
    tiles.destroySpritesOfKind(SpriteKind.intro)
    tiles.destroySpritesOfKind(SpriteKind.intro3)
    tiles.destroySpritesOfKind(SpriteKind.intro4)
    story.printText("Fuiste eyectado ahora debes continuar tu viaje por el espacio", 90, 10)
    pause(2000)
}
let asteroide: Sprite = null
let enemigo: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let mySprite7: Sprite = null
let mySprite: Sprite = null
introduccion()
inicio()
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f 7 7 7 7 f f f f . . . . . 
        . . f 7 7 7 f d d d d f . . . . 
        f f f 7 7 f d d d d d d f . . . 
        f 7 f 7 7 f d d d d d d f . . . 
        f 7 f 7 7 7 f d d d d f . . . . 
        f 7 f 7 7 7 7 f f f f f . . . . 
        f 7 f 7 7 7 7 7 7 7 7 f . . . . 
        f 7 f 7 7 7 7 7 7 7 7 f . . . . 
        f f f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 f f 7 7 7 f . . . . 
        . . f 7 7 7 f f 7 7 7 f . . . . 
        . . . f f f . . f f f . . . . . 
        `)
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
game.onUpdateInterval(5000, function () {
    enemigo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........1111..........
        ........11777711........
        .......1677777761.......
        .......1777777771.......
        ......197777777791......
        ......197777777791......
        ......199977779991......
        ......169619916961......
        ......1c9c1771c9c1......
        .......167777771111.....
        ......111c9679677761....
        ....1c777c6161797971....
        ....1797971111616161....
        ....16161111111.........
        .........11111..........
        ..........111...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    enemigo.setPosition(randint(5, 155), 0)
    enemigo.setVelocity(0, 50)
})
game.onUpdateInterval(2000, function () {
    asteroide = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Asteroide)
    asteroide.setPosition(randint(5, 155), 0)
    asteroide.setVelocity(0, 50)
})
