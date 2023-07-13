function runTime(){

let edinburghElement = document.querySelector("#edinburgh");
let edinburghTimeElement = edinburghElement.querySelector(".time");
let edinburghDateElement = edinburghElement.querySelector(".date");
let edinburghTime = moment().tz("Europe/London");
edinburghDateElement.innerHTML = edinburghTime.format("dddd Mo MMMM YYYY")
edinburghTimeElement.innerHTML = edinburghTime.format("hh:mm:ss [<small>]a[</small>]");

let hawaiiElement = document.querySelector("#hawaii");
let hawaiiTimeElement = hawaiiElement.querySelector(".time");
let hawaiiDateElement = hawaiiElement.querySelector(".date");
let hawaiiTime = moment().tz("US/Hawaii");
hawaiiDateElement.innerHTML = hawaiiTime.format("dddd Mo MMMM YYYY")
hawaiiTimeElement.innerHTML = hawaiiTime.format("hh:mm:ss [<small>]a[</small>]");
}

runTime()
setInterval(runTime, 1000)