// Play corresponding sound
function playSound(soundId) {
  const audio = new Audio(`Sounds/sound${soundId}.mp3`);
  audio.play();
}
