import { useState, useEffect, useRef } from "react";
import "./ChatApp.css";

const dummyMessages = [
  { id: 1, user: "Alice", text: "Hey there! 👋", time: "10:00 AM" },
  { id: 2, user: "Bob", text: "Hello! How are you?", time: "10:02 AM" },
  { id: 3, user: "Alice", text: "I'm good! What about you?", time: "10:05 AM" },
  { id: 4, user: "Bob", text: "Doing great! Just working on some projects.", time: "10:07 AM" },
];

const ChatApp = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      id: messages.length + 1,
      user: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h2>💬 Simple Chat</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.user === "You" ? "sent" : "received"}`}>
            <p className="message-text">
              <strong>{msg.user}: </strong> {msg.text}
            </p>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
