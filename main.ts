input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.NorthEast)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.SouthEast)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.SouthWest)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.NorthWest)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.House)
        basic.showIcon(IconNames.Tortoise)
        basic.showIcon(IconNames.Scissors)
        basic.showIcon(IconNames.Duck)
        basic.showIcon(IconNames.Heart)
    }
})
