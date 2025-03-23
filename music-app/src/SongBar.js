const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const playPauseBtn = document.getElementById("play-pause");
const currentTimeLabel = document.getElementById("current-time");
const durationTimeLabel = document.getElementById("duration-time");
const volumeBar = document.getElementById("volumeBar");
const albumArt = document.getElementById("album-art");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");

// Song metadata (Example data, replace with dynamic source if needed)
const songData = {
    title: "Your Song Title",
    artist: "Artist Name",
    albumArt: "album-art.jpg"
};

// Initialize song data
window.addEventListener("DOMContentLoaded", () => {
    songTitle.textContent = songData.title;
    artistName.textContent = songData.artist;
    albumArt.src = songData.albumArt;
});

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    updateTimer();
});

// Seek functionality
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
    updateTimer();
});

// Volume control
volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
});

// Update time labels
function updateTimer() {
    currentTimeLabel.textContent = formatTime(audio.currentTime);
    durationTimeLabel.textContent = formatTime(audio.duration);
}

// Format time to mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Set the initial duration when metadata is loaded
audio.addEventListener("loadedmetadata", () => {
    durationTimeLabel.textContent = formatTime(audio.duration);
});
