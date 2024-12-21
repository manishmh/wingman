"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import SidebarMenu from "../sidebar/sidebar-menu";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to Wingman. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null); 

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: "Thanks for your query! We'll connect you with a product expert shortly.",
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-md shadow-dark-green">
      <div className="bg-dark-green text-white p-3 flex items-center gap-3">
        <SidebarMenu
          title="home"
          link="/dashboard/home/summary"
          className="bg-gradient-to-tr from-[#09544D] to-[#3FDCCD] w-8 rounded-full"
          logo={
            <Image
              src="/logo.svg"
              alt="wingman-dashboard-logo"
              width={13}
              height={13}
            />
          }
        />
        <div className="font-bold">Wingman</div>
      </div>

      <div
        className="h-72 p-4 overflow-y-auto space-y-3 text-sm"
        ref={chatContainerRef} 
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "bot"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-font-green text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-300 text-sm">
        <form onSubmit={handleSend} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type something..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-font-green"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-dark-green transition-colors duration-300 text-white px-4 py-2 rounded-lg hover:bg-font-green"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
