import React, { useState } from "react";
import "./aiAssistant.css";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import {SendSVG} from "../../comp/svgs/Svg"
import lodIcon from "../../assets/svgs/lod.svg"

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCFeOAbqo5ijRQWMIePJSARrGvY1lO_xeU";
// const API_KEY = process.env.REACT_APP_AI_DATA_API;

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "make natuer ppt" }],
      },
      {
        role: "model",
        parts: [
          {
            text: '## Title: Immerse Yourself in the Beauty and Wonder of Nature\n\n**Slide 1: Introduction**\n\n* Title: Nature: A Journey of Discovery\n* Image: Stunning landscape photograph showcasing the diversity of nature (e.g., mountains, forests, waterfalls)\n* Quote: "In every walk with nature one receives far more than he seeks." - John Muir\n\n**Slide 2: The Importance of Nature**\n\n* Provides essential resources for life: air, water, food\n* Regulates climate and weather patterns\n* Offers habitat for countless species\n* Contributes to physical and mental well-being\n* Inspires art, music, and literature\n\n**Slide 3: Exploring Different Ecosystems**\n\n* Forests: Showcase the majesty of trees, the diversity of animal life, and the importance of forest conservation.\n* Oceans: Highlight the vastness and mysteries of the underwater world, emphasizing the need for marine protection.\n* Deserts: Illustrate the unique beauty and resilience of life in arid environments.\n* Mountains: Capture the breathtaking scenery and the challenges faced by alpine species.\n\n**Slide 4: The Impact of Humans on Nature**\n\n* Pollution: Show the detrimental effects of air, water, and land pollution on ecosystems.\n* Deforestation: Discuss the consequences of deforestation on biodiversity and climate change.\n* Climate Change: Explain the causes and effects of climate change on the natural world.\n\n**Slide 5: Taking Action for Nature**\n\n* Reduce your carbon footprint: Encourage sustainable practices like using renewable energy and reducing waste.\n* Support conservation efforts: Highlight the work of organizations dedicated to protecting nature.\n* Connect with nature: Emphasize the importance of spending time outdoors and appreciating the natural world.\n* Advocate for change: Encourage individuals to speak up and demand action for environmental protection.\n\n**Slide 6: Conclusion**\n\n* Nature is a precious gift that sustains us all.\n* We have a responsibility to protect and preserve it for future generations.\n* By taking action, we can ensure a healthy and vibrant future for ourselves and the planet.\n* Closing quote: "The ultimate goal of conservation is not simply the preservation of wilderness but the preservation of the human spirit." - Edward Abbey\n\n**Additional Tips:**\n\n* Use high-quality images and videos to visually engage your audience.\n* Keep your text concise and easy to read.\n* Incorporate interactive elements, such as polls or quizzes, to keep your audience engaged.\n* Tailor your presentation to your specific audience and their interests.\n\nThis is just a basic outline. You can customize it by adding more specific information, examples, and personal touches.',
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(prompt.toString());
  const response = result.response;
  console.log(response.text());
  return response.text();
}

function AiAssistant() {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState("");
  const [lod, setLod] = useState(false);

  const handalSend = async () => {
    setLod(true)
    let ans = await runChat(query);
    setRes(ans);
    setLod(false)
  };

  function formatAiResponse(text) {
    const paragraphs = text.split("\n\n");
    
    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split("\n");
      
      return (
        <div key={index}>
          {lines.map((line, index) => {
            if (line.startsWith("##")) {
              return <h1 style={{margin: "20px 0"}} key={index}>{line.substring(2)}</h1>;
            } else if (line.startsWith("**")) {
              return <h2 style={{margin: "10px 0"}} key={index}>{line.substring(2)}</h2>;
            } else if (line.startsWith("*")) {
              return <li key={index}>{line.substring(1)}</li>;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>
      );
    });
  }

  return (
    <main className="main-assistant">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            gap: "1rem"
          }}
        >
          <input 
            type="text" 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="enter topic info..."
            style={{
              width: "70%",
              fontSize: "1.2em",
              padding: "5px 20px",
              border: 0,
              borderRadius: "10px",
            }}
          />
          <button style={{background: "none", border: 0}} onClick={handalSend}><SendSVG/></button>
        </div>
        <div className="inner-container">
          {
            lod === true 
            ? <div className="lod-assis"><img src={lodIcon} alt="hello" /></div>
            : formatAiResponse(res)
          }
        </div>
      </div>
    </main>
  );
}    

export default AiAssistant;
