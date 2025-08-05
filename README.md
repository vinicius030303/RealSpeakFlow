# RealSpeakFlow

<img src="./public/RealSpeakFlow-banner.png" alt="RealSpeakFlow Banner" width="100%" />

# 🎙️ RealSpeakFlow – Tradutor de Voz em Tempo Real

**RealSpeakFlow** é um sistema completo de tradução de voz em tempo real. Com ele, você fala em **português** e ouve automaticamente a tradução em **inglês** com voz natural — ideal para entrevistas, viagens, apresentações e mais.

---

## 🚀 Funcionalidades

- 🎤 Gravação de áudio via microfone
- 🧠 Transcrição automática usando **Whisper** (OpenAI)
- 🌐 Tradução instantânea usando **GPT-4**
- 🔊 Síntese de fala (Text-to-Speech) com voz natural (modelo **TTS-1** da OpenAI)
- 📡 Interface automática para conversação com bots
- 💬 Suporte a entrada manual de texto para TTS
- ⚙️ Backend Node.js leve e funcional

---

## 🧪 Tecnologias Utilizadas

| Tecnologia        | Função                                 |
|-------------------|----------------------------------------|
| **Node.js**       | Backend principal                      |
| **Express.js**    | Servidor web HTTP                      |
| **dotenv**        | Gerenciamento de variáveis de ambiente |
| **mic**           | Captura de áudio do microfone          |
| **fluent-ffmpeg** | Conversão de áudio para o formato ideal|
| **Whisper API**   | Transcrição de voz (OpenAI)            |
| **GPT API**       | Tradução de texto via IA               |
| **TTS API (OpenAI)** | Conversão de texto em voz realista |
| **play-sound**    | Reprodução local do áudio gerado       |
| **axios**         | Requisições HTTP com as APIs           |
| **form-data**     | Upload de arquivos para transcrição    |

---

## 📂 Estrutura de Pastas

RealSpeakFlow/

├── README.md

├── .env.example

├── package.json

├── server.js

├── recorder.js

├── whisper-client.js

├── translator.js

├── tts.js

├── audio/ 

├── public/

│ └── RealSpeakFlow-banner.png 


---

## ⚙️ Como Executar

1. **Clone o repositório**
   ```bash
   https://github.com/vinicius030303/RealSpeakFlow


Instale as dependências

bash
Copiar
Editar
npm install
Configure seu .env
Copie o arquivo .env.example para .env e insira sua chave da API da OpenAI:

env
Copiar
Editar
OPENAI_API_KEY=sk-...
Execute o projeto

bash
Copiar
Editar
npm start
Acesse: http://localhost:5000/start


Toda vez que acessar essa rota, ele irá:

Gravar sua voz (por 5 segundos)

Transcrever para texto

Traduzir para inglês

Falar o texto traduzido com voz realista

🧪 Requisitos
Node.js 18+

ffmpeg instalado e adicionado ao PATH

Microfone funcional conectado ao PC

Reprodutor de áudio (VLC ou outro configurado)

## 👨‍💻 Autor

**Vinicius S.**  
📧 vinicius__santos@live.com  
📱 (44) 9 9741-7617  
🔗 [LinkedIn](https://linkedin.com/in/vinicius-front)

---


*Tenho disciplina, autonomia, foco em solução e total interesse em crescer com projetos reais.*




