import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"
import { X, Send } from "lucide-react";
import { config } from "../config/config";

export default function ChatSection({ setIsOpen}) {
    const genAI = new GoogleGenerativeAI(config.geminiApiKey)    
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi there! I'm the Daakhil Now AI assistant. How can I help you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const messagesContainerRef = useRef(null)

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current.parentElement;
      container.scrollTop = container.scrollHeight;
    }
  }

  // UseEffect to scroll when messages change or loading state changes
  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: inputMessage }])
    setInputMessage("")
    setIsLoading(true)

    try {
        // Prepare the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  
        // Prepare chat history for context
        const chatHistory = messages
          .map(msg => 
            msg.type === "user" 
              ? `User: ${msg.text}` 
              : `Assistant: ${msg.text}`
          )
          .join("\n")
  
        // Combine chat history with new message
        const fullPrompt = `
        You are a helpful legal AI assistant. 
        Provide clear, professional, and concise legal guidance.
        
        Previous Conversation:
        ${chatHistory}
        
        New Message: ${inputMessage}
        
        Response:`
  
        // Generate response
        const result = await model.generateContent(fullPrompt)
        const response = await result.response
        const text = response.text()
  
        // Add bot response
        setMessages((prev) => [
          ...prev, 
          { type: "bot", text: text }
        ])
      } catch (error) {
        console.error("Error generating response:", error)
        
        // Fallback error message
        setMessages((prev) => [
          ...prev, 
          { 
            type: "bot", 
            text: "I'm sorry, but I encountered an error processing your request. Please try again." 
          }
        ])
      } finally {
        setIsLoading(false)
      }
  }
  return (
    <div className="fixed flex flex-col bottom-25 right-8 z-50 w-[200px] md:w-[250px] lg:w-[300px]">
      <div className="bg-purple-800 px-4 py-3 flex items-center justify-between rounded-t-xl">
        <h3 className="text-white font-semibold">Daakhil Now Assistant</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[250px] overflow-y-auto p-4 bg-[#f9fafb] text-purple-600">
        <div ref={messagesContainerRef} className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 lg:text-[13px] text-[10px] sm:text-[12px] ${
                  message.type === "user"
                    ? "bg-purple-800 text-white"
                    : "bg-[#e8e1ee] border border-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2">
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-800"></div>
                </div>
                <p className="text-center text-xs text-gray-500">Thinking...</p>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 shadow-2xl shadow-black bg-gray-100 rounded-b-xl max-w-full">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-[85%] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-purple-500 ring-1 ring-gray-200 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-purple-800 text-white p-2 rounded-md hover:bg-purple-700 transition-colors flex-1 cursor-pointer"
            disabled={isLoading}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
