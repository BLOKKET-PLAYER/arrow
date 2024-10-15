def on_forever():
    basic.show_arrow(ArrowNames.NORTH)
    basic.show_arrow(ArrowNames.EAST)
    basic.show_arrow(ArrowNames.SOUTH)
    basic.show_arrow(ArrowNames.WEST)
basic.forever(on_forever)
