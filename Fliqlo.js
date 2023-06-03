const zeroHour = document.querySelector(".zeroHour");
const zeroMinute = document.querySelector(".zeroMinute");

const originalD = document.querySelector(".originalD");
const originalD_Minute = document.querySelector(".originalD_Minute");

const putHour = document.getElementById("putHour");
const putoriginalMinute = document.getElementById("putoriginalMinute");

const putZeroHour = document.getElementById("putZeroHour");
const putzeroMinute = document.getElementById("putzeroMinute");

const putD = document.getElementById("putD");
const putoriginalD_Minute = document.getElementById("putoriginalD_Minute");

const putninetyMnute = document.getElementById("putninetyMnute");
const putninetyMinute = document.getElementById("putninetyMinute");

const getStatus = document.getElementById("status");
console.log(getStatus);

const kobbyDate = new Date();
let myMinute = kobbyDate.getMinutes();
let myHour = kobbyDate.getHours();
//const getSeconds = kobbyDate.getSeconds();

function goDown() {
  getStatus.style.top = "85%";
}

if (myHour >= 13) {
  getStatus.textContent = "PM";
  goDown();
} else {
  getStatus.textContent = "AM";
}

function AddZero(data) {
  let newData = data.toString();
  console.log(newData.length);
  if (newData.length === 1) {
    return "0" + newData;
  } else {
    return newData;
  }
}
const results = AddZero(myMinute);

putHour.textContent = myHour;
putoriginalMinute.textContent = results;
putD.textContent = myHour;
putoriginalD_Minute.textContent = results;
putZeroHour.textContent = myHour;
putzeroMinute.textContent = results;
putninetyMnute.textContent = myHour;
putninetyMinute.textContent = results;

window.setInterval(function () {
  const kobbyDate = new Date();
  let myMinute = kobbyDate.getMinutes();
  let myHour = kobbyDate.getHours();
  const getSeconds = kobbyDate.getSeconds();
  console.log(getSeconds);

  function AddZero(data) {
    let newData = data.toString();
    console.log(newData.length);
    if (newData.length === 1) {
      return "0" + newData;
    } else {
      return newData;
    }
  }

  const results = AddZero(myMinute);
  console.log("Results is ", results);

  if (myMinute === 0) {
    const getStatus = document.getElementById("status");
    if (myHour >= 13) {
      getStatus.textContent = "PM";
      goDown();
    } else {
      getStatus.textContent = "AM";
    }

    zeroHour.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      originalD.style.transform = "rotateX(0deg)";
    }, 100);
    setTimeout(function () {
      zeroHour.style.transform = "rotateX(0deg)";
      originalD.style.transform = "rotateX(90deg)";
      putZeroHour.style.color = "transparent";
      putD.style.color = "transparent";
      zeroHour.style.backgroundColor = "transparent";
      originalD.style.display = "none";
      putZeroHour.style.backgroundColor = "transparent";
    }, 1500);
    putZeroHour.style.color = "rgb(11, 21, 33)";
    putD.style.color = "rgb(11, 21, 33)";
    originalD.style.display = "flex";
    putZeroHour.style.backgroundColor = "rgb(208, 169, 126)";
    originalD.style.backgroundColor = "rgb(208, 169, 126)";
    putHour.textContent = myHour;
    putD.textContent = myHour;
    setTimeout(function () {
      putZeroHour.textContent = myHour;
      putninetyMnute.textContent = myHour;
    }, 500);
    return;
  }

  if (getSeconds === 0) {
    zeroMinute.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      originalD_Minute.style.transform = "rotateX(0deg)";
    }, 100);
    setTimeout(function () {
      zeroMinute.style.transform = "rotateX(0deg)";
      originalD_Minute.style.transform = "rotateX(90deg)";
      putzeroMinute.style.color = "transparent";
      putoriginalD_Minute.style.color = "transparent";
      zeroMinute.style.backgroundColor = "transparent";
      originalD_Minute.style.display = "none";
      putzeroMinute.style.backgroundColor = "transparent";
    }, 1500);
    putzeroMinute.style.color = "rgb(11, 21, 33)";
    putoriginalD_Minute.style.color = "rgb(11, 21, 33)";
    originalD_Minute.style.display = "flex";
    putzeroMinute.style.backgroundColor = "rgb(208, 169, 126)";
    originalD_Minute.style.backgroundColor = "rgb(208, 169, 126)";
    putoriginalMinute.textContent = results;
    putoriginalD_Minute.textContent = results;

    setTimeout(function () {
      putzeroMinute.textContent = results;
      putninetyMinute.textContent = results;
    }, 500);
  }
}, 1000);
