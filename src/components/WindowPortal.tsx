import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { copyStyles } from "../utils";

export const WindowPortal = ({ children, closeWindowPortal }) => {
  const externalWindow = useRef(
    window.open("", "", "width=350,height=650,left=200,top=200")
  );

  const containerEl = document.createElement("div");

  useEffect(() => {
    const currentWindow = externalWindow.current;
    return () => currentWindow.close();
  }, []);

  externalWindow.current.document.title = "MobX Formkit DevTools";
  externalWindow.current.document.body.appendChild(containerEl);
  copyStyles(document, externalWindow.current.document);

  externalWindow.current.addEventListener("beforeunload", (e) => {
    closeWindowPortal(e);
  });

  return ReactDOM.createPortal(children, containerEl);
};
