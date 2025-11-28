
{/* Creating our own "HTML Element" */ }
function ChatInput() {


    return (
        // This does the same as <div></div>, but it does not create a div, only groups the elements
        <>
            <input
                placeholder="Send a Message to Chatbot"
                size={30}
            />
            <button>Send</button>
        </>
    );
}

export default ChatInput;
