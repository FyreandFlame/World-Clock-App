function runTime(){

let edinburghElement = document.querySelector("#edinburgh");
if (edinburghElement){let edinburghTimeElement = edinburghElement.querySelector(".time");
let edinburghDateElement = edinburghElement.querySelector(".date");
let edinburghTime = moment().tz("Europe/London");
edinburghDateElement.innerHTML = edinburghTime.format("dddd Mo MMMM YYYY")
edinburghTimeElement.innerHTML = edinburghTime.format("hh:mm:ss [<small>]a[</small>]");}

let hawaiiElement = document.querySelector("#hawaii");
if (hawaiiElement){
let hawaiiTimeElement = hawaiiElement.querySelector(".time");
let hawaiiDateElement = hawaiiElement.querySelector(".date");
let hawaiiTime = moment().tz("US/Hawaii");
hawaiiDateElement.innerHTML = hawaiiTime.format("dddd Mo MMMM YYYY")
hawaiiTimeElement.innerHTML = hawaiiTime.format("hh:mm:ss [<small>]a[</small>]");
}}

runTime();
setInterval(runTime, 1000);

function updateCity(event){
  let cityTimeZone = event.target.value;
  let cityRename = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let locationElement = document.querySelector("#location");
  locationElement.innerHTML = `<div class="cities">
  <div>
    <h2>${cityRename}</h2>
    <div class="date">${cityTime.format("dddd Mo MMMM YYYY")}</div>
  </div>
  <div>
    <div class="time">${cityTime.format("hh:mm:ss [<small>]a[</small>]")}</div>`
   }

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);