
var i = 1
var j = 1
var max = 10

while (j <= max) {
    // string cu concatenare:
    var message = j + 'x' + i + '=' + i * j + '<br>'
    // string cu interpolare:
    message = `${j} x ${i} = ${j*i} <br>`
    document.write(message)
    j++
}

document.write('<br>')
// 1 initializarea, 2 conditia si 3 incrementarea
for (i = 1; i <= max; i++) {
    for (j = 1; j <= max; j++) {
        document.write(`${i} x ${j} = ${i * j} ${"<br>"}`)
    }
    document.write("<br>")
}