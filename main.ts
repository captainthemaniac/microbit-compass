// This press will transition the direction showing to the angles reading, then back again!
input.onButtonPressed(Button.A, function () {
    showAngle = true
    showDir = false
    music.playMelody("- G - - G - - G ", 320)
    basic.showString(" " + input.compassHeading())
    showDir = true
    showAngle = false
    // After this, when you want the angle readings again, you  need to press the opposite buttons for it to work.
    // Eg. If I pressed A before, I have to press B next to get another reading, and subsequently, if I have pressed B before, next time I have to press A to get the angle readings again. In loop of ABABABA...
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
    basic.showString(" " + input.compassHeading())
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
// The compass direction will be on by default.
let directions = ""
let showAngle = false
let showDir = false
showDir = true
showAngle = false
// These are the compass preset, DON'T change any of this as it might screw the compass reading up.
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
