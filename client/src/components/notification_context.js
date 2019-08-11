import { createContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = NotificationContext.Provider;
export const Consumer = NotificationContext.Consumer;

export default NotificationContext;