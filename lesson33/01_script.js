"use strict";

const car = {
    producer: "bmw",
    model: "m8",
    year: 2019,
    speed: 200,
    volume: 68,
    fuelConsumption: 11,
    drivers: ["Dave", ],

    showInfo() {
        console.log(`Виробник: ${this.producer}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік виготовлення: ${this.year}`);
        console.log(`Середня швидкість: ${this.speed}`);
        console.log(`Обсяг паливного баку: ${this.volume}`);
        console.log(`Середня витрата пального: ${this.fuelConsumption}`);
    },

    addDrivers() {
        car.drivers.push("Ron");
        car.drivers.push("John");
        console.log(`Водій: ${this.drivers}`);
    },

    checkNaveDriver() {
        return this.drivers.includes("Alice"); //false
    },

    calculationTravel() {
        let distanse = prompt("Вкажіть відстань, яку б хотіли подолати на машині");
        if (!distanse) {
            breaks;
        }
        const travelTime =  distanse / this.speed;
        const breaks = Math.floor(travelTime / 4);
        const totalTravelTime = travelTime + breaks;
        const fuelNeeded = (distanse / 100) * this.fuelConsumption;
        alert("Вся подорож без зупинки вийде " + travelTime);
        alert("Вся подорож із зупинкою на 1 году через кожні 4 години вийде " + totalTravelTime);
        alert("Необхідна кількість палива для подолання вказаної відстані " + fuelNeeded);
    }
};
car.showInfo();
car.addDrivers();
console.log(car.checkNaveDriver(this.drivers));
car.calculationTravel();






  

  
  
