
var date = new Date();
var hour = date.getHours()

// hour < 12 ? document.write("A.M.") : document.write("P.M.");

var timeOfDay = hour < 12 ? "A.M." : "P.M."
document.write(timeOfDay); 

// Este echivalent cu:
/*
if (hour < 12) {
    document.write("A.M.")
} else {
    document.write("P.M.")
}
*/
