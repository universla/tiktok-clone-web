async function loadVideos() {
  const res = await fetch("/api/videos");
  const videos = await res.json();
  const container = document.getElementById("videos");

  videos.forEach(video => {
    const vid = document.createElement("video");
    vid.src = video.url;
    vid.controls = true;
    vid.autoplay = true;
    vid.loop = true;
    container.appendChild(vid);
  });
}

loadVideos();
