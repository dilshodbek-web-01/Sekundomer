"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
    let start = document.querySelector(".start");
    let stop = document.querySelector(".stop");
    let reset = document.querySelector(".reset");
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    let mlsecond = document.querySelector(".mlsecond");
    let hourValue = 0;
    let minuteValue = 0;
    let secondValue = 0;
    let mlsecondValue = 0;

    start.addEventListener("click", ()=>{
        let interval = setInterval(()=>{
            mlsecondValue++
            if(mlsecondValue == 100){
                secondValue++;
                mlsecondValue = 0;
            }
            if(secondValue == 60){
                minuteValue++;
                secondValue = 0;
            }
            if(minuteValue == 60){
                hourValue++;
                minuteValue = 0;
            }

            mlsecond.innerHTML = mlsecondValue

            second.innerHTML = secondValue

            minute.innerHTML = minuteValue

            hour.innerHTML = hourValue

        }, 10)
        stop.addEventListener("click", ()=>{
            clearInterval(interval)
        });

        reset.addEventListener("click", ()=>{
            clearInterval(interval)

            mlsecond.innerHTML = "00"

            second.innerHTML = "00"

            minute.innerHTML = "00"

            hour.innerHTML = "00"

            mlsecondValue = 0

            secondValue = 0

            minuteValue = 0

            hourValue = 0
        })
    })
})