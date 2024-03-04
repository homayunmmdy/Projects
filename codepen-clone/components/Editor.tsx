"use client";

import { SetStateAction, useState } from "react";
import * as Space from "react-spaces";

export default function Editor() {
  const [htmlCode, setHtmlCode] = useState(`<body>
      <h1>Start Coding...✨</h1>
      <button id="darkModeToggle">Toggle Dark Mode</button>
</body>`);
  const [cssCode, setCssCode] = useState(`body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #222;
  transition: background-color 0.3s, color 0.3s;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

body.dark-mode {
  background-color: #111;
  color: #fff;
}

h1 {
  font-size: 1.5rem;
}

button {
  background-color: #f5f5f5;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

button.dark-mode {
  background-color: #333;
  color: #fff;
}

`);
  const [jsCode, setJsCode] =
    useState(`const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
`);

  const handleHtmlChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setHtmlCode(event.target.value);
  };

  const handleCssChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCssCode(event.target.value);
  };

  const handleJsChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setJsCode(event.target.value);
  };

  return (
    <div className="w-full">
      <Space.ViewPort top={80} className="w-full">
        <Space.Fill trackSize={true}>
          <Space.LeftResizable
            size="33%"
            touchHandleSize={20}
            trackSize={true}
            scrollable={true}
          >
            <span className="leading-relaxed h-2  bg-slate-200/10 w-full  sticky  rounded-md dark:bg-slate-900/10 text-slate-900 dark:text-white">
              HTML
            </span>
            <textarea
              className="resize-none bg-slate-200/50 w-full h-full  dark:bg-slate-900 text-slate-900 dark:text-white"
              value={htmlCode}
              onChange={handleHtmlChange}
              placeholder="HTML code here..."
            />
          </Space.LeftResizable>

          <Space.Fill trackSize={true} scrollable={true}>
            <span className="leading-relaxed h-2  bg-slate-200/10 w-full  sticky  rounded-md dark:bg-slate-900/10 text-slate-900 dark:text-white">
              CSS
            </span>

            <textarea
              className="resize-none bg-slate-200/50 w-full h-full  dark:bg-slate-900 text-slate-900 dark:text-white"
              value={cssCode}
              onChange={handleCssChange}
              placeholder="CSS code here..."
            />
          </Space.Fill>

          <Space.RightResizable
            size="33%"
            touchHandleSize={20}
            trackSize={true}
            scrollable={true}
          >
            <span className="leading-relaxed h-2  bg-slate-200/10 w-full  sticky  rounded-md dark:bg-slate-900/10 text-slate-900 dark:text-white">
              JavaScript
            </span>
            <textarea
              className="resize-none bg-slate-200/50 w-full  h-full dark:bg-slate-900 text-slate-900 dark:text-white"
              value={jsCode}
              onChange={handleJsChange}
              placeholder="JavaScript code here..."
            />
          </Space.RightResizable>
        </Space.Fill>

        <Space.BottomResizable
          size="50%"
          touchHandleSize={20}
          trackSize={true}
          scrollable={true}
        >
          <Space.Fill>
            <iframe
              className="w-full h-full"
              aria-label="Code preview"
              sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
              srcDoc={`<html><style>${cssCode}</style><body>${htmlCode}<script>${jsCode}</script></body></html>`}
            />
          </Space.Fill>
        </Space.BottomResizable>
      </Space.ViewPort>
    </div>
  );
}
