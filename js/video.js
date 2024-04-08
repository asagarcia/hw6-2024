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

    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeSpan.textContent = volumeSlider.value;
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
        video.playbackRate -= 0.1; // Reduce playback rate by 10%
        console.log("New video speed:", video.playbackRate);
    });

    document.getElementById('faster').addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1
        console.log("New video speed:", video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {
        console.log("Advance Video by 10 seconds");

        // Calculate the new time position
        var newTime = video.currentTime + 10;

        // Check if the new time exceeds the video duration
        if (newTime > video.duration) {
            // If exceeded, set the time to the end of the video
            video.currentTime = 0.0;
            console.log("Video reached the end.");
        } else {
            // If not exceeded, advance the video by 10 seconds
            video.currentTime = newTime;
        }

        // Log the current location of the video
        console.log("Current video location:", video.currentTime);

    });

        muteButton.addEventListener("click", function() {
            if (video.muted) {
                // If video is muted, unmute it
                video.muted = false;
                muteButton.textContent = "Mute"; // Update button text
                console.log("Video unmuted");
            } else {
                // If video is not muted, mute it
                video.muted = true;
                muteButton.textContent = "Unmute"; // Update button text
                console.log("Video muted");
            }
    });

    styledButton.addEventListener("click", function() {
        console.log("Applying oldSchool class");

        // Add the oldSchool class to the video element
        video.classList.add("oldSchool");

        // Log the current state of the oldSchool class
        console.log("Old School mode:", video.classList.contains("oldSchool"));
    });

    originalButton.addEventListener("click", function() {
        console.log("Removing oldSchool class");

        // Remove the oldSchool class from the video element
        video.classList.remove("oldSchool");

        // Log the current state of the oldSchool class
        console.log("Old School mode:", video.classList.contains("oldSchool"));
    });

});