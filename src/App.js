import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.js";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="95b677c0-f5c5-4601-a765-fbef4dc2d4d9"
      userName="arsalanadmin"
      userSecret="4D6fk3s8"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
