# Emotion Detection App using React & TensorFlow.js (face-api.js)

This project demonstrates real-time emotion detection using:

- React (Frontend UI)
- TensorFlow.js (Machine Learning in browser)
- face-api.js (Face detection & expression recognition)
- Web Camera API (Live video stream)

The application detects facial expressions from a live webcam feed and displays the dominant emotion every second.

------------------------------------------------------------

# Technology Overview

## TensorFlow.js

TensorFlow.js allows machine learning models to run directly inside the browser using JavaScript. It uses:

- WebGL for GPU acceleration
- Pretrained models
- Real-time processing

In this project, TensorFlow.js is used indirectly through face-api.js.

------------------------------------------------------------

## face-api.js

face-api.js is a JavaScript library built on top of TensorFlow.js. It provides:

- Face detection
- Face landmark detection
- Face recognition
- Face expression detection

In this project, we use:

- TinyFaceDetector (lightweight face detector)
- FaceExpressionNet (emotion recognition model)

------------------------------------------------------------

# Application Workflow

1. Load ML models
2. Start webcam
3. Capture video frames
4. Detect faces
5. Analyze facial expressions
6. Extract highest probability emotion
7. Display emotion
8. Repeat every second

------------------------------------------------------------

# Code Explanation

============================================================
1. Imports
============================================================

import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from "face-api.js";

Explanation:

- useState → Store detected emotion
- useRef → Access video DOM element directly
- useEffect → Handle lifecycle operations
- faceapi → Face detection and emotion recognition library

------------------------------------------------------------

============================================================
2. useRef for Video Element
============================================================

const videoRef = useRef();

Purpose:

useRef allows direct access to the HTML video element without re-rendering the component.

Why not use state?

Because video streams update continuously. Using state would cause unnecessary re-renders.

videoRef.current refers to the actual <video> DOM element.

------------------------------------------------------------

============================================================
3. Emotion State
============================================================

const [emotion, setEmotion] = useState("Loading...");

Purpose:

Stores the currently detected emotion.

Initial state:
"Loading..." → while models are loading.

------------------------------------------------------------

============================================================
4. First useEffect – Load Models & Start Camera
============================================================

useEffect(() => {
  async function start(){
    const MODEL_URL = "/models";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = stream;
    setEmotion("Detecting...");
  }

  start();
}, []);

This runs only once because dependency array is empty.

------------------------------------------------------------

## Step 1: Load Models

await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

Models must be stored inside the public/models folder.

tinyFaceDetector:
Fast and lightweight face detection model.

faceExpressionNet:
Classifies expressions like:
- happy
- sad
- angry
- surprised
- fearful
- disgusted
- neutral

If models are not loaded first, detection will fail.

------------------------------------------------------------

## Step 2: Start Webcam

navigator.mediaDevices.getUserMedia({ video: true })

This requests permission to access the webcam.

Returns:
A MediaStream object.

Attach stream to video element:

videoRef.current.srcObject = stream;

Now live video is displayed in the browser.

------------------------------------------------------------

============================================================
5. Second useEffect – Detect Emotion Every 1 Second
============================================================

useEffect(() => {

  const interval = setInterval(async () => {

    if(!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, 
        new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if(detections.length > 0){
      const expressions = detections[0].expressions;

      const maxEmotion = Object.keys(expressions)
        .reduce((a, b) => 
          expressions[a] > expressions[b] ? a : b
        );

      setEmotion(maxEmotion);
    }

  }, 1000);

  return () => clearInterval(interval);

}, []);

------------------------------------------------------------

## Why setInterval?

Emotion detection runs every 1 second.

Without interval:
Detection would only happen once.

With interval:
It continuously analyzes new frames.

------------------------------------------------------------

## Face Detection Logic

faceapi.detectAllFaces(videoRef.current, 
  new faceapi.TinyFaceDetectorOptions())
  .withFaceExpressions();

Breakdown:

1. detectAllFaces() → Detects faces in video frame.
2. TinyFaceDetectorOptions() → Configuration object.
3. withFaceExpressions() → Adds emotion detection.

Result format:

[
  {
    expressions: {
      happy: 0.92,
      sad: 0.01,
      neutral: 0.05,
      angry: 0.01,
      ...
    }
  }
]

Each value represents probability.

------------------------------------------------------------

## Extracting Dominant Emotion

const maxEmotion = Object.keys(expressions)
  .reduce((a, b) =>
    expressions[a] > expressions[b] ? a : b
  );

Explanation:

Object.keys(expressions) → returns array of emotion names.

Example:
["happy", "sad", "neutral", "angry"]

reduce compares values and returns the key with highest probability.

This selects the dominant emotion.

------------------------------------------------------------

## Cleanup Function

return () => clearInterval(interval);

This prevents memory leaks when component unmounts.

Without cleanup:
Multiple intervals would stack.

------------------------------------------------------------

# JSX Rendering

return (
  <div>
    <h1>Emotion Detection App</h1>

    <video 
      ref={videoRef} 
      autoPlay 
      muted 
      width="600" 
      height="450" 
    />

    <h2>Emotion: {emotion}</h2>
  </div>
)

Explanation:

- video element shows live webcam.
- emotion state updates dynamically.
- React re-renders only when emotion changes.

------------------------------------------------------------

# Full System Flow

Component Mount
    ↓
Load ML Models
    ↓
Start Webcam
    ↓
Display Video
    ↓
Every 1 Second:
    Capture Frame
    Detect Face
    Detect Expressions
    Extract Highest Probability
    Update State
    Re-render Emotion Text

------------------------------------------------------------

# Performance Notes

- TinyFaceDetector is used for speed.
- Runs entirely in browser.
- No backend required.
- GPU acceleration via WebGL.

------------------------------------------------------------

# Important Requirements

1. Models must be placed in:
   public/models

2. Browser must allow camera permission.

3. Must run on HTTPS or localhost.

------------------------------------------------------------

# Limitations

- Works best with good lighting.
- Only detects visible faces.
- One face analyzed (first detection).
- Not 100% accurate.
- High CPU usage on low-end devices.

------------------------------------------------------------

# Key Concepts Demonstrated

- TensorFlow.js in browser
- Pretrained ML model usage
- Real-time video processing
- Face detection
- Emotion classification
- useRef for DOM access
- useEffect lifecycle handling
- setInterval cleanup
- Probability comparison logic

------------------------------------------------------------

# Conclusion

This application demonstrates how to:

- Integrate machine learning inside React
- Perform real-time face detection
- Extract dominant emotion from probability scores
- Run AI models fully in the browser

It is a powerful example of combining:

React + TensorFlow.js + Computer Vision + Real-time Processing