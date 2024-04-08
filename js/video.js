var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
    
    video = document.getElementById("player1");

    video.autoplay = false;

    video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();

    var volumeSpan = document.getElementById("volume");
    var volumeSlider = document.getElementById("slider");

    volumeSpan.textContent = volumeSlider.value + "%";

    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeSpan.textContent = volumeSlider.value + "%"; 
    });

    document.getElementById("play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        volumeSpan.textContent = volumeSlider.value + "%"; 
    });
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");

    video.pause();
});

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("player1");
    var muteButton = document.getElementById("mute");
    var styledButton = document.getElementById("vintage");
    var originalButton = document.getElementById("orig");

    document.getElementById("slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate -= 0.1;
        console.log("New video speed:", video.playbackRate);
    });

    document.getElementById('faster').addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1
        console.log("New video speed:", video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {
        console.log("Advance Video by 10 seconds");

        var newTime = video.currentTime + 10;

        if (newTime > video.duration) {
            video.currentTime = 0.0;
            console.log("Video reached the end.");
        } else {
            video.currentTime = newTime;
        }

        console.log("Current video location:", video.currentTime);

    });

        muteButton.addEventListener("click", function() {
            if (video.muted) {

                video.muted = false;
                muteButton.textContent = "Mute";
                console.log("Video unmuted");
            } else {
                video.muted = true;
                muteButton.textContent = "Unmute"; 
                console.log("Video muted");
            }
    });

    styledButton.addEventListener("click", function() {
        console.log("Applying oldSchool class");

        video.classList.add("oldSchool");

        console.log("Old School mode:", video.classList.contains("oldSchool"));
    });

    originalButton.addEventListener("click", function() {
        console.log("Removing oldSchool class");

        video.classList.remove("oldSchool");

        console.log("Old School mode:", video.classList.contains("oldSchool"));
    });

});