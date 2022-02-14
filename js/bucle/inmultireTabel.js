document.write('<table>')
document.write('<caption><h1>Tabla Inmultirii</h1></caption>')
document.write('<tr>')
for (number = 1; number <= 10; number++) {
    document.write('<td>')
    document.write("<h2>Inmultirea cu " + number + "</h2>")
    if (number % 5 == 0) {
        for (n = 1; n <= 9; n++) {
            document.write(number + ' x ' + n + ' = ' + (number * n) + '<br>');
        }
        document.write('</td>')
        document.write('</tr>')
        document.write('<tr>')
    } else {
        for (n = 1; n <= 10; n++) {
            document.write(number + ' x ' + n + ' = ' + (number * n) + '<br>');
        }
    }
}
document.write('</td>')
document.write('</tr')
document.write('</table>')