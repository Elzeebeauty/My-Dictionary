import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
              <footer>
                <div className="coder">
              {"This Project was coded by "}
              <a href="https://www.linkedin.com/in/wofai-martins-77537894" title="Wofai's Linkedin">
                Wofai Elizabeth Martins
                </a>
                {", "}
                <a
              href="https://github.com/Elzeebeauty/My-Dictionary"
              target="_blank"
              rel="noreferrer"
              title="Wofai's Github account"
              >
              and open-source on GitHub
              </a>
              {"."}
              </div>
              </footer>
              </div>
         );
}

