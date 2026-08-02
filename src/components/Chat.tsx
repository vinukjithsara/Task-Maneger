// src/components/Chat.tsx
// Floating AI chat panel — appears on every page when logged in
// Talks to POST /api/chatbot on the Express backend
 
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import "./Chat.css";
 
const API_URL = import.meta.env.VITE_API_URL;
 
type Message = {
  role: "user" | "assistant";
  content: string;
};
 
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        'Hi! I can help you with your tasks. Try asking "What tasks are pending?" or "What\'s due soon?"',
    },
  ]);
 
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
 
  // Auto-scroll to bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
 
    const userMessage = input.trim();
 
    // Show the user's message in the chat immediately
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);
    setError(null);
 
    try {
      // Get the userId saved by Login.tsx:
      // localStorage.setItem("userId", data.user.id)
      const userId = localStorage.getItem("userId");
 
      if (!userId) {
        setError("You must be logged in to use the AI assistant.");
        setLoading(false);
        return;
      }
 
      // POST /api/chatbot — the route already in server.js
      // Sends: { message, userId }
      // Gets back: { reply }
      const response = await axios.post(`${API_URL}/api/chatbot`, {
        message: userMessage,
        userId: userId,
      });
 
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.reply },
      ]);
 
    } catch {
      setError("Could not reach the AI service. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 
  const resetChat = () => {
    // /api/chatbot is stateless (no server-side history)
    // so reset just clears the UI messages
    setMessages([
      {
        role: "assistant",
        content: "Conversation reset. Ask me anything about your tasks!",
      },
    ]);
    setError(null);
  };
 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
 
  return (
<>
      {/* Floating 🤖 button — fixed to bottom-right on every page */}
<button
        className="chat-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        title="AI Task Assistant"
>
</button>
 
      {/* Chat panel — only shown when isOpen is true */}
      <AnimatePresence>
        {isOpen && (
<motion.div
            className="chat-container"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right" }}
>

          {/* Header */}
<div className="chat-header">
<div className="chat-header-info">
<div className="ai-avatar">AI</div>
<div>
<div className="ai-name">AI Task Assistant</div>
<div className="ai-status">
                  {loading ? "Typing..." : "Online"}
</div>
</div>
</div>
<button className="reset-btn" onClick={resetChat}>
              Reset
</button>
</div>
 
          {/* Messages */}
<div className="messages-container">
            {messages.map((msg, index) => (
<div
                key={index}
                className={`message-wrapper ${
                  msg.role === "user" ? "user" : "assistant"
                }`}
>
                {msg.role === "assistant" && (
<div className="avatar">AI</div>
                )}
<div className={`message-bubble ${msg.role}`}>
                  {msg.content}
</div>
                {msg.role === "user" && (
<div className="avatar user-avatar">You</div>
                )}
</div>
            ))}
 
            {/* Typing dots while waiting for AI */}
            {loading && (
<div className="message-wrapper assistant">
<div className="avatar">AI</div>
<div className="message-bubble assistant loading">
<span></span>
<span></span>
<span></span>
</div>
</div>
            )}
 
            {error && <div className="error-banner">⚠️ {error}</div>}
 
            {/* Hidden div — scrolled into view when new messages arrive */}
<div ref={messagesEndRef} />
</div>
 
          {/* Input */}
<div className="input-area">
<textarea
              className="message-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your tasks..."
              disabled={loading}
              rows={1}
            />
<button
              className="send-btn"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
>
              {loading ? "..." : "Send"}
</button>
</div>

        </motion.div>
        )}
      </AnimatePresence>
</>
  );
};
 
export default Chat;