radio.onReceivedNumber(function (receivedNumber) {
    if (_1 == 1) {
        _2 = receivedNumber
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (_1 == 2) {
        _3 = receivedNumber
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (_1 == 3) {
        _4 = receivedNumber
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (_1 == 4) {
        _5 = receivedNumber
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (_1 == 5) {
        _6 = receivedNumber
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    _1 += 1
    if (_1 == 6) {
        _1 = 1
        _2 = 2
        _3 = 2
        _4 = 2
        _5 = 2
        _6 = 2
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let _6 = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
_1 = 1
radio.setGroup(196)
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("a")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("b")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("f")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("k")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("q")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("p")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("u")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("e")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("c")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("r")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("v")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("x")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("y")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("w")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("z")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("m")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("j")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("s")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("n")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("o")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("l")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 0) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("d")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 1) {
                        basic.showString("h")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 1) {
                        basic.showString("n")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 1) {
            if (_4 == 0) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("i")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 0) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 1) {
                    if (_6 == 0) {
                        basic.showString("g")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (_2 == 1) {
        if (_3 == 0) {
            if (_4 == 1) {
                if (_5 == 0) {
                    if (_6 == 0) {
                        basic.showString("t")
                    }
                }
            }
        }
    }
})
