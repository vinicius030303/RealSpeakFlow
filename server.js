const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { recordAudio } = require('./recorder');
const { transcribeAudio } = require('./whisper-client');
const { translateText } = require('./translator');
const { speakText } = require('./tts');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/start', async (req, res) => {
  try {
    console.log('🎙️ Iniciando gravação...');
    const audioPath = await recordAudio();

    console.log('✅ Gravação concluída. Enviando para transcrição...');
    const transcript = await transcribeAudio(audioPath);
    console.log('📝 Transcrição recebida:', transcript);

    if (!transcript || transcript.trim() === '') {
      throw new Error('Transcrição vazia.');
    }

    const translation = await translateText(transcript);
    console.log('🌍 Tradução recebida:', translation);

    if (!translation || translation.trim() === '') {
      throw new Error('Tradução vazia ou inválida.');
    }

    // ▶️ Falar a tradução
    await speakText(translation, 'en');

    res.json({ transcript, translation });
  } catch (error) {
    console.error('❌ Erro geral:', error.message || error);
    res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 Backend do RealSpeakFlow rodando em http://localhost:${PORT}`);
});
