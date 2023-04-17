"use strict";
const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60000;
const MS_PER_HOUR = 3600000;

const DateType = {
    SECONDS: "SECONDS",
    MINUTES: "MINUTES",
    HOURS: "HOURS",
}

function buildDate() {
    let date = new Date();
    console.log(date);
    let transferredSeconds = +prompt("Вкажіть кількість секунд");
    let transferredMinutes = +prompt("Вкажуть кількість хвилин");
    let transferredHours = +prompt("Вкажіть кількість годин");
    date = changeDate(date,transferredSeconds, DateType.SECONDS);
    date = changeDate(date,transferredMinutes, DateType.MINUTES);
    date = changeDate(date,transferredHours, DateType.HOURS);
    console.log(date);
}

function changeDate(date, time, dateType) {
    const msCount = getMilliseconds(dateType);
    return new Date(date.getTime() + time * msCount);  
}

function getMilliseconds(dateType) {
    switch (dateType) { 
        case DateType.SECONDS:
          return MS_PER_SECOND;
            break;
        case DateType.MINUTES:
            return  MS_PER_MINUTE;
            break;
        case DateType.HOURS:
            return MS_PER_HOUR;
            break;
    }
}


// function addSecondsToDate(transferredSeconds) {
//     const changedDate = date.getTime() + transferredSeconds * MS_PER_SECOND;
//     date = new Date(changedDate);
//     console.log(date);
// }
// addSecondsToDate(transferredSeconds);

// function addMinutesToDate(transferredMinutes) {
//     const changedDate = date.getTime() + transferredMinutes * MS_PER_MINUTE;
//     date = new Date(changedDate);
//     console.log(date);
// }
// addMinutesToDate(transferredMinutes);


// function addHoursToDate(transferredHours) {
//     const changedDate = date.getTime() + transferredHours * MS_PER_HOUR;
//     date = new Date(changedDate);
//     console.log(date);
// }
// addHoursToDate(transferredHours);

