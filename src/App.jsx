import ReactDOM from "react-dom/client"; // Required for rendering the root
import UserChat from "./UserChat.jsx";

// Render the root, which is the main component that holds all other components
ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="app-container">
        <UserChat />
    </div>
);
