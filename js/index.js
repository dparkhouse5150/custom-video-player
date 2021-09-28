const video = document.getElementById('video'),
      play  = document.getElementById('play'),
      stop = document.getElementById('stop')
      progress  = document.getElementById('progress'),
      timestamp = document.getElementById('timestamp')

export const togggleVideoStatus = () => {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

export const updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }
}

export const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100

    let mins = Math.floor(video.currentTime / 60)

    if (mins < video.duration) {
        mins = '0' + String(min)
    }

    let secs = Math.floor(video.duration % 60)

    if (secs < video.duration) {
        secs = '0' + String(secs)
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

export const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100
}

export const stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

video.addEventListener('click', togggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', TogggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)