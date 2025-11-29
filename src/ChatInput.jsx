import React from "react";

function ChatInput({ setChatMessages }) {

    // States for both user input and bot input (anim)
    const [inputText, setInputText] = React.useState("");
    const [isBotTyping, setIsBotTyping] = React.useState(false);


    // Event.target.value means he is getting the value in the object associated with this function (event.target)
    function saveInputText(event) {
        setInputText(event.target.value);
    }

    // Converts the user message to a response for the chatbot
    function answerData(userMsg) {
        if (userMsg === "hello chatbot") {
            return "Hello how can i help you?"
        }
        else if (userMsg === "can you get me today's date?") {
            return "November 28"
        }
        else {
            return "I am sorry, I can't answer the question."
        }
    }

    function sendMessage() {
        if (inputText.trim() === "") return;

        const userMsg = inputText;

        // Add user message instantly
        setChatMessages(prev => [
            ...prev,
            { message: userMsg, sender: "user" }
        ]);

        setInputText("");
        setIsBotTyping(true); // Show animation

        // Delay before bot answer
        setTimeout(() => {
            setChatMessages(prev => [
                ...prev,
                { message: answerData(userMsg), sender: "chatbot" }
            ]);

            setIsBotTyping(false);
        }, 1200);
    }

    return (
        <>
            <input
                placeholder="Send a Message to Chatbot"
                size={30}
                onChange={saveInputText}
                value={inputText}
                className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">Send</button>

            {/* Bot typing animation */}
            {isBotTyping && (
                <div className="chatbot-message">
                    <img src="./assets/robot.png" className="chat-pfp" />
                    <div className="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatInput;
