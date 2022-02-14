
var date = new Date();
var dayOfWeek = date.getDay();

document.write("Today is ");

switch (dayOfWeek) {
    case 1:
        document.write("monday");
        break;
    case 2:
        document.write("tuseday");
        break;
    case 3:
        document.write("wednesday");
        break;
    case 4:
        document.write("thursday");
        break;
    case 5:
        document.write("friday");
        break;
    case 6:
        document.write("saturday");
        break;
    case 7:
        document.write("sunday");
        break;
    default:
        document.write("unknown");
        break;
}

/*
if (dayOfWeek == 1) {
    document.write("monday");
} else if (dayOfWeek == 2) {
    document.write("tuesday");
} else if (dayOfWeek == 3) {
    document.write("wednesday");
} else if (dayOfWeek == 4) {
    document.write("thursday");
} else if (dayOfWeek == 5) {
    document.write("friday");
} else if (dayOfWeek == 6) {
    document.write("saturday");
} else {
    document.write("sunday");
}
*/