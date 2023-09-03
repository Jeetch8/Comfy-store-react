import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
import { Provider } from "react-redux";
import App from "./App";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
