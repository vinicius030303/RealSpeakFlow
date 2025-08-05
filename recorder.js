const mic = require('mic');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');

function recordAudio() {
  return new Promise((resolve, reject) => {
    const micInstance = mic({
      rate: '16000',
      channels: '1',
      debug: false,
      exitOnSilence: 6
    });

    const audioFile = 'audio.wav';
    const micInput = micInstance.getAudioStream();
    const outputFileStream = fs.createWriteStream(audioFile);

    micInput.pipe(outputFileStream);

    micInstance.start();
    console.log('🎙️ Gravando...');

    setTimeout(() => {
      micInstance.stop();
      console.log('🛑 Gravação finalizada.');
      resolve(audioFile);
    }, 5000);
  });
}

module.exports = { recordAudio };
