function initPlayer(slideNum) {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const seek = document.getElementById('seek');
    const timeLabel = document.getElementById('timeLabel');
    const speedBtn = document.getElementById('speedBtn');

    let speeds = [1, 1.5, 2];
    let speedIndex = 0;

    function formatTime(t) {
        if (!isFinite(t)) return '0:00';
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });

    audio.addEventListener('ended', () => {
        playBtn.textContent = '▶';
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            seek.value = (audio.currentTime / audio.duration) * 100;
        }
        timeLabel.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    audio.addEventListener('loadedmetadata', () => {
        timeLabel.textContent = `0:00 / ${formatTime(audio.duration)}`;
    });

    seek.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (seek.value / 100) * audio.duration;
        }
    });

    speedBtn.addEventListener('click', () => {
        speedIndex = (speedIndex + 1) % speeds.length;
        audio.playbackRate = speeds[speedIndex];
        speedBtn.textContent = speeds[speedIndex] + 'x';
        speedBtn.classList.toggle('active', speeds[speedIndex] !== 1);
    });
}
