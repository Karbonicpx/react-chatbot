import ReactDOM from "react-dom/client";
import ChatInput from "./ChatInput.jsx";
import ChatMessage from "./ChatMessage.jsx";

{/* Render the ChatInput component into the root element (each component needs to be in a separated achive) */ }
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <ChatInput />

        {/* Using ChatMessage component with a message prop and sender, which defines the image (user) */}
        <ChatMessage
            message="hello chatbot"
            sender="user"
        />

        {/* Using ChatMessage component with a message prop, which defines the image (chatbot) */}
        <ChatMessage
            message="Hello how can i help you?"
            sender="chatbot"
        />

        <ChatMessage
            message="can you get me today's date?"
            sender="user"
        />

        <ChatMessage
            message="November 28"
            sender="chatbot"
        />
    </>

);



