// tts.js
const axios = require('axios');
const fs = require('fs');
const player = require('play-sound')({
  player: 'C:\\Program Files\\VideoLAN\\VLC\\vlc.exe' // ajuste aqui se for (x86)
});
require('dotenv').config();

async function speakText(text, language = 'en') {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/audio/speech',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'tts-1',
        voice: language === 'en' ? 'onyx' : 'onyx',
        input: text
      },
      responseType: 'stream'
    });

    const outputPath = 'tts_output.mp3';
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    player.play(outputPath, function (err) {
      if (err) console.error('Erro ao tocar TTS:', err);
    });

  } catch (error) {
    console.error('Erro ao gerar TTS:', error.response?.data || error.message);
  }
}

module.exports = { speakText };
