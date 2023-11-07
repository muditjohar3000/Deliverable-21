window.addEventListener("load", function() {
    var video = document.querySelector("#player1");

    console.log("Good job opening the window")

    video.autoplay = false;
    video.loop = false;

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").innerHTML = video.volume100 + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log(video.playbackRate);
		console.log("Slow Video");
        video.playbackRate= 0.9;
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log(video.playbackRate);
		console.log("Speed Video");
        video.playbackRate /= 0.9;
        
    });
document.querySelector("#skip").addEventListener("click", function() {
		console.log(video.currentTime);
		console.log("Skip Ahead");
        if(video.currentTime + 10 > video.duration){
            video.currentTime = 0;
        }
        else{
            video.currentTime += 10;
        }
    });

    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Mute");
        if(video.muted == false){
            video.muted = true;
            this.innerHTML = "Unmute"
        }
        else{
            video.muted = false;
            this.innerHTML = "Mute"
        }
    });

    document.querySelector("#slider").addEventListener("change", function() {
        console.log("Volume");
        video.volume = this.value/100;
		console.log(video.volume);
        document.querySelector("#volume").innerHTML = video.volume*100 + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old");
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        console.log("Orig");
        video.classList.remove("oldSchool");
    });
});
// 

