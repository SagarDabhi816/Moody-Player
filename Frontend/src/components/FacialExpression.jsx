import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import { toast } from "sonner";

const FacialExpression = ({ setSongs, isDetecting, setIsDetecting }) => {
  const videoRef = useRef();
  const maxVal = (expObject) => {
    let max = 0;
    for (let val of Object.values(expObject)) {
      if (val > max) max = val;
    }
    return max;
  };
  const detectMood = async () => {
    setIsDetecting(true);
    if (!videoRef.current) return;
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    if (!detections || !detections.length) {
      setSongs();
      toast("No Face Detected!", {
        style: {
          fontFamily: "Inter",
        },
        className: "text-[#1b1b1b]! border-red-700! rounded! shadow-sm!"
      });
      setIsDetecting(false);
    }
    const expressions = detections[0].expressions;
    const maxValue = maxVal(expressions);
    const dominantExpression = Object.keys(expressions).find(
      (key) => expressions[key] === maxValue
    );
    console.log(dominantExpression);
    // const songs = await axios.get(
    //   `${import.meta.env.VITE_API_BASE_URL}/songs?mood=${dominantExpression}`
    // );
    setIsDetecting(false);
    // setSongs(songs.data.songs);
  };

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };
    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    loadModels().then(startVideo);
  }, []);

  return (
    <div className="w-full">
      <div>
        <h2 className="font-bold text-2xl my-4">Live Mood Detection</h2>
      </div>
      <div className="relative flex">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-90 rounded aspect-video object-cover"
        ></video>
        <div className="flex flex-col items-start justify-start px-4 pt-2">
          <h3 className="font-bold text-[0.9rem]">Live Mood Detection</h3>
          <p className="text-[0.6rem] max-w-60 text-gray-500">
            Your current mood is being analyzed in real-time. Enjoy music
            tailored to your feelings.
          </p>
          <button
            className={`text-white px-3 py-1 font-semibold text-[0.6rem] rounded border-none mt-4 cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ${
              isDetecting
                ? "bg-indigo-600/70 disabled:cursor-not-allowed disabled:hover:bg-indigo-600/70"
                : "bg-indigo-600"
            }`}
            onClick={detectMood}
            disabled={isDetecting}
          >
            {isDetecting ? "Detecting..." : "Detect Mood"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacialExpression;