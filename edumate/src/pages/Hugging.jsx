import React, { useEffect, useState } from "react";
import { HfInference } from "@huggingface/inference";

function Hugging() {
  const [url, setUrl] = useState("");

  const hf = new HfInference("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");
  //   async function query(data) {
  //     const API_TOKEN = "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";
  //     const response = await fetch(
  //       "https://api-inference.huggingface.co/models/gpt2",

  //       {
  //         headers: { Authorization: `Bearer ${API_TOKEN}` },
  //         method: "POST",
  //         body: JSON.stringify(data),
  //       }
  //     );
  //     const result = await response.json();
  //     return result;
  //   }
  //   query("What is the national capital of India?").then((response) => {
  //     console.log(JSON.stringify(response));
  //   });
  useEffect(() => {
    async function query() {
      const blob = await hf.textToImage({
        inputs: "Horse sitting on a horse",
        model: "stabilityai/stable-diffusion-2",
        parameters: {
          negative_prompt: "blurry",
        },
      });
      console.log(blob);
      const blobUrl = URL.createObjectURL(blob);
      setUrl(blobUrl);
      // const target = "/";
      // const tab = window.open((target = "/"));
      // tab.location.href = window.URL.createObjectURL(blob);
    }
    query();
  }, []);

  return (
    <div>
      <img src={url} alt="" />
    </div>
  );
}

export default Hugging;
