makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 100)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 100)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 100)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    music.ringTone(988)
    basic.pause(400)
    music.rest(music.beat(BeatFraction.Sixteenth))
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
    basic.pause(100)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
})
makerbit.connectIrReceiver(DigitalPin.P8)
basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
})
