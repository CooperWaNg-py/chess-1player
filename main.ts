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
function posQueen() {
    b_queen_1 = sprites.create(assets.image`b_q`, SpriteKind.queen)
    sprites.setDataString(b_queen_1, "name", "b_queen_1")
    b_queen_1.setPosition(53, 7)
    w_queen_2 = sprites.create(assets.image`w_q`, SpriteKind.queen)
    sprites.setDataString(w_queen_2, "name", "w_queen_2")
    w_queen_2.setPosition(53, 112)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    selected = null
})
function posPawn() {
    b_pawn_8 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_8, "name", "b_pawn_8")
    b_pawn_8.setPosition(7, 22)
    b_pawn_7 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_7, "name", "b_pawn_7")
    b_pawn_7.setPosition(23, 22)
    b_pawn_6 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_6, "name", "b_pawn_6")
    b_pawn_6.setPosition(38, 22)
    b_pawn_5 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_5, "name", "b_pawn_5")
    b_pawn_5.setPosition(52, 22)
    b_pawn_4 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_4, "name", "b_pawn_4")
    b_pawn_4.setPosition(68, 22)
    b_pawn_3 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_3, "name", "b_pawn_3")
    b_pawn_3.setPosition(83, 22)
    b_pawn_2 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_2, "name", "b_pawn_2")
    b_pawn_2.setPosition(98, 22)
    b_pawn_1 = sprites.create(assets.image`b_p`, SpriteKind.pawn)
    sprites.setDataString(b_pawn_1, "name", "b_pawn_1")
    b_pawn_1.setPosition(113, 22)
    w_pawn_8 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_8, "name", "w_pawn_8")
    w_pawn_8.setPosition(8, 97)
    w_pawn_7 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_7, "name", "w_pawn_7")
    w_pawn_7.setPosition(23, 97)
    w_pawn_6 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_6, "name", "w_pawn_6")
    w_pawn_6.setPosition(38, 97)
    w_pawn_5 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_5, "name", "w_pawn_5")
    w_pawn_5.setPosition(52, 97)
    w_pawn_4 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_4, "name", "w_pawn_4")
    w_pawn_4.setPosition(67, 97)
    w_pawn_3 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_3, "name", "w_pawn_3")
    w_pawn_3.setPosition(83, 97)
    w_pawn_2 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_2, "name", "w_pawn_2")
    w_pawn_2.setPosition(98, 97)
    w_pawn_1 = sprites.create(assets.image`w_p`, SpriteKind.pawn)
    sprites.setDataString(w_pawn_1, "name", "w_pawn_1")
    w_pawn_1.setPosition(113, 97)
}
function posRook() {
    b_rook_2 = sprites.create(assets.image`b_r`, SpriteKind.rook)
    sprites.setDataString(b_rook_2, "name", "b_rook_2")
    b_rook_2.setPosition(7, 7)
    b_rook_1 = sprites.create(assets.image`b_r`, SpriteKind.rook)
    sprites.setDataString(b_rook_1, "name", "b_rook_1")
    b_rook_1.setPosition(113, 7)
    w_rook_2 = sprites.create(assets.image`w_r`, SpriteKind.rook)
    sprites.setDataString(w_rook_2, "name", "w_rook_2")
    w_rook_2.setPosition(113, 112)
    w_rook_1 = sprites.create(assets.image`w_r`, SpriteKind.rook)
    sprites.setDataString(w_rook_1, "name", "w_rook_1")
    w_rook_1.setPosition(7, 112)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selected != null) {
        if (highlight.overlapsWith(b_bishop_1) && controller.A.isPressed()) {
            destPiece = b_bishop_1
        } else if (highlight.overlapsWith(b_bishop_2) && controller.A.isPressed()) {
            destPiece = b_bishop_2
        } else if (highlight.overlapsWith(b_king_1) && controller.A.isPressed()) {
            destPiece = b_king_1
        } else if (highlight.overlapsWith(b_knight_1) && controller.A.isPressed()) {
            destPiece = b_knight_1
        } else if (highlight.overlapsWith(b_knight_2) && controller.A.isPressed()) {
            destPiece = b_knight_2
        } else if (highlight.overlapsWith(b_pawn_1) && controller.A.isPressed()) {
            destPiece = b_pawn_1
        } else if (highlight.overlapsWith(b_pawn_2) && controller.A.isPressed()) {
            destPiece = b_pawn_2
        } else if (highlight.overlapsWith(b_pawn_3) && controller.A.isPressed()) {
            destPiece = b_pawn_3
        } else if (highlight.overlapsWith(b_pawn_4) && controller.A.isPressed()) {
            destPiece = b_pawn_4
        } else if (highlight.overlapsWith(b_pawn_5) && controller.A.isPressed()) {
            destPiece = b_pawn_5
        } else if (highlight.overlapsWith(b_pawn_6) && controller.A.isPressed()) {
            destPiece = b_pawn_6
        } else if (highlight.overlapsWith(b_pawn_7) && controller.A.isPressed()) {
            destPiece = b_pawn_7
        } else if (highlight.overlapsWith(b_pawn_8) && controller.A.isPressed()) {
            destPiece = b_pawn_8
        } else if (highlight.overlapsWith(b_queen_1) && controller.A.isPressed()) {
            destPiece = b_queen_1
        } else if (highlight.overlapsWith(b_rook_1) && controller.A.isPressed()) {
            destPiece = b_rook_1
        } else if (highlight.overlapsWith(b_rook_2) && controller.A.isPressed()) {
            destPiece = b_rook_2
        } else if (highlight.overlapsWith(w_bishop_1) && controller.A.isPressed()) {
            destPiece = w_bishop_1
        } else if (highlight.overlapsWith(w_bishop_2) && controller.A.isPressed()) {
            destPiece = w_bishop_2
        } else if (highlight.overlapsWith(w_king_2) && controller.A.isPressed()) {
            destPiece = w_king_2
        } else if (highlight.overlapsWith(w_knight_1) && controller.A.isPressed()) {
            destPiece = w_knight_1
        } else if (highlight.overlapsWith(w_knight_2) && controller.A.isPressed()) {
            destPiece = w_knight_2
        } else if (highlight.overlapsWith(w_pawn_1) && controller.A.isPressed()) {
            destPiece = w_pawn_1
        } else if (highlight.overlapsWith(w_pawn_2) && controller.A.isPressed()) {
            destPiece = w_pawn_2
        } else if (highlight.overlapsWith(w_pawn_3) && controller.A.isPressed()) {
            destPiece = w_pawn_3
        } else if (highlight.overlapsWith(w_pawn_4) && controller.A.isPressed()) {
            destPiece = w_pawn_4
        } else if (highlight.overlapsWith(w_pawn_5) && controller.A.isPressed()) {
            destPiece = w_pawn_5
        } else if (highlight.overlapsWith(w_pawn_6) && controller.A.isPressed()) {
            destPiece = w_pawn_6
        } else if (highlight.overlapsWith(w_pawn_7) && controller.A.isPressed()) {
            destPiece = w_pawn_7
        } else if (highlight.overlapsWith(w_pawn_8) && controller.A.isPressed()) {
            destPiece = w_pawn_8
        } else if (highlight.overlapsWith(w_queen_2) && controller.A.isPressed()) {
            destPiece = w_queen_2
        } else if (highlight.overlapsWith(w_rook_1) && controller.A.isPressed()) {
            destPiece = w_rook_1
        } else if (highlight.overlapsWith(w_rook_2) && controller.A.isPressed()) {
            destPiece = w_rook_2
        }
        if (!(destPiece == null)) {
            if (sprites.readDataString(selected, "name").includes("w_")) {
                if (sprites.readDataString(destPiece, "name").includes("b_")) {
                    sprites.destroy(destPiece)
                    selected.setPosition(highlight.x, highlight.y - 1)
                    destPiece = null
                    selected = null
                } else {
                    destPiece = null
                    selected = null
                }
            } else {
                if (sprites.readDataString(destPiece, "name").includes("w_")) {
                    sprites.destroy(destPiece)
                    selected.setPosition(highlight.x, highlight.y - 1)
                    destPiece = null
                    selected = null
                } else {
                    destPiece = null
                    selected = null
                }
            }
        } else {
            // Move selected piece to highlight position
            selected.setPosition(highlight.x, highlight.y - 1)
            selected = null
            destPiece = null
        }
    } else {
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
    }
})
function sec2fancyMin(sec: number) {
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
function posKnight() {
    b_knight_2 = sprites.create(assets.image`b_n`, SpriteKind.knight)
    sprites.setDataString(b_knight_2, "name", "b_knight_2")
    b_knight_2.setPosition(98, 7)
    b_knight_1 = sprites.create(assets.image`b_n`, SpriteKind.knight)
    sprites.setDataString(b_knight_1, "name", "b_knight_1")
    b_knight_1.setPosition(23, 7)
    w_knight_2 = sprites.create(assets.image`w_n`, SpriteKind.knight)
    sprites.setDataString(w_knight_2, "name", "w_knight_2")
    w_knight_2.setPosition(98, 112)
    w_knight_1 = sprites.create(assets.image`w_n`, SpriteKind.knight)
    sprites.setDataString(w_knight_1, "name", "w_knight_1")
    w_knight_1.setPosition(23, 112)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.x += 15
})
function posBishop() {
    b_bishop_2 = sprites.create(assets.image`b_b`, SpriteKind.bishop)
    sprites.setDataString(b_bishop_2, "name", "b_bishop_2")
    b_bishop_2.setPosition(37, 7)
    b_bishop_1 = sprites.create(assets.image`b_b`, SpriteKind.bishop)
    sprites.setDataString(b_bishop_1, "name", "b_bishop_1")
    b_bishop_1.setPosition(83, 7)
    w_bishop_2 = sprites.create(assets.image`w_b`, SpriteKind.bishop)
    sprites.setDataString(w_bishop_2, "name", "w_bishop_2")
    w_bishop_2.setPosition(37, 112)
    w_bishop_1 = sprites.create(assets.image`w_b`, SpriteKind.bishop)
    sprites.setDataString(w_bishop_1, "name", "w_bishop_1")
    w_bishop_1.setPosition(83, 112)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    highlight.y += 15
})
function posKing() {
    b_king_1 = sprites.create(assets.image`b_k`, SpriteKind.king)
    sprites.setDataString(b_king_1, "name", "b_king_1")
    b_king_1.setPosition(68, 7)
    w_king_2 = sprites.create(assets.image`w_k`, SpriteKind.king)
    sprites.setDataString(w_king_2, "name", "w_king_2")
    w_king_2.setPosition(68, 112)
}
let timetxt: TextSprite = null
let time = 0
let minutes = 0
let w_knight_2: Sprite = null
let w_knight_1: Sprite = null
let w_king_2: Sprite = null
let w_bishop_2: Sprite = null
let w_bishop_1: Sprite = null
let b_knight_2: Sprite = null
let b_knight_1: Sprite = null
let b_king_1: Sprite = null
let b_bishop_2: Sprite = null
let b_bishop_1: Sprite = null
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
let destPiece: Sprite = null
let seconds = 0
let selected: Sprite = null
let destIsEnemyColour = 0
let version = "v1.024"
let textSprite = textsprite.create(version)
textSprite.setPosition(140, 8)
textSprite.setMaxFontHeight(5)
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
    time = game.runtime() / 1000
    sprites.destroy(timetxt)
    timetxt = textsprite.create(convertToText(sec2fancyMin(Math.round(time))))
    timetxt.setPosition(140, 17)
})