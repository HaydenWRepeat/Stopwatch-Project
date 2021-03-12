'use strict'

$(function(){
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;
    let interval;

    function startWatch(){
        interval = setInterval(function(){
            miliseconds++;
            if(miliseconds == 100){
                seconds++;
                miliseconds = 0;
            }
            if(seconds == 60){
                minutes++
                seconds = 0;
            }

            $("#miliseconds").html(miliseconds);
            $("#seconds").html(seconds);
            $("#minutes").html(minutes);

        }, 10)
    }
    let swap = true;

    $("#start").on("click", function(){
        if(swap) {
            swap = false;
            startWatch()
            $("#start").html("Stop");
            $("#lap").html("Lap");
        }
        else {
            swap = true;
            stopWatch();
            $("#start").html("Start");
            $("#lap").html("Reset");
        }
    })

    $("#lap").on("click", function(){
        if(swap){
            $("#miliseconds").html(0);
            $("#seconds").html(0);
            $("#minutes").html(0);
        } else {
            let lapTime = `${minutes}:${seconds}: ${miliseconds}`
            $(".lapContainer").append(`<p>${lapTime}</p>`)
        }
    })


    function stopWatch(){
        clearInterval(interval);
    }


})