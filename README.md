

---

# 💬 Smart Chatbot for Customer Support

An intelligent, AI-driven chatbot built to streamline customer support. It handles common queries, performs troubleshooting, and escalates complex issues—all through a seamless conversational interface.

---

## 🚀 Features

- 🔍 **Intent Classification** and **Entity Extraction** using Rasa NLU
- 💬 Dynamic and smooth **Dialogue Management**
- 💻 Easily integrates with platforms like **Slack**, **Microsoft Teams**, and custom UIs
- 🧾 **Conversation Logging** using MongoDB or Firebase
- 📦 **Dockerized** backend for consistent deployment

---

## 🛠️ Tech Stack

- 🐍 **Python** – Core backend logic via [Rasa](https://rasa.com/)
- ⚛️ **React** – Frontend UI for interacting with the bot
- ☁️ **MongoDB** or **Firebase** – To store and review conversations
- 🐳 **Docker** – Containerized backend for reliable deployment

---


## ⚙️ Setup Instructions

### 📦 Backend (Rasa)

```bash
cd backend
docker build -t customer-chatbot .
docker run -p 5005:5005 customer-chatbot
````

The chatbot API will be available at:
👉 `http://localhost:5005/webhooks/rest/webhook`

---

### 🖥️ Frontend (React + Vite)

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install axios
npm run dev
```

Frontend will run at:
👉 `http://localhost:5173`

---

## 📡 API Reference

**Endpoint:** `POST http://localhost:5005/webhooks/rest/webhook`



---

## 🙌 Contributing

Want to improve this chatbot? PRs are welcome! You can:

* Add new intents or stories
* Improve frontend UX
* Integrate additional communication platforms

---

## 📬 Contact

Built with ❤️ by [Hasvanth Kalyan Gundu](https://www.linkedin.com/in/hasvanth-kalyan-g-13538a148)
📧 [hasvanthkalyan9@gmail.com](mailto:hasvanthkalyan9@gmail.com)

---


