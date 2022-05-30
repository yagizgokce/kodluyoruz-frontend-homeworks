let name = prompt("Adınızı Giriniz:");

let myName = document.querySelector("#myName");

myName.innerHTML = `${name}`;


let today = new Date();

let date = today.toLocaleTimeString('tr-TR', { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " " + today.toLocaleDateString('tr-TR', { weekday: "long" });

let clock = document.querySelector("#myClock");
clock.innerHTML = `${date}`;
