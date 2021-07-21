input.onButtonPressed(Button.A, function () {
    showAngle = true
    showDir = false
    music.playMelody("- G - - G - - G ", 320)
    basic.showString("" + (input.compassHeading()))
    showDir = true
    showAngle = false
    music.playMelody("- C5 - - G - - D ", 320)
    while (showDir == true) {
        if (input.compassHeading() > 337.5 && input.compassHeading() <= 360) {
            directions = "North"
            basic.showString("N")
        } else if (input.compassHeading() >= 0 && input.compassHeading() <= 22.5) {
            directions = "North"
            basic.showString("N")
        } else if (input.compassHeading() > 22.5 && input.compassHeading() <= 67.5) {
            directions = "North-East"
            basic.showLeds(`
                # # # # #
                # . # . .
                # . # # #
                # . # . .
                # . # # #
                `)
        } else if (input.compassHeading() > 67.5 && input.compassHeading() <= 112.5) {
            directions = "East"
            basic.showString("E")
        } else if (input.compassHeading() > 112.5 && input.compassHeading() <= 157.5) {
            directions = "South-East"
            basic.showLeds(`
                # # . # #
                # . . # .
                # # . # #
                . # . # .
                # # . # #
                `)
        } else if (input.compassHeading() > 157.5 && input.compassHeading() <= 202.5) {
            directions = "South"
            basic.showString("S")
        } else if (input.compassHeading() > 202.5 && input.compassHeading() <= 247.5) {
            directions = "South-West"
            basic.showLeds(`
                # # # . #
                # . # . #
                # # # # #
                . # # # #
                # # # . #
                `)
        } else if (input.compassHeading() > 247.5 && input.compassHeading() <= 292.5) {
            directions = "West"
            basic.showString("W")
        } else {
            directions = "North-West"
            basic.showLeds(`
                # # # . #
                # . # . #
                # . # # #
                # . # # #
                # . # . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    showAngle = true
    showDir = false
    music.playMelody("- G - - G - - G ", 320)
    basic.showString("" + (input.compassHeading()))
    showDir = true
    showAngle = false
    music.playMelody("- C5 - - G - - D ", 320)
    while (showDir == true) {
        if (input.compassHeading() > 337.5 && input.compassHeading() <= 360) {
            directions = "North"
            basic.showString("N")
        } else if (input.compassHeading() >= 0 && input.compassHeading() <= 22.5) {
            directions = "North"
            basic.showString("N")
        } else if (input.compassHeading() > 22.5 && input.compassHeading() <= 67.5) {
            directions = "North-East"
            basic.showLeds(`
                # # # # #
                # . # . .
                # . # # #
                # . # . .
                # . # # #
                `)
        } else if (input.compassHeading() > 67.5 && input.compassHeading() <= 112.5) {
            directions = "East"
            basic.showString("E")
        } else if (input.compassHeading() > 112.5 && input.compassHeading() <= 157.5) {
            directions = "South-East"
            basic.showLeds(`
                # # . # #
                # . . # .
                # # . # #
                . # . # .
                # # . # #
                `)
        } else if (input.compassHeading() > 157.5 && input.compassHeading() <= 202.5) {
            directions = "South"
            basic.showString("S")
        } else if (input.compassHeading() > 202.5 && input.compassHeading() <= 247.5) {
            directions = "South-West"
            basic.showLeds(`
                # # # . #
                # . # . #
                # # # # #
                . # # # #
                # # # . #
                `)
        } else if (input.compassHeading() > 247.5 && input.compassHeading() <= 292.5) {
            directions = "West"
            basic.showString("W")
        } else {
            directions = "North-West"
            basic.showLeds(`
                # # # . #
                # . # . #
                # . # # #
                # . # # #
                # . # . #
                `)
        }
    }
})
let directions = ""
let showAngle = false
let showDir = false
showDir = true
showAngle = false
while (showDir == true) {
    if (input.compassHeading() > 337.5 && input.compassHeading() <= 360) {
        directions = "North"
        basic.showString("N")
    } else if (input.compassHeading() >= 0 && input.compassHeading() <= 22.5) {
        directions = "North"
        basic.showString("N")
    } else if (input.compassHeading() > 22.5 && input.compassHeading() <= 67.5) {
        directions = "North-East"
        basic.showLeds(`
            # # # # #
            # . # . .
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (input.compassHeading() > 67.5 && input.compassHeading() <= 112.5) {
        directions = "East"
        basic.showString("E")
    } else if (input.compassHeading() > 112.5 && input.compassHeading() <= 157.5) {
        directions = "South-East"
        basic.showLeds(`
            # # . # #
            # . . # .
            # # . # #
            . # . # .
            # # . # #
            `)
    } else if (input.compassHeading() > 157.5 && input.compassHeading() <= 202.5) {
        directions = "South"
        basic.showString("S")
    } else if (input.compassHeading() > 202.5 && input.compassHeading() <= 247.5) {
        directions = "South-West"
        basic.showLeds(`
            # # # . #
            # . # . #
            # # # # #
            . # # # #
            # # # . #
            `)
    } else if (input.compassHeading() > 247.5 && input.compassHeading() <= 292.5) {
        directions = "West"
        basic.showString("W")
    } else {
        directions = "North-West"
        basic.showLeds(`
            # # # . #
            # . # . #
            # . # # #
            # . # # #
            # . # . #
            `)
    }
}
