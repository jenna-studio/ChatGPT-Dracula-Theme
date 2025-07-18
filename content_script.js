// content_script.js
const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = chrome.runtime.getURL("chatgpt-dracula-custom.css");
document.head.appendChild(style);


