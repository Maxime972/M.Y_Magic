const video = document.getElementById("videoPlayer");

const videoSrc =
  "https://divine-disk-df21.moutachy-maxime.workers.dev/master.m3u8";
const qualitySelect = document.getElementById("qualitySelect");

if (Hls.isSupported()) {
  const hls = new Hls({
    autoStartLoad: true,
    startLevel: -1, // auto
  });

  hls.loadSource(videoSrc);
  hls.attachMedia(video);

  // Quand le manifest est chargé
  hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    console.log("Qualités disponibles :", data.levels);

    // Ajout de l'option Auto
    qualitySelect.innerHTML = `<option value="-1">Auto</option>`;

    // Ajout des qualités disponibles
    data.levels.forEach((level, index) => {
      const height = level.height;
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${height}p`;
      qualitySelect.appendChild(option);
    });
  });

  // Quand l'utilisateur change la qualité
  qualitySelect.addEventListener("change", () => {
    const level = parseInt(qualitySelect.value);

    if (level === -1) {
      hls.currentLevel = -1; // Auto
      console.log("Qualité automatique activée");
    } else {
      hls.currentLevel = level; // Qualité choisie
      console.log("Qualité forcée :", level);
    }
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
}
