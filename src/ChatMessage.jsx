


function ChatMessage({ message, sender }) { // Those parameters are props, so it is an even shorter way to write it

    // Props makes our content reusable
    // const message = props.message;
    // const sender = props.sender;

    // Shortcut for props (destructuring)

    // const { message, sender } = props;

    const chatMessages = [
        {
            message: "hello chatbot",
            sender: "user"

        },
        {
            message: "Hello how can i help you?",
            sender: "chatbot"
        },
        {
            message: "can you get me today's date?",
            sender: "user"
        },
        {
            message: "November 28",
            sender: "chatbot"
        }
    ];

    // Map to convert the messages to components
    const chatMessageComponents =chatMessages.map(() => {
        return(
            <ChatMessage
                message={message}
                sender={sender}
            />
        )
    })
    return (

        // Using div because of being a block element, since it takes an entire row
        <div>

            {/* Shorter IF statement: if user is true, then load the user image */}
            {sender === "user" && (
                <img src="./assets/user.png" width={50} />
            )}
            {message}

            {/* Shorter IF statement: if user is true, then load the chatbot image */}
            {sender === "chatbot" && (
                <img src="./assets/robot.png" width={50} />
            )}

        </div>
    );
}


export default ChatMessage;