const axios = require('axios');

async function translateText(text) {
  if (!text || text.trim() === "") return "Texto vazio ou não reconhecido.";

  const res = await axios.post(
    'https://translate.googleapis.com/translate_a/single',
    null,
    {
      params: {
        client: 'gtx',
        sl: 'pt',
        tl: 'en',
        dt: 't',
        q: text,
      },
    }
  );

  return res.data[0][0][0];
}

module.exports = { translateText };
