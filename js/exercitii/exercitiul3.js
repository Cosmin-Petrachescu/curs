for (let h = 1; h <= 22; h++) {
    for (let w = 1; w <= 12; w++) {
        if (w == 1 || w == 12 || h == 1 || h == 22) {
            document.write("#")
        } else {
            document.write("0")
        }
    }
    document.write("<br>")
}