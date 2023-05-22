input.onButtonPressed(Button.A, function () {
    clearLog += 1
    basic.showNumber(clearLog)
    if (clearLog > 4) {
        datalogger.deleteLog(datalogger.DeleteType.Fast)
        clearLog = 0
        basic.showIcon(IconNames.Skull)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (track == 0) {
        datalogger.log(
        datalogger.createCV("X", 1111111111111),
        datalogger.createCV("Y", 0),
        datalogger.createCV("Z", 0),
        datalogger.createCV("Acceleration", 0),
        datalogger.createCV("Compass", 0),
        datalogger.createCV("Sound", 0),
        datalogger.createCV("Pitch", 0),
        datalogger.createCV("Roll", 0),
        datalogger.createCV("Note", 0)
        )
        track = 1
    } else {
        track = 0
    }
    clearLog = 0
    basic.showNumber(track)
    basic.pause(500)
    basic.clearScreen()
})
let track = 0
let clearLog = 0
clearLog = 0
track = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.setColumnTitles(
"X",
"Y",
"Z",
"Acceleration",
"Compass",
"Sound",
"Pitch",
"Roll",
"Note"
)
loops.everyInterval(200, function () {
    if (track == 1) {
        datalogger.log(
        datalogger.createCV("X", input.acceleration(Dimension.X)),
        datalogger.createCV("Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Z", input.acceleration(Dimension.Z)),
        datalogger.createCV("Acceleration", input.acceleration(Dimension.Z)),
        datalogger.createCV("Compass", input.compassHeading()),
        datalogger.createCV("Sound", 0),
        datalogger.createCV("Pitch", input.rotation(Rotation.Pitch)),
        datalogger.createCV("Roll", input.rotation(Rotation.Pitch)),
        datalogger.createCV("Note", 0)
        )
    }
})
