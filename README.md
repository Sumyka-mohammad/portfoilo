# 💼 AI-Powered Portfolio Website Builder
An AI-powered application that converts your resume (PDF/DOCX) into a fully functional personal portfolio website (HTML, CSS, JS) using Google Gemini LLM.

# 🚀 Project Overview
The AI-Powered Portfolio Website Builder is an intelligent web application that transforms a candidate’s resume into a fully functional, production-ready personal portfolio website.
It uses Google Gemini (gemini-2.5-flash-lite) to generate production-ready portfolio code.

## ✨ Features
- 📄 Resume Upload (PDF & DOCX)
- 🧠 AI-based resume content extraction
- 🎨 Auto-generated modern portfolio design
- 👀 Live website preview
- 📦 One-click ZIP download
- ⚡ Clean Streamlit UI
- 🔐 Secure API key handling via .env

## 🛠 Tech Stack
- Frontend: Streamlit
- LLM: Google Gemini (gemini-2.5-flash-lite)
- LLM Integration: LangChain Google GenAI
- PDF Processing: PyPDF2
- DOCX Processing: docx2txt
- Environment Management: python-dotenv
- Language: Python

## ▶️ Run Locally
- 1️⃣Install Dependencies
- pip install -r requirements.txt
- If requirements.txt is not available:
- pip install streamlit langchain-google-genai \
- python-dotenv PyPDF2 docx2txt
## 2️⃣ Add Gemini API Key
- Create a .env file in the root directory:
- GOOGLE_API_KEY=your_gemini_api_key_here
### ⚠️ The app will stop automatically if the API key is missing.
## 3️⃣ Run Application
- streamlit run app.py
