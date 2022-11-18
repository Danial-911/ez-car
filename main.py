def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Reverse, 100)
    kitronik.motorOn(kitronik.Motors.Motor2, kitronik.MotorDirection.Forward, 100)
    basic.pause(5000)
    kitronik.motorOff(kitronik.Motors.Motor1)
    kitronik.motorOff(kitronik.Motors.Motor2)
    basic.show_icon(IconNames.SMALL_DIAMOND)
input.on_button_pressed(Button.A, on_button_pressed_a)
