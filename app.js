// Function for calculating weekday for date given by API(This API doesn't provide weekday)
function getWeekday(d1, d2) {
    let diff = d1 - d2;
    return diff;
}

const cities = [
    { name: "India", zone: "Asia/Kolkata" }, { name: "London", zone: "Europe/London" }, { name: "New York", zone: "America/New_York" }, { name: "Los Angeles", zone: "America/Los_Angeles" }, { name: "Honolulu", zone: "Pacific/Honolulu" }, { name: "Adak", zone: "America/Adak" }, { name: "Alaska", zone: "America/Anchorage" }, { name: "Phoenix", zone: "America/Phoenix" }, { name: "Chicago", zone: "America/Chicago" }, { name: "Denver", zone: "America/Denver" }, { name: "Paris", zone: "Europe/Paris" }, { name: "Mexico", zone: "America/Mexico_City" }, { name: "Moscow", zone: "Europe/Moscow" }, { name: "Samara", zone: "Europe/Samara" }, { name: "Omsk", zone: "Asia/Omsk" }, { name: "Sydney", zone: "Australia/Sydney" }, { name: "Perth", zone: "Australia/Perth" }, { name: "Melbourne", zone: "Australia/Melbourne" }, { name: "Lord Howe Island", zone: "Australia/Lord_Howe" }, { name: "Eucla", zone: "Australia/Eucla" }, { name: "Austria", zone: "Europe/Vienna" }, { name: "Egypt", zone: "Africa/Cairo" }, { name: "China", zone: "Asia/Shanghai" }, { name: "Iceland", zone: "Atlantic/Reykjavik" }, { name: "Nepal", zone: "Asia/Kathmandu" }, { name: "Yemen", zone: "Asia/Aden" }, { name: "Vietnam", zone: "Asia/Ho_Chi_Minh" }, { name: "Switzerland", zone: "Europe/Zurich" }, { name: "Japan", zone: "Asia/Tokyo" }, { name: "Finland", zone: "Europe/Helsinki" }, { name: "Vatican City", zone: "Europe/Vatican" }, { name: "United Arab Emirates", zone: "Asia/Dubai" }, { name: "Norway", zone: "Europe/Oslo" }
];

cities.forEach((ele) => {
    const main = document.querySelector("div .overlay_content");
    const card = document.createElement("div");
    card.classList = "card";
    const city = `
  <h4 class="zone">${ele.name}</h4>          
`;
    card.innerHTML += city;
    main.appendChild(card);
});
let cityList = Array.from(document.getElementsByClassName("zone"));
cityList.forEach((element, i) => {
    element.addEventListener("click", () => {
        getZone(i);
    });
})

let mm;
let yy;
let dd;
var timeValue
function getZone(i) {
   alert("Please clicked 'Stop' button before changing the timezone every time.");
    timeValue = setInterval(() => {
        let str = `${cities[i].zone}`;
        let worldTime = fetch("http://api.timezonedb.com/v2.1/get-time-zone?key=B1K5WNP4ZBZS&format=json&by=zone&zone=" + str);
        worldTime.then((response) => response.json()).then((data) => { displayTime(data) })
        function displayTime(data) {
            const { formatted } = data;
            hrs = hours(formatted.slice(11, 13));
            min = formatted.slice(14, 16);
            sec = formatted.slice(17, 19);
            time = [hrs, min, sec];
            time = time.join(" : ");
            yy = formatted.slice(0, 4);
            mm = formatted.slice(5, 7);
            dd = formatted.slice(8, 10);
            todate = dd + " " + month[mm - 1] + " " + yy + ", " + weekday[a.getDay() + (dd - a.getDate())]
            document.getElementById("attime").innerHTML = time;
            document.getElementById("atdate").innerHTML = todate;
            const { countryName } = data;
            // const { zoneName } = data;
            document.getElementById("country").innerHTML = countryName;
        }
    }, 1000);
    closeNav();
}
document.getElementById("btn2").addEventListener("click", haltFunction);
function haltFunction() {
    clearInterval(timeValue);
}