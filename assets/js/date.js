var date = document.querySelector('.date');

var getDate = () => {
    var day = new Date().getDay();
    if (day == 0) day = "Sunday";
    if (day == 1) day = "Monday";
    if (day == 2) day = "Tuesday";
    if (day == 3) day = "Wednesday";
    if (day == 4) day = "Thursday";
    if (day == 5) day = "Friday";
    if (day == 6) day = "Saturday";

    var d = new Date().getDate();

    var m = new Date().getMonth() + 1;
    if (m == 1) m = "January";
    if (m == 2) m = "February";
    if (m == 3) m = "March";
    if (m == 4) m = "April";
    if (m == 5) m = "May";
    if (m == 6) m = "June";
    if (m == 7) m = "July";
    if (m == 8) m = "August";
    if (m == 9) m = "September";
    if (m == 10) m = "October";
    if (m == 11) m = "November";
    if (m == 12) m = "December";

    // console.log(`${day}, ${m} ${d}`);

    date.innerText = `${day}, ${m} ${d}`;
}

getDate();

setInterval(getDate(), 10000)