// Play corresponding sound
function playSound(soundId) {
  const audio = new Audio(`sounds/sound${soundId}.mp3`);
  audio.play();
}
