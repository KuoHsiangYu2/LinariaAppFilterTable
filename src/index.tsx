import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { css } from "@linaria/core";
import "./index.css";

css`
  @at-root {
    :root,
    body {
      padding: 0;
      margin: 0;
      font-family: sans-serif;
    }
    :root {
      color-scheme: light dark;
      @media (prefers-color-scheme: light) {
        background-color: #fff;
        color: #111;
      }
      @media (prefers-color-scheme: dark) {
        background-color: hsl(0deg 0% 10%);
        color: #fff;
      }
    }
    #root {
      display: grid;
      grid-template-columns: auto 1fr;
    }
    .rdg.fill-grid {
      height: 100%;
    }
    .rdg.small-grid {
      height: 300px;
    }
    .rdg.big-grid {
      height: 600px;
    }
    .rdg-cell .Select {
      max-height: 30px;
      font-size: 12px;
      font-weight: normal;
    }
  }
`;

const mainClassname = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  padding: 8px;
`;

ReactDOM.render(
  <React.StrictMode>
    <div>
      <main className={mainClassname}>
        <App />
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
