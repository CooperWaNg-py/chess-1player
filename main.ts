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
let selected: Sprite = null
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
let seconds = 0
highlight = sprites.create(assets.image`highlight`, SpriteKind.selector)
highlight.setPosition(113, 113)
posPawn()
posKing()
posQueen()
posKnight()
posRook()
posBishop()
scene.setBackgroundImage(assets.image`board`)
game.onUpdate(function () {
    // Keep highlight within chessboard bounds
    if (highlight.x > 113) {
        highlight.setPosition(113, highlight.y)
    } else if (highlight.y < 8) {
        highlight.setPosition(highlight.x, 8)
    } else if (highlight.x < 8) {
        highlight.setPosition(8, highlight.y)
    } else if (highlight.y > 113) {
        highlight.setPosition(highlight.x, 113)
    }
    // Check for piece selection (black pieces)
    // Check for piece selection (white pieces)
    if (highlight.overlapsWith(b_bishop_1) && controller.A.isPressed()) {
        selected = b_bishop_1
    } else if (highlight.overlapsWith(b_bishop_2) && controller.A.isPressed()) {
        selected = b_bishop_2
    } else if (highlight.overlapsWith(b_king_1) && controller.A.isPressed()) {
        selected = b_king_1
    } else if (highlight.overlapsWith(b_knight_1) && controller.A.isPressed()) {
        selected = b_knight_1
    } else if (highlight.overlapsWith(b_knight_2) && controller.A.isPressed()) {
        selected = b_knight_2
    } else if (highlight.overlapsWith(b_pawn_1) && controller.A.isPressed()) {
        selected = b_pawn_1
    } else if (highlight.overlapsWith(b_pawn_2) && controller.A.isPressed()) {
        selected = b_pawn_2
    } else if (highlight.overlapsWith(b_pawn_3) && controller.A.isPressed()) {
        selected = b_pawn_3
    } else if (highlight.overlapsWith(b_pawn_4) && controller.A.isPressed()) {
        selected = b_pawn_4
    } else if (highlight.overlapsWith(b_pawn_5) && controller.A.isPressed()) {
        selected = b_pawn_5
    } else if (highlight.overlapsWith(b_pawn_6) && controller.A.isPressed()) {
        selected = b_pawn_6
    } else if (highlight.overlapsWith(b_pawn_7) && controller.A.isPressed()) {
        selected = b_pawn_7
    } else if (highlight.overlapsWith(b_pawn_8) && controller.A.isPressed()) {
        selected = b_pawn_8
    } else if (highlight.overlapsWith(b_queen_1) && controller.A.isPressed()) {
        selected = b_queen_1
    } else if (highlight.overlapsWith(b_rook_1) && controller.A.isPressed()) {
        selected = b_rook_1
    } else if (highlight.overlapsWith(b_rook_2) && controller.A.isPressed()) {
        selected = b_rook_2
    } else if (highlight.overlapsWith(w_bishop_1) && controller.A.isPressed()) {
        selected = w_bishop_1
    } else if (highlight.overlapsWith(w_bishop_2) && controller.A.isPressed()) {
        selected = w_bishop_2
    } else if (highlight.overlapsWith(w_king_2) && controller.A.isPressed()) {
        selected = w_king_2
    } else if (highlight.overlapsWith(w_knight_1) && controller.A.isPressed()) {
        selected = w_knight_1
    } else if (highlight.overlapsWith(w_knight_2) && controller.A.isPressed()) {
        selected = w_knight_2
    } else if (highlight.overlapsWith(w_pawn_1) && controller.A.isPressed()) {
        selected = w_pawn_1
    } else if (highlight.overlapsWith(w_pawn_2) && controller.A.isPressed()) {
        selected = w_pawn_2
    } else if (highlight.overlapsWith(w_pawn_3) && controller.A.isPressed()) {
        selected = w_pawn_3
    } else if (highlight.overlapsWith(w_pawn_4) && controller.A.isPressed()) {
        selected = w_pawn_4
    } else if (highlight.overlapsWith(w_pawn_5) && controller.A.isPressed()) {
        selected = w_pawn_5
    } else if (highlight.overlapsWith(w_pawn_6) && controller.A.isPressed()) {
        selected = w_pawn_6
    } else if (highlight.overlapsWith(w_pawn_7) && controller.A.isPressed()) {
        selected = w_pawn_7
    } else if (highlight.overlapsWith(w_pawn_8) && controller.A.isPressed()) {
        selected = w_pawn_8
    } else if (highlight.overlapsWith(w_queen_2) && controller.A.isPressed()) {
        selected = w_queen_2
    } else if (highlight.overlapsWith(w_rook_1) && controller.A.isPressed()) {
        selected = w_rook_1
    } else if (highlight.overlapsWith(w_rook_2) && controller.A.isPressed()) {
        selected = w_rook_2
    }
})
