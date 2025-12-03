namespace SpriteKind {
    export const pawn = SpriteKind.create()
    export const king = SpriteKind.create()
    export const queen = SpriteKind.create()
    export const bishop = SpriteKind.create()
    export const knight = SpriteKind.create()
    export const rook = SpriteKind.create()
    export const selector = SpriteKind.create()
}
// 133, 8 top right
// 
// 8, 112 bottom left
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.y += -15
})
function posQueen () {
    b_queen_1 = sprites.create(assets.image`b_q`, SpriteKind.queen)
    b_queen_1.setPosition(53, 7)
    w_queen_2 = sprites.create(assets.image`w_q`, SpriteKind.queen)
    w_queen_2.setPosition(53, 112)
}
function posPawn () {
    b_pawn_8 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_8.setPosition(7, 22)
    b_pawn_7 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_7.setPosition(23, 22)
    b_pawn_6 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_6.setPosition(38, 22)
    b_pawn_5 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_5.setPosition(52, 22)
    b_pawn_4 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_4.setPosition(68, 22)
    b_pawn_3 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_3.setPosition(83, 22)
    b_pawn_2 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_2.setPosition(98, 22)
    b_pawn_1 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    b_pawn_1.setPosition(113, 22)
    w_pawn_8 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_8.setPosition(7, 97)
    w_pawn_7 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_7.setPosition(22, 97)
    w_pawn_6 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_6.setPosition(37, 97)
    w_pawn_5 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_5.setPosition(52, 97)
    w_pawn_4 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_4.setPosition(67, 97)
    w_pawn_3 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_3.setPosition(82, 97)
    w_pawn_2 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_2.setPosition(97, 97)
    w_pawn_1 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    w_pawn_1.setPosition(113, 97)
}
function posRook () {
    b_rook_2 = sprites.create(assets.image`b_r`, SpriteKind.rook)
    b_rook_2.setPosition(7, 7)
    b_rook_1 = sprites.create(assets.image`b_r`, SpriteKind.rook)
    b_rook_1.setPosition(113, 7)
    w_rook_2 = sprites.create(assets.image`w_r`, SpriteKind.rook)
    w_rook_2.setPosition(113, 112)
    w_rook_1 = sprites.create(assets.image`w_r`, SpriteKind.rook)
    w_rook_1.setPosition(7, 112)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    w_queen_2.setPosition(highlight.x, highlight.y - 1)
})
function sec2fancyMin (sec: number) {
    // Handle negative or invalid input
    if (sec < 0) {
        return "0:00"
    }
    // Calculate minutes and remaining seconds
    minutes = Math.floor(sec / 60)
    seconds = Math.floor(sec % 60)
    let secondsStr = seconds.toString()
if (seconds < 10) {
        secondsStr = "0" + secondsStr
    }
    return "" + minutes + ":" + secondsStr
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.x += -15
})
function posKnight () {
    b_knight_2 = sprites.create(assets.image`b_n`, SpriteKind.knight)
    b_knight_2.setPosition(98, 7)
    b_knight_1 = sprites.create(assets.image`b_n`, SpriteKind.knight)
    b_knight_1.setPosition(23, 7)
    w_knight_2 = sprites.create(assets.image`w_n`, SpriteKind.knight)
    w_knight_2.setPosition(98, 112)
    w_knight_1 = sprites.create(assets.image`w_n`, SpriteKind.knight)
    w_knight_1.setPosition(23, 112)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.x += 15
})
function posBishop () {
    b_bishop_2 = sprites.create(assets.image`b_b`, SpriteKind.bishop)
    b_bishop_2.setPosition(37, 7)
    b_bishop_1 = sprites.create(assets.image`b_b`, SpriteKind.bishop)
    b_bishop_1.setPosition(83, 7)
    w_bishop_2 = sprites.create(assets.image`w_b`, SpriteKind.bishop)
    w_bishop_2.setPosition(37, 112)
    w_bishop_1 = sprites.create(assets.image`w_b`, SpriteKind.bishop)
    w_bishop_1.setPosition(83, 112)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.y += 15
})
function posKing () {
    b_king_1 = sprites.create(assets.image`b_k`, SpriteKind.king)
    b_king_1.setPosition(68, 7)
    w_king_2 = sprites.create(assets.image`w_k`, SpriteKind.king)
    w_king_2.setPosition(68, 112)
}
let b_timer_txt: TextSprite = null
let w_timer_txt: TextSprite = null
let w_king_2: Sprite = null
let b_king_1: Sprite = null
let w_bishop_1: Sprite = null
let w_bishop_2: Sprite = null
let b_bishop_1: Sprite = null
let b_bishop_2: Sprite = null
let w_knight_1: Sprite = null
let w_knight_2: Sprite = null
let b_knight_1: Sprite = null
let b_knight_2: Sprite = null
let minutes = 0
let w_rook_1: Sprite = null
let w_rook_2: Sprite = null
let b_rook_1: Sprite = null
let b_rook_2: Sprite = null
let w_pawn_1: Sprite = null
let w_pawn_2: Sprite = null
let w_pawn_3: Sprite = null
let w_pawn_4: Sprite = null
let w_pawn_5: Sprite = null
let w_pawn_6: Sprite = null
let w_pawn_7: Sprite = null
let w_pawn_8: Sprite = null
let b_pawn_1: Sprite = null
let b_pawn_2: Sprite = null
let b_pawn_3: Sprite = null
let b_pawn_4: Sprite = null
let b_pawn_5: Sprite = null
let b_pawn_6: Sprite = null
let b_pawn_7: Sprite = null
let b_pawn_8: Sprite = null
let w_queen_2: Sprite = null
let b_queen_1: Sprite = null
let highlight: Sprite = null
// 0=white
// 1=black
let turn = 0
let seconds = 0
highlight = sprites.create(assets.image`highlight`, SpriteKind.selector)
highlight.setPosition(113, 113)
let w_timer_time = 600
let b_timer_time = 600
let pieces = [
"b_king_1",
"w_king_2",
"b_queen_1",
"w_queen_2",
"b_knight_2",
"b_knight_1",
"w_knight_2",
"w_knight_1",
"b_rook_2",
"b_rook_1",
"w_rook_1",
"w_rook_2",
"b_bishop_1",
"b_bishop_2",
"w_bishop_2",
"w_bishop_1",
"b_pawn_1",
"b_pawn_2",
"b_pawn_3",
"b_pawn_4",
"b_pawn_5",
"b_pawn_6",
"b_pawn_7",
"b_pawn_8",
"w_pawn_1",
"w_pawn_2",
"w_pawn_3",
"w_pawn_4",
"w_pawn_5",
"w_pawn_6",
"w_pawn_7",
"w_pawn_8"
]
posPawn()
posKing()
posQueen()
posKnight()
posRook()
posBishop()
scene.setBackgroundImage(assets.image`board`)
game.onUpdate(function () {
    if (highlight.x > 113) {
        highlight.setPosition(113, highlight.y)
    } else if (highlight.y < 8) {
        highlight.setPosition(highlight.x, 8)
    } else if (highlight.x < 8) {
        highlight.setPosition(8, highlight.y)
    } else if (highlight.y > 112) {
        highlight.setPosition(highlight.x, 113)
    }
})
forever(function () {
    if (turn == 0) {
        w_timer_time += -1
        sprites.destroy(w_timer_txt)
        w_timer_txt = textsprite.create(sec2fancyMin(w_timer_time))
        w_timer_txt.setIcon(assets.image`w_k`)
        w_timer_txt.setPosition(139, 100)
    } else {
        b_timer_time += -1
        sprites.destroy(b_timer_txt)
        b_timer_txt = textsprite.create(sec2fancyMin(w_timer_time))
        b_timer_txt.setIcon(assets.image`b_k`)
        b_timer_txt.setPosition(139, 10)
    }
    pause(1000)
})
