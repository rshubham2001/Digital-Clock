let hrs;
let min;
let sec;
let time;
let real_time;
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let todate;
function hours(hr) {
    if (hr > 12) {
        hr -= 12;
    }
    minimumIntegerDigits = 2;
    return hr;
}

setInterval(() => {
    a = new Date();
    hrs = hours(a.getHours());
    min = a.getMinutes();
    sec = a.getSeconds();
    let time = [hrs, min, sec];
    real_time = [];
    time.forEach(myNumber => {
        let Time = myNumber.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        real_time.push(Time);
    })
    real_time = real_time.join(" : ");
    todate = a.getDate() + " " + month[a.getMonth()] + " " + a.getFullYear() + ", " + weekday[a.getDay()];
    document.getElementById("time").innerHTML = real_time;
    document.getElementById("date").innerHTML = todate;
}, 1000);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    let e = document.getElementById("btn");
    e.classList.add("display");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    let e = document.getElementById("btn");
    e.classList.remove("display");
}