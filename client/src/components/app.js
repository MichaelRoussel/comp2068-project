import React, { useState } from "react";
import Routes from "./routes";

import MainNav from "./partials/main_nav";
// import { NotificationProvider } from "./notification_context";
// import Notifier from "./notifier";

export default function App() {
  // const [notification, setNotification] = useState({status: null, message: null});

  return (
    <div className="App">
      <MainNav />
      <Routes />
    </div>
  );
}
