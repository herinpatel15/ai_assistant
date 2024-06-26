import "./aiTools.css";

import React, { useState } from "react";

import data from "../../assets/data/tools.json";

function AiTools() {
  const [cssTool, setCssTool] = useState("chat");

  return (
    <main className="main-tool" style={{ flexDirection: "column" }}>
      <h1 className="tool-text gradient-text">
        Unlocking the World <br /> of AI Tools
      </h1>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          gap: "2rem",
        }}
      >
        {Object.keys(data).map((val, index) => {
          return (
            <li
              className={cssTool === val ? "tool-act" : "tool"}
              key={val}
              onClick={() => setCssTool(val)}
              style={{ fontSize: 28, cursor: "pointer" }}
            >
              {val}
            </li>
          );
        })}
      </ul>
      <div className="tool-box">
        {data[cssTool].map((val) => {

          let backgroundColor;
          let text;
          if (val.free === "Yes") {
            backgroundColor = "green";
            text = "Free";
          } else if (val.free === "limited") {
            backgroundColor = "orange";
            text = "Limited";
          } else {
            backgroundColor = "red";
            text = "Paid";
          }

          const trimpDescription = val.description.length > 60 ? val.description.substring(0, 60) + "..." : val.description;

          return (
            <div className="card">
              <img src={val.img} alt="helo" />
              <h3>{val.name}</h3>
              <p>{trimpDescription}</p>
              <p className={backgroundColor}>{text}</p>
              <a href={val.url} target="_blank">Try it</a>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AiTools;
