// lev1_1: date new Date()

let output = document.getElementById('output');


let date1 = output.innerHTML += new Date("September 2, 2019 09:00:00") + "<br>";
let date2 = output.innerHTML += new Date(0) + "<br>";
let date3 = output.innerHTML += new Date(31556908800) + "<br>";
let date4 = output.innerHTML += new Date(86400000);

// lev1_2: Date Methods

let newDate = new Date();
let output2 = document.getElementById('output2')


let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let periode = [
    "PM",
    "AM"
]


output2.innerHTML += newDate.getFullYear() + "<br>";
output2.innerHTML += `${newDate.getDay()} Tag <br>`
output2.innerHTML += `${newDate.getHours()} Stunde <br>`
output2.innerHTML += `${newDate.getMinutes()} Minute <br>`
output2.innerHTML += `${wochenTag[newDate.getDay()]} <br>`
output2.innerHTML += `${monate[newDate.getMonth()]} <br>`

let output3 = document.getElementById('output3')
let newOutputDate = new Date("March 1, 2013 03:31:27");
output3.innerHTML = `${wochenTag[5]} ${newOutputDate.toLocaleTimeString()} ${periode[0]}`
    // output3.innerHTML += wochenTag[5]
    // output3.innerHTML += ` 0${newOutputDate.getHours()} : `
    // output3.innerHTML += ` ${newOutputDate.getMinutes()} : `
    // output3.innerHTML += ` ${newOutputDate.getSeconds()} `

// function AMundPM0() {
//     if (newOutputDate.getHours() < 12) {
//         console.log('AM');
//     } else if (newOutputDate.getHours() > 12) {
//         console.log('PM');
//     }
// }



// output3.innerHTML = new Date("March 1, 2013 03:31:27");
// March 1, 2013 03:31:27




// JS vertiefung Übung lev1_6: AM PM

// let uhrzeit = new Date()
// console.log(uhrzeit.getHours());

let date5 = new Date(1999, 10, 5, 15)
let date6 = new Date()
let date7 = new Date(2019, 12, 3, 12)
let date8 = new Date(2000, 1, 1, 11)

// function AMundPM1() {
//     if (uhrzeit.getHours() < 12) {
//         console.log('AM');
//     } else if (uhrzeit.getHours() > 12) {
//         console.log('PM');
//     }
// }

// AMundPM1()

// function AMundPM2(a) {
//     if (a.getHours() <= 12) {
//         console.log('AM');
//     } else if (a.getHours() > 12) {
//         console.log('PM');
//     }
// }

// AMundPM2(date5)



// Ternary Operator

function AMundPM2(a) {
    return (a ? 'PM' : 'AM')
}

console.log(AMundPM2(true));


// If else Function


function AMundPM3(a) {
    if (a.getHours() <= 12) {
        console.log('AM');
    } else if (a.getHours() > 12) {
        console.log('PM');
    }
}

AMundPM3(date6)

function AMundPM4(a) {
    if (a.getHours() <= 12) {
        console.log('AM');
    } else if (a.getHours() > 12) {
        console.log('PM');
    }
}


AMundPM4(date7)

function AMundPM5(a) {
    if (a.getHours() <= 12) {
        console.log('AM');
    } else if (a.getHours() > 12) {
        console.log('PM');
    }
}

AMundPM5(date8)


// lev1_7: Weekend 





function istWeekend(a) {

    let date = new Date(a)
    console.log(date.getDay());

    if (date.getDay() == 6 || date.getDay() == 0) {


        return "Weekend"
    } else {


        return "Arbeitstag"
    }
}

console.log(istWeekend("12, 15, 2020")); //WE
console.log(istWeekend("2, 16, 2001")); //WE
console.log(istWeekend("2, 1, 2020")); //AR
console.log(istWeekend("2, 29, 2020")); //AR



// lev1_8: setTimeout() setInterval()

//Zeit zeigen


// var i = 10;

// let myInterval = setInterval(function() {
//     let y = i--;

//     if (y >= 0) {
//         console.log('Hi');
//         console.log(y);
//     } else {
//         clearInterval()
//             // clearInterval(myInterval)
//     }
// }, 1000);

// clearInterval(myInterval)

// lev1_9: clock

let output5 = document.getElementById('output5')

let actuelleZeit = new Date();
let actuelleUhrzeit = actuelleZeit.toLocaleTimeString()

console.log(actuelleUhrzeit);

function startTime() {

    // Xxx.innerHTML = ;


}

setInterval(function startTime1() {
    var date = new Date();
    var zeit = date.toLocaleTimeString();
    output5.innerHTML = `${wochenTag[5]} ${zeit} ${periode[0]} `
        // console.log(zeit);
}, 1000);


let txt1 = document.getElementById('txt1')

setInterval(function startTime() {
    let dateToday = new Date();
    let heute = dateToday.toDateString();
    let std = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    txt1.innerHTML = `${heute} ${std} : ${min} : ${sec}`
        // console.log(sec);
        // console.log(min);
        // console.log(std);
        // console.log(heute);
}, 1000);