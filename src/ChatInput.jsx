import React from "react";
function ChatInput({ setChatMessages }) {

    const [inputText, setInputText] = React.useState("");
     // Event is a object that contains information about the event that occurred
    function saveInputText(event){
        
        // This is basically saying to save the value from the element (target) that has this function
        setInputText(event.target.value);
    };

    // Function to manage the responses the chatbot will give
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

    // This function will generate new messages by changing the state of chatMessages in the parent component UserChat
    function sendMessage() {

        
        // Calling change state function from UserChat to add a new message
        setChatMessages(prevMessages => [
            ...prevMessages, // Copy of the chatMessages variable from UserChat
            {
                message: inputText, // Sends the message of the user
                sender: "user"
            },
            {   
                // Then sends the response of the chatbot
                message: answerData(inputText),
                sender: "chatbot"
            }
        ]);
        
    };

   

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
        </>
    );
}

export default ChatInput;
