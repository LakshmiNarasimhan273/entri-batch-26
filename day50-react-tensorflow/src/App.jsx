import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from "face-api.js";

function App() {
  const videoRef = useRef(); // direct html elements access, it update the
  // visuals each and every second.
  const[emotion, setEmotion] = useState("Loading...");

  // Load Models - start Camera
  useEffect(() => {
    async function start(){
      const MODEL_URL = "/models";

      // Load models
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

      console.log("Models Loaded");

      // Start Camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      console.log("Camera Stream", stream);
      videoRef.current.srcObject = stream;
      
      setEmotion("Detecting...");

    }

    start();
  }, []);

  // Detect Emotion every 1 second
  useEffect(() => {

    const interval = setInterval(async () => {

      if(!videoRef.current) return;

      const detections = await faceapi.detectAllFaces(videoRef.current, 
        new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

        console.log(detections);

        // [
        // expressions: {
        //   happy: 1,
        //   sad: 5,
        //   neutral: 10,
        // }
        // ]

        if(detections.length > 0){
          const expressions = detections[0].expressions;
            // [1, 2, 3].reduce(a, b => a + b);
            
          const maxEmotion = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
          console.log(maxEmotion);

          setEmotion(maxEmotion);
        }

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Emotion Detection App</h1>

      <video ref={videoRef} autoPlay muted width="600" height="450" />
      <h2>Emotion: {emotion}</h2>
    </div>
  )
}

export default App