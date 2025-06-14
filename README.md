# AI-Web-Voice-agent
This repository contains a step-by-step guide and implementation details to build a web-based AI voice assistant using Vapi.ai — no coding required. The assistant uses GPT-4 to understand and respond in natural human-like voice directly through a browser interface.

## 📌 Use Case Example: Loan Inquiry Voice Bot

- User visits your website
- Clicks "Talk to us" or interacts with embedded voice widget
- The AI responds using a human-like voice
- Answers common questions (loan types, interest rates, etc.)
- Optionally connects with CRM or email form

---

## 🛠️ Tools Required

| Tool      | Purpose                      |
|-----------|------------------------------|
| [Vapi.ai](https://vapi.ai) | AI Voice Platform (GPT + TTS + Web Voice) |
| OpenAI API Key (optional) | For custom model use |
| Your Website | To embed the voice agent |

---

## ✅ Step-by-Step Setup

### 1. Sign Up on Vapi.ai
- Go to [https://vapi.ai](https://vapi.ai)
- Sign up for a free account

---

### 2. Create a New Voice Agent
1. Click “**Create Agent**”
2. Name it: `LoanInquiryAssistant` (or any name)
3. Choose **Model**: GPT-4 or GPT-3.5 (or your own OpenAI key)
4. Choose a **Voice** (e.g., Joanna, Aria)

---

### 3. Add Prompt / Personality

In the **System Prompt**, paste something like:

You are a helpful and professional AI voice assistant on a financial website. Your job is to answer questions about loans, interest rates, eligibility, and application steps. Speak clearly and keep your tone friendly. If a question is unclear or complex, offer to connect the user with a human advisor.
