import { useState } from "react";
import React from "react";
import ChatMessage from "./ChatMessage.jsx";
import ChatInput from "./ChatInput.jsx";

function UserChat() {

 

  // Making the array have states (chatMessages is the variable, setChatMessages is the function to update it)
  // If we try to only change directly with code, the HTML will not be updated, hence why we have states
  // We also set the useState here to share the state between chatInput and chatmessage
  // The state only loads when all the code is finished, so no partial loading
  const [chatMessages, setChatMessages] = useState([
   
  ]);

  // Container with special features, and allows to save a component of the HTML
  const chatMessagesRef = React.useRef(null);

  // useEffect Executes when the component loads
  // Array parameter controls when useEffect rubns, empty array means only once when component loads
  // This array is called dependency array, to avoid updating too much
  React.useEffect(() => {
    
    // Scroll to the bottom of the chat section when a new message is added
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <>
    {/* Setting the ref to the chatMessagesRef, which is saving this component */}
      <div className="chat-section" ref={chatMessagesRef}>
        {chatMessages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            sender={msg.sender}
          />
        ))}
      </div>

      <div className="chat-input-area">
        <ChatInput setChatMessages={setChatMessages} />
      </div>
    </>
  );
}

export default UserChat;
