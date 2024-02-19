let tafel_3 = 0
basic.forever(function () {
    basic.showNumber(tafel_3)
    tafel_3 += 3
    basic.pause(1000)
    if (12 < tafel_3) {
        tafel_3 = 0
    }
})
