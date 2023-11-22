const time = document.querySelector("#time");
const battery = document.querySelector("#battery");
let batteryIsAvailable;

time.textContent = getTime();
setBatteryLevel();

function setBatteryLevel() {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(function (batteryInfo) {
      let level = (batteryInfo.level * 100).toString();
      level = level.length > 3 ? level.slice(0, 2) : level;
      battery.dataset.percentage = level;
      batteryIsAvailable = true;
    });
  }
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes =
    date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

if (batteryIsAvailable) {
  setInterval(() => {
    navigator.getBattery().then(function (batteryInfo) {
      battery.dataset.percentage = batteryInfo.level * 100;
    });
  }, 1000);
}

setInterval(() => {
  time.textContent = getTime();
  setBatteryLevel();
}, 1000);
