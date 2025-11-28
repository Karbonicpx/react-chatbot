function ChatMessage({ message, sender }) { // Those parameters are props, so it is an even shorter way to write it

    // Props makes our content reusable
    // const message = props.message;
    // const sender = props.sender;

    // Shortcut for props (destructuring)

    // const { message, sender } = props;
    
    return (

        // Using div because of being a block element, since it takes an entire row
        <div className={sender === "user" ? "user-message" : "chatbot-message"}>
            {/* Shorter IF statement: if sender is the robot, then load the chatbot image */}
            {sender === "chatbot" && (
                <img src="./assets/robot.png" className="chat-pfp" />
            )}
            <div className="message-text">
            {message}
            </div>
            

            {/* Shorter IF statement: if the sender is the user, then load the user image */}
            {sender === "user" && (
                <img src="./assets/user.png" className="chat-pfp" />
            )}
        </div>
    );
}


export default ChatMessage;