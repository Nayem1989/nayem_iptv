
function setupPlayer(videoId, selectId) {
  const video = document.getElementById(videoId);
  const select = document.getElementById(selectId);

  function playStream(url) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    }
  }

  playStream(select.value);

  select.addEventListener('change', function () {
    playStream(this.value);
  });
}

setupPlayer("sonyTen1", "sonyTen1Select");
setupPlayer("ptvSports", "ptvSportsSelect");
